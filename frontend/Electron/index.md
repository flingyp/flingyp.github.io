# Electron

Electron 的运行流程结合了主进程（Main Process）和渲染进程（Renderer Process）的协作

## 启动应用​

- 入口文件​​：通过 `package.json` 的 `main` 字段指定主进程的入口文件
- ​主进程启动​​：Electron 执行入口文件，创建主进程（运行 Node.js 环境），负责管理应用生命周期、窗口和原生交互

## 主进程创建窗口​

- 创建 BrowserWindow​​：主进程调用 `new BrowserWindow()` 创建应用窗口
  - 配置选项：设置窗口大小、是否集成 Node.js、预加载脚本等
- ​加载页面​​：窗口通过 `loadFile()`或 `loadURL()` 加载本地 HTML 文件或远程 URL

## 渲染进程运行​

- 独立进程​​：每个 BrowserWindow 或 `<webview>` 标签会启动一个渲染进程，负责显示网页内容（运行在 Chromium 中）
- ​​限制与能力​​：
  - 默认情况下，渲染进程无法直接访问 Node.js API（除非设置 nodeIntegration: true，但存在安全风险）
  - 通过预加载脚本（Preload Script）安全地暴露有限的 Node.js 功能到渲染进程

## 进程间通信（IPC）​​

- ​​主进程 ↔ 渲染进程​​：
  - ​ipcMain​​（主进程）和 ​​ipcRenderer​​（渲染进程）通过事件机制通信
  - 例如：渲染进程发送事件请求读取文件，主进程处理并返回结果
- 上下文隔离​​：默认启用，防止全局变量污染，需通过 `contextBridge` 在预加载脚本中安全暴露 API

### 渲染进程 → 主进程（单向）

- 渲染进程通过 `ipcRenderer.send(channel, args)` 发送消息
- 主进程通过 `ipcMain.on(channel, callback)` 监听并处理消息

```js
// 渲染进程
const { ipcRenderer } = require('electron');
ipcRenderer.send('message', 'Hello from renderer');

// 主进程
const { ipcMain } = require('electron');
ipcMain.on('message', (event, arg) => {
  console.log(arg); // 输出: "Hello from renderer"
});
```

### 主进程 → 渲染进程（单向）

- 主进程通过 `webContents.send(channel, args)`向指定窗口发送消息。
- 渲染进程通过 `ipcRenderer.on(channel, callback)` 监听消息

```js
// 主进程
win.webContents.send('reply', 'Hello from main');

// 渲染进程
ipcRenderer.on('reply', (event, arg) => {
  console.log(arg); // 输出: "Hello from main"
});
```

### 主进程 ↔ 渲染进程（双向）

- 渲染进程使用 `ipcRenderer.invoke(channel, args)` 发起请求。
- 主进程通过 `ipcMain.handle(channel, handler)` 处理并返回结果

```js
// 渲染进程
const result = await ipcRenderer.invoke('get-data');

// 主进程
ipcMain.handle('get-data', () => 'Data from main');
```

## 应用生命周期管理​

- 主进程控制​​：
  - 监听 app 模块的事件（如 ready、window-all-closed、before-quit）
  - 根据平台（macOS 与其他系统）处理窗口关闭时的应用行为

## 资源加载与安全​​

- 协议处理​​：可自定义协议（如 app://）替代 file://，增强安全性
- ​沙箱化​​：可选启用沙箱模式限制渲染进程的权限

## 开发与调试​​

- 开发工具​​：
  - 主进程：通过 app.whenReady() 确保初始化完成后打开窗口
  - 渲染进程：调用 webContents.openDevTools() 调试页面
- 热重载​​：结合工具（如 electron-reloader）实现代码变更时自动刷新

## 打包与分发​​

- ​打包工具​​：使用 electron-builder 或 electron-packager 生成可执行文件（如 .exe、.dmg、.deb）
- 优化​​：压缩资源、移除开发依赖、配置签名（发布需要）
