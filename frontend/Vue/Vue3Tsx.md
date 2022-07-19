# Vue 3 + TypeScript + Vite + TSX

## 快速上手

- 安装插件 `@vitejs/plugin-vue-jsx` 来编译 `jsx 和 tsx` 文件

- [官方网站](https://github.com/vitejs/vite/tree/main/packages/plugin-vue-jsx#readme)

```tsx
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return () => <div>Hello TSX</div>;
  },
});
```

```ts
import { createApp } from "vue";
import App from "./App.tsx";
createApp(App).mount("#app");
```

```ts
// 为了 import App from "./App.tsx"; TS不报 .tsx 后缀文件的错 在 env.d.ts 文件添加如下代码
declare module "*.tsx" {
  import type { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
```

## 编写一个组件

### 函数式组件

关于函数式组件的介绍参考文档：https://staging-cn.vuejs.org/guide/extras/render-function.html#functional-components

```ts
export default () => <div>Hello TSX</div>;
```

### 使用 API `defineComponents` 来声明组件

```ts
// 一般搭配 Options API使用
export default defineComponent({
  // 其他配置
  render() {
    return <div>Hello TSX</div>;
  },
});
```

```ts
// 一般搭配 Composition API使用
export default defineComponent({
  // 其他配置
  setup() {
    // 返回一个渲染函数，渲染函数再去返回具体的DOM
    return () => <div>Hello TSX</div>;
  },
});
```

## 写法介绍

### `v-if`

```tsx
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const RandomNumber = Math.floor(Math.random() * 10);
    return () => (
      <div>
        {/* v-if的写法 （使用三元表达式） */}
        {RandomNumber > 6 ? <h2>大于6</h2> : <h2>小于等于6</h2>}
      </div>
    );
  },
});
```

### `v-for`

```tsx
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const listEach = ref([
      { message: "Foo" },
      { message: "Bar" },
      { message: "FlingYP" },
    ]);

    return () => (
      <div>
        {/* v-for的写法（使用数字的map方法） */}
        <ul>
          {listEach.value.map((item) => {
            return <li>{item.message}</li>;
          })}
        </ul>
      </div>
    );
  },
});
```

### `v-on`

```tsx
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const listEach = ref([
      { message: "Foo" },
      { message: "Bar" },
      { message: "FlingYP" },
    ]);

    const AddItemToList = () => {
      listEach.value.push({
        message: `FlingYP---${Math.floor(Math.random() * 10)}`,
      });
    };

    return () => (
      <div>
        {/* v-for的写法（使用数字的map方法） */}
        <ul>
          {listEach.value.map((item) => {
            return <li>{item.message}</li>;
          })}
        </ul>
        {/* 给DOM绑定事件方法 */}
        <button
          onClick={(event) => {
            AddItemToList();
          }}
        >
          点击
        </button>
      </div>
    );
  },
});
```

### 插槽的使用

子组件

```tsx
import { defineComponent } from "vue";

export default defineComponent({
  name: "CustomChild",
  setup(props, { slots }) {
    return () => (
      <>
        <button>
          {/* 具名插槽的使用方法 */}
          {slots.prefix && slots.prefix()}
          {/* 默认插槽的使用方式 */}
          {slots.default && slots.default()}
          {/* 作用域插槽的作用是：可以将子组件的数据通过插槽的方式传给父组件，提供给插槽内容使用 */}
          {slots.suffix && slots.suffix({ name: "作用域插槽" })}
        </button>
      </>
    );
  },
});
```

父组件

```tsx
import { defineComponent, ref } from "vue";
import CustomChild from "./components/CustomChild";

export default defineComponent({
  setup() {
    return () => (
      <div>
        <div>
          {/* 只有默认插槽时，编写方法 */}
          <CustomChild>默认插槽</CustomChild>
          {/* 插槽写法之一 */}
          <CustomChild
            v-slots={{
              default: () => "-我是默认插槽-",
              prefix: () => "我是具名插槽",
              suffix: (props: Record<"name", string>) => props.name,
            }}
          ></CustomChild>
          {/* 插槽写法二 */}
          <CustomChild>
            {{
              default: () => "我是默认插槽",
              prefix: () => "我是具名插槽",
              suffix: (props: Record<"name", string>) => (
                <span>{props.name}</span>
              ),
            }}
          </CustomChild>
        </div>
      </div>
    );
  },
});
```

### `v-model` 的写法

子组件

`v-model:propName={}` 的写法

```tsx
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "CustomInput",
  props: ["inputValue"],
  emits: ["update:inputValue"],
  setup(props, { emit }) {
    const ChangeInputValue = (event: any) => {
      emit("update:inputValue", event.target!.value);
    };
    return () => (
      <>
        <input value={props.inputValue} onChange={ChangeInputValue}></input>
      </>
    );
  },
});
```

父组件

```tsx
import { defineComponent, ref } from "vue";
import CustomInput from "./components/CustomInput";
export default defineComponent({
  setup() {
    const CustomInputValue = ref(7);
    return () => (
      <div>
        <div>
          <CustomInput
            v-model:inputValue={CustomInputValue.value}
          ></CustomInput>
        </div>
      </div>
    );
  },
});
```

还有一种 `v-model={}` 简介写法

```tsx
import { defineComponent } from "vue";
export default defineComponent({
  name: "CustomInput",
  props: ["modelValue"],
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const ChangeInputValue = (event: any) => {
      // v-model 触发事件名 必须叫 update:propsName
      // 我们在引用子组件的时候默认会使用 v-model={}。v-model默认绑定变量名为modelValue
      emit("update:modelValue", event.target.value);
    };

    return () => (
      <>
        <input value={props.modelValue} onChange={ChangeInputValue}></input>
      </>
    );
  },
});
```

```tsx
import { defineComponent, ref } from "vue";
import CustomInput from "./components/CustomInput";
export default defineComponent({
  setup() {
    const CustomInputValue = ref(7);
    return () => (
      <div>
        <CustomInput v-model={CustomInputValue.value}></CustomInput>
      </div>
    );
  },
});
```
