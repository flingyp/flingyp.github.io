---
outline: deep
---

# Model Context Protocol（MCP）

Model Context Protocol (MCP) 是一种开放标准，旨在使大型语言模型 (LLM) 如 Claude 或 GitHub Copilot 通过标准化的接口与外部工具、应用程序和数据源交互。MCP 服务器作为桥梁，允许开发者定义 AI 可调用的工具和资源，从而增强 AI 的功能。

## Mcp Server

### 编写一个简单的 MCP Server

#### 步骤1：设置项目

初始化 Node.js 项目并配置 TypeScript：

```bash
pnpm add typescript @types/node --save-dev
pnpm add @modelcontextprotocol/sdk@latest zod
```

创建 tsconfig.json 文件：

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "Node16",
    "moduleResolution": "Node16",
    "outDir": "./build",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

#### 步骤2：编写 MCP 服务器

在 `src/index.ts` 中编写 MCP 服务器代码，提供一个 `get_current_time` 工具。

2.1 导入模块

```ts
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
```

2.2 创建服务器

```ts
//  初始化 MCP Server
const server = new McpServer({
  name: 'my-mcp-server',
  version: '1.0.0',
});
```

2.3 注册工具

```ts
// 使用 server.registerTool 注册 get_current_time 工具：
server.registerTool(
  'get_current_time',
  {
    title: 'Get Current Time',
    description: '获取当前时间',
    inputSchema: z.object({}),
  },
  async () => {
    return {
      content: [{ type: 'text', text: new Date().toISOString() }],
    };
  },
);

// title：工具的显示名称。
// description：工具用途描述，帮助 AI 理解。
// inputSchema：使用 zod 定义输入参数（此处为空）。
// handler：异步函数，返回包含 content 数组的结果。
```

2.4 启动服务器

```ts
// 使用 StdioServerTransport 启动服务器：
(async () => {
  const transport = new StdioServerTransport();
  await server.connect(transport);
})();
```

完整代码：

```ts
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';

const server = new McpServer({
  name: 'my-mcp-server',
  version: '1.0.0',
});

server.registerTool(
  'get_current_time',
  {
    title: 'Get Current Time',
    description: '获取当前时间',
    inputSchema: z.object({}),
  },
  async () => {
    return {
      content: [{ type: 'text', text: new Date().toISOString() }],
    };
  },
);

(async () => {
  const transport = new StdioServerTransport();
  await server.connect(transport);
})();
```

#### 步骤3：编译和运行

编译代码：`npx tsc`

输出文件位于 build 目录。运行服务器：`node build/index.js`

调试（可选）：使用 MCP Inspector 检查服务器：`npx @modelcontextprotocol/inspector@latest`

#### 步骤4：连接到 Cursor IDE

将服务器连接到 Cursor IDE：

打开 Cursor 设置：进入 Settings > MCP。点击 "Add new MCP server"。

添加服务器：输入命令：`node /absolute/path/to/your/build/index.js`。保存设置，检查工具列表：

在 MCP 设置中，确认 get_current_time 出现在 "Available Tools" 列表中。

#### 步骤5：测试工具

在 Cursor 中测试：进入 Agent 模式，输入提示如：“当前时间是多少？”。预期响应：

```json
{
  "content": [{ "type": "text", "text": "2025-06-19T14:28:00.000Z" }]
}
```

### `StdioServerTransport` 和 `StreamableHTTPServerTransport`

主要支持两种传输方式：`StdioServerTransport` 和 `StreamableHTTPServerTransport`。

- `StdioServerTransport` 适用于本地开发，通过标准输入/输出通信，简单易用

```ts
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
const transport = new StdioServerTransport();
await server.connect(transport);
```

- `StreamableHTTPServerTransport` 适合远程部署，支持 HTTP 双向通信，需要配置端口

```ts
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/http.js';
const transport = new StreamableHTTPServerTransport({ port: 3000 });
await server.connect(transport);
```

## MCP Client

## MCP Server List
