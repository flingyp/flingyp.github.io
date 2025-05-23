# JavaScript 杂记

## JavaScript 是由哪几部分组成的

JavaScript 由 ECMAScript、DOM、BOM 组成

- ECMAScript：JS 语言基础，提供核心语言功能
- DOM：文档对象模型，提供与网页交互的方法和接口
- BOM：浏览器对象模型，提供与浏览器交互的方法和接口

## JavaScript 数据类型

JavaScript 是一种弱类型语言，具有丰富的数据类型来表示不同种类的值

基本数据类型：Number、String、Boolean、Undefined、Null、Symbol（ES6+）

引用数据类型：Object

```ts
console.log(typeof NaN); // number
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof (true + 1)); // number
console.log(typeof ('name' + true)); // string
console.log(undefined + 1); // NaN
```

## 基本数据类型和引用数据类型的区别是什么

**存储方式**

- 基本数据类型的值存储在栈内存中，直接存储在变量访问的位置上
- 引用数据类型的值存储在堆内存中，而变量则存储的是对该值的引用，即该值在内存中的引用地址

**赋值方式**

- 基本数据类型的赋值是按值传递的，即在赋值时，变量会复制基本数据类型的值，两者互不影响
- 引用数据类型的赋值是按引用传递的，即在赋值时，变量会复制引用（指向堆内存中的值的地址），因此两个变量指向的是同一个对象，修改其中一个变量的值会影响到另一个变量（所以就会出现深拷贝和浅拷贝的问题）

**比较方式**

- 基本数据类型的比较是值的比较，只有当两个变量的值相等时才会返回 `true`
- 引用数据类型的比较是引用的比较，即只有当两个变量引用的是同一个对象时才会返回 `true`，即使两个对象有相同的属性和值，它们也不会被认为是相等的

**内存管理**

- 基本数据类型的内存管理由 JavaScript 引擎自动处理，变量的生命周期由作用域控制
- 引用数据类型需要手动管理内存，特别是在不需要使用对象时，需要将其置为 null 来释放内存，以避免内存泄漏

## Null 和 Undefined 的区别

JavaScript 在最初设计的时候，参考了 Java 语言，所以有了 Null。而 `null` 会被隐式转换成 0，不容易发现错误，所以为了弥补这个坑，出现了 `undefined`

**Undefined**

- 当声明了一个变量但是没有给它赋值时，这个变量的默认值就是 `undefined`
- 当访问对象中不存在的属性时，返回的值也是 `undefined`
- 当函数没有明确返回值时，默认返回的也是 `undefined`

**Null**

- `null` 表示的是一个空的值，可以被赋值给任何类型的变量
- 当变量明确表示为空时，可以将其赋值为 `null`

```js
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

console.log(undefined == null); // true
console.log(undefined === null); // false
```

**区别**

- `undefined` 表示未定义，通常是变量声明但未初始化的状态，或者访问不存在的属性时返回的值
- `null` 表示空，通常是用来明确指示变量的空状态

`null` 的字面意思是：空值。这个值的语义是，希望表示一个对象被人为的重置为空对象，而非一个变量最原始的状态。在内存里的表示就是，栈中的变量没有指向堆中的内存对象

在实际使用过程中，为了保证变量所代表的语义，不要对一个变量显式的赋值 `undefined`，当需要释放一个对象时，直接赋值为 `null` 即可

## `==` 和 `===` 的区别

- `==` 相等操作符：比较前会先进行类型转换，再确定值是否相等
- `===` 全等操作符：会比较类型和值都是否相等

```js
console.log(5 == '5'); // 输出: true，因为 JavaScript 将字符串 "5" 转换为数字 5，然后比较它们的值
console.log(undefined == null); // 输出: true，因为它们是相等的特殊值
console.log(0 == false); // 输出: true，因为 JavaScript 将 false 转换为数字 0，然后比较它们的值
```

```js
console.log(5 === '5'); // 输出: false，因为它们的类型不同
console.log(undefined === null); // 输出: false，因为它们的类型不同
console.log(0 === false); // 输出: false，因为它们的值和类型都不同
```

## JavaScript 作用域

**静态作用域**：静态作用域又叫词法作用域，JavaScript 就是静态作用域

:::details 静态作用域

```js
const x = 10;
function f() {
  // 如果此处声明了变量x则返回的是自身作用域的局部变量x
  // var x = 30
  // 此时访问的x变量是全局变量x
  return x;
}
function g() {
  const x = 20;
  // 执行函数f，就去定义该函数的地方查找
  return f();
}
console.log(g());
```

:::

上述代码中，函数 f 返回的 x 是外层定义的 x，也就是 10，我们调用 g 的时候，虽然 g 里面也有个变量 x，但是在这里我们并没有用它，用的是 f 里面的 x。也就是说我们调用一个函数时，如果这个函数的变量没有在函数中定义，就去定义该函数的地方查找，这种查找关系在我们代码写出来的时候其实就确定了，所以叫静态作用域

**变量提升**：在 ES6 之前，我们申明变量都是使用 `var`，使用 `var` 声明的变量都是函数作用域，即在函数体内均可用，这会带来变量提升的问题（即变量声明提前）

:::details 变量提升

```js
var x = 1;
function f() {
  console.log(x); // undefined
  var x = 2;
  console.log(x); // 2
}
f();
/** ------上面代码相当于如下代码------ **/
var x = 1;
function f() {
  var x;
  console.log(x); // undefined
  x = 2;
  console.log(x); // 2
}
f();
```

:::

在函数体内部使用了关键字`var`声明变量 x。所以它其实在整个函数内部可见，也就是说，变量 x 的声明相当于提前到了函数内部的最开始地方，但是变量赋值还是在运行的`x = 2`地方执行。所以第一个输出 `undefined`，第二个输出 `2`

**函数提升**：和变量提升同理

:::details 函数提升

```js
function f() {
  x();
  // 普通函数声明提前
  function x() {
    console.log(1);
  }
}
f();
/** ------上面代码相当于如下代码------ **/
function f() {
  function x() {
    console.log(1);
  }
  x();
}
f();
```

:::

注意：将上面的 `x` 函数换成函数表达式就不行了，会报错

:::details 函数提升

```js
function f() {
  x();
  var x = function () {
    console.log(1);
  };
}
f();
/** ------上面代码相当于如下代码------ **/
function f() {
  var x;
  // 此时的x是undefined，但是你将它当中函数调用。所以它会报错
  // Uncaught TypeError: x is not a function
  x();
  x = function () {
    console.log(1);
  };
}
f();
```

:::

:::details 变量声明和函数声明的优先级谁更高？（如果有二个名称相同的变量和函数，谁优先级谁更高）

```js
// 答案是：函数声明的优先级更高
var x = 1;
function x() {}
// 所以说是想声明了函数再声明了变量，从而覆盖了函数的声明
console.log(x); // 1
```

:::

:::details 为什么会存在变量声明和函数声明？

在 JavaScript 有存在预编译的概念

:::

- 参考文章：https://blog.csdn.net/dennis_jiang/article/details/106157904

## 什么是闭包，如何理解它

理解闭包的关键在于理解 **作用域、作用域链** 的概念，闭包就是**一个函数和其周围状态的引用捆绑在一起，这样的组合就是闭包**

执行上下文（执行环境）：全局环境（全局作用域）、函数环境（函数作用域）

也就是说闭包可以让你在外层函数中访问到某个作用域下**内部变量或函数**，最典型的就是嵌套函数

有个应用场景就是 **需要访问内部函数的私有变量时** 就可以采取闭包的形式完成

**优点**

1. 可以在函数体外部访问某个作用域下的私有变量
2. 无需将没有意义的变量都定义在全局环境当中，避免变量污染全局
3. 把变量存到独立的作用域，作为私有成员的存在

**缺点**

1. 内部作用域中所定义的变量未及时销毁时会造成内存泄漏，内存泄露积累多了就容易导致内存溢出，导致页面卡顿

**示例**

会打印四个4，但是就是想根据顺序依次打印 1 2 3 4 呢

```ts
/**
 * 原因：首先根据JS执行顺序，会先执行完所有for循环，再去执行异步任务 setTimeout
 * 但是变量是使用 var 关键字声明的，此时的i是作用在全局的。执行完循环后i已经变成4了
 * 所以打印出来的i就都是4了
 */
for (var i = 0; i < 4; i++) {
  setTimeout(() => {
    console.log(i); // 打印四个 4
  }, i * 1000);
}

/**
 * 解决方式：使用闭包配合立即执行函数解决此问题
 * 此时的i作为参数传入立即执行函数当中，会存在到这个闭包当中
 */
for (var i = 0; i < 4; i++) {
  (function (i) {
    setTimeout(() => {
      console.log(i); // 打印四个 4
    }, i * 1000);
  })(i);
}
```

## 延迟加载脚本方式有哪些

一般 HTML 文件当中的 `script` 脚本引入我们会放置在 `body` 的下面，以确保浏览器优先加载 DOM

延迟加载的作用：确保等待页面加载完成之后再加载 JavaScript 脚本文件

延迟加载方式有：Async、Defer

- `<script async type="text/javascript" src="xxx.js"></script>`
- `<script defer type="text/javascript" src="xxx.js"></script>`

Async 和 Defer 的区别

1. Async（异步）：异步加载，加载完 JS 文件后会立即执行（无法保证多个 JS 文件的执行顺序）
2. Defer（延迟）：延迟加载，会和 HTML 的解析同步进行加载 JS，等待 HTML 解析完成后执行 JS 文件 （可以保证多个 JS 文件的执行顺序）

## 对事件循环的理解

首先，`JavaScript` 是一门单线程的语言，意味着同一时间内只能做一件事，但是这并不意味着单线程就是阻塞，而实现单线程非阻塞的方法就是事件循环

在 `JavaScript` 中所有任务都可以分为：同步任务、异步任务

- 同步任务：立即执行的任务，同步任务一般会直接进入到主线程中执行
- 异步任务：异步执行的任务，比如网络请求、定时函数、`.then()`等

![JS代码执行顺序](https://img-blog.csdnimg.cn/20200714184207672.png)

**总结 JS 的执行循序**：同步任务进入主线程，即主执行栈，异步任务进入任务队列，主线程内的任务执行完毕为空，会去任务队列读取对应的任务，推入主线程执行。上述过程的不断重复就事件循环

### 宏任务和微任务

任务队列 Event Queue：JS 中有两类任务队列。宏任务队列 和 微任务队列。宏任务队列可以有多个。微任务队列只能有一个

宏任务：全局任务（主线程的同步任务）、`setTimeout/setInterval`、I/O、UI、UI rendering

微任务：`Promise.then()`、`MutationObserver`、`process.nextTick（node.js 中进程相关的对象）`

![宏微任务执行关系](https://img-blog.csdnimg.cn/20200714184526268.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ0NjI0Mzg2,size_16,color_FFFFFF,t_70)

执行机制：执行一个宏任务，如果遇到微任务就将它放到微任务的事件队列中，当前宏任务执行完成后，会查看微任务的事件队列，然后将里面的所有微任务依次执行完。上述过程的不断重复

```js
console.log('1');
setTimeout(() => {
  console.log(2);
  new Promise((resolve, reject) => {
    console.log(3);
    resolve();
  }).then(() => {
    console.log(4);
  });
});
new Promise((resolve, reject) => {
  console.log(5);
  resolve();
})
  .then(() => {
    console.log(6);
  })
  .then(() => {
    console.log(7);
  });
setTimeout(() => {
  console.log(8);
  new Promise((resolve, reject) => {
    console.log(9);
    resolve();
  }).then(() => {
    console.log(10);
  });
});
```

:::details 解释说明

1. 先执行主线程的所有同步任务。打印：1 5
2. 在执行当前所有的微任务。打印：6 7
3. 进入事件循环中执行异步任务
4. 执行第一个 setTimeout 宏任务。 打印：2 3
5. 执行第一个 setTimeout 宏任务所有微任务。打印：4
6. 执行第二个 setTimeout 宏任务。打印：8 9
7. 执行第二个 setTimeout 宏任务所有微任务。打印：10

- 结果：1 5 6 7 2 3 4 8 9 10

**总结**：先执行主线程所有同步任务（宏任务）- 执行所有当前微任务 - 在执行异步任务（宏任务）- 在执行当前的所有微任务 - 周而复始

:::

### Async 和 Await

Async 函数返回一个 Promise 对象，Await 命令后面跟着一个 Promise 对象，如果不是就直接返回对应的值

Await 会阻塞后面代码的执行（后面代码会加入到微任务队列中），先执行外面的同步代码，同步代码执行完，再回到 Async 函数中，再执行之前阻塞的代码

```ts
async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}
async function async2() {
  console.log('async2');
}
console.log('script start');
setTimeout(function () {
  console.log('setTimeout');
});
async1();
new Promise(function (resolve) {
  console.log('promise1');
  resolve();
}).then(function () {
  console.log('promise2');
});
console.log('script end');
/**
 * script start
 * async1 start
 * async2
 * promise1
 * script end
 * async1 end
 * promise2
 * setTimeout
 */
```

:::details 解释说明

1. 先打印 `script start`，遇到 `setTimeout` 丢进任务队列中
2. 执行 `async1` 函数，打印 `async1 start`，执行 `async2` 函数打印 `async2`
3. 后面的任务被阻塞去执行其他的同步任务
4. 后面再打印 `promise1、script end` 执行完所有同步代码后
5. 先执行阻塞的代码，然后打印 `async1 end、promise2`
6. 最后执行异步任务的宏任务只有 `setTimeout` 了最后打印 `setTimeout`

:::

## JavaScript 预编译是什么

JavaScript 代码是由浏览器的 JS 解析器执行的。解析器在执行过程时分为两步：**预编译和代码执行**

预编译的概念：在当前作用域下，JS 代码执行前，浏览器会默认将带有 `var` 和 `function` 声明的变量和函数在内存中提前声明和定义

因此也有了变量提升和函数提升的概念，优先级：函数提升 > 变量提升

也就是说同样一个名称的函数和变量，函数会优先被声明，变量则会在后续声明，从而会覆盖声明的函数

## 原型与原型链

原型 `Prototype` 就是一个普通对象。它是为构造函数的实例共享属性和方法，所有实例中引用的原型都是同一个对象

- 所有的构造函数都是通过 Function 创建的
- 所以的对象都是通过 New 实例化出来的
- 所有的函数都是对象
- `prototype` -> 原型：本质就是一个对象
- `__proto__` -> 原型链（形成原型链的一个桥节点）

### 原型与原型链的总结

1. 构造函数中存在一个属性叫做 `prototype`（原型）
2. 对象都有一个隐藏属性 `__proto__`，这个属性指向着该实例对象的构造函数的 `prototype` 属性
3. 每个 `prototype` 原型对象的 `constructor` 指向构造函数本身

```js
// 构造函数 Test
function Test() {}

// 实例化对象 test
const test = new Test();

// 根据上面的两点结论得出
console.log(test.__proto__ === Test.prototype); // true
// 又因为 prototype 本质是一个对象，那么它自己本身也有一个 __proto__ 属性
// Test.prototype 是个对象，所以它的构造函数是Object
console.log(Test.prototype.__proto__ === Object.prototype); // true
// 同理 Object.prototype 也是个对象，但是Object是最顶层的了 所以它的 __proto__ 是 null
console.log(Object.prototype.__proto__); // null
// 所以这就是原型链的终点 也可以解释为什么 typeof null === 'object' 的原因
```

根据上面的描述可以总结出下面的结构内容：

```js
{
  Test.prototype = {
    __proto__: (Object.prototype = {
      __proto__: null,
    }),
  };
}
```

**总结：** `__proto__` 指向的是构造出自己的那个构造函数的 `prototype` 属性。而每个对象（包括构造函数）上都会有一个隐式 **proto** 去指向 prototype。最后形成一条链，指向的终点就是 Object。形成这条链后就又有另一个概念**原型继承**。如果去访问对象中某个属性，如果自身内部不存在那么就会去原型链上向上查找该属性。

### Function 和 Object

根据这三点去看本质

1. 所有的构造函数都是通过 Function 创建的
2. 所以的对象都是通过 new 实例化出来的
3. 所有的函数都是对象

```js
// 构造函数 Test
function Test() {}
// 实例化对象 test
const test = new Test();

// 1. 所有的构造函数都是通过 Function 创建的
console.log(Test.__proto__ === Function.prototype); // true
console.log(Object.__proto__ === Function.prototype); // true
// 那么构造函数 Function 本身呢由谁构造出来呢？
// 可以看到 Function 的构造函数是自己本身
console.log(Function.constructor); // ƒ Function() {}
// 所以下面这句话也是成立的
console.log(Function.__proto__ === Function.prototype); // true

// 从而推出这句话
console.log(Object.__proto__ === Function.__proto__); // true
```

总结：

1. 在 JS 中万物皆对象
2. 所有构造函数都是通过 `new Function()` 构造出来
3. `Object.__proto__ === Object.constructor.prototype`

## `slice` 和 `splice` 分别是干嘛的

`slice` 截取数组中某段片段，然后返回一个新的数组（切片）

```js
const arr = [1, 2, 3, 4, 5, 6];

arr.slice(1, 3); // [2, 3]
arr.slice(2); // [3, 4, 5, 6]
arr.slice(-2); // [5, 6]
```

`splice` 用来删除元素或添加数组元素，返回删除的数组，会改变原数组（拼接）

- `splice(index, many, ...items)`
- `index` 要从哪里开始删除元素
- `many` 删除多少个元素
- `items` 插入的到数组的元素

```js
const arr = [1, 2, 3, 4, 5, 6];

arr.splice(1, 1); // [1, 3, 4, 5, 6]
arr.splice(1, 0); // [1, 2, 3, 4, 5, 6]
arr.splice(1, 0, 7, 8, 9); // [1, 7, 8, 9, 2, 4, 5, 6]
```

## 实现数组去重的方式

### 第一种：`Array.from()` 和 `Set`

- `Set` 允许你存储任何类型的唯一值，无论是原始值或者是对象引用
- `Array.from()` 对一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例

```ts
const array = [12, 24, 30, 12, 31, 24, '你好', '天气', '你好'];
const clearRepeat = (array) => Array.from(new Set(array)); // [12, 24, 30, 31, '你好', '天气']
```

### 第二种：使用 `includes()` 去重操作

`indexOf` 也是同理的

```ts
const array = [12, 24, 30, 12, 31, 24, '你好', '天气', '你好'];
const clearRepeat = (array) => {
  const newArray = [];
  array.forEach((item) => {
    newArray.includes(item) ? void 0 : newArray.push(item);
  });
  return newArray;
};
console.log(clearRepeat(array));
```

### 第三种：`sort` 排序

对数组进行排序整理，循环遍历每一项都与自己的上一项去做比较

```ts
const array = [12, 24, 30, 12, 31, 24, '你好', '天气', '你好'];
const clearRepeat = (arr) => {
  arr = arr.sort();
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (i == 0) {
      newArray.push(arr[i]);
    } else {
      if (arr[i - 1] !== arr[i]) {
        newArray.push(arr[i]);
      }
    }
  }
  return newArray;
};
console.log(clearRepeat(array));
```

### 第四种：`filter` 过滤

```ts
function clearRepeat(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

const arr = [1, 2, 3, 4, 4, 5];
const uniqueArr = clearRepeat(arr);
console.log(uniqueArr); // 输出：[1, 2, 3, 4, 5]
```

## 函数内部 this 指向

函数的 `this` 在调用绑定时，完全取决于函数的调用位置。谁调用函数就指向谁

- 参考文章：https://juejin.cn/post/6844903746984476686#heading-0

## new 操作符具体做了什么

1. 创建了一个空对象
2. 将空对象的 `__proto__` 指向于构造函数的 `prototype` 原型
3. 执行这个函数并且使用`apply`改变函数的 this 指向。将空对象作为构造函数的上下文（改变 this 指向）
4. 对构造函数有返回值的处理判断（默认返回 this）

```ts
function Foo() {
  // return this 默认
  // return 11 如果返回值是基础数据类型，则会忽略，返回 this
  // return {test: '引用类型'} 如果返回值的是引用类型，则构造出来的对象就变成返回的引用数据
  this.name = '张三';
}
const foo = new Foo();
console.log(foo);
```

自定义实现：

```ts
function Cat(name, color) {
  this.name = name;
  this.color = color;
  console.log(this);
  // return {};
}

Function.createInstance = function (fn, ...rest) {
  // 1. 创建了一个空对象
  const obj = {};
  // 2. 将空对象的`__proto__` 指向于构造函数的`prototype`原型
  obj.__proto__ = fn.prototype;
  // 3. 执行这个函数并且使用`apply`改变函数的 this 指向
  // 将空对象作为构造函数的上下文（改变 this 指向）
  const result = fn.apply(obj, rest);
  // 4. 对构造函数有返回值的处理判断（默认返回 this）
  // 如果构造函数 return 的是一个基础数据类型 就默认返回 this
  // 如果构造函数 return 的是一个引用数据类型这返回这个引用数据
  // 构造函数默认返回 this
  return result instanceof Object ? result : obj;
};
// const cat = new Cat("小皮", 2);
Function.createInstance(Cat, '小皮', 2);
```

## `call`、`apply`、`bind` 的区别

作用：都是用来修改函数的 this 指向的

区别：

- `call`、`apply` 是立即执行，`bind` 不会立即执行，而是返回一个函数
- `apply` 第二个参数是数组. `call`、`bind` 有多少个参数就写多少个

```ts
var str = "你好";
var obj = { str: "这是obj对象内部的str" };
function fun(name) {
  this.name = name;
  console.log(this, this.str);
}

// call 立即执行
fun.call(obj, "张三"); // { str: "这是obj对象内部的str", name: '张三' } 这是obj对象内部的str
// apply 立即执行
fun.apply(obj，["张三"]); // { str: "这是obj对象内部的str", name: '张三' } 这是obj对象内部的str
// bind 不会立即执行，因为 bind 返回的是一个函数
fun.bind(obj, '张三')();  // { str: "这是obj对象内部的str", name: '张三' } 这是obj对象内部的str

fun(); // window{} 你好
```

### 手写 `call` 和 `bind`

原理：将执行函数作为临时属性添加到目标对象下，然后执行这个函数，此时函数的 this 就指向的是目标对象，最后再删除这个临时属性

区别就是：call 是立即执行、bind 是返回一个函数

```ts
const person = { str: 'obj对象内部的str' };
function fun(name, age) {
  this.name = name;
  this.age = age;
  console.log(this);
  return this;
}

Function.prototype.myCall = function () {
  // 将 arguments 转换为数组
  const propsArr = new Array(...arguments);
  // 如果没有传递参数时指向window
  if (propsArr.length === 0) propsArr[0] = window;
  const obj = propsArr.shift();
  obj.fn = this;
  // 此时调用 obj.fn() fn函数里面的this则是指向obj了
  const result = obj.fn(...propsArr);
  // 执行完函数fn，要将属性fn删除
  delete obj.fn;
  return result;
};
// fun.call(obj, "张三", 30);
console.log(fun.myCall(person, '张三', 30));

// 返回的是一个函数
Function.prototype.myBind = function () {
  // 将 arguments 转换为数组
  const propsArr = new Array(...arguments);
  // 如果没有传递参数时指向window
  if (propsArr.length === 0) propsArr[0] = window;
  const obj = propsArr.shift();
  obj.fn = this;
  return () => {
    // 此时调用 obj.fn() fn函数里面的this则是指向obj了
    const result = obj.fn(...propsArr);
    // 执行完函数fn，要将属性fn删除
    delete obj.fn;
    return result;
  };
};

// fun.bind(person, "张三", 20)();
fun.myBind(person, '张三', 20)();
```

## 深拷贝和浅拷贝

JavaScript 中存在两大数据类型：基本类型、引用类型

- 基本数据类型：进行变量赋值的时候拷贝的是**数据的值**
- 引用数据类型：进行变量赋值的时候拷贝的是**数据的值存放在堆中的内存地址**

### 浅拷贝、深拷贝

**浅拷贝**：创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。如果属性是基本类型，拷贝的就是基本类型的值。如果属性是引用类型，拷贝的就是内存地址

**深拷贝**：是将一个对象从内存中完整的拷贝一份出来，从堆内存中开辟一个新的区域存放新对象，且**修改新对象不会影响原对象**

### 浅拷贝的实现方式

`Object.assign()`、`展开运算符`、`concat()`、`slice()`

### 深拷贝的实现方式

`JSON.parse(JSON.stringify())`

这也是利用 JSON.stringify 将对象转成 JSON 字符串，再用 JSON.parse 把字符串解析成对象，一去一来，新的对象产生了，而且对象会开辟新的栈，实现深拷贝。**这种方法虽然可以实现数组或对象深拷贝,但不能处理函数和正则**，因为基于它处理后得到的正则不再是正则（变为空对象），得到的函数就不再是函数（变为 null）了

### 手写深拷贝

递归方法实现深度克隆原理：**遍历对象、数组直到里边都是基本数据类型，然后再去复制，就是深度拷贝**

```js
function deepClone(targetValue, hash = new WeakMap()) {
  // 基本数据类型
  if (typeof targetValue !== 'object') return targetValue;

  // 特殊情况
  if (targetValue instanceof Date) return new Date(targetValue);
  if (targetValue instanceof RegExp) return new RegExp(targetValue);

  // 如果对象属性引用的targetValue本身的情况下，就会出现无限递归的情况
  if (hash.has(targetValue)) return has.get(targetValue);

  const cloneValue = new targetValue.constructor();
  hash.set(targetValue, cloneValue);
  for (const key in targetValue) {
    cloneValue[key] = deepClone(targetValue[key], hash);
  }
  return cloneValue;
}
```

测试：

```ts
let obj = { name: 1, address: { x: 100 } };
obj.o = obj; // 对象存在循环引用的情况
let d = deepClone(obj);
obj.address.x = 200;
console.log(d);
```

## `var、const、let` 的区别

1. 使用 `var` 声明的变量存在变量提升的机制，`const、let` 则不存在这个机制了
2. `const` 声明的变量不可以被再次赋值
3. ES5 之前没有块级作用域的概念、ES6 之后 `const、let` 声明的变量有块级作用域了

## 函数节流和防抖

**节流和防抖函数**是前端性能优化的知识，在实际开发中遇到的情况相当高

**节流函数**：在函数执行一次后，该函数在指定时间内期限内不在工作，直到过了这段时间才能重新生效。就想水库的水阀一样只需要在指定时间打开即可

- 例子：页面滚动事件，如果不进行设置的话滚动事件执行次数非常高。通过节流函数则可以减少滚动事件执行次数

**防抖函数**：就是让事件延迟执行，处理函数只执行一次

- 例子：根据 Input 输入框的输入内容进行某种搜索，通常需要使用到防抖函数。只获取用户最后一次输出的整体内容再进行搜索。事件函数只用执行一次即可

**函数的实现**

```ts
/**
 * 节流函数
 * @param callback
 * @param delay
 */
export default function useThrottle(callback: Function, delay: number) {
  let record = Date.now();

  return function (this: unknown, ...rest: unknown[]) {
    const nowTime = Date.now();
    const context = this;
    const args = rest;
    if (nowTime >= record + delay) {
      record = Date.now();
      return callback.apply(context, args);
    }
  };
}
```

```ts
/**
 * 防抖函数
 * @param callback
 * @param delay （单位：毫秒）
 */
export default function useDebounce(callback: Function, delay: number) {
  let timer: any = null;
  return function (this: unknown, ...rest: unknown[]) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(callback.apply(this, rest), delay);
  };
}
```

## 函数柯里化的使用

- 柯里化通常称作为部分求值，其含义是给函数分步传递参数
- 每次传递参数进行处理，并返回一个更具体的函数接受剩下的参数
- 这中间可嵌套多层这样的接受部分参数的函数，直至返回最终结果

```ts
const sumFn = (...args) => {
  return args.reduce((a, b) => {
    return a + b;
  }, 0);
};

const currying = function (fun) {
  const args = [];
  return function result(...rest) {
    // 如果没有传递参数，那么就是返回结果
    if (rest.length === 0) {
      return fun(args);
    } else {
      // 如果传递了参数，那么就继续累加
      args.push(...rest);
      return result;
    }
  };
};

currying(sumFn)(1)(2)(3)(); // 6
currying(sumFn)(1, 2)(3, 4)(5)(); // 15
currying(sumFn)(1)(2, 3, 4, 5)(6)(); // 21
```

## 浏览器几种存储方式的的区别

Cookie 是属于文档对象模型 DOM 的一部分，而`SessionStorage`、`LocalStorage`是属于浏览器对象模型 BOM 的一部分

**Cookie** 是由服务端写入，在请求头中携带。有大小限制 `4K`、过期时间限制

**LocalStorage** 是永久存储，除非手动删除，否则永远不会消失。大小限制大概为 `5M`

**SessionStorage** 是会话级别的存储，页面关闭就会清除。大小限制大概为 `5M`

- 如果想删除一个 Cookie，只需要把它的过期时间设置成过去的时间即可。如果不设置过期时间，则表示这个 Cookie 生命周期为浏览器会话期间，只要关闭浏览器窗口，Cookie 就消失了
- 刷新页面 SessionStorage 不会清除，但是打开同域新页面访问不到

区别：

1. 存储大小限制不同
2. 数据有效期不同
3. 作用域不同：SessionStorage 不在不同的浏览器页面中共享，即使是同一个页面。LocalStorage 在所有同源窗口中都是共享的。Cookie 也是在所有同源窗口中都是共享的

## JavaScript 中判断变量类型的方法总结

- [推荐文章](https://blog.csdn.net/haotian1997/article/details/114577180?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-114577180-blog-106403998.t5_layer_eslanding_A_0&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-114577180-blog-106403998.t5_layer_eslanding_A_0&utm_relevant_index=1)

一共有四种方式来判断变量类型：`typeof`、`instanceof`、`constructor` 和 `Object.prototype.toString.call()`

1. `typeof`

介绍：`typeof` 只适合去判断基础数据类型的变量. 引用数据类型 Object 无论是对象还是数组等统一返回 `object`

- 特点：`typeof null` 会返回一个 object、`typeof function(){}` 会返回一个 function
- 缺点：`typeof` 对应引用数据类型来说，并不能很好的去判断其变量的具体类型

2. `instanceof`

介绍：`instanceof` 运算符用于检测构造函数的 `prototype` 属性是否出现某个实例对象的原型链上。简单来说就是来判断 A 是否为 B 的实例
`[] instanceof Array` ：实际上是判断 Array.prototype 是否在[]的原型链上

- 缺点：不管是数组对象还是正则对象，都是 Object 的实例，检测结果都是 TRUE ，所以无法基于这个结果判断是否为普通对象（Array、Date、RegExp 对象等）

加上是否处于原型链上的判断方法不严谨，instanceof 方法判断的是是否处于原型链上，而不是是不是处于原型链最后一位，所以会出现下面这种情况：

```ts
var arr = [1, 2, 3];
console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true
function fn() {}
console.log(fn instanceof Function); // true
console.log(fn instanceof Object); // true
```

其次，基本数据类型的实例是无法基于它检测出来的

- 不能检测基本数据类型
- 字面量方式创建的不能检测，构造函数创建的就可以检测

对于基本数据类型来说，字面量方式创建出来的结果和实例方式创建的是有一定区别的

```ts
console.log(1 instanceof Number); //false
console.log(new Number(1) instanceof Number); //true
```

对于特殊的数据类型 null 和 undefined，他们的所属类是 Null 和 Undefined，但是浏览器把这两个类保护起来了，不允许我们在外面访问使用

3. `constructor`

介绍：通过查看变量的构造函数来判断。还可以处理基本数据类型的检测

- 缺点：不能判断 `null` 和 `undefined`，因为它们不需要通过构造函数创建，所以是没有构造函数的

```ts
var aa = [1, 2];
console.log(aa.constructor === Array); //true
console.log(aa.constructor === RegExp); //false
console.log((1).constructor === Number); //true
var reg = /^$/;
console.log(reg.constructor === RegExp); //true
console.log(reg.constructor === Object); //false
```

4. `Object.prototype.toString.call()`

介绍：这个方法在 Object 的原型上，找到 Object.prototype 上的 toString 方法，让 toString 方法执行，并且基于 call 让方法中的 this 指向检测的数据值，这样就可以实现数据类型检测了

```ts
Object.prototype.toString.call(''); // [object String]
Object.prototype.toString.call(1); // [object Number]
Object.prototype.toString.call(true); // [object Boolean]
Object.prototype.toString.call(undefined); // [object Undefined]
Object.prototype.toString.call(null); // [object Null]
Object.prototype.toString.call(new Function()); // [object Function]
Object.prototype.toString.call(new Date()); // [object Date]
Object.prototype.toString.call([]); // [object Array]
Object.prototype.toString.call(new RegExp()); // [object RegExp]
Object.prototype.toString.call(new Error()); // [object Error]
Object.prototype.toString.call(document); // [object HTMLDocument]
Object.prototype.toString.call(window); //[object global] window是全局对象global的引用
```

## 如何阻止事件冒泡和默认事件

标准的 DOM 对象中使用事件对象的 `event.stopPropagation()` 方法来阻止事件冒泡，但是在 IE8 以下需要通过设置事件对象的 `cancelBubble` 属性为 `true` 来阻止冒泡

默认事件可以通过事件对象的 `event.preventDefault()` 方法来阻止，而 IE 则需要设置 `event.returnValue` 属性为 `false` 来阻止默认事件

## 简述输入网址到浏览器显示的过程

1. **解析 URL**：首先会对 URL 进行解析，分析所需要使用的传输协议和请求的资源的路径。如果输入的 URL 中的协议或者主机名不合法，将会把地址栏中输入的内容传递给搜索引擎。如果没有问题，浏览器会检查 URL 中是否出现了非法字符，如果存在非法字符，则对非法字符进行转义后再进行下一过程。

2. **缓存判断**：浏览器会判断所请求的资源是否在缓存里，如果请求的资源在缓存里并且没有失效，那么就直接使用，否则向服务器发起新的请求。

3. **DNS 解析**：下一步首先需要获取的是输入的 URL 中的域名的 IP 地址，首先会判断**本地**是否有该域名的 IP 地址的缓存，如果有则使用，如果没有则向**本地 DNS 服务器**发起请求。本地 DNS 服务器也会先检查是否存在缓存，如果没有就会先向**根域名服务器**发起请求，获得负责的**顶级域名服务器**的地址后，再向顶级域名服务器请求，然后获得负责的**权威域名服务器**的地址后，再向权威域名服务器发起请求，最终**获得域名的 IP 地址**后，本地 DNS 服务器再将这个 IP 地址返回给请求的用户。

4. **获取 MAC 地址**：当浏览器得到 IP 地址后，数据传输还需要知道目的主机 MAC 地址

5. **TCP 三次握手**： TCP 建立连接的三次握手的过程，首先客户端向服务器发送一个 SYN 连接请求报文段和一个随机序号，服务端接收到请求后向客户端发送一个 SYN ACK 报文段，确认连接请求，并且也向客户端发送一个随机序号。客户端接收服务器的确认应答后，进入连接建立的状态，同时向服务器也发送一个 ACK 确认报文段，服务器端接收到确认后，也进入连接建立状态，此时双方的连接就建立起来了。

6. **返回数据**：当页面请求发送到服务器端后，服务器端会返回一个 html 文件作为响应，浏览器接收到响应后，开始对 html 文件进行解析，开始页面的渲染过程。

7. **页面渲染**：浏览器首先会根据 html 文件构建 DOM 树，根据解析到的 css 文件构建 CSSOM 树，如果遇到 script 标签，则判端是否含有 defer 或者 async 属性，要不然 script 的加载和执行会造成页面的渲染的阻塞。当 DOM 树和 CSSOM 树建立好后，根据它们来构建渲染树。渲染树构建好后，会根据渲染树来进行布局。布局完成后，最后使用浏览器的 UI 接口对页面进行绘制。这个时候整个页面就显示出来了。

8. **TCP 四次挥手**：最后一步是 TCP 断开连接的四次挥手过程。若客户端认为数据发送完成，则它需要向服务端发送连接释放请求。服务端收到连接释放请求后，会告诉应用层要释放 TCP 链接。

## JSONP 的实现原理

JSONP 的原理是使用 `script` 标签来实现跨域，因为 `script` 标签的的 `src` 属性是不受同源策略的影响的，因此可以使用其来跨域。
一个最简单的 `JSONP` 就是创建一个 `script` 标签，设置相应的 `URL`，在 `URL` 之后添加相应的 `callback`，格式类似于 `url?callback=xxx`，服务端根据我们的 `callback` 来返回相应的数据，类似于 `res.send(req.query.callback + '('+ data + ')')`，这样就实现了一个最简单的 `JSONP`

## 手写模板字符串的实现

```ts
const str = 'Hello ${key} World ${name} 基础数据类型777';
String.prototype.template = function (params) {
  const handleStr = this;
  const newStr = handleStr.replace(/\$\{(.*?)\}/g, ($0, $1) => {
    return params[$1];
  });
  return newStr;
};
str.template({ key: '唯一', name: '模板字符串' });
```

## 实现 `instanceof`

原理：`instanceof` 用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上

方式： `object instanceof constructor`

```ts
function myInstanceOf(targetObj, targetConstructor) {
  // 如果 targetObj 不是一个引用数据类型或者没有传构造函数，直接返回 false
  if (typeof targetObj !== 'object' || targetConstructor === null) return false;
  // Object.getPrototypeOf() 获取原型
  let targetPrototype = Object.getPrototypeOf(targetObj);

  while (true) {
    // 如果对象原型是空的，返回false
    if (targetPrototype === null) return false;
    // 如果对象的原型和构造函数的原型相同，返回true
    if (targetPrototype === targetConstructor.prototype) return true;
    // 如果上面都没有，就获取对象的原型的原型，在此循环，知道找到或者为null
    targetPrototype = Object.getPrototypeOf(targetPrototype);
  }
}
```

## 实现 Promise 基本功能和相关 API

```ts
class Promise {
  PromiseState = 'pending';
  PromiseResult = null;

  callbacks = [];

  constructor(executor) {
    // 保存当前promise对象的实例
    const _self = this;

    // 调用 resolve方法 Promise的状态要修改为成功
    function resolve(value) {
      if (_self.PromiseState !== 'pending') return;

      _self.PromiseState = 'fulfilled';
      _self.PromiseResult = value;

      // 如果是异步修改状态值的话，则 callbacks 有对应的回调函数
      if (_self.callbacks.length !== 0) {
        _self.callbacks.forEach((item) => {
          item.onResolved();
        });
      }
    }
    // 调用 reject方法 Promise的状态要修改为失败
    function reject(reason) {
      if (_self.PromiseState !== 'pending') return;

      _self.PromiseState = 'rejected';
      _self.PromiseResult = reason;

      // 如果是异步修改状态值的话，则 callbacks 有对应的回调函数
      if (_self.callbacks.length !== 0) {
        _self.callbacks.forEach((item) => {
          item.onRejected();
        });
      }
    }

    try {
      // Promise 在初始化的时候会同步执行这个 executor 回调函数
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  // .then() 方法返回一个promise实例对象
  // 返回一个非Promise类型的值，则promise对象状态值修改为成功，结果为非Promise类型的值
  // 返回一个Promise类型的值，则该Promise类型的值返回的值为结果值，状态值修改为成功
  then(onResolved, onRejected) {
    return new Promise((resolve, reject) => {
      // 保存当前promise对象的实例
      const _self = this;

      const callback = (handle) => {
        const instanceResult = handle(_self.PromiseResult);
        if (instanceResult instanceof Promise) {
          instanceResult.then(
            (v) => {
              resolve(v);
            },
            (e) => {
              reject(e);
            },
          );
        } else {
          resolve(instanceResult);
        }
      };

      // 状态修改为 fulfilled 时 调用 onResolved()
      if (_self.PromiseState === 'fulfilled') {
        // const instanceResult = onResolved(_self.PromiseResult);
        // if (instanceResult instanceof Promise) {
        //   instanceResult.then(
        //     (v) => {
        //       resolve(v);
        //     },
        //     (e) => {
        //       reject(e);
        //     }
        //   );
        // } else {
        //   resolve(instanceResult);
        // }
        setTimeout(() => {
          callback(onResolved);
        });
      }

      // 状态修改为 rejected 时调用 onRejected()
      if (_self.PromiseState === 'rejected') {
        // const instanceResult = onRejected(_self.PromiseResult);
        // if (instanceResult instanceof Promise) {
        //   instanceResult.then(
        //     (v) => {
        //       resolve(v);
        //     },
        //     (e) => {
        //       reject(e);
        //     }
        //   );
        // } else {
        //   resolve(instanceResult);
        // }
        setTimeout(() => {
          callback(onRejected);
        });
      }

      // 如果是异步任务去修改Promise对象状态
      if (_self.PromiseState === 'pending') {
        // 保存这两个回调函数，等待状态修改，再去执行
        _self.callbacks.push({
          onResolved: function () {
            // onResolved(_self.PromiseResult);
            setTimeout(() => {
              callback(onResolved);
            });
          },
          onRejected: function () {
            // onRejected(_self.PromiseResult);
            setTimeout(() => {
              callback(onRejected);
            });
          },
        });
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }
  // 返回一个 rejected 状态的 Promise对象
  static reject(reason) {
    return new Promise((resolve, reject) => {
      reject(reason);
    });
  }

  // 传递一个带有多个Promise对象的数组，所有对象成功则算成功，有一个失败则算失败
  static all(values) {
    return new Promise((resolve, reject) => {
      let result = [];
      values.forEach((value, index) => {
        if (value.PromiseState !== 'fulfilled') {
          reject(value.PromiseResult);
          return;
        } else {
          result[index] = value.PromiseResult;
        }
      });
      resolve(result);
    });
  }

  // 传递一个带有多个Promise对象的数组，先执行的第一个promise对象则算成功
  static race(values) {
    return new Promise((resolve, reject) => {
      values.forEach((value, index) => {
        // 只有第一个执行promise就可以修改它的状态，其他的promise都被return了
        value.then(
          (v) => {
            resolve(v);
          },
          (r) => {
            reject(r);
          },
        );
      });
    });
  }
}
```

## 什么是跨域？如何处理跨域？

同源策略：只有 协议、域名、端口 一致才是同源的

跨域就是违反了浏览器的同源策略，浏览器是不支持跨域操作的

解决方式：服务器告诉浏览器，我允许你跨域了，你就可以访问相关资源文件

常见解决跨域的方式：

JSONP 利用 html 中的`script` src 属性获取其它源的数据

CORS 跨域资源共享 XMLHttpRequest 发送请求的时候，如果不同源会在请求头中添加一个属性 `Origin`。需要后台处理配置： `Access-control-allow-origin` 配置允许跨域的域名 或者配置 `*` 均可。跨域相关的响应头如下：

- `Access-Control-Allow-Origin`
- `Access-Control-Allow-Methods`
- `Access-Control-Allow-Headers`
- `Access-Control-Allow-Credentials`
- `Access-Control-Max-Age`

`Nginx` 反向代理，通过 Nginx 来接收客户端发送的请求，再通过 Nginx 进行转发，做跳板

## 预检请求

CORS 将请求分为两种 **简单请求（Simple Request）**、**非简单请求（Preflight Request）（请求方式为 OPTIONS）**

- 请求的方法只能是 GET, POST, HEAD 的一种
- 请求的 Header 的只能是 Accept，Accept-Language, Content-Language，Content-Type 这些字段，不能超出这些字段
- 对于请求的 header 的 Content-Type 字段，只能是以下值
  - `text/plain`
  - `multipart/form-data`
  - `application/x-www-form-urlencoded`

都满足以上条件的就是简单请求，否则就是非简单请求

比如我们经常使用的 `Content-Type:application/json; charset=utf-8`，这个请求就是非简单请求

但是如果不是简单请求，浏览器会在发出真正请求前，先发出预检请求，检查当前请求是否符合服务器的 cors 配置，如果符合，则再发出真正的请求。如果不符合，则直接返回跨域报错。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eb003d15b56c4264a0d6b9043911da49~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

预检请求不一定每一次都会产生

- 这个因为浏览器会对预检请求进行缓存
- 同时通过服务器端设置 Access-Control-Max-Age 字段来设置缓存时间
- 那么当第一次请求该 URL 时会发出 OPTIONS 请求，浏览器会根据返回的 Access-Control-Max-Age 字段缓存该请求的 OPTIONS 预检请求的响应结果（具体缓存时间还取决于浏览器的支持的默认最大值，取两者最小值，一般为 10 分钟）。在缓存有效期内，该资源的请求（URL 和 header 字段都相同的情况下）不会再触发预检。（chrome 打开控制台可以看到，当服务器响应 Access-Control-Max-Age 时只有第一次请求会有预检，后面不会了。注意要开启缓存，去掉 disable cache 勾选。）
- 如果值为 -1，表示禁用缓存，则每次请求前都需要使用 OPTIONS 预检请求。

## this 的指向包括哪几种

:::tip

- 在函数体中，非显示或隐式地调用函数时，在严格模式下，函数内的 this 会被绑定到 undefined 中。在非严格模式下则会被绑定到全局对象上
- 一般使用 New 操作符调用构造函数时，构造函数内的 this 会被绑定到新创建的对象上
- 一般通过 `call/apply/bind` 方法显示调用函数时，函数体内的 this 会被绑定到指定参数的对象上
- 一般通过上下文对象调用函数时，函数体内的 this 会被绑定到该对象上
- 在箭头函数中，this 的指向是由外层（函数或全局）作用域决定的
  :::

## JSON.stringify() 有什么缺点

1. 如果有属性是 Date 类型的，则通过 `JSON.stringify()` 后在 `JSON.parse()` 得到的结果不再是 Date 类型，而是字符串类型了

2. 如果有属性是正则类型的，则通过`JSON.stringify()` 后在 `JSON.parse()` 得到的结果会是个空对象

3. 如果有属性是 `undefined` 则在序列化后的结果属性会丢失

4. 如果有属性是 NAN、Infinity 则在序列化后的结果属性会变成 `null`

5. JSON.stringify()只能序列化对象的可枚举的自有属性，例如 如果 obj 中的对象是有构造函数生成的， 则使用 JSON.parse(JSON.stringify(obj))深拷贝后，会丢弃对象的 constructor

6. 如果对象中存在循环引用的情况也无法正确实现深拷贝；

## ESM 和 Commonjs 的导入导出有什么区别

:::tip
Commonjs 模块输出的是值拷贝。也就是说，一旦输出一个值，模块内部的变化不会影响这个值。

ESM 模块导入导出则是动态引用，并且不会缓存，模块里面的变量绑定的所有模块都是动态去加载值，并且不能重新赋值。
:::

## 求和 1 - 100

```ts
// 使用递归
function add(start, end) {
  let sum = start;
  if (start === end) {
    return end;
  } else {
    sum = sum + add(start + 1, end);
    return sum;
  }
}

// while循环
function add(start, end) {
  let sum = 0;
  while (true) {
    if (start > end) break;
    sum = sum + start;
    start++;
  }
  return sum;
}

console.log(add(1, 100)); // 5050
```

## `scrollWidth`、`clientWidth`、`offsetWidth` 的区别

:::tip
scrollWidth：DOM 对象的实际内容宽度，不包括滚动条边线宽度，会随着对象中内容超过可视区后而变大

clientWidth：DOM 对象的可视区的宽度，不包括滚动条边线宽度，会随着 DOM 对象显示大小的改变而改变

offsetWidth：DOM 对象整体的实际宽度，包括滚动条等边线宽度，会随着 DOM 对象显示大小的变化而改变

简单的说：

scrollWidth = width（可视区宽度（width + Padding）） + scroll（有滚动条被隐藏的区域宽度）

clientWidth = width（可视区宽度（width + Padding））

offsetWidth = width（可视区宽度（width + Padding））+ border

:::

## 手写 Flat 扁平化数组

```ts
const arr = [1, 2, 3, 4, [5, 6, 7, [8, 9, 10, [11, 12, 13]]], 14, 'string', { name: '前端收割机' }];
// 使用递归 实现扁平化
function myFlat(arr) {
  let res = []; // 存放扁平化结构的数组
  arr.forEach((item) => {
    // 判断当前元素是否为数组
    if (Array.isArray(item)) {
      // 递归调用
      res = res.concat(myFlat(item));
    } else {
      res.push(item);
    }
  });
  return res;
}

// reduce + 递归
function myFlat(arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? myFlat(cur) : cur);
  }, []);
}

// 利用栈去进行扁平
function myFlat(arr) {
  const res = [];
  // 将数组拷贝至栈，直接复制会改变原数组
  const stack = [].concat(arr);
  while (stack.length !== 0) {
    const value = stack.pop();
    if (Array.isArray(value)) {
      stack.push(...value);
    } else {
      res.unshift(value);
    }
  }
  return res;
}

// reduce + 递归 控制拉平的层数
function myFlat(arr, num = 1) {
  return num > 0
    ? arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? myFlat(cur, num - 1) : cur);
      }, [])
    : arr.slice();
}

console.log(myFlat());
console.log(myFlat(arr, 2));
```

## Ajax 原生基本使用

`Ajax` 全称 `Async JavaScript And XML`， 是一种创建交互式用于的网页开发技术，可以在不加载整个网页的情况下，与服务器交换数据，并且更新部分网页内容

基本流程：

1. 创建一个 Ajax 的核心对象 `XMLHttpRequest`
2. 通过 `XMLHttpRequest` 对象的 `open()` 方法与服务端建立连接
3. 构建请求所需要的数据内容，通过对象的 `send()` 方法发送给服务器端
4. 通过 `XMLHttpRequest` 对象提供的 `onreadystatechange` 事件监听服务器端你的通信状态
5. 接受并处理服务端向客户端响应的数据结果
6. 将处理结果更新到 HTML 页面中

```ts
function myAjax(options) {
  //创建XMLHttpRequest对象
  const xhr = new XMLHttpRequest();

  //初始化参数的内容
  options = options || {};
  options.type = (options.type || 'GET').toUpperCase();
  options.dataType = options.dataType || 'json';
  const params = options.data;

  //发送请求
  if (options.type === 'GET') {
    xhr.open('GET', options.url + '?' + params, true);
    xhr.send(null);
  } else if (options.type === 'POST') {
    xhr.open('POST', options.url, true);
    xhr.send(params);
  }

  //接收请求
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      let status = xhr.status;
      if (status >= 200 && status < 300) {
        options.success && options.success(xhr.responseText, xhr.responseXML);
      } else {
        options.fail && options.fail(status);
      }
    }
  };
}
```

使用方式如下：

```ts
myAjax({
  type: 'post',
  dataType: 'json',
  data: {},
  url: 'https://xxxx',
  success: function (text, xml) {
    //请求成功后的回调函数
    console.log(text);
  },
  fail: function (status) {
    ////请求失败后的回调函数
    console.log(status);
  },
});
```

## BOM 的理解，常用的 BOM 对象

`BOM` 全称 `Browser Object Model` 浏览器对象模型，提供了与浏览器进行交互的对象

作用就是和浏览器做一些交互功能，例如进行页面的前进、后退、刷新，浏览器的窗口发生变化，滚动条的滚动以及获取浏览器的一些信息

### Window

BOM 的核心对象就是 `window`，具有双重角色，即是浏览器的一个接口也是全局对象

因此所有在全局作用域中声明的变量、函数都会变成 `window` 对象的属性和方法

- `window.open()` 打开一个新的浏览器接口
- `window.close()` 关闭浏览器窗口
- `window.scrollTo()` 滚动浏览器滚动条
- `window.scrollBy()` 滚动浏览器滚动条

### Location

`location.reload()` 此 API 可以重新刷新当前页面。这个方法会根据最有效的方式刷新页面，如果页面自上一次请求以来没有改变过，页面就会从浏览器缓存中重新加载

如果要强制从服务器中重新加载，传递一个参数 true 即可

### Navigator

主要用来获取浏览器的属性，区分浏览器类型。属性较多，且兼容性比较复杂

### Screen

获取客户端信息，也就是浏览器窗口外面的客户端显示器的信息，比如像素宽度和像素高度

### History

主要用来操作浏览器 URL 的历史记录，可以通过参数向前，向后，或者向指定 URL 跳转

- `history.go()` 接收一个整数数字或者字符串参数：向最近的一个记录中包含指定字符串的页面跳转
- `history.forward()` 向前跳转一个页面
- `history.back()` 向后跳转一个页面
- `history.length()` 获取历史记录数

## DOM 常见操作

文档对象模型

### 创建节点

- 创建新元素：`const divEl = document.createElement('div')`
- 创建文本节点：`const textEl = document.createTextNode('content')`
- 创建文档碎片：`const fragment = document.createDocumentFragment()`
- 创建属性节点，可以是自定义属性：`const dataAttribute = document.createAttribute('custom')`

### 查询节点

```ts
document.getElementById('id属性值'); // 返回拥有指定id的对象的引用
document.getElementsByClassName('class属性值'); // 返回拥有指定class的对象集合
document.getElementsByTagName('标签名'); // 返回拥有指定标签名的对象集合
document.getElementsByName('name属性值'); // 返回拥有指定名称的对象结合
document / element.querySelector('CSS选择器'); // 仅返回第一个匹配的元素
document / element.querySelectorAll('CSS选择器'); // 返回所有匹配的元素
document.documentElement;
获取页面中的HTML标签;
document.body; // 获取页面中的BODY标签
document.all['']; // 获取页面中的所有元素节点的对象集合型
```

### 更新节点

```ts
document.innerHTML = 'ABC'; // 设置DOM节点的文本内容（会影响到子节点）
document.innerText / textContent; // 自动对字符串进行HTML编码，保证无法设置任何HTML标签
// 两者的区别在于读取属性时，innerText不返回隐藏元素的文本，而textContent返回所有文本
document.style.color = '#ff0000'; // 设置CSS
```

### 添加节点

- `appendChild` 把一个子节点添加到父节点的最后一个子节点
- `insertBefore` 把子节点插入到指定的位置
- `setAttribute` 在指定元素中添加一个属性节点，如果元素中已有该属性改变属性值

### 删除节点

- `removeChild()` 删除一个节点，首先要获得该节点本身以及它的父节点，然后，调用父节点的 removeChild 把自己删掉

## 什么是事件监听

首先需要区别清楚事件监听和事件监听器

在绑定事件的时候，我们需要对应的书写一个事件处理程序，来应对事件发生时的具体行为。
这个事件处理程序我们也称之为事件监听器

当事件绑定好后，程序就会对事件进行监听，当用户触发事件时，就会执行对应的事件处理程序。

关于事件监听，_W3C_ 规范中定义了 _3_ 个事件阶段，依次是捕获阶段、目标阶段、冒泡阶段。

- **捕获**阶段：在事件对象到达事件目标之前，事件对象必须从 _window_ 经过目标的祖先节点传播到事件目标。 这个阶段被我们称之为捕获阶段。在这个阶段注册的事件监听器在事件到达其目标前必须先处理事件。
- **目标** 阶段：事件对象到达其事件目标。 这个阶段被我们称为目标阶段。一旦事件对象到达事件目标，该阶段的事件监听器就要对它进行处理。如果一个事件对象类型被标志为不能冒泡。那么对应的事件对象在到达此阶段时就会终止传播。
- **冒泡** 阶段：事件对象以一个与捕获阶段相反的方向从事件目标传播经过其祖先节点传播到 _window_。这个阶段被称之为冒泡阶段。在此阶段注册的事件监听器会对相应的冒泡事件进行处理。

`element.addEventListener('type', listener, useCapture)`

useCapture：默认值为 false，表示事件冒泡。当设置为 true 时，表示事件捕获。

如果我们给元素定义了多个事件监听器并且设置了不同的 useCapture，记住永远都是 **先捕获后冒泡**

事件委托机制：就是利用了捕获、冒泡的原理。只指定一个事件处理程序，就可以管理某一类型的所有事件。

## 解释下什么是事件委托？以及它的应用场景？

### 是什么

事件代理：俗地来讲，就是把一个元素响应事件的函数委托到另一个元素

事件流的都会经过三个阶段： 捕获阶段 -> 目标阶段 -> 冒泡阶段，**而事件委托就是在冒泡阶段完成**

事件委托，会把一个或者一组元素的事件委托到它的父层或者更外层元素上，真正绑定事件的是外层元素，而不是目标元素

当事件响应到目标元素上时，会通过事件冒泡机制从而触发它的外层元素的绑定事件上，然后在外层元素上去执行函数

好处：可以大量节省内存占用，减少事件注册

阻止事件冒泡方法：`event.stopPropagation()`

### 应用场景

如果我们有一个列表，列表之中有大量的列表项，我们需要在点击列表项的时候响应一个事件

我们不需要给每个子节点都绑定上点击事件，只需要给它们的父级绑定事件

```html
<body>
  <ul id="list">
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
    <li>item 4</li>
  </ul>
  <script>
    document.getElementById('list').addEventListener('click', function (e) {
      var event = e || window.event;
      // event.target、event.srcElement 触发事件的目标元素
      var target = event.target || event.srcElement;
      if (target.nodeName.toLocaleLowerCase() === 'li') {
        console.log('the content is:', target.innerHTML);
      }
    });
  </script>
</body>
```

还有一种场景是利用事件委托来动态绑定事件

```html
<body>
  <input type="button" name="" id="btn" value="添加" />
  <ul id="ul1">
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
    <li>item 4</li>
  </ul>
  <script>
    const oBtn = document.getElementById('btn');
    const oUl = document.getElementById('ul1');
    const num = document.querySelectorAll('#ul1 li').length;

    //事件委托，添加的子元素也有事件
    oUl.onclick = function (ev) {
      ev = ev || window.event;
      const target = ev.target || ev.srcElement;
      if (target.nodeName.toLowerCase() == 'li') {
        console.log('the content is: ', target.innerHTML);
      }
    };

    //添加新节点
    oBtn.onclick = function () {
      num++;
      const oLi = document.createElement('li');
      oLi.innerHTML = `item ${num}`;
      oUl.appendChild(oLi);
    };
  </script>
</body>
```

## 通过 `.charCodeAt(index)` 获取指定字符的 Unicode 编码值

```ts
const str = 'ABC013';
console.log(str.charCodeAt(0)); // A -> 65
```

数字 Unicode 编码范围：48 - 57（0 到 9）
小写字母 Unicode 编码范围：97 - 122（a 到 z）
大小字母 Unicode 编码范围：65 - 90 （A 到 Z）

## 前端性能优化处理

### 代码方面

前端代码层面的优化：减少冗余代码，避免不必要的 DOM 操作，提高代码执行效率

- 慎用全局变量导致命名污染和不利于垃圾回收
- 尽量减少页面上样式的重排与重绘
- 节流、防抖
- 慎用闭包，减少内存泄露
- 使用 `defer` 属性，延迟加载 JS 脚本文件，保证页面被渲染出来

### 资源文件方面

资源文件层面的优化：减少静态资源文件体积，提高页面加载速度

- 资源图片一定要无损压缩
- 图片使用懒加载的形式
- 相关静态资源文件考虑使用 CDN

### 打包构建方面

打包构建层面的优化：减少打包后的文件体积，提高页面加载速度

- 经量使用支持 TreeShaking 的库和插件
- 利用构建工具抽离公共代码，提取公共文件（如 `node_modules` 可以独立开为一个文件）
- 可以将一些常用的库和插件配置 CDN
- 将打包后的代码进行压缩
- GZIP 压缩

### 浏览器方面

浏览器层面的优化：利用缓存策略、减少网络请求，加快页面渲染速度

- 尽量减少发送网络请求次数
- 开启浏览器的缓存策略（强缓存、协商缓存），从而减少向服务器发送网络请求的次数
- 做首次访问白屏加载动画（增加用户体验）

## 什么是伪数组

**伪数组**即 `arrayLike`，也称为类数组。是一种**按照索引存储数据**具有 `length` 属性的对象。因为是对象，所以不能调用数组的方法

常见的伪数组有：`arguments`、`document.querySelectorAll()` 等批量选择元素的方法的返回值

**如何将伪数组转换为数组**

- `Array.from()`
- `[].slice.call(arrayLike)`
- `[].concat.call(arrayLike)`
- 遍历伪数组的每一项，将其添加到一个新的数组

## 前端的内存泄露怎么理解

JS 里分配内存地址的对象，但是由于长时间没有释放或者没有办法清除，造成长期占用内存的现象，会让内存资源不足，从而影响程序的运行。

前端出现内存泄漏的情况有如下几种：

1. 闭包未释放：JavaScript 中使用闭包时需要注意，一些不再使用的变量引用仍然存在于内存中，如果未手动释放，会导致内存泄漏。
2. 全局变量没有被清楚：在网页中使用全局变量时，如果没有正确清除，这些变量会一直存在于内存中，导致内存泄漏。
3. 定时器未被清除：在网页中使用定时器时，如果没有正确清除已经结束的定时器，也会导致内存泄漏。
4. 事件未解绑：在绑定事件时需要注意解绑，否则这些事件处理函数会一直存在于内存中，导致内存泄漏。
5. DOM 引用未被清除：在网页中使用 DOM 元素时，如果没有正确清除这些元素，也会导致内存泄漏。
6. 多次绑定同一事件：如果一个事件被多次绑定，每次都创建了新的对象，而没有及时清除旧的对象，也会导致内存泄漏

## ES6+ 新特性有哪些

1. 块级作用域 Let、Const
2. 箭头函数
3. 模板字符串
4. 解构赋值
5. 默认参数
6. 对象，数组的扩展运算符
7. Promise：处理异步操作和回调地狱的问题，使异步代码更加清晰和可读
8. 类和继承：引入了类和继承语法，可以使用 `class` 和 `extends` 关键字来定义类和继承关系，避免了原型链的复杂性
9. 新增模块化（import、export）：避免了全局变量污染和命名冲突的问题
10. 新增 Set、Map、Symbol、Proxy、Reflect 等数据类型
11. 新增 Generator 函数
12. 新增 async/await 异步编程

## 浏览器的缓存策略

浏览器的缓存策略主要分为两种：强缓存（本地缓存）、弱缓存（协商缓存）

**强缓存**：浏览器在第一次请求资源时，会将资源的响应头中的缓存规则（如 Cache-Control 和 Expires）记录下来，下次请求时，如果缓存未过期，则直接从缓存中读取资源，不会向服务器发送请求

强缓存的优点是**可以减少网络请求，提高页面加载速度，但缺点是无法及时获取最新的资源**

<!-- TODO: ![](/202308091331-01.jpg) -->

**弱缓存**：当强缓存失效时，浏览器会向服务器发送请求，服务器会根据请求头中的 `If-Modified-Since` 或 `If-None-Match` 字段来判断资源是否发生了变化。如果资源未发生变化，则返回 304 状态码，告诉浏览器可以使用缓存中的资源，否则返回最新的资源。

弱缓存的优点是**可以及时获取最新的资源，但缺点是需要向服务器发送请求，增加了网络开销**

<!-- TODO: ![](/202308091331-02.jpg) -->

## 了解 PWA

PWA 是一种基于 Web 技术的应用程序开发方法，旨在提供类似原生应用的用户体验。

使用 PWA 有以下好处：

1. **离线访问**： PWA 允许用户在没有网络连接的情况下访问应用程序，通过缓存资源来提供离线体验
2. **快速加载速度**： PWA 使用了各种性能优化策略，例如缓存、懒加载和预加载，以确保应用程序快速加载
3. **可安装性**：用户可以将 PWA 添加到其设备的主屏幕，就像安装原生应用一样，无需通过应用商店
4. **推送通知**： PWA 具备向用户发送推送通知的能力，可以提高用户参与度和留存率
5. **跨平台兼容性**：PWA 可以在不同平台和设备上运行，无需单独开发多个版本的应用程序
6. **安全性**：PWA 使用 HTTPS 来确保数据传输的安全性，同时提供了一定程度的安全性保护，如内容安全策略（CSP）

## Map 和 WeakMap 的使用和区别

```js
const map = new Map();
map.set(1, 'number'); // 数字键
map.set('key', 'string'); // 字符串键

let obj = { id: 1 };
weakMap.set(obj, 'data'); // 正确
obj = null; // WeakMap 自动移除该键值对
```

1. Map 的 Key 可以是任意类型，WeakMap 的 Key 只能是对象
2. Map 的 Key 是强引用，即使键对象在其他地方无引用，Map 仍保留键值对，可能导致内存泄漏
3. WeakMap 的 Key 是弱引用，如果键对象在其他地方无引用，WeakMap 会自动清除键值对，释放内存
4. WeakMap 没有遍历方法，不能直接遍历。仅支持 `set()`、`get()`、`has()`、`delete()` 方法

使用场景：

- Map：数据缓存、复杂键映射
- WeakMap：临时存储数据对象、DOM 元数据

## Promise.all 的简单实现

```js
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    // 如果输入是空数组，立即resolve
    if (promises.length === 0) {
      return resolve([]);
    }

    const results = [];
    let completedCount = 0;

    promises.forEach((promise, index) => {
      // 确保每个元素都是Promise（处理非Promise值）
      Promise.resolve(promise)
        .then((result) => {
          results[index] = result;
          completedCount++;

          // 当所有Promise都完成时resolve
          if (completedCount === promises.length) {
            resolve(results);
          }
        })
        .catch(reject); // 任何一个Promise reject就立即reject
    });
  });
}
```

## 谈一下浏览器运行和优化策略

涉及到多个层面的技术，旨在提升页面加载速度、渲染效率及用户体验

### 浏览器运行核心流程

1. 关键渲染路径：

- 解析 HTML：构建DOM树（深度优先解析，遇到 `<script>` 脚本会阻塞）
- 解析 CSS：构建CSSOM树（层叠样式表，解析顺序影响最终样式）
- 布局 Layout：结合DOM和CSSOM计算元素几何位置（重排触发条件：视窗变化、字体加载等）
- 绘制 Paint：将元素绘制到屏幕上（重绘触发条件：元素样式变化、内容变化等）
- ​​合成 Composite​​：GPU加速合成图层（避免布局和绘制，直接触发合成最优）

2. JavaScript 引擎与事件循环

- V8引擎的优化（如JIT编译、隐藏类优化）。
- 宏任务（setTimeout、I/O）与微任务（Promise）的调度优先级。
- 长任务（>50ms）会阻塞交互，可通过Web Workers分流计算。

### 核心优化策略

1. 减少网络请求数量
2. 压缩几台资源文件
3. 利用浏览器缓存策略
4. CDN加速与预加载

### JavaScript 优化

1. 代码拆分​​：

- 按路由分割（React.lazy + Suspense）。
- Tree Shaking（ES6模块静态分析，移除未导出代码）。

2. ​内存管理​​：

- 避免全局变量（易导致内存泄漏）。
- 使用WeakMap/WeakSet管理临时引用。

​3. ​性能监控​​：

- Performance API测量FP/FCP/LCP等指标。
- Long Tasks API检测阻塞任务。
