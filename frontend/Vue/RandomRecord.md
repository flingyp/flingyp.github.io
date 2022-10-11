## 1. Vue3 组件之间的通信方式有哪些

:::tip 组件之间的通信方式

`Props、Emits`：用于父子组件之间数据的传递

`expose、ref`：在 Vue3 中我们需要通过 `ref` 去获取组件的实例，并且 Vue 并不会将所有组件实例属性和方法暴露出来。我们需要通过 `defineExpose` 将实例的属性和方法暴露出来。在父组件我们可以通过获取组件实例来向子组件传递数据。

`透传 Attributes`：指的是在子组件中，没使用 prop 或 emits 定义的 attribute，可以通过 `$attrs` 来访问。[文档介绍](https://cn.vuejs.org/guide/components/attrs.html)

`v-model` 语法糖

`Slots` 插槽

`Provide/Inject`：适合跨组件传递

`Vuex、Pinia`：跨组件通信工具

:::

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

patch 过程是一个递归过程，遵循深度优先、同层比较的策略

- 首先判断两个节点是否为相同同类节点，不同则删除重新创建
- 如果双方都是文本则更新文本内容
- 如果双方都是元素节点则递归更新子元素，同时更新元素属性
- 更新子节点又分为几种情况：
  - 新的子节点是文本，老的子节点是数组则清空，并设置文本
  - 新的子节点是文本，老的字节点是文本则直接更新文本
  - 新的子节点是数组，老的子节点是文本则清空文本，并创建子节点数组中的子元素
  - 新的节点是数组，老的子节点也是数组，那么比较两组子节点，更新细节

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

总结：组件的生命周期可以这么划分：组件创建前后、组件挂载前后、组件更新前后、组件销毁前后

:::tip

- `beforeCreate`：组件实例创建之前调用
- `created`：组件实例创建之后调用。实例完成：数据观测、属性和方法的运算、 watch/event 事件回调。但是没有 DOM
- `beforeMount`：挂载之前调用，相关 render 函数首次被调用
- `mounted`：组件实例被挂载到 DOM 上之后调用
- `beforeUpdate`：响应式数据被更新前调用，发生在虚拟 DOM 重新渲染和打补丁
- `updated`：由于数据更新导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子
- `beforeDestroy`：组件实例销毁前调用
- `destroyed`：组件实例销毁之后调用

每个生命周期可以做什么事情

- created：实例已经创建完成，因为他是最早触发的，所以可以进行一些数据、资源的请求。
- mounted：实例已经挂载完成，可以进行一些 DOM 操作。
- beforeUpdate：可以在这个钩子中进一步的更改状态，不会触发重渲染。
- updated：可以执行依赖于 DOM 的操作，但是要避免更改状态，可能会导致更新无线循环。
- destroyed：可以执行一些优化操作，清空计时器，解除绑定事件。

:::

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

:::tip
SPA 指的是单页面应用。它的核心就是只有一个 HTML 文件，更新视图而不用重新加载页面。优点就是用户体验好、快、内容的改变不需要重新加载页面。缺点就是 SPA 不利用搜索引擎的抓取，首页加载文件时间会过长，文件渲染的速度就会相对较慢。

而 Vue Router 在实现单页面路由时就提供了 Hash 和 History 两种模式

Hash 路由是通过哈希来进行路由跳转的

1. URL 中会带有一个 `#` 号
2. 通过 `window.onhashchange` 监听 Hash 的改变，借此实现无刷新跳转的功能
3. 每改变一次 Hash，都会在浏览器的访问历史中增加一个记录

History 路由

1. history 模式是通过调用 `window.history` 对象上的一系列方法来实现页面的无刷新跳转
2. 路径直接拼接在端口号后面，后面的路径也会随着 http 请求发给服务器，因此单页面应用使用了 History 模式后在刷新页面后会报 404 错误。项目打包上线后需要后端服务器的配合来完成。

:::

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
