# 配置多个 SSH 密钥

本地电脑完全可以设置多个 SSH 密钥，用于连接不同的远程服务器或服务（如 GitHub、GitLab、Bitbucket 或其他服务器）。这在以下场景中非常常见：

- 使用多个 Git 托管平台（如一个密钥用于 GitHub，另一个用于 GitLab）。
- 区分个人和工作相关的 SSH 密钥。
- 连接不同的服务器（例如，生产服务器和测试服务器）。

以下是如何在本地电脑上配置多个 SSH 密钥的详细步骤，以及如何确保 `git push` 等操作正确使用指定的密钥。

## 配置多个 SSH 密钥的步骤

### 1. 生成多个 SSH 密钥

1. 生成第一个 SSH 密钥（例如用于 GitHub）：

   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com" -f ~/.ssh/id_ed25519_github
   ```

   - `-t ed25519`：使用 Ed25519 算法（推荐，安全性高）。
   - `-C`：添加注释（通常是邮箱）。
   - `-f`：指定密钥文件名（如 `id_ed25519_github`）。
   - 按提示设置密码（可选）或直接回车（无密码）。

2. **生成第二个 SSH 密钥**（例如用于 GitLab）：

   ```bash
   ssh-keygen -t ed25519 -C "your_email@work.com" -f ~/.ssh/id_ed25519_gitlab
   ```

3. **检查生成的密钥**：
   - 密钥文件会保存在 `~/.ssh/` 目录下，例如：
     ```
     ~/.ssh/id_ed25519_github
     ~/.ssh/id_ed25519_github.pub
     ~/.ssh/id_ed25519_gitlab
     ~/.ssh/id_ed25519_gitlab.pub
     ```

#### **2. 添加公钥到远程服务**

1. **复制公钥**：

   - 查看公钥内容：
     ```bash
     cat ~/.ssh/id_ed25519_github.pub
     ```
   - 复制输出内容。

2. **添加到 Git 平台**：

   - **GitHub**：登录 GitHub → Settings → SSH and GPG keys → New SSH key，粘贴 `id_ed25519_github.pub` 的内容。
   - **GitLab**：登录 GitLab → Settings → SSH Keys，粘贴 `id_ed25519_gitlab.pub` 的内容。

3. **验证添加**：
   - 测试 SSH 连接：
     ```bash
     ssh -T git@github.com
     ssh -T git@gitlab.com
     ```
   - 成功时会显示类似 `Hi <username>! You've successfully authenticated...`。

#### **3. 配置 SSH 客户端**

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

   - `Host`：定义一个别名（可以自定义，如 `github` 或 `gitlab`）。
   - `HostName`：实际的主机名。
   - `User`：通常是 `git`（Git 服务的默认用户）。
   - `IdentityFile`：指定使用的私钥文件。
   - `IdentitiesOnly yes`：强制只使用指定的密钥，避免 SSH 尝试其他密钥。

3. **验证配置**：
   ```bash
   ssh -T git@github.com
   ssh -T git@gitlab.com
   ```

#### **4. 配置 Git 仓库**

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

3. **测试推送**：
   ```bash
   git push -u origin main
   ```

#### **5. 启动 SSH Agent**

SSH Agent 用于管理密钥，确保无需每次手动指定：

1. **启动 SSH Agent**：

   ```bash
   eval "$(ssh-agent -s)"
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

#### **6. 处理 443 端口问题**

你提到 `git push` 在 443 端口上延迟，可能与 HTTPS 或防火墙有关。如果使用 SSH 仍需通过 443 端口（例如端口 22 被阻止），可以在 `~/.ssh/config` 中配置 GitHub 使用 443 端口的 SSH：

```bash
Host github.com
    HostName ssh.github.com
    User git
    Port 443
    IdentityFile ~/.ssh/id_ed25519_github
    IdentitiesOnly yes
```

测试连接：

```bash
ssh -T -p 443 git@ssh.github.com
```

## 常见问题及解决

### 1. SSH 密钥冲突

- 如果 SSH 尝试错误的密钥，检查 `~/.ssh/config` 是否正确配置了 `IdentitiesOnly yes`。
- 清除 SSH Agent 中的旧密钥：
  ```bash
  ssh-add -D
  ```

2. **权限问题**：

   - 确保 `~/.ssh/` 和密钥文件权限正确：
     ```bash
     chmod 600 ~/.ssh/id_ed25519_*
     chmod 644 ~/.ssh/*.pub
     chmod 600 ~/.ssh/config
     ```

3. **推送延迟**：

   - 如果切换到 SSH 后仍延迟，检查网络或防火墙：
     ```bash
     ping github.com
     telnet ssh.github.com 443
     ```
   - 尝试 VPN 或其他网络。

4. **多个仓库管理**：
   - 如果一个项目需要使用不同密钥，可以在项目目录中配置特定的 SSH 命令：
     ```bash
     git config core.sshCommand "ssh -i ~/.ssh/id_ed25519_github"
     ```

## 总结

本地电脑可以配置多个 SSH 密钥，通过以下步骤实现：

1. 使用 `ssh-keygen` 生成不同密钥（如 `id_ed25519_github` 和 `id_ed25519_gitlab`）。
2. 将公钥添加到对应的 Git 平台。
3. 编辑 `~/.ssh/config`，为每个主机指定对应的密钥。
4. 配置 Git 仓库的远程 URL，使用 SSH 协议。
5. 启动 SSH Agent 并添加密钥。
6. 如果 443 端口延迟，尝试 SSH over 443 或检查网络/代理。

如果你仍遇到 `git push` 延迟或具体错误（如完整的错误日志），请提供更多细节，我可以进一步帮助你排查！
