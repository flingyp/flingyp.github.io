# Context 工程的理解

## 如何理解上下文 Context

上下文 Context 就是能够提供前因后果一系列有用的背景信息

就像在跟人聊天时，对方说的一句话，**能不能理解，往往取决于之前聊了什么**。

- 没有上下文：突然听到一句「他来了」，你可能会问：「谁啊？」、「在哪？」、「什么时候？」
- 有上下文：但如果前面大家已经在聊「小王今晚会不会来聚会」，那一句「他来了」你立刻就能懂了。

所以，上下文的作用就是让一句话、一个动作、一个代码片段有意义。

## Prompt 工程 和 Context 工程的区别是什么

我认为 Context 工程就是一系列有序不杂乱无章规范的 Prompt 工程的组合（包括各种提示词（系统，用户，历史对话，工具调用信息等等））

早期 AI 的出现，和 AI 沟通只是简单的交流回复，这个时候单一的 Prompt 工程去规范 AI 的输出就已经需求了

现在 AI Agent 的出现，简单的 Prompt 工程已经完全不够用了，这个时候我们需要 AI 输出的内容已经不是让 AI 扮演为一个固定的角色，输出固定的内容。它应该是不断学习，不断总结最后输出的一个过程。

所以这个时候，我们需要能够给 AI 提供一个尽可能全面背景的上下文信息的完整系统。

## Context 工程的主要工作有哪些？

定义一系列有序不杂乱无章规范的 Prompt

包括一系列有用的信息

- 文档
- 示例
- 规则
- 测试
- 等等一系列有用的上下文信息

## 示例

### 设置全局规则 `CLAUDE.md`

`CLAUDE.md` 文件包含 AI 助手在每次对话中将遵循的项目范围的规则。

```markdown
### 🔄 Project Awareness & Context
- **Always read `PLANNING.md`** at the start of a new conversation to understand the project's architecture, goals, style, and constraints.
- **Check `TASK.md`** before starting a new task. If the task isn’t listed, add it with a brief description and today's date.
- **Use consistent naming conventions, file structure, and architecture patterns** as described in `PLANNING.md`.
- **Use venv_linux** (the virtual environment) whenever executing Python commands, including for unit tests.

### 🧱 Code Structure & Modularity
- **Never create a file longer than 500 lines of code.** If a file approaches this limit, refactor by splitting it into modules or helper files.
- **Organize code into clearly separated modules**, grouped by feature or responsibility.
  For agents this looks like:
    - `agent.py` - Main agent definition and execution logic 
    - `tools.py` - Tool functions used by the agent 
    - `prompts.py` - System prompts
- **Use clear, consistent imports** (prefer relative imports within packages).
- **Use clear, consistent imports** (prefer relative imports within packages).
- **Use python_dotenv and load_env()** for environment variables.

### 🧪 Testing & Reliability
- **Always create Pytest unit tests for new features** (functions, classes, routes, etc).
- **After updating any logic**, check whether existing unit tests need to be updated. If so, do it.
- **Tests should live in a `/tests` folder** mirroring the main app structure.
  - Include at least:
    - 1 test for expected use
    - 1 edge case
    - 1 failure case

### ✅ Task Completion
- **Mark completed tasks in `TASK.md`** immediately after finishing them.
- Add new sub-tasks or TODOs discovered during development to `TASK.md` under a “Discovered During Work” section.

### 📎 Style & Conventions
- **Use Python** as the primary language.
- **Follow PEP8**, use type hints, and format with `black`.
- **Use `pydantic` for data validation**.
- Use `FastAPI` for APIs and `SQLAlchemy` or `SQLModel` for ORM if applicable.
- Write **docstrings for every function** using the Google style:
  ```python
  def example():
      """
      Brief summary.

      Args:
          param1 (type): Description.

      Returns:
          type: Description.
      """
  ```

### 📚 Documentation & Explainability
- **Update `README.md`** when new features are added, dependencies change, or setup steps are modified.
- **Comment non-obvious code** and ensure everything is understandable to a mid-level developer.
- When writing complex logic, **add an inline `# Reason:` comment** explaining the why, not just the what.

### 🧠 AI Behavior Rules
- **Never assume missing context. Ask questions if uncertain.**
- **Never hallucinate libraries or functions** – only use known, verified Python packages.
- **Always confirm file paths and module names** exist before referencing them in code or tests.
- **Never delete or overwrite existing code** unless explicitly instructed to or if part of a task from `TASK.md`.
```

### 编写自己的需求文档 **`INITIAL.md`**

在编写需求文档，最好能够全面的描述自己的需求，尽可能的提供一些为了实现自己特定需求而有用上下文档信息。

例如：examples、docs、tips

```markdown
## Features

尽可能描述自己的需求

## Examples

提供示例文件【如果有的话】

## Docs

完成需求需要 AI 学习或者了解的知识

- [xx1](xxx1)
- [xx2](xxx2)

## Tips 

一些注意事项【如果是经常用的注意事项，也可以定义在 Rules 或者是 CLAUDE.md 文件里】
```

## 参考资料

https://github.com/coleam00/context-engineering-intro