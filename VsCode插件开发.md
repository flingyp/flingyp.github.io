---
outline: deep
---

# VsCode 插件开发

## Get Started

首先确保本地安装了 `NodeJs` 和 `Git`，然后再去安装 `Yeoman` 和 `VS Code Extension Generator`

- `pnpm install -g yo generator-code`

使用 `Yeoman` 脚手架快速初始化一个VsCode插件

- 执行 `yo code` 命令，填写选择了相关信息后选择在VsCode打开
- 按下 `F5`，会帮助我们启动一个新的扩展开发宿主
- 测试：通过快捷键 `Ctrl + Shift + P`或 `F1` 打开命令板 输入 **Hello World**，底部就弹出了一个提示

Hello World 插件包含了三个部分

- 注册激活插件，`package.json` 文件中 `activationEvents` 字段添加 `"onCommand:plugin-demo1.helloWorld"`。所以用户可以在输入Hello World命令后激活插件。
- 使用contributes.commands 发布内容配置，绑定一个命令ID extension.helloWorld，然后 Hello World命令就可以在命令面板中使用了
- 使用commands.registerCommand VS Code API 将一个函数绑定到你注册的命令IDextension.helloWorld上


理解下面三个关键概念你才能作出一个基本的插件：

- 激活事件: 插件激活的时机。
- 发布内容配置: VS Code扩展了 package.json 插件清单的字段以便于开发插件。
- VS Code API: 你的插件代码中需要调用的一系列JavaScript API。

注：

- 关于插件的 `package.json` 的特殊字段的 [参考文档](https://code.visualstudio.com/api/references/extension-manifest)
- [VsCode API](https://code.visualstudio.com/api/references/vscode-api)

## Common Capabilities

通用功能是你的扩展的重要构建块。几乎所有的扩展都使用这些功能中的一些。

- [参考文档](https://code.visualstudio.com/api/extension-capabilities/common-capabilities)

### Commands

- [参考文档](https://code.visualstudio.com/api/extension-guides/command)

#### Using Commands

- `vscode.commands.executeCommand` API 程序的方式去执行命令
  - 第一个参数就是执行哪个命令的Command ID



#### Creating new commands

- `vscode.commands.registerCommand` 注册命令
  - 第一个参数绑定 Command ID
  - 第二个参数就是执行命令的处理函数

#### Creating a user facing command

需要在 `package.json` 文件中定义一个字段 `contributon` 可将需要的暴露出去的命令提供给用户

```json
"contributes": {
  "commands": [
    {
      "command": "Command Id", // Command ID
      "title": "Hello World" // 用户调起命令输入的内容
    }
  ]
}
```

同时我们还需要定义一个字段，`activationEvents` 代表 VSCode 扩展的激活事件

```json
"activationEvents": [
  "Command ID1",
	"Command ID2"
]
```

#### Controlling when a command shows up in the Command Palette

控制命令在什么时候出现在命令板中

```json
{
  "contributes": {
    "menus": {
      "commandPalette": [
        {
          "command": "Command ID",
          "when": "editorLangId == markdown" // 是Mrkdown文件才可以使用此命令
        }
      ]
    }
  }
}
```























