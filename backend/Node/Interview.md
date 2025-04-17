# Node.js

## 01. NodeJS 是什么，它的优势是什么

NodeJS 是一个基于 **​Chrome V8 引擎** 的 ​JavaScript **运行时环境**。采用了 **事件驱动**、**非阻塞 I/O 模型**，使其轻量且高效，特别适合处理高并发的网络应用。

核心特点是：

1. ​JavaScript 运行时：可以在服务器端运行 JavaScript，统一前后端开发语言。
2. ​事件驱动：通过事件循环机制处理异步操作。
3. 非阻塞 I/O：I/O 操作不会阻塞主线程，适合处理大量并发请求。
4. 单线程：Node.js 是单线程的，但通过事件循环和异步 I/O 实现高并发。

NodeJS 优势就是 ：高性能、跨平台、生态系统丰富、轻量级、易学

NodeJS 局限性

1. Node.js 是单线程的，虽然可以通过事件循环处理大量并发请求，但如果主线程被阻塞（例如死循环或长时间运行的同步任务），整个应用都会受到影响。
2. 因为 Node.js 的单线程特性，不适合做 CPU 密集型的任务，比如图像处理、视频编码等。

## 02. NodeJS 环境和浏览器的区别是什么

1. 运行环境和用途不一样

- 浏览器：用于渲染网页、处理用户交互，执行前端 JavaScript（如 DOM 操作、事件处理）
- NodeJS：用于服务器端开发（如后端服务、文件操作、数据库交互），基于 V8 引擎，但扩展了系统级 API（如文件系统、网络模块）

2. 全局对象不一样

- 浏览器：全局对象是 `window`
- NodeJS：全局对象是 `global`

3. 模块系统不一样

- 浏览器只支持 ESM
- NodeJS：支持CJS和ESM

4. 事件循环实现的差异也不一样

- 浏览器：事件循环基于 ​HTML5 规范，包含宏任务（如 `setTimeout`）和微任务（如 `Promise`）。
  与渲染引擎（如重绘、回流）协同工作。
- NodeJS：事件循环分为多个阶段（如 `poll`、`check`、`timers`），由 `​libuv` 库实现。无渲染相关任务，但支持更复杂的异步 I/O 操作。

## 03. NodeJS 的事件循环机制是什么

Node.js 的事件循环分为 ​六个阶段，每个阶段执行特定的任务，并按顺序循环执行

1. Timers（定时器阶段）

- 执行 `setTimeout()` 和 `setInterval()` 的回调。
- 检查当前时间是否满足定时器的阈值，若满足则执行回调。

2. Pending I/O Callbacks（待定 I/O 回调阶段）​

- 执行上一轮循环中未处理的 ​系统级回调​（如 TCP 错误、文件操作错误等）。

3. ​Idle/Prepare（闲置阶段）​

- Node.js 内部使用的阶段，开发者无需关注。

4. Poll（轮询阶段）

- 核心阶段，主要处理 I/O 相关回调（如文件读取、网络请求）。
- 执行流程：
  - 检查是否有到期的定时器（Timers），若有则跳转到 ​Timers 阶段。
  - 执行 Poll 队列中的 I/O 回调（如 fs.readFile 的回调）。
  - 若 Poll 队列为空：
    - 如果有 setImmediate() 回调，进入 ​Check 阶段。
    - 否则，等待新的 I/O 事件（阻塞在此阶段）。

5. Check（检查阶段）

- 执行 `setImmediate()` 的回调（优先级高于 `setTimeout(fn, 0)`）。

6. Close Callbacks（关闭回调阶段）

- 执行 `close` 事件的回调（如 `socket.on('close', ...)`）。

### 微任务的执行时机

微任务（如 `Promise.then()`、`process.nextTick()`）​不属于事件循环的任一阶段，而是在以下时机执行：

- 每个阶段切换时：在事件循环的每个阶段结束后，会清空微任务队列。
- `process.nextTick()` 优先级最高，在当前操作完成后会立即执行

```js
const fs = require('fs');

fs.readFile('file.txt', () => {
  setTimeout(() => console.log('Timeout'), 0);
  setImmediate(() => console.log('Immediate'));
  process.nextTick(() => console.log('nextTick'));
});

// 输出顺序：nextTick → Immediate → Timeout
```

## 04. `process` 对象是什么，用来做什么的

`process` 是一个全局对象，提供了与当前 Node.js 进程相关的信息和操作。它是 Node.js 核心 API 的一部分，无需通过 `require` 引入即可直接使用

- 环境变量 `process.env`
- 命令行参数：`process.argv`
- 内存使用状况：`process.memoryUsage()`
- CPU 占用情况：`process.cpuUsage()`

## 05. `child_process` 模块如何创建子进程

- `child_process.spawn()` 最基本的创建子进程方法，适合长时间运行的进程
- `child_process.exec()` 适合执行简单命令并获取所有输出
- `child_process.execFile()` 类似 `exec()` 但直接执行文件而不是通过 shell。
- `child_process.fork()` 专门用于创建子进程，适合通信和共享内存

```js
const { spawn } = require('child_process');

// 创建子进程
const child = spawn('ls', ['-lh', '/usr']);

// 监听标准输出
child.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

// 监听标准错误
child.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

// 监听退出事件
child.on('close', (code) => {
  console.log(`子进程退出，退出码 ${code}`);
});
```

使用 `fork()` 创建子进程可以通过 `send()` 和 `message()` 事件进行通信

父进程 `parent.js`

```js
const { fork } = require('child_process');
const child = fork('./child.js');

child.send({ message: 'Hello from parent' });

child.on('message', (msg) => {
  console.log('Parent received:', msg);
});
```

子进程 `child.js`

```js
process.on('message', (msg) => {
  console.log('Child received:', msg);
  process.send({ message: 'Hello from child' });
});
```
