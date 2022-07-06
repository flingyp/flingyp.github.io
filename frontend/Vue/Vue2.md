## Vue.js 介绍

> **以下为官方原话：**
> Vue (读音 /vjuː/，类似于 **view**) 是一套用于构建用户界面的**渐进式框架**。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库**只关注视图层**，不仅易于上手，还**便于与第三方库**或既有项目整合。另一方面，当与[现代化的工具链](https://cn.vuejs.org/v2/guide/single-file-components.html)以及各种[支持类库](https://github.com/vuejs/awesome-vue#libraries--plugins)结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。

- 一款优秀的前端 JS 框架
- 可以轻松构建 SPA 单页面应用程序
- 通过 **指令** 扩展 HTML 通过 **表达式** 绑定数据到 HTML
- **最大程度上解放了 Dom 操作**
- 中文网站： **cn.vuejs.org**

## Vue.js 特点

**易用** **灵活** **高效**

Vue 是为了克服 HTML 在构建应用上的不足而设计的。 Vue 有着诸多特性，最为核心的是：

- MVVM
- 双向数据绑定
- 组件化
- 渐进式

## 01-创建 Vue 实例

每个 Vue 应用都是通过用 `Vue` 函数创建一个新的 **Vue 实例**开始的

```javascript
var vm = new Vue({
  // 选项
});
```

当创建一个 Vue 实例时，你可以传入一个**选项对象**

选项对象可以通过参考官方文档来查看每个选项的用处： [API 选项文档](https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E6%95%B0%E6%8D%AE)

## 02-数据绑定

数据绑定最常见的形式就是**使用“Mustache”语法 (双大括号)** 的文本插值

**文本：**

```html
<span>Message: {{ msg }}</span>
```

通过使用 [v-once 指令](https://cn.vuejs.org/v2/api/#v-once)，你也能执行一次性地插值，当数据改变时，插值处的内容不会更新。但请留心这会影响到该节点上的其它数据绑定

```html
<span v-once>这个将不会改变: {{ msg }}</span>
```

**输出 HTML：**

双大括号会将数据解释为普通文本，而非 HTML 代码。为了输出真正的 HTML，你需要使用 [`v-html` 指令](https://cn.vuejs.org/v2/api/#v-html)：

```html
<span v-html="rawHtml"></span>
```

**属性绑定：(attribute)**

Mustache 语法不能作用在 HTML attribute 上，遇到这种情况应该使用 [`v-bind` 指令](https://cn.vuejs.org/v2/api/#v-bind)

```html
<div v-bind:id="dynamicId"></div>
```

对于布尔 attribute (它们只要存在就意味着值为 `true`)，`v-bind` 工作起来略有不同，在这个例子中：

```html
<button v-bind:disabled="isButtonDisabled">Button</button>
```

如果上面的例子 `isButtonDisabled` 的值是 `null`、`undefined` 或 `false`，则 `disabled` 属性不会被包含在渲染出来的 `` 元素中

## 03-表单输入绑定

你可以用 `v-model` 指令在表单 `input` `textarea` `select` 元素上创建双向数据绑定。

它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理 。

`v-model` 在内部为不同的输入元素使用不同的属性并抛出不同的事件：

- text 和 textarea 元素使用 `value` 属性和 `input` 事件；
- checkbox 和 radio 使用 `checked` 属性和 `change` 事件；
- select 字段将 `value` 作为 prop 并将 `change` 作为事件。

## 04-基本指令

指令 (Directives) 是带有 `v-` 前缀的特殊 attribute。指令 attribute 的值预期是**单个 JavaScript 表达式** (`v-for` 是例外情况)。**指令的职责**是，**当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM**。回顾我们在介绍中看到的例子：

**v-if 指令 (条件渲染)**

```html
<p v-if="seen">现在你看到我了</p>
```

这里，`v-if` 指令将根据表达式 `seen` 的值的真假来插入/移除元素。

**v-show（条件渲染）**: 根据表达式的真假来切换元素的 `display` 属性

```javascript
<h1 v-show="ok">Hello!</h1>
```

**v-if 和 v-show 的区别：**

> `v-if` 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。

> `v-if` 也是**惰性的**：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。

> 相比之下，`v-show` 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。

> 一般来说，`v-if` 有更高的切换开销，而 `v-show` 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 `v-show` 较好；如果在运行时条件很少改变，则使用 `v-if` 较好。

**v-cloak**

`v-cloak`：保持和元素实例的关联，直到结束编译后自动消失。

v-cloak 指令和 CSS 规则一起用的时候，能够**解决差值表达式闪烁的问题**（即：可以隐藏未编译的标签直到实例准备完毕）。

就拿上一段代码来举例，比如说，`{{name}}`这个内容，**在网速很慢的情况下，一开始会直接显示`{{name}}`这个内容**，等网络加载完成了，才会显示`smyhvae`。那这个**闪烁的问题**该怎么解决呢？

解决办法是：通过`v-cloak`隐藏`{{name}}`这个内容，当加载完毕后，再显示出来。

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <style>
    /*2、在样式表里设置：只要是有 v-cloak 属性的标签，我都让它隐藏。
    直到 Vue实例化完毕以后，v-cloak 会自动消失，那么对应的css样式就会失去作用，最终将span中的内容呈现给用户 */
    [v-cloak] {
      display: none;
    }
  </style>
</head>
<body>
  <div id="app">
    <!-- 1、给 span 标签添加 v-cloak 属性 -->
    <span v-cloak>{{name}}</span>

  </div>
</body>
<script src="vue2.5.16.js"></script>
<script>
  new Vue({
    el: '#app',
    data: {
      name: 'smyhvae'
    }
  });
</script>
</html>
```

**v-pre**: 跳过这个元素和它的子元素的编译过程。可以用来显示原始 Mustache 标签。跳过大量没有指令的节点会加快编译。

```javascript
<span v-pre>{{ this will not be compiled }}</span>
```

**v-for (列表渲染)**

```html
<div v-for="item in items">{{ item.text }}</div>

<div v-for="(item, index) in items"></div>
<div v-for="(val, key) in object"></div>
<div v-for="(val, name, index) in object"></div>
```

**v-bind (属性绑定)**

**v-on (注册事件)**

**v-once (只绑定一次)**: 只渲染元素和组件**一次**。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。

```html
<!-- 单个元素 -->
<span v-once>This will never change: {{msg}}</span>
<!-- 有子元素 -->
<div v-once>
  <h1>comment</h1>
  <p>{{msg}}</p>
</div>
<!-- 组件 -->
<my-component v-once :comment="msg"></my-component>
<!-- `v-for` 指令-->
<ul>
  <li v-for="i in list" v-once>{{i}}</li>
</ul>
```

**v-html (绑定输出 html)**

**v-text**

```html
<span v-text="msg"></span>
<!-- 和下面的一样 -->
<span>{{msg}}</span>
```

**v-model (表单双向数据绑定)**

### 指令参数

一些指令能够接收一个“参数”，在指令名称之后以冒号表示。例如，`v-bind` 指令可以用于响应式地更新 HTML attribute

```html
<a v-bind:href="url">...</a>

<a v-on:click="doSomething">...</a>
```

### 指令修饰符

修饰符 (modifier) 是以半角句号 `.` 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定

例如，`.prevent` 修饰符告诉 `v-on` 指令对于触发的事件调用 `event.preventDefault()`

event.preventDefault() 方法 ：阻止默认事件行为

`.enter` 修饰符告诉 `v-on` 指令 当按下 回车键(enter) 时再触发事件

```html
<form v-on:submit.prevent="onSubmit">...</form>

<input v-on:keydown.enter="addTodolist" />
```

### 指令的缩写方法

只有 `v-bind` 和 `v-on` 有缩写写法

```html
<!-- v-bind 完整语法 -->
<a v-bind:href="url">...</a>
<!-- 缩写 -->
<a :href="url">...</a>

<!-- v-on 完整语法 -->
<a v-on:click="doSomething">...</a>
<!-- 缩写 -->
<a @click="doSomething">...</a>
```

## 05-Class 与 Style 绑定

### Class 绑定

可以通过 `对象语法` 也可以通过 `数组语法`

**对象语法：**

我们可以传给 `v-bind:class` 一个对象，以动态地切换 **class**

```html
<div v-bind:class="{ active: isActive }"></div>

<!--
	active 是类名         isActive 是数据（数据值为 true 或 false）
	当为 true 则给该元素绑定上这个类名
	当为 false 则不为该元素绑定这个类名
-->
```

**数组语法：**

我们可以把一个数组传给 `v-bind:class`，以应用一个 class 列表：

```html
<div v-bind:class="[activeClass, errorClass]"></div>
```

```javascript
data: {
  activeClass: 'active',
  errorClass: 'text-danger'
}
```

渲染为：

```html
<div class="active text-danger"></div>
```

如果你也想根据条件切换列表中的 class，可以用三元表达式：

```html
<div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>
```

### Style 绑定

参考文档

## 06-计算属性

模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。在模板中放入太多的逻辑会让模板过重且难以维护 例如：

```html
<div id="example">{{ message.split('').reverse().join('') }}</div>
```

对于任何复杂逻辑的计算，可以使用**计算属性**。

```html
<span class="todo-count"><strong>{{ undoneLength }}</strong> item left</span>

<!--
	计算属性只能当作属性来使用，不能用于函数来调用它 （虽然它是一个函数）
	也就是说 上面的例子 undoneLenth 不能写成 undoneLenth() 会报错
-->
```

```javascript
const app = new Vue({
  el: "#app",
  data: {
    data_array: data_array,
    goedit: null,
  },
  methods: {},
  computed: {
    undoneLength: function () {
      return this.data_array.filter((item) => !item.status).length;
    },
  },
});
```

上面的例子中 undoneLength 为**简写方法** 真正的写法在下面的介绍中

**计算属性中的 get 方法 和 set 方法**

计算属性默认只有 get ，不过在需要时你也可以提供一个 set

```javascript
// ...
		// 真正写法
computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
// ...
```

- 计算属性提供两个方法默认的只有 get 所以才会有上面的简写方法
- **当我们在上面 代码的 {{ fullName }} 的时候 就是在默认的调用它的 get 方法**
- **当 fullName 发生变化的时候 就会调用它的 set 方法**
- 所以当你把 fullName 和表单的 `v-model='fullName'`进行双向绑定时 就会产生有趣的事情。 当 表单变化就会调用 set 方法

```html
<input
  id="toggle-all"
  class="toggle-all"
  type="checkbox"
  v-model="toggleAllstat"
/>
```

```javascript
computed: {
    toggleAllstat: {
        get () {
            // 计算属性知道它依赖了 todos
            // 当 todos 发生变化，计算属性会重新计算
            return this.data_array.every(item => item.status)
        },
        set () {
             // 表单控件 checkbox 双向绑定了 toggleAllStat
             // 所以 checkbox 的变化会调用 set 方法
             // 在 set 方法中我们要做的就是
             //    1. 得到当前 checkbox 的选中状态
             //    2. 把所有任务项的选项状态都设置为 toggle-all 的选中状态

             // 在自己的 set 方法中访问自己就是调用自己 get 方法
             // console.log(this.toggleAllStat)
             const checked = !this.toggleAllstat
             this.data_array.forEach(item => {
                  item.status = checked
              )
       }
    }
},
```

## 07-监听器

虽然计算属性在大多数情况下更合适，但有时也需要一个**自定义的侦听器**。这就是为什么 Vue 通过 `watch` 选项提供了一个更通用的方法，来响应数据的变化。当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。

```javascript
var vm = new Vue({
  data: {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: {
      f: {
        g: 5,
      },
    },
  },
  watch: {
    a: function (val, oldVal) {
      console.log("new: %s, old: %s", val, oldVal);
    },
    // 方法名
    b: "someMethod",
    // 该回调会在任何被侦听的对象的 property 改变时被调用，不论其被嵌套多深
    c: {
      handler: function (val, oldVal) {
        /* ... */
      },
      deep: true,
    },
    // 该回调将会在侦听开始之后被立即调用
    d: {
      handler: "someMethod",
      immediate: true,
    },
    e: [
      "handle1",
      function handle2(val, oldVal) {
        /* ... */
      },
      {
        handler: function handle3(val, oldVal) {
          /* ... */
        },
        /* ... */
      },
    ],
    // watch vm.e.f's value: {g: 5}
    "e.f": function (val, oldVal) {
      /* ... */
    },
  },
});
vm.a = 2; // => new: 2, old: 1
```

## 08-自定义指令

除了核心功能默认内置的指令 (`v-model` 和 `v-show`)，**Vue 也允许注册自定义指令**。注意，在 Vue2.0 中，代码复用和抽象的主要形式是组件。然而，**有的情况下，你仍然需要对普通 DOM 元素进行底层操作，这时候就会用到自定义指令。**

### 什么时候会需要用到自定义指令呢？

**当我们需要不可避免的操作 DOM 的时候，就使用自定义指令**

**举个聚焦输入框的例子:**

```javascript
// 注册一个全局自定义指令 `v-focus`
Vue.directive("focus", {
  // 当被绑定的元素插入到 DOM 中时……
  // el 参数就是你作用该指令的 DOM 元素
  inserted: function (el) {
    // 聚焦元素
    el.focus();
  },
});
// 在 input 标签内 添加 v-focus 就即可
```

### 注册和使用自定义指令

#### 注册

- **全局注册**

  - 在任何组件中都可以使用

  - ```javascript
    // 注册一个全局自定义指令 `v-focus`
    Vue.directive("focus", {
      // 当被绑定的元素插入到 DOM 中时……
      // el 参数就是你作用该指令的 DOM 元素
      inserted: function (el) {
        // 聚焦元素
        el.focus();
      },
    });
    ```

  - 第一个参数： 自定义指令的名字 ，使用必须在前面加 `v-`xxx

  - 第二个参数：就是我们可以配置的 `生命钩子函数`

    - bind ：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置
      - 注： bind 阶段 不能操作 el 的父元素
    - inserted ：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)
      - bind 和 inserted 相同之处在于 一上来都执行一次后，以后再也不会执行
      - 异同之处在于：bind 拿不到 父元素、inserted 可以拿到
    - update
    - componentUpdated
      - update 和 componentUpdated 都是当作用该指令的模板发生改变的时候会触发调用（就是指令所处的被 Vue 管理的模板）
      - 区别是： update 获取的是更新之前的 componentUpdated 获取的是更新更新之后的
    - unbind ： 只调用一次，指令与元素解绑时调用

  - 生命钩子函数的参数

    - el ： 指令所绑定的 DOM 元素
    - binding：一个对象，可以获取指令的值等信息

- **局部注册**

  - 只能在当前组件中使用

- **注意事项：**

  - 在模板中使用自定义指令必须加上 `v-` 前缀
  - 对于驼峰命名法的自定义指令，在使用的时候使用 `-` 连接
  - 全局注册的自定义指令可以在任何组件中使用
  - 组件内注册的自定义指令只能在被该组件管理的模拟中使用

#### 使用

#### 函数简写

在很多时候，你可能想在 `bind` 和 `update` 时触发相同行为，而不关心其它的钩子。比如这样写:

```javascript
Vue.directive("color-swatch", function (el, binding) {
  el.style.backgroundColor = binding.value;
});
```

---

## 09-组件

## --什么是组件

**组件**： 组件的出现，就是为了拆分 Vue 实例的代码量的，能够让我们以不同的组件，来划分不同的功能模块，将来我们需要什么样的功能，就可以去调用对应的组件即可。

### 组件化的开发思想

---

## --模块化和组件化的区别

- 模块化：是从代码逻辑的角度进行划分的；方便代码分层开发，保证每个功能模块的职能单一
- 组件化：是从 UI 界面的角度进行划分的；前端的组件化，方便 UI 组件的重用

---

## --通过 **组件库**（Element 等） 来体验组件的威力

- Element 是基于 Vue 开发的一个知名的第三方组件库，能够帮炸更加快速构建应用
- [官方网址](element.eleme.cn)：

---

## --组件注册

### 全局组件的注册和使用

**写法：**

```javascript
// 组件的注册
Vue.component(组件的名称,{
    data: 组件的数据,
    template:组件的模板内容
})

 // 组件的使用
 <组件的名称> </组件的名称>
```

```javascript
<body>
    <div id="app">
        // 组件的使用
        <account> </account>
    </div>
    <script>
        //定义、注册组件：第一个参数是组件的名称（标签名），第二个参数是组件的定义
        Vue.component('account', {
            template: '<div><h2>登录页面</h2> <h3>注册页面</h3></div>'   // template 是 Vue 中的关键字，不能改。
        });
        new Vue({
            el: '#app'
        });
    </script>
</body>

```

**写法【荐】**

> 上面的写法并不是很智能，因为在定义模板的时候，没有智能提示和高亮，容易出错。我们不妨来看看写法三。

写法：将组件内容定义到 template 标签中去。

代码如下：

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="vue2.5.16.js"></script>
</head>
<body>
    <!-- 定义模板 -->
    <template id="myAccount">
        <div>
            <h2>登录页面</h2>
            <h3>注册页面</h3>
        </div>
    </template>
    <div id="app">
        <!-- 使用组件 -->
        <account> </account>
    </div>
    <script>
        //定义、注册组件
        Vue.component('account', {
            template: '#myAccount'    // template 是 Vue 中的关键字，不能改。
        	data: function () {
                return {
                    count: 0
                }
            }
			// ... 其他选项
        });
        new Vue({
            el: '#app'
        });
    </script>
</body>
</html>
```

**组件注册的注意事项**

- **一个组件的 `data` 选项必须是一个函数**，因此每个实例可以维护一份被返回对象的独立的拷贝：

  ```javascript
  data: function () {
    return {
      count: 0
    }
  }
  ```

- **组件模板的内容必须是单个跟元素**：意思就是说最好用个 <div></div>等类似标签包裹起来。 和 el 选项绑定 元素 是一个道理

- **组件模板内容可以是模板字符串**（模板字符串需要浏览器提供支持 es6 语法） `

  - ```javascript
    //  2、组件模板必须是单个根元素
    //  3、组件模板的内容可以是模板字符串
    template: `
        <div>
            <button @click="handle">点击了{{count}}次</button>
            <button>测试123</button>
            #  6 在字符串模板中可以使用驼峰的方式使用组件
            <HelloWorld></HelloWorld>
        </div>
    ` ,
    ```

- **组件名称的命名方式**

  - 如果使用驼峰式命名组件，那么在使用组件时候不能用大写字母 必须全部小写并且用 `-`连接

### 局部组件的注册和使用

我们还可以在一个 Vue 实例的内部或者全局组件内部中定义**私有组件**，这样做的时候，只有当前这个 Vue 实例或者全局组件内部中才可以使用这个组件。

```javascript
<body>
    <div id="app">
        <!-- 使用Vue实例内部的私有组件 -->
        <my-login></my-login>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {},
            components: { // 定义、注册Vue实例内部的私有组件
                myLogin: {
                    template: '<h3>这是私有的login组件</h3>'
                }
            }
        });
    </script>
</body>

// 在 components 选项中 定义 局部组件
```

---

## --组件间的数据交互

参考： https://www.cnblogs.com/vickylinj/p/10877765.html

### 父组件向子组件传递数据 Props-Dowm

- 1.父组件发送的形式是以属性的形式绑定值到子组件身上 `v-bind`。
- 2.然后子组件用属性 props 接收
- 3.在 props 中使用驼峰形式，模板中需要使用短横线的形式字符串形式的模板中没有这个限制

```javascript
<body>
    <div id="app">
        <!-- 第三步：父组件在引用子组件的时候， 通过 属性绑定（v-bind:）的形式,  -->
        <!--   把 需要传递给 子组件的数据，以属性绑定的形式，传递到子组件内部，供子组件使用 -->
        <component1 v-bind:parent-msg="msg"></component1>
    </div>
    <!-- 定义子组件的模板 -->
    <template id="myTemplate">
        <!-- 第二步：在子组件的模板中，使用props中的属性 -->
        <h2 @click="change">我是子组件。我想使用父组件中的数据parentMsg： {{ parentMsg }}</h2>
    </template>
    <script>
        // 创建 Vue 实例，得到 ViewModel
        var vm = new Vue({
            el: '#app',
            data: {
                msg: '父组件中的数据123'
            },
            components: {
                // 子组件默认无法访问到 父组件中的 data 中的数据 和 methods 中的方法
                component1: { //将子组件的名称定义为 component1
                    template: '#myTemplate',
                    data() { // 注意： 子组件中的 data 数据，并不是通过 父组件传递过来的，而是子组件自身私有的，比如： 子组件通过 Ajax ，请求回来的数据，都可以放到 data 身上；
                        // data 上的数据，都是可读可写的
                        return {
                            title: '子组件私有的数据 title',
                            content: '子组件私有的数据 content'
                        }
                    },
                    // 注意： 组件中的 所有 props 中的数据，都是通过 父组件 传递给子组件的
                    // props 中的数据，都是只读的，无法重新赋值
                    props: ['parentMsg'], // 第一步：把父组件传递过来的 parentMsg 属性，先在 props 数组中，定义一下，这样，才能使用这个数据
                    directives: {},
                    filters: {},
                    components: {},
                    methods: {
                        change() {
                            // 下面这行会报错，因为子组件不要直接修改父组件中的data数据
                            // this.parentMsg = '被修改了'
                        }
                    }
                }
            }
        });
    </script>
</body>
</html>
```

**子组件中，data 中的数据和 props 中的数据的区别**：

- 子组件中的 data 数据，并不是通过 父组件传递过来的，而是子组件自身私有的，比如： 子组件通过 Ajax ，请求回来的数据，都可以放到 data 身上。props 中的数据，都是通过 父组件 传递给子组件的。

* data 中的数据是可读可写的；**props 中的属性只是可读的**，无法重新赋值，重新赋值会报错（也就是说，**子组件不要直接去修改父组件中的数据**）。

### 父组件将方法传递给子组件 Events-Up

> **父组件通过事件绑定机制，将父组件的方法传递给子组件**

- 1.在父组件中定义方法
- 2.在子组件内部调用父组件的方法

```javascript
<body>
    <div id="app">
        <!-- 父组件向子组件 传递 方法，是通过 事件绑定机制； v-on。当我们自定义了 一个 事件属性 parent-show（这个地方不能用驼峰命名）之后，-->
        <!-- 那么，子组件就能够，通过 emit 来调用 传递进去的 这个 方法了 -->
        <!-- 【!第一步!】。意思是说，`show`是父组件的方法名，`parent-show`是自定义的时间属性，稍后要在子组件中用到 -->
        <component1 @parent-show='show'></component1>
    </div>
    <!-- 定义子组件的模板 -->
    <template id="myTemplate">
        <!-- 【!第二步!】按照正常的写法来：点击按钮，调用子组件的方法 -->
        <div @click="childClick">我是子组件，点击调用父组件的方法</div>
    </template>
    <script>
        // 创建 Vue 实例，得到 ViewModel
        var vm = new Vue({
            el: '#app',
            data: { //父组件的data
                // msg: '父组件中的数据'
            },
            methods: {
                show: function () { // 定义父组件的show方法
                    console.log('父组件提供的方法');
                }
            },
            components: {
                component1: { //将子组件的名称定义为 component1
                    template: '#myTemplate',
                    data() { // 子组件的data
                        return {
                            // content: '子组件私有的数据 content'
                        }
                    },
                    props: [''],
                    directives: {},
                    filters: {},
                    components: {},
                    methods: {
                        childClick() {
                            // 当点击子组件的按钮时，如何 拿到 父组件传递过来的 func 方法，并调用这个方法？？？
                            //  emit 英文原意： 是触发，调用、发射。意思是，触发父组件的方法
                            // 【!第三步!】 在子组件的方法中，通过 emit 触发父组件的方法
                            this.$emit('parent-show');
                        }
                    }
                }
            }
        });
    </script>
</body>
```

---

### 子组件向父组件传递数据

如果要实现**子组件向父组件传值**，代码是类似的，我们只需要在子组件通过`emit`触发父组件的方法时，把子组件的参数带出去就可以了。代码如下。

- 子组件用`$emit()`触发事件
- `$emit()` 第一个参数为 自定义的事件名称 第二个参数为需要传递的数据
- 父组件用 v-on 监听子组件的事件

```javascript
<body>
    <div id="app">
        <component1 @parent-show='show'></component1>
    </div>
    <!-- 定义子组件的模板 -->
    <template id="myTemplate">
        <h2 @click="childClick">我是子组件，点击调用父组件的方法</h2>
    </template>
    <script>
        // 创建 Vue 实例，得到 ViewModel
        var vm = new Vue({
            el: '#app',
            data: { //父组件的data
                // msg: '父组件中的数据'
            },
            methods: { // 定义父组件的方法
                show: function (arg1, arg2) { //【第二步】父组件里放两个参数，这个两个参数就代表着子组件中的`child 123`、`child 789`
                    console.log('父组件提供的方法');
                    console.log('打印子组件传递过来的参数。参数一：' + arg1 + '，参数二：'+ arg2);
                }
            },
            components: {
                component1: { //将子组件的名称定义为 component1
                    template: '#myTemplate',
                    data() { // 子组件的data
                        return {
                            // content: '子组件私有的数据 content'
                        }
                    },
                    props: [''],
                    directives: {},
                    filters: {},
                    components: {},
                    methods: {
                        childClick() {
                            // 子组件如果要给父组件传递参数，在触发 emit 的时候，通过参数的形式带出去就可以了
                            // 【第一步】在子组件里，我们带两个参数出去，传给父组件
                            this.$emit('parent-show', 'child 123', 'child 789');
                        }
                    }
                }
            }
        });
    </script>
</body>
```

---

### 非父子组件的传值

- 兄弟之间传递数据需要借助于事件中心，通过事件中心传递数据
  - 提供事件中心 var hub = new Vue()
- 传递数据方，通过一个事件触发 hub.\$emit(方法名，传递的数据)
- 接收数据方，通过 mounted(){} 钩子中 触发 hub.\$on()方法名
- 销毁事件 通过 hub.\$off()方法名销毁之后无法进行传递数据

---

- 1.单独的事件中心管理组件间的通信

  - ```javascript
    var eventHub = new Vue();
    ```

- 2.监听事件与销毁事件

- ```javascript
  eventHub.$on("add-todo", addTodo);

  eventHub.$off("add-todo");
  ```

- 3.触发事件

  - ```javascript
    eventHub.$emit("add-todo", id);
    ```

- 例子：

  - ```javascript
    <div id="app">
       <div>父组件</div>
       <div>
         <button @click='handle'>销毁事件</button>
       </div>
       <test-tom></test-tom>
       <test-jerry></test-jerry>
     </div>
     <script type="text/javascript" src="js/vue.js"></script>
     <script type="text/javascript">
       /*
         兄弟组件之间数据传递
       */
       //1、 提供事件中心
       var hub = new Vue();

       Vue.component('test-tom', {
         data: function(){
           return {
             num: 0
           }
         },
         template: `
           <div>
             <div>TOM:{{num}}</div>
             <div>
               <button @click='handle'>点击</button>
             </div>
           </div>
         `,
         methods: {
           handle: function(){
             //2、传递数据方，通过一个事件触发hub.$emit(方法名，传递的数据)   触发兄弟组件的事件
             hub.$emit('jerry-event', 2);
           }
         },
         mounted: function() {
          // 3、接收数据方，通过mounted(){} 钩子中  触发hub.$on(方法名
           hub.$on('tom-event', (val) => {
             this.num += val;
           });
         }
       });
       Vue.component('test-jerry', {
         data: function(){
           return {
             num: 0
           }
         },
         template: `
           <div>
             <div>JERRY:{{num}}</div>
             <div>
               <button @click='handle'>点击</button>
             </div>
           </div>
         `,
         methods: {
           handle: function(){
             //2、传递数据方，通过一个事件触发hub.$emit(方法名，传递的数据)   触发兄弟组件的事件
             hub.$emit('tom-event', 1);
           }
         },
         mounted: function() {
           // 3、接收数据方，通过mounted(){} 钩子中  触发hub.$on()方法名
           hub.$on('jerry-event', (val) => {
             this.num += val;
           });
         }
       });
       var vm = new Vue({
         el: '#app',
         data: {

         },
         methods: {
           handle: function(){
             //4、销毁事件 通过hub.$off()方法名销毁之后无法进行传递数据
             hub.$off('tom-event');
             hub.$off('jerry-event');
           }
         }
       });
     </script>
    ```

---

## --组件插槽

- 父组件向子组件传递 `模板`中标签的内容

组件插槽基本用法

### 匿名插槽

1.插槽位置

```javascript
Vue.component("alert-box", {
  template: `
    <div class="demo-alert-box">
    <strong>Error!</strong>
    <slot></slot>
    </div>
`,
});
```

2.插槽的内容

```javascript
<alert-box>Something bad happened.</alert-box>
```

---

### 具名插槽

1.插槽定义

```javascript
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
```

2.插槽内容

```javascript
<base-layout>
  <h1 slot="header">标题内容</h1>
  <p>主要内容1</p>
  <p>主要内容2</p>
  <p slot="footer">底部内容</p>
</base-layout>
```

---

### 作用域插槽

应用场景：父组件可以对子组件的内容加工处理

---

## 过滤器

### 局部组件的过滤器

- 在 组件内部的过滤器只能在本组件内部使用

```vue
<template>
  <!-- 局部过滤器 -->
  <p>{{ message | capitalize }}</p>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      message: "ABcdEfG",
    };
  },
  filters: {
    capitalize: function (value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
      // charAt(0) 获取首字母 toUpperCase()并且大写 + 其他的字符 并且小写
    },
  },
};
// 这里data 中的 message 会 经过 filters 的 capitalize 函数 处理后 再渲染
</script>
```

### 全局过滤器

- 在创建 Vue 实例之前全局定义过滤器

```js
// 全局过滤器
Vue.filter('allCapitalize', (value) => {
    if(!value) return ''
    value = value.toString()
    return value.charAt(0).toLowerCase() + value.slice(1).toUpperCase()
    // charAt(0) 获取首字母 toUpperCase()并且大写 + 其他的字符 并且小写
})

// 在其他组件中 使用
<template>
    <!-- 全局过滤器 -->
	<p>{{message | allCapitalize}}</p>
</template>
```
