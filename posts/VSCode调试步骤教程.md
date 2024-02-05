# 🦿 VSCode调试步骤教程

进入VSCode的Debug面板，点击 create a launch file按钮，然后选择要调试的环境。一般调试页面选择的是 Web App(Chrome)

之后会创建一个 launch.json 基础的配置文件

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Chrome against localhost",
      "url": "http://localhost:8080",
      "webRoot": "${workspaceFolder}"
    }
  ]
}
```

- `type` 表示Debug时运行的环境
- `request` 有两个取值。`launch` 会以调试模式启动 Chrome 和 Node，并且和VSCode调试器建立连接。`attach` 用于与已经处于调试模式的Chrome 和 Node建立连接。一般准备调试的时候用第一种就可以了。
- `url` 需要访问的地址，`launch` 模式下才生效
- `webRoot` 设置项目代表所在的根目录，`${workspaceFolder}` 是VSCode的内置变量。表示当前文件夹下的路径

之后点击 `Start Debugging` 按钮后，就会默认启动一个浏览器

![](https://cdn.nlark.com/yuque/0/2023/png/35988724/1691482007319-ba2ef437-ecc9-4961-af75-6a9452d57058.png)

之后在需要调试的页面打对应的断点

调试模式下有一些操作按钮

![](https://cdn.nlark.com/yuque/0/2023/png/35988724/1691482112036-fb924e89-5718-4f9a-9242-0e901c2e2438.png)

1. 第一个 `Continue`，快捷键F5，会走到下一个断点，没有断点就恢复运行
2. 第二个 `Step Over`，快捷键F10，每一次执行一行代码，遇到函数时不会进行函数内容
3. 第三个 `Step Into`，快捷键F11，每一次执行一行代码，遇到函数时会进入函数内部
4. 第四个 `Step Out`，快捷键Shift+F11，跳出当前函数
5. 第五个重启调试启动器, 快捷键 Ctrl+Shift+F5
6. 第六个暂停调试启动器，快捷键 Shift+F5
