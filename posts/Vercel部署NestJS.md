# Vercel 部署 NestJS 项目

确保你的 NestJS 项目能在本地正常运行，并已配置好数据库或其他外部服务

在项目根目录下创建 `vercel.json` 文件，内容如下：

```json
{
  "builds": [
    {
      "src": "src/main.ts",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "src/main.ts",
      "methods": ["GET", "POST", "PUT", "DELETE"]
    }
  ]
}
```

## 通过 Vercel 上创建项目（推荐）

前往 Vercel 创建项目，选择 `Import Git Repository`，选择你的 NestJS 项目仓库，点击 `Import` 按钮。其他什么配置都不需要动，直接部署即可。

后续提交代码后，提交到 `main` 分支会自动构建生成环境，提交其他分支会自动构建生成对应分支预览环境。

## 通过 Vercel CLI 部署

```bash
npm install -g vercel

vercel -v

# 登录 Vercel
vercel login
```

初次执行时，需要选择项目的根目录，选择创建新项目并命名，其他配置保持默认或按需调整

```sh
# 打包项目
pnpm run build

# 初次执行
vercel # 部署到 Production（生产环境）

# 后续执行
vercel # 部署到 Preview（预览环境）
vercel --prod # 部署到 Production（生产环境）
```

## 其他

- [参考文章](https://zhuanlan.zhihu.com/p/674209867)
