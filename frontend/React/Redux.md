# Redux

## 安装

`npm install redux --save`

多数情况下，你还需要使用 [React 绑定库](http://github.com/gaearon/react-redux)和[开发者工具](http://github.com/gaearon/redux-devtools)。

```bash
npm install --save react-redux
npm install --save-dev redux-devtools
```

## Redux 的工作流程

![工作流程](https://upload-images.jianshu.io/upload_images/15943270-04acc99a381bf8fb.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/638/format/webp)

1. 首先，用户发出 Aciton

- `store.dispatch(action)`

2. 然后，Store 自动调用 Reducer，并且传入两个参数：当前 State 和收到的 Action。 Reducer 会返回新的 State 。

- `let nextState = todoApp(previousState, action);`

State 一旦有变化，Store 就会调用监听函数。

```
// 设置监听函数
store.subscribe(listener);
```

listener 可以通过 store.getState()得到当前状态。如果使用的是 React，这时可以触发重新渲染 View。

```js
function listerner() {
  let newState = store.getState();
  component.setState(newState);
}
```

## Store

> 数据仓库，保存数据的地方。
>
> 强调一下 **Redux 应用只有一个单一的 store**

Store 有以下职责：

- 维持应用的 state；
- 提供 [`getState()`](https://www.redux.org.cn/docs/api/Store.html#getState) 方法获取 state；
- 提供 [`dispatch(action)`](https://www.redux.org.cn/docs/api/Store.html#dispatch) 方法更新 state；
- 通过 [`subscribe(listener)`](https://www.redux.org.cn/docs/api/Store.html#subscribe) 注册监听器;
- 通过 [`replaceReducer(nextReducer)`](https://www.redux.org.cn/docs/api/Store.html#replaceReducer) 返回的函数注销监听器。

## State

> state 是个对象，数据仓库里的所有数据都放到一个 state 里

## Action

> 行为，触发数据改变的方法。

## Dispatch

> 将动作触发成方法

## Reducer

> 是个函数，通过获取动作，改变数据，生成个新 state。从而改变页面

## Redux DevTools 调试插件

1. 在谷歌浏览器下载 Redux DevTools 插件
2. 配置 Redux Dev Tools 插件
   - [Github 网址](https://github.com/zalmoxisus/redux-devtools-extension)

```js
// 只需要要 创建 store 仓库添加下面一条代码，就是最简单的配置
// 3. 创建 store 仓库
const store = createStore(
  reducer,
  ++window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
```

## Redux 基本编写流程

#### 1. 编写创建 store 仓库 (./store/index.js)

```js
// 1. 导入 createStore
import { createStore } from "redux";

// 2. 导入 reducers 纯函数 (想象成 图书管理员 用于派发数据)
import reducer from "./reducer";

// 3. 创建 store 仓库   (想象成 图书仓库)
let store = createStore(reducer);

export default store;
```

#### 2. 编写 reducer 纯函数 (./store/reducer.js)

```js
const defaultState = {}; // 用于设置 state 初始默认值

export default (state = defaultState, action) => {
  return state;
};
```

#### 3. 组件中获取获得 store 中的数据

> 有了 store 仓库，也有了数据，那如何获得 stroe 中的数据那？你可以在要使用的组件中，先引入 store。

```js
import store from './store/index'

// 然后可以通过 store.getState() 获取数据
// 可以在组件的 constructor(props) {} 打印结果
constructor(props) {
    super(props)
    console.log(store.getState())
}
```

#### 4. 组件中如何动态改变 store 中的数据

```jsx
// 举个例子：
// 当用户在 输入框 中不段改变输入的内容时 会触发 onChange 事件
<Input
    placeholder={this.state.inputValue}
    style={{ width:'250px', marginRight: '10px'}}
    onChange = {this.changeInputValue}
    value = {this.state.inputValue}
/>

changeInputValue(e) {
    // 通过e 实时获取输入框内容 e.target.value
    // 先回顾下Redux的工作流程。1. 重点： 建立一个 action 对象
    const action = {
        type: 'changeInput',
        value: e.target.value
    }
    // 2. 重点： 通过 store.dispatch()方法将 action对象 传递给 store。 然后 store 会自动 传递到 reducer
    // 因为 store 就是个 图书馆用于存放书的 而 reducer 比喻就是个 管理员 用于派发的书的。
    store.dispatch(action)
}


// 这时候 在 reducer.js 中 就可以对数据进行处理了
export default (state = defaultState, action) => {
    // 这里的 state 就是 store中存放的数据（前） 而 action 打印出来的就是 上面 的 action 对象
    console.log(state, action)
    // Reducer 里只能读取 state ， 不能直接改变 state。所以下面对 state 进行深度拷贝
    // 如果 action.type 和 上面的 type 对应 === changeInput，就会执行 if语句的代码
    if(action.type === 'changeInput') {
        let newState = JSON.parse(JSON.stringify(state)) // 对 state 深度拷贝
        // 把输入框的新内容 重新赋到 inputValue ， 再返回 到 store 重新存放。
        newState.inputValue = action.value
        return newState
    }
    return state
}
```

#### 5.store 中的数据值改变了后，但是视图层的内容没有发生改变

```jsx
// 在这个时候 需要用到一个 方法叫做 store.subscribe()， 方法接收一个函数。
// 官方解释： 添加一个变化监听器。每当 dispatch action 的时候就会执行，state 树中的一部分可能已经变化。你可以在回调函数里调用 getState() 来拿到当前 state。

this.storeChange = this.storeChange.bind(this)
store.subscribe(this.storeChange)

storeChange() {
    this.setState(store.getState())
}
// 就是当  每 store.dispatch(action) 的时候 就会执行这个 store.subscribe(this.storeChange) 方法， 方法中接收一个函数。 通过这个函数 我们可以  store.getState() 获取到修改后的 store 数据，避免出现 store 数据改变，视图层的数据没有发生变化的情况。
```

## 写 Redux 的小技巧

#### 把 Action types 单独 写入一个文件

> 写`Redux Action`的时候，我们写了很多 Action 的派发，产生了很多`Action Types`，如果需要`Action`的地方我们就自己命名一个`Type`,会出现两个基本问题：
>
> - 这些 Types 如果不统一管理，不利于大型项目的服用，设置会长生冗余代码。
> - 因为`Action`里的`Type`，一定要和`Reducer`里的`type`一一对应在，所以这部分代码或字母写错后，浏览器里并没有明确的报错，这给调试带来了极大的困难。

建议把 Action Type 拆分出来， 把 type 变量名 放在一个文件统一管理

```js
// 例子：
export const TYPE_1 = "type1";
export const TYPE_2 = "type2";
export const TYPE_3 = "type3";
```

#### 把 Action 也单独写入一个文件

> 组件里有很多 Action，并且分散才程序的各个地方，如果庞大的工程，这势必会造成严重的混乱

拿自己的 todo 案例：

```jsx
// 在组件引入
import {changeInputAction, addItemAction, deleteItemAction} from './store/actionCreators'

changeInputValue(e) {
    // 实时获取输入框内容 e.target.value
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
}

storeChange() {
    this.setState(store.getState())
}

clickBtn() {
    const action = addItemAction()
    store.dispatch(action)
}

deleteItem(index) {
    // 获取 index
    const action = deleteItemAction(index)
    store.dispatch(action)
}
```

```js
// Action 文件  来管理 action 对象
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from "./actionTypes";

export const changeInputAction = (value) => {
  return {
    type: CHANGE_INPUT,
    value,
  };
};

export const addItemAction = () => {
  return {
    type: ADD_ITEM,
  };
};

export const deleteItemAction = (index) => {
  return {
    type: DELETE_ITEM,
    index,
  };
};
```

## Redux 三个小坑

### Store 必须是唯一的

```
在一个文件中用createStore()方法，声明了一个store，之后整个应用都得使用这个store
```

### 只有 Store 能改变自己的数据内容， Reducer 不能改变

```
很多小伙伴会认为把业务逻辑写在了Reducer中，那改变state值的一定是Reducer，
其实不然，在Reducer中我们只是作了一个返回，返回到了store中，并没有作任何改变。

Reudcer只是返回了更改的数据，但是并没有更改store中的数据，
store拿到了Reducer的数据，自己对自己进行了更新。
```

### Reducer 必须是纯函数

> 纯函数的定义：一个函数的返回结果只依赖其参数，并且执行过程中没有副作用
>
> 函数执行的过程中对外部产生了可观察的变化，我们就说函数产生了副作用。
> 例如修改外部的变量、调用 DOM API 修改页面，发送 Ajax 请求、调用 window.reload 刷新浏览器甚至是 console.log 打印数据，都是副作用

**永远不要**在 reducer 里做这些操作：

- 修改传入参数；
- 执行有副作用的操作，如 API 请求和路由跳转；
- 调用非纯函数，如 `Date.now()` 或 `Math.random()`。

## Redux 中间件

> 如果用过 express.js 之类的 web 框架，对中间件（Middleware）这个概念可能不会陌生。**中间件**其实就是一种独立运行于各个框架组件之间的胶水代码。在 Express.js 或 Koa 等框架中，中间件通常是运行在收到请求到处理请求之间，可是实现日志记录、身份认证等预处理操作。而在 Redux 里，中间件是运行在 action 发送出去，到达 reducer 之间的一段代码。

### redux-thunk 中间件

[Github 地址](https://github.com/reduxjs/redux-thunk)

#### 安装

`cnpm install --save redux-thunk`

#### 配置 redux-thunk 中间件

1. 如果你没有 **Redux DevTools 调试插件** 官方提供的配置步骤就是正确的

- 要启用 Redux Thunk，请使用 applyMiddleware（）

```js
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers/index";

// Note: this API requires redux@>=3.1.0
const store = createStore(reducer, applyMiddleware(thunk));
```

2. 如果你之前配置了 **Redux DevTools 调试插件**

`const store = createStore(rootReducer, applyMiddleware(thunk));`

- createStore() 函数的第二个参数就是 Redux DevTools 的 配置
  - `window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()`
- 这个时候 官方的配置就没有用了

**方法：**

1. 如果想两个同时使用，需要使用**增强函数**。使用增加函数前需要先引入`compose`

   1. `import { createStore , applyMiddleware ,compose } from 'redux'`

2. 然后利用`compose`创造一个增强函数，就相当于建立了一个链式函数，代码如下:

   1. ```js
      const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;
      ```

3. 有了增强函数后，就可以把`thunk`加入进来了，这样两个函数就都会执行了。

   1. `const enhancer = composeEnhancers(applyMiddleware(thunk))`

4. 这时候直接在`createStore`函数中的第二个参数，使用这个`enhancer`变量就可以了，相当于两个函数都执行了。

   1. `const store = createStore( reducer, enhancer) // 创建数据存储仓库`

5. **也许对增加函数还不能完全理解，其实你完全把这个想成固定代码，直接使用就好，**

全部代码：

```js
import { createStore, applyMiddleware, compose } from "redux"; //  引入createStore方法
import reducer from "./reducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducer, enhancer); // 创建数据存储仓库
export default store; //暴露出去
```

#### Redux-thunk 基本使用方法

> 以前`actionCreators.js`都是定义好的 action，根本没办法写业务逻辑，有了`Redux-thunk`之后，可以把`TodoList.js`中的`componentDidMount`业务逻辑放到这里来编写。也就是把向后台请求数据的代码放到`actionCreators.js`文件里。那我们需要引入`axios`,并写一个新的函数方法。（以前的 action 是对象，现在的 action 可以是函数了，这就是`redux-thunk`带来的好处）

[理解](https://zhuanlan.zhihu.com/p/85403048)

使用步骤：

1. 在 平时创建 action 文件中 写个 action 但是 这次**return**的是 **函数** 不是对象
2. **函数内部就是用于处理一些异步操作**
3. 在组件逻辑部分里执行这个 action 后 接收一个返回值 就是 上面的**函数**。 再 store.dispatch(action) 回去执行 action 函数的代码

举个列子：

```js
// 在 actionCreators 文件中
// 使用 Redux-thunk 后 现在的 action可以是个函数
export const getSongData = () => {
  return (dispatch) => {
    axios.get("http://120.25.163.140:3000/playlist/hot").then((res) => {
      const data = res.data.tags;
      console.log(data);
      // 最后数据 data 是通过另外一个 action 对象 给 dispatch 回 store
      dispatch(songData(data));
    });
  };
};

export const songData = (song) => {
  return {
    type: SONG_DATA,
    song,
  };
};

// 在 reducer.js 文件中
if (action.type === SONG_DATA) {
  let newState = JSON.parse(JSON.stringify(state)); // 对 state 深度拷贝
  newState[action.type] = action.song;
  return newState;
}
```

```jsx
// 在  组件的逻辑文件中 componentDidMount 生命函数里
componentDidMount() {
    // 执行 上面的函数 会 return 一个 函数回来 就是这个 action
    const action = getSongData()
    console.log(action)
    //  这里的 store.dispatch(action) 相当于 执行了 action这个函数
    store.dispatch(action)
}
```

### redux-saga 中间件

[Github 地址](https://github.com/redux-saga/redux-saga)

#### 安装

`cnpm install redux-saga --save`

#### 配置 redux-saga 中间件

1. 如果没有配置了 **Redux DevTools 调试插件**

```js
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga"; // +
// redux-saga希望你把业务逻辑单独写一个文件
// 在 sagas文件中 最先基本的配置 (此处必须使用Generator函数)
import helloSaga from "./sagas"; // +
const sagaMiddleware = createSagaMiddleware(); // +
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware) // +
);
sagaMiddleware.run(helloSaga); // +
```

2. 如果有配置了 **Redux DevTools 调试插件**

```js
// 先再 store的index文件中引入 redux-saga
import createSagaMiddleware from "redux-saga"; // +
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import todoSagas from "./sagas"; // +

const sagaMiddleware = createSagaMiddleware(); // +
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware)); // +
const store = createStore(reducer, enhancer);
sagaMiddleware.run(todoSagas); // +

export default store;
```

```js
// redux-saga希望你把业务逻辑单独写一个文件
// 在 sagas文件中 最先基本的配置 (此处必须使用Generator函数)
function* mySaga() {}
export default mySaga;
```
