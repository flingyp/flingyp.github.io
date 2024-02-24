# Github SSH 连接不上

## 问题描述

使用 Github SSH 连接时，会出现连接不上的问题。可能原因是国内连接 22 端口被墙了。

`ssh: connect to host github.com port 22: Connection timed out`

## 解决方法

修改本地 Git 配置，连接 Github 的 443 端口

进入本地 `~/.ssh/` 目录下，创建一个 `config` 文件，添加以下内容

```txt
Host github.com
port 443
HostName ssh.github.com
IdentityFile ~/.ssh/id_rsa
```

再次拉取项目代码时，会连接 443 端口，第一次会出现提示 输入 `yes` 即可。
