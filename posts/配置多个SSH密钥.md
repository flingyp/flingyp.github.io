# 配置多个 SSH 密钥

## 为什么需要配置多个SSH密钥

本地电脑完全可以设置多个 SSH 密钥，用于连接不同的远程服务器或服务（如 GitHub、GitLab、Bitbucket 或其他服务器）。这在以下场景中非常常见：

- 使用多个 Git 托管平台（如一个密钥用于 GitHub，另一个用于 GitLab）
- 区分个人和工作相关的 SSH 密钥
- 连接不同的服务器（例如，生产服务器和测试服务器）
- 在同一平台使用多个账号（如个人GitHub账号和公司GitHub账号）

以下是如何在本地电脑上配置多个 SSH 密钥的详细步骤，以及如何确保 `git push` 等操作正确使用指定的密钥。

## 配置多个 SSH 密钥的步骤

### 1. 生成多个 SSH 密钥

1. 生成第一个 SSH 密钥（例如用于 GitHub）：

   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com" -f ~/.ssh/id_ed25519_github
   ```

   - `-t ed25519`：使用 Ed25519 算法（推荐，安全性高）
   - `-C`：添加注释（通常是邮箱）
   - `-f`：指定密钥文件名（如 `id_ed25519_github`）
   - 按提示设置密码（可选）或直接回车（无密码）

2. **生成第二个 SSH 密钥**（例如用于 GitLab）：

   ```bash
   ssh-keygen -t ed25519 -C "your_email@work.com" -f ~/.ssh/id_ed25519_gitlab
   ```

3. **检查生成的密钥**：
   - 密钥文件会保存在 `~/.ssh/` 目录下，例如：
     ```
     ~/.ssh/id_ed25519_github     # GitHub私钥
     ~/.ssh/id_ed25519_github.pub # GitHub公钥
     ~/.ssh/id_ed25519_gitlab     # GitLab私钥
     ~/.ssh/id_ed25519_gitlab.pub # GitLab公钥
     ```

> **注意**：Windows系统中，SSH密钥通常保存在 `C:\Users\用户名\.ssh\` 目录下

### 2. 添加公钥到远程服务

1. **复制公钥**：
   - 查看公钥内容：
     ```bash
     cat ~/.ssh/id_ed25519_github.pub
     ```
   - 复制输出内容

2. **添加到 Git 平台**：
   - **GitHub**：登录 GitHub → Settings → SSH and GPG keys → New SSH key，粘贴 `id_ed25519_github.pub` 的内容
   - **GitLab**：登录 GitLab → Settings → SSH Keys，粘贴 `id_ed25519_gitlab.pub` 的内容

3. **验证添加**：
   - 测试 SSH 连接：
     ```bash
     ssh -T git@github.com
     ssh -T git@gitlab.com
     ```
   - 成功时会显示类似 `Hi <username>! You've successfully authenticated...`

### 3. 配置 SSH 客户端

为了让 SSH 客户端知道使用哪个密钥连接到哪个主机，需要编辑 `~/.ssh/config` 文件：

1. **创建或编辑 `~/.ssh/config`**：

   ```bash
   touch ~/.ssh/config
   chmod 600 ~/.ssh/config  # 确保权限正确
   ```

2. **添加配置**：
   编辑 `~/.ssh/config`，添加如下内容：

   ```bash
   # GitHub
   Host github.com
       HostName github.com
       User git
       IdentityFile ~/.ssh/id_ed25519_github
       IdentitiesOnly yes

   # GitLab
   Host gitlab.com
       HostName gitlab.com
       User git
       IdentityFile ~/.ssh/id_ed25519_gitlab
       IdentitiesOnly yes
   ```

   - `Host`：定义一个别名（可以自定义，如 `github` 或 `gitlab`）
   - `HostName`：实际的主机名
   - `User`：通常是 `git`（Git 服务的默认用户）
   - `IdentityFile`：指定使用的私钥文件
   - `IdentitiesOnly yes`：强制只使用指定的密钥，避免 SSH 尝试其他密钥

   > **注意**：Windows系统中，需要将路径修改为Windows格式，例如：`C:/Users/用户名/.ssh/id_ed25519_github`

3. **使用别名简化配置**：

   ```bash
   # 个人GitHub账号
   Host github-personal
       HostName github.com
       User git
       IdentityFile ~/.ssh/id_ed25519_github_personal
       IdentitiesOnly yes

   # 工作GitHub账号
   Host github-work
       HostName github.com
       User git
       IdentityFile ~/.ssh/id_ed25519_github_work
       IdentitiesOnly yes
   ```

   使用此配置后，克隆仓库时需要这样使用：

   ```bash
   # 个人账号
   git clone git@github-personal:username/repo.git

   # 工作账号
   git clone git@github-work:company/repo.git
   ```

4. **验证配置**：
   ```bash
   ssh -T git@github.com
   ssh -T git@gitlab.com
   # 如果使用别名：
   ssh -T git@github-personal
   ssh -T git@github-work
   ```

### 4. 配置 Git 仓库

为每个 Git 仓库指定正确的远程 URL 和 SSH 密钥：

1. **检查远程 URL**：
   在项目目录中运行：

   ```bash
   git remote -v
   ```

2. **设置远程 URL**：
   - 对于 GitHub 仓库：
     ```bash
     git remote set-url origin git@github.com:<username>/<repo>.git
     ```
   - 对于 GitLab 仓库：
     ```bash
     git remote set-url origin git@gitlab.com:<username>/<repo>.git
     ```
   - 如果使用别名配置：

     ```bash
     # 使用个人GitHub账号
     git remote set-url origin git@github-personal:<username>/<repo>.git

     # 使用工作GitHub账号
     git remote set-url origin git@github-work:<company>/<repo>.git
     ```

3. **针对单个仓库设置特定SSH密钥**：

   如果不想修改全局SSH配置，也可以在仓库中单独配置：

   ```bash
   cd /path/to/your/repo
   git config core.sshCommand "ssh -i ~/.ssh/id_ed25519_github -F /dev/null"
   ```

4. **测试推送**：
   ```bash
   git push -u origin main
   ```

### 5. 启动 SSH Agent

SSH Agent 用于管理密钥，确保无需每次手动指定：

1. **启动 SSH Agent**：

   ```bash
   eval "$(ssh-agent -s)"  # Linux/Mac
   # Windows PowerShell
   # Start-Service ssh-agent
   ```

2. **添加密钥到 Agent**：

   ```bash
   ssh-add ~/.ssh/id_ed25519_github
   ssh-add ~/.ssh/id_ed25519_gitlab
   ```

3. **检查已添加的密钥**：

   ```bash
   ssh-add -l
   ```

4. **在Mac系统自动加载密钥**：

   在 `~/.ssh/config` 中添加以下内容：

   ```bash
   Host *
     AddKeysToAgent yes
     UseKeychain yes
   ```

   添加密钥时使用：

   ```bash
   ssh-add -K ~/.ssh/id_ed25519_github
   ```

### 6. 处理 443 端口问题

如果通过 SSH 使用 Git 时遇到连接问题或延迟，可能是网络限制导致。可以配置 SSH 通过 443 端口连接（因为 443 端口通常不会被防火墙阻止）：

1. **在 `~/.ssh/config` 中配置 GitHub 使用 443 端口**：

   ```bash
   Host github.com
       HostName ssh.github.com
       User git
       Port 443
       IdentityFile ~/.ssh/id_ed25519_github
       IdentitiesOnly yes
   ```

2. **测试连接**：

   ```bash
   ssh -T -p 443 git@ssh.github.com
   ```

3. **如果使用代理**：

   ```bash
   Host github.com
       HostName ssh.github.com
       User git
       Port 443
       IdentityFile ~/.ssh/id_ed25519_github
       IdentitiesOnly yes
       ProxyCommand nc -X connect -x 127.0.0.1:7890 %h %p
   ```

   > 这里 `127.0.0.1:7890` 是你本地代理的地址和端口

## 常见问题及解决

### 1. SSH 密钥冲突

- 如果 SSH 尝试错误的密钥，检查 `~/.ssh/config` 是否正确配置了 `IdentitiesOnly yes`
- 清除 SSH Agent 中的旧密钥：
  ```bash
  ssh-add -D
  ```
- 检查 SSH 调试信息：
  ```bash
  ssh -vT git@github.com  # -v 参数显示详细信息
  ```

### 2. 权限问题

- 确保 `~/.ssh/` 和密钥文件权限正确：

  ```bash
  chmod 700 ~/.ssh
  chmod 600 ~/.ssh/id_ed25519_*
  chmod 644 ~/.ssh/*.pub
  chmod 600 ~/.ssh/config
  ```

- Windows系统中，可以右键文件 → 属性 → 安全 → 高级，确保只有当前用户有访问权限

### 3. 推送延迟

- 如果切换到 SSH 后仍延迟，检查网络或防火墙：
  ```bash
  ping github.com
  telnet ssh.github.com 443
  ```
- 尝试配置 Git 使用 HTTPS 代理：
  ```bash
  git config --global http.proxy http://127.0.0.1:7890
  git config --global https.proxy http://127.0.0.1:7890
  ```

### 4. 多个仓库管理

- 使用工作目录区分不同账号的项目：
  ```
  ~/personal/ # 个人项目目录
  ~/work/     # 工作项目目录
  ```
- 为不同目录设置全局配置：

  ```bash
  # 在个人目录
  git config --local user.name "Personal Name"
  git config --local user.email "personal@example.com"

  # 在工作目录
  git config --local user.name "Work Name"
  git config --local user.email "work@example.com"
  ```

## 实际案例

### 案例1：同时使用GitHub和GitLab

在实际工作中，你可能需要同时使用GitHub和GitLab：

```bash
# 生成GitHub密钥
ssh-keygen -t ed25519 -C "github@example.com" -f ~/.ssh/id_ed25519_github

# 生成GitLab密钥
ssh-keygen -t ed25519 -C "gitlab@example.com" -f ~/.ssh/id_ed25519_gitlab

# 配置SSH
cat > ~/.ssh/config << EOF
Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_github
    IdentitiesOnly yes

Host gitlab.com
    HostName gitlab.com
    User git
    IdentityFile ~/.ssh/id_ed25519_gitlab
    IdentitiesOnly yes
EOF

# 添加密钥到SSH代理
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519_github
ssh-add ~/.ssh/id_ed25519_gitlab
```

### 案例2：在GitHub上使用个人和工作账号

同一个平台使用多个账号的配置：

```bash
# 生成个人GitHub密钥
ssh-keygen -t ed25519 -C "personal@example.com" -f ~/.ssh/id_ed25519_github_personal

# 生成工作GitHub密钥
ssh-keygen -t ed25519 -C "work@example.com" -f ~/.ssh/id_ed25519_github_work

# 配置SSH使用别名
cat > ~/.ssh/config << EOF
Host github-personal
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_github_personal
    IdentitiesOnly yes

Host github-work
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_github_work
    IdentitiesOnly yes
EOF

# 克隆仓库时使用别名
git clone git@github-personal:username/repo.git
git clone git@github-work:company/repo.git
```

## 总结

本地电脑可以配置多个 SSH 密钥，通过以下步骤实现：

1. 使用 `ssh-keygen` 生成不同密钥（如 `id_ed25519_github` 和 `id_ed25519_gitlab`）
2. 将公钥添加到对应的 Git 平台
3. 编辑 `~/.ssh/config`，为每个主机指定对应的密钥
4. 配置 Git 仓库的远程 URL，使用 SSH 协议
5. 启动 SSH Agent 并添加密钥
6. 如果网络有问题，可配置通过443端口连接或设置代理

通过这些配置，你可以在本地同时使用多个SSH密钥，方便地管理不同平台或不同账号的代码仓库，提高工作效率。
