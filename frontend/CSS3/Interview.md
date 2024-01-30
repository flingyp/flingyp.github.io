## 1. CSS 中伪类和伪元素的区别

- [MDN 中伪类的介绍](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes)

**伪类**：用于指定所选元素的特殊状态。当我们让元素达到这个状态时，我们可以通过伪类来定义此时的特定样式。当状态改变又回失去这个样式

比如：`:hover`、`:visited`、`:link`、`:first-child`、`:focus`、`:lang`

**伪元素**：DOM 树中没有定义的虚拟元素。核心就是创建不需要存在文档中的元素。伪元素控制的内容和元素是没有差别的，但是它本身只是基于元素的抽象，并不存在于⽂档中，所以称为伪元素。⽤于将特殊的效果添加到某些选择器

两者区别：

1. 表示方法不同

   - 伪类使用单冒号表示，伪元素使用双冒号表示（当然也兼容一些伪元素单冒号写法）

2. 定义不同

   - 伪类即假的类，可以添加类样式来达到的效果

   - 伪元素即假元素，可以通过添加虚拟元素才能达到的效果

## 2. 盒模型的理解，以及标准情况和 IE 下的区别

在 HTML 页面中所有元素都可以看作是一个盒子，盒子模型是 CSS 中的一个基本概念，它决定了元素所占据空间的大小

CSS 盒模型一共有两种：**标准盒模型**、**IE 盒模型**

页面会默认采用 标准盒模型，可以通过 CSS3 中 `box-sizing` 属性来改变盒模型

`box-sizing: content-box` (默认值) （Standards 模式即为标准模式 代表 W3C 盒模型）

`box-sizing: border-box` （Quirks 模式即为怪异模式 代表 IE 盒模型）

**两种盒模型的区别：**

标准盒模型的宽高 = 内容宽高 （不包含内边距 padding 和 边框 border）

- 如果我们给一个盒子定义了宽高，那么这个宽高只是这个盒子内容宽高，如果有内边距和边框那么盒子的宽高则会叠加

IE 盒模型的宽高 = 内容宽高（content） + 内边距（padding） + 边框（border）

- 如果我们给一个盒子定义了宽高， 那么这宽高是等于 = 内容宽高 + 内边距 + 边框 一起的

```css
.standard-box {
  /*    
    盒子的宽 = width + paddingLeft + paddingRight + borderLeft + borderRight = 228
    盒子的高 = height + paddingTop + paddingBottom + borderTop + borderBottom = 228       
  */
  box-sizing: content-box; /* 默认值 */
  width: 200px;
  height: 200px;
  padding: 10px;
  border: 4px solid red;
}

.strange-box {
  /* 
    盒子的宽 = width + paddingLeft + paddingRight + borderLeft + borderRight = 200
    盒子的高 = height + paddingTop + paddingBottom + borderTop + borderBottom = 200
    启用了怪异盒模型，你定义宽高是多少就是多少，只是盒子自身内容宽高会随着padding和border定义的变化而变化       
    */
  box-sizing: border-box;
  width: 200px;
  height: 200px;
  padding: 10px;
  border: 4px solid red;
}
```

## 3. 怎么做页面响应式？

响应式设计的基本原理是**通过媒体查询检测不同的设备屏幕尺寸做对应处理**

为了处理移动端，页面头部必须有 `meta` 声明 `viewport`

- `<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">`

实现响应式布局的方式如下：

- 媒体查询（Media Queries）: 针对不同设备屏幕定义不同的样式
- 流式布局（Fluid Layout）: 使用百分比单位来设置元素的宽度，使得网站能够根据屏幕尺寸进行自适应调整
- 自适应字体（Responsive Typography）：使用`rem`单位来设置字体大小，使字体在不同设备上保持合适的比例
- 移动优先（Mobile-First）：从移动设备的设计开始，逐渐增加适应更大屏幕的样式

## 4. BFC 是什么？触发 BFC 的条件是什么？有哪些应用场景？

- [关于 BFC 可参考文章](https://note.youdao.com/ynoteshare/index.html?id=71913cff0dce02db9b5ea11fc2f7e14b&type=note&_time=1657172060195)

BFC 全称 （Block Formatting Context-块级格式化上下文）可以形成独立的渲染区域，内部元素的渲染不会受到外部的影响

如何触发 BFC？

1. 根元素 `html`
2. 浮动元素（元素的 float 不是 none）
3. 定位元素（元素的 position 为 absolute 或者 fixed）
4. overflow 值不为 visible 的块元素
5. display 为 `inline-block`、`table-cell`、`table-caption`、`table`、`inline-table`、`flex`、`inline-flex`、`grid`、`inline-grid`

设置 BFC 的作用：

1. 避免外边距重叠（同一个 BFC 区域中两个相邻元素会出现边距重叠问题）
2. 清除浮动，防止浮动元素覆盖外部元素

## 5. 让 Chrome 支持小于 12px 的字体方式有哪些

Chrome 浏览器默认设置的最小字号是 12px，所以设置 `<12px` 的字体大小是无效的

- `zoom` 字面的意思是变焦，可以改变页面上元素的尺寸，属于真实尺寸（Zoom 并不是标准属性）
- `transform: scale()` 进行缩放（只对可以定义宽高元素生效（行内元素不生效，块和行内块生效））

### 7. CSS 选择器的优先级

CSS 的特性：层叠性、继承性、优先级

- 通配符选择器 `*`
- ID 选择器 `#`
- 类选择器 `.`
- 标签选择器 `div`
- 相邻选择器 `+`
- 后代选择器 `div p`
- 子元素选择器 `div > p`
- 属性选择器 `a[href="www.baidu.com"]`

:::tip 优先级

!important > 行内样式 > ID 选择器 > 类选择器 > 标签选择器 > 通配符选择器

第一：内联样式 权重值：1000

第二：id 选择器 权重值：100

第三： 类选择器 权重值： 10

第四：标签&伪元素选择器 权重值：1

第五： 通配 `>、+等` 权重值：0

:::

## 8. 用 CSS 画一个三角形

使用边框 `border` 画

```css
#box {
  width: 0px;
  height: 0px;
  border-top: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 50px solid transparent;
  border-left: 50px solid green;
}
```

## 9. 元素的水平垂直居中

### 盒子水平居中

- `margin: 0 auto;`

> 居中不好使的原因：
> 1、元素没有设置宽度，没有宽度怎么居中！
> 2、设置了宽度依然不好使，你设置的是行内元素吧。

```css
#box {
  width: 100px;
  height: 100px;
  border: 1px solid red;
}
.child-1 {
  width: 20px;
  height: 20px;
  border: 1px solid black;
  margin: 0 auto;
}
```

```html
<div id="box">
  <div class="child-1">1</div>
</div>
```

### 元素水平垂直居中

#### 方法一：position 定位 （已知元素宽高）

> 父元素设置为：position: relative;
> 子元素设置为：position: absolute;
> 距上 50%，据左 50%，然后减去元素自身宽度的距离就可以实现

```css
#box {
  width: 500px;
  height: 500px;
  border: 1px solid #2980b9;
  position: relative;
}
.child-1 {
  position: absolute;
  width: 100px;
  height: 100px;
  border: 1px solid #e74c3c;
  top: 50%;
  left: 50%;
  margin-left: -50px;
  margin-top: -50px;
}
```

```html
<div id="box">
  <div class="child-1">1</div>
</div>
```

#### 方法二：position + transform （元素宽高可以未知）

> 如果元素未知宽度，只需将方法一中的 margin-left: -50px; margin-top: -50px; 替换为：transform: translate(-50%,-50%);

```css
#box {
  width: 500px;
  height: 500px;
  border: 1px solid #2980b9;
  position: relative;
}
.child-1 {
  position: absolute;
  width: 100px;
  height: 100px;
  border: 1px solid #e74c3c;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

```html
<div id="box">
  <div class="child-1">1</div>
</div>
```

#### 方法三： flex 布局

1. 给父元素添加这三条代码即可 `display: flex;` flex 布局 `justify-content: center;` 使子项目水平居中 `align-items: center;` 使子项目垂直居中

2. 给父元素设置 `display: flex;`，给子元素直接设置 `margin: auto;`（在 flex 格式化上下文中，设置了 margin: auto 的元素，在通过 justify-content 和 align-self 进行对齐之前，任何正处于空闲的空间都会分配到该方向的自动 margin 中去）

```css
/** 方式一 */
#box {
  width: 500px;
  height: 500px;
  border: 1px solid #2980b9;
  display: flex;
  justify-content: center;
  align-items: center;
}
.child-1 {
  width: 100px;
  height: 100px;
  border: 1px solid #e74c3c;
}

/** 方式二 */
#box {
  width: 500px;
  height: 500px;
  border: 1px solid #2980b9;
  display: flex;
}
.child-1 {
  width: 100px;
  height: 100px;
  border: 1px solid #e74c3c;
  margin: auto;
}
```

```html
<div id="box">
  <div class="child-1">1</div>
</div>
```

## 10. 清除浮动的方式

:::tip 清除浮动

1. 通过触发 BFC 清除浮动

2. 通过 `clear:both` 属性

:::

给浮动元素添加一个伪元素设置 `clear:both`

```css
div:after {
  content: '';
  display: block;
  clear: both;
}
```

## 11. 左侧固定宽度，右侧自适应布局

### 第一种

通过 Flex 布局，左侧设置固定宽度 `width: 宽度` 或者 `flex-basic: 宽度`, 右侧设置 `flex: 1`

```css
.container {
  display: flex;
}

.left {
  /* width: 300  */
  flex-basic: 300px;
  /* 设置0代表，当容器空间不足时，不会缩小 */
  flex-shrink: 0;
}

.right {
  flex: 1;
}
```

### 第二种

通过 Grid 网格布局

```css
.container {
  display: grid;
  /* 两列 */
  grid-template-columns: 300px 1fr;
}
```

### 第三种

浮动 + BFC

```css
.container {
  height: 400px;
  background-color: skyblue;
}
.left {
  float: left;
  width: 300px;
  height: 200px;
  background-color: red;
}
.right {
  height: 200px;
  background-color: blue;
  overflow: hidden;
}
```

## 12. 双飞翼布局（圣杯布局）

双飞翼布局左中右三列布局，渲染顺序中间列书写在前保证提前渲染，左右两列定宽，中间列自适应剩余宽度

Flex 布局

```css
.container {
  display: flex;
}

.left,
.right {
  flex-basis: 300px;
  flex-shrink: 0; /** 不缩放 */
}
.main {
  flex-grow: 1; /** 在主轴上放大 */
}
```

Grid 网格布局

```css
.container {
  background-color: #eeeeee;
  height: 20rem;
  display: grid;
  /** 固定三列 */
  grid-template-columns: 300px 1fr 300px;
}

.left,
.right {
  height: 100%;
  background: lightsalmon;
}
.main {
  height: 100%;
  background: pink;
}
```

## 13. 文本超出显示省略号

### 单行文本

```css
/* 添加如下属性，缺一不可 */
.demo {
  white-space: nowrap; /* 文本不换行 */
  overflow: hidden; /* 溢出部分隐藏 */
  text-overflow: ellipsis; /* 溢出部分省略号显示 */
}
```

### 多行文本

```css
.demo {
  overflow: hidden;
  display: -webkit-box; /* 将对象作为弹性伸缩盒子模型显示 */
  -webkit-line-clamp: 3; /* 限制在一个块元素显示的文本的行数 */
  -webkit-box-orient: vertical; /* 规定框的子元素应该被水平或垂直排列 从上向下垂直排列子元素 */
}
```

**注意点**：纯字母的内容不会换行也不会有省略号出现。英文字母默认不会换行需要添加属性 `word-break:break-all;` 强制换行

## 14. normalize.css 与 reset.css 有什么区别

`normalize.css`：标准化，会保留有关的样式，比如 H1 的字体大小

`reset.css`：重置化，将所有样式都会重置

## 15. CSS 隐藏元素的几种方法

1. `display: none`：隐藏元素，不占据页面空间，会触发重排和重绘，绑定在元素上的事件无效
2. `opacity: 0`：隐藏元素，占据页面空间，会触发重绘，绑定在元素上的事件有效
3. `visibility: hidden`：隐藏元素，占据页面空间，会触发重绘，绑定在元素上的事件无效
4. `position: absolute; left: -9999px`：通过绝对定位将元素移出可视区域
5. `clip-path: polygon(0 0, 0 0, 0 0, 0 0)`：通过裁剪将元素移出可视区域
6. `width: 0; height: 0; overflow: hidden`：通过设置宽高为 0，同时设置 `overflow: hidden` 来隐藏元素
7. `font-size: 0`：通过设置字体大小为 0 来隐藏元素

## 16. 如何自定义滚动条样式

滚动条相关样式都是伪元素，以 scrollbar 打头，有以下伪元素，从 -webkit 中可见兼容性一般，不过无所谓，现在 Chrome 浏览器占大头

- `::-webkit-scrollbar` — 整个滚动条.
- `::-webkit-scrollbar-button` — 滚动条上的按钮 (上下箭头).
- `::-webkit-scrollbar-thumb` — 滚动条上的滚动滑块.
- `::-webkit-scrollbar-track` — 滚动条轨道.
- `::-webkit-scrollbar-track-piece` — 滚动条没有滑块的轨道部分.
- `::-webkit-scrollbar-corner` — 当同时有垂直滚动条和水平滚动条时交汇的部分.
- `::-webkit-resizer` — 某些元素的 corner 部分的部分样式(例:textarea 的可拖动按钮).

## 17. 什么是重排、重绘。如何减少重排重绘

重排、重绘是页面进行布局、绘制中的重要两个步骤

1. 重排（Reflow）：元素的宽高大小和位置发生变化时就会发生重排，也叫回流。此时在浏览器的**布局阶段**，会重新计算每个元素在设备视口内的确切大小和位置

2. 重绘（Repaint）：元素的样式变动，但是位置没有发生改变。此时在关键渲染路径中的**绘制阶段**，会将渲染树中的每个节点转换成屏幕的实际像素

   - 注意：重排必定会造成重绘

合成：如果修改一个既不要布局也不要绘制的属性，渲染引擎将直接跳过布局和图层绘制的阶段，只执行后续的合成操作，这个过程叫做合成

- 例如使用了 CSS 的 transform 来实现动画效果，这可以避开重排和重绘阶段，直接在非主线程上执行合成动画操作。这样的效率是很高的，因为是在非主线程上合成，并没有占用主线程的资源，另外也避开了布局和绘制两个子阶段，所以 相对于重绘和重排，合成能大大提升绘制效率。

减少重排重绘的方法：

1. 避免频繁操作样式（最好一次性重写 style 属性，或者将样式列表定义为 class 并一次性更改 class 属性）
2. 避免频繁操作 DOM（创建一个 documentFragment，在它上面应用所有 DOM 操作，最后再把它添加到文档中；或者在修改时隐藏元素，修改完成之后再显示）
3. 对具有复杂动画的元素使用 绝对定位，使它 脱离文档流，否则会引起父元素及后续元素频繁回流
4. 使用 `transform` 替代 top，`transform` 是合成属性，不会引起重排和重绘

:::tip 总结

1. 重排是更改了元素的几何属性后，浏览器重新触发布局，更新完整的渲染流程的过程

2. 重绘是修改了元素的绘制属性后，浏览器会直接进入图层绘制阶段，然后执行之后的渲染流程

3. 重排必定会发生重绘，重绘不一定会重排

4. 合成是修改一个既不要布局也不要绘制的属性之后，渲染引擎直接跳过布局和图层绘制的阶段，只执行后续的 合成操作 的过程

5. 减少重排和重绘可以优化 Web 性能，浏览器通过队列机制来优化，平时写代码也要注意避免重排和重绘。

:::

## 18. 哪些属性可以被继承

1. 字体相关的属性：`font`
2. 文本相关的属性：`line-height`、`text-indent`、`text-align`
3. 元素的可见性： `visibility`
4. 光标属性：`cursor`
