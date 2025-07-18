# 高效让Cursor改bug的技巧，彻底解放AI编程生产力

> [原文内容](https://juejin.cn/post/7515379500152946714)

## 范围控制：最小化改动，小步快跑

这是必须遵守的核心原则！当AI开始胡乱修改，很可能是你给的自由度太高了。也就是说，AI往往会做太多了。

限定修改范围：在给AI下达指令时，明确告诉它： “只改动xx文件里的xx部分，不要改动其他地方。” 限制它的“表演欲”，避免它为了解决一个表象问题，大范围修改底层代码，导致整个项目崩溃。

小步迭代：养成 “小步迭代，完成一个小步骤就保存代码” 的习惯。任何一个微小的、正确的进展，立刻 `git commit`。这样即使AI后面改崩了，你也能轻松回滚，不至于前功尽弃。

**参考实践：**

```text
请只修改 src/components/UserProfile.js 这个文件。具体来说，只在 handleUpdate 函数内部添加逻辑，用于在更新成功后弹出一个提示。绝对不要修改组件的 state 结构或任何其他文件。
```

## 测试先行：用测试用例给AI戴上“紧箍咒”

与其事后亡羊补牢，不如采纳“测试先行”（Test-Driven Development）的开发模式。这招太绝了！

先为你的功能或Bug修复编写好测试用例，然后把这些测试用例交给Cursor，让它生成代码，直到所有测试通过。这就像给孙悟空戴上紧箍咒，AI的所有修改都必须以通过测试为目标，大大降低了“自由发挥”导致的出错概率。

测试示例也是直接让AI生成就好了

**参考实践：**

```js
// factorial.test.js
// const factorial = require('./factorial');
test('calculates the factorial of 5', () => {
  expect(factorial(5)).toBe(120);
});
```

```text
请在 factorial.js 文件中实现 factorial 函数，使其能通过这个测试。
```

## 文档驱动：先谋后动，设计文档是“圣经”

很多时候，代码越改越乱，根源在于需求和设计本身就不清晰。专业的做法是先谋后动。

先规划再编码：在动手前，先把需求、技术栈、UI设计、数据结构等想清楚，形成文档。

拆分文档：一个非常实用的技巧是，可以把前后端的需求分开写在不同的md文件里，比如frontend.md和backend.md。清晰地列出项目目标、技术栈、要解决的问题、参考文档、项目结构等。这样AI的上下文更清晰，犯错率更低。

参考实践：

请根据以下Markdown设计文档，实现一个React的 CharacterCounter 组件：

```text
### 组件：CharacterCounter

功能: 实时显示输入框中的字符数和最大字符限制。
Props:

- `maxLength` (number): 最大允许的字符数。
  UI:

1. 一个`textarea`输入框。
2. 输入框下方显示文本，格式为 `当前字符数 / maxLength`。
3. 当字符数超过 `maxLength` 时，计数文本变为红色。

```

## 规则至上：用.cursor/rules给AI立规矩

## 持续重构：别让AI的“代码屎山”埋了自己

## 迭代调试：打不过就“换个姿势”再来

## 全局视野：让AI“通读全文”再动手

## 人工审查：你才是最终的“代码守门员”

## 可视化沟通：一张图胜过千言万语

## 善用工具：用MCP和Context7给AI“实时补课”

## 不当傻瓜：敢于追问“白痴”问题

## 氪金变强：别在生产力工具上“薅羊毛”
