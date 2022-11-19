# 工具类型

## `Partial<Type>`

`Partial<Type>` 构造一个将 Type 类型中的所有属性变成可选属性

```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TestPartialType = Partial<Todo>;

// 转换为如下类型
type TestPartialType = {
  title?: string | undefined;
  description?: string | undefined;
  completed?: boolean | undefined;
};
```

**实现源码：**

```ts
// keyof T 获取类型T的所有Key组成一个联合类型
type CustomPartialType<T> = {
  [K in keyof T]?: T[K];
};
```

## `Required<Type>`

`Required<Type>` 构造一个将 Type 类型中的所有属性变成必须属性

```ts
interface Todo {
  title?: string;
  description: string;
  completed?: boolean;
}

type TestRequiredType = Required<Todo>;

// 转换为如下类型
type TestRequiredType = {
  title: string;
  description: string;
  completed: boolean;
};
```

**实现源码：**

```ts
type CustomRequiredType<T> = {
  [K in keyof T]-?: T[K];
};
```

## `Readonly<Type>`

`Readonly<Type>` 构造一个将 Type 类型中所有属性是只读属性的类型

```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TestReadonlyType = Readonly<Todo>;

// 转换为如下类型
type TestReadonlyType = {
  readonly title: string;
  readonly description: string;
  readonly completed: boolean;
};
```

**实现源码：**

```ts
type CustomReadonlyType<T> = {
  readonly [K in keyof T]: T[K];
};
```

## `Record<Keys, Type>`

`Record<Keys, Type>` 构造一个对象类型，属性键为 Keys，属性值为 Type

```ts
interface CatInfo {
  age: number;
  breed: string;
}
type CatName = "miffy" | "boris" | "mordred";

type TestRecordType = RecordType<CatName, CatInfo>;

// 转换为如下类型
type TestRecordType = {
  miffy: CatInfo;
  boris: CatInfo;
  mordred: CatInfo;
};
```

**实现源码：**

```ts
type CustomRecordType<K extends keyof any, V> = {
  [P in K]: V;
};
```

## `Pick<Type, Keys>`

`Pick<Type, Keys>` 从 Type 选择一组属性，来构造一个新的类型

```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TestPickType = Pick<Todo, "title" | "description">;

// 转换为如下类型
type TestPickType = {
  title: string;
  description: string;
};
```

**实现源码：**

```ts
type CustomPickType<T extends object, K extends keyof T> = {
  [P in K]: T[P];
};
```

## `Omit<Type, Keys>`

`Omit<Type, Keys>` 和 `Pick<Type，keys>` 则是相反，删除一组 Type 存在的属性，来构造一个新的类型

```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TestOmitType = Omit<Todo, "completed" | "description">;

// 转换为如下类型
type TestOmitType = {
  title: string;
};
```

**实现源码：**

```ts
type CustomOmitType<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};
```

## `Exclude<UnionType, ExcludeMembers>`

`Exclude<UnionType, ExcludeMembers>` 从联合类型 UnionType 中排除指定成员 ExcludeMembers

```ts
type TestExcludeType = Exclude<string | number, number>;

// 转换为如下类型
type TestPartialType = string;
```

**实现源码：**

```ts
// 想象成联合类型的每一个类型都会进一遍这个三元表达式，因此来进行判断
type CustomExcludeType<T extends keyof any, K extends T> = T extends K
  ? never
  : T;
```

## `Extract<Type, Union>`

`Extract<Type, Union>` 从联合类型 Type、Union 中提取共有的类型来构造一个新的类型

```ts
type TestExtractType = Extract<"a" | "b" | "c", "a" | "b" | "d" | "f">;

// 转换为如下类型
type TestExtractType = "a" | "b";
```

**实现源码：**

```ts
type CustomExtractType<T, K> = T extends K ? T : never;
```

## `NonNullable<Type>`

`NonNullable<Type>` 排除类型 Type 中的 null 和 undefined 构造一个新的类型

```ts
type TestNonNullableType = CustomNonNullableType<
  string | number | undefined | null
>;

// 转换为如下类型
type TestNonNullableType = string | number;
```

**实现源码：**

```ts
type CustomNonNullableType<T> = T extends null | undefined ? never : T;
```

## `Parameters<Type>`

`Parameters<Type>` 从函数类型 Type 的参数中使用的类型 构造一个元组类型

```ts
declare function f1(arg: { a: number; b: string }): void;

type TestParametersType = Parameters<(s: string, b: number) => any>;

// 转换为如下类型
type TestParametersType = [s: string, b: number];
```

**实现源码：**

```ts
// infer X 类型推断 假设为X类型的意思
type CustomParametersType<T extends (...args: any[]) => any> = T extends (
  ...args: infer X
) => any
  ? X
  : never;
```

## `ConstructorParameters<Type>`

`ConstructorParameters<Type>` 获取类构造函数的参数的类型

先看看研究如何去对类的静态、动态部分进行类型约束

参考一下官方文档的讲解 [官方文档](https://www.typescriptlang.org/docs/handbook/interfaces.html#class-types)

```ts
// 对类的静态部分 构造函数、静态变量、静态方法等进行约束
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
  currentTime: Date;
}

// 对类想实例部分进行约束
interface ClockInterface {
  tick(): void;
}

// 实现类接口对类的静态部分、实例部分约束写法：
const Clock: ClockConstructor = class Clock implements ClockInterface {
  constructor(h: number, m: number) {}
  static currentTime: Date = new Date();
  tick() {
    console.log("beep beep");
  }
};

let clock = new Clock(12, 17);
```

```ts
// TS自带全局接口
// interface ErrorConstructor {
//   new(message?: string): Error;
//   (message?: string): Error;
//   readonly prototype: Error;
// }
type TestConstructorParametersType = ConstructorParameters<ErrorConstructor>;

// 转换为如下类型
type TestConstructorParametersType = [message?: string | undefined];
```

**实现源码：**

```ts
type CustomConstructorParametersType<
  T extends abstract new (...args: any) => any
> = T extends abstract new (...args: infer P) => any ? P : never;
```

## `ReturnType<Type>`

`ReturnType<Type>` 构造一个返回函数类型 T 的返回值的类型

```ts
declare function f1(): { a: number; b: string };

type TestReturnType = ReturnType<typeof f1>;

// 转换为如下类型
type TestReturnType = {
  a: number;
  b: string;
};
```

**实现源码：**

```ts
type CustomReturnType<T extends () => any> = T extends () => infer X
  ? X
  : never;
```

## `InstanceType<Type>`

`InstanceType<Type>` 返回 Type 类 的实例部分的类型

```ts
// 对类的静态部分 构造函数、静态变量、静态方法等进行约束
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
  currentTime: Date;
}

// 对类想实例部分进行约束
interface ClockInterface {
  tick(): void;
}

// 实现类接口对类的静态部分、实例部分约束写法：
const Clock: ClockConstructor = class Clock implements ClockInterface {
  constructor(h: number, m: number) {}
  static currentTime: Date = new Date();
  tick() {
    console.log("beep beep");
  }
};

type TestCustomInstanceType = InstanceType<typeof Clock>;

// 转换为如下类型
type TestCustomInstanceType = ClockInterface;
```

**实现源码：**

```ts
type CustomInstanceType<T extends abstract new (...args: any) => any> =
  T extends abstract new (...args: any) => infer X ? X : never;
```

## `ThisParameterType<Type>`

`ThisParameterType<Type>` 返回函数 Type 中参数名为 this 的类型，如果没有则返回 unknown

```ts
function toHex(this: number) {
  return this.toString(16);
}

type TestThisParameterType = ThisParameterType<typeof toHex>;

// 转换为如下类型
type TestThisParameterType = number;
```

**实现源码：**

```ts
type CustomThisParameterType<T extends (this: any, ...args: any) => any> =
  T extends (this: infer X, ...args: any) => any ? X : unknown;
```

## `OmitThisParameter<Type>`

`OmitThisParameter<Type>` 将函数 Type 中函数名为 this 的类型移除，返回一个新的函数类型

```ts
function toHex(this: number) {
  return this.toString(16);
}

type TestOmitThisParameter = OmitThisParameter<typeof toHex>;

// 转换为如下类型
type TestOmitThisParameter = () => string;
```

**实现源码：**

```ts
type CustomOmitThisParameter<T extends (this: any, ...args: any) => any> =
  T extends (this: any, ...args: infer A) => infer X
    ? (...args: A) => X
    : never;
```

## `ThisType<Type>`

`ThisType<Type>` 构造一个对象中的所有函数的 this 指向类型，它只能在对象内的类型声明时使用

查看官方源码可以看到它的实现方式：`interface ThisType<T> { }` 其实我也还不理解它的具体使用场景

```ts
type Point = {
  x: number;
  y: number;
  moveBy: (dx: number, dy: number) => void;
} & ThisType<{ message: string }>;

let p: Point = {
  x: 10,
  y: 20,
  moveBy(dx, dy) {
    this; // {message:string}
  },
};
```

## 四个内置字符串工具类型

- `Uppercase<StringType>` 将字符串字母全部大写
- `Lowercase<StringType>` 将字符串字母全部小写
- `Capitalize<StringType>` 将字符串首字母都大写
- `Uncapitalize<StringType>` 将字符串首字母都小写
