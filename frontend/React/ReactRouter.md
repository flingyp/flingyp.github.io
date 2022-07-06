# ReactRouter

- [官方文档](https://reacttraining.com/react-router/web/guides/quick-start)

- 在搭建一个 React 项目后

```
npm install react-router-dom --save
```

第一个例子：

```jsx
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Mine from "./Mine";
// 假设 有两个页面 Home Mine

/**
*	function Home() {
      return <h2>Home</h2>;
    }
    function Mine() {
      return <h2>Mine</h2>;
    }
*/

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/home" component={Home}></Route>
        <Route path="/mine" component={Mine}></Route>
      </Router>
    </div>
  );
}
// 当我们访问 /home 时 页面渲染 Home 组件   访问 /mine 时 页面渲染Mine组件
export default App;
```

## BrowserRouter 和 HashRouter 的区别

```
HashRouter: 锚点 # 链接
BrowserRouter： h5新特性
```

## Link 跳转

```jsx
function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <link to="/home">Home页面</link>
          </li>
          <li>
            <link to="/mine">Mine页面</link>
          </li>
        </ul>
        <Route path="/home" component={Home}></Route>
        <Route path="/mine" component={Mine}></Route>
      </Router>
    </div>
  );
}
// 当我们访问 /home 时 页面渲染 Home 组件   访问 /mine 时 页面渲染Mine组件
// 当点击 Home页面 会页面渲染 Home 组件 当点击Mine页面会页面渲染Mine组件
export default App;
```

## exact strict 精准匹配

> exact`默认为false，如果为true时，需要和路由相同时才能匹配，但是如果有斜杠也是可以匹配上的。 如果在父路由中加了`exact`，是不能匹配子路由的,建议在子路由中加`exact
>
> `strict`默认为 false，如果为 true 时，路由后面有斜杠而 url 中没有斜杠，是不匹配的
>
> 两者基本上是连用的

```jsx
// exact是Route的一个属性，认为其是一种严格匹配模式

// 举个例子：
<Route path="/home" component={Home}></Route>
<Route path="/home/num" component={HomeNum}></Route>
<Route path="/mine" component={Mine}></Route>
// 当我们访问 /home 时会渲染 Home  但是 当我们访问 /home/num 时会同时 渲染 Home 和 HomeNum组件

// 有时候 我们的需求就是要渲染不同路径的对应的组件。 对于这个问题 React-Router 的 Route标签有个属性叫 exact
<Route exact strict path="/home" component={Home}></Route>
<Route exact path="/home/num" component={HomeNum}></Route>
<Route path="/mine" component={Mine}></Route>
// 当我们给标签添加上这个属性 就默认对其开启严格匹配模式。 只有访问对应的路径 才能渲染对应的组件。
// 不加 strict 时：如果访问的是 ../home/ 时 也会渲染 Home 组件， 如果加上的话 只有对应 /home 才会渲染对应组件
```

## 配置 404 页面

1. 需要用到 Switch 组件包括路由组件（Switch 组件保证只渲染其中一个子路由)
2. 配置 notFount 路由

```jsx
<Switch>
  <Route exact strict path="/home" component={Home}></Route>
  <Route exact path="/home/num" component={HomeNum}></Route>
  <Route path="/mine" component={Mine}></Route>
  {/*404 一定要放在最底部*/}
  <Route component={notFound}></Route>
</Switch>
```

## NavLink

```
和Link跳转作用一样， 但可以添加对应跳转元素的不同样式
```

## Redirect 重定向

```jsx
<Redirect from="/" to="/home"></Redirect>
// 访问 / 时 重定向到 /home
```

## 跳转到指定路径下 push replace

```js
props.history.push("/");

props.history.replace("/");
// 两者区别：
//	push:	叠加上一次的页面依然存在
//	replace: 是替换，上一次页面不存在
```

## React-Router 高阶组件 withRouter

> withRouter`的作用就是, 如果我们某个组件没有被`Router`管理, 但是我们要依靠它去跳转一个页面, 比如点击页面的`logo`, 返回首页, 这时候就可以使用`withRouter`来做。

```jsx
import React form 'react'
import {withRouter} from 'react-router-dom'

class MineDemo extends React.Component{
    clickMandle() {
        console.log(this.props)
    }

    render() {
        return (
            <div>
                <button onClick={this.clickMandle.bind(this)}>回到Home</button>
            </div>
        )
    }
}
// export default MineDemo
export default withRouter(MineDemo)
// 如果组件 MineDemo 没有被Router管理 那么 this.props 打印出来的就是空对象
// 所以可以通过 withRouter 高阶组件  那么 this.props 打印出来的就会有 Router相关的信息
```

## Prompt 组件

> 当页面切换时，需要进行一些提示，这个时候就可以使用 Router 中的 Prompt 组件

```jsx
// 它有个必须的属性 message 用于给用户提示信息
<Prompt message="您确定您要离开当前页面吗？"/>
// 这样，每当用户进行切换时，都会提示一条消息。
// 但是，有时候，我们希望提示消息，有时候我们不希望提示出现，这就用到它的另外一个属性-when。when有两种情况，当它的值是true时，会提示消息。当它的值为false时，不会提示消息。
// 基本使用方式：  when 可以通过变量来控制
<Prompt when={true} message="您确定要离开当前页面吗？"/>
```
