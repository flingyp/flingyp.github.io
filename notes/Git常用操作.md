# Git 随机

## Git 本地仓库和远程仓库

**本地仓库**：存放在本机中的仓库，每台计算机都有本地仓库，本地仓库又可以细分为三个概念，分别是工作区，暂存区和本地库。

**工作区**：带.git 文件的文件夹就可以看做是一个工作区，也可以将写代码的地方看成工作区。

**暂存区**：它是一个隐式的概念，工作区中的文件会添加到暂存区。

**本地库**：本地库就是本地仓库中用于存放文件和版本管理的地方，暂存区会将文件提交到本地库当中。

**远程仓库**：对于一个团队来说，每个成员都有自己的本地库，那之间怎么进行通信交互呢？就是通过远程仓库来通信交互的（A 将文件推送到远程仓库，B 可以从远程仓库上将 A 推送的文件拉取下来），大名鼎鼎的 github 就是一个远程仓库，中国的 gitee 码云也是一个远程仓库，企业中用的更多的其实是一个被称为 gitlab 的远程仓库。

## 安装配置以及初始化配置

安装完成后可以通过 `git --version` 查看 Git 版本号

### 初始化配置

配置文件为 `~/.gitconfig`，执行任何 Git 配置命令后文件将自动创建。

```sh
git config --global user.email "xxxx"
git config --global user.name "xxx@xx.com"
```

## 常用命令

1. 初始化仓库：`git init`
2. 克隆仓库：`git clone url`
3. 克隆指定分支：`git clone -b branch url`
4. 查看状态：`git status`
5. 提交单个文件：`git add file`
6. 提交所有文件：`git add .`
7. 提交暂存库文件到本地仓库：`git commit -m '提示信息'`
8. 删除版本库和项目目录中的文件：`git rm file`
9. 只删除版本库中文件但保存项目目录中文件：`git rm --cached file`
10. 修改最后一次提交信息：`git commit --amend`
11. 提交代码到远程仓库：`git push`

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2017/11/30/1600b0470bd30d66~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.awebp)

## 分支管理

分支一般是为了项目新建 Feature 或者修改 Bug 时使用

1. 创建分支：`git branch branch_name`
2. 切换分支：`git checkout branch_name`
3. 创建并切换分支：`git checkout -b branch_name`
4. 合并分支并且提交到主分支中：`git checkout main & git merge branch_name`
5. 修改分支名称：`git branch -m old_name new_name`
6. 删除分支：`git branch -d branch_name`
7. 删除没有合并的分支：`git branch -D branch_name`
8. 删除远程分支：`git branch origin :branch_name`
9. 查看未合并的分支(切换到主分支)：`git branch --no-merged`
10. 查看已经合并的分支(切换到主分支)：`git branch --merged`

## 历史版本

1. 查看历史版本提交日志：`git log`
2. 切换到某个提交的 commit-id 历史版本：`git checkout commit-id`
3. 以某个历史版本创建分支：`git checkout commit-id branch_name`

## Git 版本前进和回退

对于本地仓库而言，每一次提交的成功执行，就意味着一个新版本的生成，git 会将这些版本给保存起来。

首先需要查看版本详细信息，通过 git reflog 命令可以查看到所有版本的信息。第一列它会显示一个索引号，这个索引号其实是一个 hash 值，每个版本都会对应一个 hash 值，我们可以通过这个 hash 来进行版本的切换。

:::tip 选项
--hard 重置位置的同时，直接将 working Tree 工作目录、 index 暂存区及 repository 都重置成目标 Reset 节点的內容

--soft 重置位置的同时，保留 working Tree 工作目录和 index 暂存区的内容，只让 repository 中的内容和 reset 目标节点保持一致

--mixed（默认） 重置位置的同时，只保留 Working Tree 工作目录的內容，但会将 Index 暂存区 和 Repository 中的內容更改和 reset 目标节点一致
:::

切换到指定的版本: `git reset --hard 索引号`

## 为远程仓库设置别名

- `git remote add <alias_name> <HTTPS_URL|SSH_URL>`

设置后可以通过 `git push -u alias_name main` 推送（本地当前分支）到远程仓库的 main 分支

## .gitignore

用于定义忽略提交的文件

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

## 储藏 Stashing

当你正在进行项目中某一部分的工作，里面的东西处于一个比较杂乱的状态，而你想转到其他分支上进行一些工作。问题是，你不想提交进行了一半的工作，否则以后你无法回到这个工作点。

"暂存" 可以获取你工作目录的中间状态——也就是你修改过的被追踪的文件和暂存的变更——并将它保存到一个未完结变更的堆栈中，随时可以重新应用。

- 储藏工作: `git stash`
- 查看储藏列表: `git stash list`
- 应用最近的储藏: `git stash apply`
- 应用更早的储藏: `git stash apply stash@{2}`
- 删除储藏: `git stash drop stash@{0}`
- 应用并删除储藏: `git stash pop`

## 标签 Tag

Git 也可以对某一时间点上的版本打上标签 ，用于发布软件版本如 `v1.0.0`、`v1.1.0`、`v2.0.0`

- 添加标签：`git tag v1.0`
- 列出标签：`git tag`
- 推送标签：`git push --tags`
- 删除标签：`git tag -d v1.0.1`
- 删除远程标签：`git push origin :v1.0.1`

## SSH 的配置

1. 先检查下电脑是否配置了用户信息 `git config --global --list`，如果没有配置， 则执行一下命令进行配置

2. 在本地电脑 通过 `git bash` 打开执行 `ssh-keygen -t rsa -C "这里换上你的邮箱"`，执行命令后直接回车 3 次即可，不需要去输入密码

3. 可以通过 `cat ~/.ssh/id_rsa.pub` 查看生成的公钥 或者 在电脑的 C 盘/用户文件夹下 找到 .ssh 文件夹 打开可以看到 id_rsa 和 id_rsa.pub 的文件。 id_rsa.pub 是公钥文件

4. 进入自己的 Github 到 Settings 找到 SSH and GPG keys 点击 New SSH key 按钮。 输入 title 和 公钥 Key 即可。

## 远程库相关命令

- `git push <别名/地址名> <分支名>`： 推送本地库到远程库
- `git clone <别名/地址名>`
- `git pull <别名/远程库地址名> <远程库分支名>`： 将远程库新增/修改内容拉取到本地库并合- 并
- `git fetch <别名/远程库地址名> <远程库分支名>`： 将远程库新增/修改内容拉取到本地库
- `git merge <别名/远程分支名>`： 将 fetch 下来的内容合并起来

## `npm version` 使用方法

### version

每个包都有一个 `package.json`，如果要发布包的话，文件里面的`version` 字段就是决定发包的版本号了。

`version` 字段是这样一个结构： **0.0.1**，是有三位的版本号。分别是对应的里面的：major、minor、 patch。

也就是说当发布大版本的时候会升级为 1.0.0，小版本是 0.1.0，一些小修复是 0.0.2。

### `npm version`

为了更改版本号，npm 有 npm version 这个命令来自动更改版本号，同时帮忙 commit。比如说 当前版本是 1.1.1，当执行 `npm version patch -m '[patch]'` 的时候，会自动把版本改为 1.1.2，同时 会多出一个 `commit`，这次改动便是更改 package.json 文件。

如果执行了 `prepatch`，版本号会从 1.1.1 变成 1.1.2-0

### 相关版本

| npm version |                                                                                                                                       功能                                                                                                                                       |
| :---------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|    major    | 如果没有预发布号，则直接升级一位大号，其他位都置为 0。如果有预发布号：1. 中号和小号都为 0，则不升级大号，而将预发布号删掉。即 2.0.0-1 变成 2.0.0，这就是预发布的作用。2. 如果中号和小号有任意一个不是 0，那边会升级一位大号，其他位都置为 0，清空预发布号。即 2.0.1-0 变成 3.0.0 |
|    minor    |                                                            如果没有预发布号，则升级一位中号，大号不动，小号置为空。如果有预发布号：1. 如果小号为 0，则不升级中号，将预发布号去掉。2. 如果小号不为 0，同理没有预发布号                                                            |
|    patch    |                                                                                               如果没有预发布号：直接升级小号，去掉预发布号。如果有预发布号：去掉预发布号，其他不动                                                                                               |
|  premajor   |                                                                                                                 直接升级大号，中号和小号置为 0，增加预发布号为 0                                                                                                                 |
|  preminor   |                                                                                                                    直接升级中号，小号置为 0，增加预发布号为 0                                                                                                                    |
|  prepatch   |                                                                                                                          直接升级小号，增加预发布号为 0                                                                                                                          |
| prerelease  |                                                                                                   如果没有预发布号：增加小号，增加预发布号为 0。如果有预发布号，则升级预发布号                                                                                                   |
