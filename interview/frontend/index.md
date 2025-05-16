---
outline: [2, 3]
navbar: true
sidebar: false
aside: true
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

1. 只说该岗位和自己技能相关的信息，无关的尽量不说
2. 开放性结尾：结尾的时候需要抛出一个能展开的点，这个点一定是你擅长的技术，便于让面试官接着问
3. 表情、神态和语调一定要显得真诚，谦虚（非常重要）
4. 逻辑性
5. 准备自我介绍逐字稿

**哪些话面试过程中千万不要说**

1. 上一个公司或者老板的坏话
2. 自己不能接受加班
3. 质疑面试官和公司的能力

自我介绍模板：

```markdown
我叫XX, xx年毕业于XXX（211/985可以说，其他的不说学校即可），计算机相关专业，本科（本科及以上才说学历）；
我在上一份工作中从事xxxx，独立负责多款混合app前端的开发，测试与发版，也负责开发各种前端H5项目；
我熟悉的技术有:
首先 ，我掌握了XXX， 曾应用在XXX项目中，开发了XX功能；客户反馈非常好，使得项目XXX，给公司来带了XXX收益；（用数据和案例说话）
除此之外，XX框架我也非常熟悉，XXX项目都是用到了这个XXX框架；
......
（自我介绍的最后，想让面试官接着问什么技术问题就介绍什么，主动引导本次面试的流程）
```

```markdown
问题来，如何做好自我面试?说清楚四点:
①个人信息:包括你的姓名、年龄、专业、毕业学校
②职业经验:说清楚自己往期的工作经验，待过哪些公司，具体做过什么，如果是应届毕业生，有实习经验说实习经验，没有的话也可以重点说自己在学校内接触过的项目经验。
③技术能力:简单介绍自己的技术栈，告诉对方你会什么?并且最擅长的技术是什么?比如性能优化、高并发、系统架构设计等等。比较对方考察你也是为了评估你与招聘岗位的匹配度。所以，可以针对对方公司招聘岗位的岗位职责去重点突出自己的能力。
④自我评价:记得要说优势!比如沟通能力、学习能力、逻辑性、效率高等等。谈吐一定要大方
```

## 项目难点或亮点介绍

### 系统更新的问题和处理

因为我们的项目是一直持续迭代的嘛，所以我们的项目经常会进行更新，有时候是迭代功能上线，有时候是BUG修复嘛。然后那个时候最近就是有一段时间，运营同事会反馈，他们的哪里哪里报错，哪里哪里接口系统繁忙。但是后续测试找他们去复线问题或者说自己排查问题，就其实找不到对应的问题。

然后这种情况出现几次了嘛，大部分都是在功能迭代后上线的第二天，然后就会有反馈，其实这个时候其实也就觉得是这方面的问题，用户系统的页面一直挂在电脑上嘛，所以有时候接口改了呀，页面改了呀，就有可能会出现这种问题嘛。

那这个时候我的思路和解决方法就是：编写一个 `vite` 打包时的插件工具，每次打包去记录这个当前开始打包的时间戳。

而 `vite` 也提供了一个这样的钩子 `buildStart`

1. 在每次项目打包结束的时候，记录一个当前打包的时间戳放在 `public/config.json` 文件下面
2. 然后进入页面的时候每次都把这个时间戳记录下来，然后每隔半个小时就去调接口，去获取下服务器上那个 `config.json` 文件上的时间戳，然后比对下
3. 然后发现这个时间戳小了，那就谈一个弹窗，引导用户点一下刷新按钮这样子
4. 还可以通过node去执行git命令呀，定义一些其他信息字段呀，比如记录最后一次提交的 commit 信息呀，提交人呀，然后存到 window 对象上
5. 这样子有出现问题，也好定位是截止到什么时候的问题

### 采集器自动识别功能的设计和实现

**背景**：采集器会有很多种类型的设备，它们厂商使用的协议也没有统一标准，所以我们在这块的时候都是公司需要对接哪个厂商的协议，就要单独写一个协议解析逻辑。但是我们识别的交互逻辑是相同，只是走不同厂商协议。

**任务**：在用户选择不同厂商协议后，开始识别、识别的过程中、以及识别结束成功或失败。我们都需要在本地记录状态信息和数据，然后还有将识别成功失败的数据通过MQTT上报给我们的后端网光平台，然后再我们自己的系统去DIY一些企业用户的需求。并且识别过程中的消息流也要实时的在页面上有所提现。

**行动**：我的处理就是，根据不同协议我们去写不同的解析逻辑，然后消息流通过 SSE 的形式实现，然后在外层传入一个识别需要参数的 `Object`、`observer`，和一个 `callback` 的回调方法，代码逻辑在到哪里了，通过 `observer` 传递，这个就由每个协议根据内部逻辑，自己去DIY消息流 message。但是识别成功失败，都要里面去调 `callback` 回调方法去通知外层，走统一的逻辑。

**最后结果**：设备识别解析的成功率到 90%，并且识别的过程消息流都能实时的在页面上展示。

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

**手写 `call`、`bind` 方法**

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

### 谈谈对深拷贝和浅拷贝的理解

基础数据类型不存在深拷贝和浅拷贝的问题，因为基础数据类型是值传递的，所以可以理解它一直都是深拷贝

- 深拷贝：是指创建一个新的对象，并复制原始对象的所有层级属性的值。这意味着不仅仅是顶层属性被复制，而且所有嵌套的对象和数组也会被递归地复制
- 浅拷贝：是指创建一个新对象，并复制原始对象的顶层属性值。如果属性值是一个基本数据类型，那么直接复制该值；如果属性值是一个引用类型（如对象或数组），则复制的是内存中的地址，而不是实际的对象或数组

```javascript
// 直接赋值：是直接拷贝对象的引用地址
let obj = {
  name: 'flingyp',
  age: 24,
};
let obj2 = obj;
console.log(obj === obj2); // true

// Object.assign 和 扩展运算符：使用 Object.assign 的第一层是深拷贝
let obj = {
  name: 'flingyp',
  score: {
    value: 98,
  },
};
let obj2 = Object.assign({}, obj);

obj2.name = 'change-flingyp';
obj2.score.value = 60;
console.log(obj); // {name: "flingyp", score: { value: 60 }}
console.log(obj2); // {name: "change-flingyp", score: { value: 60 }}
```

实现深拷贝的方式

- `JSON.parse(JSON.stringify(value))`

利用 JSON.stringify 将对象转成 JSON 字符串，再用 JSON.parse 把字符串解析成对象，一去一来，新的对象产生了，而且对象会开辟新的栈，实现深拷贝。这种方法虽然可以实现数组或对象深拷贝,但不能处理函数和正则，因为基于它处理后得到的正则不再是正则（变为空对象），得到的函数就不再是函数（变为 null）了

手写深拷贝

```javascript
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
  for (let key in targetValue) {
    cloneValue[key] = deepClone(targetValue[key], hash);
  }
  return cloneValue;
}
```

### 谈谈对函数的节流防抖的理解

**节流和防抖函数**是前端性能优化的知识，在实际开发中遇到的情况相当高

节流函数：在函数执行一次后，该函数在指定时间内期限内不在工作，直到过了这段时间才能重新生效。就想水库的水阀一样只需要在指定时间打开即可

- 例子：页面滚动事件，如果不进行设置的话滚动事件执行次数非常高。通过节流函数则可以减少滚动事件执行次数

防抖函数：就是让事件延迟执行，处理函数只执行一次

- 例子：根据 Input 输入框的输入内容进行某种搜索，通常需要使用到防抖函数。只获取用户最后一次输出的整体内容再进行搜索。事件函数只用执行一次即可

```javascript
/**
 * 节流函数
 * @param callback
 * @param delay
 */
export default function useThrottle(callback: Function, delay: number) {
  let record = Date.now();

  return function (this: unknown, ...rest: unknown[]) {
    const nowTime = Date.now();
    if (nowTime >= record + delay) {
      record = Date.now();
      return callback.apply(this, rest);
    }
  };
}
```

```javascript
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

### 谈谈 This 指向的理解

`this` 是一个特殊的关键字，它引用的是函数执行时的上下文对象。在函数被调用时确定，而不在函数定义时确定。所以取决于函数是如何被调用的

**全局上下文**：在全局作用域中，`this` 指向全局对象。如在浏览器环境中，全局对象是 `window`

```javascript
console.log(this); // window (在浏览器环境中)
```

**函数调用**：如果一个函数是作为一个普通函数被调用（即不是作为对象的方法或构造函数调用），那么 `this` 通常指向全局对象 （严格模式下则没有全局对象，为 `undefined`）

```javascript
function fn() {
  console.log(this);
}
fn(); // window (在浏览器环境中)
```

**对象方法**：当一个函数作为对象的方法被调用时，`this` 指向调用该方法的对象

```javascript
const obj = {
  prop: 'Hello',
  myMethod: function () {
    console.log(this.prop);
  },
};
obj.myMethod(); // 输出 "Hello"
```

**构造函数**：当函数用作构造函数（即使用 new 关键字调用）时，`this` 指向新创建的对象实例

```javascript
function MyConstructor() {
  this.prop = 'Hello';
}
const instance = new MyConstructor();
console.log(instance.prop); // 输出 "Hello"
```

**事件监听器**：在DOM事件监听器中，`this` 通常指向触发事件的元素

```javascript
const button = document.getElementById('myButton');
button.addEventListener('click', function () {
  console.log(this); // 指向 button 元素
});
```

**箭头函数**：箭头函数不绑定自己的 `this`，它会捕获其所在上下文的 `this` 值作为自己的 `this` 值。这意味着箭头函数内的 `this` 与其外部函数的 `this` 指向相同

```javascript
function MyObject() {
  this.value = 5;
  this.increment = () => {
    this.value++;
  };
}
const obj = new MyObject();
obj.increment();
console.log(obj.value); // 输出 6
```

`call`、`apply` 和 `bind` 方法：这三个方法可以用来显式地设置函数调用时的 `this` 值

```javascript
function myFunc() {
  console.log(this.prop);
}
const obj = { prop: 'Hello' };
myFunc.call(obj); // 输出 "Hello"
myFunc.apply(obj); // 输出 "Hello"
const boundFunc = myFunc.bind(obj);
boundFunc(); // 输出 "Hello"
```

### 谈谈前端内存泄露的理解

前端内存泄露是指在前端应用程序中，某些不再需要的对象或变量仍然占据着内存空间，导致可用内存逐渐减少，最终可能导致应用程序性能下降，甚至崩溃。内存泄露通常发生在动态分配内存并且后续忘记释放或者无法释放的情况下

主要与以下几个方面有关：

- **全局变量**：全局变量在整个应用程序的生命周期内都存在，如果不小心创建了一个全局变量并且忘记释放，它将会一直占用内存。
- **闭包**：JavaScript 中的闭包可以保留函数作用域链中的变量，如果这些变量很大或者闭包被频繁调用，可能会导致内存占用过多。
- **定时器**：如果使用了 setInterval 或 setTimeout 创建了定时器，但没有在适当的时候清除定时器，那么定时器函数和相关的作用域将不会被垃圾回收机制回收，导致内存泄露。
- **DOM 引用**：如果一个 JavaScript 对象引用了 DOM 元素，而这个 DOM 元素被从 DOM 树中移除了，但 JavaScript 对象仍然保留了对它的引用，那么这个 DOM 元素和相关的内存将不会被释放。
- **事件监听器**：如果给 DOM 元素添加了事件监听器，但在元素被移除后没有移除事件监听器，那么这个事件监听器相关的内存将不会被释放。
- **大对象或数组**：创建非常大的对象或数组，并且在不再需要时没有被正确清除，也会导致内存泄露。

### `new` 操作符过程做了哪些事情

1. 创建了一个空对象
2. 将空对象的 `__proto__` 指向于构造函数的 `prototype` 原型
3. 执行这个函数并且使用 apply 改变函数的 `this` 指向。将空对象作为构造函数的上下文（改变 `this` 指向）
4. 对构造函数有返回值的处理判断（默认返回 `this`）

```javascript
function Foo() {
  // return this 默认
  // return 11 如果返回值是基础数据类型，则会忽略，返回 this
  // return {test: '引用类型'} 如果返回值的是引用类型，则构造出来的对象就变成返回的引用数据
  this.name = '张三';
}
const foo = new Foo();
console.log(foo);
```

```javascript
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

### 总结判断数据类型的几种方式

一共有五种方式来判断变量类型：`typeof`、`instanceof`、`constructor`、 `Object.prototype.toString.call()` 和 `Array.isArray()`

- `typeof`：返回一个字符串，表示变量的数据类型（可以用来判断是否为基本还是引用数据类型）
- `instanceof`： 用于检测构造函数的 `prototype` 属性是否出现在对象的原型链中的任何位置。它主要用于检测对象是否由特定的构造函数创建
- `Object.prototype.toString.call(constantValue)`：这是一个更可靠的方式来获取对象的字符串表示，因为它可以正确地区分 null、undefined、数组和对象

```javascript
let numberVar = 123;
let stringVar = 'hello';
let booleanVar = true;
let undefinedVar;
let nullVar = null;
let objectVar = {};
let arrayVar = [];
let funcVar = function () {};

console.log(Object.prototype.toString.call(numberVar)); // "[object Number]"
console.log(Object.prototype.toString.call(stringVar)); // "[object String]"
console.log(Object.prototype.toString.call(booleanVar)); // "[object Boolean]"
console.log(Object.prototype.toString.call(undefinedVar)); // "[object Undefined]"
console.log(Object.prototype.toString.call(nullVar)); // "[object Null]"
console.log(Object.prototype.toString.call(objectVar)); // "[object Object]"
console.log(Object.prototype.toString.call(arrayVar)); // "[object Array]"
console.log(Object.prototype.toString.call(funcVar)); // "[object Function]"
```

- `constructor 属性`：每个对象都有一个 `constructor` 属性，它引用了创建该对象实例的构造函数

```javascript
let arrayVar = [];
console.log(arrayVar.constructor === Array); // true
```

- `Array.isArray()` 方法：专门用于检测一个对象是否为数组

### 谈谈对事件监听的理解
