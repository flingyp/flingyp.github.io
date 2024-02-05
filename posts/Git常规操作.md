# Git 常规操作

## Git 相关概念

- **本地仓库**：存放在本机中的仓库，每台计算机都有本地仓库，本地仓库又可以细分为三个概念，分别是工作区，暂存区和本地库
- **工作区**：带.git 文件的文件夹就可以看做是一个工作区，也可以将写代码的地方看成工作区
- **暂存区**：它是一个隐式的概念，工作区中的文件会添加到暂存区
- **本地库**：本地库就是本地仓库中用于存放文件和版本管理的地方，暂存区会将文件提交到本地库当中
- **远程仓库**：远程仓库是托管在服务器中的仓库，可以被多台计算机访问

## Git 初始化配置

配置本地账号用户信息

```bash
git config --global user.email "xxxx"
git config --global user.name "xxx@xx.com"
```

## Github SSH 配置

先检查下电脑是否配置了用户信息 `git config --global --list`，如果没有配置则进行本地账号信息配置再进行下一步配置

在本地电脑 通过 `git bash` 打开执行 `ssh-keygen -t rsa -C "这里换上你的邮箱"`，执行命令后直接回车 3 次即可，不需要去输入密码

可以通过 `cat ~/.ssh/id_rsa.pub` 查看生成的公钥 或者 在电脑的 C 盘/用户文件夹下 找到 `.ssh` 文件夹 打开可以看到 `id_rsa` 和 `id_rsa.pub` 的文件。 `id_rsa.pub` 是公钥文件

进入自己的 Github 到 Settings 找到 SSH and GPG keys 点击 New SSH key 按钮。 输入 标题 和 生成的公钥 Key 即可

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

## 分支操作

1. 创建分支：`git branch branchName`
2. 切换分支：`git checkout branchName`
3. 创建并切换分支：`git checkout -b branchName`
4. 合并分支并且提交到主分支中：`git checkout main & git merge branchName`
5. 修改分支名称：`git branch -m old_name new_name`
6. 删除分支：`git branch -d branchName`
7. 删除没有合并的分支：`git branch -D branchName`
8. 删除远程分支：`git branch origin :branchName`
9. 查看未合并的分支(切换到主分支)：`git branch --no-merged`
10. 查看已经合并的分支(切换到主分支)：`git branch --merged`

## 查看历史版本

1. 查看历史版本提交日志：`git log`
2. 切换到某个提交的 commit-id 历史版本：`git checkout commit-id`
3. 以某个历史版本创建分支：`git checkout commit-id branch_name`

## 版本前进和回退

对于本地仓库而言，每一次提交的成功执行，就意味着一个新版本的生成，Git 会将这些版本给保存起来

首先需要查看版本详细信息，通过 `git reflog` 命令可以查看到所有版本的信息。第一列它会显示一个索引号，这个索引号其实是一个 Hash 值，每个版本都会对应一个 Hash 值，我们可以通过这个 Hash 来进行版本的切换

切换到指定的版本: `git reset --hard 索引号`

- `--hard` 重置位置的同时，直接将 working Tree 工作目录、 index 暂存区及 repository 都重置成目标 Reset 节点的內容
- `--soft` 重置位置的同时，保留 working Tree 工作目录和 index 暂存区的内容，只让 repository 中的内容和 reset 目标节点保持一致
- `--mixed`（默认） 重置位置的同时，只保留 Working Tree 工作目录的內容，但会将 Index 暂存区 和 Repository 中的內容更改和 reset 目标节点一致

## 储藏 Stashing

当你正在进行项目中某一部分的工作，里面的东西处于一个比较杂乱的状态，而你想转到其他分支上进行一些工作。问题是，你不想提交进行了一半的工作，否则以后你无法回到这个工作点

暂存可以获取你工作目录的中间状态——也就是你修改过的被追踪的文件和暂存的变更——并将它保存到一个未完结变更的堆栈中，随时可以重新应用

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

## 远程库相关命令

- `git push <别名/地址名> <分支名>`： 推送本地库到远程库
- `git clone <别名/地址名>`
- `git pull <别名/远程库地址名> <远程库分支名>`： 将远程库新增/修改内容拉取到本地库并合- 并
- `git fetch <别名/远程库地址名> <远程库分支名>`： 将远程库新增/修改内容拉取到本地库
- `git merge <别名/远程分支名>`： 将 fetch 下来的内容合并起来

## `.gitignore`

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
