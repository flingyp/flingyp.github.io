# 环境变量配置

## `@nestjs/config` 配置环境变量

安装：`pnpm add @nestjs/config`

安装：`pnpm add cross-env -D`

### 配置

在根模块需要导入 `ConfigModule` 模块

```ts
import configuration from './config/configuration';

@Module({
  imports: [
    /* 什么都没有配置，会默认解析根目录下的 `.env` 文件 */
    ConfigModule.forRoot({
        /* envFilePath 可以指定配置文件路径（如果在多个文件中发现同一个变量，则第一个变量优先） */
        envFilePath: ['.env.development.local', '.env.development']
        /* 如果想在其他模块使用 ConfigModule模块时，可以将其声明为全局模块 */
        isGlobal: true
        /* 对于复杂的项目，可以利用自定义配置文件返回嵌套的配置对象。自定义配置文件导出一个工厂函数，该函数返回一个配置对象。配置对象可以是任意嵌套的普通 JavaScript 对象 */
        load: [configuration]
    }),
  ],
})
```

### 访问环境变量

自定义配置文件

```ts
// config/configuration.ts
export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  },
});
```

`ConfigModule` 注册一个 `ConfigService` ，并将其导出为在其他消费模块中可见。可以使用 `ConfigService` 来访问环境变量。所以第一步我们需要导入模块、第二步注入服务、第三步使用服务来访问

导入模块

```ts
// xxx.modules.ts
@Module({
  imports: [ConfigModule],
})
```

注入服务

```ts
// xxx.service.ts
constructor(private configService: ConfigService) {}
```

访问环境变量

```ts
this.configService.get<string>("XXX_XXX");
```

### 在 `main.ts` 文件中访问环境变量

```ts
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 获取 ConfigService 服务
  const configService = app.get(ConfigService);
  // 获得环境变量参数
  const DEFAULT_PORT = configService.get("port");
  await app.listen(DEFAULT_PORT);
}
```

## `cross-env` 环境区分

`cross-env` 是一个运行跨平台设置和使用环境变量的脚本

如何使用

```json
{
  "start:dev": "cross-env NODE_ENV=development nest start --watch",
  "start:debug": "cross-env NODE_ENV=debug nest start --debug --watch",
  "start:prod": "cross-env NODE_ENV=production node dist/src/main"
}
```

之后我们就可通过 `process.env.NODE_ENV` 访问到了

## 使用 `Yaml` 配置文件

安装：`pnpm add yaml`
