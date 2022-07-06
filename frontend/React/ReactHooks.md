# ReactHooks

## 介绍

> `React Hooks`就是**用函数的形式代替原来的继承类的形式**，并且**使用预函数的形式管理`state`**，有 Hooks 可以不再使用类的形式定义组件了。这时候你的认知也要发生变化了，原来把组件分为有状态组件和无状态组件，有状态组件用类的形式声明，无状态组件用函数的形式声明。那**现在所有的组件都可以用函数来声明了**。
>
> hooks 只是多了一种写组件的方法，使编写一个组件更简单更方便，同时可以自定义 hook 把公共的逻辑提取出来，让逻辑在多个组件之间共享。

## React Hooks 编写形式的对比

> 用一个最简单的有状态组件。当点击按钮时，点击数量不断增加。

### 原始写法

```jsx
import React, { Component } from "react";
class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <p>你点击的次数{this.state.count}</p>
        <button onClick={this.addCount.bind(this)}>请点击</button>
      </div>
    );
  }
  addCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }
}
export default Example;
```

### React Hooks 写法

```jsx
import React, { useState } from "react";
function Example() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>你点击的次数{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        请点击
      </button>
    </div>
  );
}
export default Example;
```

## useState 的介绍和用法

### 介绍

> 是 react 自带的一个 hook 函数，它的作用是用来声明状态变量。
>
> [官方文档](https://zh-hans.reactjs.org/docs/hooks-state.html)

### useState 的用法

1. 声明
   1. `import React, { useState } from 'react';`
2. 读取
   1. `const [ age, setAge ] = useState(18)`
3. 修改
   1. 调用读取的第二个变量(是个方法，用于设置修改第一个变量的值)

```jsx
import React, { useState } from "react";

function Example2() {
  const [age, setAge] = useState(18);
  const [sex, setSex] = useState("男");
  const [name, setName] = useState("xiaopeng");
  console.log(useState); // 打印出 useState是个函数
  // useState(initialState) {
  //   var dispatcher = resolveDispatcher();
  //   return dispatcher.useState(initialState);
  // }
  console.log(useState(18)); // 调用 useState 函数返回值是个数组
  // [18, fn()]
  return (
    <div>
      <p>今年:{age}岁</p>
      <p>性别:{sex}</p>
      <p>姓名:{name}</p>
    </div>
  );
}
export default Example2;
```

## useEffect 介绍和用法。代替生命周期函数

> 在**用`Class`制作组件时，经常会用生命周期函数**，来处理一些额外的事情（副作用：和函数业务主逻辑关联不大，特定时间或事件中执行的动作，比如 Ajax 请求后端数据，添加登录监听和取消登录，手动修改`DOM`等等）。**在`React Hooks`中也需要这样类似的生命周期函数，比如在每次状态（State）更新时执行，它为我们准备了`useEffect`**

### 原始生命周期函数的使用

```jsx
import React, { Component } from "react";
class Example3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  // 组件被挂载
  componentDidMount() {
    console.log(`ComponentDidMount=>You clicked ${this.state.count} times`);
  }
  // 组件被更新
  componentDidUpdate() {
    console.log(`componentDidUpdate=>You clicked ${this.state.count} times`);
  }
  render() {
    return (
      <div>
        <p>你点击的次数{this.state.count}</p>
        <button onClick={this.addCount.bind(this)}>请点击</button>
      </div>
    );
  }
  addCount() {
    this.setState({ count: this.state.count + 1 });
  }
}
export default Example3;
// 页面初始被挂载时会执行 componentDidMount 生命周期函数。当我们点击 请点击 按钮时组件被更新 会执行 componentDidUpdate 生命周期函数
```

### 用 useEffect 函数代替生命周期函数

```jsx
import React, { useState, useEffect } from "react"; // 1. 先引入 useEffect

function Example() {
  const [count, setCount] = useState(0);
  // 页面初始被挂载时 会调用 useEffect 函数。 当我们点击 请点击 按钮时组件被更新 也会执行 useEffect 函数
  useEffect(() => {
    console.log(`useEffect=>You clicked ${count} times`);
  });

  return (
    <div>
      <p>你点击的次数{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        请点击
      </button>
    </div>
  );
}
export default Example;
```

总结：

1. React 首次渲染和之后的每次渲染都会调用一遍`useEffect`函数，而之前我们要用两个生命周期函数分别表示首次渲染(componentDidMonut)和更新导致的重新渲染(componentDidUpdate)。

2. useEffect 中定义的函数的执行不会阻碍浏览器更新视图，也就是说这些函数时异步执行的，而`componentDidMonut`和`componentDidUpdate`中的代码都是同步执行的。个人认为这个有好处也有坏处吧，比如我们要根据页面的大小，然后绘制当前弹出窗口的大小，如果时异步的就不好操作了。

## useEffect 实现组件解绑 componentWillUnmount 生命周期函数

总结：`useEffect`的第二个参数，它是一个数组，数组中可以写入很多状态对应的变量，意思是当变量状态值发生变化时，我们才进行解绑。但是当传空数组`[]`时，就是当组件将被销毁时才进行解绑，这也就实现了`componentWillUnmount`的生命周期函数。

例子： 这里使用 React-Router 路由为例子

```jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function Index() {
  useEffect(() => {
    console.log("欢迎来到index页面");

    return () => {
      console.log("离开 index 页面");
    };
  }, []);

  return <h2>yyblog/vuepress.top</h2>;
}
function List() {
  useEffect(() => {
    console.log("欢迎来到list页面");

    return () => {
      console.log("离开 list 页面");
    };
  }, [count]);

  return <h2>List-Page</h2>;
}
// 如果这里不在 useEffect方法里加 第二个参数 [] 空数组的时候。就会出现当我们点击 Example 组件的按钮时也会 执行useEffect 里的 return 的函数实现解绑。
// 如果我们想每次 count 发生变化， 我们都进行解绑 能执行 useEffect 里的 return 的函数。只需要在第二个参数的数组加入count 变量就行了。
function Example() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>你点击的次数{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        请点击
      </button>

      <Router>
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/list/">列表</Link>
          </li>
        </ul>
        <Route path="/" exact component={Index} />
        <Route path="/list/" component={List} />
      </Router>
    </div>
  );
}
export default Example;
```

## useContext 父子组件传值

这里以计数器为例子：

1. 在父组件 导入 **createContext 函数** 用于创建 context
2. 调用 **createContext 函数** 得到一个组件
   1. `const CountConext = createContext()`
3. 使用这个组件， 组件内部包裹的就是子组件
4. 这里 还要把这个 `CountConext` 创建的组件导出

```jsx
// 1.在父组件 导入 createContext函数 用于创建 context
import React, { useState, createContext } from "react";
import Counter from "./Example4child";
// 2. 调用  createContext函数 得到一个组件
const CountConext = createContext();

function Example4() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>你点击的次数{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        请点击
      </button>
      {/3. 使用这个 组件.Provider ， 组件内部包裹的就是子组件/}
      <CountConext.Provider value={count}>
        <Counter />
      </CountConext.Provider>
    </div>
  );
}
export { Example4, CountConext };
```

就相当于把**`count`变量**允许跨层级实现传递和使用了（也就是实现了上下文），**当父组件的`count`变量发生变化时，子组件也会发生变化**。

5. 在子组件中使用 useContext 接收上下文变量。 引入 `useContext`
   1. `import React, { useContext } from 'react';`
6. 再引入 父组件的 `CountConext`
   1. `import { CountConext } from './Example4'`
7. 在组件 使用 `useContext(CountConext)` 来接收父组件传递的值

```jsx
import React, { useContext } from "react";
import { CountConext } from "./Example4";

function Counter() {
  const count = useContext(CountConext);
  return <h2>{count}</h2>;
}
export default Counter;
```

## useReducer 介绍和使用

> 了解 reducer 的含义后，就可以讲 useReducer 了，它也是**React hooks 提供的函数**，可以增强我们的`Reducer`，实现类似 Redux 的功能。

以计数器为例子：

```jsx
import React, { useReducer } from "react";

function ReducerDemo() {
  const [count, dispatch] = useReducer((state, action) => {
    switch (action) {
      case "add":
        return state + 1;
      case "sub":
        return state - 1;
      default:
        return state;
    }
  }, 0);

  return (
    <div>
      <h2>现在的分数是{count}</h2>
      <button onClick={() => dispatch("add")}>增加</button>
      <button onClick={() => dispatch("sub")}>减少</button>
    </div>
  );
}
export default ReducerDemo;
```

## useMemo 优化性能

这里还是举例子来说明，更容易明白

```jsx
import React, { useState, useMemo } from "react";
function Example7() {
  const [xiaohong, setXiaohong] = useState("小红待客状态");
  const [zhiling, setZhiling] = useState("志玲待客状态");

  return (
    <>
      <button
        onClick={() => {
          setXiaohong(new Date().getTime() + "小红");
        }}
      >
        小红
      </button>
      <button
        onClick={() => {
          setZhiling(new Date().getTime() + ",志玲向我们走来了");
        }}
      >
        志玲
      </button>
      <ChildComponent xiaohong={xiaohong} zhiling={zhiling}></ChildComponent>
    </>
  );
}
function ChildComponent({ xiaohong, zhiling }) {
  function changeXiaohong(name) {
    console.log("她来了，她来了。");
    return name + ",小红向我们走来了";
  }
  const actionXiaohong = useMemo(() => changeXiaohong(xiaohong), [xiaohong]);
  return (
    <div>
      <div>{actionXiaohong}</div>
      <div>{zhiling}</div>
    </div>
  );
}
export default Example7;
```

```
这里 Example7 为父组件  ChildComponent 为子组件。
当点击父组件的两个按钮 小红 和 志玲时， xiaohong 和 zhiling 这两个变量的值都会改变。
父组件会把这两个变量传递给子组件 ChildComponent
子组件 ChildComponent 定义了一个函数 changeXiaohong。
每次传递到子组件的 xiaohong 这个变量都会在 这个函数进行加工处理，再显示。
这样会出现一个问题： 无论点击那个按钮都会触发子组件更新，也就会执行子组件的 changeXiaohong函数，但是这个函数只和xiaohong 变量有关 和 zhiling 这个变量无关。

也就是说 在我们点击 小红按钮的时候 才会去执行 changeXiaohong(xiaohong) 这条语句， 再点击 志玲按钮时 不会去执行changeXiaohong(xiaohong) 这条语句。 解决优化性能

解决方法useMemo()： const actionXiaohong = useMemo(()=>changeXiaohong(xiaohong), [xiaohong])
 再第二个参数 数组里 放了个 xiaohong 的变量，代表只有 xiaohong这个变量改变了才会执行。
```

## useRef 获取 DOM 元素

举例子为例：

```jsx
import React, { useRef } from "react"; // 1. 引入 useRef

function Exapmple8() {
  // 2. 调用 useRef()
  const inputRef = useRef();
  const buttonRef = useRef();

  const onButtonClick = () => {
    console.log(inputRef);
    console.log(buttonRef);
    inputRef.current.value = buttonRef.current.textContent;
  };
  return (
    <div>
      {/绑定到 DOM节点上 /}
      <input ref={inputRef} type="text" />
      <button ref={buttonRef} onClick={onButtonClick}>
        在input上展示文字
      </button>
    </div>
  );
}
export default Exapmple8;
```

## 自定义 Hooks 函数

> 封装成一个自定义 Hooks 函数，记住一定要用 use 开头，这样才能区分出什么是组件，什么是自定义函数。

```jsx
import React, { useState, useCallback, useEffect } from "react";

function useWinSize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  });

  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    });
    console.log("addEventListener");
  }, []);

  useEffect(() => {
    window.addEventListener("resize", onResize);
    console.log("1");
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return size;
}
// 只有在 组件被卸载 resize 事件才会被移除
```
