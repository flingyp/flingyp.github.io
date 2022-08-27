---
title: TypeScript
tags:
  - TypeScript
categories:
  - 记录学习-成长
---

# TypeScript

## 什么是 TypeScript

### 简介

加强版的 JavaScript，添加了类型系统

JavaScript 是一门弱类型语言，它弱化了对一切变量的类型，是一门非常灵活的编程语言

- 它没有类型约束，一个变量可能初始化时是字符串，过一会儿又被赋值为数字。
- 由于隐式类型转换的存在，有的变量的类型很难在运行前就确定。
- 基于原型的面向对象编程，使得原型上的属性或方法可以在运行时被修改。
- 函数是 JavaScript 中的一等公民，可以赋值给变量，也可以当作参数或返回值。

而 TypeScript 的类型系统，在很大程度上弥补了 JavaScript 的缺点

类型系统按照「类型检查的时机」来分类，可以分为**动态类型和静态类型**，**TypeScript 是静态类型**

### 动态类型与静态类型

动态类型是指在运行时才会进行类型检查，这种语言的类型错误往往会导致运行时错误，**JavaScript 是一门解释性语言，没有编译阶段，所以它是动态类型。**

```js
/**
 * 动态类型 JavaScript
 */
const num = 10;
num.push(2);
```

上面的代码 num 是一个数字，但是却调用了数组的 push 方法，但是编译器并不会提示你这个错误，只有再运行这个文件时告诉你 `num.push is not a function`

**TypeScript 是一个静态类型。**指编译阶段就能确定每个变量的类型，这种语言的类型错误往往会导致语法错误。TypeScript 在运行前需要先编译为 JavaScript，而在编译阶段就会进行类型检查

```typescript
/**
 * 静态类型 TypeScript
 */
const num = 10;
num.push(2);
```

上面的代码，使用 TypeScript 时，再编译器就会提示你 `类型“10”上不存在属性“push”`。

### 强类型和弱类型

**类型系统按照「是否允许隐式类型转换」来分类，可以分为强类型和弱类型。**

以下这段代码不管是在 JavaScript 中还是在 TypeScript 中都是可以正常运行的，运行时数字 `1` 会被隐式类型转换为字符串 `'1'`，加号 `+` 被识别为字符串拼接，所以打印出结果是字符串 `'11'`。

```typescript
console.log(1 + "1");
// 打印出字符串 '11'
```

TypeScript 是完全兼容 JavaScript 的，它不会修改 JavaScript 运行时的特性，所以**它们都是弱类型**。

## 安装 TypeScript

安装：`npm install -g typescript`

检查版本号：`tsc -v`

运行 `tsc xx.ts` 文件自动生成 对应的 JS 文件，自动编译成 JS 代码。

注意： **在 vscode 中用 tsc 编译 ts 文件的时候报错，tsc : 无法加载文件，因为在此系统上禁止运行脚本；SecurityError** [解决方法](https://blog.csdn.net/ddx2019/article/details/106252949/)

## 安装 ts-node

使用 ts-node 插件更加方便，有了这个插件。就可以少了上面一步编译到 js 文件。直接输出 ts 文件结果了。

安装：`npm install -g ts-node`

使用： `ts-node xx.ts`

## 原始数据类型

数据类型分为：**原始数据类型 Primitive Data Types 和 对象类型 Object Types**

主要介绍较为常见的五种基础数据类型： 布尔值、数值、字符串、null、undefined

```typescript
/**
 * 布尔值
 */
const isDone: boolean = true;
```

```typescript
/**
 * 数字
 */
const isNumber: number = 10;
```

```typescript
/**
 * 字符串
 */
const myName: string = "Bob";
```

**Null 和 Undefined**

在 TypeScript 中，可以使用 `null` 和 `undefined` 来定义这两个原始数据类型

```typescript
let u: undefined = undefined;
let n: null = null;
```

## 任意类型 Any

用来表示允许赋值为任意类型

当一个变量被声明为 any 类型，那么它就与在 JavaScript 的变量一样不会有类型的约束。那么其实给变量赋值为 any 类型其实就已经失去了 TypeScript 对类型的约束的意义了。由此不太建议经常使用。

```typescript
/**
 * 任意值 any
 */
const anyThing: any = "I am any type";
// 这里编辑器并不会提示你 anyThing 是否有该属性或方法
console.log(anyThing.myName);
console.log(anyThing.test());
```

## 类型推论

如果没有明确指定变量的类型，那么 TypeScript 就会自动去推断变量的类型。

**注意：定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查**

```typescript
/**
 * 类型推论
 */
let myFavoriteNumber = "seven";
// 提示你：不能将类型“number”分配给类型“string”
myFavoriteNumber = 7;
```

## 联合类型

表示可以定义多种类型，使用 `|` 分隔每种类型

```typescript
/**
 * 联合类型
 */
// 此时 favoriteNumber 可以被赋值为 string 或者是 number 类型
const favoriteNumber: string | number = 7;
```

当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们**只能访问此联合类型的所有类型里共有的属性或方法**

```typescript
function getLength(something: string | number): string {
  // TS会提示你 类型“string | number”上不存在属性“length”。类型“number”上不存在属性“length”
  return something.length;
  // 此时我们只能访问到 .toLocaleString()  .toString()  .valueOf() 方法，因为这在string 和 number都存在
}
```

**联合类型的变量在被赋值的时候，会根据类型推论的规则自动推断出其类型**

```typescript
/**
 * 联合类型
 */
const favoriteNumber: string | number = 78.45678;
// 自动推断出为联合类型的 number 类型
console.log(favoriteNumber.toFixed(2));
// 那么之后去调用 number 没有的方法或属性就会报错
console.log(favoriteNumber.length);
```

## 对象类型-接口 interface

在 TypeScript 中，我们可以使用接口来定义对象中属性的各个类型。在 TypeScript 里接口的作用就是为这些类型命名和为代码或第三方代码定义契约。

### 什么是接口

在面向对象语言中，例如 Java，接口是一个很重要的概念，它是对行为的抽象，而具体如何去实现这种行为接口并不需要考虑，需要由类 class 去 实现 implement。

而 TypeScript 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对 对象的形状（Shape）进行描述与定义。

### 简单的 Demo

接口定义的属性或方法，变量在指定了其类型为该接口，就必须去实现 接口里定义的契约，不可多有或少有出接口没有的属性或方法。

```typescript
/**
 * 人
 */
interface IPerson {
  name: string;
  age: number;
}
// 这时我们 有一个对象 需要去实现 IPerson 这个接口
const tom: IPerson = {
  name: "Tom",
  age: 21,
};
```

### interface-可选属性

IPerson 中有个 sex 属性，属于可选属性。在实现接口时可定义也可不定义其属性。

```typescript
interface IPerson {
  name: string;
  age: number;
  sex?: number; // 可选属性
}
// 这时我们 有一个 对象 需要去实现 IPerson 这个接口
const tom: IPerson = {
  name: "Tom",
  age: 21,
};
```

### interface-任意属性

有时候我们希望一个接口允许有任意的属性，可以使用如下方式

prop 被定义为 string 类型，可以返回 any 类型，此时在实现该接口时 在定义 name、age 属性，sex 属性为可选属性之后，用户可以随意定义接口中没有的属性。

```typescript
interface IPerson {
  name: string;
  age: number;
  sex?: number; // 可选属性
  [prop: string]: any; // 任意属性
}
// 这时我们 有一个 对象 需要去实现 IPerson 这个接口
const tom: IPerson = {
  name: "Tom",
  age: 21,
  gender: "male",
};
```

需要注意的是，**一旦定义了任意属性返回的类型而不是 any，那么确定属性和可选属性的类型都必须是它的类型的子集**

```typescript
interface IPerson {
  name: string;
  age: number;
  sex?: number; // 可选属性
  [prop: string]: string; // 任意属性
}
// 这时我们 有一个 对象 需要去实现 IPerson 这个接口
const tom: IPerson = {
  name: "Tom",
  age: 21,
  gender: "male",
};
```

上面的例子，任意属性返回值为 string 类型，此时编辑器会报错提示你：

**不能将类型“{ name: string; age: number; gender: string; }”分配给类型“IPerson”。属性“age”与索引签名不兼容。不能将类型“number”分配给类型“string”**

### interface-只读属性

有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用 `readonly` 定义只读属性。之后去修改只读属性就会报错。

```typescript
interface IPerson {
  readonly id: number; // 只读属性
  name: string;
  age: number;
  sex?: number; // 可选属性
  [prop: string]: any; // 任意属性
}
// 这时我们 有一个 对象 需要去实现 IPerson 这个接口
const tom: IPerson = {
  id: 20211027,
  name: "Tom",
  age: 21,
  gender: "male",
};
```

## 数组的类型

在 TypeScript 中，数组类型可以有多种定义方法，较为灵活

### 类型[] 表示法

```typescript
// 类型[] 表示法
const numberArray: number[] = [1, 3, 5, 7, 9];
```

### 数组泛型

**也可以使用数组泛型 `Array<elemType> ` 表示数组**

```typescript
// 数组泛型
const numberArray2: Array<number> = [1, 3, 5, 7];
```

### 用接口描述数组

`INumberArray` 表示：只要索引的类型是数字时，那么值的类型必须是数字。

虽然接口也可以用来描述数组，但是我们一般不会这么做，因为这种方式比前两种方式复杂多了。

```typescript
// 用接口表示数组
interface INumberArray {
  [index: number]: number;
}
const numberArray3: INumberArray = [1, 3, 5, 7, 9, 11];
```

## 函数的类型

### 函数的声明

在 JavaScript 中，有两种常见的定义函数的方式——**函数声明（Function Declaration）和函数表达式（Function Expression）**

```javascript
/**
 * Fuction Delaration
 */
function sum(x, y) {
  return x + y;
}
/**
 * Function Expression
 */
let sumFunction = function (x, y) {
  return x + y;
};
```

一个函数有输入或输出，在 TS 中对其输入和输出进行类型上的约束，需要把输入和输出都考虑到。

**函数声明的类型定义方式如下：**

```typescript
/**
 * Fuction Delaration
 */
function sum(x: number, y: number): number {
  return x + y;
}
```

**函数表达式的类型定义方式如下：**

```typescript
/**
 * Function Expression
 */
let sumFunction = function (x: number, y: number): number {
  return x + y;
};
```

这是可以通过编译的，不过事实上，上面的代码只对等号右侧的匿名函数进行了类型定义，而等号左边的 `sumFunction`，是通过赋值操作进行类型推论而推断出来的。如果需要我们手动给 `mySum` 添加类型，则应该是这样

```typescript
/**
 * Function Expression
 */
let sumFunction: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};
```

### 用接口来定义函数

```typescript
/**
 * 用接口来定义函数
 */
interface ISearchFunc {
  (source: string, subString: string): boolean;
}

const mySearch: ISearchFunc = function (
  source: string,
  subString: string
): boolean {
  return source.search(subString) !== -1;
};

// boolean
console.log(typeof mySearch("test", "te"));
```

采用函数表达式|接口定义函数的方式时，对等号左侧进行类型限制，可以保证以后对函数名赋值时保证参数个数、参数类型、返回值类型不变。

### 可选参数

与接口中的可选属性类似，我们用 `?` 表示可选的参数，需要注意的是，可选参数必须接在必需参数后面。换句话说，**可选参数后面不允许再出现必需参数了**。

```typescript
/**
 * 可选参数
 */
function buildName(firstName: string, lastName?: string): string {
  if (lastName) {
    return firstName + " " + lastName;
  }
  return firstName;
}
```

### 参数默认值

在 ES6 中，我们允许给函数的参数添加默认值，**TypeScript 会将添加了默认值的参数识别为可选参数**，此时就不受「可选参数必须接在必需参数后面」的限制了。

```typescript
/**
 * 参数默认值
 */
function buildName(firstName: string, lastName: string = "Cat"): string {
  if (lastName) {
    return firstName + " " + lastName;
  }
  return firstName;
}
// This is Cat
console.log(buildName("This is"));
```

### 剩余参数

可以使用 `...rest` 的方式获取函数中的剩余参数（rest 参数），restOfName 是一个数组

```typescript
/**
 * 剩余参数
 */
function restName(
  firstName: string,
  secondName: string,
  ...restOfName: string[]
) {
  // [ 'Lucas', 'MacKinzie' ]
  console.log("restOfName", restOfName);
  return firstName + " " + " " + secondName + restOfName.join(" ");
}
let employeeName = restName("Joseph", "Samuel", "Lucas", "MacKinzie");
```

### 重载

重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。类似 Java 当中的方法重载

## 类型断言

通过 **类型断言** 可以告诉编辑器： 相信我，我知道自己在干什么。类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 **它没有运行时的影响，只是在编译阶段起作用。** TypeScript 会假设你，程序员，已经进行了必须的检查。

```typescript
// 第一种： 尖括号 语法
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
console.log("strLength", strLength);

// 第二种： as 语法
let someValue2: any = "this is a string";
let strLength2: number = (someValue2 as string).length;
console.log("strLength2", strLength2);
```

## 声明文件

### 什么是声明文件？

通常我们会把声明语句放到一个单独的文件（`xxx.d.ts`）中，这就是声明文件,声明文件必需以 `.d.ts` 为后缀。一般来说，ts 会解析项目中所有的 `*.ts` 文件，当然也包含以 `.d.ts` 结尾的文件。所以当我们将 `xxx.d.ts` 放到项目中时，其他所有 `*.ts` 文件就都可以获得 `jQuery` 的类型定义了。

### 声明全局变量

`declare var/let/const xxx`

```typescript
// src/jQuery.d.ts
declare let jQuery: (selector: string) => any;
```

一般来说，全局变量都是禁止修改的常量，所以大部分情况都应该使用 `const` 而不是 `var` 或 `let`。

### 声明全局函数

函数类型的声明语句中，函数重载也是支持的

```typescript
declare function globalTest(selector: string): string;

declare function globalTest(sekector2: number): number;
```

### 声明全局类

```typescript
declare class Animal {
  name: string;
  constructor(name: string);
  sayHi(): string;
}
```

更多声明文件内容参考 TS 入门教程：https://ts.xcatliu.com/basics/declaration-files.html 更全面

## 类型别名

类型别名用来给一个类型起个新名字。使用 `type` 创建类型别名，常用于联合类型。

```typescript
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
  if (typeof n === "string") {
    return n;
  } else {
    return n();
  }
}
```

## 字符串字面量类型

适合用来约束取值只能是某个字符串的其中一个。注意，**类型别名与字符串字面量类型都是使用 `type` 进行定义。**

```typescript
type EventNames = "Click" | "Scroll" | "MouseMove";
function handleEvent(event: EventNames) {
  console.log(event);
}
// 取值只能为 "Click" | "Scroll" | "MouseMove" 其中一个
handleEvent("Scroll");
```

## 元组

数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。

```typescript
let tom: [string, number] = ["Tom", 25];
```

## 枚举

枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等。使用 `enum` 关键字来定义。

枚举成员默认会被赋值为从 `0` 开始递增的数字，同时也会对枚举值到枚举名进行反向映射：

```typescript
enum Days {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}

console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true

console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true
```

### 手动赋值

手动赋值的枚举项会接着上一个枚举项递增。

```typescript
enum Days {
  Sun = 7,
  Mon = 1,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}

console.log(Days["Sun"] === 7); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true
```

### 字符串枚举

```typescript
enum Person {
  name = "NAME",
  age = "AGE",
  love = "LOVE",
  hobby = "HOBBY",
}
console.log(Person.name); // NAME
console.log(Person.hobby); // HOBBY
```

### 异构枚举

```typescript
enum Person {
  name = 1,
  age = 2,
  love = "LOVE",
  hobby = "HOBBY",
}
console.log(Person.name); // 1
console.log(Person.hobby); // HOBBY
```

### 常量枚举

> 常量枚举通过在枚举上使用 `const` 修饰符来定义，常量枚举不同于常规的枚举，他们会在编译阶段被删除。

```typescript
const enum Size {
  WIDTH = 10,
  HEIGHT = 20,
}
const area = Size.WIDTH * Size.HEIGHT;

// 常量枚举成员在使用的地方会被内联进来，之所以可以这么做是因为，常量枚举不允许包含计算成员；如上例所示，在运行时是没有 Size 变量的，因此常量枚举会带来一个对性能的提升。
```

## 类

简单的类例子：

```typescript
class Greeter {
  greeting: string; // 属性
  constructor(message: string) {
    // 构造函数
    this.greeting = message;
  }
  greet() {
    // 方法
    return "Hello," + this.greeting;
  }
}
let greeter = new Greeter("world");
console.log(greeter); // Greeter { greeting: 'world' }
console.log(greeter.greeting); // world
console.log(greeter.greet()); // Hello,world
```

### 继承

注意点：

- 子类的构造函数 必须调用 `super()` 它会去执行 父类的构造函数。
- 并且在构造函数里一定是先执行 `super()` 在可以访问 `this` 属性

```typescript
class Animal {
  // 父类
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}
class Dog extends Animal {
  // 子类
  bark() {
    console.log("Woof! Woof!");
  }
}
const dog = new Dog();
dog.bark(); // Woof! Woof!
dog.move(10); // Animal moved 10m.
```

```typescript
class Animal {
  // Animal类
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}
class Snake extends Animal {
  // Snake 类
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 5) {
    console.log("Slithering...");
    super.move(distanceInMeters); // 调用 Animal类 中的 move方法
  }
}
class Horse extends Animal {
  // Horse 类
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters); // 调用 Animal类 中的 move方法
  }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");
sam.move();
// Slithering...
// Sammy the Python moved 5m.
tom.move(34);
// Galloping...
// Tommy the Palomino moved 34m.

/**
 *	Snake类和 Horse类都创建了 move方法，它们重写了从 Animal继承来的 move方法，使得 move方法根据不同的类而具有不同的功能。
 *	即使 tom被声明为 Animal类型，但因为它的值是 Horse，调用 tom.move(34)时，它会调用 Horse里重写的方法
 */
```

### 公共、私有和受保护的修饰符

#### public 公共

> 在 TS 中，成员默认为 public。 所以可以默认不写

#### private 私有

> 当成员被标记成 private 时， 该成员就不可以在声明它的类 的外部访问，只能内部访问。

```typescript
class Animal {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}
new Animal("Cat").name; // 编辑器提示：属性“name”为私有属性，只能在类“Animal”中访问
```

#### protected 受保护的

> `protected`修饰符与 `private`修饰符的行为很相似，但有一点不同， `protected`成员在子类内部中仍然可以访问。

```typescript
class Person {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Employee extends Person {
  private department: string;
  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }
  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}
let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch()); // Hello, my name is Howard and I work in Sales.
console.log(howard.name); // 编辑器提示：属性“name”受保护，只能在类“Person”及其子类中访问
```

#### readonly 只读

> 属性设置为只读属性。只读属性必须在声明是或构造函数里被初始化

```typescript
class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor(theNmae: string) {
    this.name = theName;
  }
}
let dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.
```

### Getters 和 Setters

> TS 通过 getters/setters 来控制对对象成员的访问。 它能帮助你有效的控制对对象成员的访问。

```typescript
let passcode = "secret passcode";
class Employee {
  private _fullName: string;

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (passcode && passcode == "secret passcode") {
      this._fullName = newName;
    } else {
      console.log("Error: Unauthorized update of employee!");
    }
  }
}

let employee = new Employee();
employee.fullName = "Bob Smith"; // 会走类的 set fullName() {} 方法
if (employee.fullName) {
  console.log(employee.fullName);
}
```

### 静态属性

> 可以创建类的静态成员， 静态属性只存在类本身上而不是 new 出来的实例上。

```typescript
class Grid {
  static origin = { x: 0, y: 0 };
  scale: number;
  calculateDistanceFromOrigin(point: { x: number; y: number }) {
    let xDist = point.x - Grid.origin.x;
    let yDist = point.y - Grid.origin.y;
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
  constructor(scale: number) {
    this.scale = scale;
  }
}
let grid1 = new Grid(1.0); // 1x scale
let grid2 = new Grid(5.0); // 5x scale

console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
// 14.142135623730951
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
// 2.8284271247461903
```

### 抽象类

> 抽象类是作为其它派生类的基类使用。 它们不会直接被实例化，不同于接口，抽象类可以包含成员的实现细节。`abstract` 关键字是用于定义抽象类 和 定义抽象类内部的抽象方法

```typescript
abstract class Animal {
  abstract makeSound(): void;
  move(): void {
    console.log("roaming the earch...");
  }
}
```

注意点：

1. 抽象类的抽象方法 在抽象类中不包含具体的实现 但是 **必须在派生类中实现。**
2. 抽象方法的语法与接口方法相似。 两者都是定义方法签名但不包含方法体。 然而，**抽象方法必须包含 `abstract`关键字并且可以包含访问修饰符。**

```typescript
abstract class Department {
  constructor(public name: string) {}

  printName(): void {
    console.log("Department name:" + this.name);
  }
  abstract printMeeting(): void; // 必须在派生类中实现
}

class AccountingDepartment extends Department {
  constructor() {
    super("Accounting and Auditing"); // 派生类必须在构造函数中调用 super()
  }
  printMeeting(): void {
    console.log("The Accounting Department meets each Monday at 10am.");
  }
  generateReports(): void {
    console.log("Generating accounting reports...");
  }
}
```

### 类实现接口

通过接口也可以实现对类的属性或方法进行某种契约。

```typescript
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date);
}
class Clock implements ClockInterface {
  currentTime: Date;
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {}
}
```

### 接口继承接口

```typescript
interface Shape {
  color: string;
}
interface Square extends Shape {
  sideLength: number;
}
let square: Square = {
  color: "red",
  sideLength: 1,
};
```

## 泛型

泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

```typescript
function createArray(length: number, value: any): Array<any> {
  let result = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}
console.log(createArray(5, "A"));
```

这段代码编译不会报错，但是一个显而易见的缺陷是，它并没有准确的定义返回值的类型：

`Array<any>` 允许数组的每一项都为任意类型。但是我们预期的是，数组中每一项都应该是输入的 `value` 的类型。

这时候，泛型就派上用场了：

```typescript
function createArray<T>(length: number, value: T): Array<T> {
  let result = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}
console.log(createArray<string>(5, "A"));
// 也可以不指定，通过类型推论也可以自动推算出来
console.log(createArray(5, "A"));
```

### 泛型约束

在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法

```typescript
function loggingIdentiy<T>(arg: T): T {
  // 编辑器提示：类型“T”上不存在属性“length”
  console.log(arg.length);
  return arg;
}
```

上例中，泛型 `T` 不一定包含属性 `length`，所以编译的时候报错了。

这时，我们可以对泛型进行约束，只允许这个函数传入那些包含 `length` 属性的变量。这就是泛型约束

```typescript
// string 类型中有 length 属性
function loggingIdentiy<T extends string>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// 或者是继承相关的接口
interface ILength {
  length: number;
}
function loggingIdentiy<T extends ILength>(arg: T): T {
  console.log(arg.length);
  return arg;
}
```

### 泛型函数接口

```typescript
interface ConfigFn {
  <T>(value: T): T;
}
var getData: ConfigFn = (value) => {
  return value;
};
console.log(getData<string>("张三"));
// 提示：类型“number”的参数不能赋给类型“string”的参数
console.log(getData<string>(1));
```

### 泛型类

```typescript
class GetMin<T> {
  arr: T[] = [];
  add(ele: T) {
    this.arr.push(ele);
  }
  min(): T {
    var min = this.arr[0];
    this.arr.forEach((value) => {
      if (value < min) {
        min = value;
      }
    });
    return min;
  }
}
var gm1 = new GetMin<number>();
gm1.add(5);
gm1.add(2);
gm1.add(3);
gm1.add(1);
console.log(gm1.min()); // 1

var gm2 = new GetMin<string>();
gm2.add("tom");
gm2.add("jerry");
gm2.add("jack");
gm2.add("sunny");
console.log(gm2.min()); // jack
```

### 泛型参数的默认类型

在 TypeScript 2.3 以后，我们可以为泛型中的类型参数指定默认类型。当使用泛型时没有在代码中直接指定类型参数，从实际值参数中也无法推测出时，这个默认类型就会起作用

```typescript
function createArray<T = string>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}
```
