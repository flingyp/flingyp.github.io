# Vitepress 集成使用 TailwindCSS

可以参考第三方 [开源仓库](https://github.com/ky-is/vitepress-starter-tailwind)

## 第一步：在 `package.json` 添加依赖项

```json
{
  "dependencies": {
    "autoprefixer": "^10.4.13",
    "postcss": "^8.4.20",
    "tailwindcss": "^3.2.4"
  },
  "postcss": {
    "plugins": {
      "tailwindcss": {},
      "autoprefixer": {}
    }
  }
}
```

## 第二步：在根目录下创建配置文件 `tailwind.config.js`

```js
module.exports = {
  darkMode: 'class',
  content: [
    './.vitepress/**/*.js',
    './.vitepress/**/*.vue',
    './.vitepress/**/*.ts',
  ],
};
```

## 第三步：创建文件 `tailwind.postcss`

在 `.vitepress/theme` 下创建 `tailwind.postcss` 文件，然后添加以下内容

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

在 `.vitepress/theme/index.js/ts` 文件中引入

```js
import './tailwind.postcss';
```
