# JavaScript 杂记

## 1. 什么是闭包？为什么要用闭包？

执行上下文（执行环境）：全局环境（全局作用域）、函数环境（函数作用域）

:::tip
什么是闭包：一个函数和其周围状态的引用捆绑在一起，这样的组合就是闭包。也就是说，闭包让你可以在一个内层函数中访问到其外层函数的作用域。最典型的就是嵌套函数。

我们可以在内部函数中访问外部函数作用域的变量就可以采用闭包的形式
:::

:::tip

闭包的优点：

1. 可以在函数体外部访问内部函数的私有变量

2. 不需要将啥杂七杂八的变量都定义在全局环境当中。避免变量污染全局

3. 把变量存到独立的作用域，作为私有成员的存在

闭包的缺点：

1. 垃圾回收器不会将闭包中变量销毁，于是就造成了内存泄露，内存泄露积累多了就容易导致内存溢出

:::

```ts
// 问题：会打印四个4，但是就是想根据循环打印 1 2 3 4 呢
// 解释问题：首先根据JS执行顺序，会先执行完所有for循环，再去执行异步任务 setTimeout。但是变量是使用 var 关键字声明的，此时的i是作用在全局的。执行完循环后i已经变成4了，所以打印出来的i就都是4了
for (var i = 0; i < 4; i++) {
  setTimeout(() => {
    console.log(i); // 打印四个 4
  }, i * 1000);
}

// 使用闭包配合立即执行函数解决此问题，此时的i作为参数传入立即执行函数当中，会存在到这个闭包当中
for (var i = 0; i < 4; i++) {
  (function (i) {
    setTimeout(() => {
      console.log(i); // 打印四个 4
    }, i * 1000);
  })(i);
}
```

## 2. 延迟加载 JS 方式有哪些？

一般 HTML 文件当中的 `script` 脚本引入我们会放置在 `body` 的下面，以确保浏览器优先加载 DOM

延迟加载的作用：确保等待页面加载完成之后再加载 JavaScript 脚本文件

:::tip
延迟加载方式有： async、defer

`<srcipt async type="text/javascript" src="xxx.js"></script>`

`<srcipt defer type="text/javascript" src="xxx.js"></script>`
:::

**两者区别：**

- defer（延迟脚本）：如果给 `script` 标签定义了*defer* 属性，这个属性的作用是表明脚本在执行时不会影响页面的构造。也就是说，脚本会被延迟到整个页面都解析完毕后再运行。因此，如果 `script` 元素中设置了 defer 相当于告诉浏览器立即下载，但延迟执行。（下载完后，等待页面解析完毕再执行）

- async（异步脚本）：会告诉浏览器立即下载文件，标记为 `async` 的脚本，并不保证按照指定它们的先后顺序执行。（下载完后，立即执行）

## 3. JavaScript 数据类型有哪些？

:::tip
基本类型：string、number、boolean、undefined、null、symbol

引用类型：object

在 JavaScript 中，基本数据类型都是直接将值存放在栈中的，每种类型的数据占用内存空间都是确定的，并且有系统自动分配和自动释放。

在 JavaScript 中，引用类型的数据是将值存放在堆中，而堆中的引用地址是存放在栈中的。当我们访问这些值的时候，其实获取到的是堆的地址，之后才能访问到值。
:::

```ts
console.log(typeof NaN); // number
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(true + 1); // 2
console.log("name" + true); // nametrue
console.log(undefined + 1); // NaN
```

## 4. null 和 undefined 的区别？

:::tip
JavaScript 在最初设计的时候，参考了 Java 语言，所以有了 null。而 null 会被隐式转换成 0，不容易发现错误，所以为了弥补 null 的坑，出现了 undefined。

null 的字面意思是：空值 。这个值的语义是，希望表示一个对象被人为的重置为空对象，而非一个变量最原始的状态 。 在内存里的表示就是，栈中的变量没有指向堆中的内存对象

共同点：它们都表示的是一个无效的值

区别：null 是一个表示 无 的对象（空对象指针），undefined 一个变量自然的、最原始的状态值。

所以，在实际使用过程中，为了保证变量所代表的语义，不要对一个变量显式的赋值 undefined，当需要释放一个对象时，直接赋值为 null 即可。
:::

```ts
undefined == null; // true
undefined === null; // false
Number(null); // 0
Number(undefined); // NaN
```

## 5. == 和 === 的区别

**等于操作符**：在 `JavaScript` 中存在隐式转换。等于操作符 == 在比较中会先进行类型转换，再确定值是否相等

遵循以下规则：

```ts
// 1. 如果任一操作数是布尔值，则将其转换为数值再比较是否相等
console.log(true == 1); // true
// 2. 如果一个操作数是字符串，另一个操作数是数值，则尝试将字符串转换为数值，再比较是否相等
console.log("55" == 55); // true
// 3. 如果一个操作数是对象，另一个操作数不是，则会默认调用对象的 valueOf() 方法取得其原始值，再根据前面的规则进行比较
let obj = {
  a: 2,
};
obj.valueOf = function () {
  // 重写 valueOf 方法
  return 1;
};
console.log(obj == 1); // true
// 4. null 和 undefined 是相等
console.log(null == undefined); // true
// 5. 如果有任一操作数是 NAN，则相等操作符返回 false
console.log(NAN == NAN); // false
// 6. 如果两个操作数都是对象，则比较它们是不是同一个对象。如果两个操作数都指向同一个对象，则相等操作符返回true
let obj1 = { name: "xxx" };
let obj2 = { name: "xxx" };
console.log(obj1 == obj2); // false
```

**全等操作符**：由 3 个等于号 === 表示，只用在两个操作数在不转换的前提下相等才返回 true。即类型相同，值也要相同

## 6. JavaScript 微任务和宏任务

:::tip
JavaScript 是单线程语言。

JS 的代码执行循序：先执行主线程的同步任务，后执行事件循环 Event Table 中的异步任务（宏任务、微任务）。

异步任务包括：Ajax 请求、setTimeout、`promise.then()` 等

任务队列 Event Queue：JS 中有两类任务队列。宏任务队列 和 微任务队列。宏任务队列可以有多个。微任务队列只能有一个

宏任务：script（全局任务就是主线程的同步任务）, setTimeout, setInterval, setImmediate, I/O, UI rendering

微任务： process.nextTick （node.js 中进程相关的对象）, Promise.then、catch、finally, Object.observer, MutationObserver

:::

![JS代码执行顺序](https://img-blog.csdnimg.cn/20200714184207672.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ0NjI0Mzg2,size_16,color_FFFFFF,t_70)

先执行一个宏任务，查看是否有可执行的微任务，执行完所有微任务后再执行新的宏任务

![宏微任务执行关系](https://img-blog.csdnimg.cn/20200714184526268.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ0NjI0Mzg2,size_16,color_FFFFFF,t_70)

```js
console.log("1");
setTimeout(function () {
  console.log(2);
  new Promise(function (resolve, reject) {
    console.log(3);
    resolve();
  }).then(function () {
    console.log(4);
  });
});
new Promise(function (resolve, reject) {
  console.log(5);
  resolve();
})
  .then(function () {
    console.log(6);
  })
  .then(function () {
    console.log(7);
  });
setTimeout(function () {
  console.log(8);
  new Promise(function (resolve, reject) {
    console.log(9);
    resolve();
  }).then(function () {
    console.log(10);
  });
});
// 1 5 6 7 2 3 4 8 9 10
```

:::info

1. 先执行主线程的所有同步任务。打印：1 5

2. 在执行当前所有的微任务。打印：6 7

3. 进入事件循环中执行异步任务

4. 执行第一个 setTimeout 宏任务。 打印：2 3

5. 执行第一个 setTimeout 宏任务所有微任务。打印：4

6. 执行第二个 setTimeout 宏任务。打印：8 9

7. 执行第二个 setTimeout 宏任务所有微任务。打印：10

所以执行顺序是：1 5 6 7 2 3 4 8 9 10  
:::

**总结**：先执行主线程所有同步任务（一次宏任务）- 执行所有当前微任务 - 在执行异步任务（一次宏任务）- 在执行当前的所有微任务 - 周而复始

## 7. JavaScript 作用域

:::tip
静态作用域：静态作用域又叫词法作用域，JavaScript 就是静态作用域
:::

```js
var x = 10;
function f() {
  // 如果此处声明了变量x则返回的是自身作用域的局部变量x
  // var x = 30
  // 此时访问的x变量是全局变量x
  return x;
}
function g() {
  var x = 20;
  // 执行函数f，就去定义该函数的地方查找
  return f();
}
console.log(g());
```

上述代码中，函数 f 返回的 x 是外层定义的 x，也就是 10，我们调用 g 的时候，虽然 g 里面也有个变量 x，但是在这里我们并没有用它，用的是 f 里面的 x。也就是说我们调用一个函数时，如果这个函数的变量没有在函数中定义，就去定义该函数的地方查找，这种查找关系在我们代码写出来的时候其实就确定了，所以叫静态作用域

:::tip
变量提升：在 ES6 之前，我们申明变量都是使用 var，使用 var 申明的变量都是函数作用域，即在函数体内可见，这会带来变量提升的问题（即变量声明提前）
:::

```js
var x = 1;
function f() {
  console.log(x); // undefined
  var x = 2;
  console.log(x); // 2
}
f();
// 上面代码相当于如下代码：
var x = 1;
function f() {
  var x;
  console.log(x); // undefined
  x = 2;
  console.log(x); // 2
}
f();
```

在函数体内部使用了关键字`var`声明变量 x。所以它其实在整个函数内部可见，也就是说，变量 x 的声明相当于提前到了函数内部的最开始地方，但是变量赋值还是在运行的`x = 2`地方执行。所以第一个输出 `undefined`，第二个输出 `2`

:::tip
函数提升：和变量提升同理
:::

```js
function f() {
  x();
  // 普通函数声明提前
  function x() {
    console.log(1);
  }
}
f();
// 上面代码相当于如下代码：
function f() {
  function x() {
    console.log(1);
  }
  x();
}
f();
```

注意：将上面的 `x` 函数换成函数表达式就不行了，会报错

```js
function f() {
  x();
  var x = function () {
    console.log(1);
  };
}
f();
// 上面代码相当于如下代码：
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

:::tip
变量声明和函数声明的优先级谁更高？（如果有二个名称相同的变量和函数，谁优先级谁更高）

答案是：函数声明的优先级更高
:::

```js
var x = 1;
function x() {}
// 所以说是想声明了函数再声明了变量，从而覆盖了函数的声明
console.log(x); // 1
```

:::warning
参考文章：

https://blog.csdn.net/dennis_jiang/article/details/106157904
:::

## 8. JavaScript 预编译是什么

:::tip 介绍

JavaScript 代码是由浏览器的 JS 解析器执行的。解析器在执行过程时分为两步：**预编译和代码执行**

预编译的概念：在当前作用域下，JS 代码执行前，浏览器会默认将带有 `var` 和 `function` 声明的变量和函数在内存中提前声明和定义。

因此也有了变量提升和函数提升的概念。

优先级：函数提升 > 变量提升

也就是说同样一个名称的函数和变量，函数会优先被声明，变量则会在后续声明，从而会覆盖声明的函数。

:::

## 9. 原型与原型链

:::tip

必须知道的点：

1. 所有的构造函数都是通过 Function 创建的
2. 所以的对象都是通过 new 实例化出来的
3. 所有的函数都是对象

`prototype` -> 原型：本质就是一个对象

`__proto__` -> 原型链（形成原型链的一个桥节点）

:::

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
```

根据上面的描述可以总结出下面的结构内容：

```js
test: {
  __proto__: Test.prototype = {
    __proto: (Object.prototype = {
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

3. `object.__proto__ === object.contructor.prototype`

## 10. `slice` 和 `splice` 分别是干嘛的

:::tip
slice 用来截取数组中某段片段，返回一个新的数组

```ts
[1, 2, 3, 4, 5, 6]
  .slice(1, 3) // [2,3]
  [(1, 2, 3, 4, 5, 6)].slice(2) // [3,4,5,6]
  [(1, 2, 3, 4, 5, 6)].slice(-2); // [5,6]
```

splice 用来删除元素或添加数组元素，返回删除的数组，会改变原数组

`Array.prototype.splice(index, many, ...items)`

1. index 要从哪里开始删除元素

2. many 删除多少个元素

3. items 添加到数组的元素

```ts
[1, 2, 3, 4, 5, 6]
  .splice(1, 1) // [1,3,4,5,6]
  [(1, 2, 3, 4, 5, 6)].splice(1, 0) // [1,2,3,4,5,6]
  [(1, 2, 3, 4, 5, 6)].splice(1, 0, 7, 8, 9); // [1,7,8,9,2,4,5,6]
```

:::

## 11. 实现数组去重的方式

### 第一种：`Array.from()` 和 `Set`

:::tip 介绍
Set： 允许你存储任何类型的唯一值，无论是原始值或者是对象引用

`Array.from()`：对一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例
:::

```ts
const array = [12, 24, 30, 12, 31, 24, "你好", "天气", "你好"];
// 去重操作
const clearRepeat = (array: Array<unknow>) => Array.from(new Set(array)); // [12, 24, 30, 31, '你好', '天气']
```

### 第二种：使用 `includes()` 去重操作

`indexOf` 也是同理的

```ts
const array = [12, 24, 30, 12, 31, 24, "你好", "天气", "你好"];
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
const array = [12, 24, 30, 12, 31, 24, "你好", "天气", "你好"];
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

## 12. 函数内部 this 指向

:::tip 介绍
函数的`this`在调用绑定时，完全取决于函数的调用位置。谁调用函数就指向谁。

参考文章：https://juejin.cn/post/6844903746984476686#heading-0
:::

## 13. new 操作符具体做了什么

:::tip 介绍

1. 创建了一个空对象
2. 将空对象的`__proto__` 指向于构造函数的`prototype`原型
3. 执行这个函数并且使用`apply`改变函数的 this 指向。将空对象作为构造函数的上下文（改变 this 指向）
4. 对构造函数有返回值的处理判断（默认返回 this）

:::

```ts
function Foo() {
  this.name = "张三";
  // return this // 默认
  // return 11; // 如果返回值是基础数据类型，则会忽略，返回 this
  // return {test: '引用类型'} // 如果返回值的是引用类型，则构造出来的对象就变成返回的引用数据
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
  // 3. 执行这个函数并且使用`apply`改变函数的 this 指向。将空对象作为构造函数的上下文（改变 this 指向）
  const result = fn.apply(obj, rest);
  // 4. 对构造函数有返回值的处理判断（默认返回 this）
  // 如果构造函数 return 的是一个基础数据类型 就默认返回 this
  // 如果构造函数 return 的是一个引用数据类型这返回这个引用数据
  // 构造函数默认返回 this
  return result instanceof Object ? result : obj;
};
// const cat = new Cat("小皮", 2);
Function.createInstance(Cat, "小皮", 2);
```

## 14. `call`、`apply`、`bind` 的区别

:::tip 介绍

共同点：修改函数内部的 this 指向
区别：

1. call、apply 会立即执行。bind 不会立即执行，因为 bind 返回的是一个函数
2. 参数的传递：apply 第二个参数是数组. call、bind 有多少个参数就写多少个

:::

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

区别就是：call 是立即执行、bind 是返回一个函数

```ts
const person = { str: "obj对象内部的str" };
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
console.log(fun.myCall(person, "张三", 30));

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
fun.myBind(person, "张三", 20)();
```

## 15. 深拷贝和浅拷贝

### 数据类型存储

JavaScript 中存在两大数据类型：基本类型、引用类型

- 基本数据类型保存在栈内存中
- 引用数据类型的值保存在堆内存中，而将堆地址保存在栈中

:::tip 介绍
浅拷贝指的是创建新的数据，这个数据有着原始数据属性值的一份精确拷贝。如果属性是基本类型，则拷贝的是属性的值。如果属性是引用类型，则拷贝的就是内存地址。浅拷贝是拷贝一层，深层次的对象级别的就拷贝引用；深拷贝是拷贝多层，每一级别的数据都会拷贝出来
:::

#### 基础数据类型

例如 `let a = 1`

栈内存

| name | val |
| :--: | :-: |
|  a   |  1  |

- 当 `b = a` 赋值时， 栈内存会新开辟一块内存 用于存放 b

| name | val |
| :--: | :-: |
|  a   |  1  |
|  b   |  1  |

所以当你此时修改 a=2，对 b 并不会造成影响，因为此时的 b 已自食其力，翅膀硬了，不受 a 的影响了。当然，let a=1,b=a;虽然 b 不受 a 影响，但这也算不上深拷贝。因为深拷贝本身只针对较为复杂的 object 类型数据。

#### 引用数据类型

- 名存在栈内存中， 值也存在内存中。但是栈内存会提供一个引用地址指向推内存中的值

[](https://images2018.cnblogs.com/blog/1213309/201711/1213309-20171124133428359-1292133331.jpg)

- 当 b = a 进行拷贝时， 其实复制的是 a 的引用地址，而并非堆里面的值

![](https://images2018.cnblogs.com/blog/1213309/201711/1213309-20171124133647796-1390255671.jpg)

- 而当我们 a[0] = 1 是进行数据修改时，由于 a 与 b 指向的是同一个地址，所以自然 b 也受到影响了。 **这就是 浅拷贝**

![](https://images2018.cnblogs.com/blog/1213309/201711/1213309-20171124133934328-67216865.jpg)

- 如果，我们在堆内存中也开辟一个新的内存专门为 b 存放值， 就和基本类型那样。 就可以达到深拷贝的效果了

![](https://images2018.cnblogs.com/blog/1213309/201711/1213309-20171124140906203-2099568933.jpg)

### 如何实现 深拷贝

#### JSON.stringify 结合 JSON.parse 实现深拷贝

- JSON.stringify 把 JS 对象 转换为 字符串
- JSON.parse 把 JSON 字符串 转换为 JS 对象

```js
JSON.parse(JSON.stringify(arr));
```

:::tip 简单的实现深拷贝
深拷贝的原理就是： 基本类型 赋值的 原理。 在堆内存中也开辟一个新的内存专门为 b 存放值
:::

```js
// 深拷贝
function deepCopy(obj) {
  let copy = {};
  if (Array.isArray(obj)) copy = [];
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      copy[key] = deepCopy(obj[key]);
    } else {
      copy[key] = obj[key];
    }
  }
  return copy;
}
```

## 16. `var、const、let` 的区别

:::tip

1. 使用 `var` 声明的变量存在变量提升的机制，`const、let` 则不存在这个机制了

2. `const` 声明的变量不可以被再次赋值

3. ES5 之前没有块级作用域的概念、ES6 之后 `const、let` 声明的变量有块级作用域了

:::

## 17. 函数节流和防抖

**节流和防抖函数**是前端性能优化的知识，在实际开发中遇到的情况相当高

:::tip 节流函数
节流的含义就是在函数执行一次后，该函数在指定时间内期限内不在工作，直到过了这段时间才能重新生效。就想水库的水阀一样只需要在指定时间打开即可

例子：页面滚动事件，如果不进行设置的话滚动事件执行次数非常高。通过节流函数则可以减少滚动事件执行次数
:::

:::tip 防抖函数
防抖的含义就是让事件延迟执行，事件处理函数只执行一次

例子：根据 Input 输入框的输入内容进行某种搜索，通常需要使用到防抖函数。只获取用户最后一次输出的整体内容再进行搜索。事件函数只用执行一次即可
:::

**函数的实现**

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

## 18. 函数柯里化的使用

:::tip 函数柯里化

柯里化通常称作为部分求值，其含义是给函数分步传递参数。
每次传递参数进行处理，并返回一个更具体的函数接受剩下的参数。
这中间可嵌套多层这样的接受部分参数的函数，直至返回最终结果
:::

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
      return func(args);
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

## 19. JavaScript 中数组的方法总结

:::tip 数组方法总结

[Array.prototype.concat(...valueN)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)：用于合并两个或多个数组。不会改变现有数组，而是返回一个新数组。（可以合并数组或值）

[Array.prototype.entries()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/entries)：用于返回一个新的数组迭代器对象。该对象包含数组中每个索引的建/值对

[Array.prototype.every(callback, this)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every)：用于判断数组中每个元素是否可以通过回调函数的判断。返回 boolean 值，有一个元素未通过直接返回 `false`

[Array.prototype.some(callback, this)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some)：用于判断数组中是否有元素可以通过回调函数的判断。返回 boolean 值，有一个元素通过直接返回 `true`

[Array.prototype.fill(value, start?, end?)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)：用固定值 value 来填充数组，start 起始索引，end 是终止索引均为可选

[Array.prototype.filter(callback, this)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)：创建一个新数组，包含通过回调函数的所有元素，过滤没有通过回调函数的元素

[Array.prototype.find(callback, this)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find)：返回数组中通过回调函数的**第一个元素的值**，否则返回`undefined`

[Array.prototype.findLast(callback, this)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast)：返回数组中通过回调函数的**最后一个元素的值**，否则返回`undefined`

[Array.prototype.findIndex(callback, this)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)：返回数组中通过回调函数的**第一个元素的下标索引**，否则返回 `-1`

[Array.prototype.findLastIndex(callback, this)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex)：返回数组中通过回调函数的**最后一个元素的下标索引**，否则返回 `-1`

[Array.prototype.flat(depth?=1)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)

[Array.prototype.flatMap(callback, this)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)

扁平化数组，将数组中所有元素与遍历到的子数组的元素合并返回一个新数组（扁平化结构）。参数 depth 是指定要提取嵌套数组的结构深度，默认值为 1

[Array.prototype.includes(value)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)：用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回 false

[Array.prototype.indexOf(value)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)：返回在数组中指定元素的第一个元素下标索引，如果不存在，则返回-1

[Array.prototype.lastIndexOf(value)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)：返回在数组中指定元素的最后一个元素下标索引，如果不存在，则返回-1

[Array.prototype.isArray(value)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)：判断是否是数组

[Array.prototype.join(separator?=',')](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join)：将所用元素通过指定分隔符链接并且返回这个字符串

[Array.prototype.pop()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)：删除数组中最后一个元素，并且返回该元素。会改变原数组

[Array.prototype.shift()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)：删除数组中第一个元素，并且返回该元素。会改变原数组

[Array.prototype.push()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push)：向数组末尾添加元素

[Array.prototype.unshift()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push)：将一个或多个元素添加到数组的开头

[Array.prototype.reduce()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)：累加器。对数组中的每个元素按序执行一个 reducer 函数，每一次运行 reducer 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值

[Array.prototype.reverse()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)：将数组中元素的位置颠倒，并返回该数组。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。该方法会改变原数组

[Array.prototype.slice(start，end)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)：数组切片。返回一个新的数组，是由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括 end）。原始数组不会被改变

[Array.prototype.splice(start，number, item1, item2, ...)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)：通过删除或替换现有元素或者原地添加新的元素来修改数组，并以数组形式返回被修改的内容。此方法会改变原数组

[Array.prototype.sort(start，number, item1, item2, ...)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)：数组排序

:::

## 20. `Cookie、SessionStorage、LocalStorage` 的区别

它们都是浏览器的本地存储。都是存储在浏览器本地的

:::tip 区别

1. `Cookie` 是由服务端写入，而`SessionStorage、LocalStorage`都是有前端写入的

2. `Cookie` 是在由服务端写入的时候就设置了过期时间，`LocalStorage`是写入后就一直存在，除非手动清除它们，`SessionStorage` 页面关闭就会清除

3. `Cookie`的存储空间比较小大概 4KB，`SessionStorage、 LocalStorage`存储空间比较大，大概 5M

4. `Cookie、SessionStorage、 LocalStorage` 数据共享都遵循同源原则，SessionStorage 还限制必须是同一个页面

它们的应用场景也不同，Cookie 一般用于存储登录验证信息 SessionID 或者 token，LocalStorage 常用于存储不易变动的数据，减轻服务器的压力，SessionStorage 可以用来检测用户是否是刷新进入页面，如音乐播放器恢复播放进度条的功能

:::

## 21. JavaScript 中判断变量类型的方法总结

- [推荐文章](https://blog.csdn.net/haotian1997/article/details/114577180?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-114577180-blog-106403998.t5_layer_eslanding_A_0&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-114577180-blog-106403998.t5_layer_eslanding_A_0&utm_relevant_index=1)

一共有四种方式来判断变量类型：`typeof`、`instanceof`、`constructor`、`Object.prototype.toString.call()`

:::tip typeof

介绍：`typeof` 只适合去判断基础数据类型的变量. 引用数据类型 Object 无论是对象还是数组等统一返回 `object`

特点：`typeof null` 会返回一个 object、`typeof function(){}` 会返回一个 function

缺点：`typeof` 对应引用数据类型来说，并不能很好的去判断其变量的具体类型

:::

:::tip instanceof

介绍：`instanceof` 运算符用于检测构造函数的 `prototype` 属性是否出现某个实例对象的原型链上。简单来说就是来判断 A 是否为 B 的实例

`[] instanceof Array` ：实际上是判断 Array.prototype 是否在[]的原型链上

:::

缺点：不管是数组对象还是正则对象，都是 Object 的实例，检测结果都是 TRUE ，所以无法基于这个结果判断是否为普通对象（Array、Date、RegExp 对象等）。加上是否处于原型链上的判断方法不严谨，instanceof 方法判断的是是否处于原型链上，而不是是不是处于原型链最后一位，所以会出现下面这种情况：

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

:::tip constructor

介绍：通过查看变量的构造函数来判断。还可以处理基本数据类型的检测

缺点：不能判断 `null` 和 `undefined`，因为它们不需要通过构造函数创建，所以是没有构造函数的

:::

```ts
var aa = [1, 2];
console.log(aa.constructor === Array); //true
console.log(aa.constructor === RegExp); //false
console.log((1).constructor === Number); //true
var reg = /^$/;
console.log(reg.constructor === RegExp); //true
console.log(reg.constructor === Object); //false
```

:::tip Object.prototype.toString.call()

介绍：这个方法在 Object 的原型上，找到 Object.prototype 上的 toString 方法，让 toString 方法执行，并且基于 call 让方法中的 this 指向检测的数据值，这样就可以实现数据类型检测了

:::

```ts
Object.prototype.toString.call(""); // [object String]
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

## 22. 如何阻止事件冒泡和默认事件

:::tip

标准的 DOM 对象中使用事件对象的 `event.stopPropagation()` 方法来阻止事件冒泡，但是在 IE8 一下通过设置事件对象的 `cancelBubble` 属性为 `true` 来阻止冒泡。

默认事件科院通过事件对象的 `event.preventDefault()` 方法来阻止，而 IE 则需要设置 `event.returnValue` 属性为 `false` 来阻止默认事件。

:::

## 23. 简述输入网址到浏览器显示的过程

:::tip

DNS 解析：将域名解析成 IP 地址

TCP 连接：TCP 三次握手

发送 HTTP 请求

服务器处理请求并返回 HTTP 报文

浏览器解析渲染页面

断开连接：TCP 四次挥手

:::

## 24. JSONP 的实现原理

:::tip
JSONP 的原理是使用 `script` 标签来实现跨域，因为 `script` 标签的的 `src` 属性是不受同源策略的影响的，因此可以使用其来跨域。一个最简单的 `JSONP` 就是创建一个 `script` 标签，设置相应的 `URL`，在 `URL` 之后添加相应的 `callback`，格式类似于 `url?callback=xxx`，服务端根据我们的 `callback` 来返回相应的数据，类似于 `res.send(req.query.callback + '('+ data + ')')`，这样就实现了一个最简单的 `JSONP`
:::

## 25. 手写模板字符串的实现

```ts
const str = "Hello ${key} World ${name} 基础数据类型777";
String.prototype.template = function (params) {
  const handleStr = this;
  const newStr = handleStr.replace(/\$\{(.*?)\}/g, ($0, $1) => {
    return params[$1];
  });
  return newStr;
};
str.template({ key: "唯一", name: "模板字符串" });
```

## 26. 实现 `instanceof`

原理：`instanceof` 用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上

方式： `object instanceof constructor`

```ts
function myInstanceOf(targetObj, targetConstructor) {
  // 如果 targetObj 不是一个引用数据类型或者没有传构造函数，直接返回 false
  if (typeof targetObj !== "object" || targetConstructor === null) return false;
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

## 27. 实现 Promise 基本功能和相关 API

```ts
class Promise {
  PromiseState = "pending";
  PromiseResult = null;

  callbacks = [];

  constructor(executor) {
    // 保存当前promise对象的实例
    const _self = this;

    // 调用 resolve方法 Promise的状态要修改为成功
    function resolve(value) {
      if (_self.PromiseState !== "pending") return;

      _self.PromiseState = "fulfilled";
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
      if (_self.PromiseState !== "pending") return;

      _self.PromiseState = "rejected";
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
            }
          );
        } else {
          resolve(instanceResult);
        }
      };

      // 状态修改为 fulfilled 时 调用 onResolved()
      if (_self.PromiseState === "fulfilled") {
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
      if (_self.PromiseState === "rejected") {
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
      if (_self.PromiseState === "pending") {
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
        if (value.PromiseState !== "fulfilled") {
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
          }
        );
      });
    });
  }
}
```

## 28. 什么是跨域？如何处理跨域？

:::tip
同源策略：只有 协议、域名、端口 一致才是同源的

跨域：违反同源策略，浏览器是不支持跨域的

常见跨域方式：

1. JSONP 利用 html 中的`script` src 属性获取其它源的数据

2. CORS 跨域资源共享 XMLHttpRequest 发送请求的时候，如果不同源会在请求头中添加一个属性 `Origin`。需要后台处理配置： `Access-control-allow-origin` 配置允许跨域的域名 或者配置 `*` 均可

3. `Nginx` 反向代理，通过 Nginx 来接收客户端发送的请求，再通过 Nginx 进行转发，做跳板

:::

## 29. this 的指向包括哪几种

:::tip

- 在函数体中，非显示或隐式地调用函数时，在严格模式下，函数内的 this 会被绑定到 undefined 中。在非严格模式下则会被绑定到全局对象上
- 一般使用 New 操作符调用构造函数时，构造函数内的 this 会被绑定到新创建的对象上
- 一般通过 `call/apply/bind` 方法显示调用函数时，函数体内的 this 会被绑定到指定参数的对象上
- 一般通过上下文对象调用函数时，函数体内的 this 会被绑定到该对象上
- 在箭头函数中，this 的指向是由外层（函数或全局）作用域决定的
  :::

## 30. 什么是事件监听

:::tip
首先需要区别清楚事件监听和事件监听器。
在绑定事件的时候，我们需要对应的书写一个事件处理程序，来应对事件发生时的具体行为。
这个事件处理程序我们也称之为事件监听器。
当事件绑定好后，程序就会对事件进行监听，当用户触发事件时，就会执行对应的事件处理程序。
关于事件监听，_W3C_ 规范中定义了 _3_ 个事件阶段，依次是捕获阶段、目标阶段、冒泡阶段。

- **捕获**阶段：在事件对象到达事件目标之前，事件对象必须从 _window_ 经过目标的祖先节点传播到事件目标。 这个阶段被我们称之为捕获阶段。在这个阶段注册的事件监听器在事件到达其目标前必须先处理事件。
- **目标** 阶段：事件对象到达其事件目标。 这个阶段被我们称为目标阶段。一旦事件对象到达事件目标，该阶段的事件监听器就要对它进行处理。如果一个事件对象类型被标志为不能冒泡。那么对应的事件对象在到达此阶段时就会终止传播。
- **冒泡** 阶段：事件对象以一个与捕获阶段相反的方向从事件目标传播经过其祖先节点传播到 _window_。这个阶段被称之为冒泡阶段。在此阶段注册的事件监听器会对相应的冒泡事件进行处理。

`element.addEventListener('type', listener, useCapture)` useCapture：默认值为 false，表示事件冒泡。当设置为 true 时，表示事件捕获。

如果我们给元素定义了多个事件监听器并且设置了不同的 useCapture，记住永远都是 **先捕获后冒泡**

事件委托机制：就是利用了捕获、冒泡的原理。只指定一个事件处理程序，就可以管理某一类型的所有事件。
:::

## 31. ESM 和 Commonjs 的导入导出有什么区别

:::tip
Commonjs 模块输出的是值拷贝。也就是说，一旦输出一个值，模块内部的变化不会影响这个值。

ESM 模块导入导出则是动态引用，并且不会缓存，模块里面的变量绑定的所有模块都是动态去加载值，并且不能重新赋值。
:::

## 32. 求和 1 - 100

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

## 33. `scrollWidth`、`clientWidth`、`offsetWidth` 的区别

:::tip
scrollWidth：DOM 对象的实际内容宽度，不包括滚动条边线宽度，会随着对象中内容超过可视区后而变大

clientWidth：DOM 对象的可视区的宽度，不包括滚动条边线宽度，会随着 DOM 对象显示大小的改变而改变

offsetWidth：DOM 对象整体的实际宽度，包括滚动条等边线宽度，会随着 DOM 对象显示大小的变化而改变

简单的说：

scrollWidth = width（可视区宽度（width + Padding）） + scroll（有滚动条被隐藏的区域宽度）

clientWidth = width（可视区宽度（width + Padding））

offsetWidth = width（可视区宽度（width + Padding））+ border

:::

## 34. 手写 Flat 扁平化数组

```ts
const arr = [
  1,
  2,
  3,
  4,
  [5, 6, 7, [8, 9, 10, [11, 12, 13]]],
  14,
  "string",
  { name: "前端收割机" },
];
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

## 35. JavaScript 字符串的方法总结

:::tip
`String.prototype.charAt(index)`：返回字符串中指定下标的字符

`String.prototype.charCodeAt(index)`：返回字符串中指定下标字符的 Unicode 值

`String.prototype.concat(str1, [...strN])`：返回一个新的字符串，将一个或多个字符串与原字符串连接合并

`String.prototype.endsWith(str1)`：判断当前字符串是否是以另外一个固定的子字符串结尾的。根据结果返回 `true` 或 `false`

`String.prototype.startsWith(str1)`：判断当前字符串是否是以另外一个固定的子字符串开头的。根据结果返回 `true` 或 `false`

`String.prototype.includes(str1, position? = 0)`：判断一个字符串是否包含在另一个字符串中，根据情况返回 `true` 或 `false`

`String.prototype.indexOf(str, position? = 0)`：搜索整个调用字符串，并返回指定子字符串第一次出现的索引

`String.prototype.padEnd(targetLength, padString)`：用一个字符串填充当前字符串。第一个参数当前字符串需要填充到的目标长度。如果这个数值小于当前字符串的长度，则返回当前字符串本身。第二个参数体操的字符串默认是空

`String.prototype.padStart()`：与 padEnd 同理，填充左边

`String.prototype.repeat(n)`：返回一个字符串，重复 N 次原始字符串并连接

`String.prototype.slice(startIndex, endIndex?)`：返回一个新字符串，提取字符串某一段子字符串

`String.prototype.split(separator)`：用指定的分隔符分隔返回一个子字符串数组

`String.prototype.substring(startIndex, endIndex?)`：返回一个新字符串，从第一个参数下标开始到结尾下标（不包括）

`String.prototype.toLowerCase()`：将字符串转换为小写的返回

`String.prototype.toUpperCase()`：将字符串转换为大写的返回

`String.prototype.trim()`：删除字符串两端空白字符并且返回新字符串

`String.prototype.trimRight()`：删除字符串末端空白字符并且返回新字符串

`String.prototype.trimStart()`：删除字符串开头空白字符并且返回新字符串

:::

## 36. Ajax 原生基本使用

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
  options.type = (options.type || "GET").toUpperCase();
  options.dataType = options.dataType || "json";
  const params = options.data;

  //发送请求
  if (options.type === "GET") {
    xhr.open("GET", options.url + "?" + params, true);
    xhr.send(null);
  } else if (options.type === "POST") {
    xhr.open("POST", options.url, true);
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
  type: "post",
  dataType: "json",
  data: {},
  url: "https://xxxx",
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

## 37. BOM 的理解，常用的 BOM 对象

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

## 38. DOM 常见操作

文档对象模型

### 创建节点

- 创建新元素：`const divEl = document.createElement('div')`
- 创建文本节点：`const textEl = document.createTextNode('content')`
- 创建文档碎片：`const fragment = document.createDocumentFragment()`
- 创建属性节点，可以是自定义属性：`const dataAttribute = document.createAttribute('custom')`

### 查询节点

```ts
document.getElementById("id属性值"); // 返回拥有指定id的对象的引用
document.getElementsByClassName("class属性值"); // 返回拥有指定class的对象集合
document.getElementsByTagName("标签名"); // 返回拥有指定标签名的对象集合
document.getElementsByName("name属性值"); // 返回拥有指定名称的对象结合
document / element.querySelector("CSS选择器"); // 仅返回第一个匹配的元素
document / element.querySelectorAll("CSS选择器"); // 返回所有匹配的元素
document.documentElement;
获取页面中的HTML标签;
document.body; // 获取页面中的BODY标签
document.all[""]; // 获取页面中的所有元素节点的对象集合型
```

### 更新节点

```ts
document.innerHTML = "ABC"; // 设置DOM节点的文本内容（会影响到子节点）
document.innerText / textContent; // 自动对字符串进行HTML编码，保证无法设置任何HTML标签
// 两者的区别在于读取属性时，innerText不返回隐藏元素的文本，而textContent返回所有文本
document.style.color = "#ff0000"; // 设置CSS
```

### 添加节点

- `appendChild` 把一个子节点添加到父节点的最后一个子节点
- `insertBefore` 把子节点插入到指定的位置
- `setAttribute` 在指定元素中添加一个属性节点，如果元素中已有该属性改变属性值

### 删除节点

- `removeChild()` 删除一个节点，首先要获得该节点本身以及它的父节点，然后，调用父节点的removeChild把自己删掉