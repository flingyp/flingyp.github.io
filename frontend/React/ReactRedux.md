---
outline: deep
---

## React Redux

`React-Redux`这是一个 React 生态中常用组件，它可以简化`Redux`流程

`React-Redux` 规定，所有的 `UI` 组件都由用户提供，容器组件则是由 `React-Redux` 自动生成。也就是说，用户负责视觉层，状态管理则是全部交给它。

`UI` 组件负责 `UI` 的呈现，容器组件负责管理数据和逻辑

安装 `react-redux`之前确保安装了 `redux`

- `npm install react-redux --save`

## 组件

`React-Redux `将所有组件分成两大类：`UI` 组件（Presentational Component）和容器组件（Container Component）。

### UI 组件

- 只负责 UI 的呈现，不带有任何业务逻辑
- 没有状态（即不使用`this.state`这个变量）
- 所有数据都由参数（`this.props`）提供
- 不使用任何 Redux 的 API

### 容器组件

- 负责管理数据和业务逻辑，不负责 UI 的呈现
- 带有内部状态
- 使用 Redux 的 API

## Connect

`React-Redux` 提供 `connect` 方法，用于从 UI 组件生成容器组件。`connect` 的意思，就是将这两种组件连起来。

```js
import { connect } from "react-redux";
const VisibleTodoList = connect()(TodoList);
// 上面代码中，TodoList是 UI 组件，VisibleTodoList就是由 React-Redux通过connect方法自动生成的容器组件
```

因为没有定义业务逻辑，上面的容器组件毫无意义，只是 UI 组件的一个单纯的包装层。为了定义业务逻辑，需要给出下面两方面的信息。

```
（1）输入逻辑：外部的数据（即state对象）如何转换为 UI 组件的参数

（2）输出逻辑：用户发出的动作如何变为 Action 对象，从 UI 组件传出去。
```

所以， conect 方法的完整 API 如下

```js
import { connect } from "react-redux";

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);
// mapStateToProps和mapDispatchToProps。它们定义了 UI 组件的业务逻辑。前者负责输入逻辑，即将state映射到 UI 组件的参数（props），后者负责输出逻辑，即将用户对 UI 组件的操作映射成 Action
```

## mapStateToProps()

> `mapStateToProps`是一个函数。它的作用就是像它的名字那样，**建立一个从（外部的）`state`对象到（UI 组件的）`props`对象的映射关系。**
>
> 作为函数，`mapStateToProps`执行后应该返回一个对象，里面的每一个键值对就是一个映射。
>
> `mapStateToProps`的第一个参数总是`state`对象，还可以使用第二个参数，代表容器组件的`props`对象。

```jsx
const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
  };
};
// mapStateToProps会订阅 Store，每当state更新的时候，就会自动执行，重新计算 UI 组件的参数，从而触发 UI 组件的重新渲染
```

## mapDispatchToProps()

> `mapDispatchToProps`是`connect`函数的第二个参数，用来建立 UI 组件的参数到`store.dispatch`方法的映射。
>
> 也就是说，它定义了哪些用户的操作应该当作 Action，传给 Store。它可以是一个函数，也可以是一个对象。
>
> 如果 是一个函数 会有两个参数。 `dispatch` 和 `ownProps`（容器组件的`props`对象）

```js
// 函数 
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch({type: 'SET_VISIBILITY_FILTER', filter: ownProps.filter});
    }
  }
}
// 对象
const mapDispatchToProps = {
  onClick: (filter) => { type: 'SET_VISIBILITY_FILTER', filter: filter }
}
```

## **Provider 组件**

> connect 方法生成容器组件以后，需要让容器组件拿到 state 对象，才能生成 UI 组件的参数。
> React-Redux 提供 Provider 组件，可以让容器组件拿到 state。

```js
import { Provider } from "react-redux";
import { createStore } from "redux";
import todoApp from "./reducers";
import App from "./components/App";

let store = createStore(todoApp);

render(
  <Provider store={store}>
  	<App />
  </Provider>,
	document.getElementById("root")
);
// Provider在根组件外面包了一层，这样一来，App的所有子组件就默认都可以拿到state了
```
