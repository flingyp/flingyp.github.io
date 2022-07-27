# 工程化之规范化

## ESLint + Prettier 代码书写规范

:::tip
ESLint 配合 Prettier 来规范项目中的代码
:::

### 集成 ESlint

1.  安装：`pnpm install eslint -D`

2.  在项目终端中执行：`npx eslint --init` 去创建配置文件，它会问以下问题：

    1. How would you like to use ESLint? （你想如何使用 ESLint?）

    2. To check syntax, find problems, and enforce code style（检查语法、发现问题并强制执行代码风格）

    3. What type of modules does your project use?（你的项目使用哪种类型的模块?）

       - 选择第一个

    4. JavaScript modules (import/export)

    5. Which framework does your project use? （你的项目使用哪种框架?）

    6. Does your project use TypeScript?（你的项目是否使用 TypeScript？）

    7. Where does your code run?（你的代码在哪里运行?）

    8. How would you like to define a style for your project?（你想怎样为你的项目定义风格？）

       Use a popular style guide（使用一种流行的风格指南）

    9. Which style guide do you want to follow?（你想遵循哪一种风格指南?）

       Airbnb

    10. What format do you want your config file to be in?（你希望你的配置文件是什么格式?）

    11. Would you like to install them now with npm?（你想现在就用 NPM 安装它们吗?）

3.  执行完操作后，会自动安装对应的插件并且生成配置文件

4.  创建 .eslintignore 文件

```
*.sh
node_modules
*.md
*.woff
*.ttf
.vscode
.idea
dist
/public
/docs
.husky
.local
/bin
Dockerfile
```

5. eslint 配置文件参考

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:vue/essential",
    "airbnb-base",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    "import/prefer-default-export": "off",
    "vue/no-multiple-template-root": "off", // Vue SFC 模板根模块
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true, // 对开发依赖设置为true，不报错
        optionalDependencies: false,
        peerDependencies: false,
        bundledDependencies: false,
      },
    ],
  },
};
```

### 集成 Prettier

1. 安装：`pnpm install prettier -D`

2. 配置 Prettier 配置文件：在项目根目录创建 `.prettierrc` 文件，可以[参考文档](https://prettier.io/docs/en/options.html)

```json
{
  "printWidth": 120,
  "useTabs": false,
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true,
  "trailingComma": "none",
  "arrowParens": "avoid",
  "bracketSpacing": true,
  "vueIndentScriptAndStyle": true
}
```

3. 注：VSCode 编辑器使用 Prettier 配置需要下载插件 Prettier - Code formatter。 勾选保存后格式化，并且选择格式化文档方式为 prettierrc

4. 创建 `.prettierignore` 文件

```
/dist/*
.local
.output.js
/node_modules/**
**/*.svg
**/*.sh
/public/*
```

### 处理 ESlint 和 Prettier 的冲突

解决两者冲突问题需要用到 eslint-plugin-prettier 和 eslint-config-prettier

安装：`pnpm install eslint-plugin-prettier eslint-config-prettier -D`

eslint-plugin-prettier：会将 Prettier 的规则设置到 ESlint 的规则当中

eslint-config-prettier：关闭 ESLint 中和 Prettier 中发生冲突的规则

```javascript
module.exports = {
  ...
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:prettier/recommended' // 添加prettier插件 +
  ],
  ...
}
```

## 添加一些脚本命令

Eslint 自动修复： `"lint:fix": "eslint --cache \"{src,example}/**/*.{vue,js,ts,tsx}\" --fix"`

Prettier 自动格式化：`"lint:prettier": "prettier --write \"{src,example}/**/*.{js,json,tsx,css,less,scss,vue,html,md}\""`

## Husky + Lint-Staged 代码提交规范

集成代码提交规范主要是围绕着 Git Hooks 的钩子去工作，所以先简单的了解了解 Git Hooks

pre-commit：在`git commit`之前执行

commit-msg：在`git commit`之前执行

post-merge：在`git commit`执行后

pre-push：在 `git push` 执行前

### husky

:::tip
husky 可以让我们向项目中方便添加 Git Hooks。总结来说可以操作 Git 钩子的工具
:::

安装 husky：`npx husky-init && npm install`

执行上述命令后会在我们的根目录下生成`.husky`文件夹，这里面装的就是`git hook`的钩子函数执行文件，`pre-commit`钩子是在提交信息前执行的，即在我们`git commit`的时候触发

同时会在`package.json`的 `scripts` 中生成一条新的命令：`"prepare": "husky install"`

### lint-staged

:::tip
lint-staged 只检测那些加入缓冲区的文件，本地暂存代码检查工具
:::

安装 lint-staged：`pnpm install lint-staged -D`

注：可以通过 `npx mrm@2 lint-staged` 这个命令会同时帮你安装 husky 和 lint-staged，并做好配置

接下来添加 package.json 文件添加代码：

```json
// 检查 src 所有目录下 js,jsx,ts,tsx,json 文件，执行下面的命令
"lint-staged": {
  "src/**/*.{js,jsx,ts,tsx,json}": [
    "prettier --write",
    "eslint --cache --fix",
  ]
},
```

再修改 pre-commit 文件

```sh
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```

再进行测试 当我们 `git commit -m 'xx'` 的时候 会先去执行 `npx lint-staged`

## Commitlint + Commitizen 信息格式提交规范

:::tip
commitlint 规范团队遵守提交信息的约定，信息检查工具

commitizen 可以辅助我们，帮助我们填写规范的 commit 信息
:::

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
"config": {
    "commitizen": {
      "path": "cz-conventional-changelog"
    }
}
```

之后只同 执行脚本 commit 去填写 commit 信息

## Standard Version 生成日志文件

:::tip
可以帮助我们自动修改版本，生成 CHANGELOG.md 日志文件
:::

安装：`pnpm install standard-version -D`

添加脚本命令：

```json
"scripts": {
    "release": "standard-version", // 发版
    "first-release": "pnpm run release -- --first-release", // 第一次发版
}
```

### 手动控制版本更新

```json
"script": {
  "release:changelog:major": "standard-version --release-as major", // 升级 major
  "release:changelog:minor": "standard-version --release-as minor", // 升级 minor
  "release:changelog:patch": "standard-version --release-as patch", // 升级 patch
}
```

### 配置哪些 commit 消息写入 changelog

在自己项目根目录下创建配置文件 `.versionrc.json`

hidden 属性值控制是否将该类型的 commit 消息写入 changlog, 不填的情况下默认是:false

```json
{
  "types": [
    { "type": "feat", "section": "✨ Features | 新功能" },
    { "type": "fix", "section": "🐛 Bug Fixes | Bug 修复" },
    { "type": "init", "section": "🎉 Init | 初始化", "hidden": true },
    { "type": "docs", "section": "✏️ Documentation | 文档", "hidden": true },
    { "type": "style", "section": "💄 Styles | 风格", "hidden": true },
    { "type": "refactor", "section": "♻️ Code Refactoring | 代码重构" },
    {
      "type": "perf",
      "section": "⚡ Performance Improvements | 性能优化",
      "hidden": true
    },
    { "type": "test", "section": "✅ Tests | 测试", "hidden": true },
    { "type": "revert", "section": "⏪ Revert | 回退", "hidden": true },
    {
      "type": "build",
      "section": "📦‍ Build System | 打包构建",
      "hidden": true
    },
    {
      "type": "chore",
      "section": "🚀 Chore | 构建/工程依赖/工具",
      "hidden": true
    },
    {
      "type": "ci",
      "section": "👷 Continuous Integration | CI 配置",
      "hidden": true
    }
  ]
}
```
