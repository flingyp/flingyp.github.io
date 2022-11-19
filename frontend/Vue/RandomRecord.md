## 1. Vue3 组件之间的通信方式有哪些

- `Props、Emits`：用于父子组件之间数据的传递
- `expose、ref`：在 Vue3 中我们需要通过 `ref` 去获取组件的实例，并且 Vue 并不会将所有组件实例属性和方法暴露出来。我们需要通过 `defineExpose` 将实例的属性和方法暴露出来。在父组件我们可以通过获取组件实例来向子组件传递数据。
- `透传 Attributes`：指的是在子组件中，没使用 prop 或 emits 定义的 attribute，可以通过 `$attrs` 来访问。[文档介绍](https://cn.vuejs.org/guide/components/attrs.html)
- `v-model` 语法糖
- `Slots` 插槽
- `Provide/Inject`：适合跨组件传递
- `Vuex、Pinia`：跨组件通信工具

## 2. `v-if` 和 `v-for` 哪个优先级更高

:::tip 优先级比较

在 Vue2 中 `v-for` 会比 `v-if` 的优先级高

在 Vue3 中 `v-if` 会比 `v-for` 的优先级高

建议：在平时开发中永远不要将两个 API 放在同一个元素上。可以根据需求在外部包裹一层 `<template v-for/v-if></template>`

:::

## 3. `v-model` 双向绑定使用

:::tip `v-model`

`v-model` 是一个语法糖。默认情况下相当于 `:value` 和 `@update:value`，使用双向绑定可以减少繁琐事件，提高开发体验。

Vue3 甚至可以使用参数形式来绑定多个响应式数据。例如： `v-model:content`、`v-model:header`

:::

## 4. Vue3 中如何扩展一个组件

:::tip 扩展组件

Vue3 模式下最好通过 Composition API 来进行组件的扩展。首先开发者通过 `Props` 和 `Emits` 来与子组件进行通信，之后配合响应式模块可以很方便得多编写独立功能的钩子来提供响应式的数据。

当我们需要新增组件功能时，只需要在当前的组件基础上新增对应的钩子来完成功能的开发。

[官方关于组合式函数（composables 或 hooks）的介绍和用法](https://staging-cn.vuejs.org/guide/reusability/composables.html)

:::

## 5. `v-show` 和 `v-if` 的区别

控制手段：`v-show` 是通过给元素设置 CSS `display: none` 来控制元素的显示与否 而`v-if` 是通过一定的 JS 手段将整个 DOM 节点进行添加或删除

编译过程：`v-if` 切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件。`v-show` 只是简单一个基于 CSS 切换

编译条件：`v-if` 是真正的条件渲染，它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和挂载。只有渲染条件为假时，并不做操作，直到为真才渲染

总结：

1. 通过 `v-if` 来控制元素或子组件的显示和隐藏会经历实例创建、挂载和销毁等阶段。相对来说性能消耗较大，所以如果有频繁的控制元素的显示隐藏的需要，应当首选 `v-show`

2. `v-show` 由 false 变为 true 的时候不会触发组件的生命周期。`v-if` 由 false 变为 true 的时候，触发组件的 `beforeCreate`、`create`、`beforeMount`、`mounted` 钩子，由 true 变为 false 的时候触发组件的 `beforeDestory`、`destoryed` 方法

## 6. 谈谈对 Vue 数据响应式理解

:::tip

数据响应式：数据驱动视图的思想,**能够使数据变化可以被检测并且做出相应的响应机制**

MVVM 框架中都要解决一个核心的问题是**如何连接数据层和视图层**。通过**数据驱动视图**，数据变化，视图更新，要做到这点的就需要做到数据响应式处理

在 Vue2 中，采用的是 `Object.defineProperty()` 的方式对响应式数据进行拦截。但是使用此 API 有一些缺点：1. 新增或删除属性的不会被依赖收集也就不会有响应式的特性，需要使用 `Vue.set/delete` 等 API 才能生效。2. 对应 ES6 中的 Map、Set 这些数据结构不支持。

在 Vue3 中 采用的是 ES6 的 `Proxy`代理实现数据的响应式

:::

## 7. 虚拟 DOM 的理解

虚拟 DOM：就是 JavaScript 对象，它通过不同的属性去描述一个 DOM 节点的视图结构

虚拟 DOM 如何生成？

在 Vue 中我们会为组件编写模板 template，这个模板会被编译器 compiler 编译为渲染函数，在接下来的挂载时刻 mount 过程中会调用 render 渲染函数来返回 虚拟 DOM，在后续的 patch 过程中会进一步转换为真实 DOM

挂载过程结束后，Vue 会进入更新流程，如果发现有响应式数据发生变化，就会引起组件重新渲染，此时就会产生新的虚拟 DOM，和上一次的渲染结构 Diff 就可以得到变化的地方，从而转换为最小量的 DOM 操作，高效更新视图

## 8. 对 Diff 算法的理解

Vue 中的 `diff` 算法又称为 `patching` 算法。虚拟 DOM 想要转换为真实 DOM 就需要通过此方法进行转换

Vue 中 `diff` 执行的时刻是组件内响应式数据变更触发实例执行其更新函数时，更新函数会再次执行渲染函数获得最新虚拟 DOM，然后执行 `patch` 函数，并传入新旧两次虚拟 DOM，通过对比两者找到变化的地方，最后将其转换为真实的 DOM

Patch 过程是一个递归过程，遵循一个**同层比较，深度优先**策略

- 首先判断两个节点是否为相同同类节点，不同则删除重新创建
- 如果双方都是文本则更新文本内容
- 如果双方都是元素节点则递归更新子元素，同时更新元素属性
- 更新子节点又分为几种情况：
  - 新的子节点是文本，老的子节点是数组则清空，并设置文本
  - 新的子节点是文本，老的字节点是文本则直接更新文本
  - 新的子节点是数组，老的子节点是文本则清空文本，并创建子节点数组中的子元素
  - 新的节点是数组，老的子节点也是数组，那么比较两组子节点，更新细节

Vue3 在 diff 算法中相比增加了 更新类型标记 来优化算法。作用就是为了在发送变化的地方添加一个 `flag` 标记，下次发送变化的时候直接找该地方进行比较。

```vue
<!-- 对于单个有动态绑定的元素来说，我们可以在编译时推断出大量信息 -->
<template>
  <!-- 仅含 class 绑定 -->
  <div :class="{ active }"></div>

  <!-- 仅含 id 和 value 绑定 -->
  <input :id="id" :value="value" />

  <!-- 仅含文本子节点 -->
  <div>{{ dynamic }}</div>
</template>
```

就是在编译阶段，会为模板生成渲染函数时，会判断每个元素所需要的更新类型，并且打上标记。在更新阶段进行 Diff 的时候就会根据这些类型标记去做对应的更新，极大的优化递归的过程

```ts
createElementVNode(
  "div",
  {
    class: _normalizeClass({ active: _ctx.active }),
  },
  null,
  2 /* CLASS */
);
// 最后这个参数 2 就是一个更新类型标记 (patchFlag)
```

## 9. Vue2 `Object.defineProperty` 和 Vue3 `Proxy`有什么区别

`defineProperty` 是 ES5 新增的方法，是对一个对象新增或修改某个属性，然后返回该对象

`Proxy` 是 E56 新增的，是对对象的代理，并不是直接的去修改对象

:::tip
区别：在 Vue2 中 `defineProperty` 只能对定义好的数据进行数据监听，而新增属性或删除数据是不会被监听的，也就会失去响应式的特性。而 `Proxy` 是对整个对象的代理监听。
:::

## 10. 响应式数据发生改变之后 Vue 做了什么事情

:::tip
当响应式数据监听到数据的变化后，会触发对应组件的渲染方法，渲染前会调用 `beforeUpdate` 钩子函数，在渲染的过程中会 `patch` 重新获取变化后的虚拟 DOM 然后渲染到页面上，渲染后在去调用 `updated` 钩子函数。
:::

## 11. 谈谈 Vue 的生命周期吧

Vue 实例有一个完整的生命周期。从实例创建、初始化数据、编译模板、挂载 DOM、渲染、更新、又渲染、卸载等一系列过程，就是 Vue 的声明周期

- `beforeCreate`：组件实例创建之前调用，此时还无法访问到相关方法和数据
- `created`：组件实例创建之后调用。实例完成：数据观测、属性和方法的运算、 watch/event 事件回调。但是 DOM 还未挂载
- `beforeMount`：挂载之前调用，相关 render 函数首次被调用
- `mounted`：组件实例被挂载到 DOM 上之后调用
- `beforeUpdate`：响应式数据被更新前调用，发生在虚拟 DOM 重新渲染和打补丁
- `updated`：由于数据更新导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子
- `beforeDestroy`：组件实例销毁前调用
- `destroyed`：组件实例销毁之后调用

## 12. 说说 `nextTick` 的使用

:::tip

`nextTick()` 是等待下一次 DOM 更新刷新的工具方法

Vue 有一个异步更新策略，意思就是如果数据变化，Vue 不会立即更新 DOM，而是开启一个队列，把组件更新函数保存在队列中，在同一事件循环中发生的所有数据变更后会异步的批量更新。这一策略会导致我们对数据的修改不会及时的体现在 DOM 上，此时如果想要获取更新后的 DOM 状态，就需要使用 `nextTick`

:::

## 13. `watch` 和 `computed` 的区别

:::tip

computed：会返回一个只读的响应式的数据

watch：检测响应式数据的变化，执行回调

区别：

1. 计算属性可以从响应式数据派生出自己需要的响应式属性。监听器可以监测某个响应式数据的变化并且执行对应的副作用，可以执行一些异步操作等复杂逻辑

2. 两个的使用场景不同。计算属性一般用于对响应式数据进行加工处理得到的全新的响应式数据。监听器则是在数据发送变化后需要执行的操作

:::

## 14. Vue Router 中 hash 模式和 history 模式的区别

SPA 即**单页面应用程序**。只有一个 HTML 文件并且在**用户与应用程序进行交互时**动态的更新此页面的 Web 应用程序。浏览器一开始会加载必需的 HTML 、 CSS 和 JavaScript ，而所有的页面更新操作**都由 JavaScript 来控制**。

- SPA 的优点：用户体验好、页面内容的改变不需要我们去重新加载新的页面
- SPA 的缺点：不利于搜索引擎的抓取，首页加载时间会过长、页面渲染的速度会相对较慢

单页面应用程序时就提供了 Hash 和 History 两种模式

### Hash 模式

Hash 模式的前端路由的路径是用井号 # 拼接在真实 URL 后面的。当井号 # 后面的路径发生变化时，浏览器并不会重新发起请求，而是会触发 `onhashchange` 事件。

例如：https://vadmire.top/#/login

特点：

- 1. Hash 变化会出现页面跳转即浏览器的前进和后退。
- 2. Hash 改变的是 # 后面的路由不会刷新页面，所有的更新操作是由 JavaScript 来实现的，并不会向服务器发送 HTTP 请求去获取对应路径页面。
- 3. Hash 通过 `window.onhashchange` 的方式，来监听 Hash 的改变，借此实现无刷新跳转的功能

### History 模式

`History API` 是 HTML5 提供的新特性，允许开发者**直接更改前端路由**，即更新浏览器 URL 地址而不会**重新发起请求**。总结一句话：页面内容没变，地址栏的地址改变了

当我们使用 `History` 模式将前端项目部署上线后，在我们通过 `index.html` 去访问单页面应用某个路径下的内容，正常的路由跳转是没有问题的。**但是我们重新刷新页面的时候就会出现 404 的情况**

原因在于：重新刷新页面后浏览器会重新发送一次 HTTP 请求，去请求对应路径下的页面。但是服务器其实是没有这个页面的所以会报 404 的情况。这个时候我们就需要 **通过服务端来允许访问如何路径下的页面重定向到** `index.html` 上

### 总结

针对不同的应用场景我们可以选择不同模式

- 如果是 `B端` 系统更加推荐 Hash 模式，相对简单容易
- 如果是 `C端` 系统对外观有一定要求就可以考虑选择 `History` 模式但是需要 **服务端支持**

## 15. Key 的作用

Key 的作用是用于优化的 `patch` 性能的，更高效的更新虚拟 DOM

实际开发使用中在渲染一组列表是 key 是必须设置的，而且必须是唯一标识，应该避免使用数组索引作为 Key，这可能导致一些隐藏的 Bug

Vue 在使用相同标签元素过渡切换时，也会使用 Key 属性，其目的是为了让 Vue 可以区分它们，否则 Vue 只会替换其内部属性而不会触发过渡效果

## 16. Vue 首次实例创建和挂载发生了什么

`createApp()` 会创建一个 App 实例，内部通过 `const app = ensureRenderer().createApp(...args)` 来进行实例的创建。内部最终是执行了一个函数 `createAppApi()` 来创建实例的。
方法会返回一个函数就叫做 `createApp`。内部会创建一个对象，最终返回这个对象，而这个对象就是 App 实例。

整个 App 实例呢配置了很多平时开发常用的 API，例如：`app.use()`、`app.mixin()`、`app.component()`、`app.directive()`、`app.mount()`、`app.provide()`

创建完实例是，会提取内部写的 `mount` 方法，并且重写 `app.mount` 方法

```ts
// 重写这块的方法主要是进行的是实例挂载前的清理工作
app.mount = (containerOrSelector: Element | ShadowRoot | string): any => {
  // 获取#app DOM Element
  const container = normalizeContainer(containerOrSelector);
  // 如果没有就不会挂载 直接 return
  if (!container) return;

  // 在挂载之前清理掉 DOM根节点里面的内容
  container.innerHTML = "";
  // 这里执行的是 App实例原有的mount方法
  const proxy = mount(container, false, container instanceof SVGElement);
  if (container instanceof Element) {
    container.removeAttribute("v-cloak");
    container.setAttribute("data-v-app", "");
  }
  return proxy;
};
```

最后执行挂载方法，主要做了两件事。1. 通过 `createVNode()` 来创建虚拟 DOM 2. 调用 `render()` 渲染方法来渲染生成的虚拟 DOM 挂载到跟页面上

```ts
mount(
  rootContainer: HostElement,
  isHydrate?: boolean,
  isSVG?: boolean
): any {
  if (!isMounted) {
    // 创建虚拟DOM
    const vnode = createVNode(
      rootComponent as ConcreteComponent,
      rootProps
    )
    if (isHydrate && hydrate) {
      hydrate(vnode as VNode<Node, Element>, rootContainer as any)
    } else {
      // 调用渲染函数 runtime-core/src/renderer.ts 1227行
      render(vnode, rootContainer, isSVG)
    }
    // 执行完 render后表示挂载完成 修改 isMounted
    isMounted = true
    return getExposeProxy(vnode.component!) || vnode.component!.proxy
  }
},
```

总结：在实例创建阶段，Vue 会将一些全局 API 定义，在实例挂载阶段创建虚拟 DOM 最后调用渲染函数将虚拟 DOM 进行渲染

## 17. Vue 项目部署到服务器后刷新出现 404 的问题

前后端分离开发模式下，前端只需要将项目打包，将打包文件扔到目标服务器即可。Vue 是单页面应用，无论有多少页面构建物都只会产出一个 `index.html` 文件

### 如果路由是 `History` 模式

`History` 模式下就会出现页面刷新出现 404 问题

**原因**：在于当我们在地址栏输入 `www.xxx.com` 地址时，首先一定会访问到服务器的目标文件的 `index.html` 这时候是不会有 404 的问题。但是如果我们在访问或者重定向到 `www.xxx.com/xx` 页面时其实就会向服务器发送一个 HTTP 请求，去请求 `/xx` 页面的文件内容，这个时候自然服务器是没有这个路径的文件资源的。所以就会报 404 问题

### 如果路由是 `Hash` 模式

`Hash` 模块是用符号 # 表示的。 如 `www.xxx.com/#/xx`

它的特点在于 `Hash` 虽然出现在 URL 中，但不会被包括在 HTTP 请求中，对服务端完全没有影响，因此改变 `Hash` 不会重新加载页面。该模式下仅 `Hash` 符号之前的内容会被包含在请求中，如 `www.xxx.com/#/xx` 只有 `www.xxx.com` 会被包含在请求中

### 解决方案

本质单页面应用就只有一个页面，路由则是通过 JS 来执行视图切换的，`History` 模式下去请求其他不存在的页面自然会报 404 问题。

所以如果你的项目配置的是 `History` 模式下，所以进行以下的配置

解决方案：就是在服务器进行配置，将任意页面都重定向到 `index.html` 文件，把路由交给前端处理

以 Nginx 为例子，只需要修改它的配置文件。添加：`try_files $uri $uri/ /index.html;` 这么一条配置即可

```ts
server {
  listen  80;
  server_name  www.xxx.com;

  location / {
    index  /data/dist/index.html;
    try_files $uri $uri/ /index.html;
  }
}
```

配置完毕后，重启 Nginx： `nginx -s reload`

为了避免这种情况，你应该在 Vue 应用里面覆盖所有的路由情况，然后在给出一个 404 页面

```ts
const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "*", component: NotFoundComponent }, // 添加一条匹配404页面的路由
  ],
});
```

## 18. Vue 项目是如何解决跨域的呢

跨域的本质是**浏览器的同源策略**的一种安全手段，它是浏览器最核心也是最基本的安全功能

同源：就是指在同一个域下（协议相同、主机相同、端口相同）的情况下。非同源：则上面有一个不同都属于非同源，这个时候就会产生跨域

如何解决跨域有很多：`JSONP`、`CORS`、`Proxy`。实际开发中主要会采用 `CORS`、`Proxy` 这两种

### CORS

CORS （Cross-Origin Resource Sharing，跨域资源共享）是一个系统，它由一系列传输的 HTTP 头组成，这些 HTTP 头决定浏览器是否阻止前端 JavaScript 代码获取跨域请求的响应

CORS 实现起来非常方便，只需要增加一些 HTTP 头，让服务器能声明允许的访问来源。一般都是后端配置 CORS，就可以实现跨域资源共享

`Koa` 服务框架为例：

```ts
app.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild"
  );
  ctx.set("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  if (ctx.method == "OPTIONS") {
    ctx.body = 200;
  } else {
    await next();
  }
});
```

### Proxy

代理（Proxy）也称网络代理，是一种特殊的网络服务，允许一个（一般为客户端）通过这个服务与另一个网络终端（一般为服务器）进行非直接的连接。一些网关、路由器等网络设备具备网络代理功能。一般认为代理服务有利于保
障网络终端的隐私或安全，防止攻击

**方案一**：平时开发中如果后台没有配置去 CORS，一般会通过脚手架来配置本地代理服务器，通过该服务器转发请求到后台服务，得到结果返回给前端。但是本地代理只是在开发中有效果，最终发布上线时如果 Web 应用和接口服务器不在一起仍会跨域

以 `vue-cli` 脚手架为例

```js
module.exports = {
  devServer: {
    host: "127.0.0.1",
    port: 8084,
    open: true, // vue项目启动时自动打开浏览器
    proxy: {
      "/api": {
        // '/api'是代理标识，用于告诉node，url前面是/api的就是使用代理的
        target: "http://xxx.xxx.xx.xx:8080", //目标地址，一般是指后台服务器地址
        changeOrigin: true, //是否跨域
        pathRewrite: {
          // pathRewrite 的作用是把实际Request Url中的'/api'用""代替
          "^/api": "",
        },
      },
    },
  },
};
```

通过 axios 发送请求中，配置请求的根路径：`axios.defaults.baseURL = '/api'`

**方案二**：通过配置 `Nginx` 实现反向代理

## 19. 自定义指令是什么？应用场景有哪些？

在 `Vue` 中提供了一套为数据驱动视图更为方便的操作，这些操作被称为指令系统

不同的指令可以完成或实现不同的功能，除了核心功能默认内置的指令 (v-model 和 v-show)，Vue 也允许注册自定义指令

### 如何实现自定义指令

全局注册主要是通过 `Vue.directive` 方法进行注册。第一个参数是指令名称，第二个参数可以是对象，也可以是一个指令函数

```ts
// 注册一个全局自定义指令 `v-focus`
Vue.directive("focus", {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus(); // 页面加载完成之后自动让输入框获取到焦点的小功能
  },
});
```

存在如下钩子函数：

- `bind`：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置
- `inserted`：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)
- `update`：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新
- `componentUpdated`：指令所在组件的 VNode 及其子 VNode 全部更新后调用
- `unbind`：只调用一次，指令与元素解绑时调用

### 应用场景

- 一键 Copy 功能
- 权限按钮
- 防止表单重复提交

## 20. KeepAlive 缓存组件

KeepAlive 组件是 Vue 官方提供的一个内置组件，在开发过程中使用 KeepAlive 包裹动态组件 Component 时，会将不活动的组件实例缓存起来，不会去销毁它们。这样在进行组件切换过程中会将状态保留在内存中，防止反复创建组件，可以保证组件的活性。

结合 `include` 和 `exclude` 可以明确指定缓存哪些组件或排除缓存指定组件

```vue
<template>
  <keep-alive>
    <component :is="view"></component>
  </keep-alive>
</template>
```

```vue
<!-- 结合 VueRouter -->
<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component"></component>
    </keep-alive>
  </router-view>
</template>
```

缓存后如果要获取数据，解决方案有两种：

1. 通过 `beforeRouteEnter` 函数，在每次进入路由前做具体操作
2. 通过 `actived` 钩子函数，在 KeepAlive 缓存组件被激活的时候，都会执行 `actived` 钩子函数
