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

:::tip
CSRF：全称 `Cross Site Request Forgery` 跨站请求伪造，是一种挟制用户在当前已登录的 Web 应用程序上执行非本意的操作的攻击方法。CSRF 利用的是网站对用户网页浏览器的信任。

核心知识：跨站点请求伪造请求
简单理解：CSRF 攻击的本质是利用 Cookie 会在同源请求中携带发送给服务器的特点，以此来实现用户的冒充

CSRF 视频教程讲解：https://www.bilibili.com/video/BV1iW411171s/?spm_id_from=333.337.search-card.all.click&vd_source=eea269eb687441a96a489f4da09ad92e
:::

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/11/17/16e78e9679aac52d~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

防御 CSRF 的相关方法

1. 敏感请求接口尽量使用 POST 类型
2. 可以在请求敏感接口前，加入验证码（确保是人工）
3. 验证 Referer（Referer 可以记录当前请求的来源地址），在后台中判断来源地址
4. Token （使用 Token 来校验用户）

## 7. 浏览器解析渲染页面

:::tip

介绍：浏览器获取 HTML 后，通过 HTML 解析器解析构建一颗 DOM 树，然后解析遇到 CSS 样式就会被 CSS 解析器解析成 CSS 规则树（CSSOM）。之后浏览器会根据 DOM 树和 CSS 规则树进行渲染生成一颗渲染树。再之后会对页面进行布局，通过解析计算出每一个渲染树节点的位置和大小，在页面屏幕上画出渲染树的所有节点。最后对布局的节点进行绘制呈现出一个完整的页面

主要流程：构建 DOM-> 构建 CSSOM -> 构建渲染树 -> 布局 -> 绘制

:::

## 8. 什么是重排、重绘。如何减少重排重绘

重排、重绘是页面进行布局、渲染中的重要两步

:::tip

1. 重排（Reflow）：元素的位置发生变动时会发生重排，也叫回流。此时在关键渲染路径的布局阶段，会计算每一个元素在设备视口内的确切位置和大小。当一个元素位置发生变化时，其父元素及其后边的元素位置都可能发生变化，代价极高。

2. 重绘（Repaint）：元素的样式变动，但是位置没有发生改变。此时在关键渲染路径中的绘制阶段，将渲染树中的每个节点转换成屏幕的实际像素。

注意：重排必定会造成重绘

3. 合成：如果修改一个既不要布局也不要绘制的属性，渲染引擎将直接跳过布局和图层绘制的阶段，只执行后续的合成操作，这个过程叫做 合成。

   比如使用了 CSS 的 transform 来实现动画效果，这可以避开重排和重绘阶段，直接在非主线程上执行合成动画操作。这样的效率是很高的，因为是在非主线程上合成，并没有占用主线程的资源，另外也避开了布局和绘制两个子阶段，所以 相对于重绘和重排，合成能大大提升绘制效率。

4. 减少重排重绘的方法：1. 避免频繁操作样式（最好一次性重写 style 属性，或者将样式列表定义为 class 并一次性更改 class 属性）2. 避免频繁操作 DOM（创建一个 documentFragment，在它上面应用所有 DOM 操作，最后再把它添加到文档中；或者在修改时隐藏元素，修改完成之后再显示）3. 对具有复杂动画的元素使用 绝对定位，使它 脱离文档流，否则会引起父元素及后续元素频繁回流。 4. 使用 tranform 替代 top，tranform 是合成属性，不会引起重排和重绘

:::

:::tip 总结

1. 重排是更改了元素的几何属性后，浏览器重新触发布局，更新完整的渲染流程的过程

2. 重绘是修改了元素的绘制属性后，浏览器会直接进入图层绘制阶段，然后执行之后的渲染流程

3. 重排必定会发生重绘，重绘不一定会重排

4. 合成是修改一个既不要布局也不要绘制的属性之后，渲染引擎直接跳过布局和图层绘制的阶段，只执行后续的 合成操作 的过程

5. 减少重排和重绘可以优化 Web 性能，浏览器通过队列机制来优化，平时写代码也要注意避免重排和重绘。
   :::
