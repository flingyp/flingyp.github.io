# 部署 Monorepo 中的 Nuxt 项目到 Cloudflare Workers

本教程将指导你将 Monorepo 结构中位于 `apps/web` 文件夹的 Nuxt 项目部署到 Cloudflare Workers 平台。Cloudflare Workers 是一个边缘计算平台，适合运行 Nuxt 的服务器端渲染 (SSR) 应用。本教程假设你对 Nuxt 和 Monorepo 有基本了解，但无需熟悉 Cloudflare Workers。

## 前提条件
- **Node.js**: 安装 Node.js 18.x 或更高版本（推荐通过 `nvm` 管理）。
- **Cloudflare 账户**: 在 [Cloudflare 官网](https://dash.cloudflare.com) 注册并登录。
- **Wrangler CLI**: Cloudflare 的命令行工具，用于部署 Workers。
- **Git**: 项目已托管在 GitHub 或 GitLab（可选，但推荐）。
- **Monorepo 结构**: Nuxt 项目位于 `apps/web` 文件夹。

## 步骤 1: 安装 Wrangler CLI
Wrangler 是 Cloudflare Workers 的命令行工具，用于构建和部署项目。

1. 全局安装 Wrangler：
   ```bash
   npm install -g wrangler
   ```
2. 验证安装：
   ```bash
   wrangler --version
   ```
   确保输出类似 `wrangler 3.x.x`。
3. 登录 Cloudflare 账户：
   ```bash
   wrangler login
   ```
   这会打开浏览器授权 Wrangler 访问你的 Cloudflare 账户。完成后返回终端。

## 步骤 2: 配置 Nuxt 项目
确保你的 Nuxt 项目（位于 `apps/web`）适配 Cloudflare Workers 环境。Nuxt 的 Nitro 引擎支持 `cloudflare` 预设，我们需要配置它。

1. **进入 Nuxt 项目目录**：
   ```bash
   cd apps/web
   ```
2. **检查 `nuxt.config.ts`**：
   编辑 `apps/web/nuxt.config.ts`，确保指定 Cloudflare Workers 的 Nitro 预设：
   ```javascript
   export default defineNuxtConfig({
     nitro: {
       preset: 'cloudflare'
     }
   });
   ```
3. **安装依赖**：
   在 `apps/web` 目录运行：
   ```bash
   npm install
   ```
   确保项目依赖已安装，特别是 `@nuxt/kit` 和 `nitro` 相关依赖。
4. **测试本地构建**：
   在 `apps/web` 目录运行：
   ```bash
   npm run build
   ```
   这会生成 `.output` 文件夹，包含适配 Cloudflare Workers 的构建产物（通常在 `.output/server/index.mjs` 和 `.output/public`）。

## 步骤 3: 配置 Wrangler
Cloudflare Workers 使用 `wrangler.toml` 文件定义部署配置。我们需要在 `apps/web` 目录中创建并验证它。

1. **创建 `wrangler.toml`**：
   在 `apps/web` 目录运行：
   ```bash
   wrangler init
   ```
   按提示选择：
   - 是否创建新的 Workers 项目？选择 `y`。
   - 是否使用 TypeScript？选择 `n`（保持简单）。
   - 是否绑定其他资源（如 KV、D1）？暂时选择 `n`。
   
   这会在 `apps/web` 目录生成 `wrangler.toml` 文件。
2. **编辑 `wrangler.toml`**：
   打开 `apps/web/wrangler.toml`，配置如下：
   ```toml
   name = "nuxt-monorepo-web"
   compatibility_date = "2025-08-23"
   main = ".output/server/index.mjs"

   [site]
   bucket = ".output/public"
   ```
   - `name`: 项目名称，需唯一（建议包含项目名，如 `nuxt-monorepo-web`）。
   - `compatibility_date`: 设置为当前日期（格式：YYYY-MM-DD）。
   - `main`: 指向 Nuxt 构建的入口文件（通常是 `.output/server/index.mjs`）。
   - `[site].bucket`: 指向静态资源目录（通常是 `.output/public`）。
3. **验证配置**：
   - 运行构建命令确认产物：
     ```bash
     npm run build
     ls -la .output
     ```
     确认 `.output/server/index.mjs` 和 `.output/public` 存在。
   - 运行本地开发服务器测试配置：
     ```bash
     wrangler dev
     ```
     访问 `http://localhost:8787`，检查页面是否正常加载。
   - 模拟部署检查配置：
     ```bash
     wrangler publish --dry-run
     ```
     如果有错误，Wrangler 会提示问题（如文件路径错误）。

## 步骤 4: 构建并部署
现在可以构建 Nuxt 项目并部署到 Cloudflare Workers。

1. **构建项目**：
   在 `apps/web` 目录运行：
   ```bash
   npm run build
   ```
2. **本地预览（可选）**：
   使用 Wrangler 模拟 Workers 环境：
   ```bash
   wrangler dev
   ```
   在浏览器访问 `http://localhost:8787`，测试页面加载是否正常。
3. **部署到 Cloudflare Workers**：
   运行以下命令部署项目：
   ```bash
   wrangler publish
   ```
   部署成功后，Wrangler 会返回一个 URL（如 `https://nuxt-monorepo-web.<your-account>.workers.dev`）。访问该 URL 检查部署结果。

## 步骤 5: 配置 Monorepo 工作流
由于项目是 Monorepo 结构，需调整工作流以确保只构建和部署 `apps/web`。

1. **更新 `package.json`**：
   在 `apps/web/package.json` 中添加部署脚本：
   ```json
   {
     "scripts": {
       "build": "nuxt build",
       "dev": "nuxt dev",
       "deploy": "wrangler publish"
     }
   }
   ```
2. **Monorepo 工具支持**：
   如果使用 `pnpm`, `yarn`, 或 `turborepo` 管理 Monorepo，在根目录的 `package.json` 中添加工作流脚本：
   ```json
   {
     "scripts": {
       "build:web": "cd apps/web && npm run build",
       "deploy:web": "cd apps/web && npm run deploy"
     }
   }
   ```
   运行：
   ```bash
   npm run build:web
   npm run deploy:web
   ```
3. **GitHub Actions（可选）**：
   为自动化部署，在 Monorepo 根目录创建 `.github/workflows/deploy.yml`：
   ```yaml
   name: Deploy Nuxt to Cloudflare Workers
   on:
     push:
       branches: [main]
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: 18
         - run: npm install
         - run: npm run build:web
         - name: Publish to Cloudflare
           run: cd apps/web && npx wrangler publish
           env:
             CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}
   ```
   - 在 Cloudflare 仪表板生成 API Token（需 Workers 权限）。
   - 在 GitHub 仓库的 Settings > Secrets 中添加 `CLOUDFLARE_API_TOKEN`。

## 步骤 6: 常见问题与解决方法
- **问题 1: 部署后页面返回 500 错误**：
  - 检查 `.output/server/index.mjs` 是否生成。运行 `npm run build` 确认。
  - 确保 `wrangler.toml` 中的 `main` 和 `bucket` 路径正确。
  - 查看日志：`wrangler publish --verbose` 或 `wrangler tail`。
- **问题 2: API 路由（如 `/api/*`）不工作**：
  - 确认 `nuxt.config.ts` 使用了 `cloudflare` 预设。
  - 检查是否使用了不兼容的模块（如 `node:crypto`），可能需用 `unenv` 兼容替代方案。
- **问题 3: Monorepo 依赖问题**：
  - 确保 `apps/web` 的 `package.json` 包含所有必要依赖。
  - 如果使用 `pnpm`，运行 `pnpm install --filter ./apps/web` 只安装 `apps/web` 依赖。
- **问题 4: 静态资源未加载**：
  - 确认 `[site].bucket` 指向正确的静态资源目录（`.output/public`）。
  - 检查 Workers 是否启用了静态资源服务。

## 步骤 7: 优化与扩展
- **自定义域名**：
  在 Cloudflare 仪表板为 Workers 项目绑定自定义域名：
  1. 进入 Workers 项目 > “Triggers” > “Custom Domains”。
  2. 添加域名并配置 DNS 记录（通常是 CNAME）。
- **添加存储或数据库**：
  如果需要持久化存储：
  - **Cloudflare KV（键值存储）**：
    ```toml
    [[kv_namespaces]]
    binding = "MY_KV"
    id = "<your-kv-id>"
    ```
  - **Cloudflare D1（SQL 数据库）**：
    ```toml
    [[d1_databases]]
    binding = "MY_D1"
    database_name = "<your-database-name>"
    database_id = "<your-database-id>"
    ```
  - 在 `nuxt.config.ts` 中通过 `process.env` 访问绑定。
- **性能优化**：
  - 启用 Cloudflare 缓存（在仪表板配置）。
  - 使用 Nuxt 的 `useAsyncData` 和 `useFetch` 优化数据加载。
  - 考虑将静态资源托管到 Cloudflare R2，减少 Workers 负载。

## 总结
通过以上步骤，你已成功将 Monorepo 中的 Nuxt 项目（位于 `apps/web`）部署到 Cloudflare Workers。关键点包括：
- 配置 `nuxt.config.ts` 使用 `cloudflare` 预设。
- 设置 `wrangler.toml` 指定入口文件和静态资源。
- 使用 `wrangler dev` 和 `wrangler publish --dry-run` 验证配置。
- 针对 Monorepo 结构调整工作流（如 `package.json` 脚本或 GitHub Actions）。

如果遇到问题，参考 [Cloudflare Workers 文档](https://developers.cloudflare.com/workers/) 或 [Nuxt 部署指南](https://nuxt.com/docs/getting-started/deployment)。需要进一步帮助？请提供你的 `nuxt.config.ts` 或具体错误信息，我可以帮你排查！