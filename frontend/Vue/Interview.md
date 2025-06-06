# Vue 杂记

## 对 MVVM 的理解

MVVM 是 **Model-View-ViewModel** 的缩写，是一种设计思想

- Model 层代表数据层，可以理解为SFC文件中的 `script` 部分
- View 层代表视图层，可以理解为SFC文件中的 `template` 部分

View 和 Model 之间并没有直接的联系，而是通过 ViewModel 进行交互，并且之间的交互是双向的。对 ViewModel 通过双向数据绑定把 View 层和 Model 层连接了起来。

而 ViewModel 这个中间层就是Vue需要做的事情：将 View 和 Model 双向建立连接

## Vue2 和 Vue3 的区别

1. 响应式系统的重构

Vue2 是基于 `Object.defineProperty` 实现的。而 Vue3 是基于 `Proxy` 代理实现的。
`Object.defineProperty` 缺点届是无法检查对象新增/删除的属性的变化，而 `Proxy` 正好解决这个问题

2. 在写法上的变化

Vue2 是 Options API 是按照一个一个 Option 组织代码的，而 Vue3 是基于逻辑功能来组织代码的

3. 性能优化

Vue2 在虚拟DOM方面是全量对比的，而 Vue3 是基于 `Patch` 算法来进行优化的。并且 Vue3 支持 `Tree-Shaking` 功能来优化打包后的体积，以及更强大的 TS 类型推导

4. 生命周期的变化

Vue2 中的 `beforeCreate` 和 `created` 在 Vue3 中被移除了，采用 `setup` 语法糖代替。
`beforeDestroy` 和 `destroyed` 中名字修改为 `beforeUnmount` 和 `unmount`

> :::tip Vue2
>
> Vue2 Diff 算法就是进行虚拟节点对比，并返回一个 patch 对象，用来存储两个节点不同的地方，最后用 patch 记录的消息去局部更新 Dom。
>
> Diff 算法会比较每一个 vnode，而对于一些不参更新的元素，进行比较是有点消耗性能的。
> :::

> :::tip Vue3
>
> 快速的 Patch 算法：Diff 算法在初始化的时候会给每个虚拟节点添加一个 patchFlags，patchFlags 就是优化的标识。只会比较 patchFlags 发生变化的 vnode,进行更新视图，对于没有变化的元素做静态标记，在渲染的时候直接复用。
>
> 静态提升：Vue3 在编译阶段通过静态提升来优化虚拟 DOM，将静态节点转化为常量，可以避免在每次渲染时重新创建和比较节点，从而提高渲染性能。
>
> 更快的 Diff 算法：Vue3 对 Diff 算法进行了优化，采用了双端指针的方式来进行比较，从而减少了比较的次数，并且将比较结果缓存到了一个位图数组中，以便下次比较时能够快速地获取之前的比较结果。
> :::

## SPA 的理解，有什么优缺点

单页面引用（Single Page Application）是一种前端应用程序的架构模式。它只需要加载一个HTML页面，并且通过使用 JavaScript 动态的更新页面的内容，从而实现动态无刷新页面的用户体验

SPA 的优点：

- 用户体验。无感刷新，较流畅

SPA 的缺点：

- 首次加载白屏问题
- 不利于SEO

## Vue3 组件之间的通信方式有哪些

1. `Props、Emits`：用于父子组件之间数据的传递
2. `expose、ref`：在 Vue3 中我们可以通过 `ref` 去获取组件实例。但默认在 Vue3 中并不会将组件实例的相关属性和方法暴露出来。我们需要通过 `defineExpose` 将组件实例的属性和方法暴露出来
3. `透传 Attributes`：指的是在子组件中，没使用 `prop` 或 `emits` 定义的 attribute，可以通过 `$attrs` 来访问。[文档介绍](https://cn.vuejs.org/guide/components/attrs.html)
4. `v-model` 语法糖
5. `Slots` 插槽
6. `Provide/Inject`：适合跨组件传递
7. 跨组件通信工具：Pinia、Vuex
8. EventBus 事件总线：Vue3 推荐使用的一个发布订阅库 `Mitt`

## `v-if` 和 `v-for` 哪个优先级更高

- 在 Vue2 中 `v-for` 会比 `v-if` 的优先级高
- 在 Vue3 中 `v-if` 会比 `v-for` 的优先级高（这样是为了减少循环判断，提高框架性能）

**总结**：

1. 在使用 `v-if` 和 `v-for` 时，应该在外部包裹一层 `<template v-for/v-if></template>`，然后根据实际情况来判断是哪个API在外层，哪个API在里层
2. 多用Computed，在面对要循环根据 `v-if` 所过滤后的数据列表，可以定义一个使用 `computed` 来进行过滤后渲染

- [avoid-v-if-with-v-for](https://cn.vuejs.org/style-guide/rules-essential.html#avoid-v-if-with-v-for)

## `v-show` 和 `v-if` 的区别

控制手段：`v-show` 是通过给元素设置 CSS `display: none` 来控制元素的显示与否 而`v-if` 是通过一定的 JS 手段将整个 DOM 节点进行添加或删除

编译过程：`v-if` 切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件。`v-show` 只是简单一个基于 CSS 切换

编译条件：`v-if` 是真正的条件渲染，它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和挂载。只有渲染条件为假时，并不做操作，直到为真才渲染

**总结**：通过 `v-if` 来控制元素或子组件的显示和隐藏，组件会经历实例的创建、挂载和销毁等阶段。相对来说性能消耗较大，所以如果有频繁的控制元素的显示隐藏的需要，应当首选 `v-show`

所以在 `v-show` 的切换时，是不会触发内部子组件的生命周期。而在 `v-if` 的切换时，是会触发组件的相关的生命周期函数的

## `watch` 和 `computed` 的区别

- Computed：会返回一个只读的响应式数据
- Watch：检测响应式数据的变化后执行相关回调函数

区别：两个使用场景不同

1. 计算属性会依据所依赖的响应式数据衍生出自己需要的响应式数据，所以计算属性不适合做异步操作或DOM操作
2. 监听器是监测某个响应式数据的变化并且执行对应的副作用函数，可以执行一些异步操作等复杂逻辑

Computed 的特点：

1. **依赖追踪**。Computed 会收集所依赖的响应式数据，只有当响应式数据发生改变时才会执行
2. **缓存**。只有当其依赖的东西发生变化了才需要重新计算，否则就返回上一次执行的结果
3. **懒计算**。声明了一个计算属性后并不是立即执行的，而是在访问 `.value` 后才去执行对应函数

## 谈一谈 Vue3 中如何扩展组件

Vue3 模式下最好的方式是通过 Composition API 来进行组件的扩展

通过使用Vue的响应式模块配合有独立作用域的函数，可以编写特定的业务功能模块和公共功能模块等。以达到更好的抽离代码优化组件结构以实现更好的搭配

当我们需要新增组件功能时，只需要在当前的组件基础上新增对应的钩子来完成功能的开发

- [官方关于组合式函数（composables 或 hooks）的介绍和用法](https://staging-cn.vuejs.org/guide/reusability/composables.html)

## `v-model` 双向绑定使用

`v-model` 是一个语法糖。默认情况下相当于 `v-bind:value` 和 `@update:value`，使用双向绑定可以减少繁琐事件，提高开发体验。

Vue3 甚至可以使用参数形式来绑定多个响应式数据。例如： `v-model:content`、`v-model:header`

```vue
<script setup>
defineProps(['modelValue', 'content', 'header']);
defineEmits(['update:modelValue', 'update:content', 'update:header']);
</script>

<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    @input="$emit('update:content', $event.target.value)"
    @input="$emit('update:header', $event.target.value)"
  />
</template>
```

```vue
<template>
  <MyInput v-model="value"></MyInput>
  <MyInput v-model:content="content"></MyInput>
  <MyInput v-model:header="header"></MyInput>
</template>
```

## 谈谈对 Vue 数据响应式理解

数据响应式：数据驱动视图的思想，**能够使数据变化可以被检测并且做出相应的响应机制**

MVVM 分为三部分：视图层、数据层和视图逻辑层

而视图逻辑层就是要解决一个核心的问题是**如何连接数据层和视图层**。通过**数据驱动视图，视图改变数据**，要做到这点的就需要做到数据响应式处理

在 Vue2 中，采用的是 `Object.defineProperty()` 的方式对响应式数据进行拦截

但是使用此 API 有一些缺点：

1. 新增或删除属性的不会被依赖收集也就不会有响应式的特性，需要使用 `Vue.set/delete` 等 API 才能生效
2. 对应 ES6 中的 Map、Set 这些数据结构不支持

在 Vue3 中 采用的是 ES6 的 `Proxy` 代理实现响应式数据

## `Object.defineProperty` 和 `Proxy`有什么区别

- `defineProperty` 是 ES5 新增的方法，会直接在一个对象上定义一个新属性，或修改其现有属性，并返回此对象
- `Proxy` 是 E56 新增的，是针对一个对象的代理，而不是针对对象当中的某个属性的代理

**区别**：

1. `defineProperty` 只代理对象上的某个属性, 通过 Getter 和 Setter 方法来劫持属性的读取和写入操作。只能对定义好的属性进行数据监听，而新增属性或删除数据是不会被监听的，也就会失去响应式的特性
2. 而 Proxy 是代理整个对象，可以完全解决 `defineProperty` 所带来的弊端
3. Proxy 在调用时递归，`Object.defineProperty` 在一开始就全部递归，Proxy 性能优于 `Object.defineProperty`

## 虚拟 DOM 的理解

虚拟DOM：是用来描述真实DOM的 JavaScript 对象

虚拟 DOM 如何生成？

在 Vue 中我们会为组件编写模板 template，这个模板会被编译器 compiler 编译为渲染函数，在接下来的挂载时刻 mount 过程中会调用 render 渲染函数来返回 虚拟 DOM，在后续的 patch 过程中会进一步转换为真实 DOM

挂载过程结束后，Vue 会进入更新流程，如果发现有响应式数据发生变化，就会引起组件重新渲染，此时就会产生新的虚拟 DOM，和上一次的渲染结构 Diff 就可以得到变化的地方，从而转换为最小量的 DOM 操作，高效更新视图

## 对 Path 或 Diff 算法的理解

Vue 中的 Diff 算法又称为 Patch 算法。它的任务就是去比较新旧虚拟节点，找出最小差异并且更新为真实 DOM

当组件内响应式数据发生变化时，会触发实例执行其更新函数来获得最新的虚拟DOM。然后会执行 `patch` 函数，传入新旧虚拟DOM，通过Diff算法来找到两个虚拟DOM存在差异的地方，然后就可以最小化的更新视图

Patch 的过程是一个递归过程，遵循一个**同层比较，深度优先策略**

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
  'div',
  {
    class: _normalizeClass({ active: _ctx.active }),
  },
  null,
  2 /* CLASS */,
);
// 最后这个参数 2 就是一个更新类型标记 (patchFlag)
```

:::details Vue2 和 Vue3 的 Diff算法区别

Vue2

会对虚拟Dom进行全量的对比，在运行时会对所有节点生成一个虚拟节点树，当页面数据发生变化时，会遍历判断虚拟Dom所有节点（包括一些不会变化的节点）有没有发生变化

Vue3

静态提升：Vue3 在编译阶段通过静态提升来优化虚拟 DOM，将静态节点转化为常量，可以避免在每次渲染时重新创建和比较节点，从而提高渲染性能。

静态标记：在模版编译时编译器会在动态标签末尾加上 /_ Text_/ PatchFlag。也就是在生成VNode的时候，同时打上标记，patch 过程中就会判断这个标记来 Diff 优化流程，跳过一些静态节点对比

更快的 Diff 算法：Vue3 对 Diff 算法进行了优化，采用了双端指针的方式来进行比较，从而减少了比较的次数，并且将比较结果缓存到了一个位图数组中，以便下次比较时能够快速地获取之前的比较结果。
:::

## 响应式数据发生改变之后 Vue 做了什么事情

当响应式数据发送变化后，会触发到响应式数据对应的 Set 方法，而在Set函数中会去执行trigger函数（派发更新），之后会自动触发重新渲染视图的操作

渲染前会调用 `beforeUpdate` 钩子函数，在渲染的过程中会 `patch` 重新比对新旧虚拟DOM，然后更新渲染到页面上，渲染后在去调用 `onUpdated` 钩子函数

## 谈谈 Vue 的生命周期吧

Vue 实例有一个完整的生命周期。从实例创建、初始化数据、模板编译、挂载 DOM、渲染、更新渲染、卸载等一系列过程，就是 Vue 的生命周期

- `beforeCreate`：组件实例创建前。此时还无法访问到相关方法和数据
- `created`：实例创建后。组件响应式数据、事件等被初始化
- `beforeMount`：实例挂载前。渲染函数首次被调用
- `mounted`：实例挂载后。 组件实例被挂载到 DOM 上之后调用
- `beforeUpdate`：响应式数据被更新前。发生在虚拟 DOM 重新渲染和打补丁
- `updated`：响应式数据被更新后。由于数据更新导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子
- `beforeUnmount`：实例卸载前
- `unmounted`：实例卸载后

## 说说 `nextTick` 的使用

`nextTick()` 是等待下一次 DOM 更新刷新的工具方法

Vue 有一个异步更新策略，意思就是如果数据变化，Vue 不会立即更新 DOM，而是开启一个队列，把组件更新函数保存在队列中，在同一事件循环中发生的所有数据变更后会异步的批量更新

这一策略会导致我们对数据的修改不会及时的体现在 DOM 上，此时如果想要获取更新后的 DOM 状态，就需要使用 `nextTick`

## Vue Router 中 hash 模式和 history 模式的区别

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

这里有一个小细节，如果出现真的 404 页面了呢？

因为这么做以后，你的服务器就不再返回 404 错误页面，因为对于所有路径都会返回 index.html 文件。为了避免这种情况，你应该在 Vue 应用里面覆盖所有的路由情况，然后在给出一个 404 页面

```ts
const router = new VueRouter({
  mode: 'history',
  routes: [{ path: '*', component: NotFoundComponent }],
});
```

### 总结

针对不同的应用场景我们可以选择不同模式

- 如果是 `B端` 系统更加推荐 Hash 模式，相对简单容易
- 如果是 `C端` 系统对外观有一定要求就可以考虑选择 `History` 模式但是需要 **服务端支持**

## Vue 项目部署到服务器后刷新出现 404 的问题

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
  mode: 'history',
  routes: [
    { path: '*', component: NotFoundComponent }, // 添加一条匹配404页面的路由
  ],
});
```

## Key 的作用

Key 属性的是为每个循环项分配一个唯一标识符，优化 `patch` 的过程

Key 属性帮助Vue更高效地更新DOM。当数据发生变化时，Vue会通过比较新旧虚拟DOM树来确定如何更新实际DOM。Key 可以帮助Vue识别哪些元素是已存在的、哪些是新增的、哪些是移除的，从而减少不必要的DOM操作。没有 Key 时，Vue只会简单地按照顺序更新元素，这样会导致一些无需的DOM操作导致性能下降

- 如果发现新旧节点的 Key 值相同，那么就认为是相同的节点，不会再去重新渲染，而是复用之前的 DOM 节点
- 如果发现新旧节点的 Key 值不同，那么就认为是不同的节点，会重新渲染

作用：

1. 减少不必要的节点重渲染，提高渲染效率
2. 为了更好的复用之前的 DOM 节点，提升性能

## Vue 首次实例创建和挂载发生了什么

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
  container.innerHTML = '';
  // 这里执行的是 App实例原有的mount方法
  const proxy = mount(container, false, container instanceof SVGElement);
  if (container instanceof Element) {
    container.removeAttribute('v-cloak');
    container.setAttribute('data-v-app', '');
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

1. 创建 Vue 实例对象
2. 配置实例属性和方法
3. 执行 `mount` 方法
4. 创建虚拟DOM（createVNode）
5. 渲染挂载虚拟DOM（render）

## Vue 项目是如何解决跨域的呢

同源策略是Web浏览器强制执行的安全机制，限制Web页面向其他源发出请求

同源条件：就是指在同一个域下（协议相同、主机相同、端口相同）的情况下

非同源：则上面条件有一个不同的都属于非同源，这个时候就会产生跨域问题

如何解决跨域有很多：`JSONP`、`CORS`、`Proxy`。实际开发中主要会采用 `CORS`、`Proxy` 这两种

### CORS

CORS 跨域资源共享（Cross-Origin Resource Sharing）它是由一系列传输的 HTTP 头组成，这些 HTTP 头决定浏览器是否阻止前端 JavaScript 代码获取跨域请求的响应

CORS 实现起来非常方便，只需要增加一些 HTTP 头，让服务器能声明允许的访问来源。一般都是后端配置 CORS，就可以实现跨域资源共享

`Access-Control-Allow-Origin`、`Access-Control-Allow-Methods` 和 `Access-Control-Allow-Headers`

`Koa` 服务框架为例：

```ts
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set(
    'Access-Control-Allow-Headers',
    'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild',
  );
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (ctx.method == 'OPTIONS') {
    ctx.body = 200;
  } else {
    await next();
  }
});
```

### Proxy

代理服务器充当客户端和目标服务器之间的中介。客户端将请求发送到代理服务器，代理服务器将请求转发到目标服务器。然后将响应传递回客户端。这样，客户端代码不知道请求的跨域性质。

**方案一**：平时开发中如果后台没有配置去 CORS，一般会通过脚手架来配置本地代理服务器，通过该服务器转发请求到后台服务，得到结果返回给前端。但是本地代理只是在开发中有效果，最终发布上线时如果 Web 应用和接口服务器不在一起仍会跨域

以 `vue-cli` 脚手架为例

```js
module.exports = {
  devServer: {
    host: '127.0.0.1',
    port: 8084,
    open: true, // vue项目启动时自动打开浏览器
    proxy: {
      '/api': {
        // '/api'是代理标识，用于告诉node，url前面是/api的就是使用代理的
        target: 'http://xxx.xxx.xx.xx:8080', // 目标地址，一般是指后台服务器地址
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          // pathRewrite 的作用是把实际Request Url中的'/api'用""代替
          '^/api': '',
        },
      },
    },
  },
};
```

通过 axios 发送请求中，配置请求的根路径：`axios.defaults.baseURL = '/api'`

**方案二**：通过配置 `Nginx` 实现反向代理

## 自定义指令是什么？应用场景有哪些？

在 `Vue` 中提供了一套为数据驱动视图更为方便的操作，这些操作被称为指令系统

不同的指令可以完成或实现不同的功能，除了核心功能默认内置的指令 (v-model 和 v-show)，Vue 也允许注册自定义指令

### 如何实现自定义指令

全局注册主要是通过 `Vue.directive` 方法进行注册。第一个参数是指令名称，第二个参数可以是对象，也可以是一个指令函数

```ts
// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
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

## KeepAlive 缓存组件

KeepAlive 组件用于缓存、保持组件状态。会将不活动的组件实例缓存起来，不会去销毁它们，可以保证组件的活性。

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

KeepAlive 组件的过程如下：

1. 当第一次渲染 KeepAlive 包裹的组件时，组件的 `activated` 生命周期钩子被调用。此时，组件被创建并添加到缓存中
2. 如果组件被导航离开或隐藏， `deactivated` 生命周期钩子被调用。组件不会被销毁，而是保留在缓存中并保持其状态
3. 当组件再次被导航到或重新激活时，activated 钩子被再次调用，并且组件从缓存中取出，状态得以恢复

作用：KeepAlive 组件可以提高组件的渲染性能，避免重复创建和销毁组件，同时保留组件的状态，提供更流畅的用户体验

## 关于首屏加载优化处理

1. 减小打包后入口文件的体积
   - 针对代码规范封装、抽离合理，代码压缩
   - 静态资源文件无损压缩
   - 常用的NPM包或者库，打包配置CDN链接
   - 尽量使用支持TreeShaking的包和库
   - 配置打包，抽离公共模块的代码Chunks
   - 开启GZIP压缩（需要服务端支持）
2. 使用路由懒加载、异步组件和动态组件（减少首次加载时，加载一些无关的组件文件）
3. 利用浏览器缓存策略
4. 利用 Async 延迟加载属性，等待页面 HTML+CSS 被渲染出来了在执行脚本文件
5. 设置首屏加载Loading动画效果（优化用户体验）
6. 骨架屏（优化用户体验）

## 常见修饰符

### 事件修饰符

- `.stop` 阻止事件冒泡
- `.capture` 事件捕获
- `.prevent` 阻止默认事件
- `.self` 只有当事件是从侦听器绑定的元素本身触发时才触发回调
- `.once` 只触发一次事件
- `.passive` 用于提升性能，告诉浏览器你不需要阻止事件的默认行为

### 按键修饰符

- `.enter` 回车键
- `.tab` 制表键
- `.delete` (捕获“删除”和“退格”键)
- `.esc` ESC 键
- `.space` 空格键
- `.up` 向上箭头键
- `.down` 向下箭头键
- `.left` 向左箭头键
- `.right` 向右箭头键

### 表单修饰符

- `.lazy` 在 `change` 事件中同步输入框的值
- `.number` 自动将用户的输入值转为 Number 类型
- `.trim` 自动过滤用户输入的首尾空格

## Composition API 相对于 Options API 的优势

1. 更灵活的逻辑组织。使代码更具有可读性和可维护性
2. 更好的代码重用。可以将逻辑封装成为可复用的函数
3. 更好的类型推导和代码提升。提供了更好的代码提示和类型安全性，减少了运行时错误
4. 更好的逻辑复用和组合。将逻辑与视图层抽离分开，更加灵活
5. 更小的生产包体积。支持TreeShaking功能，没有使用到的组合式API不会被打包其中

## Ref 和 Reactive 的区别

1. Reactive 接受的是引用数据类型，是对一整个对象的代理。Ref 可以接受基础数据类型也可接受引用数据类型
2. Reactive 的缺陷是当将响应式对象进行解构那么解构出来的变量就失去了响应式，必须将其包装为 Ref 或 Computed 来其能被Vue追踪
3. Ref 内部使用的是 `RefImpl` 实现类来完成响应式数据的监听和更新
4. Ref 是通过 `RefImpl` 实现类 `get value()` 和 `set value()` 来实现依赖收集和派发更新。之后 `set value()` 会去比对和原始值的变化，如果有变化就会派发更新执行相关副作用函数
5. Ref 如果传递的是一个引用数据类型，会先将引用数据类型转换成代理对象 `toReactive(value)`。那么访问 `.value` 时访问的是代理对象而不是原始对象

## 异步组件和动态组件

异步组件：需要异步加载某个组件，一般用于性能优化的时候，可以使用异步组件来实现按需加载。

动态组件：是 Vue 中一个特殊的 Html 元素：`<component>`，它拥有一个特殊的 is 属性，属性值可以是 已注册组件的名称 或 一个组件的选项对象，它是用于不同组件之间进行动态切换的。

## Vuex 和 Pinia 有什么区别

1. Pinia 没有`Mutations`的概念，只有`states`，`getters`，`actions`使用它来修改数据
2. Pinia 有 TypeScript 的支持，利于开发
3. Pinia 也没有`Modules`的概念，而是映射出为`Store`概念，每一个 Store 都是通过`defineStore`生成出来的。
4. Pinia 更加轻量级、体积较小
