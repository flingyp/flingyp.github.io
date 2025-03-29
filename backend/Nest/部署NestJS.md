# 部署

## 安装 NVM

在 [https://github.com/nvm-sh/nvm/releases/tag/v0.40.2](https://github.com/nvm-sh/nvm/releases/tag/v0.40.2) 下载安装包，并解压

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash
```

解压安装包到本地

```bash
tar -xvf nvm-0.40.2.tar.gz
```

将解压后的文件夹移动到 `~/.nvm` 目录下（可选）

```bash
mv nvm-0.40.2 ~/.nvm
```

添加环境变量，编辑你的shell配置文件（如`~/.bashrc`、`~/.bash_profile`、`~/.zshrc`等），在文件末尾添加以下行：

```bash
# $HOME/.nvm 是实际安装路径，如果安装在其他目录，请修改为实际路径
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # 加载NVM
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # 启用命令补全
```

保存文件后，重新加载配置文件：

```bash
source ~/.bashrc
```

## 安装 Git

- `yum install git`

## 安装 PM2

- `npm install -g pm2`

执行命令 `pm2` 查看是否安装成功

使用命令启动服务

- `pm2 start dist/main.js --name "serverName"`

使用命令查看服务状态

- `pm2 list`

使用命令停止服务

- `pm2 stop serverName`

使用命令重启服务

- `pm2 restart serverName`
