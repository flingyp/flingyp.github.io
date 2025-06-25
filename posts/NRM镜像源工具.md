# 使用 NRM 镜像源工具

## 什么是 NRM

nrm（NPM Registry Manager）是一个 NPM 镜像源管理工具，专为 Node.js 开发者设计。它可以帮助你快速切换不同的 npm 镜像源，提升依赖包的下载速度，尤其适合国内网络环境。由于 npm 官方源（`https://registry.npmjs.org/`）在国内访问较慢，nrm 提供了一种便捷的方式来管理和切换国内镜像源（如淘宝镜像）或企业私有源。

## 为什么需要 NRM

- **加速下载**：国内镜像源（如淘宝、腾讯）比官方源更快，减少依赖安装时间。
- **灵活切换**：支持快速在不同镜像源（如官方、淘宝、企业私有源）之间切换。
- **管理私有源**：便于添加和使用公司内部的私有 npm 源。
- **测试速度**：可以测试不同源的响应时间，选择 Societ选择最优镜像。

## 安装 NRM

在命令行中执行以下命令全局安装 NRM

```bash
npm install -g nrm
```

安装完成后，可以通过以下命令验证是否安装成功：

```bash
nrm -V # 如果显示版本号（如 1.2.6），则表示安装成功。
```

## 常用命令

以下是 NRM 的主要命令及其功能：

1. **查看可用镜像源**：

   ```bash
   nrm ls
   ```

   输出示例：

   ```
   npm ---------- https://registry.npmjs.org/
   yarn --------- https://registry.yarnpkg.com/
   tencent ------ https://mirrors.cloud.tencent.com/npm/
   cnpm --------- https://r.cnpmjs.org/
   * taobao ------- https://registry.npmmirror.com/
   npmMirror ---- https://skimdb.npmjs.com/registry/
   ```

   带 `*` 的为当前使用的源。

2. **查看当前使用的镜像源**：

   ```bash
   nrm current
   ```

   输出当前使用的源名称，如 `taobao`。

3. **切换镜像源**：
   例如，切换到淘宝镜像源：

   ```bash
   nrm use taobao
   ```

   切换成功后，所有 npm 操作将使用淘宝源（`https://registry.npmmirror.com/`）。

4. **添加自定义镜像源**：
   适合添加企业私有源，例如：

   ```bash
   nrm add company http://npm.company.com/
   ```

   其中 `company` 是自定义源名称，`http://npm.company.com/` 是源地址。可选添加主页：

   ```bash
   nrm add company http://npm.company.com/ http://npm.company.com/home
   ```

5. **删除自定义镜像源**：

   ```bash
   nrm del company
   ```

   只能删除自定义源，内置源无法删除。

6. **测试镜像源响应时间**：

   ```bash
   nrm test
   ```

   测试所有源的响应时间：

   ```
   npm ---------- 807ms
   taobao ------- 209ms
   cnpm --------- 374ms
   ```

   或测试单一源：

   ```bash
   nrm test taobao
   ```

7. **访问镜像源主页**：
   ```bash
   nrm home taobao
   ```
   使用默认浏览器打开指定源的主页（需在添加源时指定 homepage）。

## 使用场景

- **个人开发**：在国内使用淘宝镜像（`https://registry.npmmirror.com/`）加速依赖安装。
- **企业开发**：切换到公司私有源以安装内部包。
- **调试问题**：当某个源不可用或包版本不全时，快速切换到其他源。
- **性能优化**：通过 `NRM test` 选择响应速度最快的镜像源。

## 注意事项

- **兼容性**：nrm 配置的 registry 对 npm、yarn、pnpm 均生效。但 yarn 2.x 及以上版本需单独设置：
  ```bash
  yarn config set registry https://registry.npmmirror.com/
  ```
- **源稳定性**：选择维护良好、更新及时的镜像源（如淘宝镜像），以确保包的完整性和最新性。
- **安全性**：确保使用的镜像源支持安全的数据传输和包完整性验证。

## 进阶技巧

- **自动切换**：在项目根目录创建 `.npmrc` 文件，配置默认镜像源：
  ```
  registry=https://registry.npmmirror.com/
  ```
  这样项目打开时会自动使用指定源。
- **发布私有包**：
  ```bash
  nrm publish
  ```
  若当前源为自定义源，则发布到该源；否则执行 `npm publish`。
