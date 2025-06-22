# Zod - TypeScript 优先的方案验证与静态类型推断

Zod 是一个以 TypeScript 为首的模式验证库，同时具备静态类型推断功能。它的设计理念是"一次定义，无处不在"，让你只需定义一次验证器，就能在整个应用中获得完全类型安全的数据。

## 核心特性

- **TypeScript 优先**: Zod 的 API 设计紧密围绕 TypeScript，提供了最佳的开发体验和类型安全。
- **零依赖**: 作为一个独立的库，它不会给你的项目带来额外的依赖负担。
- **轻量级**: 核心库压缩后仅有 `2kb`，对项目体积影响极小。
- **不可变性**: Zod 的 API 方法（如 `.optional()`）返回的是一个新的实例，保证了原始 schema 的不可变性。
- **强大的功能**: 支持从简单的字符串、数字到复杂的嵌套对象、数组、元组、联合类型等的验证。
- **开箱即用的类型推断**: 能够从你的 schema 中自动推断出静态 TypeScript 类型。
- **JSON Schema 转换**: 内置了将 Zod schema 转换为 JSON Schema 的功能。

## 安装

你可以通过 npm, yarn, pnpm 或 bun 来安装 Zod：

```bash
npm install zod
# or
yarn add zod
# or
pnpm add zod
# or
bun add zod
```

## 基本用法

使用 Zod 的第一步是定义一个 schema。

### 1. 定义 Schema

让我们从一个简单的用户 schema 开始：

```typescript
import { z } from 'zod';

const UserSchema = z.object({
  username: z.string().min(3, { message: '用户名至少需要3个字符' }),
  email: z.string().email({ message: '无效的邮箱地址' }),
  age: z.number().optional(),
});
```

在这个例子中，我们定义了一个 `UserSchema`：

- `username` 是一个字符串，并且最小长度为3。
- `email` 是一个字符串，并且必须是有效的邮箱格式。
- `age` 是一个可选的数字。

### 2. 解析数据

定义好 schema 后，你可以使用 `.parse()` 方法来验证数据。如果数据有效，Zod 会返回一个经过验证且类型安全的深拷贝副本。

```typescript
const validData = {
  username: 'johndoe',
  email: 'john.doe@example.com',
};

const user = UserSchema.parse(validData);
console.log(user); // { username: 'johndoe', email: 'john.doe@example.com' }

// user.username 可以被 TypeScript 正确推断为 string
```

如果验证失败，`.parse()` 方法会抛出一个 `ZodError` 异常。

### 3. 错误处理

对于错误处理，你有两种主要方式。

#### a) 使用 `try...catch`

你可以用 `try...catch` 块来捕获 `ZodError`。

```typescript
const invalidData = {
  username: 'jo',
  email: 'not-an-email',
};

try {
  UserSchema.parse(invalidData);
} catch (err) {
  if (err instanceof z.ZodError) {
    // `err.issues` 是一个包含了详细错误信息的数组
    console.log(err.issues);
    /*
    [
      {
        "code": "too_small",
        "minimum": 3,
        "type": "string",
        "inclusive": true,
        "exact": false,
        "message": "用户名至少需要3个字符",
        "path": ["username"]
      },
      {
        "validation": "email",
        "code": "invalid_string",
        "message": "无效的邮箱地址",
        "path": ["email"]
      }
    ]
    */
  }
}
```

#### b) 使用 `.safeParse()`

如果你不想使用 `try...catch`，`.safeParse()` 是一个更好的选择。它返回一个对象，该对象包含一个 `success` 字段。

- 如果 `success` 为 `true`，对象还会包含一个 `data` 字段，其中是验证通过的数据。
- 如果 `success` 为 `false`，对象还会包含一个 `error` 字段，其中是 `ZodError` 的实例。

```typescript
const result = UserSchema.safeParse(invalidData);

if (!result.success) {
  // `result.error` 是 ZodError 实例
  console.log(result.error.flatten());
  /*
  {
    "fieldErrors": {
      "username": ["用户名至少需要3个字符"],
      "email": ["无效的邮箱地址"]
    },
    "formErrors": []
  }
  */
} else {
  // result.data 是类型安全的数据
  console.log(result.data);
}
```

`.safeParse()` 非常适合在不中断程序流程的情况下处理验证逻辑。

### 4. 异步验证

对于需要异步操作（如数据库查询）的验证，Zod 提供了异步版本的解析方法。你可以在 `refine` 中使用 `async` 函数。

```typescript
// 假设 db 是你的数据库访问客户端
const UsernameExistsSchema = z.string().refine(
  async (username) => {
    // 假设这是一个异步检查用户名的函数
    const userExists = await db.users.find({ where: { username } });
    return !userExists;
  },
  { message: '用户名已存在' },
);

// 使用 .parseAsync() 或 .safeParseAsync()
await UsernameExistsSchema.parseAsync('newuser'); // 如果用户名不存在则成功
const result = await UsernameExistsSchema.safeParseAsync('existinguser'); // result.success 会是 false
```

### 5. 类型推断

Zod 最强大的功能之一是从 schema 自动推断 TypeScript 类型。你可以使用 `z.infer<>` 来获取 schema 对应的类型。

```typescript
type User = z.infer<typeof UserSchema>;
// `User` 类型等价于:
// {
//   username: string;
//   email: string;
//   age?: number | undefined;
// }

// 现在你可以在代码中安全地使用这个类型
function displayUser(user: User) {
  console.log(user.username);
}
```

在某些情况下，schema 的输入类型和输出类型可能不同（例如，使用 `.transform()`）。你可以分别推断输入和输出类型：

```typescript
const StringToNumberSchema = z.string().transform((val) => Number(val));

type Input = z.input<typeof StringToNumberSchema>; // string
type Output = z.output<typeof StringToNumberSchema>; // number
// z.infer 等价于 z.output
```

## 总结

Zod 提供了一种声明式的方式来定义数据结构和验证规则，并在此基础上提供了强大的静态类型推断。这使得在 TypeScript 项目中处理外部数据（如 API 响应、表单输入）变得前所未有的简单和安全。通过采用 Zod，你可以大大减少运行时的类型错误，并提高代码的健壮性和可维护性。
