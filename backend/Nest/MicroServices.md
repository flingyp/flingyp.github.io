# Nest.js 微服务

Nest支持几种内置的传输层实现，称为**传输器**。默认使用 TCP 传输层

![Microservices_1](http://nestjs.inode.club/assets/Microservices_1.png)

## 概念理解

- `@MessagePattern()`: 请求-响应传递模式，适用于服务之间互相交换消息
- `@EventPattern()`: 事件消息传递模式，适用于单方面通知服务处理

## 搭建一个微服务

### 创建微服务

创建项目`nest new microServiceName`，在安装构建微服务需要的包 `@nestjs/microservices`

在微服务项目 `main.ts` 中创建一个微服务实例，并启动它

```ts
async function bootstrap() {
  // 创建一个APP微服务实列
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        port: 8888,
      },
    },
  );
  app.listen();
}
bootstrap();
```

### 创建微服务模块

在 `Controller` 中可以通过 `@MessagePattern`、`@EventPattern` 装饰器来定义微服务的路由

```ts
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('sum')
  sum(numArr: Array<number>): Record<string, any> {
    return {
      value: numArr.reduce((total, item) => total + item, 0),
      message: this.appService.getHello(),
    };
  }

  @EventPattern('log')
  log(str: string) {
    console.log(str);
  }
}
```

### 注册并使用微服务

在主服务注册对应微服务 `app.modules.ts` 并且调用对应方法

```ts
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER_SERVICE',
        transport: Transport.TCP,
        options: {
          port: 8888,
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

```ts
@Controller()
export class AppController {
  // 注入微服务实例
  @Inject('USER_SERVICE')
  private userClient: ClientProxy;

  constructor(private readonly appService: AppService) {}

  @Get('sum')
  sumValue(@Query('num') str) {
    // @EventPattern
    this.userClient.emit('log', '求和');

    // @MessagePattern
    const numArr = str.split(',').map((item) => parseInt(item));
    const result = this.userClient.send('sum', numArr) as Record<string, any>;

    return result;
  }
}
```
