# Uniapp 集成 TailwindCSS

目前只尝试在 HBuilderX 中集成过 TailwindCSS。很多样式类在小程序中是不支持的，但是支持的样式类在小程序、H5 和 APP 也够用。

1. 安装 `tailwindcss`

`pnpm install tailwindcss -D`

2. 在根目录创建 `tailwind-input.css`

```css
/* #ifndef MP-WEIXIN */
/* 如果是小程序的话，这一行注释掉，因为tailwind base模块提供的一些样式选择器是基于*，这在小程序中会报错 */
@tailwind base;
/* #endif */

@tailwind components;
@tailwind utilities;
```

3. 在根目录创建配置文件 `tailwind.config.js`

```ts
/** @type {import('tailwindcss').Config} */
module.exports = {
  separator: '__', // 如果是小程序项目需要设置这一项，将 : 选择器替换成 __，之后 hover:bg-red-500 将改为 hover__bg-red-500
  corePlugins: {
    // 预设样式
    preflight: false, // 一般uniapp都有预设样式，所以不需要tailwindcss的预设

    // 以下功能小程序不支持
    space: false, // > 子节点选择器
    divideWidth: false,
    divideColor: false,
    divideStyle: false,
    divideOpacity: false,
  },

  // 指定要处理的文件
  content: [
    './pages/*.{vue,js}',
    './pages/**/*.{vue,js}',
    './pagesAuth/**/*.{vue,js}',
    './pagesHome/**/*.{vue,js}',
    './pagesMine/**/*.{vue,js}',
    './pagesPublish/**/*.{vue,js}',
    './pagesEncyclopedia/**/*.{vue,js}',
    './pagesOther/**/*.{vue,js}',
    './components/**/*.vue',
    './main.js',
    './App.vue',
    './index.html',
  ],
  theme: {
    // 字号，使用 App.vue 中的 --x-font-size 样式变量配置
    fontSize() {
      let result = {};
      // 允许的数值大一些也无所谓，最后打包tailwindcss会摇树优化，未使用的样式并不会打包
      for (let i = 1; i <= 50; i++) {
        result[i] = `${i}rpx`;
      }
      return result;
    },
    extend: {
      // 间距，tailwindcss中默认间距是rem单位，可以统一设置为uniapp的rpx单位。
      // 类似的设置根据项目需求自己调整一下就好了，没必要去安装别人的预设，其实主要是小程序不兼容的css比较多，H5和App基本都直接兼容tailwindcss默认的预设
      spacing(config) {
        let result = { 0: '0' };
        // 允许的数值大一些也无所谓，最后打包tailwindcss会摇树优化，未使用的样式并不会打包
        for (let i = 1; i <= 1000; i++) {
          result[i] = `${i}rpx`;
        }
        return result;
      },
    },
    colors: {
      white: '#fff',
      black: '#000',
    },
    borderRadius: {
      4: '4rpx',
      6: '6rpx',
      8: '8rpx',
      10: '10rpx',
      12: '12rpx',
      16: '16rpx',
      20: '20rpx',
      24: '24rpx',
      28: '28rpx',
      32: '32rpx',
      36: '36rpx',
      40: '40rpx',
      42: '42rpx',
      44: '44rpx',
      46: '46rpx',
      48: '48rpx',
      50: '50rpx',
      full: '50%',
    },
    backgroundColor: {
      white: '#fff',
      black: '#000',
    },
  },
  plugins: [],
};
```

4. 配置脚本文件，启动应用后先编译 TailwindCSS

```ts
{
  "scripts": {
    "tailwind-dev": "tailwindcss -i ./tailwind-input.css -o ./styles/tailwind.css --watch",
    "tailwind-build": "tailwindcss -i ./tailwind-input.css -o ./styles/tailwind.css"
  },
}
```

5. 启动应用后先编译 TailwindCSS，在根目录新建文件 `vite.config.js`

```ts
import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';

/** ==== 处理 tailwind cli 的自动启动和打包 ==== */
const child_process = require('child_process');
let tailwindMode = process.env.NODE_ENV;

// 主进程输出
console.log(`[tailwindcss] 开始${tailwindMode == 'production' ? '生产环境打包' : '开发模式监听'}`);
child_process.exec(
  // 这里指令对应 package.json 中的 npm scripts
  tailwindMode == 'production' ? 'npm run tailwind-build' : 'npm run tailwind-dev',
  {
    cwd: __dirname, // 切换目录到当前项目，必须
  },
  (error, stdout, stderr) => {
    // tailwind --watch 是一个持久进程，不会立即执行回调
    // process.stdout.write('tailwind success')
    if (error) {
      console.error('[tailwindcss] 异常，请检查');
      console.error(error);
      console.error(stdout);
      console.error(stderr);
    }
    if (tailwindMode == 'production') {
      console.log('[tailwindcss] 生产环境打包完成');
    }
  },
);

export default defineConfig({
  plugins: [uni()],
});
```

6. 在 `App.vue` 引入编译后的样式

```vue
<style lang="scss">
@import '@/styles/tailwind.css';
</style>
```

- [参考文章](https://ask.dcloud.net.cn/article/40098)
