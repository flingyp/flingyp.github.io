# CSS 杂记

## 1. CSS 中伪类和伪元素的区别

- [MDN 中伪类的介绍](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes)

:::tip
伪类：是添加到选择器的关键字，用于指定所选元素的特殊状态。当我们让元素达到这个状态时，我们可以通过伪类来定义此时的特定样式。当状态改变又回失去这个样式。

比如：`:hover`、`:visited`、`:link`、`:first-child`、`:focus`、`:lang`
:::

:::tip
伪元素：DOM 树中没有定义的虚拟元素。核心就是创建不需要存在文档中的元素。伪元素控制的内容和元素是没有差别的，但是它本身只是基于元素的抽象，并不存在于⽂档中，所以称为伪元素。⽤于将特殊的效果添加到某些选择器
:::

**区别：**

表示方法不同

- 伪类使用单冒号表示，伪元素使用双冒号表示（当然也兼容一些伪元素单冒号写法）

定义不同

- 伪类即假的类，可以添加类样式来达到的效果

- 伪元素即假元素，可以通过添加虚拟元素才能达到的效果

## 2. 盒模型的理解，以及标准情况和 IE 下的区别

:::tip
CSS 盒模型一共有两种：**标准模型**、**怪异模型**

页面会默认采用 标准盒模型，可以通过 CSS3 中 `box-sizing` 属性来改变盒子模型的类型

`box-sizing: content-box` (默认值) （Standards 模式即为标准模式 代表 W3C 盒模型）

`box-sizing: border-box` （Quirks 模式即为怪异模式 代表 IE 盒模型）
:::

**两种盒模型的区别：**

标准盒模型的宽高 = 内容宽高 （不包含内边距 padding 和 边框 border）

- 如果我们给一个盒子定义了宽高，那么这个宽高只是这个盒子内容宽高，如果有内边距和边框那么盒子的宽高则会叠加

怪异盒模型的宽高 = 内容宽高（content） + 内边距（padding） + 边框（border）

- 如果我们给一个盒子定义了宽高， 那么这宽高是等于 = 内容宽高 + 内边距 + 边框 一起的

```css
.standard-box {
  /*    
    盒子的宽 = width + paddingLeft + paddingRight + borderLeft + borderRight = 228
    盒子的高 = height + paddingTop + paddingBottom + borderTop + borderBottom = 228       
*/
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

## 3. 使用 CSS 画出一个扇形

```css
.sector-box {
  width: 0;
  height: 0;
  border: 100px solid;
  border-color: orangered transparent transparent transparent;
  border-radius: 50%;
}
```

## 4. BFC 是什么？触发 BFC 的条件是什么？有哪些应用场景？

- [关于 BFC 可参考文章](https://note.youdao.com/ynoteshare/index.html?id=71913cff0dce02db9b5ea11fc2f7e14b&type=note&_time=1657172060195)

BFC 全称 （Block Formatting Context-块级格式化上下文）可以形成独立的渲染区域，内部元素的渲染不会受到外部的影响。

如何触发 BFC？

- 1. 根元素 `html`

- 2. 浮动元素（元素的 float 不是 none）

- 3. 定位元素（元素的 position 为 absolute 或者 fixed）

- 4. overflow 值不为 visible 的块元素

- 5. display 为 `inline-block`、`table-cell`、`table-caption`、`table`、`inline-table`、`flex`、`inline-flex`、`grid`、`inline-grid`

:::tip
作用：

1. 避免外边距重叠

2. 清除浮动

3. 阻止元素被浮动元素覆盖

:::
