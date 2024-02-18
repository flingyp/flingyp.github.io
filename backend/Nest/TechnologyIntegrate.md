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
@Controller({ path: 'user', version: '1' })
export class UserController {
  constructor(private readonly userService: UserService) {}

  // 路由版本控制
  @Version('2')
  @Get('all')
  findAll(): string {
    return '查询所有';
  }
}
```

### 无影响路由

有的控制器或路由不关心接口版本并且无论版本如何，都将具有相同的功能，为了适应这种情况，可以将版本设置为 `VERSION_NEUTRAL`

```ts
@Controller({ path: 'user', version: '1' })
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Version('2')
  @Get('all')
  findAll(): string {
    return '查询所有';
  }

  // 无影响路由，不受版本控制
  @Version(VERSION_NEUTRAL)
  @Get('find/:id')
  findOneUser(@Param('id', ParseIntPipe) id: number): string {
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
  defaultVersion: '1', // 设置全局默认版本
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
  @Cron('45 * * * * *', { name: 'Task-One' })
  handleCrom() {
    Logger.warn('定时任务每分钟的第45秒运行');
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
    Logger.warn('声明间隔，每十秒钟运行一次');
  }
}
```

## Swagger 文档集成

### 基础集成

安装：`pnpm install @nestjs/swagger swagger-ui-express`

在 `main.ts` 文件中定义并且初始化 `SwaggerModule` 类

```ts
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerOptions = new DocumentBuilder()
    .setTitle('Swagger Title')
    .setDescription('Swagger Docs Description')
    .setVersion('1.0')
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('api', app, swaggerDocument);

  await app.listen(3000);
}

bootstrap();
```

### 常用装饰器

- `@ApiProperty()` 装饰器来修饰对应 DTO 属性
- `@ApiTags()` 为控制器附加一个标签
- `@ApiOperation()` 装饰器来修饰对应的接口

注：[文档-装饰器列表](https://docs.nestjs.cn/9/openapi?id=%e8%a3%85%e9%a5%b0%e5%99%a8)

### 开启 Bearer 认证

使用 `@ApiBearerAuth()` 装饰器开启 Bearer 认证

在运行程序前，使用 `DocumentBuilder` 在基础文档里添加安全定义。

```ts
const options = new DocumentBuilder().addBearerAuth();
```

## 文件上传和静态资源访问

### 文件上传

为了处理文件上传，Nest 提供了一个内置的基于 multer 中间件包的 Express 模块。Multer 处理以 `multipart/form-data` 格式发送的数据，该格式主要用于通过 HTTP POST 请求上传文件。这个模块是完全可配置的，您可以根据您的应用程序需求调整它的行为。

为了更好的类型安全，我们来安装 Multer 的类型声明包： `pnpm install @types/multer -D`

**上传单一文件**

```ts
@Post('upload')
// file 就是上传文件的字段名 FileInterceptor 拦截器会进行文件上传的处理
@UseInterceptors(FileInterceptor('file'))
uploadFile(@UploadedFile() file: Express.Multer.File) {
  // file 是上传文件成功后返回的相关文件信息，可以进行数据库的数据存储后返回给用户相应地址
  console.log(file);
}
```

**上传多文件**：使用 `FilesInterceptor()` 拦截器

**模块配置**：在文件上传的模块中进行文件上传配置

注：更多细节配置参考 [multer 文档](https://github.com/expressjs/multer#multeropts)

```ts
imports: [
  MulterModule.register({
    storage: diskStorage({
      // 配置文件上传后的文件夹路径
      // destination 也可以是一个函数 来自定义逻辑 根据文件信息来决定存放的路径
      destination: `./public/images`,
      filename: (req, file, cb) => {
        // 在此处自定义保存后的文件名称
        const filename = `${Date.now()}.${file.mimetype.split('/')[1]}`;
        return cb(null, filename);
      },
    }),
  }),
],
```

### 静态资源访问

在 `main.ts` 文件中进行配置

```ts
// 静态文件的访问配置
const rootDir = join(__dirname, '..');
app.use('/public', express.static(join(rootDir, 'public')));
```
