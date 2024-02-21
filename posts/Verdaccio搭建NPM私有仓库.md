# Verdaccio 搭建 NPM 私有仓库

Verdaccio 是一个开源的、轻量级的私有 npm 仓库管理器，允许开发团队在本地环境中搭建一个专属的 NPM 仓库

用于存储和管理项目的依赖包，有利于在公司内部管理多个自定义包，确保稳定性和安全性

前置条件：服务器需要安装上 Node、NPM、PM2

以下操作是在本地虚拟器上测试：

## 配置阶段

### 安装

1. 在服务器上安装 Verdaccio：npm install verdaccio -g

### 测试

执行命令 `verdaccio`，默认会在服务器本地上启动 Verdaccio，后续会使用 PM2

```sh
[root@iZbp12s6n1dclq79esxf2oZ /] verdaccio
(node:46828) Warning: Verdaccio doesn't need superuser privileges. don't run it under root
(Use `node --trace-warnings ...` to show where the warning was created)
(node:46828) Warning: Verdaccio doesn't need superuser privileges. don't run it under root
info --- config file - /usr/verdaccio/config.yaml
info --- the "crypt" algorithm is deprecated consider switch to "bcrypt" in the configuration file. Read the documentation for additional details
info --- using htpasswd file: /usr/verdaccio/htpasswd
info --- plugin successfully loaded: verdaccio-htpasswd
info --- plugin successfully loaded: verdaccio-audit
warn --- http address - http://localhost:4873/ - verdaccio/5.26.2
```

### 配置 Verdaccio

在 Verdaccio 文件夹中找到配置文件 config.yaml 在最后一行添加内容。之后就重启它

```yaml
<!-- vi /usr/verdaccio/config.yaml  -->
<!-- 也可以修改它的端口号 -->
listen: 0.0.0.0:4873
```

## 使用阶段

### 使用切换源地址

当我们的私有仓库服务在服务器上开始跑后，之后安装依赖都通过这个私有仓库去按照。、
这个时候就需要切换我们本地的NPM源地址，需要安装一个包叫 nrm
执行命令：

- nrm ls查看当前所有源
- nrm add 源名称 服务器IP 添加源
- nrm use 源名称切换源

![](https://cdn.nlark.com/yuque/0/2023/png/35988724/1699622056243-382d3ac1-0b13-4e23-9aac-7e2a56419a67.png)

### 添加用户

我们如果需要向私有仓库发布NPM包，那么就需要有一个用户。

- `npm adduser --registry` 服务器IP

执行上诉命令，之后会让我们输入用户名、密码和邮箱，之后我们在使用命令 `npm whoami` 查看当前登录用户的名称是否为新增用户的账号或者也可以尝试登录 Verdaccio 的页面

![](https://cdn.nlark.com/yuque/0/2023/png/35988724/1699622286602-383321e4-9587-42c0-b809-0899523e2ce2.png)

![](https://cdn.nlark.com/yuque/0/2023/png/35988724/1699622348150-9dba8ed4-1a40-4a19-9203-1f01fa893f53.png)

### 发布包

在发包之前，首先先确定源地址已经切换。之后执行 `npm publish` 直接发布即可

![](https://cdn.nlark.com/yuque/0/2023/png/35988724/1699622748650-4fcd0f1b-4879-460e-9996-c57ae8ffcac6.png)

### 安装包

如果是私有仓库中存在的包则会安装私有仓库里的包

如果安装的包不在私有仓库中，则会从NPM中寻找依赖包进行安装

## PM2

PM2 是一个守护进程管理工具，帮助您管理和守护您的应用程序。它以简单直观的 CLI 命令行方式进行工作。

- `npm install pm2 -g`

![](https://cdn.nlark.com/yuque/0/2023/png/35988724/1699624097417-4a343bc1-a8bb-407a-a40e-341a14628c22.png)

之后Verdaccio就会一直在运行状态了
