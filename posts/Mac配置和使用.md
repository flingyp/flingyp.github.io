# Mac 配置和使用总结

## Mac Homebrew 安装问题

Homebrew 是 Mac 上的包管理器，可以用来安装各种软件。

但是有时候在安装过程中会出现网络问题，导致安装失败。我们可以更换镜像源来解决这个问题。

**国内安装加速**

- `/bin/bash -c "$(curl -fsSL https://cdn.jsdelivr.net/gh/ineo6/homebrew-install/install.sh)"`

**国内卸载加速**

- `/bin/bash -c "$(curl -fsSL https://cdn.jsdelivr.net/gh/ineo6/homebrew-install/uninstall.sh)"`

## 使用 `pip` 安装第三方包问题

- [参考文章](https://cn.linux-terminal.com/?p=7961)

使用参考文章中的第二种方式，将规则写入配置文件后强制安装解决问题了

## Mac 快捷键

- `Command + R` 浏览器刷新
- `Command + W` 关闭当前窗口
- `Command + Q` 退出程序
- `Command + Tab` 切换应用
- `Command + Shift + 3` 截屏
- `Command + Shift + 4` 截屏
- `Command + Option + Esc` 强制退出程序
- `Command + Option + V` 粘贴并替换

## VSCode 快捷键

- `Command + Shift + P` + `F1` 打开命令面板
- `Control + ~` 打开终端
- `Command + W` 关闭当前窗口
- `Command + P` 快速打开文件
- `Command + Shift + N` 打开新窗口
- `Command + Shift + W` 关闭窗口
- `Command + Shift + F` 全局搜索
- `Command + Shift + G` 全局搜索
- `Command + Shift + H` 全局替换
