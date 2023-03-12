# Nuxt3

## 三种渲染形式

### 服务端渲染 Server Render

服务器接受客户端请求后，进行**解析渲染**，将最终的 HTML 模板返回给客户端

特点：

- 传统服务的渲染，流量大，服务器压力大
- 客户端直接渲染，反应快，显示快

### 客户端渲染 Client Render (MVVM)

客户端向服务器请求页面文件，服务器返回一个单页面 `index.html` 后，通过引入主要的 JS 文件，通过`Ajax`技术向服务器请求数据。而页面渲染的工作则是交给客户端自己去解析 JS 来渲染生成

特点：

- 服务器压力小
- 主 JS 文件如果文件大，浏览器解析需要时间，所以会导致有一段白屏时间
- 不利于 SEO

### 同构渲染 Server Side Render (SSR)

客户端第一次请求服务器后，服务器进行首次渲染，然后返回给客户端（解决白屏）

之后客户端在页面上的操作，通过 Ajax 拿数据到服务器则是通过浏览器解析、渲染

## 配置

`nuxt.config.ts` 文件位于 Nuxt 项目的根目录下

- [配置参考](https://nuxt.com.cn/docs/api/configuration/nuxt-config)

### 环境变量和私有令牌

```ts
export default defineNuxtConfig({
  // 默认情况下runtimeConfig中的配置只在服务器可访问
  runtimeConfig: {
    apiSecret: "123",
    // public 属性下所定义的对象也可以在客户端使用
    public: {
      apiBase: "/api",
    },
  },
});
```

这些环境变量可以通过 `useRuntimeConfig` 钩子函数访问到

注意：

1. 在使用 useRuntimeConfig 钩子后，服务端我们是可以访问到 `apiSecret` 这个属性的
2. 之后返回到客户端，Nuxt 是只会给我们暴露 `public`给客户端

### App 配置

`app.config.ts` 位于项目根目录，用于暴露公共变量，可以在构建时确定。与 runtimeConfig 选项相反，这些变量不能用环境变量来覆盖。

## 视图

默认情况下，Nuxt 将 `App.vue` 作为入口，并为应用程序的每个路由呈现其内容。

1. **页面**：页面表示用于每个特定路由模式的视图。`pages/` 目录中的每个文件都表示显示其内容的不同路由。这就是我们所说的**约定式路由**

2. **组件**：在 Nuxt 中，您可以在 `components/` 目录中创建组件，它们将在整个应用程序中自动可用，而无需显式地导入它们。

3. **布局**：围绕包含多个页面的公共用户界面的页面的包装器，例如页眉和页脚显示。布局是使用`<slot />`组件显示页面内容的 Vue 文件。默认情况下使用`layouts/default.vue`文件。自定义布局可以设置为页面元数据的一部分。

## 静态资源 Assets

- `public/` 目录内容原样提供给服务器根目录。

- `assets/` 目录按惯例包含想要给构建工具(Vite 或 Webpack)处理的每个资源文件。

## 路由

Nuxt 的一个核心特性是文件系统路由器。`pages/` 目录中的每个 Vue 文件都会创建一个相应的 URL(或路由)来显示文件的内容。通过对每个页面使用动态导入，Nuxt 利用代码拆分为请求的路由提供最少数量的 JavaScript。

### Navigation

页面之间通过 `<NuxtLink></NuxtLink>` 进行页面跳转

### Route Parameters

通过 `useRoute` 来访问当前路由细节

### Route Middleware

路由中间件有三种：

1. 匿名中间件：直接在使用它们的页面中定义。

2. 命名路由中间件，放置在 `middleware/` 目录中，在页面上使用时会通过异步导入自动加载

3. 全局路由中间件，放置在 `middleware/` 目录中(带有.global 后缀)，并将在每次路由更改时自动运行。

### Route Validation

Nuxt 通过 definePageMeta 中的`validate` 属性在你想要验证的每个页面中提供路由验证。

## SEO 和 Meta

### App Head

在 `nuxt.config.ts` 中提供了 `app.head` 属性。允许为整个应用程序定制 Head

```ts
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
      title: "Nuxt App",
      meta: [{ name: "description", content: "App site description" }],
    },
  },
});
```

### `useHead`

`useHead` 钩子函数允许您以编程和反应式的方式管理 Head 标签

```vue
<script setup lang="ts">
useHead({
  title: "Nuxt App",
  meta: [{ name: "description", content: "App site description" }],
});
</script>
```

## 过渡

### 页面过渡

首先需要开启页面过渡，并应用到所有的页面

```ts
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
});
```

要开始添加页面之间的过渡，添加以下 CSS 到 `app.vue` 文件中

```vue
<template>
  <NuxtPage />
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
```

如果要给页面单独设置不同的过渡效果，在页面的 `pageTransition` 中设置动画的 `name` 属性

```vue
<script setup lang="ts">
definePageMeta({
  pageTransition: {
    name: "rotate",
  },
});
</script>
```

### 布局过渡

也可以启用布局过渡，为所有的 Layouts 应用启用自动过渡

```ts
export default defineNuxtConfig({
  app: {
    layoutTransition: { name: "layout", mode: "out-in" },
  },
});
```

如果要给布局单独设置不同的过渡效果，在页面的 `layoutTransition` 中设置动画的 `name` 属性

```vue
<script setup lang="ts">
definePageMeta({
  layout: "orange",
  layoutTransition: {
    name: "slide-in",
  },
});
</script>
```

### 全局设置

```ts
export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: 'fade',
      mode: 'out-in' // default
    },
    layoutTransition: {
      name: 'slide',
      mode: 'out-in' // default
    }
  }
})
```