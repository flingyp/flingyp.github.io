---
outline: [2, 3]
navbar: true
sidebar: false
aside: false
pageClass: frontend-interview_wrapper
---

<script setup lang="ts">
  import { NBackTop } from 'naive-ui'
</script>

<NBackTop :bottom="100" />

# 前端面试

关于面试方面的总结和技巧记录

[[toc]]

## 个人介绍

## 项目介绍

## 开源项目介绍

## JavaScript 答题思路

### 谈谈对前端闭包的理解

理解闭包的关键在于理解 **作用域、作用域链** 的概念，闭包就是一个函数和其周围状态的引用捆绑在一起，这样的组合就是闭包

就是说闭包可以让你访问到外层作用域下的引用（包括变量和函数），最典型的就是嵌套函数

这是因为 JavaScript 的函数是一等公民，可以作为变量传递，也可以作为返回值

优点：

- **变量私有化**：闭包可以创建私有变量，只能通过特定的公开方法进行访问和修改，增强了数据的安全性和封装性，避免了全局污染
- **回调和高阶函数**：闭包常用于回调函数，因为它们可以记住自己的词法环境，包括 `this` 和外部变量，非常适合于异步编程和事件处理
- **函数的记忆化**：闭包可以将函数的计算结果缓存起来，避免重复计算，从而提高执行效率

缺点：

- **内存泄漏**：内部变量过多时，会导致内存占用增加，影响性能

### 谈谈对事件循环的理解

事件循环和 JavaScript 中的执行模型是紧密相关的。首先 JavaScript 是一门单线程的语言，意味着同一时间内只能做一件事，但是这并不意味着单线程就是阻塞，而实现单线程非阻塞的方法就是事件循环

**事件循环的流程**：它监听并处理应用中的事件，当某个事件发生时（如，用户点击、网络请求和定时器触发等），事件循环会将事件放入事件队列中。然后，事件循环会查看调用栈是否为空，如果为空，则从事件队列中取出一个事件并执行相应的回调函数，将回调函数放入调用栈执行。这个过程会持续进行，形成一个循环，属于一个持续运行的循坏。

**总结 JavaScript 执行流程**：同步任务进入主线程，即主执行栈，异步任务进入任务队列，主线程内的任务执行完毕为空，去任务队列读取对应的任务，推入主线程执行。上述过程的不断重复就事件循环

而在任务队列当中，又区分为宏任务和微任务。

宏任务包括 全局任务（主线程的同步任务）、`script`、`setTimeout`、`setInterval` 等

微任务包括 `Promise.then()`、`MutationObserver`、`process.nextTick`（node.js 中进程相关的对象）

**总结宏任务和微任务的执行顺序**：在事件任务当中，会先依次执行所有宏任务，如果遇到微任务就将它放到微任务的事件队列中，等待宏任务执行完毕后，会查看微任务的事件队列，然后将里面的所有微任务依次执行完

### 谈谈对原型与原型链的理解

原型 Prototype 和原型链 Prototype Chain 与对象的创建、继承以及属性查找等机制紧密相关

原型 `prototype` 就是一个普通对象。它是为构造函数的实例共享属性和方法，所有实例中引用的原型都是同一个对象

1. 每个实例对象都有一个共有属性 `__proto__`，这个属性指向着该创建实例对象的构造函数的 `prototype` 属性
2. 构造函数中存在一个属性叫做 `prototype`（原型）
3. 每个 `prototype` 原型对象的 `constructor` 指向构造函数本身

```javascript
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

// 根据上面的描述可以总结出下面的结构内容：
test: {
  __proto__: Test.prototype = {
    __proto__: (Object.prototype = {
      __proto__: null,
    }),
  };
}
```

### 谈谈 `call`、`apply` 和 `bind` 的区别

它们都可以改变函数执行时的 `this` 指向。区别在于调用方式、参数传递以及返回值上存在差异

`call()` 方法会立即调用函数，第一个参数是函数中的 `this` 对象，其余的参数会按照顺序传入函数参数中

```javascript
function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}
const person = { name: 'John' };

greet.call(person, 'Hello', '!'); // 输出 "Hello, John!"
```

`apply()` 方法与 `call()` 类似，也是立即调用函数，但是参数是以数据或类数组对象的形式传递的

```javascript
function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const person = { name: 'John' };

greet.apply(person, ['Hello', '!']); // 输出 "Hello, John!"
```

`bind()` 方法与上面两者都不同，它不会立即调用函数，而是返回一个绑定 `this` 的新函数

```javascript
function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const person = { name: 'John' };

const boundGreet = greet.bind(person, 'Hello');
boundGreet('!'); // 输出 "Hello, John!"
```

**总结**

- `call()` 和 `apply()` 都会立即调用函数，区别在于参数传递的方式，call() 接受多个参数，而 apply() 接受一个数组或类数组对象作为参数
- `bind()` 则会返回一个新的函数，不会立即调用原函数。当新函数被调用时，预设的参数和调用时传入的参数会一起传递给原函数

### 手写 `call`、`bind` 方法

```javascript
const person = { name: 'John' };

function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

Function.prototype.myCall = function () {
  // 将 arguments 转换为数组
  const paramsList = new Array(...arguments);

  // 第一个参数是 this，将 this 指向第一个参数
  let obj = paramsList.shift();
  obj.fn = this;
  const result = obj.fn(...paramsList);

  // 删除 fn 属性
  delete obj.fn;

  return result;
};
greet.myCall(person, 'Hello', '!'); // 输出 "Hello, John!"

Function.prototype.myBind = function () {
  // 将 arguments 转换为数组
  const paramsList = new Array(...arguments);

  // 第一个参数是 this，将 this 指向第一个参数
  let obj = paramsList.shift();
  obj.fn = this;

  return () => {
    const result = obj.fn(...paramsList);

    // 执行完函数fn，要将属性fn删除
    delete obj.fn;

    return result;
  };
};
greet.myBind(person, 'Hello', '!');
```
