# React

## 介绍

> React 是一个声明式，高效且灵活的用于构建用户界面的 JavaScript 库。使用 React 可以将一些简短、独立的代码片段组合成复杂的 UI 界面，这些代码片段被称作“组件”

- [中文网站](https://reactjs.bootcss.com/)

## 特点：

1. 声明式的设计
2. 高效，采用虚拟 DOM 来实现 DOM 渲染，最大限度的减少 DOM 操作
3. 灵活，跟其他库灵活搭配使用
4. JSX （俗称 JS 里面写 HTML）
5. 组件化、模块化
6. 单向的数据流。 （没有实现数据的双向绑定）

## 创建项目

1. 通过 script 引入使用，仅用于学习调试使用

```js
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
```

2. 通过 **React 的脚手架** 创建项目

```js
// 1.安装脚手架Create React App。
npm install -g create-react-app 建议 cnpm install -g create-react-app
// 2.创建项目
create-react-app 01reactapp(项目名称)
```

```
注： 这里 如果在创建项目的过程会中报错，请执行以下操作

1. 由于网络原因，某些依赖包加载失败，解决方法：设置 npm 镜像为 cnpm
npm config set registry https://registry.npm.taobao.org
2. 清空缓存
npm cache clean --force
```

3. 通过 npx 来 Create React App

```js
// 其实 就是第二种方法
// 它会配置你的开发环境，以便使你能够使用最新的 JavaScript 特性，提供良好的开发体验，并为生产环境优化你的应用程序。你需要在你的机器上安装 Node >= 8.10 和 npm >= 5.6。要创建项目，请执行
npx create-react-app my-app
// 注意
// 第一行的 npx 不是拼写错误 —— 它是 npm 5.2+ 附带的 package 运行工具。
```

## 元素渲染

```jsx
let h1 = <h1>helloworld</h1>;
使用JSX的写法，可以创建JS元素对象
注意：JSX元素对象，或者组件对象，必须只有1个根元素（根节点）

通过 ReactDOM.render(element, root) 来实现元素渲染
遇到 <> 标签按 XML/HTML解析， 遇到 {} 按 JS 解析
```

## React JSX

- 在 React 写的 JS 都是 Jsx 语言

> React 使用 JSX 来替代常规的 JavaScript。
>
> JSX 是一个看起来很像 XML 的 JavaScript 语法扩展

优点：

- JSX 执行更快，编译为 JavaScript 代码时进行优化

- 类型更安全，编译过程如果出错就不能编译，及时发现错误

- JSX 编写模板更加简单快速。（不要跟 VUE 比）

注意：

1. JSX 必要得有根节点
2. 正常的普通 HTML 元素要小写。如果是大写，默认认为是组件。

### JSX

1. 由 HTML 元素构成
2. 中间如果需要插入变量 用 { }
3. { } 中间可以使用表达式
4. { } 中间表达式可以使用 JSX 对象
5. 属性和 html 内容一样都是 { } 来插入内容

## React 的 JSX 注释写法

```jsx
let element3 = (
  <div>
            {/* 只能这样写注释 */}
            <h1 className={classStr2} style={exampleStyle}>
      helloworld
    </h1>
        
  </div>
);
```

## React 组件

- 函数式组件
- 类 Class 组件

```jsx
//函数式组件
function Childcom(props) {
  console.log(props);

  let title = <h2>我是副标题</h2>;
  let weather = props.weather; //条件判断
  let isGo = weather == "下雨" ? "不出门" : "出门";

  return (
    <div>
                  <h1>函数式组件helloworld</h1>
                  {title}
                  
      <div>
                        是否出门？                 <span>{isGo}</span>
                    
      </div>
              
    </div>
  );
}
```

```jsx
//类组件定义
class HelloWorld extends React.Component {
  render() {
    console.log(this);
    return (
      <div>
                        <h1>类组件定义HELLOWORLD</h1>
                        <h1>hello:{this.props.name}</h1>
                        
        <Childcom weather={this.props.weather} />
        {/*复合组件： 在组件中可以引入其他组件*/}
                    
      </div>
    );
  }
}
```

## React 状态

- 相当于 Vue 的 data

### this.setState()

- 使用 `this.setState()` 来时刻更新组件 state

```js
// 不要直接修改 State, 不会重新渲染组件
this.state.xxxxxx = "xxx";
// 使用 setState()
this.setState({ xxxxxx: "xxx" });
```

## 生命周期函数

<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589647159564&di=329ed207592e19f75259e0bb5badc3df&imgtype=0&src=http%3A%2F%2Fwww.fkit.org%2Fuploads%2Fallimg%2F181205%2F1-1Q205164420504.png" alt="周期函数" style="zoom:200%;" />

![执行过程](https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4201876802,3227315254&fm=26&gp=0.jpg)

```jsx
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  // 组件被挂载前 执行的生命周期函数
  componentWillMount() {}
  // 组件被挂载后 执行的生命周期函数
  componentDidMount() {}
  // 在componentDidMount()后 如果state改变 则进入 shouldComponentUpdate: 返回 true 和 false， true代表允许改变 false 代表不能改变

  // 如果 props 发生改变执行 然后 进入 shouldComponentUpdate
  componentWillReceiveProps() {}

  // 数据在改变之前执行 (state、 props)
  componentWillUpdate() {}
  // 数据修改完成 执行的生命周期函数 (state、 props)
  componentDidUpdate() {}

  // 组件被卸载前 执行的生命周期函数
  componentWillUnmount() {}

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

## React 事件

特点：

- 绑定的事件命名：驼峰命名法
- { } 传入一个函数，而不是字符串

```jsx
<button onClick={this.sendData}>传递helloworld给父元素</button>
```

事件对象 e：React 返回的事件对象是代理的原生的事件对象，如果想要查看事件对象的具体值，必须之间输出事件对象的属性

注意：

- 原生，阻止默认行为时，可以直接返回 return false；

- React 中，阻止默认必须 e.preventDefault();

### 向事件处理程序传递参数

> 在循环中，通常我们会为事件处理函数传递额外的参数。例如，若 `id` 是你要删除那一行的 ID，以下两种方式都可以向事件处理函数传递参数：

```jsx
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button> // 箭头函数
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button> // .bind()
```

## React 条件渲染

> 在 React 中，你可以创建不同的组件来封装各种你需要的行为。然后，依据应用的不同状态，你可以只渲染对应状态下的部分内容

React 中的条件渲染和 JavaScript 中的一样，使用 JavaScript 运算符 [`if`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) 或者[条件运算符](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)去创建元素来表现当前的状态，然后让 React 根据它们来更新 UI。

在 react 中用 jsx 渲染 dom 的时候经常会遇到 if 条件判断，然而在 jsx 中竟是不允许 if 条件判断的。以下有几种判断方式，可以根据自己的应用场景，挑选适合的。

方法一：

```jsx
class HelloMessage extends React.Component {
  render() {
    let userMessage;
    if (this.props.loggedIn) {
      userMessage = (
        <span>
          <h2>{`Welcome Back ${this.props.name}`}</h2>
          <p>You can visit settings to reset your password</p>
        </span>
      );
    } else {
      userMessage = <h2>Hey man! Sign in to see this section</h2>;
    }
    return (
      <div>
        <h1>My Super React App</h1>
        {userMessage}
      </div>
    );
  }
}
```

方法二:

```jsx
class HelloMessage extends React.Component {
  renderUserMessage() {
    if (this.props.loggedIn) {
      return (
        <span>
          <h2>{`Welcome Back ${this.props.name}`}</h2>
          <p>You can visit settings to reset your password</p>
        </span>
      );
    } else {
      return <h2>Hey man! Log in to see this section</h2>;
    }
  }

  render() {
    return (
      <div>
        <h1>My Super React App</h1>
        {this.renderUserMessage()}
      </div>
    );
  }
}
```

方法三: 三元运算符

```jsx
class HelloMessage extends React.Component {
  render (){
    return(
      <div>
        <h1>
          { this.props.loggedIn ?  'You are logged In' : 'You are not logged In' }
        </h1>
      </div>
    )
  }
```

方法四：

```jsx
class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        <h1>My Super React App</h1>
        {this.props.loggedIn ? (
          <span>
            <h2>{`Welcome Back ${this.props.name}`}</h2>
            <p>You can visit settings to reset your password</p>
          </span>
        ) : (
          <h2>Hey man! Log in to see this section</h2>
        )}
      </div>
    );
  }
}
```

## React 列表渲染

- 将列表内容拼装成数组放置到模板中。将数据拼装成数组的 JSX 对象

- 使用数组的**map 方法**，对每一项数据按照 JSX 的形式进行加工，最终得到 1 个每一项都是 JSX 对象的数组，在将数组渲染到模板中
- Key 值
  - 作用： 如果数据索引没有发生变化则 UI 不会发送重绘， 只有发生变化的部分会发生重绘，这样达到节省资源节省渲染提升性能。

```jsx
// 简单的案例
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number, index) => (
    <li key={index}>{number}</li>
  ));
  return <ul>{listItems}</ul>;
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById("root")
);
```

## React 组件的插槽

```jsx
// App组件
export default class App extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Slot>
        <div key="aaa">我是插槽一</div>
        <div key="bbb">我是插槽二</div>
      </Slot>
    )
  }
// slot 组件
class slot extends React.Component{
    constructor(props) {
        super(props)
        console.log(props)
    }
    render() {
        return (
            <div>
                <div>slot组件</div>
                <div>slot插槽插入的内容如下</div>
                {
                    this.props.children.map(item => item)
                }
            </div>
        )
    }
}
// 在 slot 组件 通过 this.props.children 可以获取App组件里的两个插槽。 然后通过 map 遍历出来
```

## 调试工具 React developer tools

- https://www.cnblogs.com/Super-scarlett/p/8657572.html

- 类似 Vue 的 Vue Devtools

## react-transition-group 动画库

- [Github](https://github.com/reactjs/react-transition-group)

## Simple React Snippets（VsCode 插件）

- 用于快速生成 React 基本代码

## Ant Design UI 库使用

> `antd` 是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。

- [官方文档](https://ant.design/docs/react/introduce-cn)

### 安装

```bash
npm install antd --save
如果你的网络环境不佳，推荐使用 cnpm
```

### 使用

```js
import { Button } from "antd";

ReactDOM.render(<Button />, mountNode);

// 还需要引入样式
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
```

### 按需加载

- https://www.jianshu.com/p/9ca927b748f7
