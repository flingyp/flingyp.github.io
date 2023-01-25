# Babel 指南

Babel 是一个 **JavaScript Compiler**，主要用于在当前和旧的浏览器或环境中。将 ES6 代码转换为 JS 向后兼容版本的代码

## Babel 相关特性

1. Babel 可以转换 JSX 语法
2. 可插件化
3. 可调试（Source Map）
4. 可压缩

## 入门体验

初始化一个空项目，安装以下包 `pnpm add @babel/core @babel/cli @babel/preset-env -D`

编写配置文件 `babel.config.js`

```js
const presets = [
  [
    "@babel/preset-env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
      useBuiltIns: "usage",
      corejs: "3.6.4",
    },
  ],
];

module.exports = { presets };
```

之后运行命令 `./node_modules/.bin/babel src --out-dir lib`。会将 `src` 目录下的代码编译到 `lib` 目录

## 相关介绍

- `@babel/core`：Babel 的相关核心功能
- `@babel/cli`：Babel 提供的在终端使用 Babel 的工具
- `@babel/preset-env`：Babel 提供的预先配置

### Plugins & Presets

所有的转换规则都会以插件 Plugin 的形式体现出来。我们也可以编写自己的插件，来应用想要的转换规则

例如： `@babel/plugin-transform-arrow-functions` 此插件用于将所有的箭头函数都转换为 ES5 兼容的函数表达式

- `./node_modules/.bin/babel src --out-dir lib --plugins=@babel/plugin-transform-arrow-functions`

现在代码中的所有箭头函数都将被转换为 ES5 兼容的函数表达式：

```js
const fn = () => 1;

// 转为

var fn = function fn() {
  return 1;
};
```

如果代码中还有其他 ES5+功能也需要转换，我们可以使用一个 **Preset**，其中包含着一组预先预定好的插件，而不是逐一添加我们想要的插件

- `./node_modules/.bin/babel src --out-dir lib --presets=@babel/env`

没有任何配置，这个 Preset 包括支持现代 JavaScript（ES2015，ES2016 等）的所有插件。

## Babel 配置

JavaScript 的配置文件

```js
const presets = [ ... ];
const plugins = [ ... ];

module.exports = { presets, plugins };
```
