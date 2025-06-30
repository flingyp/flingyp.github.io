# Prompt & Cursors 整理

## 入门教程文档输出

```
我是一个零基础 XXX 小白，我需要完成 XXX 任务。请写一篇完整可行性教程 Markdown 文档，并给出详细的步骤和注意事项
```

## Cursor 生成 UI - JSON 免费版

贴设计稿的 UI 图，然后直接通过 Cursor 生成 UI 代码的效果是不太好的，基本上还不如自己老老实实画页面。

通过下面的这种方式比直接生成 UI 代码的效果要好一点，起码能在它生成的代码基础上去调整页面布局和样式。

当我们拿到一个设计稿的 UI 图的时候，我们先用 Google 的 Gemini 模型、Claude 或者 ChatGPT 等模型，然后让它根据 UI 截图生成一份 JSON 格式的设计规范文件。

```text
Create a JSON-formatted design system profile. This profile should extract relevant visualdesign information from the provided screenshots. The JSON output must specifically include:
The overarching design style (e.g., color palette, typography, spacing, visual hierarchy).The structural elements and layout principles.Any other attributes crucial for an Al to consistently replicate these design systems.Crucially, do not include the specific content or data present within the images, focusing solely
```

生成出来的 JSON 包含整体设计风格、结构元素、布局原则，以及一些关键属性。

接着把这份 JSON 文件复制到 Cursor 中，让 Cursor 根据这份 JSON 来生成代码。

```text
参考 @design.json 设计规范，根据 @design.png 设计稿的样式，生成一个 XXX 页面
```

### 示例

下面的截图中，左边是我通过上面的步骤生成的效果，右边是我从 Figma 中导出的设计稿。

由于选用的组件库和项目模版的影响，背景色是灰色的，输入框的样式不太一样，其他的还是不错的，起码能够在它生成的 UI 基础上去调整样式了。

个人感觉：在 H5 或者 小程序的开发中，这种简单页面可以这么搞

![250626](/images/250626/01.png)

## 项目概要 Cursor Rules Template - `project-overview.mdc`

```markdown
---
description: 项目概要
alwaysApply: true
---

# 项目概要

## 开发者角色

您是一位专业的前端开发工程师，专注于编写高质量、可维护的前端代码，熟悉最新的 Web 开发技术和最佳实践。

## 项目描述

## 项目结构

## 技术栈

## 代码规范风格

## 其他注意点

- 使用 PNPM 包管理器安装依赖包
- 任何第三发依赖包版本都以 `package.json` 为准
```

## Vue 3 和 Composition API 最佳实践 Cursor Rules Template - `vue-best-practices.mdc`

```markdown
---
description: Vue 3 和 Composition API 最佳实践
alwaysApply: true
---

# Vue 3 和 Composition API 最佳实践

- 使用 `<script setup>` 语法进行简洁的组件定义。
- 利用 ref 和 computed 进行响应式状态管理，避免使用 reactive 声明响应式变量。
- 在适当的情况下使用 provide/inject 进行依赖注入。
- 可组合项命名规范 `useXXX`，实现自定义可组合项 composables 以实现逻辑复用。
- Vue 组件命名规范 `XXX.vue`，文件名和组件名一致。
- 组件文件超出 500 行时，需要拆分组件，并考虑组件复用性。
```
