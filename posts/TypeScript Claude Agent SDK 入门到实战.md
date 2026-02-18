---
outline: deep
date: 2026-01-09
tags:
  - TypeScript
  - AI
  - Claude SDK
  - Agent
---

# TypeScript Claude Agent SDK 入门到实战

> 本教程面向 TypeScript/Node.js 开发者，详细介绍如何使用 Claude Agent SDK 构建 AI 应用

## 目录

- [1. 简介](#1-简介)
- [2. 环境准备](#2-环境准备)
- [3. 第一个 Agent](#3-第一个-agent)
- [4. 核心 API 深入](#4-核心-api-深入)
- [5. 高级特性](#5-高级特性)
- [6. MCP 集成](#6-mcp-集成)
- [7. 实战案例](#7-实战案例)
- [8. 部署与最佳实践](#8-部署与最佳实践)
- [9. 附录](#9-附录)

---

## 1. 简介

### 1.1 Claude Agent SDK 概述

Claude Agent SDK 是 Anthropic 提供的官方开发工具包，让你能够在 TypeScript/Node.js 项目中以库的形式使用 Claude Code。它为我们提供了：

- **内置工具**：无需自己实现，开箱即用的文件操作、命令执行、Web 搜索等功能
- **Agent 循环**：自动管理工具调用、上下文传递、重试机制
- **上下文管理**：持续追踪文件读取、对话历史、分析结果
- **高级特性**：Hooks、Subagents、Session 管理、MCP 集成等

与其他 AI SDK 的最大区别在于：Agent SDK 提供了完整的 Agent 能力，而不仅仅是简单的 API 调用。

### 1.2 SDK 对比分析

| 特性       | Agent SDK           | Client SDK           | Claude Code CLI |
| ---------- | ------------------- | -------------------- | --------------- |
| 工具执行   | 自动（内置）        | 手动实现             | 自动（内置）    |
| 使用场景   | 生产应用、自动化    | API 集成、自定义逻辑 | 交互式开发      |
| 编程语言   | TypeScript, Python  | 所有主流语言         | 命令行工具      |
| 部署支持   | Docker、云端、CI/CD | 云函数、服务器       | 仅本机          |
| Agent 能力 | 完整                | 无                   | 完整            |

**Client SDK vs Agent SDK 代码对比：**

```typescript
// Client SDK：需要手动实现工具循环
const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
let response = await client.messages.create({...});

while (response.stop_reason === "tool_use") {
  const result = yourToolExecutor(response.tool_use);
  response = await client.messages.create({ tool_result: result, ... });
}

// Agent SDK：Claude 自动处理工具
import { query } from "@anthropic-ai/claude-agent-sdk";

for await (const message of query({
  prompt: "Fix the bug in auth.py"
})) {
  console.log(message); // Claude 读取文件、分析、修复，自动完成
}
```

**关键区别：**

- Agent SDK 是**完整 Agent**，包含工具调用能力和上下文管理
- Client SDK 是**简单 API**，只提供模型调用能力，所有 Agent 逻辑需要自己实现
- Claude Code CLI 是**交互式工具**，适合日常开发，SDK 则用于程序化调用

### 1.3 适用场景

Agent SDK 特别适合以下场景：

| 场景                | 典型应用                         |
| ------------------- | -------------------------------- |
| **CI/CD 流水线**    | 自动化代码审查、测试、部署       |
| **生产自动化**      | 监控告警处理、日志分析、批量操作 |
| **自定义 Web 应用** | 集成 Claude 能力的 SaaS 产品     |
| **内部工具**        | 代码生成、文档生成、知识库查询   |
| **批量处理**        | 文档转换、数据分析、内容生成     |

**不推荐使用：**

- 简单的文本生成（使用 Client SDK 更轻量）
- 纯交互式对话（使用 Claude Code CLI 更方便）

### 1.4 快速预览

在深入了解之前，先看一个完整的示例：

```typescript
import { query } from '@anthropic-ai/claude-agent-sdk';

// 创建一个自动修复代码 bug 的 Agent
for await (const message of query({
  prompt:
    'Review utils.py for bugs that would cause crashes. Fix any issues you find.',
  options: {
    allowedTools: ['Read', 'Edit', 'Glob'],
    permissionMode: 'acceptEdits',
  },
})) {
  // 过滤输出，只显示关键信息
  if (message.type === 'assistant' && message.message?.content) {
    for (const block of message.message.content) {
      if ('text' in block) {
        console.log(block.text); // Claude 的思路
      } else if ('name' in block) {
        console.log(`Tool: ${block.name}`); // 正在使用的工具
      }
    }
  } else if (message.type === 'result') {
    console.log(`Done: ${message.subtype}`); // 最终结果
  }
}
```

这段代码会：

1. 读取 `utils.py` 文件
2. 分析其中可能导致崩溃的 bug
3. 自动修复代码
4. 输出整个过程和最终结果

全程**自动完成**，无需手动干预！

---

## 2. 环境准备

### 2.1 系统要求

| 组件              | 最低版本            | 推荐版本     |
| ----------------- | ------------------- | ------------ |
| Node.js           | 18.0+               | 20.x LTS     |
| npm / pnpm / yarn | 最新稳定版          | 任意包管理器 |
| 操作系统          | macOS / Linux / WSL | 通用         |

### 2.2 安装 Claude Code

Agent SDK 使用 Claude Code 作为运行时，需要先安装它。支持三种安装方式：

#### 方式一：使用官方安装脚本（推荐）

```bash
# macOS / Linux / WSL
curl -fsSL https://claude.ai/install.sh | bash
```

#### 方式二：使用 Homebrew（macOS）

```bash
brew install --cask claude-code
```

#### 方式三：使用 npm（通用）

```bash
npm install -g @anthropic-ai/claude-code
```

**安装后验证：**

```bash
claude --version
```

**首次登录：**

```bash
claude auth login
```

按照提示完成登录，SDK 会自动使用这个认证信息。

### 2.3 安装 TypeScript SDK

在你的项目中安装 Agent SDK：

```bash
npm install @anthropic-ai/claude-agent-sdk
# 或
pnpm add @anthropic-ai/claude-agent-sdk
# 或
yarn add @anthropic-ai/claude-agent-sdk
```

如果需要在 TypeScript 中使用类型定义，确保项目已安装 TypeScript：

```bash
npm install -D typescript @types/node
```

### 2.4 配置 API Key

SDK 支持两种认证方式：

#### 方式一：使用 Claude Code CLI 的认证（推荐）

如果已经运行过 `claude auth login`，SDK 会自动使用该认证，**无需额外配置**。

#### 方式二：使用 API Key

从 [Claude Console](https://platform.claude.com/) 获取 API Key，然后设置环境变量：

**临时设置（当前终端会话）：**

```bash
export ANTHROPIC_API_KEY=your-api-key-here
```

**永久设置（macOS / Linux）：**

```bash
echo 'export ANTHROPIC_API_KEY=your-api-key-here' >> ~/.zshrc
source ~/.zshrc
```

**项目内设置（.env 文件）：**

```bash
# .env
ANTHROPIC_API_KEY=your-api-key-here
```

然后在代码中加载：

```typescript
import dotenv from 'dotenv';
dotenv.config();
```

#### 第三方 API 提供商

SDK 也支持通过第三方提供商使用 Claude：

```bash
# Amazon Bedrock
export CLAUDE_CODE_USE_BEDROCK=1
# 配置 AWS 凭证

# Google Vertex AI
export CLAUDE_CODE_USE_VERTEX=1
# 配置 Google Cloud 凭证

# Microsoft Azure AI Foundry
export CLAUDE_CODE_USE_FOUNDRY=1
# 配置 Azure 凭证
```

**注意：** 除非事先获得批准，第三方开发者不得提供 claude.ai 登录或速率限制服务，包括基于 Agent SDK 构建的 agents。

### 2.5 项目初始化

创建一个新的 TypeScript 项目：

```bash
mkdir claude-agent-demo && cd claude-agent-demo
npm init -y
npm install -D typescript @types/node ts-node
npx tsc --init
```

修改 `tsconfig.json`：

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "lib": ["ES2022"],
    "moduleResolution": "node",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

安装 SDK：

```bash
npm install @anthropic-ai/claude-agent-sdk
```

创建示例文件：

```bash
mkdir src
touch src/index.ts
```

### 2.6 验证环境

创建一个简单的测试文件：

```typescript
import { query } from '@anthropic-ai/claude-agent-sdk';

async function main() {
  for await (const message of query({
    prompt: 'Hello, Claude! What is your name?',
  })) {
    if (message.type === 'assistant') {
      console.log('Assistant:', message);
    }
  }
}

main();
```

运行测试：

```bash
npx ts-node src/index.ts
```

如果一切正常，你应该能看到 Claude 的回复。如果看到错误，请检查：

- Node.js 版本是否 ≥ 18
- Claude Code 是否已安装
- API Key 是否正确配置

---

## 3. 第一个 Agent

### 3.1 Hello World 示例

让我们从一个最简单的例子开始——让 Claude 告诉我们它的名字：

```typescript
import { query } from '@anthropic-ai/claude-agent-sdk';

async function main() {
  console.log('开始与 Claude 对话...\n');

  for await (const message of query({
    prompt: 'Hello, Claude! What is your name?',
  })) {
    printMessage(message);
  }
}

function printMessage(message: unknown) {
  if (typeof message !== 'object' || message === null) return;

  const msg = message as {
    type?: string;
    message?: { content?: unknown[] };
    subtype?: string;
  };

  if (msg.type === 'assistant' && msg.message?.content) {
    for (const block of msg.message.content) {
      if (typeof block === 'object' && block !== null && 'text' in block) {
        console.log((block as { text: string }).text);
      }
    }
  } else if (msg.type === 'result') {
    console.log(`\n====== 对话结束 ======`);
    console.log(`状态: ${msg.subtype}`);
  }
}

main();
```

**运行结果：**

```
开始与 Claude 对话...

Hello! I'm Claude, an AI assistant created by Anthropic. I'm designed to be helpful, harmless, and honest.

====== 对话结束 ======
状态: success
```

### 3.2 使用内置工具

Agent SDK 最强大的地方在于内置工具。让我们创建一个能读取文件的 Agent：

```typescript
import { query } from '@anthropic-ai/claude-agent-sdk';

async function main() {
  console.log('正在读取 TypeScript 配置文件...\n');

  for await (const message of query({
    prompt:
      'Read the tsconfig.json file and explain what each configuration option does.',
    options: {
      allowedTools: ['Read'], // 只允许读取文件
      permissionMode: 'acceptEdits', // 自动接受编辑操作
    },
  })) {
    printMessage(message);
  }

  console.log('\n====== 任务完成！======');
}

function printMessage(message: unknown) {
  if (typeof message !== 'object' || message === null) return;

  const msg = message as {
    type?: string;
    message?: { content?: unknown[] };
    subtype?: string;
  };

  if (msg.type === 'assistant' && msg.message?.content) {
    for (const block of msg.message.content) {
      if (typeof block === 'object' && block !== null) {
        if ('text' in block) {
          console.log((block as { text: string }).text);
        } else if ('name' in block) {
          console.log(`\n🔧 正在使用工具: ${(block as { name: string }).name}`);
        }
      }
    }
  } else if (msg.type === 'result') {
    console.log(`\n✅ 状态: ${msg.subtype}`);
  }
}

main();
```

**工作流程：**

1. Claude 收到 prompt：读取并解释 tsconfig.json
2. Claude 决定使用 `Read` 工具
3. SDK 自动调用 Read 工具，读取文件内容
4. Claude 分析文件内容，生成解释
5. SDK 将解释流式返回

### 3.3 `query()` 函数深入理解

`query()` 是 Agent SDK 的核心函数。它的定义如下：

```typescript
function query({
  prompt,
  options,
}: {
  prompt: string | AsyncIterable<SDKUserMessage>;
  options?: Options;
}): Query;
```

**参数说明：**

| 参数      | 类型                        | 必填 | 说明                 |
| --------- | --------------------------- | ---- | -------------------- |
| `prompt`  | `string` 或 `AsyncIterable` | 是   | 输入的提示词或消息流 |
| `options` | `Options`                   | 否   | Agent 配置选项       |

**返回值：** `Query` 对象，是一个异步生成器（AsyncGenerator），可以循环迭代接收消息。

### 3.4 消息流处理机制

Agent SDK 采用流式处理机制，实时返回 Claude 的思考过程。消息类型包括：

#### 消息类型结构图

```
SDKMessage (所有消息的联合类型)
├── SDKAssistantMessage      # Claude 的回复
├── SDKUserMessage           # 用户输入
├── SDKResultMessage         # 最终结果（成功/失败）
├── SDKSystemMessage         # 系统初始化信息
├── SDKPartialAssistantMessage  # 流式部分消息
└── SDKCompactBoundaryMessage  # 对话压缩边界标记
```

#### 详细类型定义

```typescript
// Claude 的回复消息
type SDKAssistantMessage = {
  type: 'assistant';
  uuid: string;
  session_id: string;
  message: {
    content: Array<{
      type: 'text' | 'tool_use' | 'tool_result';
      text?: string; // 文本内容
      name?: string; // 工具名称
      input?: unknown; // 工具输入
      content?: unknown[]; // 工具输出内容
    }>;
  };
  parent_tool_use_id: string | null;
};

// 最终结果消息
type SDKResultMessage = {
  type: 'result';
  subtype: 'success' | 'error_max_turns' | 'error_during_execution';
  uuid: string;
  session_id: string;
  duration_ms: number;
  duration_api_ms: number;
  is_error: boolean;
  num_turns: number;
  result: string;
  total_cost_usd: number;
  usage: {
    input_tokens: number;
    output_tokens: number;
  };
};

// 系统初始化消息
type SDKSystemMessage = {
  type: 'system';
  subtype: 'init';
  uuid: string;
  session_id: string;
  apiKeySource: 'user' | 'project' | 'org' | 'temporary';
  cwd: string; // 当前工作目录
  tools: string[]; // 可用的工具列表
  mcp_servers: {
    // MCP 服务器状态
    name: string;
    status: string;
  }[];
  model: string;
  permissionMode: string;
  slash_commands: string[];
  output_style: string;
};
```

#### 消息处理示例

```typescript
import { query } from '@anthropic-ai/claude-agent-sdk';

async function main() {
  let sessionId: string | undefined;

  for await (const message of query({
    prompt: 'List all .ts files in the current directory',
    options: {
      allowedTools: ['Glob'],
    },
  })) {
    // 提取 session_id
    if (message.type === 'system' && message.subtype === 'init') {
      sessionId = message.session_id;
      console.log(`会话 ID: ${sessionId}`);
      console.log(`可用工具: ${message.tools.join(', ')}`);
      console.log(`当前目录: ${message.cwd}\n`);
    }

    // 处理 Claude 的回复
    if (message.type === 'assistant' && message.message?.content) {
      for (const block of message.message.content) {
        if ('text' in block) {
          console.log('Claude:', block.text);
        } else if ('name' in block) {
          console.log(`🔧 工具调用: ${block.name}`);
        }
      }
    }

    // 处理工具结果
    if (message.type === 'assistant' && message.message?.content) {
      for (const block of message.message.content) {
        if (block.type === 'tool_result') {
          console.log('📄 工具结果:', JSON.stringify(block.content, null, 2));
        }
      }
    }

    // 处理最终结果
    if (message.type === 'result') {
      console.log('\n====== 统计信息 ======');
      console.log(`状态: ${message.subtype}`);
      console.log(`耗时: ${message.duration_ms}ms`);
      console.log(`API 耗时: ${message.duration_api_ms}ms`);
      console.log(`轮数: ${message.num_turns}`);
      console.log(`成本: $${message.total_cost_usd.toFixed(6)}`);
      console.log(`Token 使用:`, message.usage);
    }
  }
}

main();
```

### 3.5 实时流式输出

Agent SDK 的流式处理能力让你能够实时看到 Claude 的思考过程：

```typescript
import { query } from '@anthropic-ai/claude-agent-sdk';

async function streamingExample() {
  console.log('🚀 开始流式处理...\n');

  let fullText = '';

  for await (const message of query({
    prompt: 'Write a short story about a programmer and an AI',
    options: {
      permissionMode: 'bypassPermissions', // 跳过所有权限检查
    },
  })) {
    // 实时显示 Claude 的生成内容
    if (message.type === 'assistant' && message.message?.content) {
      for (const block of message.message.content) {
        if ('text' in block) {
          const text = block.text;
          process.stdout.write(text); // 直接输出到终端，不换行
          fullText += text;
        }
      }
    }

    // 显示最终结果
    if (message.type === 'result' && message.subtype === 'success') {
      console.log('\n\n====== 完成 ======');
      console.log(`总字符数: ${fullText.length}`);
      console.log(`成本: $${message.total_cost_usd.toFixed(6)}`);
    }
  }
}

streamingExample();
```

**流式输出的优势：**

- **即时反馈**：无需等待全部完成
- **交互体验**：类似 ChatGPT 的逐字显示效果
- **成本可控**：可以随时中断（通过 `abortController`）
- **调试友好**：实时看到 Claude 的思考路径

### 3.6 完整示例：文件总结 Agent

让我们综合以上知识，创建一个完整的文件总结 Agent：

```typescript
import { query } from '@anthropic-ai/claude-agent-sdk';
import path from 'path';

interface SummaryResult {
  success: boolean;
  summary: string;
  fileCount: number;
  cost: number;
}

async function summarizeProject(rootPath: string): Promise<SummaryResult> {
  console.log(`📁 正在分析项目: ${rootPath}\n`);

  const startTime = Date.now();
  let fileCount = 0;
  let totalCost = 0;
  let summary = '';

  for await (const message of query({
    prompt: `
      I need you to analyze this TypeScript project located at: ${rootPath}

      Please:
      1. Find all TypeScript files (.ts and .tsx)
      2. Read the entry point files (like index.ts, main.ts, App.tsx)
      3. Understand the project structure
      4. Provide a comprehensive summary including:
         - Project purpose
         - Main technologies used
         - Key components and their responsibilities
         - File structure overview
    `,
    options: {
      allowedTools: ['Glob', 'Read'],
      cwd: rootPath,
      permissionMode: 'acceptEdits',
      maxTurns: 50, // 最多 50 轮对话
    },
  })) {
    // 统计文件数
    if (message.type === 'assistant' && message.message?.content) {
      for (const block of message.message.content) {
        if ('name' in block && block.name === 'Glob') {
          fileCount++;
        }
        if ('text' in block) {
          summary += block.text;
        }
      }
    }

    // 获取成本
    if (message.type === 'result') {
      totalCost = message.total_cost_usd;
      console.log('\n====== 分析完成 =======');
      console.log(`耗时: ${Date.now() - startTime}ms`);
      console.log(`文件数: ${fileCount}`);
      console.log(`成本: $${totalCost.toFixed(6)}\n`);
    }
  }

  return {
    success: true,
    summary,
    fileCount,
    cost: totalCost,
  };
}

// 使用示例
async function main() {
  const projectPath = path.resolve(process.cwd());
  const result = await summarizeProject(projectPath);

  if (result.success) {
    console.log('项目总结:');
    console.log(result.summary);
  }
}

main();
```

**这个示例展示了：**

- 使用多个工具的组合（Glob + Read）
- 限制最大轮数（防止无限循环）
- 统计执行信息（时间、成本、文件数）
- 自定义工作目录（cwd）
- 完整的异步处理流程

---

## 4. 核心 API 深入

### 4.1 `query()` 函数完整说明

`query()` 是 Agent SDK 的核心入口，用于创建并执行一个 Agent 会话。

#### 函数签名

```typescript
function query({
  prompt,
  options,
}: {
  prompt: string | AsyncIterable<SDKUserMessage>;
  options?: Options;
}): Query;
```

#### 参数详解

##### `prompt` 参数

`prompt` 可以是两种类型：

**1. 字符串类型（简单对话）**

```typescript
// 简单的单次对话
query({
  prompt: 'What is 2 + 2?',
});
```

**2. AsyncIterable 类型（流式输入）**

```typescript
// 复杂的多轮对话流
async function* multiTurnConversation() {
  yield {
    type: 'user',
    message: {
      role: 'user',
      content: [{ type: 'text', text: 'Hello' }],
    },
  };

  await delay(1000);

  yield {
    type: 'user',
    message: {
      role: 'user',
      content: [{ type: 'text', text: 'How are you?' }],
    },
  };
}

query({
  prompt: multiTurnConversation(),
});
```

##### `options` 参数

`options` 是一个对象，包含所有可配置项：

```typescript
interface Options {
  // 基础配置
  allowedTools?: string[]; // 允许使用的工具列表
  disallowedTools?: string[]; // 禁止使用的工具列表
  permissionMode?: PermissionMode; // 权限模式
  model?: string; // 指定模型
  systemPrompt?: string; // 系统提示词

  // 执行控制
  maxTurns?: number; // 最大对话轮数
  maxBudgetUsd?: number; // 最大预算（美元）
  maxThinkingTokens?: number; // 最大思考 token 数
  continue?: boolean; // 继续上一次对话
  resume?: string; // 恢复指定 session ID
  forkSession?: boolean; // 分支会话

  // 工作目录和文件
  cwd?: string; // 工作目录
  additionalDirectories?: string[]; // 额外可访问目录
  enableFileCheckpointing?: boolean; // 启用文件检查点

  // MCP 服务器
  mcpServers?: Record<string, McpServerConfig>; // MCP 服务器配置

  // 子代理
  agents?: Record<string, AgentDefinition>; // 子代理定义

  // Hooks
  hooks?: Partial<Record<HookEvent, HookCallbackMatcher[]>>; // 钩子回调

  // 权限控制
  canUseTool?: CanUseTool; // 自定义权限函数
  allowDangerouslySkipPermissions?: boolean; // 跳过权限检查

  // 环境变量
  env?: Record<string, string>; // 环境变量

  // 运行时配置
  executable?: 'bun' | 'deno' | 'node'; // JavaScript 运行时
  executableArgs?: string[]; // 运行时参数
  pathToClaudeCodeExecutable?: string; // Claude Code 可执行文件路径

  // 输出控制
  includePartialMessages?: boolean; // 包含部分消息
  outputFormat?: {
    type: 'json_schema';
    schema: JSONSchema;
  };

  // 高级选项
  abortController?: AbortController; // 中断控制器
  betas?: SdkBeta[]; // Beta 功能
  fallbackModel?: string; // 备用模型
  settingSources?: SettingSource[]; // 配置来源
  stderr?: (data: string) => void; // stderr 回调
  strictMcpConfig?: boolean; // 严格 MCP 验证
}
```

### 4.2 Options 配置项详细表格

| 配置项                            | 类型                                                | 默认值                  | 说明                                                          |
| --------------------------------- | --------------------------------------------------- | ----------------------- | ------------------------------------------------------------- |
| **基础配置**                      |
| `allowedTools`                    | `string[]`                                          | 所有工具                | 允许使用的工具列表，如 `["Read", "Edit", "Bash"]`             |
| `disallowedTools`                 | `string[]`                                          | `[]`                    | 禁止使用的工具列表                                            |
| `permissionMode`                  | `PermissionMode`                                    | `'default'`             | 权限模式：`'default'`、`'acceptEdits'`、`'bypassPermissions'` |
| `model`                           | `string`                                            | CLI 默认模型            | 使用的 Claude 模型，如 `'claude-sonnet-4'`                    |
| `systemPrompt`                    | `string`                                            | `undefined`             | 自定义系统提示词                                              |
| **执行控制**                      |
| `maxTurns`                        | `number`                                            | `undefined`             | 最大对话轮数，防止无限循环                                    |
| `maxBudgetUsd`                    | `number`                                            | `undefined`             | 最大预算（美元），超出自动停止                                |
| `maxThinkingTokens`               | `number`                                            | `undefined`             | 最大思考 token 数                                             |
| `continue`                        | `boolean`                                           | `false`                 | 是否继续上一次对话                                            |
| `resume`                          | `string`                                            | `undefined`             | 恢复指定 session ID 的会话                                    |
| `forkSession`                     | `boolean`                                           | `false`                 | 是否分支到一个新的 session                                    |
| **工作目录**                      |
| `cwd`                             | `string`                                            | `process.cwd()`         | 工作目录，Agent 只能访问此目录                                |
| `additionalDirectories`           | `string[]`                                          | `[]`                    | 额外可访问的目录                                              |
| `enableFileCheckpointing`         | `boolean`                                           | `false`                 | 启用文件检查点，支持回滚                                      |
| **MCP 服务器**                    |
| `mcpServers`                      | `Record<string, McpServerConfig>`                   | `{}`                    | MCP 服务器配置                                                |
| **子代理**                        |
| `agents`                          | `Record<string, AgentDefinition>`                   | `undefined`             | 子代理定义                                                    |
| **Hooks**                         |
| `hooks`                           | `Partial<Record<HookEvent, HookCallbackMatcher[]>>` | `{}`                    | 钩子回调函数                                                  |
| **权限控制**                      |
| `canUseTool`                      | `CanUseTool`                                        | `undefined`             | 自定义权限检查函数                                            |
| `allowDangerouslySkipPermissions` | `boolean`                                           | `false`                 | 是否跳过所有权限检查（危险！）                                |
| **运行时**                        |
| `executable`                      | `'bun' \| 'deno' \| 'node'`                         | 自动检测                | JavaScript 运行时                                             |
| `executableArgs`                  | `string[]`                                          | `[]`                    | 传递给运行时的额外参数                                        |
| **输出控制**                      |
| `includePartialMessages`          | `boolean`                                           | `false`                 | 是否包含流式部分消息                                          |
| `outputFormat`                    | `object`                                            | `undefined`             | 结构化输出配置                                                |
| **高级**                          |
| `abortController`                 | `AbortController`                                   | `new AbortController()` | 中断控制器                                                    |
| `betas`                           | `SdkBeta[]`                                         | `[]`                    | 启用的 Beta 功能                                              |
| `fallbackModel`                   | `string`                                            | `undefined`             | 主模型失败时使用的备用模型                                    |
| `settingSources`                  | `SettingSource[]`                                   | `[]`                    | 配置来源：`'user'`、`'project'`、`'local'`                    |
| `stderr`                          | `(data: string) => void`                            | `undefined`             | stderr 输出回调                                               |
| `strictMcpConfig`                 | `boolean`                                           | `false`                 | 严格 MCP 配置验证                                             |

### 4.3 内置工具详解

Agent SDK 提供了丰富的内置工具，无需自己实现即可直接使用。

#### 工具总览

| 工具名称            | 功能         | 输入类型               | 输出类型                |
| ------------------- | ------------ | ---------------------- | ----------------------- |
| **Read**            | 读取文件     | `FileReadInput`        | `ReadOutput`            |
| **Write**           | 写入文件     | `FileWriteInput`       | `WriteOutput`           |
| **Edit**            | 编辑文件     | `FileEditInput`        | `EditOutput`            |
| **Bash**            | 执行命令     | `BashInput`            | `BashOutput`            |
| **Glob**            | 文件模式匹配 | `GlobInput`            | `GlobOutput`            |
| **Grep**            | 文件内容搜索 | `GrepInput`            | `GrepOutput`            |
| **WebSearch**       | Web 搜索     | `WebSearchInput`       | `WebSearchOutput`       |
| **WebFetch**        | Web 内容获取 | `WebFetchInput`        | `WebFetchOutput`        |
| **AskUserQuestion** | 询问用户问题 | `AskUserQuestionInput` | `AskUserQuestionOutput` |
| **Task**            | 子任务代理   | `AgentInput`           | `TaskOutput`            |

#### 4.3.1 Read 工具

读取文件内容，支持多种文件格式。

```typescript
interface FileReadInput {
  file_path: string; // 文件绝对路径
  offset?: number; // 起始行号（从 0 开始）
  limit?: number; // 读取的行数
}

interface ReadOutput {
  content: string; // 文件内容（带行号）
  total_lines: number; // 文件总行数
  lines_returned: number; // 实际返回的行数
}
```

**使用示例：**

```typescript
import { query } from '@anthropic-ai/claude-agent-sdk';

async function readFileExample() {
  for await (const message of query({
    prompt: 'Read the package.json file and extract the dependencies',
    options: {
      allowedTools: ['Read'],
      permissionMode: 'acceptEdits',
    },
  })) {
    if (message.type === 'assistant') {
      // Claude 会自动使用 Read 工具
      // 这里的 message 包含 Claude 对文件内容的分析结果
      for (const block of message.message.content) {
        if ('text' in block) {
          console.log(block.text);
        }
      }
    }
  }
}

readFileExample();
```

**支持的文件格式：**

- 文本文件（.txt, .md, .ts, .js, .json 等）
- 图像文件（.png, .jpg, .gif, .svg 等）
- PDF 文件（.pdf）
- Jupyter Notebook（.ipynb）

#### 4.3.2 Write 工具

创建新文件或将内容写入文件。

```typescript
interface FileWriteInput {
  file_path: string; // 文件绝对路径
  content: string; // 要写入的内容
}

interface WriteOutput {
  message: string; // 成功消息
  bytes_written: number; // 写入的字节数
  file_path: string; // 写入的文件路径
}
```

**使用示例：**

```typescript
import { query } from '@anthropic-ai/claude-agent-sdk';

async function writeFileExample() {
  for await (const message of query({
    prompt:
      "Create a new file called hello.txt with the content 'Hello, World!'",
    options: {
      allowedTools: ['Write'],
      permissionMode: 'acceptEdits',
    },
  })) {
    if (message.type === 'result') {
      console.log(`✅ ${message.result}`);
    }
  }
}

writeFileExample();
```

#### 4.3.3 Edit 工具

精确编辑现有文件的内容。

```typescript
interface FileEditInput {
  file_path: string; // 文件绝对路径
  old_string: string; // 要替换的文本（必须精确匹配）
  new_string: string; // 新文本
  replace_all?: boolean; // 是否替换所有匹配项，默认 false
}

interface EditOutput {
  message: string; // 确认消息
  replacements: number; // 替换的次数
  file_path: string; // 编辑的文件路径
}
```

**使用示例：**

```typescript
import { query } from '@anthropic-ai/claude-agent-sdk';

async function editFileExample() {
  for await (const message of query({
    prompt:
      "Replace all occurrences of 'console.log' with 'logger.info' in src/utils.ts",
    options: {
      allowedTools: ['Read', 'Edit'],
      permissionMode: 'acceptEdits',
    },
  })) {
    if (message.type === 'assistant') {
      for (const block of message.message.content) {
        if ('name' in block && block.name === 'Edit') {
          console.log(`🔧 编辑文件: ${block.input.file_path}`);
        }
      }
    } else if (message.type === 'result') {
      console.log(`✅ ${message.result}`);
    }
  }
}

editFileExample();
```

**注意事项：**

- `old_string` 必须精确匹配，包括所有空格、缩进、换行符
- 如果 `old_string` 出现多次，必须设置 `replace_all: true` 或提供唯一的上下文
- 推荐在 `old_string` 中包含足够的周边代码以确保唯一性

#### 4.3.4 Bash 工具

在持久 shell 会话中执行命令。

```typescript
interface BashInput {
  command: string; // 要执行的命令
  description?: string; // 简洁的命令描述（5-10个词）
  timeout?: number; // 超时时间（毫秒，最大 600000）
  run_in_background?: boolean; // 是否在后台运行
}

interface BashOutput {
  output: string; // stdout + stderr 输出
  exitCode: number; // 退出码
  killed?: boolean; // 是否因超时被终止
  shellId?: string; // 后台进程的 shell ID
}
```

**使用示例：**

```typescript
import { query } from '@anthropic-ai/claude-agent-sdk';

async function bashExample() {
  for await (const message of query({
    prompt: 'List all files in the current directory',
    options: {
      allowedTools: ['Bash'],
      permissionMode: 'acceptEdits',
    },
  })) {
    if (message.type === 'assistant') {
      for (const block of message.message.content) {
        if ('text' in block) {
          console.log(block.text); // 分析 Bash 命令的输出
        }
      }
    }
  }
}

bashExample();
```

**后台执行示例：**

```typescript
async function backgroundBashExample() {
  for await (const message of query({
    prompt: 'Start a development server in the background',
    options: {
      allowedTools: ['Bash'],
      permissionMode: 'acceptEdits',
    },
  })) {
    // 后台任务会立即返回 shellId
    console.log(message);
  }
}
```

**支持的命令：**

- Git 操作（`git status`, `git add`, `git commit` 等）
- 包管理器（`npm install`, `pnpm i` 等）
- 文件操作（`ls`, `cp`, `mv`, `rm` 等）
- 构建工具（`npm run build`, `webpack`, `tsc` 等）
- 任意 shell 命令

#### 4.3.5 Glob 工具

基于模式匹配快速查找文件。

```typescript
interface GlobInput {
  pattern: string; // Glob 模式，如 **/*.ts
  path?: string; // 搜索目录，默认 cwd
}

interface GlobOutput {
  matches: string[]; // 匹配的文件路径（绝对路径）
  count: number; // 匹配数量
  search_path: string; // 搜索目录
}
```

**使用示例：**

```typescript
import { query } from '@anthropic-ai/claude-agent-sdk';

async function globExample() {
  for await (const message of query({
    prompt: 'Find all TypeScript files in the src directory',
    options: {
      allowedTools: ['Glob'],
      permissionMode: 'acceptEdits',
    },
  })) {
    if (message.type === 'assistant') {
      for (const block of message.message.content) {
        if ('name' in block && block.name === 'Glob') {
          console.log(`📁 搜索模式: ${block.input.pattern}`);
        }
      }
    }
  }
}

globExample();
```

**Glob 模式示例：**

| 模式                             | 说明                               |
| -------------------------------- | ---------------------------------- |
| `*.ts`                           | 当前目录的所有 .ts 文件            |
| `**/*.ts`                        | 所有子目录中的 .ts 文件            |
| `src/**/*.tsx`                   | src 目录及其子目录的所有 .tsx 文件 |
| `**/*.json`                      | 所有 .json 配置文件                |
| `tests/**/*.{test,spec}.{ts,js}` | tests 目录下的测试文件             |

#### 4.3.6 Grep 工具

基于正则表达式搜索文件内容。

```typescript
interface GrepInput {
  pattern: string;                          // 正则表达式
  path?: string;                            // 搜索目录，默认 cwd
  glob?: string;                            // 文件过滤，如 "*.ts"
  type?: string;                            // 文件类型，如 "ts", "js"
  output_mode?: 'content' | 'files_with_matches' | 'count';  // 输出模式
  '-i'?: boolean;                           // 忽略大小写
  '-n'?: boolean;                           // 显示行号
  '-B'?: number;                            // 前几行
  '-A'?: number;                            // 后几行
  '-C'?: number;                            | 上下文行数
  head_limit?: number;                      // 限制结果数量
  multiline?: boolean;                      | 多行模式
}

type GrepOutput =
  | GrepContentOutput    // content 模式
  | GrepFilesOutput      // files_with_matches 模式
  | GrepCountOutput;     // count 模式

interface GrepContentOutput {
  matches: Array<{
    file: string;
    line_number?: number;
    line: string;
    before_context?: string[];
    after_context?: string[];
  }>;
  total_matches: number;
}

interface GrepFilesOutput {
  files: string[];
  count: number;
}

interface GrepCountOutput {
  counts: Array<{
    file: string;
    count: number;
  }>;
  total: number;
}
```

**使用示例：**

```typescript
import { query } from '@anthropic-ai/claude-agent-sdk';

async function grepExample() {
  for await (const message of query({
    prompt: "Find all functions named 'handleError' in TypeScript files",
    options: {
      allowedTools: ['Grep'],
      permissionMode: 'acceptEdits',
    },
  })) {
    if (message.type === 'assistant') {
      for (const block of message.message.content) {
        if ('text' in block) {
          console.log(block.text); // 包含搜索结果的分析
        }
      }
    }
  }
}

grepExample();
```

**高级用法：**

```typescript
// 忽略大小写，显示行号，包含上下文
const query = {
  prompt: "Search for 'TODO' comments with 3 lines of context",
  options: {
    allowedTools: ['Grep'],
    permissionMode: 'acceptEdits',
  },
};

// 统计每个文件中的 console.log 数量
const countQuery = {
  prompt: 'Count console.log statements in each TypeScript file',
  options: {
    allowedTools: ['Grep'],
    permissionMode: 'acceptEdits',
  },
};
```

#### 4.3.7 WebSearch 工具

搜索 Web 获取最新信息。

```typescript
interface WebSearchInput {
  query: string; // 搜索查询
  allowed_domains?: string[]; // 只搜索指定域名
  blocked_domains?: string[]; // 排除指定域名
}

interface WebSearchOutput {
  results: Array<{
    title: string;
    url: string;
    snippet: string;
    metadata?: Record<string, unknown>;
  }>;
  total_results: number;
  query: string;
}
```

**使用示例：**

```typescript
import { query } from '@anthropic-ai/claude-agent-sdk';

async function webSearchExample() {
  for await (const message of query({
    prompt: 'Search for the latest Claude Agent SDK documentation',
    options: {
      allowedTools: ['WebSearch'],
      permissionMode: 'acceptEdits',
    },
  })) {
    if (message.type === 'assistant') {
      for (const block of message.message.content) {
        if ('text' in block) {
          console.log(block.text); // Claude 总结搜索结果
        }
      }
    }
  }
}

webSearchExample();
```

**过滤域名：**

```typescript
// 只搜索 anthropic.com 域名
await query({
  prompt: 'Find information about Claude models',
  allowedTools: ['WebSearch'],
  options: {
    mcpServers: {
      webSearch: {
        type: 'stdio',
        command: 'npx',
        args: ['@modelcontextprotocol/server-web-search'],
        env: {
          WEB_SEARCH_ALLOWED_DOMAINS: 'anthropic.com',
        },
      },
    },
  },
});
```

#### 4.3.8 WebFetch 工具

获取网页内容并用 AI 处理。

```typescript
interface WebFetchInput {
  url: string; // 要获取的 URL
  prompt: string; // 对内容的处理提示
}

interface WebFetchOutput {
  response: string; // AI 对内容的分析结果
  url: string; // 原始 URL
  final_url?: string; // 重定向后的 URL
  status_code?: number; // HTTP 状态码
}
```

**使用示例：**

```typescript
import { query } from '@anthropic-ai/claude-agent-sdk';

async function webFetchExample() {
  for await (const message of query({
    prompt:
      'Fetch the content of https://anthropic.com and summarize what they do',
    options: {
      allowedTools: ['WebFetch'],
      permissionMode: 'acceptEdits',
    },
  })) {
    if (message.type === 'assistant') {
      for (const block of message.message.content) {
        if ('text' in block) {
          console.log(block.text);
        }
      }
    }
  }
}

webFetchExample();
```

#### 4.3.9 AskUserQuestion 工具

向用户提问，提供多选选项。

```typescript
interface AskUserQuestionInput {
  questions: Array<{
    question: string; // 完整问题
    header: string; // 简短标签（最多 12 字符）
    options: Array<{
      label: string; // 选项文本（1-5 个词）
      description: string; // 选项说明
    }>;
    multiSelect: boolean; // 是否多选
  }>;
  answers?: Record<string, string>; // 用户答案（由权限系统填充）
}

interface AskUserQuestionOutput {
  questions: AskUserQuestionInput['questions'];
  answers: Record<string, string>;
}
```

**使用示例：**

```typescript
import { query } from '@anthropic-ai/claude-agent-sdk';

async function askUserExample() {
  for await (const message of query({
    prompt: 'Ask the user which framework they prefer',
    options: {
      allowedTools: ['AskUserQuestion', 'Read'],
      permissionMode: 'default',
    },
  })) {
    if (message.type === 'assistant') {
      // Claude 会生成 AskUserQuestion 工具调用
      // 实际的问答交互会触发权限系统
      console.log(message);
    }
  }
}

askUserExample();
```

**实现用户回答：**

```typescript
import { query } from '@anthropic-ai/claude-agent-sdk';

async function askUserWithHandler() {
  for await (const message of query({
    prompt: 'Ask the user which deployment platform they prefer',
    options: {
      allowedTools: ['AskUserQuestion'],
      permissionMode: 'default',
      canUseTool: async (toolName, input, { signal }) => {
        if (toolName === 'AskUserQuestion') {
          // 这里可以实现自定义的用户交互逻辑
          console.log('Question:', input.questions[0].question);
          console.log(
            'Options:',
            input.questions[0].options.map((o) => o.label),
          );

          // 模拟用户选择
          const answer = 'Vercel'; // 从实际用户输入获取

          return {
            behavior: 'allow',
            updatedInput: {
              ...input,
              answers: {
                [input.questions[0].question]: answer,
              },
            },
          };
        }
        return { behavior: 'allow' };
      },
    },
  })) {
    console.log(message);
  }
}

askUserWithHandler();
```

#### 4.3.10 Task 工具

创建子代理来处理复杂任务。

```typescript
interface AgentInput {
  description: string; // 任务简短描述（3-5 个词）
  prompt: string; // 具体任务说明
  subagent_type: string; // 子代理类型（需要在 agents 中定义）
}

interface TaskOutput {
  result: string; // 子代理的最终结果
  usage?: {
    input_tokens: number;
    output_tokens: number;
  };
  total_cost_usd?: number;
  duration_ms?: number;
}
```

**使用示例：**

```typescript
import { query } from '@anthropic-ai/claude-agent-sdk';

async function taskExample() {
  for await (const message of query({
    prompt: 'Review this codebase using the code-reviewer agent',
    options: {
      allowedTools: ['Read', 'Glob', 'Grep', 'Task'],
      agents: {
        'code-reviewer': {
          description: 'Expert code reviewer for quality and security',
          prompt:
            'You are an expert code reviewer. Analyze code for bugs, security issues, and best practices violations.',
          tools: ['Read', 'Glob', 'Grep'],
        },
      },
      permissionMode: 'acceptEdits',
    },
  })) {
    if (message.type === 'assistant') {
      for (const block of message.message.content) {
        if ('name' in block && block.name === 'Task') {
          console.log(`🚀 启动子代理: ${block.input.subagent_type}`);
        }
      }
    }
  }
}

taskExample();
```

### 4.4 消息类型和结构解析

我们已经在前面的章节中提到了消息类型，这里做一个完整的总结。

#### 完整消息类型枚举

```typescript
type SDKMessage =
  | SDKAssistantMessage // Claude 的回复
  | SDKUserMessage // 用户输入
  | SDKUserMessageReplay
  | 重放的用户消息
  | SDKResultMessage // 最终结果
  | SDKSystemMessage // 系统消息
  | SDKPartialAssistantMessage // 流式部分消息
  | SDKCompactBoundaryMessage; // 对话压缩边界
```

#### 消息处理流程图

```mermaid
graph TD
    A[开始 query] --> B[发送 User Prompt]
    B --> C[System 消息：会话初始化]
    C --> D[Claude 思考]
    D --> E[Assistant 消息：文本回复]
    D --> F[Tool Use 消息：调用工具]
    F --> G[工具执行]
    G --> H[Tool Result 消息：返回结果]
    H --> D{还有更多思考?}
    D -->|是| E
    D -->|否| I[Result 消息：最终结果]
    I --> J[结束]
```

#### 消息流实际示例

```typescript
import { query } from '@anthropic-ai/claude-agent-sdk';

async function messageFlowExample() {
  console.log('🚀 开始消息流示例\n');

  let sessionId: string | undefined;

  for await (const message of query({
    prompt:
      'Create a TypeScript function that calculates the Fibonacci sequence',
    options: {
      allowedTools: ['Read', 'Write', 'Edit'],
      permissionMode: 'acceptEdits',
    },
  })) {
    switch (message.type) {
      case 'system':
        console.log('📋 系统消息');
        console.log(`  会话 ID: ${message.session_id}`);
        console.log(`  API Key 来源: ${message.apiKeySource}`);
        console.log(`  可用工具: ${message.tools.join(', ')}`);
        sessionId = message.session_id;
        break;

      case 'assistant':
        console.log('\n🤖 Assistant 消息');
        if (message.message?.content) {
          for (const block of message.message.content) {
            if (block.type === 'text') {
              console.log(`  文本: ${block.text.substring(0, 50)}...`);
            } else if (block.type === 'tool_use') {
              console.log(`  🔧 调用工具: ${block.name}`);
              console.log(`     输入:`, block.input);
            } else if (block.type === 'tool_result') {
              console.log(`  📄 工具结果:`, block.content);
            }
          }
        }
        break;

      case 'result':
        console.log('\n✅ 最终结果');
        console.log(`  状态: ${message.subtype}`);
        console.log(`  耗时: ${message.duration_ms}ms`);
        console.log(`  成本: $${message.total_cost_usd.toFixed(6)}`);
        console.log(`  Token 使用:`, message.usage);
        console.log(`  结果: ${message.result}`);
        break;

      case 'stream_event':
        // 流式事件（需要 includePartialMessages: true）
        break;

      default:
        console.log('\n❓ 其他消息类型:', message.type);
    }
  }

  console.log(`\n💾 会话 ID: ${sessionId} (可用于恢复会话)`);
}

messageFlowExample();
```

### 4.5 PermissionMode 权限管理

`permissionMode` 控制了 Agent 在执行操作时的权限检查行为。

#### 三种权限模式

| 模式                  | 说明                                                           | 适用场景                 |
| --------------------- | -------------------------------------------------------------- | ------------------------ |
| `'default'`           | 默认模式，需要为每个工具调用提供权限（通过 `canUseTool` 回调） | 需要细粒度控制的生产环境 |
| `'acceptEdits'`       | 自动接受文件编辑操作，其他操作需要权限                         | 信任的开发工作流         |
| `'bypassPermissions'` | 跳过所有权限检查（危险）                                       | CI/CD 流水线、自动化脚本 |

#### 模式详解

##### 1. default 模式

默认模式，需要实现 `canUseTool` 回调函数来决定是否允许每个工具调用。

```typescript
import { query } from '@anthropic-ai/claude-agent-sdk';

async function defaultPermissionMode() {
  for await (const message of query({
    prompt: 'Read and modify some files',
    options: {
      allowedTools: ['Read', 'Edit', 'Write'],
      permissionMode: 'default',
      canUseTool: async (toolName, input, { signal }) => {
        console.log(`\n🔒 权限检查: ${toolName}`);
        console.log(`   输入:`, input);

        // 允许读取操作
        if (toolName === 'Read') {
          return { behavior: 'allow' };
        }

        // 编辑操作需要确认
        if (toolName === 'Edit') {
          // 这里可以实现实际的用户确认逻辑
          // 例如：从命令行输入、从对话框获取等
          const shouldAllow = await confirmEdit(input);

          if (shouldAllow) {
            return {
              behavior: 'allow',
              updatedInput: input, // 可以修改输入
            };
          } else {
            return {
              behavior: 'deny',
              message: 'User rejected this edit',
              interrupt: true, // 中断执行
            };
          }
        }

        return { behavior: 'deny' };
      },
    },
  })) {
    console.log(message);
  }
}

async function confirmEdit(input: unknown): Promise<boolean> {
  // 实现确认逻辑
  // 返回 true 表示允许，false 表示拒绝
  return true;
}

defaultPermissionMode();
```

**`CanUseTool` 函数接口：**

```typescript
type CanUseTool = (
  toolName: string, // 工具名称
  input: ToolInput, // 工具输入
  options: {
    signal: AbortSignal; // 中断信号
    suggestions?: PermissionUpdate[]; // 权限更新建议
  },
) => Promise<PermissionResult>;

type PermissionResult =
  | {
      behavior: 'allow';
      updatedInput: ToolInput;
      updatedPermissions?: PermissionUpdate[];
    }
  | {
      behavior: 'deny';
      message: string;
      interrupt?: boolean;
    };
```

##### 2. acceptEdits 模式

自动接受文件编辑操作，其他操作可能仍需要权限。

```typescript
import { query } from '@anthropic-ai/claude-agent-sdk';

async function acceptEditsMode() {
  for await (const message of query({
    prompt: 'Fix the bug in utils.ts',
    options: {
      allowedTools: ['Read', 'Edit', 'Write'],
      permissionMode: 'acceptEdits', // 自动接受编辑
    },
  })) {
    if (message.type === 'assistant') {
      for (const block of message.message?.content || []) {
        if ('name' in block) {
          const toolName = block.name;
          const isEdit = toolName === 'Edit' || toolName === 'Write';

          if (isEdit) {
            console.log(`✅ 自动允许编辑: ${toolName}`);
          }
        }
      }
    }
  }
}

acceptEditsMode();
```

##### 3. bypassPermissions 模式

跳过所有权限检查，**仅用于受信任的环境**。

```typescript
import { query } from '@anthropic-ai/claude-agent-sdk';

async function bypassPermissionsMode() {
  for await (const message of query({
    prompt: 'Execute automated test suite',
    options: {
      allowedTools: ['Read', 'Edit', 'Bash', 'Glob', 'Grep'],
      permissionMode: 'bypassPermissions', // 跳过所有权限检查
      allowDangerouslySkipPermissions: true, // 必须设置此选项
    },
  })) {
    if (message.type === 'result') {
      console.log(`✅ 任务完成: ${message.result}`);
    }
  }
}

bypassPermissionsMode();
```

**⚠️ 安全警告：**

- `bypassPermissions` 模式让 Agent 可以执行任意操作
- 只应在 CI/CD 等受控环境中使用
- 确保代码仓库可信，review 所有 Prompt

#### 权限模式选择指南

| 场景         | 推荐模式              | 配置                                    |
| ------------ | --------------------- | --------------------------------------- |
| 本地开发     | `'acceptEdits'`       | `allowedTools: ["Read", "Edit"]`        |
| CI/CD 流水线 | `'bypassPermissions'` | `allowDangerouslySkipPermissions: true` |
| 生产环境     | `'default'`           | 实现 `canUseTool` 回调                  |
| 代码审查工具 | `'default'`           | 限制编辑权限                            |
| 文档生成     | `'acceptEdits'`       | `allowedTools: ["Read", "Write"]`       |

#### 完整权限示例：交互式确认

```typescript
import { query } from '@anthropic-ai/claude-agent-sdk';
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(query: string): Promise<boolean> {
  return new Promise((resolve) => {
    rl.question(`${query} (y/n): `, (answer) => {
      resolve(answer.toLowerCase() === 'y');
    });
  });
}

async function interactivePermissions() {
  for await (const message of query({
    prompt: 'Analyze and refactor the codebase',
    options: {
      allowedTools: ['Read', 'Edit', 'Glob', 'Grep', 'Write'],
      permissionMode: 'default',
      canUseTool: async (toolName, input, { signal }) => {
        // 自动允许只读操作
        if (['Read', 'Glob', 'Grep'].includes(toolName)) {
          console.log(`✅ 自动允许: ${toolName}`);
          return { behavior: 'allow' };
        }

        // 读写操作需要确认
        if (['Edit', 'Write'].includes(toolName)) {
          const filePath =
            (input as { file_path?: string })?.file_path || 'unknown';
          console.log(
            `\n⚠️  尝试${toolName === 'Write' ? '创建' : '编辑'}文件: ${filePath}`,
          );

          const allowed = await askQuestion('是否允许此操作？');

          if (allowed) {
            console.log(`✅ 允许${toolName}`);
            return { behavior: 'allow', updatedInput: input };
          } else {
            console.log(`❌ 拒绝${toolName}`);
            return {
              behavior: 'deny',
              message: 'User rejected this operation',
              interrupt: true,
            };
          }
        }

        // 其他操作拒绝
        console.log(`❌ 拒绝: ${toolName}`);
        return {
          behavior: 'deny',
          message: `Tool ${toolName} is not allowed`,
          interrupt: true,
        };
      },
    },
  })) {
    if (message.type === 'result') {
      console.log(`\n${'='.repeat(50)}`);
      console.log(`任务完成！`);
      console.log(`耗时: ${message.duration_ms}ms`);
      console.log(`成本: $${message.total_cost_usd.toFixed(6)}`);
      console.log(`${'='.repeat(50)}\n`);
    }
  }

  rl.close();
}

interactivePermissions();
```

---

## 5. 高级特性

### 5.1 Hooks 钩子机制

Hooks 是 Agent SDK 提供的强大功能，让你能够在 Agent 生命周期的关键时刻插入自定义逻辑。

#### Hooks 生命周期

```mermaid
graph TD
    A[会话开始] --> B[SessionStart]
    B --> C[用户提交 Prompt]
    C --> D[UserPromptSubmit]
    D --> E[工具调用前]
    E --> F[PreToolUse]
    F --> G[工具执行]
    G --> H{工具执行成功?}
    H -->|是| I[PostToolUse]
    H -->|否| J[PostToolUseFailure]
    I --> K[更多工具调用]
    J --> K
    K -->|还有工具| E
    K -->|没有工具| L[会话结束]
    L --> M[SessionEnd]
```

#### 可用的 Hook 事件

| Hook 事件              | 说明               | 用途                         |
| ---------------------- | ------------------ | ---------------------------- |
| **SessionStart**       | 会话开始时         | 初始化日志、设置环境变量     |
| **UserPromptSubmit**   | 用户提交 Prompt 时 | 验证、修改、补充提示词       |
| **PreToolUse**         | 工具调用前         | 验证输入、修改参数、记录日志 |
| **PostToolUse**        | 工具执行成功后     | 记录结果、触发副作用         |
| **PostToolUseFailure** | 工具执行失败后     | 错误处理、重试逻辑           |
| **PermissionRequest**  | 权限请求时         | 自定义权限检查               |
| **SubagentStart**      | 子代理启动时       | 追踪子代理调用               |
| **SubagentStop**       | 子代理停止时       | 汇总子代理结果               |
| **PreCompact**         | 对话压缩前         | 保存重要的上下文             |
| **Stop**               | 会话停止时         | 清理资源、生成报告           |
| **SessionEnd**         | 会话结束时         | 最终统计、归档日志           |
| **Notification**       | 系统通知时         | 显示通知给用户               |

#### Hook 基础语法

```typescript
interface HookCallback = (
  input: HookInput,                      // Hook 输入数据
  toolUseID: string | undefined,         // 工具调用 ID（如果适用）
  options: { signal: AbortSignal }       // 选项，包含中断信号
) => Promise<HookJSONOutput>;

interface HookJSONOutput =
  | {
      continue?: boolean;                // 是否继续（默认 true）
      suppressOutput?: boolean;          // 抑制输出
      stopReason?: string;               // 停止原因
      decision?: 'approve' | 'block';    // 决策
      systemMessage?: string;            // 系统消息
      reason?: string;                   // 原因说明
      hookSpecificOutput?: unknown;      // Hook 特定输出
    }
  | {
      async: true;                       // 异步 Hook
      asyncTimeout?: number;             // 超时时间（毫秒）
    };
```

#### 5.1.1 实战：审计日志记录

使用 `PostToolUse` Hook 记录所有文件操作到审计日志。

```typescript
import { query } from '@anthropic-ai/claude-agent-sdk';
import fs from 'fs';
import path from 'path';

async function auditLogExample() {
  const auditLogPath = path.join(process.cwd(), 'audit.log');

  // 清空之前的审计日志
  fs.writeFileSync(
    auditLogPath,
    `# 审计日志 - ${new Date().toISOString()}\n\n`,
  );

  for await (const message of query({
    prompt: 'Refactor the utils.ts file to improve code quality',
    options: {
      allowedTools: ['Read', 'Edit', 'Write'],
      permissionMode: 'acceptEdits',
      hooks: {
        PostToolUse: [
          {
            matcher: 'Edit|Write', // 只匹配 Edit 和 Write 工具
            hooks: [
              async (input, toolUseId, { signal }) => {
                const toolInput = input as {
                  tool_name: string;
                  tool_input: unknown;
                };

                if (toolInput.tool_name === 'Edit') {
                  const filePath = (
                    toolInput.tool_input as { file_path: string }
                  ).file_path;
                  const logEntry = `[${new Date().toISOString()}] ${toolInput.tool_name}: ${filePath}\n`;
                  fs.appendFileSync(auditLogPath, logEntry);
                  console.log(`📝 审计: ${logEntry.trim()}`);
                } else if (toolInput.tool_name === 'Write') {
                  const filePath = (
                    toolInput.tool_input as { file_path: string }
                  ).file_path;
                  const content = (toolInput.tool_input as { content: string })
                    .content;
                  const logEntry = `[${new Date().toISOString()}] ${toolInput.tool_name}: ${filePath} (${content.length} bytes)\n`;
                  fs.appendFileSync(auditLogPath, logEntry);
                  console.log(`📝 审计: ${logEntry.trim()}`);
                }

                return {};
              },
            ],
          },
        ],
      },
    },
  })) {
    if (message.type === 'result') {
      console.log(`\n✅ 任务完成`);
      console.log(`📄 审计日志已保存到: ${auditLogPath}`);
    }
  }
}

auditLogExample();
```

#### 5.1.2 实战：自定义权限控制

使用 `PreToolUse` Hook 实现比 `canUseTool` 更细粒度的权限控制。

```typescript
import { query } from '@anthropic-ai/claude-agent-sdk';

async function customPermissionControl() {
  const protectedFiles = ['package.json', 'tsconfig.json', '.env', 'config.js'];

  for await (const message of query({
    prompt: 'Update the project files',
    options: {
      allowedTools: ['Read', 'Edit', 'Write'],
      permissionMode: 'acceptEdits',
      hooks: {
        PreToolUse: [
          {
            // 匹配所有工具
            hooks: [
              async (input, toolUseId, { signal }) => {
                const toolInput = input as {
                  tool_name: string;
                  tool_input: unknown;
                };

                // 检查是否是受保护的文件
                if (['Edit', 'Write'].includes(toolInput.tool_name)) {
                  const filePath = (
                    toolInput.tool_input as { file_path: string }
                  ).file_path;
                  const fileName = path.basename(filePath);

                  if (protectedFiles.includes(fileName)) {
                    console.log(`\n⚠️  警告: 尝试修改受保护的文件 ${fileName}`);
                    logToAuditLog(
                      `WARNING: Attempted to modify protected file ${fileName}`,
                    );
                  }
                }

                // 检查 Bash 工具执行危险命令
                if (toolInput.tool_name === 'Bash') {
                  const command = (toolInput.tool_input as { command: string })
                    .command;
                  const dangerousCommands = ['rm -rf', ':(){ :|:& };:', 'mkfs'];

                  for (const dangerousCmd of dangerousCommands) {
                    if (command.includes(dangerousCmd)) {
                      console.log(`\n🚫 阻止危险命令: ${command}`);
                      return {
                        continue: true,
                        suppressOutput: false,
                        decision: 'block',
                        reason: `Dangerous command detected: ${dangerousCmd}`,
                        stopReason: 'Security policy violation',
                      };
                    }
                  }
                }

                return {};
              },
            ],
          },
        ],
      },
    },
  })) {
    console.log(message);
  }
}

function logToAuditLog(message: string) {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] ${message}\n`;
  fs.appendFileSync(path.join(process.cwd(), 'security.log'), logEntry);
}

customPermissionControl();
```

#### 5.1.3 用户提示词增强

使用 `UserPromptSubmit` Hook 自动添加上下文信息到用户提示词。

```typescript
import { query } from '@anthropic-ai/claude-agent-sdk';

async function enhanceUserPrompt() {
  const projectContext = `
# 项目上下文
这是一个 TypeScript 后端项目，使用 NestJS。
项目遵循以下约定：
- 使用 class-validator 进行输入验证
- 使用 class-transformer 进行数据转换
- 所有 API 响应格式统一为 { data, success, message }
- 数据库使用 PostgreSQL，通过 TypeORM 访问
`;

  for await (const message of query({
    prompt: 'Create a new API endpoint',
    options: {
      allowedTools: ['Read', 'Write', 'Edit'],
      permissionMode: 'acceptEdits',
      hooks: {
        UserPromptSubmit: [
          {
            hooks: [
              async (input, toolUseId, { signal }) => {
                const userInput = input as { prompt: string };
                console.log(
                  `\n📝 原始提示词: ${userInput.prompt.substring(0, 50)}...`,
                );

                return {
                  continue: true,
                  suppressOutput: false,
                  hookSpecificOutput: {
                    hookEventName: 'UserPromptSubmit',
                    additionalContext: projectContext,
                  },
                };
              },
            ],
          },
        ],
      },
    },
  })) {
    if (message.type === 'assistant') {
      console.log('Claude 已处理增强后的提示词');
    }
  }
}

enhanceUserPrompt();
```

#### 5.1.4 会话统计

使用 `SessionStart` 和 `SessionEnd` Hook 统计会话信息。

```typescript
import { query } from '@anthropic-ai/claude-agent-sdk';

interface SessionStats {
  sessionId: string;
  startTime: number;
  toolUsage: Map<string, number>;
  fileOperations: number;
}

let currentSession: SessionStats | null = null;

async function sessionStatsExample() {
  for await (const message of query({
    prompt: 'Analyze the codebase and provide a summary',
    options: {
      allowedTools: ['Read', 'Glob', 'Grep'],
      permissionMode: 'acceptEdits',
      hooks: {
        SessionStart: [
          {
            hooks: [
              async (input, toolUseId, { signal }) => {
                const sessionInput = input as { session_id: string };

                currentSession = {
                  sessionId: sessionInput.session_id,
                  startTime: Date.now(),
                  toolUsage: new Map(),
                  fileOperations: 0,
                };

                console.log(`\n🚀 会话开始: ${currentSession.sessionId}`);
                console.log(
                  `开始时间: ${new Date(currentSession.startTime).toISOString()}`,
                );

                return {};
              },
            ],
          },
        ],
        PostToolUse: [
          {
            hooks: [
              async (input, toolUseId, { signal }) => {
                const toolInput = input as {
                  tool_name: string;
                  tool_input: unknown;
                };

                if (currentSession) {
                  // 统计工具使用
                  const toolName = toolInput.tool_name;
                  currentSession.toolUsage.set(
                    toolName,
                    (currentSession.toolUsage.get(toolName) || 0) + 1,
                  );

                  // 统计文件操作
                  if (['Read', 'Write', 'Edit'].includes(toolName)) {
                    currentSession.fileOperations++;
                  }
                }

                return {};
              },
            ],
          },
        ],
        SessionEnd: [
          {
            hooks: [
              async (input, toolUseId, { signal }) => {
                const sessionInput = input as { reason: string };

                if (currentSession) {
                  const duration = Date.now() - currentSession.startTime;

                  console.log(`\n📊 会话统计`);
                  console.log(`会话 ID: ${currentSession.sessionId}`);
                  console.log(`持续时间: ${(duration / 1000).toFixed(2)} 秒`);
                  console.log(`结束原因: ${sessionInput.reason}`);
                  console.log(`工具使用:`);

                  for (const [tool, count] of currentSession.toolUsage) {
                    console.log(`  - ${tool}: ${count} 次`);
                  }

                  console.log(`文件操作: ${currentSession.fileOperations} 次`);
                }

                return {};
              },
            ],
          },
        ],
      },
    },
  })) {
    // 正常处理消息
  }
}

sessionStatsExample();
```

### 5.2 Subagents 子代理

Subagents 让你可以定义专门的代理来处理特定任务，然后从主代理中调用它们。

#### 子代理优势

| 特性           | 说明                                 |
| -------------- | ------------------------------------ |
| **职责分离**   | 每个子代理专注于特定领域             |
| **上下文隔离** | 子代理有独立的上下文，不会污染主代理 |
| **并行执行**   | 可以同时运行多个子代理               |
| **可复用**     | 子代理可以在多个场景中复用           |
| **灵活性**     | 可以为子代理配置不同的工具和提示词   |

#### 子代理定义

```typescript
interface AgentDefinition {
  description: string; // 何时使用此代理
  tools?: string[]; // 允许使用的工具（可选，默认继承所有工具）
  prompt: string; // 系统提示词
  model?: 'sonnet' | 'opus' | 'haiku' | 'inherit'; // 使用的模型（可选）
}
```

#### 基础示例：代码审查代理

```typescript
import { query } from '@anthropic-ai/claude-agent-sdk';

async function codeReviewExample() {
  for await (const message of query({
    prompt: 'Use the code-reviewer agent to review the authentication module',
    options: {
      allowedTools: ['Read', 'Glob', 'Grep', 'Task'], // 需要 Task 来调用子代理
      agents: {
        'code-reviewer': {
          description:
            'Expert code reviewer for quality, security, and best practices',
          prompt: `You are an expert code reviewer with deep knowledge of:
         - TypeScript/JavaScript best practices
         - Security vulnerabilities (OWASP Top 10)
         - Performance optimization techniques
         - Clean code principles

Review the provided code and provide:
1. Security issues with severity levels (Critical, High, Medium, Low)
2. Code quality issues (maintainability, readability)
3. Performance optimization opportunities
4. Best practices violations
5. Concrete improvement suggestions`,
          tools: ['Read', 'Glob', 'Grep'],
          model: 'sonnet',
        },
      },
      permissionMode: 'acceptEdits',
    },
  })) {
    if (message.type === 'assistant') {
      for (const block of message.message?.content || []) {
        if ('name' in block && block.name === 'Task') {
          console.log(`🚀 启动子代理: ${block.input.subagent_type}`);
          console.log(`   任务: ${block.input.description}`);
        }
      }
    }
  }
}

codeReviewExample();
```

#### 5.2.2 多代理协作

定义多个子代理，让它们协作完成复杂任务。

```typescript
import { query } from '@anthropic-ai/claude-agent-sdk';

async function multiAgentCollaboration() {
  for await (const message of query({
    prompt: `
      I need comprehensive analysis of this codebase:

      1. First, use the security-analyzer agent to check for security vulnerabilities
      2. Then, use the performance-analyzer agent to identify performance issues
      3. Finally, use the documentation-agent to generate documentation

      Combine all findings into a comprehensive report.
    `,
    options: {
      allowedTools: ['Read', 'Glob', 'Grep', 'Task'],
      agents: {
        'security-analyzer': {
          description: 'Security vulnerability scanner',
          prompt:
            'You are a security expert. Scan the code for vulnerabilities, including SQL injection, XSS, CSRF, authentication issues, and authorization flaws.',
          tools: ['Read', 'Grep'],
          model: 'sonnet',
        },
        'performance-analyzer': {
          description: 'Performance issue identifier',
          prompt:
            'You are a performance optimization expert. Identify performance bottlenecks, inefficient algorithms, and resource leaks.',
          tools: ['Read', 'Grep'],
          model: 'haiku', // 使用更快的模型
        },
        'documentation-agent': {
          description: 'Documentation generator',
          prompt:
            'You are a technical writer. Generate comprehensive documentation including project overview, architecture diagrams, and API documentation.',
          tools: ['Read', 'Grep'],
          model: 'sonnet',
        },
      },
      permissionMode: 'acceptEdits',
    },
  })) {
    if (message.type === 'result') {
      console.log(`\n✅ 综合分析完成`);
      console.log(message.result);
    }
  }
}

multiAgentCollaboration();
```

#### 5.2.3 子代理的追踪

系统为每个子代理消息添加 `parent_tool_use_id` 字段，方便追踪。

```typescript
import { query } from '@anthropic-ai/claude-agent-sdk';

async function trackSubagents() {
  const subAgentSessions = new Map<
    string,
    {
      agentType: string;
      startTime: number;
      messages: number;
    }
  >();

  for await (const message of query({
    prompt: 'Review the code using the code-reviewer agent',
    options: {
      allowedTools: ['Read', 'Task'],
      agents: {
        'code-reviewer': {
          description: 'Code reviewer',
          prompt: 'Review the code for quality and issues.',
          tools: ['Read'],
        },
      },
      permissionMode: 'acceptEdits',
    },
  })) {
    // 追踪子代理启动
    if (message.type === 'assistant' && message.message?.content) {
      for (const block of message.message.content) {
        if (block.type === 'tool_use' && block.name === 'Task') {
          const toolUseId = block.id;
          const agentType = block.input.subagent_type;

          subAgentSessions.set(toolUseId, {
            agentType,
            startTime: Date.now(),
            messages: 0,
          });

          console.log(`🚀 子代理启动: ${agentType} (ID: ${toolUseId})`);
        }
      }
    }

    // 追踪子代理消息
    if ('parent_tool_use_id' in message && message.parent_tool_use_id) {
      const parentId = message.parent_tool_use_id;
      const session = subAgentSessions.get(parentId);

      if (session) {
        session.messages++;
      }
    }

    // 追踪子代理完成
    if (message.type === 'result') {
      for (const [toolUseId, session] of subAgentSessions) {
        const duration = Date.now() - session.startTime;
        console.log(`\n✅ 子代理完成: ${session.agentType}`);
        console.log(`   持续时间: ${(duration / 1000).toFixed(2)}s`);
        console.log(`   消息数: ${session.messages}`);
      }
    }
  }
}

trackSubagents();
```

### 5.3 Session 管理

Sessions 让你能够跨多次查询保持上下文，实现持续对话和会话恢复。

#### Session 功能

| 功能           | 说明                                     |
| -------------- | ---------------------------------------- |
| **会话保持**   | 跨多次查询保留文件读取、对话历史等上下文 |
| **会话恢复**   | 使用 session ID 恢复之前的会话           |
| **会话分支**   | 基于已有会话创建新的分支，尝试不同方案   |
| **长时间对话** | 支持持续的多轮交互                       |

#### 5.3.1 获取和恢复 Session

```typescript
import { query } from '@anthropic-ai/claude-agent-sdk';

async function sessionResumeExample() {
  let sessionId: string | undefined;

  // 第一次查询：获取 session ID
  console.log('📖 第一次查询：读取代码库\n');

  for await (const message of query({
    prompt: 'Read the authentication module and understand its structure',
    options: {
      allowedTools: ['Read', 'Glob'],
      permissionMode: 'acceptEdits',
    },
  })) {
    // 提取 session ID
    if (message.type === 'system' && message.subtype === 'init') {
      sessionId = message.session_id;
      console.log(`💾 会话 ID: ${sessionId}`);
    }
  }

  if (!sessionId) {
    console.log('❌ 未能获取 session ID');
    return;
  }

  // 第二次查询：恢复会话，Claude 会记住之前的对话
  console.log('\n📖 第二次查询：恢复会话，继续分析\n');

  for await (const message of query({
    prompt:
      'Now, find all places in the codebase that call the authentication module',
    options: {
      resume: sessionId, // 恢复会话
      allowedTools: ['Grep', 'Read'],
      permissionMode: 'acceptEdits',
    },
  })) {
    if (message.type === 'assistant') {
      for (const block of message.message?.content || []) {
        if ('text' in block) {
          console.log(block.text);
        }
      }
    }
  }

  console.log('\n✅ 会话管理演示完成');
}

sessionResumeExample();
```

#### 5.3.2 会话分支（Fork）

从现有会话创建分支，尝试不同的方法。

```typescript
import { query } from '@anthropic-ai/claude-agent-sdk';

async function sessionForkExample() {
  let sessionId: string | undefined;

  // 初始会话：分析代码
  console.log('🌳 初始会话：分析代码\n');

  for await (const message of query({
    prompt: 'Analyze the performance issues in this codebase',
    options: {
      allowedTools: ['Read', 'Grep'],
      permissionMode: 'acceptEdits',
    },
  })) {
    if (message.type === 'system' && message.subtype === 'init') {
      sessionId = message.session_id;
    }
  }

  if (!sessionId) return;

  // 分支 1：使用保守优化方案
  console.log('\n🌿 分支 1：保守优化\n');

  for await (const message of query({
    prompt: 'Apply conservative optimizations to improve performance',
    options: {
      resume: sessionId,
      forkSession: true, // 创建新分支
      allowedTools: ['Read', 'Edit'],
      permissionMode: 'acceptEdits',
    },
  })) {
    console.log('分支 1 处理中...');
  }

  // 分支 2：使用激进优化方案
  console.log('\n🌿 分支 2：激进优化\n');

  for await (const message of query({
    prompt: 'Apply aggressive optimizations, including major refactoring',
    options: {
      resume: sessionId,
      forkSession: true, // 创建另一个分支
      allowedTools: ['Read', 'Edit', 'Write'],
      permissionMode: 'acceptEdits',
    },
  })) {
    console.log('分支 2 处理中...');
  }

  console.log('\n✅ 会话分支演示完成');
}

sessionForkExample();
```

#### 5.3.3 持续对话

使用 `continue: true` 继续最后一次对话。

```typescript
import { query } from '@anthropic-ai/claude-agent-sdk';

async function continuousConversation() {
  // 第一次对话
  console.log('🗨️  第一轮对话\n');

  for await (const message of query({
    prompt: 'Explain what TypeScript is',
    options: {
      allowedTools: [],
      permissionMode: 'bypassPermissions',
    },
  })) {
    if (message.type === 'assistant') {
      for (const block of message.message?.content || []) {
        if ('text' in block) {
          console.log(block.text);
        }
      }
    }
  }

  // 继续对话，Claude 会记住上下文
  console.log('\n🗨️  第二轮对话（继续）\n');

  for await (const message of query({
    prompt: 'What are the main advantages of TypeScript over JavaScript?',
    options: {
      continue: true, // 继续上一次对话
      allowedTools: [],
      permissionMode: 'bypassPermissions',
    },
  })) {
    if (message.type === 'assistant') {
      for (const block of message.message?.content || []) {
        if ('text' in block) {
          console.log(block.text);
        }
      }
    }
  }

  // 第三轮对话
  console.log('\n🗨️  第三轮对话（继续）\n');

  for await (const message of query({
    prompt: 'What is type inference?',
    options: {
      continue: true,
      allowedTools: [],
      permissionMode: 'bypassPermissions',
    },
  })) {
    if (message.type === 'assistant') {
      for (const block of message.message?.content || []) {
        if ('text' in block) {
          console.log(block.text);
        }
      }
    }
  }
}

continuousConversation();
```

#### 5.3.4 Session API

`Query` 对象提供了 Session 相关的方法：

```typescript
interface Query extends AsyncGenerator<SDKMessage, void> {
  // ... 其他方法
  // 暂时实现，未来可能会添加的 Session 方法
  // getSessionId(): Promise<string>;        // 获取当前 session ID
  // saveSession(): Promise<string>;        // 保存当前会话
  // listSessions(): Promise<SessionInfo[]>; // 列出所有会话
}
```

---

## 6. MCP 集成

MCP (Model Context Protocol) 是一个开放协议，让 Agent 能够连接到外部系统，如数据库、浏览器、API 等。

### 6.1 MCP 服务器类型

| 类型      | 说明               | 适用场景       |
| --------- | ------------------ | -------------- |
| **stdio** | 标准输入/输出通信  | 本地进程、脚本 |
| **SSE**   | Server-Sent Events | 实时数据流     |
| **HTTP**  | RESTful API        | Web 服务       |
| **SDK**   | 进程内集成         | 自定义工具     |

### 6.2 MCP 服务器配置

#### 6.2.1 stdio 类型配置

```typescript
interface McpStdioServerConfig {
  type?: 'stdio';
  command: string; // 要执行的命令
  args?: string[]; // 命令参数
  env?: Record<string, string>; // 环境变量
}
```

**示例：配置 Postgres MCP 服务器**

```typescript
import { query } from '@anthropic-ai/claude-agent-sdk';

async function postgresMcpExample() {
  for await (const message of query({
    prompt: 'Query the users table and find all active users',
    options: {
      mcpServers: {
        postgres: {
          type: 'stdio',
          command: 'npx',
          args: ['-y', '@modelcontextprotocol/server-postgres'],
          env: {
            POSTGRES_CONNECTION_STRING:
              'postgresql://user:password@localhost:5432/mydb',
          },
        },
      },
      permissionMode: 'acceptEdits',
    },
  })) {
    if (message.type === 'assistant') {
      for (const block of message.message?.content || []) {
        if ('name' in block && block.name === 'postgres.query') {
          console.log(`🗄️  执行 SQL 查询`);
        }
      }
    }
  }
}

postgresMcpExample();
```

#### 6.2.2 SSE 类型配置

```typescript
interface McpSSEServerConfig {
  type: 'sse';
  url: string; // SSE 服务器 URL
  headers?: Record<string, string>; // 请求头
}
```

**示例：连接 SSE 服务器**

```typescript
await query({
  prompt: 'Get real-time data from SSE server',
  options: {
    mcpServers: {
      realtime: {
        type: 'sse',
        url: 'https://api.example.com/sse',
        headers: {
          Authorization: 'Bearer your-token',
        },
      },
    },
  },
});
```

#### 6.2.3 HTTP 类型配置

```typescript
interface McpHttpServerConfig {
  type: 'http';
  url: string; // HTTP 服务器 URL
  headers?: Record<string, string>; // 请求头
}
```

**示例：连接 REST API**

```typescript
await query({
  prompt: 'Fetch data from external API',
  options: {
    mcpServers: {
      myapi: {
        type: 'http',
        url: 'https://api.example.com/mcp',
        headers: {
          Authorization: 'Bearer your-token',
          'X-API-Key': 'your-api-key',
        },
      },
    },
  },
});
```

### 6.3 实战：连接数据库

#### 6.3.1 PostgreSQL 集成

完整示例：使用 Agent SDK 操作 PostgreSQL 数据库。

```typescript
import { query } from '@anthropic-ai/claude-agent-sdk';

async function postgresFullExample() {
  console.log('🗄️  开始 PostgreSQL 操作\n');

  for await (const message of query({
    prompt: `
      I need you to work with the PostgreSQL database:

      1. List all tables in the public schema
      2. Describe the structure of the 'users' table
      3. Find all users who registered in the last 30 days
      4. Create a summary report of active vs inactive users
    `,
    options: {
      mcpServers: {
        postgres: {
          type: 'stdio',
          command: 'npx',
          args: ['-y', '@modelcontextprotocol/server-postgres'],
          env: {
            POSTGRES_CONNECTION_STRING:
              process.env.DATABASE_URL ||
              'postgresql://user:password@localhost:5432/mydb',
          },
        },
      },
      allowedTools: [], // 让 MCP 服务器自动注册工具
      permissionMode: 'acceptEdits',
    },
  })) {
    if (message.type === 'assistant') {
      for (const block of message.message?.content || []) {
        if ('text' in block) {
          console.log(block.text);
        }
      }
    } else if (message.type === 'result') {
      console.log(`\n✅ 数据库操作完成`);
      console.log(message.result);
    }
  }
}

postgresFullExample();
```

#### 6.3.2 MySQL 集成

```typescript
await query({
  prompt: 'Analyze the MySQL database performance',
  options: {
    mcpServers: {
      mysql: {
        type: 'stdio',
        command: 'npx',
        args: ['-y', '@modelcontextprotocol/server-mysql'],
        env: {
          MYSQL_CONNECTION_STRING: 'mysql://user:password@localhost:3306/mydb',
        },
      },
    },
  },
});
```

### 6.4 实战：浏览器自动化

使用 Playwright MCP 服务器实现浏览器自动化。

```typescript
import { query } from '@anthropic-ai/claude-agent-sdk';

async function browserAutomationExample() {
  console.log('🌐 启动浏览器自动化\n');

  for await (const message of query({
    prompt: `
      I need you to automate browser tasks:

      1. Open https://example.com
      2. Take a screenshot of the homepage
      3. Find all links on the page
      4. Click on the first link
      5. Describe what you see on the new page
    `,
    options: {
      mcpServers: {
        playwright: {
          type: 'stdio',
          command: 'npx',
          args: ['-y', '@playwright/mcp@latest'],
        },
      },
      permissionMode: 'acceptEdits',
    },
  })) {
    if (message.type === 'assistant') {
      for (const block of message.message?.content || []) {
        if ('name' in block) {
          console.log(`🎭 浏览器操作: ${block.name}`);
        }
        if ('text' in block) {
          console.log(block.text);
        }
      }
    }
  }
}

browserAutomationExample();
```

### 6.5 实战：文件系统代理

使用 Filesystem MCP 服务器访问远程文件系统。

```typescript
await query({
  prompt: "Access files on a remote server",
  options: {
    mcpServers: {
      remote-files: {
        type: "stdio",
        command: "npx",
        args: ["-y", "@modelcontextprotocol/server-filesystem"],
        env: {
          // 设置允许访问的目录
          FS_ALLOWED_DIRECTORIES: "/home/user/projects"
        }
      }
    },
    additionalDirectories: [
      "/home/user/projects"
    ]
  }
});
```

### 6.6 MCP 服务器管理

#### 获取 MCP 服务器状态

```typescript
import { query } from '@anthropic-ai/claude-agent-sdk';

async function mcpStatusExample() {
  const queryResult = query({
    prompt: 'Hi',
    options: {
      mcpServers: {
        postgres: {
          type: 'stdio',
          command: 'npx',
          args: ['-y', '@modelcontextprotocol/server-postgres'],
          env: {
            POSTGRES_CONNECTION_STRING: 'postgresql://...',
          },
        },
      },
    },
  });

  // 获取 MCP 服务器状态
  const status = await queryResult.mcpServerStatus();
  console.log('MCP 服务器状态:');
  for (const server of status) {
    console.log(`  - ${server.name}: ${server.status}`);
    if (server.status === 'connected' && server.serverInfo) {
      console.log(
        `    版本: ${server.serverInfo.name} ${server.serverInfo.version}`,
      );
    }
  }
}

mcpStatusExample();
```

---

## 7. 实战案例

### 7.1 案例1：Bug 修复 Agent

自动识别和修复代码缺陷的 Agent。

```typescript
import { query } from '@anthropic-ai/claude-agent-sdk';

async function bugFixAgent(targetFiles: string[]) {
  console.log('🔍 启动 Bug 修复 Agent\n');
  console.log(`目标文件: ${targetFiles.join(', ')}\n`);

  for await (const message of query({
    prompt: `
      Your task is to review and fix bugs in the following files:
      ${targetFiles.map((f) => `- ${f}`).join('\n')}

      Process:
      1. Read each file and understand its purpose
      2. Identify potential bugs, including:
         - Null/undefined references
         - Edge cases not handled
         - Logic errors
         - Type mismatches
         - Resource leaks
      3. Fix the identified bugs
      4. Ensure the fixes maintain backward compatibility
      5. Add error handling where appropriate

      Output a summary of:
      - Bugs found (with severity: Critical, High, Medium, Low)
      - Fixes applied
      - Any potential side effects
    `,
    options: {
      allowedTools: ['Read', 'Edit', 'Write', 'Bash', 'Grep'],
      permissionMode: 'acceptEdits',
      maxTurns: 50,
      systemPrompt:
        'You are an expert debugging assistant. Focus on producing clean, maintainable, and safe code.',
    },
  })) {
    if (message.type === 'assistant') {
      for (const block of message.message?.content || []) {
        if ('name' in block) {
          console.log(
            `🔧 ${block.name}: ${JSON.stringify(block.input).substring(0, 100)}...`,
          );
        }
      }
    } else if (message.type === 'result' && message.subtype === 'success') {
      console.log(`\n${'='.repeat(60)}`);
      console.log('✅ Bug 修复完成！');
      console.log(`耗时: ${(message.duration_ms / 1000).toFixed(2)}秒`);
      console.log(`成本: $${message.total_cost_usd.toFixed(6)}`);
      console.log(
        `Token 使用: ${message.usage.input_tokens} 输入, ${message.usage.output_tokens} 输出`,
      );
      console.log(message.result);
      console.log(`${'='.repeat(60)}\n`);
    }
  }
}

// 使用示例
async function main() {
  const targetFiles = [
    'src/utils/auth.ts',
    'src/api/user.ts',
    'src/middleware/validate.ts',
  ];

  await bugFixAgent(targetFiles);
}

main();
```

**集成 CI/CD：**

```typescript
// cicd/bug-fix-script.ts
import { query } from '@anthropic-ai/claude-agent-sdk';
import { execSync } from 'child_process';

async function cicdBugFix() {
  console.log('🚀 CI/CD: 自动 Bug 修复流程\n');

  // 1. 获取修改的文件
  const changedFiles = execSync('git diff --name-only HEAD~1')
    .toString()
    .trim()
    .split('\n');
  const tsFiles = changedFiles.filter(
    (f) => f.endsWith('.ts') || f.endsWith('.tsx'),
  );

  console.log(`检测到 ${tsFiles.length} 个修改的 TypeScript 文件`);

  if (tsFiles.length === 0) {
    console.log('没有需要检查的文件');
    return;
  }

  // 2. 运行 Bug 修复 Agent
  await query({
    prompt: `
      Review and fix bugs in these files:
      ${tsFiles.map((f) => `- ${f}`).join('\n')}
    `,
    options: {
      allowedTools: ['Read', 'Edit'],
      permissionMode: 'bypassPermissions',
      allowDangerouslySkipPermissions: true,
    },
  });

  // 3. 提交修复
  execSync('git add .', { stdio: 'inherit' });
  execSync('git commit -m "chore: auto-fix bugs"', { stdio: 'inherit' });

  console.log('✅ 自动修复完成并提交');
}

cicdBugFix();
```

### 7.2 案例2：文档生成助手

自动生成代码文档和注释。

```typescript
import { query } from '@anthropic-ai/claude-agent-sdk';

async function documentationAgent() {
  console.log('📚 启动文档生成助手\n');

  for await (const message of query({
    prompt: `
      Generate comprehensive documentation for this TypeScript project:

      1. Analyze all TypeScript files in the src directory
      2. For each file, add:
         - File-level JSDoc comments
         - Function/method documentation with @param and @returns
         - Type descriptions
         - Usage examples where appropriate
      3. Create a README.md with:
         - Project overview
         - Installation instructions
         - API documentation
         - Usage examples
      4. Generate API.md with detailed API reference

      Ensure the documentation follows JSDoc standards and is clear and helpful.
    `,
    options: {
      allowedTools: ['Read', 'Edit', 'Write', 'Glob'],
      permissionMode: 'acceptEdits',
      systemPrompt:
        'You are a technical documentation specialist. Write clear, concise, and comprehensive documentation following best practices.',
    },
  })) {
    if (message.type === 'result') {
      console.log(`\n✅ 文档生成完成`);
      console.log(message.result);
    }
  }
}

documentationAgent();
```

**带模版的文档生成：**

```typescript
const docTemplate = `
# \${filename}

## Description

\${file_description}

## API Reference

\${api_documentation}

## Example Usage

\`\`\`typescript
\${example_code}
\`\`\`

## Notes

\${additional_notes}
`;

async function templateDocumentationAgent() {
  await query({
    prompt: 'Generate documentation using the provided template',
    options: {
      systemPrompt: `Use this documentation template:

${docTemplate}

Replace all placeholders (e.g., \${filename}) with actual content.`,
    },
  });
}
```

### 7.3 案例3：研究 Agent

多代理并行研究并生成综合报告。

```typescript
import { query } from '@anthropic-ai/claude-agent-sdk';

async function researchAgent(topic: string) {
  console.log(`🔬 开始研究主题: ${topic}\n`);

  for await (const message of query({
    prompt: `
      Research the topic: "${topic}"

      Break down this research into these subtopics:
      1. Current state of the field
      2. Recent developments (last 6 months)
      3. Key players and companies
      4. Technical challenges and solutions
      5. Future trends and predictions

      For each subtopic, use a dedicated research agent to:
      - Search the web for information
      - Analyze multiple sources
      - Synthesize findings

      Finally, combine all findings into a comprehensive research report.
    `,
    options: {
      allowedTools: ['Task', 'WebSearch', 'WebFetch'],
      agents: {
        'web-researcher': {
          description: 'Expert web researcher',
          prompt: `You are a research expert. Your task is to:
          1. Search for relevant information using web search
          2. Fetch and analyze key resources
          3. Synthesize findings into clear, concise summaries
          4. Cite sources properly`,
          tools: ['WebSearch', 'WebFetch'],
        },
      },
      permissionMode: 'acceptEdits',
      maxTurns: 100,
    },
  })) {
    if (message.type === 'assistant') {
      for (const block of message.message?.content || []) {
        if ('name' in block && block.name === 'Task') {
          console.log(`🔬 启动研究任务: ${block.input.description}`);
        }
      }
    } else if (message.type === 'result') {
      console.log(`\n${'='.repeat(60)}`);
      console.log('📊 研究报告\n');
      console.log(message.result);
      console.log(`${'='.repeat(60)}\n`);
    }
  }
}

// 使用示例
async function main() {
  const topics = [
    'Claude Agent SDK',
    'Model Context Protocol (MCP)',
    'AI Agents Best Practices',
  ];

  for (const topic of topics) {
    await researchAgent(topic);
    console.log('\n' + '='.repeat(80) + '\n');
  }
}

main();
```

### 7.4 案例4：邮件助手

集成 IMAP 实现邮件管理和智能分类。

**注意：** 需要先安装 IMAP MCP 服务器。

```typescript
import { query } from '@anthropic-ai/claude-agent-sdk';

async function emailAssistant() {
  console.log('📧 启动邮件助手\n');

  for await (const message of query({
    prompt: `
      Help me manage my email:

      1. Display recent emails from the inbox
      2. Identify emails that need immediate attention
      3. Categorize emails by priority (urgent, important, normal, low)
      4. Summarize the content of important emails
      5. Suggest responses for emails requiring replies
    `,
    options: {
      mcpServers: {
        imap: {
          type: 'stdio',
          command: 'npx',
          args: ['-y', '@modelcontextprotocol/server-imap'],
          env: {
            IMAP_SERVER: 'imap.gmail.com:993',
            IMAP_USER: process.env.EMAIL_USER,
            IMAP_PASSWORD: process.env.EMAIL_PASSWORD,
          },
        },
      },
      permissionMode: 'acceptEdits',
    },
  })) {
    if (message.type === 'assistant') {
      for (const block of message.message?.content || []) {
        if ('text' in block) {
          console.log(block.text);
        }
      }
    }
  }
}

// 增强版：自动分类和标签
async function enhancedEmailAssistant() {
  await query({
    prompt: `
      Automate email management:

      1. Fetch all unread emails
      2. Analyze each email and categorize:
         - Work: Projects, clients, internal communication
         - Personal: Social, family, friends
         - Finance: Bank statements, invoices, receipts
         - Newsletter: Updates, subscriptions
      3. Assign appropriate tags/labels
      4. Flag urgent emails
      5. Generate a daily summary of important emails
    `,
    options: {
      systemPrompt: `You are an intelligent email assistant. Categorize emails accurately and help the user stay organized.`,
    },
  });
}
```

---

## 8. 部署与最佳实践

### 8.1 Docker 部署

将 Agent 应用部署到 Docker 容器。

**Dockerfile:**

```dockerfile
# 使用 Node.js 20 LTS
FROM node:20-alpine

# 设置工作目录
WORKDIR /app

# 安装 Claude Code
RUN curl -fsSL https://claude.ai/install.sh | sh

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm ci --only=production

# 复制源代码
COPY . .

# 构建 TypeScript
RUN npm run build

# 设置环境变量
ENV ANTHROPIC_API_KEY=""
ENV NODE_ENV=production

# 暴露端口（如果需要 HTTP API）
EXPOSE 3000

# 启动应用
CMD ["node", "dist/index.js"]
```

**docker-compose.yml:**

```yaml
version: '3.8'

services:
  claude-agent:
    build: .
    container_name: claude-agent-app
    environment:
      - ANTHROPIC_API_KEY=${ANTHROPIC_API_KEY}
      - DATABASE_URL=${DATABASE_URL}
      - NODE_ENV=production
    volumes:
      - ./src:/app/src:ro
      - ./logs:/app/logs
    restart: unless-stopped

  postgres:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: claude_agent_db
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    volumes:
      - postgres-data:/var/lib/postgresql/data
    ports:
      - '5432:5432'

volumes:
  postgres-data:
```

**构建和运行：**

```bash
# 构建镜像
docker-compose build

# 启动服务
docker-compose up -d

# 查看日志
docker-compose logs -f claude-agent

# 停止服务
docker-compose down
```

### 8.2 错误处理和调试

#### 8.2.1 错误处理模式

```typescript
import { query } from '@anthropic-ai/claude-agent-sdk';

async function robustQuery(prompt: string, options: any) {
  const maxRetries = 3;
  let attempt = 0;

  while (attempt < maxRetries) {
    try {
      for await (const message of query({
        prompt,
        options,
      })) {
        // 检查错误消息
        if (message.type === 'result' && message.subtype.startsWith('error_')) {
          if (message.subtype === 'error_during_execution') {
            console.error(`❌ 执行错误: ${message.errors?.join(', ')}`);
            throw new Error(`Execution failed: ${message.errors?.join(', ')}`);
          } else if (message.subtype === 'error_max_turns') {
            console.warn(`⚠️  达到最大轮数限制(${options.maxTurns})`);
            throw new Error('Max turns exceeded');
          } else if (message.subtype === 'error_max_budget_usd') {
            console.error(`❌ 超出预算限制($${options.maxBudgetUsd})`);
            throw new Error('Budget exceeded');
          }
        }
      }

      return; // 成功完成
    } catch (error) {
      attempt++;
      console.error(`尝试 ${attempt}/${maxRetries} 失败:`, error);

      if (attempt >= maxRetries) {
        throw error;
      }

      // 等待后重试
      const delay = Math.pow(2, attempt) * 1000; // 2s, 4s, 8s
      console.log(`等待 ${delay}ms 后重试...`);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
}

// 使用示例
async function main() {
  try {
    await robustQuery('Analyze the codebase', {
      allowedTools: ['Read', 'Glob'],
      maxTurns: 50,
      maxBudgetUsd: 1.0,
    });
  } catch (error) {
    console.error('最终失败:', error);
    // 运行回滚操作
    await rollbackChanges();
  }
}

main();
```

#### 8.2.2 调试技巧

**1. 启用详细日志：**

```typescript
await query({
  prompt: 'Analyze code',
  options: {
    allowDangerouslySkipPermissions: true,
    includePartialMessages: true, // 包含流式部分消息
  },
});
```

**2. 打印所有消息：**

```typescript
for await (const message of query(options)) {
  console.log('📨 消息类型:', message.type);
  console.log('完整消息:', JSON.stringify(message, null, 2));
}
```

**3. 使用 hooks 追踪：**

```typescript
await query({
  prompt: 'Analyze code',
  options: {
    hooks: {
      PreToolUse: [
        {
          hooks: [
            async (input, toolUseId) => {
              console.log('🔧 即将执行工具:', input);
              return {};
            },
          ],
        },
      ],
      PostToolUse: [
        {
          hooks: [
            async (input, toolUseId) => {
              console.log('✅ 工具执行完成:', input);
              return {};
            },
          ],
        },
      ],
    },
  },
});
```

### 8.3 性能优化

#### 8.3.1 减少 Token 使用

```typescript
await query({
  prompt: 'Analyze only the core files, ignore test and configuration files',
  options: {
    // 限制可访问的文件
    cwd: './src',
    additionalDirectories: ['./lib'],
    // 使用更快的模型进行初步分析
    model: 'claude-haiku-4',
    // 限制轮数
    maxTurns: 20,
    // 提供明确的限制
    systemPrompt: 'Focus on the most critical aspects. Be concise.',
  },
});
```

#### 8.3.2 并发处理

```typescript
import { query } from '@anthropic-ai/claude-agent-sdk';

// 并发运行多个独立的 analysis
async function parallelAnalysis(files: string[]) {
  const tasks = files.map(async (file) => {
    const messages = [];

    for await (const message of query({
      prompt: `Analyze ${file}`,
      options: {
        allowedTools: ['Read'],
        permissionMode: 'bypassPermissions',
      },
    })) {
      messages.push(message);
    }

    return { file, messages };
  });

  const results = await Promise.all(tasks);
  return results;
}

// 使用示例
const files = ['file1.ts', 'file2.ts', 'file3.ts'];
const analysisResults = await parallelAnalysis(files);
```

**注意：** 并发会增加 API 成本，确保在预算内使用。

#### 8.3.3 缓存策略

```typescript
const cache = new Map<string, any>();

async function cachedQuery(key: string, prompt: string, options: any) {
  // 检查缓存
  if (cache.has(key)) {
    console.log(`✅ 缓存命中: ${key}`);
    return cache.get(key);
  }

  // 执行查询
  const results = [];
  for await (const message of query({ prompt, options })) {
    results.push(message);
  }

  // 存入缓存
  cache.set(key, results);
  return results;
}

// 使用示例
await cachedQuery('file-analysis:index.ts', 'Analyze index.ts', {
  allowedTools: ['Read'],
});
```

### 8.4 安全性注意事项

| 安全问题         | 解决方案                                                   |
| ---------------- | ---------------------------------------------------------- |
| **敏感信息泄露** | 使用 `.env` 文件，不在代码中硬编码 API Keys                |
| **文件访问越界** | 设置 `cwd` 和 `additionalDirectories`，使用 `allowedTools` |
| **危险命令执行** | 使用 `PreToolUse` Hook 检查 Bash 命令                      |
| **权限滥用**     | 使用 `permissionMode: "default"` 配合 `canUseTool`         |
| **外部访问**     | 限制 MCP 服务器，使用 `allowed_domains`                    |

**安全配置示例：**

```typescript
await query({
  prompt: 'Perform safe operations',
  options: {
    // 限制可访问的目录
    cwd: './safe-directory',
    additionalDirectories: ['./lib'],

    // 只允许安全的工具
    allowedTools: ['Read', 'Glob', 'Grep'],

    // 严格权限控制
    permissionMode: 'default',
    canUseTool: async (toolName, input) => {
      const dangerousPatterns = [
        'rm -rf',
        'mkfs',
        'dd if=/dev/zero',
        'DROP TABLE',
        'DELETE FROM',
      ];

      if (toolName === 'Bash') {
        const command = (input as { command: string }).command;
        for (const pattern of dangerousPatterns) {
          if (command.includes(pattern)) {
            return {
              behavior: 'deny',
              message: `Dangerous command detected: ${pattern}`,
              interrupt: true,
            };
          }
        }
      }

      return { behavior: 'allow' };
    },
  },
});
```

### 8.5 成本控制

#### 8.5.1 预算限制

```typescript
await query({
  prompt: 'Analyze code',
  options: {
    maxBudgetUsd: 5.0, // 最大预算 $5.00
    maxTurns: 30, // 最多 30 轮对话
    model: 'haiku', // 使用更便宜的模型
  },
});
```

#### 8.5.2 成本追踪

```typescript
let totalCost = 0;
let queryCount = 0;

async function trackCost(prompt: string, options: any) {
  for await (const message of query({ prompt, options })) {
    if (message.type === 'result') {
      totalCost += message.total_cost_usd;
      queryCount++;

      console.log(`查询 ${queryCount}:`);
      console.log(`  成本: $${message.total_cost_usd.toFixed(6)}`);
      console.log(
        `  Token: ${message.usage.input_tokens} + ${message.usage.output_tokens}`,
      );
      console.log(`  累计成本: $${totalCost.toFixed(6)}`);
    }
  }
}

// 使用示例
await trackCost('Task 1', { allowedTools: ['Read'] });
await trackCost('Task 2', { allowedTools: ['Read'] });
```

#### 8.5.3 成本优化策略

| 策略                | 说明             | 预期节省 |
| ------------------- | ---------------- | -------- |
| **使用 Haiku 模型** | 快速处理简单任务 | 50-70%   |
| **限制读取文件**    | 只读取必要的文件 | 30-50%   |
| **设定 maxTurns**   | 防止无限循环     | 20-40%   |
| **使用缓存**        | 避免重复查询     | 40-80%   |
| **优化 Prompt**     | 更清晰的指令     | 20-30%   |

---

## 9. 附录

### 9.1 API 参考速查

#### query() 函数

```typescript
query({
  prompt: string | AsyncIterable<SDKUserMessage>,
  options?: Options
}): Query
```

#### 常用 options

```typescript
{
  allowedTools?: string[];
  permissionMode?: 'default' | 'acceptEdits' | 'bypassPermissions';
  model?: string;
  maxTurns?: number;
  maxBudgetUsd?: number;
  cwd?: string;
  agents?: Record<string, AgentDefinition>;
  mcpServers?: Record<string, McpServerConfig>;
  hooks?: Partial<Record<HookEvent, HookCallbackMatcher[]>>;
}
```

#### 常用工具

```typescript
// 读取文件
Read: { file_path: string, offset?: number, limit?: number }

// 写入文件
Write: { file_path: string, content: string }

// 编辑文件
Edit: { file_path: string, old_string: string, new_string: string, replace_all?: boolean }

// 执行命令
Bash: { command: string, description?: string, timeout?: number }

// 文件搜索
Glob: { pattern: string, path?: string }

// 内容搜索
Grep: { pattern: string, path?: string, glob?: string }

// Web 搜索
WebSearch: { query: string, allowed_domains?: string[], blocked_domains?: string[] }

// Web 抓取
WebFetch: { url: string, prompt: string }

// 询问用户
AskUserQuestion: { questions: Question[] }

// 子任务
Task: { description: string, prompt: string, subagent_type: string }
```

#### Hook 事件

```typescript
HookEvent =
  | 'SessionStart'
  | 'UserPromptSubmit'
  | 'PreToolUse'
  | 'PostToolUse'
  | 'PostToolUseFailure'
  | 'PermissionRequest'
  | 'SubagentStart'
  | 'SubagentStop'
  | 'PreCompact'
  | 'Stop'
  | 'SessionEnd'
  | 'Notification'
```

### 9.2 常见问题解答

**Q1: 如何减少 API 调用成本？**

A:

- 使用 `haiku` 模型处理简单任务
- 设置 `maxTurns` 限制对话轮数
- 使用 `maxBudgetUsd` 设置预算上限
- 优化 prompt，减少冗余信息
- 使用缓存避免重复查询

**Q2: Agent 可以访问哪些文件？**

A: Agent 默认只能访问 `cwd` 的文件，可以通过：

- `cwd` 设置工作目录
- `additionalDirectories` 添加额外目录
- 使用绝对路径（不推荐）

**Q3: 如何安全地使用 Bash 工具？**

A:

- 使用 `PreToolUse` Hook 检查命令
- 黑名单危险命令（如 `rm -rf`、`dd` 等）
- 限制 Bash 工具或使用 `disallowedTools: ["Bash"]`
- 在隔离环境（如 Docker）中运行

**Q4: 支持哪些 MCP 服务器？**

A: 支持所有符合 MCP 协议的服务器，包括：

- 🗄️ @modelcontextprotocol/server-postgres
- 🗃️ @modelcontextprotocol/server-filesystem
- 🌐 @playwright/mcp
- 📧 @modelcontextprotocol/server-imap
- 等等...

查看完整列表：[MCP Server Registry](https://github.com/modelcontextprotocol/servers)

**Q5: 如何调试 Agent 的问题？**

A:

- 使用 `includePartialMessages: true` 获取详细流式消息
- 在 Hooks 中打印调试信息
- 使用 `canUseTool` 追踪所有工具调用
- 查看 `SDKResultMessage` 中的 `errors` 字段
- 启用详细日志并分析消息流

**Q6: 实时流式输出如何实现？**

A:

```typescript
for await (const message of query(options)) {
  if (message.type === 'assistant' && message.message?.content) {
    for (const block of message.message.content) {
      if ('text' in block) {
        // 实时输出文本
        process.stdout.write(block.text);
      }
    }
  }
}
```

**Q7: 如何限制 Agent 的执行时间？**

A:

```typescript
const abortController = new AbortController();

// 设置超时
setTimeout(() => {
  abortController.abort();
}, 60000); // 60 秒超时

await query({
  prompt: 'Your task here',
  options: {
    abortController,
  },
});
```

**Q8: 支持哪些模型？**

A: 支持所有 Claude 模型：

- `claude-sonnet-4`
- `claude-sonnet-4-5`
- `claude-opus-4`
- `claude-haiku-4`

可以使用 `model` 选项指定：

```typescript
await query({
  prompt: 'Your task',
  options: {
    model: 'claude-haiku-4', // 更快更便宜
  },
});
```

**Q9: 如何使用现有的 Claude Code 配置？**

A:

```typescript
await query({
  prompt: 'Your task',
  options: {
    settingSources: ['user', 'project', 'local'],
  },
});
```

这会加载：

- `~/.claude/settings.json`
- `.claude/settings.json`
- `.claude/settings.local.json`

**Q10: 是否支持并发查询？**

A: 是的，可以并发运行多个独立的 `query()`：

```typescript
const [result1, result2] = await Promise.all([
  collectMessages(query({ prompt: 'Task 1' })),
  collectMessages(query({ prompt: 'Task 2' })),
]);
```

但这会增加成本，请在预算内使用。

### 9.3 故障排查

#### 问题 1: "Claude Code not found"

**原因：** Claude Code 未安装或未在 PATH 中

**解决方案：**

```bash
# 重新安装 Claude Code
curl -fsSL https://claude.ai/install.sh | bash

# 或 npm 安装
npm install -g @anthropic-ai/claude-agent-sdk

# 验证安装
claude --version
```

#### 问题 2: "API key not found"

**原因：** API Key 未配置

**解决方案：**

```bash
# 方式 1：使用 Claude Code CLI 的认证
claude auth login

# 方式 2：设置环境变量
export ANTHROPIC_API_KEY=your-api-key

# 方式 3：创建 .env 文件
echo "ANTHROPIC_API_KEY=your-api-key" > .env
```

#### 问题 3: 权限被拒绝

**原因：** `permissionMode` 不正确或 `canUseTool` 拒绝了操作

**解决方案：**

```typescript
await query({
  prompt: 'Your task',
  options: {
    permissionMode: 'bypassPermissions', // 跳过所有权限检查
    allowDangerouslySkipPermissions: true, // 必需
  },
});

// 或实现更宽松的权限检查
await query({
  prompt: 'Your task',
  options: {
    permissionMode: 'default',
    canUseTool: async (toolName, input) => {
      console.log(`允许工具: ${toolName}`);
      return { behavior: 'allow' };
    },
  },
});
```

#### 问题 4: 达到最大轮数

**原因：** Agent 对话轮数超过了 `maxTurns` 限制

**解决方案：**

```typescript
await query({
  prompt: 'Your task',
  options: {
    maxTurns: 100, // 增加最大轮数
    // 或提供更清晰的提示词，减少对话轮数
  },
});
```

#### 问题 5: 预算超限

**原因：** API 调用成本超过了 `maxBudgetUsd` 限制

**解决方案：**

```typescript
await query({
  prompt: 'Your task',
  options: {
    maxBudgetUsd: 10.0, // 增加预算
    // 或使用更便宜的模型
    model: 'claude-haiku-4',
  },
});
```

#### 问题 6: MCP 服务器连接失败

**原因：** MCP 服务器配置错误或无法访问

**解决方案：**

```typescript
// 检查 MCP 服务器状态
const queryResult = query({ prompt: "test", options: { mcpServers: {...} } });
const status = await queryResult.mcpServerStatus();

console.log("MCP 服务器状态:");
status.forEach(server => {
  if (server.status !== 'connected') {
    console.error(`❌ ${server.name}: ${server.status}`);
  }
});

// 检查配置
await query({
  prompt: "test",
  options: {
    mcpServers: {
      myserver: {
        type: "stdio",
        command: "npx",
        args: ["-y", "@modelcontextprotocol/server-postgres"],
        env: {
          POSTGRES_CONNECTION_STRING: "postgresql://..."
        }
      }
    }
  }
});
```

### 9.4 相关资源

#### 官方文档

- [Claude Agent SDK Overview](https://platform.claude.com/docs/en/agent-sdk/overview)
- [TypeScript SDK Reference](https://platform.claude.com/docs/en/agent-sdk/typescript)
- [Quickstart Guide](https://platform.claude.com/docs/en/agent-sdk/quickstart)
- [MCP Servers Registry](https://github.com/modelcontextprotocol/servers)

#### 示例项目

- [Claude Agent SDK Demos](https://github.com/anthropics/claude-agent-sdk-demos)
  - Email Agent
  - Excel Demo
  - Hello World
  - Research Agent
  - Resume Generator

#### 相关工具

- [Claude Code CLI](https://code.claude.com/docs/en/setup)
- [Anthropic API](https://docs.anthropic.com/claude/reference/getting-started-with-the-api)
- [Model Context Protocol](https://modelcontextprotocol.io/)

#### 社区资源

- [GitHub Issues - TypeScript SDK](https://github.com/anthropics/claude-agent-sdk-typescript/issues)
- [GitHub Issues - Python SDK](https://github.com/anthropics/claude-agent-sdk-python/issues)
- [Discord Community](https://discord.gg/anthropic)
- [Twitter Updates](https://twitter.com/AnthropicAI)

#### 学习资源

- [Agents 101](https://platform.claude.com/docs/en/build-with-claude/agents)
- [Agent Design Patterns](https://platform.claude.com/docs/en/build-with-claude/agents)
- [Building Production Agents](https://platform.claude.com/docs/en/build-with-claude/agents)

---

## 结语

恭喜你完成了 TypeScript Claude Agent SDK 入门到实战的学习！

### 你已经学会了：

✅ **基础入门**

- SDK 的安装和配置
- 第一个 Agent 的创建
- 消息流的处理

✅ **核心 API**

- `query()` 函数的完整使用
- 内置工具的应用
- 权限模式和配置

✅ **高级特性**

- Hooks 钩子机制
- Subagents 子代理
- Session 会话管理

✅ **MCP 集成**

- 数据库连接
- 浏览器自动化
- 自定义 MCP 服务器

✅ **实战应用**

- Bug 修复 Agent
- 文档生成助手
- 研究 Agent
- 邮件助手

✅ **生产部署**

- Docker 部署
- 错误处理
- 性能优化
- 安全性控制
- 成本管理

### 下一步

1. **实践项目**：选择一个实际场景，构建你自己的 Agent
2. **深入学习**：探索更复杂的 Agent 架构和设计模式
3. **贡献社区**：分享你的经验、示例代码和工具

### 支持

如果在实践过程中遇到问题，可以：

- 查阅官方文档
- 查看 GitHub Issues
- 参考示例项目
- 在社区提问

祝你构建出令人惊叹的 AI 应用！🚀

---

**文档版本**：v1.0
**最后更新**：2026-01-09
**作者**：基于 Anthropic 官方文档整理

**许可**：本文档遵循 Claude Agent SDK 使用的 Anthropic 商业服务条款。
