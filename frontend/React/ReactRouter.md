---
outline: deep
---

## 内置组件

- `<BrowserRouter>`
- `<HashRouter>`
- `<Route>`
- `<Link>`
- `<NavLink>`
- `<Switch>`

## `<Link>`  和 `<Route>` 

`<Link>` 路由链接 和 `<Route>` 注册路由

```jsx
import { BrowserRouter, Link, Route } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
        <div className="app">
          <div className="links">
            <link to="/home">Home页面</link>
            <link to="/mine">Mine页面</link>
          </div>

          {/*当点击Home页面，下面就会渲染Home组件，当点击Mine页面，下面就会渲染Mine组件*/}
          <div className="container">
            <Route path="/home" component={Home}></Route>
            <Route path="/mine" component={Mine}></Route>
          </div>
        </div>
    </BrowserRouter>
  );
}
```

## `<NavLink>`

作用和 `Link` 一样，可以添加 `activeClassName` 属性指定激活时 `Link` 的样式

```jsx
<NavLink activeClassName="activeClass" to="/xxx">Link</NavLink>
```

## `<Switch>`

`Switch` 可以保证只渲染其中一个子路由（单一匹配）

应用场景：如果有两个路由 `<Route path="xxx">` 一样， `Switch` 可以保证只渲染第一个匹配到的路由（虽然这种场景很少见）

```jsx
import { BrowserRouter, Link, Route } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
        <div className="app">
          <div className="links">
            <link to="/home">Home页面</link>
            <link to="/mine">Mine页面</link>
          </div>

          {/*当点击Mine页面，只会渲染Mine组件*/}
          <div className="container">
            <Route path="/home" component={Home}></Route>
            <Route path="/mine" component={Mine}></Route>
            <Route path="/mine" component={OtherMine}></Route>
          </div>
        </div>
    </BrowserRouter>
  );
}
```

## 处理多级路径刷新页面资源文件丢失问题

- 第一种：使用根路径 `/`（常用）
- 第二种： 使用`%PUBLIC_URL%`（常用，只适用于React脚手架上）
- 第三种：更改路由模式为 `HashRouter`

## 路由的模糊匹配、精准匹配

在 `<Route>` 组件有个属性 `exact` 可以开启路径的精准匹配模式（默认是模糊匹配）

### exact 精准匹配

精准匹配：只有路径和路由相同情况下才能匹配，但是如果有斜杠也是可以匹配上的

模糊匹配：路径和路由部分匹配，也会渲染组件

```jsx
// 需求：当我们访问/home时会渲染Home组件，但是当我们访问/home/num时会同时渲染Home和HomeNum组件
<Route path="/mine" component={Mine}></Route>
<Route path="/home" component={Home}></Route>
<Route path="/home/num" component={HomeNum}></Route>
// 这其实就是模糊匹配。访问/home/num时也会匹配到/home路由
```

```jsx
// 需求：当我们访问/home时会渲染Home组件，但是当我们访问/home/num只渲染HomeNum组件
<Route path="/mine" component={Mine}></Route>
<Route exact path="/home" component={Home}></Route>
<Route exact path="/home/num" component={HomeNum}></Route>
// 可以给 Route 添加 exact 属性，开启精准匹配
```

### strict 严格模式

需求：不加 `strict ` 时：如果访问的是 `xx/home/` 时 也会渲染 Home 组件，如果加上的话只有访问 `/home` 路径才会渲染对应组件

```jsx
<Route path="/mine" component={Mine}></Route>
<Route exact strict path="/home" component={Home}></Route>
<Route exact path="/home/num" component={HomeNum}></Route>
```

## `<Redirect>` 

```jsx
{/* 放在路由的最下放，如果上方的路由都没有匹配上，就会走重定向 */}
<Redirect to="/home"></Redirect>

{/* 也可以手动指定路由重定向的位置 */}
<Redirect from="/" to="/home"></Redirect>
```

## Push 和 Replace

- push：叠加上一次的页面依然存在
- replace:：替换，上一次页面不存在

```jsx
props.history.push("/");
props.history.replace("/");
```

## 配置 404 页面

1. 需要用到 Switch 组件包裹路由组件（Switch 组件保证只渲染其中一个子路由)
2. 配置 `NotFound` 路由

```jsx
<Switch>
  <Route path="/mine" component={Mine}></Route>
  <Route exact strict path="/home" component={Home}></Route>
  <Route exact path="/home/num" component={HomeNum}></Route>
  {/*404 一定要放在最底部*/}
  <Route component={NotFound}></Route>
</Switch>
```

## 高阶组件 withRouter

`withRouter` 的作用就是, 如果我们某个组件没有被`Router`管理, 但是我们要依靠它去跳转一个页面, 比如点击页面的`logo`，返回首页，这时候就可以使用`withRouter`来做。

```jsx
import React form 'react'
import {withRouter} from 'react-router-dom'

class MineDemo extends React.Component{
    clickMandle() {
        console.log(this.props)
    }
    render() {
        return (
            <button onClick={this.clickMandle.bind(this)}>回到Home</button>
        )
    }
}
export default withRouter(MineDemo)
// 如果组件 MineDemo 没有被Router管理 那么 this.props 打印出来的就是空对象
// 所以可以通过 withRouter 高阶组件 那么 this.props 打印出来的就会有 Router相关的信息
```

## Prompt 组件

当页面切换时，需要进行一些提示，这个时候就可以使用 `Prompt` 组件

```jsx
// 它有个必须的属性 message 用于给用户提示信息
<Prompt message="您确定您要离开当前页面吗？"/>
// 这样，每当用户进行切换时，都会提示一条消息。
// 但是，有时候，我们希望提示消息，有时候我们不希望提示出现，这就用到它的另外一个属性-when。when有两种情况，当它的值是true时，会提示消息。当它的值为false时，不会提示消息。
// 基本使用方式：  when 可以通过变量来控制
<Prompt when={true} message="您确定要离开当前页面吗？"/>
```

## 路由懒加载

路由懒加载功能需要通过 React的Lazy函数配置 `import()` 语句动态加载组件（组件代码会被分开打包）。

然后在路由部分使用 `<Suspense></Suspense>` 组件包裹，`fallback` 可以添加加载时组件



```jsx
// 1. 通过Lazy函数配置 `import()` 语句动态加载组件
const LoginDemo = lazy(() => import('@/pages/login'))
// 2. 需要使用 Suspense 可以指定一个加载得到路由打包文件前显示的一个自定义Loading界面
class Demo extends React.Component {
  render() {
    return (
      <Suspense fallback={<h1>Page Loding...</h1>}>
      	<Siwtch>
        	<Route path="/login" component={Login}></Route>
        </Siwtch>
      </Suspense>
    )
  }
}
```

