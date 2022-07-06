# NextJS

> Next.js 是一个轻量级的 React 服务端渲染应用框架。
>
> [文档网址](https://nextjs.frontendx.cn/)

## 搭建项目

### 手动搭建

1. 在搭建的文件夹 `npm init` 项目初始化
2. 安装 `react` 、`react-dom` 、`next`
   1. `npm install --save react react-dom next`
3. 增加快捷命令

```js
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev" : "next" ,
    "build" : " next build",
    "start" : "next start"
  },
```

4. 文件系统是主要的 API. 每个`.js` 文件将变成一个路由，自动处理和渲染。 **在 目录下 新建一个文件夹 `pages`**， 先试试 hello word , 在**文件夹下 新建文件 `index.js`**

```js
// 编写如下代码
function Index() {
  return <div>Hello Next.js</div>;
}
export default Index;
```

5. 运行 `npm run dev` 命令 并打开 `http://localhost:3000` 查看效果

### **脚手架自动搭建 create-next-app**

1. 全局安装 脚手架

- `npm install -g create-next-app`

2. 可以通过 npm 或者 npx 安装项目

- `npx create-next-app next-name`

3. 查看项目基本目录

```
.next
.node_modules
pages
	api
		index.js
public
.gitignore
package-lock.json
package.json
README.md
```

## 路由跳转

### `<Link>` 跳转

> 可以用 `Link` 组件实现客户端的路由切换

```js
// 1. 引入 Link 组件
import Link from 'next/link';
// pages/index.js
export default () => (
	<div>
		<Link href='/about'>
			<a>here</a>
		</Link>
	</div>
);

// pages/about.js
export default () => <p>Welcome to About!</p>;
```

#### 组件式路由跳转携带参数

- 组件 Link 接收 URL 对象， 可以携带参数

```js
// pages/index.js
import Link from "next/link";
export default () => (
  <div>
    <Link href={{ pathname: "/about", query: { name: "Zeit" } }}>
      <a>here</a>
    </Link>
  </div>
);
// 路由跳转 会携带参数
```

### 命令式跳转

> 可以用`next/router`实现客户端路由切换

```js
// 引入 Router 组件
import Router from "next/router";
// 通过 Router.push('/xxx') 来实现跳转
export default () => (
  <div>
    Click <span onClick={() => Router.push("/about")}>here</span> to read more
  </div>
);
```

#### `Router`对象的 API 如下：

- `route` - 当前路由的`String`类型
- `pathname` - 不包含查询内容的当前路径，为`String`类型
- `query` - 查询内容，被解析成`Object`类型. 默认为`{}`
- `asPath` - 展现在浏览器上的实际路径，包含查询内容，为`String`类型
- `push(url, as=url)` - 页面渲染第一个参数 url 的页面，浏览器栏显示的是第二个参数 url
- `replace(url, as=url)` - performs a `replaceState` call with the given url
- `beforePopState(cb=function)` - 在路由器处理事件之前拦截.

#### 拦截器 popstate

> 有些情况下，在路由跳转前做一些动作。 比如 request 或者 强制 SSR 刷新

```js
import Router from "next/router";

Router.beforePopState(({ url, as, options }) => {
  if (as !== "/" || as !== "/other") {
    window.location.href = as;
    return false;
  }
  return true;
});
// 如果在beforePopState中返回 false，Router将不会执行popstate事件
```

#### 编程式路由跳转携带参数

- `push` 或 `replace`可接收的 URL 对象（``组件的 URL 对象一样）来生成 URL。

```js
import Router from "next/router";

const handler = () =>
  Router.push({
    pathname: "/about",
    query: { name: "Zeit" },
  });

export default () => (
  <div>
    Click <span onClick={handler}>here</span> to read more
  </div>
);
```

## 路由的六个钩子事件

> 也可以使用监听路由相关事件

### 事件列表如下：

- `routeChangeStart(url)` - 路由开始切换时触发
- `routeChangeComplete(url)` - 完成路由切换时触发
- `routeChangeError(err, url)` - 路由切换报错时触发
- `beforeHistoryChange(url)` - 浏览器 history 模式开始切换时触发
- `hashChangeStart(url)` - 开始切换 hash 值但是没有切换页面路由时触发
- `hashChangeComplete(url)` - 完成切换 hash 值但是没有切换页面路由时触发

注意：`url`是指显示在浏览器中的 url。如果你用了`Router.push(url, as)`（或类似的方法），那浏览器中的 url 将会显示 as 的值。

### 如何使用路由事件

```js
// 可以通过 Router.envents.on('xxx', () => {}) 去监听 六个钩子事件
// 以  routeChangeStart 为例：
const handleRouteChange = (url) => {
  console.log("App is changing to: ", url);
};
Router.events.on("routeChangeStart", handleRouteChange);
```

- 如何不想长事件监听该事件， 可以使用 off 去取消监听

```js
Router.events.off("routeChangeStart", handleRouteChange);
```

- 如果路由加载被取消（比如快速连续双击链接）

```js
Router.events.on("routeChangeError", (err, url) => {
  if (err.cancelled) {
    console.log(`Route to ${url} was cancelled取消!`);
  }
});
```

## 数据获取 和 组件的生命周期函数 getInitialProps

> 我们挂载一个组件时，常常会需要事先获取一些初始数据，通常我们是将异步方法放入 componentDidAmount 周期函数里调用获取数据，Nextjs 官方推荐使用 getInitialProps 函数作为数据获取规范。
>
> **注意：`getInitialProps`将不能使用在子组件中。只能使用在`pages`页面中。**

### 有状态组件定义 getInitialProps

```js
// 当页面渲染时加载数据，我们使用了一个异步方法getInitialProps。它能异步获取 JS 普通对象，并绑定在props上。 必须保证 getInitialProps return 的是一个普通JS对象而不是 Date 、Map 或者是Set类型
import React from "react";
export default class extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
    return { userAgent };
  }

  render() {
    return <div>Hello World {this.props.userAgent}</div>;
  }
}
```

### 无状态 组件定义 getInitialProps

```js
const Page = ({ stars }) => <div>Next stars: {stars}</div>;

Page.getInitialProps = async ({ req }) => {
  const res = await fetch("https://api.github.com/repos/zeit/next.js");
  const json = await res.json();
  return { stars: json.stargazers_count };
};

export default Page;
```

### `getInitialProps`入参对象的属性如下：

- `pathname` - URL 的 path 部分
- `query` - URL 的 query 部分，并被解析成对象
- `asPath` - 显示在浏览器中的实际路径（包含查询部分），为`String`类型
- `req` - HTTP 请求对象 (只有服务器端有)
- `res` - HTTP 返回对象 (只有服务器端有)
- `jsonPageRes` - [获取数据响应对象](https://developer.mozilla.org/en-US/docs/Web/API/Response) (只有客户端有)
- `err` - 渲染过程中的任何错误

总结 getInitialProps ：

1. 确保 getInitialProps 返回的是个普通对象
2. 执行时间： （页面初始加载时 getInitialProps 只会在服务端加载。只有当路由跳转（Link 组件跳转或 API 方法跳转），客户端才会执行 getInitialProps。）
3. 函数 只能在 pages 目录的页面使用，不能在 components 组件下使用。

## Next 动态导入模块

> 动态导入相当于把代码分成各个块管理。Next.js 服务端动态导入功能

### 基础

```js
import dynamic from "next/dynamic"; // 引入 dynamic

const DynamicComponent = dynamic(import("../components/hello"));

export default () => (
  <div>
    <Header />
    <DynamicComponent />
    <p>HOME PAGE is here!</p>
  </div>
);
// 自定义组件DynamicComponent是懒加载的，只有在jsx里用到<DynamicComponent/>时，才会被加载进来，如果不使用就不会被加载。
```

## 使用 Head

> 使用了`Next.js`框架，就是希望服务端渲染，进行 SEO 操作。那为了更好的进行 SEO 优化，可以自己定制`标签，定义`一般有两种方式。

### 在各个页面上加上 Head 标签

```js
import Head from "next/head";
function Header() {
  return (
    <>
      <Head>
        <title>Next.js！</title>
        <meta charSet="utf-8" />
      </Head>
      <div>nextjs.frontendx.cn</div>
    </>
  );
}
export default Header;
// 这时候 打开浏览器去预览 就发现有 title了。
```

### 定义全局的 Head

- 其实就是相当于自定义了一个组件，然后把`Head`在组件里定义好，以后每个页面都使用这个组件
