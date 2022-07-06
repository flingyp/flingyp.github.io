# Grid 网格布局

网格布局的内容全部参考阮一峰老师的 CSS Grid 网格布局教程 文章。为了更好的查询。 [阮一峰老师的 CSS Grid 网格布局教程](http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)

## 概述

它将网页分成一个个网格，可以任意组合不同的网格，做出各种各样的布局。

Flex 布局是轴线布局，只能指定"项目"针对轴线的位置，可以看作是一维布局。**Grid 布局则是将容器划分成"行"和"列"，产生单元格，然后指定"项目所在"的单元格，可以看作是二维布局。**

## 基本概念

采用网格布局的区域，称为 **容器(container)**， 容器内部采用网格定位的子元素，称为 **项目(item)**。

```html
<div>
  <div><p>1</p></div>
  <div><p>2</p></div>
  <div><p>3</p></div>
</div>
```

最外层的 div 元素就是容器，内层的三个 div 元素就是项目。

### 行和列

容器里面的水平区域称为 **行（row）**，垂直区域称为**列（column）**。
![行和列](https://www.wangbase.com/blogimg/asset/201903/1_bg2019032502.png)

### 单元格

划分网格的线，称为"网格线"（grid line）。水平网格线划分出行，垂直网格线划分出列。
正常情况下，n 行有 n + 1 根水平网格线，m 列有 m + 1 根垂直网格线。

### 网格线

划分网格的线，称为"网格线"（grid line）。水平网格线划分出行，垂直网格线划分出列。

正常情况下，n 行有 n + 1 根水平网格线，m 列有 m + 1 根垂直网格线。

![网格线](https://www.wangbase.com/blogimg/asset/201903/1_bg2019032503.png)

**容器属性分为两大类。一类在容器的 称为 容器属性。 还有一类在项目的称为项目属性**

## 容器属性

**1. display: grid 属性**

指定一个容器采用网格布局

```css
div {
  display: grid;
}
```

![grid](https://www.wangbase.com/blogimg/asset/201903/bg2019032504.png)

默认情况下，容器元素都是块级元素，但也可以设成行内元素

```css
div {
  display: inline-grid;
}
```

![inline-grid](https://www.wangbase.com/blogimg/asset/201903/bg2019032504.png)

注意：

为网格布局以后，容器子元素（项目）的 float、display: inline-block、display: table-cell、vertical-align 和 column-\*等设置都将失效。

**2. grid-template-columns 和 gird-templae-rows 属性**

容器指定了网格布局以后，接着就要划分行和列。grid-template-columns 属性定义每一列的列宽，grid-template-rows 属性定义每一行的行高。

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
}
/*除了使用绝对单位，也可以使用百分比。*/
.container {
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  grid-template-rows: 33.33% 33.33% 33.33%;
}
```

![](https://www.wangbase.com/blogimg/asset/201903/bg2019032506.png)

**2.1 repeat()**

重复写同样的值非常麻烦，尤其网格很多时。这时，可以使用 repeat()函数，简化重复的值。

接收两个参数， 第一个参数是重复的次数， 第二个参数是所要重复的值。

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  grid-template-rows: repeat(3, 33.33%);
}
```

**2.2 auto-fill 关键字**

有时，单元格的大小是固定的，但是容器的大小不确定。如果希望每一行（或每一列）容纳尽可能多的单元格，这时可以使用 auto-fill 关键字表示自动填充。

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
}
```

![](https://www.wangbase.com/blogimg/asset/201903/bg2019032508.png)

**2.3 fr 关键字**

为了方便表示比例关系，网格布局提供了 fr 关键字（fraction 的缩写，意为"片段"）。如果两列的宽度分别为 1fr 和 2fr，就表示后者是前者的两倍。

fr 可以与绝对长度的单位结合使用，这时会非常方便。

例如

```css
.container {
  display: grid;
  grid-template-columns: 150px 1fr 2fr;
}
```

![](https://www.wangbase.com/blogimg/asset/201903/bg2019032510.png)

**2.4 minmax()**

minmax()函数产生一个长度范围，表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值。

```css
grid-template-columns: 1fr 1fr minmax(100px, 1fr);
/* minmax(100px, 1fr)表示列宽不小于100px，不大于1fr */
```

**2.5 auto 关键字**

auto 关键字表示由浏览器自己决定长度。

`grid-template-columns: 100px auto 100px;`

**2.6 网格线的名称**

grid-template-columns 属性和 grid-template-rows 属性里面，还可以使用方括号，指定每一根网格线的名字，方便以后的引用。

例子：

```css
.container {
  display: grid;
  grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
  grid-template-rows: [r1] 100px [r2] 100px [r3] auto [r4];
}
```

**3. grid-row-gap grid-column-gap 和 grid-gap 属性**

> 根据最新标准，上面三个属性名的 grid-前缀已经删除，grid-column-gap 和 grid-row-gap 写成 column-gap 和 row-gap，grid-gap 写成 gap。

grid-row-gap 属性设置行与行的间隔（行间距），grid-column-gap 属性设置列与列的间隔（列间距）。

grid-gap 属性是 grid-column-gap 和 grid-row-gap 的合并简写形式，语法如下

`grid-gap: <grid-row-gap> <grid-column-gap>;`

grid-gap 省略的第二个值，默认第二个值 等于 第一个值。

**4. grid-template-areas 属性**

网格布局允许指定"区域"（area），一个区域由单个或多个单元格组成。grid-template-areas 属性用于定义区域。

例子:

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-template-areas:
    "a b c"
    "d e f"
    "g h i";
}
```

上面代码先划分出 9 个单元格，然后将其定名为 a 到 i 的九个区域，分别对应这九个单元格。

多个单元格合并成一个区域的写法如下:

```css
grid-template-areas:
  "header header header"
  "main main sidebar"
  "footer footer footer";
```

上面代码中，顶部是页眉区域 header，底部是页脚区域 footer，中间部分则为 main 和 sidebar。

**5. grid-auto-flow 属性**

划分网格以后，容器的子元素会按照顺序，自动放置在每一个网格。默认的放置顺序是"先行后列"，即先填满第一行，再开始放入第二行，即下图数字的顺序。

![](https://www.wangbase.com/blogimg/asset/201903/bg2019032506.png)

这个顺序由 grid-auto-flow 属性决定，默认值是 row，即"先行后列"。也可以将它设成 column，变成"先列后行"。

**6. justify-items、align-items、place-items 属性**

justify-items 属性设置单元格内容的水平位置（左中右）。

align-items 属性设置单元格内容的垂直位置（上中下）。

```
start：对齐单元格的起始边缘。
end：对齐单元格的结束边缘。
center：单元格内部居中。
stretch：拉伸，占满单元格的整个宽度（默认值）。
```

place-items 属性是 align-items 属性和 justify-items 属性的合并简写形式。

`place-items: <align-items> <justify-items>;`

**7. justify-content、align-content、place-content 属性**

justify-content 属性是整个内容区域在容器里面的水平位置（左中右）。

align-content 属性是整个内容区域的垂直位置（上中下）。

---

这两个属性的写法完全相同，都可以取下面这些值。(下面以 justify-content 属性为例)

- **start - 对齐容器的起始边框。**

![](https://www.wangbase.com/blogimg/asset/201903/bg2019032519.png)

- **end - 对齐容器的结束边框。**

![](https://www.wangbase.com/blogimg/asset/201903/bg2019032518.png)

- **center - 容器内部居中。**

![](https://www.wangbase.com/blogimg/asset/201903/bg2019032520.png)

- **stretch - 项目大小没有指定时，拉伸占据整个网格容器。**

![](https://www.wangbase.com/blogimg/asset/201903/bg2019032521.png)

- **space-around - 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与容器边框的间隔大一倍。**

![](https://www.wangbase.com/blogimg/asset/201903/bg2019032522.png)

- **space-between - 项目与项目的间隔相等，项目与容器边框之间没有间隔。**

![](https://www.wangbase.com/blogimg/asset/201903/bg2019032523.png)

- **space-evenly - 项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔。**

![](https://www.wangbase.com/blogimg/asset/201903/bg2019032524.png)

place-content 属性是 align-content 属性和 justify-content 属性的合并简写形式。

`place-content: <align-content> <justify-content>`

## 项目属性

### grid-column-start、grid-column-end、grid-row-start、grid-row-end 属性

项目的位置是可以指定的，具体方法就是指定项目的四个边框，分别定位在哪根网格线。

```
grid-column-start属性：左边框所在的垂直网格线
grid-column-end属性：右边框所在的垂直网格线
grid-row-start属性：上边框所在的水平网格线
grid-row-end属性：下边框所在的水平网格线
```

```css
.item-1 {
  grid-column-start: 2;
  grid-column-end: 4;
}
```

上面代码指定，1 号项目的左边框是第二根垂直网格线，右边框是第四根垂直网格线。

![](https://www.wangbase.com/blogimg/asset/201903/bg2019032526.png)

### grid-column、 grid-row 属性

grid-column 属性是 grid-column-start 和 grid-column-end 的合并简写形式。

grid-row 属性是 grid-row-start 属性和 grid-row-end 的合并简写形式。

```css
/*语法格式:*/
.item {
  grid-column: x / x;
  grid-row: x / x;
}
```

### grid-area 属性

grid-area 属性指定项目放在哪一个区域。

```css
.item-1 {
  grid-area: xx区域;
}
```

grid-area 属性还可用作 grid-row-start、grid-column-start、grid-row-end、grid-column-end 的合并简写形式，直接指定项目的位置。

```css
.item {
  grid-area: <row-start> / <column-start> / <row-end> / <column-end>;
}
```

### justify-self、align-self、place-self 属性

justify-self 属性设置单元格内容的水平位置（左中右），跟 justify-items 属性的用法完全一致，但只作用于单个项目。

align-self 属性设置单元格内容的垂直位置（上中下），跟 align-items 属性的用法完全一致，也是只作用于单个项目。

```
start：对齐单元格的起始边缘。
end：对齐单元格的结束边缘。
center：单元格内部居中。
stretch：拉伸，占满单元格的整个宽度（默认值）。
```

例子：

```css
.item-1 {
  justify-self: start;
}
```

![](https://www.wangbase.com/blogimg/asset/201903/bg2019032532.png)

place-self 属性是 align-self 属性和 justify-self 属性的合并简写形式。

`place-self: <align-self> <justify-self>;`
