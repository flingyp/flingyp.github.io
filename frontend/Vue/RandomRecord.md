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
