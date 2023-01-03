---
outline: deep
---

# 相关使用

## Controller

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

## Provider

**Provider** 是 Nest 的一个基础概念。 通过 `@Injectable()` 进行修饰的类。主要思想是它可以注入依赖关系，意味着类之间可以彼此创建关系

## Module

`@Module()` 修饰符接受一个对象，该对象的属性描述模块如下

- **providers**: 提供本模块的相关服务，可以供本模块控制器或其他服务使用
- **controllers**: 注册本模块的控制器
- **imports**: 导入其他模块，供本模块使用
- **exports**: 导出本模块的相关服务，其他模块通过 **imports** 引入本模块后就可以使用 **exports** 中注册的服务

## Typeorm

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

- https://typeorm.bootcss.com/repository-api
