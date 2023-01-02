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
