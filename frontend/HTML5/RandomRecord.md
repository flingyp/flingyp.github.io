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
