# JavaScript 杂记

## 1. 什么是闭包？为什么要用闭包？

执行上下文（执行环境）：全局环境（全局作用域）、函数环境（函数作用域）

:::tip
什么是闭包：是指可访问另一个作用域下的变量的函数。或者说函数嵌套，内部函数就是闭包。

我们可以在内部函数中访问外部函数作用域的变量就可以采用闭包的形式。
:::

:::tip

闭包的优点：

1. 可以在外部访问闭包中的内部函数的局部变量

2. 不需要将啥杂七杂八的变量都定义在全局环境当中。避免变量污染全局

3. 把变量存到独立的作用域，作为私有成员的存在

闭包的缺点：

1. 变量会驻留在内存中，会造成内存损耗问题

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
2. 对象都有一个隐藏属性 `__proto__`，这个属性保存着该对象的构造函数 `contructor` 的 `prototype` 属性

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
3. 将空对象作为构造函数的上下文（改变 this 指向）
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
function Fun(age, name) {
  this.age = age;
  this.name = name;
}
function create(fn, ...args) {
  // 1. 创建了一个空对象
  var obj = {};
  // 2. 将空对象的`__proto__` 指向于构造函数的`prototype`原型
  Object.setPrototypeOf(obj, fn.prototype);
  // 3. 将空对象作为构造函数的上下文（改变 this 指向）
  var result = fn.apply(obj, args);
  // 4. 对构造函数有返回值的处理判断（默认返回 this）
  return result instanceof Object ? result : obj;
}
create(Fun, 18, "张三");
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

## 15. 深拷贝和浅拷贝

:::tip
浅拷贝是拷贝一层，深层次的对象级别的就拷贝引用；深拷贝是拷贝多层，每一级别的数据都会拷贝出来
:::

### 理解

#### 基本类型-> (名 和 值存储在栈内存中)

例如 let a = 1

栈内存

| name | val |
| :--: | :-: |
|  a   |  1  |

- 当 b = a 赋值时， 栈内存会新开辟一块内存 用于存放 b

| name | val |
| :--: | :-: |
|  a   |  1  |
|  b   |  1  |

所以当你此时修改 a=2，对 b 并不会造成影响，因为此时的 b 已自食其力，翅膀硬了，不受 a 的影响了。当然，let a=1,b=a;虽然 b 不受 a 影响，但这也算不上深拷贝。

因为深拷贝本身只针对较为复杂的 object 类型数据。

#### 引用数据类型

- 名存在栈内存中， 值也存在内存中。但是栈内存会提供一个引用地址指向推内存中的值

![](https://images2018.cnblogs.com/blog/1213309/201711/1213309-20171124133428359-1292133331.jpg)

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

#### 简单的实现深拷贝

:::tip
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
