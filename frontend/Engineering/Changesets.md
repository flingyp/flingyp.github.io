# Monorepos 多包管理 & 发布

本文章记录使用 `pnpm` 包管理的 `Workspace` 特性实现 `monorepo` 再配合 `Changesets` 进行**多包管理和版本发布** 的相关功能

- [Workspace](https://pnpm.io/workspaces)
- [pnpm-workspace](https://pnpm.io/pnpm-workspace_yaml)

## Changesets 的介绍

> 集中 monorepos 实现一种管理版本控制和变更日志的方法

- [changesets](https://github.com/changesets/changesets)
- [@changesets/cli](https://github.com/changesets/changesets/blob/main/packages/cli/README.md)

## 如何集成

如果你有对多包管理的需要，那么就可以使用 `changesets`

- [参考官方文章](https://pnpm.io/using-changesets)

### Add a changesets

要生成新的变更集，需要运行 `pnpm changeset` changeset 目录中生成的 MD 文件应提交到存储库

### Releasing changes

- 运行 `pnpm changeset version` 这将影响先前使用 pnpm 变更集（及其任何依赖项）指定的软件包的版本，并且更新变更日志文件
- 运行 `pnpm publish -r` 此命令将发布注册表中尚未出现的所有升级版本的包

### Config.json 配置文件

```json
{
  "$schema": "https://unpkg.com/@changesets/config@2.1.1/schema.json",
  "changelog": "@changesets/cli/changelog",
  "commit": false,
  "fixed": [],
  "linked": [],
  "access": "public",
  "baseBranch": "origin/main",
  "updateInternalDependencies": "patch",
  "ignore": [],
  "___experimentalUnsafeOptions_WILL_CHANGE_IN_PATCH": {
    "onlyUpdatePeerDependentsWhenOutOfRange": true,
    "updateInternalDependents": "always"
  }
}
```

## 配合 GitHub Actions 完成自动化版本发包

执行流程：当我们在本地仓库运行 `pnpm changeset` 修改了相关包生成的变更集，之后就可以将代码提交到有远程仓库的主分支中。GitHub Actions 会自动执行 `pnpm changeset version` 请求创建一个 PR，我们合并 PR 后就会自动帮助发包 运行 `pnpm changeset publish`

通过 Github Actions 将检测变更集文件何时到达主分支，然后打开一个新的 PR 列出所有带有碰撞版本的包。合并后，包将被更新，您可以通过添加发布属性来决定是否发布

进行配置前，需要一些先前准备：创建 `Github Token` 和 `NPM Token` ，否则我们是没法往 Github 和 NPM 上推资源的

### 创建 GitHub Token

- [点击此链接创建](https://github.com/settings/tokens/new)

- `Note` 是这个 `Token` 的名称
- `Expiration` 是这个 `Token` 的有效时长
- 而权限需要添加 `workflow` 和 `repo` 的权限
- 点击生成后，我们会得到一段字符串，我们需要将这段字符串保存起来，如果丢失了，就重新生成

### 创建 NPM Token

- 进行 NPM 管网，鼠标悬浮右上角我们的头像，点击 `Access Tokens` 去进入创建 `Token` 界面
- 点击了 `Generate New Token` 后进入下图所示页面，选择 `Publish`
- 创建后的 `Token`，也要记录起来

### 在项目中添加秘钥

申请的 `NPM Token` 和 `Github Token` 我们还需要把这俩个配置到项目设置里的 `secrets` 里才行，进入自己的仓库中，点 `Setting` 再点 `Secrets` ，然后点击右上角的 `New repository secret` 按钮，然后添加这两个秘钥就行

### 配置 Workflows

- `.github/workflows/publish.yaml`
- 注意秘钥名称对应

:::warning

`secrets.ACTIONS_PUBLISH_TOKEN` 每配置一个 NPM Token 必须去 NPM 生成一个，不可以使用其他仓库已经配置过的 `NPM Token`

因为使用了其他仓库配置的 NPM Token 秘钥，在 PR 后进行第二次 Actions 会报错的（排错排了很久，才发现是 NPM Token 的问题）

:::

```yaml
name: Packages publish
on:
  push:
    branches:
      - main

# env:
#   CI: true
#   PNPM_CACHE_FOLDER: .pnpm-store

jobs:
  version:
    timeout-minutes: 15
    runs-on: ubuntu-latest
    steps:
      - name: checkout code repository
        uses: actions/checkout@v2
        with:
          fetch-depth: 0
      - name: setup node.js
        uses: actions/setup-node@v2
        with:
          node-version: 14
      - name: install pnpm
        run: npm i pnpm@latest -g
      - name: Setup npmrc
        run: echo "//registry.npmjs.org/:_authToken=${{ secrets.NPM_PUBLISH_TOKEN }}" > .npmrc
      - name: setup pnpm config
        run: pnpm config set store-dir $PNPM_CACHE_FOLDER
      - name: install dependencies
        run: pnpm install
      - name: create and publish versions
        uses: changesets/action@v1
        with:
          version: pnpm changeset version
          commit: 'chore: update versions'
          title: 'chore: update versions'
          publish: pnpm changeset publish
        env:
          GITHUB_TOKEN: ${{ secrets.ACTIONS_PUBLISH_TOKEN }}
```

## @changesets/changelog-github

> [@changesets/changelog-github](https://github.com/changesets/changesets/tree/main/packages/changelog-github)
> 是一个生成 changelog 的插件，因为 Changesets 生成的 LOG 文件并不全面

安装：`pnpm add @changesets/changelog-github -D`

修改 Changesets 的配置文件

```json
{
  "$schema": "https://unpkg.com/@changesets/config@1.5.0/schema.json",
  // 这里进行修改即可
  "changelog": [
    "@changesets/changelog-github",
    {
      "repo": "flingyp/xxxx" // 改为你的 github 仓储
    }
  ],
  "commit": false,
  "linked": [],
  "access": "public",
  "baseBranch": "master",
  "updateInternalDependencies": "patch",
  "ignore": []
}
```
