# Electron 核心流程与最佳实践

## 进程架构

### 主进程（Main Process）

- 负责管理应用生命周期
- 创建和管理应用窗口
- 处理系统级事件
- 访问 Node.js API
- 管理应用菜单、托盘等

### 渲染进程（Renderer Process）

- 负责渲染用户界面
- 运行在 Chromium 环境中
- 默认情况下无法直接访问 Node.js API
- 通过预加载脚本和 contextBridge 安全地与主进程通信

## 进程间通信（IPC）

### 1. 安全通信模式

#### 预加载脚本设置

```javascript
// preload.js
const { contextBridge, ipcRenderer } = require('electron');

// 安全地暴露 API 到渲染进程
contextBridge.exposeInMainWorld('electronAPI', {
  // 发送消息到主进程
  send: (channel, data) => {
    ipcRenderer.send(channel, data);
  },
  // 接收来自主进程的消息
  receive: (channel, callback) => {
    ipcRenderer.on(channel, (event, ...args) => callback(...args));
  },
  // 发送消息并等待响应
  invoke: (channel, data) => {
    return ipcRenderer.invoke(channel, data);
  },
  // 移除事件监听器
  removeListener: (channel, callback) => {
    ipcRenderer.removeListener(channel, callback);
  },
});
```

#### 渲染进程 → 主进程（单向）

```javascript
// 渲染进程
window.electronAPI.send('event-name', data);

// 主进程
const { ipcMain } = require('electron');

ipcMain.on('event-name', (event, data) => {
  // 处理数据
});
```

#### 主进程 → 渲染进程（单向）

```javascript
// 主进程
mainWindow.webContents.send('event-name', data);

// 渲染进程
window.electronAPI.receive('event-name', (data) => {
  // 处理数据
});
```

#### 双向通信（请求-响应模式）

```javascript
// 渲染进程
const response = await window.electronAPI.invoke('event-name', data);

// 主进程
const { ipcMain } = require('electron');

ipcMain.handle('event-name', async (event, data) => {
  // 处理数据并返回结果
  return result;
});
```

### 2. TypeScript 支持

```typescript
// types/electron.d.ts
interface ElectronAPI {
  send: (channel: string, data: any) => void;
  receive: (channel: string, callback: (...args: any[]) => void) => void;
  invoke: (channel: string, data: any) => Promise<any>;
  removeListener: (channel: string, callback: (...args: any[]) => void) => void;
}

declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}
```

## 窗口配置

### 主进程窗口创建

```javascript
const { BrowserWindow } = require('electron');
const path = require('path');

const win = new BrowserWindow({
  width: 800,
  height: 600,
  webPreferences: {
    nodeIntegration: false, // 禁用 Node.js 集成
    contextIsolation: true, // 启用上下文隔离
    preload: path.join(__dirname, 'preload.js'), // 预加载脚本
    sandbox: true, // 启用沙箱
  },
});
```

## 安全最佳实践

1. **始终启用上下文隔离**

   - 设置 `contextIsolation: true`
   - 使用 `contextBridge` 暴露 API
   - 避免直接暴露 `ipcRenderer`

2. **禁用 Node.js 集成**

   - 设置 `nodeIntegration: false`
   - 通过预加载脚本安全地暴露需要的功能

3. **使用 CSP**

   - 设置适当的 Content Security Policy
   - 限制资源加载来源

4. **验证 IPC 消息**

   - 验证所有 IPC 消息的来源和内容
   - 使用类型检查确保数据格式正确

5. **清理事件监听器**
   - 在组件卸载时移除事件监听器
   - 使用 `removeListener` 防止内存泄漏

## 性能优化

1. **进程管理**

   - 及时关闭不需要的窗口
   - 使用 `backgroundThrottling` 控制后台窗口行为

2. **资源加载**

   - 使用 `protocol` 模块自定义协议
   - 实现资源缓存策略

3. **内存管理**
   - 及时清理事件监听器
   - 使用 `webContents.clearCache()` 清理缓存

## 调试技巧

1. **主进程调试**

```javascript
// 启用主进程调试
app.commandLine.appendSwitch('remote-debugging-port', '9222');
```

2. **渲染进程调试**

```javascript
// 打开开发者工具
mainWindow.webContents.openDevTools();
```

3. **日志管理**

```javascript
// 使用 electron-log
const log = require('electron-log');
log.info('应用启动');
log.error('发生错误', error);
```
