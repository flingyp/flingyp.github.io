# Babel 配置参考

## 预设

### 官方预设

- `@babel/preset-env` 用于编译 ES2015+ 语法
- `@babel/preset-typescript` 用于 TypeScript
- `@babel/preset-react` 用于 React
- `@babel/preset-flow` 用于 Flow

### 使用预设

在 Babel 配置中，如果预设在 npm 上，你可以传入预设的名称，Babel 将检查它是否已经安装在 node_modules 中。 这将添加到 预设 配置选项中，该选项接受一个数组。

```json
{
  "presets": ["babel-preset-myPreset", "@babel/preset-env"]
}
```

除此以外，还可以指定预设的相对或绝对路径。

```json
{
  "presets": ["./myProject/myPreset"]
}
```

### 创建预设

要制作你自己的预设，需要导出一个配置对象，需要返回一个插件数组

预设可以包含其它预设和带有选项的插件。

```js
module.exports = function () {
  return {
    plugins: ["Plugin-A", "Plugin-B", "Plugin-C"],
  };
};
```

### 预设排序

```js
plugins: ["Plugin-A", "Plugin-B", "Plugin-C"],
```

排序是倒序的形式，例如上方将按 `Plugin-C`、`Plugin-B` 然后再 `Plugin-A` 运行

## 插件

通过在 配置文件 中应用插或预设，可以启用 Babel 的代码转换。

### 使用一个插件

如果插件在 npm 中，你可以传入插件的名字，Babel 会检查它是否安装在 node_modules 中。这将被添加到 plugins 配置项，该选项接受一个数组。

```json
{
  "plugins": ["babel-plugin-myPlugin", "@babel/plugin-transform-runtime"]
}
```

也同样的可以指定插件的相对/绝对路径

```json
{
  "plugins": ["./node_modules/XXX/babel-plugin-xxPlugin"]
}
```

### 插件排序

- 插件在预设之前运行
- 插件排序是从第一个到最后一个

### 插件开发

要开发自己的插件，需要导出一个函数，函数返回一个插件对象

- [Github](https://github.com/jamiebuilds/babel-handbook) 此仓库将会指导如何创建自己的插件

一个逆转名称的简单插件示例

```js
export default function () {
  return {
    visitor: {
      Identifier(path) {
        const name = path.node.name;
        // 逆转名称：JavaScript -> tpircSavaJ
        path.node.name = name.split("").reverse().join("");
      },
    },
  };
}
```
