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
