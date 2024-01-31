# 代码提交规范化

代码提交规范化主要包括针对 **代码提交的规范校验**、**提交信息规范校验**

## Husky + Lint-Staged

集成代码提交规范主要是围绕着 Git Hooks 的钩子去工作，所以先简单的了解了解 Git Hooks

- `pre-commit`：在 `git commit` 之前执行
- `commit-msg`：在 `git commit` 之前执行
- `post-merge`：在 `git commit` 执行后
- `pre-push`：在 `git push` 执行前

### Husky

Husky 可以让我们向项目中方便添加 Git Hooks。总结来说可以操作 Git 钩子的工具

安装 Husky：`npx husky-init && npm install`

执行上述命令后会在我们的根目录下生成 `.husky` 文件夹，这里面装的就是 `git hook` 的钩子函数执行文件，`pre-commit` 钩子是在提交信息前执行的，即在我们 `git commit` 的时候触发

同时会在 `package.json` 的 `scripts` 中生成一条新的命令：`"prepare": "husky install"`

### lint-staged

lint-staged 只检测那些加入缓冲区的文件，本地暂存代码检查工具

安装 lint-staged：`pnpm install lint-staged -D`

注：可以通过 `npx mrm@2 lint-staged` 这个命令会同时帮你安装 husky 和 lint-staged，并做好配置

接下来添加 package.json 文件添加代码：

```json
// 检查 src 所有目录下 js,jsx,ts,tsx,json 文件，执行下面的命令
{
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx,json}": ["prettier --write", "eslint --cache --fix"]
  }
}
```

再修改 pre-commit 文件

```sh
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```

再进行测试 当我们 `git commit -m 'xx'` 的时候 会先去执行 `npx lint-staged`

## Commitlint + Commitizen

- `commitlint` 规范团队遵守提交信息的约定，信息检查工具
- `commitizen` 可以辅助我们，帮助我们填写规范的 commit 信息

### Commitlint

安装：`pnpm install @commitlint/cli @commitlint/config-conventional -D`

执行命令 `echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js` 会在根目录创建 commitlint.config.js 配置文件

注意使用上面这条命令创建的配置文件不是 utf8 格式的，在进行 `git commit`的时候回报：`SyntaxError: Invalid or unexpected token`的错误。

所以最好的方式就是自己手动创建配置文件，然后写入上面这个代码：`module.exports = {extends: ['@commitlint/config-conventional']}`

commit 消息的书写格式： `type(必填): description`

| 类型     | 描述                                                 |
| -------- | ---------------------------------------------------- |
| revert   | 回滚到上一个版本                                     |
| feat     | 新增功能                                             |
| fix      | 修复 bug                                             |
| docs     | 修改文档                                             |
| test     | 测试用例的修改                                       |
| refactor | 代码重构，未新增任何功能和修复任何 bug               |
| build    | 改变构建流程，新增依赖库、工具等（例如 webpack 修改) |
| style    | 仅仅修改了空格、缩进等，不改变代码逻辑               |
| perf     | 改善性能和体现的修改                                 |
| chore    | 修改构建流程或工具                                   |
| ci       | 自动化流程配置修改                                   |

### Commitizen

安装：`npm install commitizen cz-conventional-changelog -D`

设置一条脚本：`npm set-script commit "git-cz"`

配置 package.json 的提交信息：

```json
{
  "config": {
    "commitizen": {
      "path": "cz-conventional-changelog"
    }
  }
}
```

之后只同 执行脚本 commit 去填写 commit 信息
