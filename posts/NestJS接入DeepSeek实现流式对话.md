---
outline: deep
---

# NestJS 接入 DeepSeek 实现流式对话

## 项目环境准备

首先需要安装必要的依赖包：

```bash
pnpm add openai # DeepSeek API 与 OpenAI API 格式兼容
```

## 创建 DeepSeek 服务

创建一个专门的服务来处理与 DeepSeek API 的交互：

```typescript
import { Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi } from 'openai';

@Injectable()
export class DeepSeekService {
  private openai: OpenAIApi;

  constructor() {
    const configuration = new Configuration({
      apiKey: process.env.DEEPSEEK_API_KEY,
      basePath: 'https://api.deepseek.com/v1', // DeepSeek API 地址
    });
    this.openai = new OpenAIApi(configuration);
  }

  async createChatCompletion(messages: any[]) {
    try {
      const response = await this.openai.createChatCompletion({
        model: 'deepseek-chat',
        messages,
        temperature: 0.7,
        stream: true,
      });
      return response;
    } catch (error) {
      throw new Error(`DeepSeek API 调用失败: ${error.message}`);
    }
  }
}
```

## 实现流式响应控制器

创建一个控制器来处理客户端的聊天请求：

```typescript
import { Controller, Post, Res, Body } from '@nestjs/common';
import { Response } from 'express';
import { DeepSeekService } from './deepseek.service';

@Controller('chat')
export class ChatController {
  constructor(private readonly deepSeekService: DeepSeekService) {}

  @Post('stream')
  async chatStream(@Body() body: { messages: any[] }, @Res() res: Response) {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    try {
      const response = await this.deepSeekService.createChatCompletion(body.messages);

      for await (const chunk of response.data) {
        const content = chunk.choices[0]?.delta?.content || '';
        if (content) {
          res.write(`data: ${JSON.stringify({ content })}\n\n`);
        }
      }

      res.write('data: [DONE]\n\n');
      res.end();
    } catch (error) {
      res.write(`data: ${JSON.stringify({ error: error.message })}\n\n`);
      res.end();
    }
  }
}
```

## 前端实现 SSE 连接

使用 EventSource 在前端实现流式接收：

```typescript
const connectToSSE = async (messages: any[]) => {
  const eventSource = new EventSource('/api/chat/stream', {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ messages }),
  });

  eventSource.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data === '[DONE]') {
      eventSource.close();
      return;
    }

    // 处理接收到的消息片段
    console.log(data.content);
  };

  eventSource.onerror = (error) => {
    console.error('SSE Error:', error);
    eventSource.close();
  };
};
```

## Markdown 格式化处理

为了支持 Markdown 格式的输出，我们需要在服务端添加相应的处理：

```typescript
import { marked } from 'marked';

@Injectable()
export class MarkdownService {
  formatToMarkdown(text: string): string {
    // 使用 marked 将文本转换为 Markdown 格式
    return marked(text);
  }
}

// 在控制器中使用
@Post('stream')
async chatStream(@Body() body: { messages: any[] }, @Res() res: Response) {
  // ... 前面的代码 ...

  for await (const chunk of response.data) {
    const content = chunk.choices[0]?.delta?.content || '';
    if (content) {
      const markdownContent = this.markdownService.formatToMarkdown(content);
      res.write(`data: ${JSON.stringify({ content: markdownContent })}\n\n`);
    }
  }

  // ... 后面的代码 ...
}
```

## 环境配置

在项目根目录创建 `.env` 文件：

```txt
DEEPSEEK_API_KEY=your_api_key_here
```

确保在 `app.module.ts` 中正确配置环境变量：

```typescript
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // ... 其他模块
  ],
})
export class AppModule {}
```

### 注意事项

- 确保正确处理 API 密钥的安全性，避免直接在代码中暴露
- 实现适当的错误处理和重试机制
- 考虑添加速率限制以防止 API 滥用
- 在生产环境中实现适当的日志记录
- 考虑实现消息队列以处理高并发场景
