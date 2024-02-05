# Vite 打包构建优化

## 抽离 node_modules 文件

`output.manualChunks` 可以将 node_modules 中的文件单独抽离出来，单独打包成一个文件，这样可以减少打包的体积，加快打包速度。

因为 node_modules 中的依赖并不是常常会变的，所以可以将其单独抽离出来，利用浏览器的缓存机制，当依赖没有发生变化时，就不会重新下载。

```ts
build: {
  rollupOptions: {
    output: {
      manualChunks: (id) => {
        if (id.includes('node_modules')) {
          return 'vendor';
        }
      };
    }
  }
}
```

## CDN 加载模块资源

项目中可能会出现一些第三方的模块，比如 `lodash`、`moment` 等，这些模块可能会比较大，如果每次都打包到项目中，会导致打包的体积变大，加载的时间变长。

可以通过 `vite.config.ts` 中的 `build.rollupOptions.external` 配置，将这些模块通过 CDN 的方式加载，这样可以减少打包的体积，加快打包速度。

在 Vite 有一款插件可以自动将模块转换成 CDN 的方式加载，这款插件就是 `vite-plugin-cdn-import`。

```ts
import viteCDNPlugin from 'vite-plugin-cdn-import';

plugins: [
  viteCDNPlugin({
    modules: [
      {
        name: 'xlsx',
        // 会替换打包时全局变量引入的变量名（全局变量名）
        var: 'XLSX',
        // 会将 script 脚本帮我们插入的head中
        // 注意var的变量名要和脚本文件的导出的变量名一致（全局变量名）
        path: 'https://cdn.sheetjs.com/xlsx-0.19.3/package/dist/xlsx.full.min.js',
      },
    ],
  }),
];
```

## 清除 `console` 日志输出

在开发过程中，我们可能会在代码中使用 `console.log` 来输出一些调试信息。但是在项目后上线后，我们并不应该将这些调试信息暴露在在控制台上。所以我们需要在打包构建时移除这些 `console` 的代码。

```ts
import clearConsole from 'vite-plugin-clear-console';

plugins: [
  {
    ...clearConsole(),
    apply: 'build', // build environment
  },
];
```
