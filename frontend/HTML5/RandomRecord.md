# HTML5

## 1. 对 HTML5 中的语义化标签的使用和理解

:::tip
语义化的作用：

1. （提高代码可读性）根据页面内容的结构，用语义化标签可以构建出便于阅读的维护性更高的代码

2. （优化搜索引擎，易于 SEO）语义化标签的 DOM 结构较为容易的被搜索引擎检索解析到

3. （提升无障碍性） 使用语义化标签提升过网页可访问性后 听觉障碍、视觉障碍者将可以通过辅助设备获取页面的信息！

:::

**没有语义化的 DOM**

```html
<div class="header"></div>
<div class="section">
  <div class="article">
    <div class="figure">
      <img />
      <div class="figcaption"></div>
    </div>
  </div>
</div>
<div class="footer"></div>
```

**语义化的 DOM**

```html
<header></header>
<section>
  <article>
    <figure>
      <img />
      <figcaption></figcaption>
    </figure>
  </article>
</section>
<footer></footer>
```

常见使用的语义化标签：

> [对应以下语义化标签描述参考 MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element#%E5%86%85%E5%AE%B9%E5%88%86%E5%8C%BA)

```html
<header></header>
<main></main>
<footer></footer>
<section></section>
<nav></nav>
<aside></aside>
<article></article>
<address></address>
<menu></menu>
<h1></h1>
到
<h6></h6>
```

## 2. 网页的 SEO 如何进行优化处理

SEO 中文名称 **搜索引擎优化** 。为了从搜索引擎中获得更多的免费曝光量，从网站结构、内容建设方案、用户互动传播等进行合理规划，使网站更适合搜索引擎的检索原则行为。

:::tip

1. `<title>标题</title>` 强调重点即可，尽量把关键词放在最前面， 关键词不要重复出现，尽量做到每个页面的 title 标题不要设置相同的内容。

2. `<meta keywords>` 关键词 列举出几个页面的重要关键字即可，切记过分堆砌

3. `<meta description>` 网页描述，需要高度概括网页内容，切记不能太长，过分堆砌关键词，每个页面也要有所不同。

4. 开发时编写 HTML 尽量多使用语义化

5. 可以考虑采取服务端渲染

:::

## 3. HTML 标签元素分为哪些，应用场景有哪些

分类：内联元素、块状元素、内联块状元素（综合两者特性）

应用场景：

- 内联元素：用于不指定元素宽高，宽高由内容指定
- 块状元素：用于指定元素宽高，标签占满一行
- 内联块状元素： 用于指定元素宽高，不占满一行

## 4. a 标签默认事件被禁止，通过什么方式可以实现页面的跳转

:::tip
通过 `e.preventDefault()` 来阻止默认事件的发生
想实现页面的跳转可以通过 API `location.href = url` 来进行跳转
:::

```html
<body>
  <a href="https://www.baidu.com/">点击这里</a>
  <script>
    const ADom = document.getElementsByTagName("a")[0];
    ADom.addEventListener("click", (e) => {
      // 阻止a标签默认事件
      e.preventDefault();
      // 通过location.href跳转页面
      location.href = "https://yyblog.top";
    });
  </script>
</body>
```

## 5. 浏览器的存储方法

:::tip
四种方法：`cookie`、`localStorage`、`sessionStorage`、`indexedDB`
:::

## 6. CSRF 攻击

`Cross Site Request Forgery` 跨站请求伪造，是一种挟制用户在当前已登录的 Web 应用程序上执行非本意的操作的攻击方法。CSRF 利用的是网站对用户网页浏览器的信任。

简单理解：CSRF 攻击的本质是利用 Cookie 会在同源请求中携带发送给服务器的特点，以此来实现用户的冒充

CSRF 视频教程讲解：https://www.bilibili.com/video/BV1iW411171s/?spm_id_from=333.337.search-card.all.click&vd_source=eea269eb687441a96a489f4da09ad92e

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/11/17/16e78e9679aac52d~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

防御 CSRF 的相关方法

1. 敏感请求接口尽量使用 POST 类型
2. 可以在请求敏感接口前，加入验证码（确保是人工）
3. 验证 Referer（Referer 可以记录当前请求的来源地址），在后台中判断来源地址
4. Token （使用 Token 来校验用户）

## 7. XSS 攻击

`Cross Site Script` 跨站脚本攻击，**攻击者将恶意 JS 代码植入到提供给其它用户使用的页面中**

`XSS` 涉及到三方，即攻击者、客户端和 Web 应用，攻击的目的是为了盗取存储在客户端的 `cookie` 或者其他网站用于识别客户端身份的敏感信息。一旦获取到合法用户的信息后，攻击者甚至可以假冒合法用户与网站进行交互

`XSS`分为：存储型、反射型、DOM 型

**存储型**：首先黑客利用站点漏洞将一段恶意脚本代码提交到网站数据库中，然后用户向网站请求包含了恶意 JS 脚本的页面。当用户浏览该页面的时候，恶意脚本就会将用户的 Cookie 等信息上传到服务器。

![](https://www.helloworldcoding.com/uploads/0.jpg)

**反射型**：在一个反射型 XSS 攻击过程中，恶意 JS 脚本属于用户发送给网站请求中的一部分，随后网站又把恶意 JS 脚本返回给用户，当恶意脚本再用户页面中被执行时，黑客就可以利用该脚本做一些恶意操作。

![](https://www.helloworldcoding.com/uploads/1.jpg)

**DOM 型**：基于 DOM 的 XSS 攻击是不牵涉到页面 Web 服务器的。黑客通过各种手段将恶意脚本注入到用户页面中，比如通过网络劫持（Wifi 路由器劫持、本地恶意软件）在页面传输过程中修改 HTML 页面的内容。

**如何尽量避免 XSS 攻击**

1. 前台、后台统一对数据进行过滤和转码
2. 添加验证码防止脚本冒充用户提交等操作
3. Cookie 使用 HttpOnly 属性

## 8. 浏览器解析渲染页面

:::tip

介绍：浏览器获取 HTML 后，通过 HTML 解析器解析构建一颗 DOM 树，然后解析遇到 CSS 样式就会被 CSS 解析器解析成 CSS 规则树（CSSOM）。之后浏览器会根据 DOM 树和 CSS 规则树进行渲染生成一颗渲染树。再之后会对页面进行布局，通过解析计算出每一个渲染树节点的位置和大小，在页面屏幕上画出渲染树的所有节点。最后对布局的节点进行绘制呈现出一个完整的页面

主要流程：构建 DOM-> 构建 CSSOM -> 构建渲染树 -> 布局 -> 绘制

:::

## 9. 什么是 Data URL

:::tip
`Data URL` 是将图片转换为 `Base64` 直接嵌入到网页中。使用 `<img src="data:[MIME type];base64, data"/>` 这种方式来引用图片，而不需要发送请求去获取图片。

优点：不需要发送请求

缺点：Base64 编码后的字符串内容会是一段长串乱码，会比原来的体积大三分之一左右。Data URL 形式的图片不会缓存下来，每次访问页面都要被下载一次。可以将 Data URL 写入到 CSS 文件中随着 CSS 被缓存下来

:::

Base64 的格式：

- 前缀 `data:` 开头
- 指示数据类型的 MIME 类型。例如 `image/jpeg` 表示 JPEG 图像文件；如果此部分被省略，则默认值为`text/plain;charset=US-SACII`
- 如果为非文本数据，则可选 base64 做标记
- 数据（一堆字符串）

## 10. 什么是 HTML 的实体编码

:::tip

- 不可分的空格:＆nbsp;
- <(小于符号):＆lt;
- (大于符号):＆gt;
- ＆(与符号):＆amp;
- ″(双引号):＆quot;
- '(单引号):'＆apos;
  :::

HTML 实体是一段以连字号（&）开头、以分号（;）结尾的字符串。用以显示不可见字符及保留字符 (如 HTML 标签)

在前端，一般为了避免 XSS 攻击，会将 <> 编码为 `&lt;` 与 `&gt;`，这些就是 HTML 实体编码

在 HTML 转义时，仅仅只需要对六个字符进行编码: &, <, >, ", ', ```。可使用 [he](https://npm.devtool.tech/he) 进行编码及转义

```ts
he.escape('<img src=""></img>'); // 转义
// "&lt;img src=&quot;&quot;&gt;&lt;/img&gt;"

he.encode('<img src=""></img>'); // 实体编码
// "&#x3C;img src=&#x22;&#x22;&#x3E;&#x3C;/img&#x3E;"
```

## 11. 如何统计当前页面出现的所有标签

- `document.querySelectorAll("*")`
- `document.getElementsByTagName("*")`
