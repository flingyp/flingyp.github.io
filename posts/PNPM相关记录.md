# PNPM 相关记录

## 核心优势

1. 硬链接机制：所有依赖包统一存储在全局存储（~/.pnpm-store），通过硬链接复用文件
2. 依赖隔离：避免非法访问未声明的依赖（幽灵依赖问题）
3. 安装速度：比 npm/yarn 快 2-3 倍
4. 磁盘空间：平均节省 40% 以上存储空间

## 搭建 Monorepo 项目

在根目录创建 `pnpm-workspace.yaml` 文件，定义工作空间

```yaml
packages:
  - 'packages/*'
  - 'apps/*'
```

特点：

1. 支持包之间的软链接，便于本地开发
2. 共享的依赖会被提升到根目录到 `node_modules` 中，便于管理

Monorepo 的常用命令

```bash
# 运行某个子包的脚本命令
pnpm run <script> --filter <packageName>

# 更新依赖所有包（包括子包）
pnpm update --recursive # --recursive：递归地更新所有子包（workspace 中的包）的依赖
```

## 常用命令扩展

```bash
# 安装项目依赖（自动识别 workspace）
pnpm install

# 添加依赖到指定包
pnpm add lodash --filter @project/core

# 删除依赖
pnpm remove lodash --filter @project/utils

# 全局管理
pnpm setup  # 初始化 pnpm 环境
pnpm env use --global 16  # 切换 Node.js 版本
```
