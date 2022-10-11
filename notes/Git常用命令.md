# Git 随机

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
