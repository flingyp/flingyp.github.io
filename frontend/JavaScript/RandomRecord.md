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
