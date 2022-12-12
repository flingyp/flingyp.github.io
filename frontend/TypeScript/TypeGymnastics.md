# 类型体操

## 00004-easy-pick

实现 TS 内置的 `Pick<T, K>`

```ts
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
```

```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoExcludeCompleted = MyPick<Todo, "title" | "description">;
```

关键点：

- `keyof` 关键字会将对象类型 T 的属性 Key 全部收集起来，组成一个联合类型
- `[P in K]` TS 中的对象类型的遍历

## 00007-easy-readonly

实现内置的 `Readonly<T>`，给每个属性都添加 `readonly`

```ts
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};
```

```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}

type ReadonlyTodo = MyReadonly<Todo>;
```

关键点：

- 在对象类型的便利前面加个 readonly 关键字

## 00011-easy-tuple-to-object

会传入一个元组类型，将这个元组类型转换为对象类型。这个对象类型的键/值都是从元组中遍历出来

```ts
type TuppleToObject<T extends readonly (string | number | symbol)[]> = {
  [key in T[number]]: key;
};
```

```ts
const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

const tupleToObject: TupleToObject<typeof tuple> = {
  tesla: "tesla",
  "model 3": "model 3",
  "model X": "model X",
  "model Y": "model Y",
};
```

关键点：

- 如果去遍历一个数字类型/元组类型： `[key in T[number]]`

## 00014-easy-first

实现一个通用`First<T>`，它接受一个数组 T 并返回它的第一个元素的类型

```ts
type First<T extends any[]> = T extends [] ? never : T[0];
```

关键点：

- TS 类型的三元表达式：`T extends Type ? Type1 : Type2;`

## 00018-easy-tuple-length

创建一个通用的 Length，接受一个 readonly 的数组，返回这个数组的长度

```ts
type Length<T extends readonly any[]> = T["length"];
```

```ts
const tesla = ["tesla", "model 3", "model X", "model Y"] as const;

type LengthTesla = Length<typeof tesla>;
```

关键点：

- 在 TS 中获取数组类型的长度方式： `T["length"]`

## 00043-easy-exclude

实现内置的`Exclude <T, U>`类型，从联合类型 T 中排除 U 的类型成员，来构造一个新的类型

```ts
type MyExclude<T, U> = T extends U ? never : T;
```

关键点：

- 联合类型的遍历： `T extends U ? Type1 : Type2` （想象成联合类型的每一个类型都会进一遍这个三元表达式，因此来进行判断）

## 00189-easy-awaited

假如我们有一个 Promise 对象，这个 Promise 对象会返回一个类型。在 TS 中，我们用 Promise 中的 T 来描述这个 Promise 返回的类型

比如：`Promise<ExampleType>`，请你返回 ExampleType 类型

```ts
type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X>
  ? X extends Promise<unknown>
    ? MyAwaited<X>
    : X
  : never;

/**
 * 代码解读
 *  1. 我们传给 MyAwaited<T> 的 T 泛型限制了 必须是 Promise 的类型，这样就解决了  type error = MyAwaited<number>; 的爆红问题
 *  2. 在根据 T 限制了必须是 Promise 类型，所以这段代码 T extends Promise<infer X> ? Type1 : Type2  是一定会走 Type1的，因此 Type2 写什么类型都无所谓
 *  3. 进入到 Type1 后，先要理解下 Infer 关键字 在 条件类型 extends 的作用， Infer 是推断的意思，意思就是 假设 Promise<T> 里的泛型的类型 是 X 类型
 *  4. 然后问 X 类型 它是不是也是 Promise 类型 如果是 则进入 MyAwaited<X> 进行递归操作
 *  5. 如果不是Promise类型，则返回这个 X 类型
 */
```

关键点

- Infer 关键字的理解使用

## 03312-easy-parameters

实现内置的 Parameters 类型，就是获取 函数泛型 T 回调函数中的 参数类型

```ts
type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer X
) => any
  ? X
  : never;
```

关键点

- Infer 关键字的理解使用
