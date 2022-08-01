# JavaScript 杂记

## 1. 什么是闭包？为什么要用闭包？

执行上下文（执行环境）：全局环境（全局作用域）、函数环境（函数作用域）

:::tip
什么是闭包：是指可访问另一个作用域下的变量的函数。或者说函数嵌套，内部函数就是闭包。

我们可以在内部函数中访问外部函数作用域的变量就可以采用闭包的形式。
:::

:::tip
为什么要用闭包：

1. 使用闭包可以访问其他函数作用域下的变量

2. 不需要将啥杂七杂八的变量都定义在全局环境当中。避免变量污染全局

3. 把变量存到独立的作用域，作为私有成员的存在

注意点：

正常情况下，函数执行完成，内部变量会被销毁（释放内存空间）

在闭包的情况下，内部函数保存了对外部变量的引用并且没有被执行，所以导致变量不会被垃圾回收，会对内存消耗有影响。
:::

## 2. 延迟加载 JS 方式有哪些？

一般 HTML 文件当中的 `script` 脚本引入我们会放置在 `body` 的下面，以确保浏览器优先加载 DOM

延迟加载的作用：确保等待页面加载完成之后再加载 JavaScript 脚本文件

:::tip
延迟加载方式有： async、defer

`<srcipt async type="text/javascript" src="xxx.js"></script>`

`<srcipt defer type="text/javascript" src="xxx.js"></script>`
:::

**两者区别：**

- async：async 是和 html 加载同步的（一起），不是顺次执行 JS 脚本（谁先加载完谁先执行）

- defer：等 html 全部加载完成，才会执行 JS 代码，顺次执行 JS 脚本文件

## 3. JavaScript 数据类型有哪些？

:::tip
基本类型：string、number、boolean、undefined、null、symbol

引用类型：object
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

:::tip
== 比较的是值，之间的比较会存在隐式转换

=== 除了比较值，还比较两者的类型
:::

```ts
console.log(1 == "1"); // true  string 转换为 number
console.log(true == 1); // true  boolean 转换为 number
console.log(null == undefined); // true
console.log([1, 2] == "1,2"); // true
```

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
