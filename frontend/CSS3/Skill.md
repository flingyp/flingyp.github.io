# 常用技巧

## 元素水平居中

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

## 元素水平垂直居中

### 方法一：position 定位 （已知元素宽高）

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

### 方法二：position + transfrom （元素宽高可以未知）

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

### 方法三： flex 布局

> 给父元素添加这三条代码即可 `display: flex;` flex 布局 `justify-content: center;` 使子项目水平居中 `align-items: center;` 使子项目垂直居中

```css
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
```

```html
<div id="box">
  <div class="child-1">1</div>
</div>
```

## 纯 CSS 实现三角形

```css
#box {
  width: 0px;
  height: 0px;

  border-top: 50px solid rgba(0, 0, 0, 0);
  border-right: 50px solid rgba(0, 0, 0, 0);
  border-bottom: 50px solid rgba(0, 0, 0, 0);
  border-left: 50px solid green;
}
```

## 盒模型的两种模式 + 两种模式的区别

> IE5 及以下的浏览器对 CSS 不太友好，而 IE6 及以上的浏览器对 CSS 更加友好，这个时候就出现了 Quirks(怪异) 模式与 Standards(标准) 模式

区别：

> Quirks 模式即为怪异模式， Standards 模式即为标准模式；两种模式的出现必然会出现一定的兼容问题，在标准模式下如何兼容怪异模式下书写的 CSS 呢？在 IE6 下我们用 DTD 作为衡量标准，如果有 DTD 出现，那这个页面将会优先选择 Standards 模式下 CSS 的写法，如果没有 DTD，则采用原来的兼容写法。

```
CSS3 新增了 box-sizing 属性来改变盒模型的类型
box-sizing: content-box (默认值)   盒子定义宽高(宽高不包括内边距和边框) = 内容宽高    （Standards 模式即为标准模式 代表 W3C盒模型）

box-sizing: border-box     盒子定义宽高(宽高包括内边距和边框) = 内容宽高(content) + 内边距(padding) + 边框(border)     （Quirks 模式即为怪异模式   代表 IE盒模型）
```

## 文本溢出

### 单行文本溢出

```css
white-space: nowrap; /*文本不会换行，文本会在在同一行上继续*/
overflow: hidden;
text-overflow: ellipsis; /*显示省略符号来代表被修剪的文本*/
```

### 多行文本溢出

```css
overflow: hidden;
display: -webkit-box; /*将对象作为弹性伸缩盒子模型显示*/
-webkit-line-clamp: 3; /*限制在一个块元素显示的文本的行数*/
-webkit-box-orient: vertical; /*规定框的子元素应该被水平或垂直排列   从上向下垂直排列子元素*/
```

## 菊花图

> 重点：父元素 `animation: antRotate 1.2s infinite linear;` 子元素 `animation: antSpinMove 1s infinite linear alternate;`。 子元素动画逐个延迟 .4s `animation-delay: 0.4s;`

- 效果：[Ant Design 框架加载中的效果](https://ant.design/components/spin-cn/#header)

```css
.ant-spin-dot {
  position: relative;
  display: inline-block;
  font-size: 20px;
  width: 20px;
  height: 20px;
}
.ant-spin-dot-spin {
  transform: rotate(45deg);
  animation: antRotate 1.2s infinite linear;
}

.ant-spin-dot i {
  width: 9px;
  height: 9px;
  border-radius: 100%;
  background-color: #1890ff;
  transform: scale(0.75);
  display: block;
  position: absolute;
  opacity: 0.3;
  animation: antSpinMove 1s infinite linear alternate;
  transform-origin: 50% 50%;
}
i:nth-child(1) {
  left: 0;
  top: 0;
}
i:nth-child(2) {
  right: 0;
  top: 0;
  animation-delay: 0.4s;
}
i:nth-child(3) {
  right: 0;
  bottom: 0;
  animation-delay: 0.8s;
}
i:nth-child(4) {
  left: 0;
  bottom: 0;
  animation-delay: 1.2s;
}
@keyframes antSpinMove {
  to {
    opacity: 1;
  }
}
@keyframes antRotate {
  to {
    transform: rotate(405deg);
  }
}
```

```html
<span class="ant-spin-dot ant-spin-dot-spin">
  <i></i>
  <i></i>
  <i></i>
  <i></i>
</span>
```

## CSS 选择器的优先级

### 不同级别：

- !important > 行内样式 > ID 选择器 > Class 选择器 > 标签 > 通配符

### 相同级别

- CSS 优先级：是由四个级别和各级别出现次数决定的
- 四个级别：行内样式，ID 选择器，Class 选择器，标签
- 每个规则对应一个初始值 0,0,0,0

```
如果是 行内选择符 是  1,0,0,0
如果是 ID选择器   是  0,1,0,0
如果是 类选择器、属性选择器、伪类选择器 是 0,0,1,0
如果是 元素选择器、伪元素选择器 是 0,0,0,1
```

- 算法：将每条规则中，选择符对应的数相加后得到的”四位数“，从左到右进行比较，大的优先级越高

## 伪类 和 伪元素

> 伪类和伪元素的引入原因： CSS 引入伪类和伪元素概念是为了格式化文档树以外的信息。也就是说，伪类和伪元素是用来修饰不在文档树中的部分，比如，一句话中的第一个字母，或者是列表中的第一个元素。

### 伪类

```
伪类用于当已有元素处于的某个状态时，为其添加对应的样式，这个状态是根据用户行为而动态变化的。
比如说，当用户悬停在指定的元素时，我们可以通过:hover 来描述这个元素的状态。
虽然它和普通的 css 类相似，可以为已有的元素添加样式，
但是它只有处于 dom 树无法描述的状态下才能为元素添加样式，所以将其称为伪类。
```

### 伪元素

```
伪元素用于创建一些不在文档树中的元素，并为其添加样式。
比如说，我们可以通过:before 来在一个元素前增加一些文本，并为这些文本添加样式。
虽然用户可以看到这些文本，但是这些文本实际上不在文档树中。
伪元素用于创建一些不在文档树中的元素，并为其添加样式。
比如说，我们可以通过:before 来在一个元素前增加一些文本，并为这些文本添加样式。
虽然用户可以看到这些文本，但是这些文本实际上不在文档树中。
```

### 伪元素是使用单冒号还是双冒号？

> CSS3 规范中的要求使用双冒号 (`::`) 表示伪元素，以此来区分伪元素和伪类，比如`::`before 和`::`after 等伪元素使用双冒号 (`::`)，:hover 和:active 等伪类使用单冒号 (`:`)。除了一些低于 IE8 版本的浏览器外，大部分浏览器都支持伪元素的双冒号 (`::`) 表示方法

- 对于伪元素是使用单冒号还是双冒号的问题，w3c 标准中的描述如下

```
虽然 CSS3 标准要求伪元素使用双冒号的写法，但也依然支持单冒号的写法。
为了向后兼容，我们建议你在目前还是使用单冒号的写法
```

## 实现一个宽高自适应的正方形

```css
/* 第一种：通过VW来实现 */
/* 100vw = 100% */
.square {
  width: 10%;
  height: 10vw;
  background: #e74c3c;
}
/* 第二种方式是利用元素的padding百分比是相对元素width的性质来实现  通过padding-top将元素撑开 */
.square {
  width: 20%;
  height: 0;
  padding-top: 20%;
  background: #e74c3c;
}
/* 第三种方式是利用子元素的margin-top的值来实现的 */
.square {
  width: 30%;
  overflow: hidden;
  background: yellow;
}

.square::after {
  content: "";
  display: block;
  margin-top: 100%;
}
```

## 雪碧图的制作和使用

### 制作

- 通过 PS 的切片工具切下你所需要的小图片

1. 通过 PS 制作雪碧图

- 点击 PS 中导航栏的图像 中的画布大小（大小设置的尽量大一点）
- 接下来将你切下来的图片移进画布，位置摆放好就行了
- 在通过切片工具把放在一堆的小图片切下来整理成一张图片
- 保存 Web 所用格式，这样雪碧图就制作好了

2. 通过第三方工具完成 CSS Sprites Generator

- [网站](https://www.toptal.com/developers/css/sprite-generator)
- 只需要将所切下来的小图片全部上传上去，它就会返回一张雪碧图给你，直接下载下来就行了。

### 使用

> 使用雪碧图可以减少网络请求的次数，加快运行的速度。
> 显示雪碧图的条件：

1. 需要一个设置好宽和高的容器
2. 需要设置 background-position 的值（默认为（0，0），也就是图片的左上角），即移动图片到自己想要的图标位置。
   调试方法:可以用浏览器自带的调试工具进行调试（如 chrome 浏览器按 f12 即可进行调试，慢慢移动 background-position 的值来达到理想的效果）

```css
.img{
    /**
     *   通过 background-image 导入雪碧图
     *  通过 background-position 定位到相应的图片
    */
    width: xxpx;
    height: xxpx;
    background-image: url('./xxx.png);
    background-position: -xxpx -xxpx;
}
```

```html
<div class="img"></div>
```

## CSS 常用布局

### 元素水平居中的情况

> 先看子元素是固定宽度还是宽度未知
> **固定宽度**

```
1. 使用 margin: 0 auto
2. 使用 transform: translateX(50%); （注意浏览器兼容问题）
```

**宽度未知**

```
1. 将子元素设置为行内元素 display: inline-block;  然后设置父元素 text-align: center;
```

当然还有万能十分好用的 flex

### 盒子垂直居中的情况

1.使用 transform: translateY(50%); 2.设置父元素 position: relative; 设置子元素 position: absolute; top: 50%;
3.flex

#### 图片和文字垂直居中

1.只需要给图片一个 vertical-align: middle; 把此元素放置在父元素的中部。

### 单列布局

> 单列布局是最常用的一种布局，它的实现效果就是将一个元素作为布局容器，通常设置一个较小的（最大）宽度来保证不同像素宽度屏幕下显示一致。
> 将设置布局容器（最大）宽度以及左右边距为 auto 即可实现

#### 圣杯布局，双飞翼布局 （两边定宽，中间自适应）

HTML 结构

```html
<!-- 两边顶宽，中间自适应的布局 -->
<div class="container">
  <!-- 中间栏要放在最前面渲染 -->
  <div class="middle">
    测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
  </div>
  <div class="left">left</div>
  <div class="right">right</div>
</div>
```

1. 浮动
   设置好子元素的三个元素的宽高，然后都设置 float:left;

- middle 宽度为 100%; left right 定宽

设置好哦，要使子元素在同一行显示并且 middle 要在中间显示。我们可以使用 margin-left 来实现

- 设置 left 的 margin-left: -100%;（负的中间子元素的宽度），这样左边的元素 left 会被提上一层
- 设置 right 的 margin-left: -xxx; （负的自身宽度）

但是我们在开发的时候一般都不会去用这个浮动而是用 flex

2. flex 布局
   设置 container 为 flex 布局 display: flex;
   设置好 left right 宽度再设置 middle 的 flex:1;
   最后设置 left middle right 的 order 分别为 1 2 3。 不然就是 middle 在最左边了。

- order 属性定义项目的排列顺序。数值越小，排列越靠前，默认为 0。

  1.1 定宽

> 思路：设置 div 的左右 margin 为 auto

```css
#header,
#footer,
#content {
  margin: 0 auto;
  width: 800px;
  margin-top: 10px;
}
```

1.2 变宽

```css
#header,
#footer,
#content {
  margin: 0 auto;
  width: 70%;
  margin-top: 10px;
}
```
