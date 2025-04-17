# 服务端实时推送 SSE

SSE 是 Server-Sent Events 的缩写，是一种允许服务器向浏览器发送实时数据的技术。与 WebSocket 不同，SSE 是单向的，只能从服务器向浏览器发送数据。

SSE 使用 HTTP 协议，通过 `text/event-stream` 媒体类型发送事件流。

SSE 的优点是简单易用，不需要复杂的配置，适合用于实时性要求不高的场景。

SSE 的缺点是只能从服务器向浏览器发送数据，不能从浏览器向服务器发送数据。

## 实现原理

SSE 的实现原理是服务器通过 HTTP 协议向浏览器发送事件流，浏览器通过 EventSource 对象接收事件流。

## 实现基本步骤

服务器端，以 NestJS 为例：

在 NestJS 中实现 SSE（Server-Sent Events）时，Observable 是一个非常重要的工具，它允许你以响应式的方式处理数据流。Observable 是 RxJS（Reactive Extensions for JavaScript）的核心概念，用于处理异步事件流。

MessageEvent 是 SSE 中用于表示事件的数据类型，返回的数据应该遵循以下接口以匹配规范：

```typescript
export interface MessageEvent {
  data: string | object;
  id?: string;
  type?: string;
  retry?: number;
}
```

```typescript
@Controller('events')
export class EventsController {
  @Sse('stream')
  stream(): Observable<MessageEvent> {
    // 每隔 1 秒主动推送一条消息
    return interval(1000).pipe(
      map((num) => ({
        data: { time: new Date().toISOString(), count: num },
      })),
    );
  }

  @Sse('stream2')
  stream2(): Observable<MessageEvent> {
    // 创建一个 Observable 数据流
    return new Observable<MessageEvent>((subscriber) => {
      let count = 0;
      const intervalId = setInterval(() => {
        const message = { message: `Hello from Server! Count: ${++count}` };
        subscriber.next(message); // 发送数据

        if (count === 10) {
          subscriber.complete(); // 完成推送
        }
      }, 1000);

      // 提供取消机制
      return () => {
        clearInterval(intervalId);
      };
    });
  }
}
```

2. 浏览器端：

官方文档：https://developer.mozilla.org/zh-CN/docs/Web/API/EventSource

```javascript
const eventSource = new EventSource('http://localhost:3000/sse/events');
eventSource.onmessage = (event) => {
  console.log('Received message:', JSON.parse(event.data));
};
eventSource.onerror = (error) => {
  console.error('SSE connection failed:', error);
  eventSource.close();
};
```

## Websocket 和 SSE 的区别

### 通信模式

WebSocket

- ​全双工通信：客户端和服务器可以同时双向发送数据​（类似电话通话）。
- 基于独立的协议（ws:// 或 wss://），在建立连接后保持持久通道。

SSE (Server-Sent Events)

- ​单向通信：仅支持服务器主动推送数据到客户端​（客户端无法通过SSE通道发送数据）。
- 基于HTTP协议（长轮询的升级版），服务器通过Content-Type: text/event-stream响应推送数据。

### 协议与连接

WebSocket

- 独立的协议，需要先通过HTTP升级握手（Upgrade: websocket），之后转为二进制帧传输。
- 连接一旦建立，双方可随时发送数据，延迟极低。

SSE

- 纯HTTP协议，无需升级，服务器通过长连接（保持TCP连接）推送事件流。
- 客户端通过标准EventSource API监听事件（如onmessage）。

### 数据格式

WebSocket

- 支持二进制和文本数据，灵活性强，需自定义数据格式（如JSON）。

SSE

- 仅支持文本（UTF-8），格式为data: ...\n\n的标准化事件流。
- 内置事件ID、重连机制等（如retry: 3000）。

### 适用场景

​WebSocket 更适合：

- 双向交互应用（如聊天室、在线游戏、协同编辑）。
- 需要低延迟传输二进制数据（如视频流、实时音视频）。

​SSE 更适合：

- 服务器主导的实时更新（如股票行情、新闻推送、监控日志）。
- 兼容性要求高（SSE基于HTTP，无需额外端口或协议支持）。

### 兼容性与实现

​WebSocket

- 需要服务器和客户端主动管理连接（如心跳检测、重连）。
- 可能被某些企业防火墙或代理拦截（非标准端口或协议）。

SSE

- 天然兼容HTTP/HTTPS，穿透性更好。
- 客户端自动处理断线重连（通过Last-Event-ID恢复）。
- ​不支持旧版IE（但可通过Polyfill解决）。

### 性能开销

- WebSocket：建立连接后开销极低（无HTTP头冗余），适合高频双向通信。
- SSE：每次推送仍携带HTTP头，但比传统轮询高效（长连接复用）。
