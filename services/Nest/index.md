# Nest.js

## 官方介绍

Nest 是一个用于构建高效，可扩展的 Node.js 服务器端应用程序的框架。它使用渐进式 JavaScript，内置并完全支持 TypeScript（但仍然允许开发人员使用纯 JavaScript 编写代码）并结合了 OOP（面向对象编程），FP（函数式编程）和 FRP（函数式响应编程）的元素。

在底层，Nest 使用强大的 HTTP Server 框架，如 Express（默认）和 Fastify。Nest 在这些框架之上提供了一定程度的抽象，同时也将其 API 直接暴露给开发人员。这样可以轻松使用每个平台的无数第三方模块。

## 安装

Nest 官方提供了一个脚手架工具，帮助开发者快速构建项目

安装脚手架工具：`npm i -g @nestjs/cli`

构建项目：`nest new project-name`

## 相关文件介绍

### main.ts

```ts
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  // 通过 NestFactory 提供的 create 方法来给创建一个App工厂
  // AppModule 属于主模块
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
```

### app.modules.ts

```ts
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

### app.controller.ts

Controller 路由控制器

```ts
import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
```

### app.service.ts

Service 提供服务

```ts
import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World!";
  }
}
```

## 相关概念

### 控制器 Controller

控制器负责处理传入的请求和向客户端返回响应

控制器的目的是接收应用的特定请求。路由机制控制哪个控制器接收哪些请求。通常，每个控制器有多个路由，不同的路由可以执行不同的操作

为了创建一个基本的控制器，我们使用类和装饰器。装饰器将类与所需的元数据相关联，并使 Nest 能够创建路由映射（将请求绑定到相应的控制器）

使用 `@Controller()` 装饰器定义一个基本的控制器

### 提供器 Providers

Providers 是 Nest 的一个基本概念。许多基本的 Nest 类可能被视为 Provider

Provider 只是一个用 `@Injectable()` 装饰器注释的类

### 模块 Module

模块是具有 `@Module()` 装饰器的类。 `@Module() ` 装饰器提供了元数据，Nest 用它来组织应用程序结构。

每个 Nest 应用程序至少有一个模块，即根模块。根模块是 Nest 开始安排应用程序树的地方。

事实上，根模块可能是应用程序中唯一的模块，特别是当应用程序很小时，但是对于大型程序来说这是没有意义的。在大多数情况下，您将拥有多个模块，每个模块都有一组紧密相关的功能。

`@module()` 装饰器接受一个描述模块属性的对象

```
provides：将本模块的服务提供出来，并且本模块的其他服务可以使用
controllers：注册该模块所使用到的控制器
imports：注册本模块所需要使用到的其他模块
exports：注册本模块可以提供给其他模块的服务
```

### 中间件 Middleware

中间件是在路由处理程序 之前 调用的函数。 中间件函数可以访问请求和响应对象，以及应用程序请求响应周期中的 next() 中间件函数。 next() 中间件函数通常由名为 next 的变量表示。

### 异常过滤器

Nest 提供了一个内置的 **HttpException** 类

HttpException 构造函数有两个必要的参数来决定响应:

- response 参数定义 JSON 响应体。它可以是 string 或 object，如下所述。
- status 参数定义 HTTP 状态代码

我们也可以自己去自定义异常类，只要继承 HttpException 这个基类即可

虽然基本（内置）异常过滤器可以为您自动处理许多情况，但有时您可能希望对异常层拥有完全控制权。所以开发中也是有必要去定义自己的异常过滤器来捕获 Nest 的异常并自定义的做出响应。[参考文档](https://docs.nestjs.cn/9/exceptionfilters)

### 管道 Pipe

管道是具有 `@Injectable()` 装饰器的类。管道应实现 PipeTransform 接口

管道有两个典型的应用场景：

- 转换：管道将输入数据转换为所需的数据输出(例如，将字符串转换为整数)
- 校验：对输入数据进行验证，如果验证成功继续传递; 验证失败则抛出异常

在这两种情况下, 管道 参数(arguments) 会由 控制器(controllers)的路由处理程序 进行处理。Nest 会在调用这个方法之前插入一个管道，管道会先拦截方法的调用参数,进行转换或是验证处理，然后用转换好或是验证好的参数调用原方法

Nest 也内置了开箱即用的管道，我们还可以构建自定义管道

### 守卫 Guard

守卫是一个使用 `@Injectable()` 装饰器的类。 守卫应该实现 `CanActivate` 接口

一般可以使用控制守卫来进行请求的 Token 校验以及接口权限设置

### 拦截器 Interceptor

拦截器是使用 `@Injectable()` 装饰器注解的类。拦截器应该实现 `NestInterceptor` 接口

- 可以在请求之前/之后绑定额外的逻辑
