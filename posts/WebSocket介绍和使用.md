# WebSocket 介绍和使用

WebSocket 是基于 TCP 协议上，在用户的浏览器和服务器组件之间建立一个不受限的双向通信的通道，而无需通过 HTTP 轮询方式与服务器通信以获得响应

```ts
const socket = new WebSocket('ws://localhost:8080');

// 首次连接
socket.addEventListener('open', function (event) {
  socket.send('首次连接');
});

// 监听消息
socket.addEventListener('message', function (event) {
  console.log('监听消息 ', event.data);
});

// 连接关闭
socket.addEventListener('close', function (event) {
  console.log('连接关闭');
});

// 连接时发生错误
socket.addEventListener('error', function (event) {
  console.log('连接时发生错误');
});
```

VueUse 则提供了相应的钩子函数 [useWebSocket](https://vueuse.org/core/useWebSocket/) 进行了很好的封装

## WebSocket 断线重连

心跳检测就是客户端定时的给服务端发送消息，证明客户端是在线的， 如果超过一定的时间没有发送则就是离线了

## WebSocket 的特点

1. 建立在 TCP 协议之上，服务器端的实现比较容易
2. 与 HTTP 协议有着良好的兼容性。默认端口也是80和443，并且握手阶段采用 HTTP 协议，因此可以绕过大多数代理服务器
3. 数据格式比较轻量，性能开销小，通信高效
4. 可以发送文本，也可以发送二进制数据
5. 没有同源限制，客户端可以与任意服务器通信
6. 协议标识符是 `ws`（如果加密，则为 `wss`），服务器网址就是 URL
   - `ws:xx/xxx`

## 为什么需要 WebSocket

1. 因为 HTTP 协议有一个缺陷，通信只能由客户端发起，不具备服务器推送能力，所以在有一些业务场景下 HTTP 协议无法满足需求，HTTP 只能通过轮询的方式主动获取最新资源数据。
2. 而轮询的方式会消耗大量的带宽和 CPU 资源，并且会带来很多不必要的请求。WebSocket 则可以节省服务器资源
3. WebSocket 连接前的握手是依靠 HTTP 协议来完成，握手成功后，后续的数据传输不再使用 HTTP 协议，而是使用 TCP 协议
