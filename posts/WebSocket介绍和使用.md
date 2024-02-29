# WebSocket 介绍和使用

WebSocket 可以在用户的浏览器和服务器组件之间建立一个不受限的双向通信的通道，而无需通过 HTTP 轮询方式与服务器通信以获得响应

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
