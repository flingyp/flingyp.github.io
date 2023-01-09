---
outline: deep
---

# 技术集成

## API 多版本

- [参考文档](https://docs.nestjs.cn/9/techniques?id=api-%e5%a4%9a%e7%89%88%e6%9c%ac)

以 HTTP 构建的应用程序。接口版本可以在同一个应用程序中的控制器或者路由层面支持 不同的版本。 应用程序经常更改，在仍然需要支持以前版本的应用程序的同时，需要进行重大更改的情况并不少见。

一般都是默认使用 **URI 版本类型**，在请求地址中标识当前版本。比如：`https://example.com/v1/route` 或 `https://example.com/v2/route`

### 开启 URI 版本类型

`main.ts` 文件中开启 URI 版本类型

```ts
app.enableVersioning({
  type: VersioningType.URI,
});
```

### 版本控制

**控制器版本控制**: 我们可以给控制器版本下的路由进行所有的版本控制

**路由版本控制**: 也可以给单独的某一个路由进行版本控制

```ts
/**
 * 控制器版本控制
 * @Controller({ path: string, version: string | string[] })
 * 可进行单独版本设置同时也可以进行多版本设置
 */
@Controller({ path: "user", version: "1" })
export class UserController {
  constructor(private readonly userService: UserService) {}

  // 路由版本控制
  @Version("2")
  @Get("all")
  findAll(): string {
    return "查询所有";
  }
}
```

### 无影响路由

有的控制器或路由不关心接口版本并且无论版本如何，都将具有相同的功能，为了适应这种情况，可以将版本设置为 `VERSION_NEUTRAL`

```ts
@Controller({ path: "user", version: "1" })
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Version("2")
  @Get("all")
  findAll(): string {
    return "查询所有";
  }

  // 无影响路由，不受版本控制
  @Version(VERSION_NEUTRAL)
  @Get("find/:id")
  findOneUser(@Param("id", ParseIntPipe) id: number): string {
    return `查询某一位学生,他的ID是${id}`;
  }
}
```

### 全局默认版本

如果你不想为每一个控制器或路由指定版本，或者你想为每一个控制器、路由指定默认的版本而不指定具体的版本号，可以设置全局默认版本

`main.ts` 文件中进行配置

```ts
app.enableVersioning({
  type: VersioningType.URI,
  defaultVersion: "1", // 设置全局默认版本
});
```

## 定时任务

定时任务允许我们按照指定的日期/时间、一定的时间间隔或一定时间后来单次执行或重复执行某一服务

安装: `pnpm install @nestjs/schedule`

在根模板下周导入 `ScheduleModule` 并运行 `forRoot()` 静态方法

```ts
@Module({
  imports: [ScheduleModule.forRoot()],
})
export class AppModule implements NestModule {}
```

### 声明计时工作

在包含要运行代码的方法定义前使用 `@Cron()` 装饰器来声明一个计时工作

```ts
@Injectable()
export class ScheduleJobService {
  // 可以设置任务名称
  @Cron("45 * * * * *", { name: "Task-One" })
  handleCrom() {
    Logger.warn("定时任务每分钟的第45秒运行");
  }
}
```

### `@Cron()` 装饰器

- 星号通配符 (也就是 \*)
- 范围（也就是 1-3,5)
- 步长（也就是 \*/2)

```bash
* * * * * *
| | | | | |
| | | | | day of week
| | | | month
| | | day of month
| | hour
| minute
second (optional)
```

- `* * * * * *`： 每秒
- `45 * * * * *`： 每分钟第 45 秒
- `30 10 * * * *`： 每小时，从第 10 分钟第 30 秒开始运行
- `30 30 9-17 _ * *`： 上午 9 点到下午 5 点之间每 30 分钟第 30 秒开始运行
- `0 30 11 * * 1-5`： 周一至周五上午 11:30

注：**@nestjs/schedule** 提供了一个枚举变量 `CronExpression`。存放着常用的一些时间通配符

### 声明时间间隔

要声明一个定时任务在指定的时间间隔内运行一次，可以使用 `@Interval()` 准备装饰器

```ts
@Injectable()
export class ScheduleJobService {
  @Interval(10000)
  handleInterval() {
    Logger.warn("声明间隔，每十秒钟运行一次");
  }
}
```
