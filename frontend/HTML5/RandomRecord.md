# HTML5

## 1. 对 HTML5 中的语义化标签的使用和理解

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

**总结：**

1. 更好的结构化：语义化标签可以让页面结构更加清晰，便于开发者理解和维护代码。
2. 更好的可读性：语义化标签可以让页面更加易读，便于用户理解页面内容。
3. 更好的可访问性：语义化标签可以提高页面的可访问性，便于屏幕阅读器等辅助技术解析页面内容。
4. 更好的 SEO：语义化标签可以让搜索引擎更加准确地解析页面内容，提高页面的排名。也是优化 SEO 的必要手段之一。
5. 更好的兼容性：语义化标签可以让页面在不同设备和浏览器上更加兼容。

**常见使用的语义化标签：**

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

1. **关键词优化**：根据网站主题和目标受众，选择合适、具备潜在搜索流量的关键词，并将其合理规划到标题、标题描述、正文内容等位置。
2. **页面标题优化**：确保页面标题准确地描述了页面的内容，并包含关键词。页面标题是搜索引擎显示在搜索结果中的主要元素。
3. **Meta 标签优化**：编写有吸引力的 meta 描述标签，它会在搜索结果中显示，并向用户描述页面内容。
4. **标签语义化**：使用语义化标签来组织页面内容，有助于搜索引擎理解页面结构。
5. **内/外部链接和引用**：增加内部链接，使页面之间互相连接，同时也可以提高页面权重；如果条件允许，可以增加外部链接，这对于提高页面权重和曝光度也非常有益。
6. **移动友好性**：确保你的网页在移动设备上有良好的显示和用户体验，这对于搜索引擎排名至关重要。
7. **服务端渲染**。考虑服务端渲染，这样可以提高网站的访问速度，同时也有利于搜索引擎的检索。

## 3. HTML 标签元素分为哪些，应用场景有哪些

分类：内联元素、块状元素、内联块状元素（综合两者特性）

1. 块状元素：占据整个宽度，可以包含块状元素和内联元素。
2. 内联元素：只占据内容所需宽度，不能包含块状元素，只能包含内联元素和文本。
3. 内联块状元素：结合了内联元素和块状元素的特性，以一行显示，可以容纳内联元素和文本。

## 4. a 标签默认事件被禁止，通过什么方式可以实现页面的跳转

可以通过 BOM 当中的 Location 对象来进行跳转

```html
<body>
  <a href="https://www.baidu.com/">点击这里</a>
</body>
```

```js
const ADom = document.getElementsByTagName("a")[0];
ADom.addEventListener("click", (e) => {
  // 阻止a标签默认事件
  e.preventDefault();
  // 可通过 Location 对象进行跳转

  // 1. 使用 window.location.href
  window.location.href = "https://yyblog.top";

  // 2. 使用 window.location.assign
  window.location.assign("https://yyblog.top");

  // 3. 直接修改 window.location
  window.location = "https://yyblog.top";
});
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

## 8. 页面渲染的过程

浏览器通过请求获取 HTML 后，通过 HTML 解析器解析构建生成一颗 DOM 树。然后将 CSS 解析生成 CSS 规则树（CSSOM）。

浏览器会根据 DOM 树和 CSSOM 树进行合并生成一颗渲染树。

然后对渲染树进行布局，计算出每一个渲染节点的位置和大小。

最后对布局的节点进行绘制呈现出一个完整的页面

流程：构建 DOM 树 -> 构建 CSSOM 树 -> 生成渲染树 -> 布局 -> 绘制

## 9. 精灵图和 Base64 的区别

精灵图：将多张小图标合并成一张大图，通过 `background-position` 来显示不同的图标（这样可以减少请求图片资源次数）

Base64：将图片转换为 `Base64` 直接嵌入到网页中。使用 `<img src="data:[MIME type];base64, data"/>` 这种方式来引用图片，而不需要发送请求去获取图片。

## 10. 什么是 Data URL

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

## 11. SVG 格式

基于 XML 语法格式的图像，可缩放的矢量图，其他图像是基于像素的，SVG 是属于对图像形状的描述，本质是文本文件，体积小，图标不会失真，可通过 CSS 与 JS 操作

## 12. 什么是 HTML 的实体编码

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

## 13. 如何统计当前页面出现的所有标签

- `document.querySelectorAll("*")`
- `document.getElementsByTagName("*")`

## 14. H5 和 C3 有哪些新特性

H5 的新特性

1. 语义化标签
2. 新增音频、视频
3. 新增表单控件
4. 新增 Canvas 和 SVG
5. 数据存储 LocalStorage、SessionStorage

CSS3 的新特性

1. 新增选择器：属性选择器、伪类选择器、伪元素选择器
2. 新增媒体查询
3. 文字阴影 `text-shadow`
4. 盒子模型 `box-sizing`
5. 渐变 `linear-gradient`
6. 过渡 `transition`
7. 动画 `transform`
8. 2D、3D 转换 `transform`
9. 背景属性 `background-size`、`background-origin`、`background-clip`、`background-attachment`
