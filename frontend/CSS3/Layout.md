# 布局

## margin-auto

```css
#main {
  width: 600px;
  height: 100px;
  background-color: red;
  margin: 0 auto;
}
```

> 设置块级元素的 width 可以防止它从左到右撑满整个容器。然后你就可以设置左右外边距为 auto 来使其水平居中。元素会占据你所指定的宽度，然后剩余的宽度会一分为二成为左右外边距。
> 唯一的问题是，当浏览器窗口比元素的宽度还要窄时，浏览器会显示一个水平滚动条来容纳页面。

max-width 可以解决这个问题

## max-width

解决 margin-auto 的问题

```css
#main {
  max-width: 600px;
  height: 100px;
  background-color: red;
  margin: 0 auto;
}
```

> 使用 max-width 替代 width 可以使浏览器更好地处理小窗口的情况。这点在移动设备上显得尤为重要。所有的主流浏览器包括 IE7+在内都支持 max-width ，所以放心大胆的用吧。

## 盒模型

> 盒模型。当你设置了元素的宽度，实际展现的元素却超出你的设置：这是因为元素的边框和内边距会撑开元素。

看下面的例子，两个相同宽度的元素显示的实际宽度却不一样。

```css
.simple {
  width: 500px;
  margin: 20px auto;
}

.fancy {
  width: 500px;
  margin: 20px auto;
  padding: 50px;
  border-width: 10px;
}
```

## box-sizing

> 当你设置一个元素为 box-sizing: border-box; 时，此元素的内边距和边框不再会增加它的宽度。

```css
.simple {
  width: 500px;
  margin: 20px auto;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.fancy {
  width: 500px;
  margin: 20px auto;
  padding: 50px;
  border: solid blue 10px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
```

这里两个元素 都设置了 **width: 500px** ，但是第二个 设置了边框和内边距。 但是也都设置了 **box-sizing: border-box;**。
那么 元素的内边距和边框就不会增加元素的宽度了。

一些 CSS 开发者想要页面上所有的元素都有如此表现。所以建议把以下 CSS 代码放在页面上：

```css
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
```

## Position

### static

static 是默认值。任意 position: static; 的元素不会被特殊的定位。一个 static 元素表示它不会被“positioned”，一个 position 属性被设置为其他值的元素表示它会被“positioned”。

### relative 相对定位

在一个相对定位（position 属性的值为 relative）的元素上设置 top 、 right 、 bottom 和 left 属性会使其偏离其正常位置。其他的元素的位置则不会受该元素的影响发生位置改变来弥补它偏离后剩下的空隙。

### absolute 绝对定位

absolute 是最棘手的 position 值。 absolute 与 fixed 的表现类似，但是它不是相对于视窗而是**相对于最近的“positioned”祖先元素**。**如果绝对定位（position 属性的值为 absolute）的元素没有“positioned”祖先元素，那么它是相对于文档的 body 元素，并且它会随着页面滚动而移动** 记住一个“positioned”元素是指 position 值不是 static 的元素。

### fixed 固定定位

一个固定定位（position 属性的值为 fixed）元素会相对于视窗来定位，这意味着即便页面滚动，它还是会停留在相同的位置。和 relative 一样， top 、 right 、 bottom 和 left 属性都可用。

## float 浮动

## clear 清除浮动

关于 浮动 和 清除浮动 可以参考 这个网址 [学习 CSS 布局](http://zh.learnlayout.com/float.html)

## 百分比宽度

## 媒体查询

“响应式设计（Responsive Design” 是一种让网站针对不同的浏览器和设备“呈现”不同显示效果的策略，这样可以让网站在任何情况下显示的很棒！

媒体查询是做此事所需的最强大的工具。让我们使用百分比宽度来布局，然后在浏览器变窄到无法容纳侧边栏中的菜单时，把布局显示成一列：

## inline-block
