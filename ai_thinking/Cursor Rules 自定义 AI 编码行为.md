---
outline: deep
---

# 使用 Cursor Rules 自定义 AI 编码行为

## 概述

Cursor Rules 是 Cursor 编辑器中的一项功能，允许开发者通过定义规则自定义 AI 的代码生成行为。这些规则充当系统提示，指导 AI 生成符合项目规范、编码风格和技术栈要求的代码。规则分为两种类型：

- **全局规则**：在 Cursor 设置中配置，适用于所有项目。
- **项目规则**：存储在项目根目录的 `.cursor/rules` 文件夹中，仅对特定项目生效。

**注意**：旧版 `.cursorrules` 文件已废弃，推荐使用 `.cursor/rules` 目录下的 `.mdc` 文件。

## 为什么使用 Cursor Rules？

- **代码一致性**：确保 AI 生成的代码遵循团队编码标准。
- **上下文增强**：提供项目背景，提升 AI 代码的相关性和准确性。
- **效率提升**：减少手动修改 AI 生成代码的时间。
- **团队协作**：通过共享规则文件保持代码风格统一。

## 设置 Cursor Rules

### 1. 配置全局规则

全局规则适用于所有项目，适合设置个人编码偏好。

**步骤**：

1. 打开 Cursor 编辑器。
2. 导航到 **Cursor Settings > Rules > User Rules**。
3. 输入全局规则内容，例如：

   ```markdown
   - 使用 TypeScript 编写新代码。
   - 优先使用 async/await，避免回调。
   - 遵循单一职责原则。
   ```

4. 保存设置，规则将应用于所有项目。

### 2. 配置项目规则

项目规则存储在 `.cursor/rules` 目录下的 `.mdc` 文件中，支持按文件类型或目录定制。

**步骤**：

1. 在项目根目录创建 `.cursor/rules` 文件夹。
2. 创建 `.mdc` 文件（如 `general.mdc` 或 `javascript.mdc`）。
3. 使用 Markdown 格式编写规则，并通过元数据（如 `Globs`）指定适用范围。例如：

   ```markdown
   ---
   Globs: **/*.js
   RuleType: Auto Attached
   ---

   # JavaScript 编码规则

   - 使用 ES6+ 语法。
   - 变量命名使用 camelCase。
   - 每个函数包含 JSDoc 注释。
   - 避免使用 var，优先使用 const 或 let。
   ```

4. 保存文件，Cursor 将自动应用规则到匹配的文件。

**快捷创建**：

- 按 `Cmd + Shift + P`（Mac）或 `Ctrl + Shift + P`（Windows/Linux），选择 **New Cursor Rule**。
- 选择模板或手动创建 `.mdc` 文件。

### 3. 配置项概览

已知的主要配置项包括：

1. **Globs**

   - **描述**：指定规则适用的文件路径模式，使用 Glob 语法。
   - **类型**：字符串或字符串数组。
   - **示例**：
     ```yaml
     Globs: **/*.ts
     ```
     ```yaml
     Globs:
       - **/*.js
       - **/*.jsx
     ```
   - **作用**：限制规则仅对匹配的文件生效，如 TypeScript 文件或特定目录。

2. **RuleType**

   - **描述**：定义规则的触发方式。
   - **类型**：枚举值（`Always`、`Auto Attached`）。
   - **示例**：
     ```yaml
     RuleType: Auto Attached
     ```
   - **可选值**：
     - `Always`：规则始终生效，适用于全局项目背景或通用规范。
     - `Auto Attached`：仅对 `Globs` 匹配的文件生效，适合文件类型特定规则。
   - **默认值**：未明确指定时，通常按 `Auto Attached` 处理（若有 `Globs`）。

3. **Priority**

   - **描述**：设置规则的优先级，用于解决多规则冲突。
   - **类型**：整数（越高优先级越高）。
   - **示例**：
     ```yaml
     Priority: 10
     ```
   - **作用**：当多个规则同时适用时，高优先级的规则优先生效。默认优先级为 0。

4. **Scope**
   - **描述**：指定规则的作用范围，通常与项目结构或上下文相关。
   - **类型**：字符串。
   - **示例**：
     ```yaml
     Scope: frontend
     ```
   - **作用**：用于区分规则适用的项目部分（如 `frontend` 或 `backend`），目前使用较少，依赖项目复杂性。

**配置项使用示例**

以下是一个综合使用多种配置项的 `.mdc` 文件示例：

**文件：`.cursor/rules/typescript.mdc`**

```markdown
---
Globs:
  - **/*.ts
  - **/*.tsx
RuleType: Auto Attached
Priority: 5
Scope: frontend
---

# TypeScript 编码规则

- 使用严格模式 (`strict: true`)。
- 优先使用接口（interface）而非类型别名（type）。
- 每个导出函数包含 JSDoc 注释。
  @file src/types/example.ts
```

**解释**：

- `Globs`：规则适用于所有 `.ts` 和 `.tsx` 文件。
- `RuleType: Auto Attached`：仅对匹配 `Globs` 的文件生效。
- `Priority: 5`：设置优先级高于默认值，确保 TypeScript 规则优先于通用规则。
- `Scope: frontend`：表示规则主要用于前端代码。

## 最佳实践

### 1. 按主题组织规则

为不同技术栈或场景创建单独的 `.mdc` 文件，例如：

- `general.mdc`：项目背景、通用规范。
- `typescript.mdc`：TypeScript 特定规则。
- `react.mdc`：React 组件规范。

示例（`react.mdc`）：

```markdown
---
Globs: **/*.tsx, **/*.jsx
RuleType: Auto Attached
---

# React 组件规则

- 使用函数组件和 React Hooks。
- 组件文件名使用 PascalCase。
- 每个组件包含 TypeScript 类型定义。
  @file src/components/Button.tsx
```

### 2. 使用 `@file` 提供上下文

通过 `@file` 引用项目文件，为 AI 提供更多背景。例如：

```markdown
# 样式规则

- 使用 Tailwind CSS 进行样式设计。
- 避免内联样式。
  @file src/styles/tailwind.css
```

### 3. 利用 Glob 模式

通过 `Globs` 元数据指定规则适用范围：

- `**/*.ts`：所有 TypeScript 文件。
- `src/api/**/*`：`src/api` 目录下的所有文件。

### 4. 定期优化规则

- 随着项目演进，定期更新规则以反映最新需求。
- 确保规则清晰、互不冲突。

### 5. 参考社区资源

- [Awesome CursorRules](https://github.com/PatrickJS/awesome-cursorrules)：社区共享的规则模板。
- [Cursor 官方文档](https://docs.cursor.ac.cn)：详细的规则配置指南。

## 示例：Vue 项目规则

**文件：`.cursor/rules/general.mdc`**

```markdown
---
RuleType: Always
---

# 项目概述

- Vue 3 + TypeScript 单页应用。
- 使用 Vite 构建，Pinia 状态管理。
- 代码遵循模块化设计。

# 通用规范

- 文件名使用 kebab-case。
- 使用 ESLint 和 Prettier 格式化代码。
```

**文件：`.cursor/rules/vue.mdc`**

```markdown
---
Globs: **/*.vue
RuleType: Auto Attached
---

# Vue 组件规则

- 使用 Composition API。
- 组件文件名使用 PascalCase。
- 添加 JSDoc 注释说明 props。
- 使用 scoped CSS。
  @file src/components/AppHeader.vue
```

## 注意事项

- **优先级**：项目规则优先于全局规则，多个 `.mdc` 文件可能同时应用。
- **版本控制**：将 `.cursor/rules` 纳入 Git，确保团队同步。
- **AI 局限性**：AI 可能偶尔忽略规则，需审查生成代码并调整规则。
- **兼容性**：旧版 `.cursorrules` 在 Cursor v0.47 及以下版本可用，但未来将被移除。

## 总结

Cursor Rules 帮助开发者定制 AI 编码行为，确保生成代码符合项目需求。通过全局和项目规则的结合，以及清晰的组织和社区资源，你可以大幅提升开发效率和代码质量。

**资源**：

- [Cursor 官方文档](https://docs.cursor.ac.cn)
- [Cursor Rules](https://cursor.directory/rules)
- [Awesome CursorRules](https://github.com/PatrickJS/awesome-cursorrules)
- [中文社区](https://cursorrules.agnt.one)
