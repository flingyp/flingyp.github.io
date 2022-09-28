# ES6 语法

## ES6 解构赋值+扩展运算符

### 数组的解构赋值

#### 基础

```js
let arr = [0, 1, 2];
let [a, b, c] = arr;
console.log(a, b, c); // 0 1 2
```

- 但是很多时候，数据并非一一对应的，并且我们希望得到一个默认值

```js
let arr = [, 1, 2];
let [a = "我是默认值", b, c] = arr;
console.log(a); // '我是默认值'
console.log(b); // 1
console.log(c); // 2
// 从这个例子可以看出，在解构赋值的过程中，a=undefined时，会使用默认值
// 那么当a=null时呢？当a=null时，那么a就不会使用默认值，而是使用null
```

#### 解构赋值-数组的拼接

```js
let a = [0, 1, 2];
let b = [3, 4, 5];
// 第一种： concat 方法
let c = a.concat(b);
console.log(c); // [0,1,2,3,4,5]
// 第二种： 解构赋值
let d = [...a, ...b];
console.log(d); // [0,1,2,3,4,5]
```

#### 解构赋值-数组的克隆

```js
// 数组的克隆
// 假如我们简单地把一个数组赋值给另外一个变量
let a = [0, 1, 2, 3];
let b = a;
b.push(4);
console.log(a); // [0,1,2,3,4]
console.log(b); // [0,1,2,3,4]
// 因为这只是简单的把引用地址赋值给b，而不是重新开辟一个内存地址，所以
// a和b共享了同一个内存地址，该内存地址的更改，会影响到所有引用该地址的变量
// 那么用下面的方法，把数组进行克隆一份，互不影响

let a = [0, 1, 2, 3];
let b = [...a];
b.push(4);
console.log(a); // [0,1,2,3]
console.log(b); // [0,1,2,3,4]
```

### 对象的解构赋值

> 对象的解构赋值和数组的解构赋值其实类似，但是数组的数组成员是有序的
> 而对象的属性则是无序的，所以对象的解构赋值简单理解是等号的左边和右边的结构相同

#### 基础

```js
let { name, age } = { name: "yp", age: 21 };
console.log(name); // 'yp'
console.log(age); // 21
// 对象的解构赋值是根据 key 值进行匹配
```

注： 如果变量已提前声明了

```js
let name, age;
// 需要用圆括号，包裹起来
({ name, age } = { name: "yp", age: 21 });
console.log(name); // 'yp'
console.log(age); // 21
```

- 对象解构赋值也可以设置默认值

```js
let { name = "yp", age } = { age: 21 };
console.log(name); // 'yp'
console.log(age); // 21
// 这里规则和数组的解构赋值一样，当name = undefined时，则会使用默认值
```

### 扩展运算符

```js
function sum(...args) {
  // 使用...扩展运算符
  console.log(args); // [ 1, 2, 3, 4, 5, 6 ] args是一个数组
  return eval(args.join("+"));
}

console.log(sum(1, 2, 3, 4, 5, 6)); // 21
```

```js
// 正确的写法 扩展运算符只能放在最后一个参数
function sum(a,b,...args){
    console.log(a) // 1
    console.log(b) // 2
    console.log(args) // [ 3, 4, 5, 6 ]
}

sum(1,2,3,4,5,6)

// 错误的写法 扩展运算符只能放在最后一个参数
function sum(...args,a,b){
    // 报错
}

sum(1,2,3,4,5,6)
```

> 可以对比下扩展运算符的方便之处

```js
// 以往我们是这样拼接数组的
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = arr1.concat(arr2);
console.log(arr3); // [ 1, 2, 3, 4, 5, 6 ]

// 现在我们用扩展运算符看看
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];
console.log(arr3); // [ 1, 2, 3, 4, 5, 6 ]
```

```js
// 扩展运算符可以把argument转为数组
function max() {
  console.log(arguments); // { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6 }
  let arr = [...arguments];
  console.log(arr); // [1,2,3,4,5,6]
}

max(1, 2, 3, 4, 5, 6);

// 但是扩展运算符不能把伪数组转为数组（除了有迭代器iterator的伪数组，如arguments）
let likeArr = { 0: 1, 1: 2, length: 2 };
let arr = [...likeArr]; // 报错 TypeError: likeArr is not iterable

// 但是可以用Array.from把伪数组转为数组
let likeArr = { 0: 1, 1: 2, length: 2 };
let arr = Array.from(likeArr);
console.log(arr); // [1,2]
```

#### 对象也可以使用扩展运算符

```js
// 使用扩展运算符
let name = { name: "yepeng" };
let age = { age: 28 };
let person = { ...name, ...age };
console.log(person); // { name: 'yepeng', age: 28 }
```

## Array

### 遍历数组的方式

```js
let arr = [1, 2, 3, 2, 4];
```

#### for 循环

```js
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

#### forEach()

> 没有返回值， 只是每个元素都会调用 function

注意： forEach 的代码块中不能使用 **break、continue**，它会抛出异常

```js
[1, 2, 3, 4, 5].forEach(function (i) {
  if (i === 2) {
    return;
  } else {
    console.log(i);
  }
});
```

#### map()

> 返回新的数组， 每个元素为调用 function 的结果

```js
let result = arr.map(function (value) {
  value += 1;
  console.log(value);
  return value;
});
console.log(arr, result);
```

#### filter()

> 返回符合 function 条件的元素数组

```js
let result = arr.filter(function (value) {
  console.log(value);
  return value == 2;
});
console.log(arr, result);
```

#### some()

> 返回 boolean，判断是否有元素符合 func 条件

```js
let result = arr.some(function (value) {
  console.log(value);
  return value == 4;
});
console.log(arr, result);
```

#### every()

> 返回 boolean，判断每个元素都符合 func 条件, 元素都符合 返回 true ，有一个不符合就返回 false

## Function

### 默认参数

> 对于函数而言经常会用到参数。 在 ES5 的时候关于参数的默认值通常都是写在函数体中。但在 ES6 改变了这种写法。

```js
function foo(x, y = "world") {
  console.log(x, y);
}
foo("hello", 0);
```

如果想让具体的某个参数使用默认值，我们可以在调用函数时使用 undefined 进行赋值。

```js
function f(x, y = 7, z = 42) {
  return x + y + z;
}
console.log(f(1, undefined, 43)); // 51
```

在 ES6 中我们不仅可以给参数默认赋值具体的数值，同时参数赋值支持参数的逻辑运算进行赋值。

```js
function f(x, y = 7, z = x + y) {
  return z * 0.5;
}
console.log(f(1, 7)); // 4
```

### Length 属性

> 函数也有 Length 属性了， 将返回没有指定默认值的参数的个数

```js
function foo(x = 1, y = 2, z = 3) {
  console.log(x, y);
}
console.log(foo.length);
// 0
```

## Object

### 属性名表达式

> ES6 可以使用变量名 或者 表达式 来定义 Object 的 Key 名

```js
let name = "school";
let obj = {
  [name]: "ok",
  foo: "bar",
};
```

### Object.keys()、Object.values()、Object.entries

`Object.keys()` 返回对象中所有键名的数组

`Object.values()` 返回对象中所有键值的数组

`Object.entries()` 返回一个二维数组，元素由 键名 + 键值组合的数组 `[key, value]`

### Object.assign()

> Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象，它将返回目标对象。

```js
const target = {
  a: 1,
  b: 2,
};
const source = {
  b: 4,
  c: 5,
};

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }
```

### 对象的遍历方式

怎么能够遍历出对象的每个 key 和 value 的值？

#### for...in

> 用于遍历对象的，不能遍历数组

```js
for (let key in obj) {
  console.log(key, obj[key]);
}
```

#### Object.keys()

> 用于返回对象所有 key 组成的数组。

```js
Object.keys(obj).forEach((key) => {
  console.log(key, obj[key]);
});
```

#### Object.getOwnPropertyNames()

> 用于返回对象所有 key 组成的数组。

```js
Object.getOwnPropertyNames(obj).forEach((key) => {
  console.log(key, obj[key]);
});
```

#### Reflect.ownKeys()

> 用于返回对象所有 key 组成的数组。

```js
Reflect.ownKeys(obj).forEach((key) => {
  console.log(key, obj[key]);
});
```

## Class

### 声明类

首先先来说明在 JavaScript 世界里如何声明一个 “类”。在 ES6 之前都是这么做的：

```js
let Animal = function (type) {
  this.type = type;
  this.walk = function () {
    console.log(`I am walking`);
  };
};
let dog = new Animal("dog");
let monkey = new Animal("monkey");
// 定义了一个叫 Animal 的类
// 类中声明了一个属性 type、一个方法 walk
// 然后通过 new Animal 这个类生成实例
// 完成了类的定义和实例化
```

在 ES6 中类的定义就更专业化了，不需要 function 的方式了

```js
class Animal {
  constructor(type) {
    this.type = type;
  }
  walk() {
    console.log(`I am walking`);
  }
}
let dog = new Animal("dog");
let monkey = new Animal("monkey");
```

### constructor 方法

> constructor 方法是类的默认方法，通过 new 命令生成对象实例时，自动调用该方法。一个类必须有 constructor 方法，如果没有显式定义，一个空的 constructor 方法会被默认添加

```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return "(" + this.x + ", " + this.y + ")";
  }
}
// ES6 的类，完全可以看作构造函数的另一种写法
console.log(typeof Point); // "function"
Point === Point.prototype.constructor; // true
```

- constructor 方法 是构造方法
- this 指的是创建实例类对象

### prototype

构造函数的 prototype 属性，在 ES6 的“类”上面继续存在。
事实上，类的所有方法都定义在类的 prototype 属性上面

```js
class Point {
  constructor() {
    // ...
  }
  toString() {
    // ...
  }
  toValue() {
    // ...
  }
}
// (在类的实例上面调用方法，其实就是调用原型上的方法)
// 等同于
Point.prototype = {
  constructor() {},
  toString() {},
  toValue() {},
};
```

### 静态方法

> 类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上 static 关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。

```js
class Foo {
  static classMethod() {
    return "hello";
  }
}
Foo.classMethod(); // hello
let foo = new Foo();
foo.classMethod(); // // TypeError: foo.classMethod is not a function
```

- 注意，如果静态方法包含 this 关键字，这个 this 指的是类，而不是实例。

- 父类的静态方法，可以被子类继承

```js
class Foo {
  static classMethod() {
    return "hello";
  }
}

class Bar extends Foo {}

Bar.classMethod(); // 'hello'
```

## Symbol

> ES6 引入了一种新的原始数据类型 Symbol ，表示独一无二的值。它是 JavaScript 语言的第七种数据类型，前六种是：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）

Symbol 值通过 Symbol 函数生成。这就是说，对象的属性名现在可以有两种类型，一种是原来就有的字符串，另一种就是新增的 Symbol 类型。凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突

### 声明方式

```js
let s = Symbol();
typeof s; // Symbol
```

变量 s 就是一个独一无二的值。typeof 的结果说明 s 是 Symbol 数据类型。

既然是独一无二的，那么两个 Symbol()就一定是不相等的：

```js
let s1 = Symbol();
let s2 = Symbol();
console.log(s1);
console.log(s2);
console.log(s1 === s2); // false
```

注意：
Symbol 函数不能使用 new 命令，不然就会报错

### Symbol.for()

> Symbol.for() 接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，否则就新建一个以该字符串为名称的 Symbol 值，并将其注册到全局。

```js
let s1 = Symbol.for("foo");
let s2 = Symbol.for("foo");
console.log(s1 === s2); // true
```

**注意：**

Symbol.for()与 Symbol()这两种写法，都会生成新的 Symbol。它们的区别是，前者会被登记在全局环境中供搜索，后者不会。Symbol.for()不会每次调用就返回一个新的 Symbol 类型的值，而是会先检查给定的 key 是否已经存在，如果不存在才会新建一个值

### Symbol.keyFor()

> Symbol.keyFor()方法返回一个已登记的 Symbol 类型值的 key。

```js
const s1 = Symbol("foo");
console.log(Symbol.keyFor(s1)); // undefined
const s2 = Symbol.for("foo");
console.log(Symbol.keyFor(s2)); // foo
```

### 作为属性名

由于每一个 Symbol 值都是不相等的，这意味着 Symbol 值可以作为标识符，用于对象的属性名，就能保证不会出现同名的属性。这对于一个对象由多个模块构成的情况非常有用，能防止某一个键被不小心改写或覆盖。

比如在一个班级中，可能会有同学名字相同的情况，这时候使用对象来描述学生信息的时候，如果直接使用学生姓名作为 key 会有有问题。

```js
const grade = {
  张三: {
    address: "xxx",
    tel: "111",
  },
  李四: {
    address: "yyy",
    tel: "222",
  },
  李四: {
    address: "zzz",
    tel: "333",
  },
};
console.log(grade);
// 只会保留最后一个李四
```

如果使用 Symbol，同名的学生信息就不会被覆盖：

```js
const stu1 = Symbol("李四");
const stu2 = Symbol("李四");
const grade = {
  [stu1]: {
    address: "yyy",
    tel: "222",
  },
  [stu2]: {
    address: "zzz",
    tel: "333",
  },
};
console.log(grade);
console.log(grade[stu1]);
console.log(grade[stu2]);
```

## Promise

### 基本使用

:::tip 简单介绍

Promise 是 ES6 的新技术，是在 JS 中解决异步编程的解决方案（解决了回调地狱的问题）

从语法上总结：Promise 是一个构造函数

从功能上总结：Promise 对象用来封装一个异步操作并且可以获取其操作成功或者失败的结果值

:::

```js
// Promise 是一个构造函数，实例初始化的时候接受一个回调函数，回调函数接受两个参数
/**
 * resolve：解决。异步任务成功时执行
 * reject：拒绝。异步任务失败是执行
 */
const p = new Promise((resolve, reject) => {
  // 异步任务
  // resolve(data) 成功时执行， 会将promise对象的状态设置为：resolve
  // reject(err) 失败时执行， 会将promise对象的状态设置为：reject
});

p.then(
  (data) => {
    // 成功时执行的回调函数
  },
  (err) => {
    // 失败是执行的回调函数
  }
);
```

### Promise 状态

实例对象中的一个属性：**PromiseState**

- Pending 等待中...

- Resolved/ Fullfilled 已执行

- Rejected 已失败

**Promise 状态的改变说明**：

1. 只有两种可能，且一个 Promise 对象只能改变一次

2. `Pending -> Resolved` 或 `Pending -> Rejected`

3. 无论变为成功还是失败，都会有一个结果数据

### Promise 对象的值

实例对象中的一个属性：**PromiseResult**，保存着 Promise 对象成功或失败的结果

### Promise 构造函数

```js
Promise(executor) {
  // 执行的内容
}
```

1. **executor 函数：(resolve, reject) => {}**

2. resolve 函数：在函数内部定义成功时，执行的方法

3. reject 函数：在函数内部定义失败时，执行的方法

### Promise.prototype.then(onResolved, onRejected)

第一个回调函数是 onResolved 用于接受 Promise 成功时执行的回调函数

第二个回调函数是 onRejected 用于接受 Promise 失败时执行的回调函数

### Promise.prototype.catch(onRejected)

回调函数是 onRejected 用于接受 Promise 失败时执行的回调函数

### Promise.resolve(data)

返回一个 成功/失败 的 Promise 对象

注意：

1. 如果传入的参数为 非 Promise 类型的数据，则返回的结果为成功的 Promise 对象

2. 如果传入的参数为 Promise 类型的数据，则参数的结果决定了 resolve 返回的结果

### Promise.reject(err)

返回一个 失败的 Promise 对象

### Promise.all(promises)

返回一个新的 Promise 对象，只有所有的 promise 成功才会返回成功，只要有一个失败了就直接失败

### Promise.race(promises)

返回一个新的 Promise 对象，第一个完成的 Promise 的结果状态就是最终的结果状态

### Promise 常见问题

1. 如何改变 Promise 的状态

通过 `resolve(value)`、`reject(err)` 或 抛出异常都会改变其状态

2. 一个 Promise 指定多个成功/失败的回调函数，都会调用吗

当 promise 改变为对应状态时都会调用

3. 改变 Promise 状态和指定回调函数谁先谁后

都有可能，正常情况下是先指定回调再改变状态, 但也可以先改状态再指定回调

比如在 Promise 执行的回调函数，使用 `setTimeout` 来延迟更新 Promise 的状态就会先指定回调函数，当状态被修改后会立即执行指定的回调函数

4. `promise.then()` 返回的新 promise 的结果状态由什么决定

由 `then()` 指定的回调函数执行的结果决定

- 如果抛出异常, 新 promise 变为 rejected, reason 为抛出的异常

- 如果返回的是非 promise 的任意值, 新 promise 变为 resolved, value 为返回的值

- 如果返回的是另一个新 promise, 此 promise 的结果就会成为新 promise 的结果

5. Promise 如何串连多个操作任务

promise 的 `then()` 返回一个新的 promise, 可以开成 then()的链式调用

6. Promise 异常传统

当使用 promise 的 then 链式调用时, 可以在最后指定失败的回调，前面任何操作出了异常, 都会传到最后失败的回调中处理

7. 中断 Promise 链

如何在使用 promise 的 then 链式调用时, 在中间中断, 不再调用后面的回调函数

方法：在回调函数中返回一个 Pending 状态的 promise 对象

## Set、Map、WeakSet、WeakMap

`Set` 是一种集合的数据结构，`Map` 是一种字典的数据结构

共同点：集合、字典都可以存储不重复的值

不同点：集合是以 `[value1、value2]` 的形式存储元素、字典是以 `[key, value]` 的形式存储

### Set

介绍：Set 是 ES6 新增的数据结构，类似于数组，但是**成员的值都是唯一的，没有重复的值**，一般称为`Set集合`

```ts
const dataGather = new Set();

// 增删改查
// dataGather.add() 添加元素
// dataGather.delete() 删除元素
// dataGather.has() 判断是否存在元素
// dataGather.clear() 清空集合

// 遍历 （注意：Set集合的建名和建值都是 值）
// dataGather.keys() 返回键名的遍历器
for (let key of dataGather.keys()) {
  console.log(key);
}
// dataGather.values() 返回键值的遍历器
for (let value of dataGather.values()) {
  console.log(value);
}
// dataGather.entries()：返回键值对的遍历器
for (let arr of dataGather.entries()) {
  console.log(arr); // [key, value];
}
// forEach()：使用回调函数遍历每个成员
dataGather.forEach((value, key) => console.log(key + ":" + value));
```

### Map

介绍：Map 类型是键值对的有序列表，而键和值都可以是任意类型

```ts
const dataGather = new Map();

// 增删改查
// dataGather.size 元素集合成员总数
// dataGather.set(key, value) 设置元素
// dataGather.get(key) 获取元素
// dataGather.has(key) 判断是否存在元素
// dataGather.delete(key) 删除元素
// dataGather.clear() 清空集合

// 遍历
// dataGather.keys() 返回键名的遍历器
for (let key of dataGather.keys()) {
  console.log(key);
}
// dataGather.values() 返回键值的遍历器
for (let value of dataGather.values()) {
  console.log(value);
}
// dataGather.entries()：返回键值对的遍历器
for (let arr of dataGather.entries()) {
  console.log(arr); // [key, value];
}
// forEach()：使用回调函数遍历每个成员
dataGather.forEach((value, key) => console.log(key + ":" + value));
```

### WeakSet

WeakSet 可以接受一个具有 Iterable 接口的对象作为参数

在 API 中 WeakSet 与 Set 的区别：

- 没有遍历操作的 API
- 没有 size 属性
- WeakSet 只能成员只能是引用类型，而不能是其他类型的值

WeakSet 里面的引用只要在外部消失，它在 WeakSet 里面的引用就会自动消失

### WeakMap

WeakMap 结构与 Map 结构类似，也是用于生成键值对的集合

在 API 中 WeakMap 与 Map 的区别：

- 没有遍历操作的 API
- 没有 clear 清空方法
- WeakMap 只接受对象作为键名（null 除外），不接受其他类型的值作为键名

注意：WeakMap 弱引用的只是键名，而不是键值。键值依然是正常引用

WeakMap 的键名所指向的对象，一旦不再需要，里面的键名对象和所对应的键值对会自动消失，不用手动删除引用

```ts
const wm = new WeakMap();
let key = {};
let obj = { foo: 1 };

wm.set(key, obj);
obj = null;
wm.get(key);
// Object {foo: 1}
```

## 可选链操作符

编程实务中，如果读取对象内部的某个属性，往往需要判断一下该对象是否存在。比如，要读取 message.body.user.firstName，安全的写法是写成下面这样。

```ts
const firstName =
  (message &&
    message.body &&
    message.body.user &&
    message.body.user.firstName) ||
  "default";
```

或者使用三元运算符?:，判断一个对象是否存在。

```ts
const fooInput = myForm.querySelector("input[name=foo]");
const fooValue = fooInput ? fooInput.value : undefined;
```

所以在 ES2020 引入的链判断运算符，简化上面的写法

```ts
const firstName = message?.body?.user?.firstName || "default";
const fooValue = myForm.querySelector("input[name=foo]")?.value;
```

上面代码使用了 `?.` 运算符，直接在链式调用的时候判断，左侧的对象是否为 `null` 或 `undefined`。如果是的，就不再往下运算，而是返回 `undefined`

## Null 判断运算符

读取对象属性的时候，如果某个属性的值是 null 或 undefined，有时候需要为它们指定默认值。常见做法是通过||运算符指定默认值。

```ts
const headerText = response.settings.headerText || "Hello, world!";
const animationDuration = response.settings.animationDuration || 300;
const showSplashScreen = response.settings.showSplashScreen || true;
```

上面代码有一个这样的问题，只要属性的值为 null 或 undefined，默认值就会生效。但是其实如果属性的值为 空字符串 或者 false 或 0，默认值都会生效

为了避免这种情况，ES2020 引入了一个新的 Null 判断运算符 `??`。它的行为类似||，但是只有运算符左侧的值为 null 或 undefined 时，才会返回右侧的值。

```ts
const headerText = response.settings.headerText ?? "Hello, world!";
const animationDuration = response.settings.animationDuration ?? 300;
const showSplashScreen = response.settings.showSplashScreen ?? true;
```
