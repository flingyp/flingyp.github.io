# 利用 AI 重构项目

## 背景

最近在做一个插件 [git-pre-code-preview](https://github.com/flingyp/git-pre-code-review)，这个插件的初衷是希望在 `git commit` 提交代码时，能够利用AI自动审查暂存区代码的变更，让AI给出一些意见性的提议并且是否可以提交

在开发过程中，我遇到了需要去解析项目中的 `.gitignore` 文件，并且根据文件中的内容去判断哪些文件需要被忽略不用被AI审查。

随后就在 Github 上搜索了下，发现了一个 [parser-gitignore](https://github.com/jonschlinkert/parse-gitignore) 的库，这个库可以解析 `.gitignore` 文件，并且返回一个数组，数组中包含了所有需要被忽略的文件。但是是 JavaScript 版本。

随后我有发现对应的 [@types/parse-gitignore](https://www.npmjs.com/package/@types/parse-gitignore) 的类型库，版本号是 `1.0.2`，而人家已经 `2.0.0`，落后了一大截。

所以我就想利用 AI 来将这个项目翻译成TS个库。

## 效果

我使用的是 Cursor 的 `claude-4-sonnet` 模型。项目重构只进行了两次询问对话，就完成整个项目的重构，并且把这个 [parse-gitignore-ts](https://www.npmjs.com/package/parse-gitignore-ts) 包发布了。

![20250616](/images/250616/01.png)

![20250616](/images/250616/02.png)

![20250616](/images/250616/03.png)

![20250616](/images/250616/04.png)
