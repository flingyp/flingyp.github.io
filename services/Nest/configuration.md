# 服务常用配置

## 全局日志打印中间件

我们可以在处理请求之前在控制台输出对应的请求信息，这时候就需要使用到我们的中间件了

```ts
// logger-middleware.ts
import { Injectable, Logger, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

const logFormatMessage = (req: Request) => {
  const logMessage = `Method: ${req.method} \n Request original url: ${
    req.url
  } \n IP: ${req.ip} \n Query params: ${JSON.stringify(
    req.query
  )} \n Body params: ${JSON.stringify(req.body)} \n`;
  Logger.log(logMessage, "LoggerMiddleware");
};

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    logFormatMessage(req);
    next();
  }
}
```

在 `app.module` 文件配置中间件

```ts
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: "*", method: RequestMethod.ALL });
  }
}
```

## 全局日志打印拦截器

同全局日志打印中间件功能一样

```ts
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable, tap } from 'rxjs';
import { useFormatDate } from '@flypeng/tool';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest<Request>();
    const startNow = useFormatDate('yyyy-MM-dd hh:mm:ss');

    Logger.log(`Request start... ${startNow}`, 'LoggingInterceptor');
    console.log(`\t\t\tRequest-URL: ${request.url}\t\t\t`);
    console.log(`\t\t\tRequest-Method: ${request.method}\t\t\t`);
    console.log(`\t\t\tRequest-Ip: ${request.ip}\t\t\t`);
    console.log(
      `\t\t\tRequest-QueryParams: ${JSON.stringify(request.query)}\t\t\t`,
    );
    console.log(`\t\t\tRequest-Body: ${JSON.stringify(request.body)}\t\t\t`);
    return next.handle().pipe(
      tap(() => {
        const endNow = useFormatDate('yyyy-MM-dd hh:mm:ss');
        Logger.log(`Request ending... ${endNow}`, 'LoggingInterceptor');
      }),
    );
  }
}
```

在 `main.ts` 配置拦截器

```ts
// 全局响应拦截器（统一返回数据格式）
app.useGlobalInterceptors(new LoggingInterceptor());
```

## 全局响应拦截器（统一返回数据格式）

```ts
import {
  CallHandler,
  ExecutionContext,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { map, Observable } from "rxjs";

/**
 * Common Response Structure
 */
export class CommonResponse {
  code = HttpStatus.OK;
  message = "操作成功";
  data = null;
  constructor(data: unknown, code?: number, message?: string) {
    this.code = code;
    this.message = message;
    this.data = data;
  }
}

/**
 * Global Response Interceptor
 */
@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((value: unknown) => {
        if (value instanceof CommonResponse) return value;
        else return new CommonResponse(value, 200, "操作成功");
      })
    );
  }
}
```

在 `main.ts` 配置拦截器

```ts
// 全局响应拦截器（统一返回数据格式）
app.useGlobalInterceptors(new TransformResInterceptor());
```

## 全局异常过滤器（统一处理异常）

```ts
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from "@nestjs/common";
import { Response } from "express";

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();
    Logger.error(exception, "Logging");
    const path = request.url;
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    const message =
      exception instanceof HttpException
        ? JSON.stringify(exception.getResponse())
        : "操作失败";

    response.header("Content-Type", "application/json; charset=utf-8");
    response.status(status).json({
      path,
      status,
      message,
      timestamp: new Date().toISOString(),
    });
  }
}
```

在 `main.ts` 配置过滤器

```ts
// 全局异常过滤器（统一处理异常请求）
app.useGlobalFilters(new HttpExceptionFilter());
```

## 用户本地认证和 Jwt 生成

### 认证

passport 是目前最流行的 node.js 认证库，它具有丰富的策略生态系统，可实施各种身份验证机制。而 @nestjs/passport 模块将该模式包装并标准化为熟悉的 Nest 构造

安装：

```bash
pnpm add @nestjs/passport passport passport-local
pnpm add @types/passport-local -D
```

主要步骤是：

1. 建立一个 `AuthModule` 、`AuthController` 和 `AuthService` 在此模块做身份认证

2. 实现 Passport 本地身份验证策略，在模块下创建一个 `local.strategy.ts` 文件

```ts
// auth/local.strategy.ts
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  // 用户身份认证逻辑
  async validate(username: string, password: string): Promise<any> {
    // 根据需求来定义认证逻辑
    const user = xxxx;
    // const user = await this.authService.validateUser(username, password);
    if (!user) throw new UnauthorizedException();
    return user;
  }
}
```

3. 将 **PassportModule**、**LocalStrategy** 服务在 `AuthModule` 中进行提供出来以供其他服务使用

```ts
@Module({
  imports: [UsersModule, PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
```

4. 在登录接口注入一个控制守卫，并应用内置的守卫来启动 `Passport-local` 流

```ts
@UseGuards(AuthGuard('local')) // 添加守卫
@Post('login')
async login(@Body() loginAccountDto: LoginAccountDto, @Req() request) {
  // Passport 根据从 validate() 方法返回的值自动创建一个 user 对象，并将其作为 request.user 分配给请求对象，之后再去介入JWT
  return request.user
  // return this.authService.createToken(request.user as SysAccountEntity);
}
```

## 生成 JWT

1. 安装

```bash
pnpm add @nestjs/jwt passport-jwt
pnpm add @types/passport-jwt -D
```

2. 接着上面认证部分，在 `AuthService` 可编写生成 Token 的代码

```ts
@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      // jwtService.sign() 用于生成一个 Token
      access_token: this.jwtService.sign(payload),
    };
  }
}
```

3. 同时需要在 `auth.module.ts` 文件去配置 `JwtModule` 模块

```ts
// auth/constant.ts
export const jwtConstants = {
  secret: "secretKey", // 签名秘钥
};
```

```ts
// auth/auth.module.ts
@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret, // 秘钥
      signOptions: { expiresIn: "60s" }, // 设置过期时间
    }),
  ],
  providers: [AuthService, LocalStrategy],
  exports: [AuthService],
})
export class AuthModule {}
```

4. 修改认证时的登录接口

```ts
@UseGuards(AuthGuard('local'))
@Post('auth/login')
async login(@Request() req) {
  // LocalStrategy 认证逻辑通过后，就会走到这来
  return this.authService.login(req.user);
}
```

## 实施 JWT

通过要求在请求时提供有效的 JWT 来保护我们的接口

1. 创建一个 `JwtStrategy` JWT 认证策略，实现 validate 逻辑来校验 Token 的有效性

```ts
// auth/jwt.strategy.ts

@Injectable()
export class JwtStorageStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    // 请求头 携带Token，格式如下
    // Authorization: Bearer xxxx
    // 只用接口携带了 @UseGuards(AuthGuard('jwt'))的守卫 都是需要Token的
    // 它会自动去解析请求头携带的Token，
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtConstants.secret,
    } as StrategyOptions);
  }

  /**
   * 校验Token的有效性
   * @param token
   * @returns
   */
  async validate(token: any) {
    const existUser = await this.authService.findAccountById(token.sub);
    if (!existUser) return new UnauthorizedException("token无效!");
    return existUser;
  }
}
```

2. 在 `AuthModule` 模块中提供服务，供其他模块使用

```ts
@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret, // 秘钥
      signOptions: { expiresIn: "60s" }, // 设置过期时间
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStorageStrategy], // 新增服务
  exports: [AuthService],
})
export class AuthModule {}
```

3. 对应需要登录后才可访问的路由，我们就可以添加对应守卫

```ts
@UseGuards(AuthGuard('jwt')) // 添加守卫来保护路由
@Get('profile')
getProfile(@Request() req) {
  return req.user;
}
```

## RBAC 权限

相对认证部分来说并不很很难，但也比较麻烦需要配置数据库

具体如何配置可参照 [文档](https://docs.nestjs.cn/9/security?id=%e6%9d%83%e9%99%90%ef%bc%88authorization%ef%bc%89)

## CORS 跨资源贡献

处理浏览器跨域问题，必须调用 `enableCors()` 方法开启跨域

```ts
const app = await NestFactory.create(AppModule);
// 开启跨域
app.enableCors();
await app.listen(3000);
```

## CSRF 保护

跨站点请求伪造（称为 CSRF 或 XSRF）是一种恶意利用网站，其中未经授权的命令从 Web 应用程序信任的用户传输

安装：

```ts
pnpm add csurf
```

配置为全局中间件

```ts
import * as csurf from "csurf";
const app = await NestFactory.create(AppModule);
app.use(csurf());
await app.listen(3000);
```
