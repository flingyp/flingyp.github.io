---
outline: deep
---

# 相关使用

## Controller 控制器

通过 `@Controller` 修饰器在修饰一个类

- `@Get`、`@Post`、`@Patch`、`@Delete` 修饰器来声明一个请求方法

- `@Req() request: Request` 获取当前的 **Request**

- `@Res() response: Response` 获取当前的 **Response**

- `@Param(key?: string)`

```ts
@Get('demo/:id/:td')
findAll(@Param('id') id: string, @Param('td') td: string) {
    // demo/2/3
    console.log(id); // 2
    console.log(td); // 3
    return 'Hello World';
}
```

- `@Body(key?: string)`

- `@Query(key?: string)`

- `@Headers(name?: string)`

- `@Ip()`

- `@HostParam()`

- `@HttpCode(200)` 请求默认返回状态码是 200 但 Post 请求默认返回状态码是 201

- `@Redirect(url, statusCode = 302)` 重定向路由到指定 URL 上

## Provider 提供者

**Provider** 是 Nest 的一个基础概念。 通过 `@Injectable()` 进行修饰的类。主要思想是它可以注入依赖关系，意味着类之间可以彼此创建关系

### 注册提供者

现在我们已经定义了提供者 Services，并且已经有了该服务的使用者 Controller，我们需要在 Nest 中注册该服务，以便它可以执行注入。 为此，我们需要在模块文件中，然后将服务添加到`@Module()`装饰器的 `providers` 数组中。

```ts
import { Module } from "@nestjs/common";

@Module({
  controllers: [XXXController],
  providers: [XXXService], // 注册提供者的入口
})
export class AppModule {}
```

## Module 模块

### 参数介绍

`@Module()` 修饰符接受一个对象，该对象的属性描述模块如下

- **providers**: 提供本模块的相关服务，可以供本模块控制器或其他服务使用
- **controllers**: 注册本模块的控制器
- **imports**: 导入其他模块，供本模块使用
- **exports**: 导出本模块的相关服务，其他模块通过 **imports** 引入本模块后就可以使用 **exports** 中注册的服务

### 共享模块

实际上，每个模块都是一个共享模块。一旦创建就能被任意模块重复使用。假设你希望将某个模块下的服务提供给其他模块使用，那么我们需要将服务添加到 `@Module()`装饰器的`exports`数组中。那么其他模块在引入本模块后就可以进行依赖注入使用服务了

```ts
import { Module } from "@nestjs/common";

@Module({
  controllers: [XXXController],
  providers: [XXXService],
  exports: [XXXService],
})
export class XXXModule {}
```

### 全局模块

`@Global` 装饰器使模块成为全局作用域。 全局模块应该只注册一次，最好由根或核心模块注册。

```ts
import { Module, Global } from "@nestjs/common";
import { CatsController } from "./cats.controller";
import { CatsService } from "./cats.service";

@Global()
@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService],
})
export class CatsModule {}
```

在上面的例子中，CatsService 组件将无处不在，而想要使用 CatsService 的模块则不需要在 imports 数组中导入 CatsModule。

## Middleware 中间件

中间件是在路由处理程序 之前 调用的函数。 中间件函数可以访问请求和响应对象，以及应用程序请求响应周期中的 next() 中间件函数。

## ExceptionFilter 异常过滤器

内置的异常层负责处理整个应用程序中的所有抛出的异常。当捕获到未处理的异常时，最终用户将收到友好的响应。

### 基础异常类

Nest 内置了一个 `HttpException` 基础异常类。我们可以通过 `throw` 在特定情况下来抛出异常

```ts
@Get()
async findAll() {
  // HttpStatus 内置相关错误状态码
  throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
}
```

### 内置 HTTP 异常类

- `BadRequestException`
- `UnauthorizedException`
- `NotFoundException`
- `ForbiddenException`
- `NotAcceptableException`
- `RequestTimeoutException`
- `ConflictException`
- `GoneException`
- `PayloadTooLargeException`
- `UnsupportedMediaTypeException`
- `UnprocessableException`
- `InternalServerErrorException`
- `NotImplementedException`
- `BadGatewayException`
- `ServiceUnavailableException`
- `GatewayTimeoutException`

### 异常过滤器

异常过滤器，它负责捕获作为 `HttpException` 类实例的异常，并为它们设置自定义响应逻辑。

## Pipe 管道

管道有两个典型的应用场景:

- 转换：管道将输入数据转换为所需的数据输出(例如，将字符串转换为整数)
- 验证：对输入数据进行验证，如果验证成功继续传递; 验证失败则抛出异常

### 内置管道

- `ValidationPipe`
- `ParseIntPipe`
- `ParseFloatPipe`
- `ParseBoolPipe`
- `ParseArrayPipe`
- `ParseUUIDPipe`
- `ParseEnumPipe`
- `DefaultValuePipe`
- `ParseFilePipe`

### 绑定转换管道

```ts
@Get(':id')
async findOne(@Param('id', ParseIntPipe) id: number) {
  return this.catsService.findOne(id);
}
```

### 类验证器

类验证器是验证管道的一种实现方式

安装： `pnpm install class-validator class-transformer`

通过提供的装饰器来进行属性验证

```ts
import { IsString, IsInt } from "class-validator";

export class CreateCatDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsString()
  breed: string;
}
```

<!-- ## Typeorm

### 编写一个 CURD 最基本流程

编写实体类

```ts
@Entity()
export class DemoXxx {}
```

**app.module.ts**: 注册实体类给 Typeorm

```ts
imports: [
  TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "test",
    entities: [DemoXxx], // 注册实体类
    synchronize: true,
  }),
];
```

**demoXxx.module.ts**: 需要给使用实体类的模块引入该实体类

```ts
@Module({
  imports: [TypeOrmModule.forFeature([DemoXxx])], // 引入实体类
})
```

**demoXxx.service.ts**: 在需要使用的控制器中使用实体类

```ts
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(DemoXxx) private demoXxxRepository: Repository<DemoXxx>
  ) {}

  create(createUserDto: CreateUserDto) {
    return "This action adds a new user";
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
```

### 实体类

- `@PrimaryGeneratedColumn('uuid')` 通过此修饰器来声明一个主键

- `@CreateDateColumn()` 是一个特殊列，自动为实体插入日期。无需设置此列，该值将自动设置

- `@UpdateDateColumn()` 是一个特殊列，在每次调用实体管理器或存储库的 Save 方法时，自动更新实体日期。无需设置此列，该值将自动设置

- `@Column(type: SpatialColumnType, options?: ColumnCommonOptions & SpatialColumnOptions)` 其他列，通过此修饰器来声明

  - `options.select` 指示查询操作，是否需要将此字段查询并返回（默认 true）
  - `options.nullable` 能否设置为空
  - `options.defualt` 默认值
  - `options.comment` 字段注释说明
  - `options.name` 字段名
  - 更详细参考文档：https://typeorm.bootcss.com/entities#%E5%88%97%E9%80%89%E9%A1%B9

### 相关方法操作

#### `find(options)`

- `options.select` 表示必须查询实体类的哪些属性
- `options.where` 查询实体的条件
- `options.order` 定义排序方式
- `options.skip` 和 `options.take` 实现分页

#### `Repository API`

相关 TypeORM 提供的 API 说明

- https://typeorm.bootcss.com/repository-api -->
