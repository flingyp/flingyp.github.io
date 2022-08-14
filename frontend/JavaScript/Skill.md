# JavaScript 常用技巧

## String.replace()方法注意点

> replace() 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串

```
我们常用 replace 进行字符串替换， 第二个参数传入的是替换的参数
但是其实 replce方法 的第二个参数是支持传入一个回调函数的
这个函数的第一个参数是匹配到的字符串，如果有分组，接下来的参数就是匹配到的分组。
然后是匹配到的字符串的位置，最后是被匹配的字符串
```

```js
// 案例： 把时间字符串进行处理
let time = "2020-05-12"
// 把 字符串变为 2020年08月12日
time = time.replace(/^(\d{4})-(\d{2})-(\d{1,2})$/g, "$1年$2月$3日")
// $1 => RegExp.$1 第一个分组 2020
// $2 => RegExp.$2 第二个分组 08
// $3 => RegExp.$3 第三个分组 12

// 也可以这样处理
time = time.replace(reg, (big, ...arg)=>{
    let [$1, $2, $3] = arg
    $2.length< 2 ? $2 = "0" + $2 : null
    $3.length< 2 ? $2 = "0" + $3 : null
    return $1+'年'$2+'月'$3+'日'
})


// 案例： 单词首字母大写
let str = "good good study, day day up!";
let reg = /\b([a-zA-Z])[a-zA-Z]*\b/g
// 因为replce会捕获六次所以回调函数 会被执行6次， 每一次都把正则匹配信息传递给函数
str = str.replace(reg, (...arg)=> {
    let [content, $1] = arg
    $1 = $1.toUpperCase()
    content = content.substring(1)
    return $1 + content
})
// Good Good Study, Day Day Up!
```

## Array.Map()仿写

- map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
- **注意：** map() 不会对空数组进行检测。
- **注意：** map() 不会改变原始数组。

```js
Array.prototype.newMap = function (callback) {
  var length = this.length;
  if (length === 0) {
    return;
  }
  var newArray = [];
  for (let i = 0; i < length; i++) {
    var nowItem = callback((item = this[i]), (index = i));
    newArray.push(nowItem);
  }
  return newArray;
};
// 例子：
let arr = [1, 2, 3, 6];
let newArr = arr.newMap((item, index) => {
  return item + 1;
});
console.log(newArr); // [ 2, 3, 4, 7 ]
```

## 查找字符串中最多的字符

```js
// ! 找字符串中出现最多的字符
// ? 统计最多的那个字符的次数。 那个字符是最多的
// ? return object
String.prototype.findMostStr = function () {
  var obj = {};
  var defaultNum = 0;
  for (let i = 0; i < this.length; i++) {
    var value = this[i];
    if (obj[value] == null) {
      obj[value] = defaultNum + 1;
    } else if (obj[value] != null) {
      obj[value] = obj[value] + 1;
    }
  }
  var defaultMaxObj = {};
  var defaultNum = 0;
  for (const key in obj) {
    if (obj[key] >= defaultNum) {
      defaultNum = obj[key];
    }
  }
  for (const key in obj) {
    if (obj[key] === defaultNum) {
      defaultMaxObj[key] = obj[key];
    }
  }
  return defaultMaxObj;
};
// 例子：
var str = "nininihaoa";
var maxStrs = str.findMostStr();
// { n: 3, i: 3 }
```

## scroll.js 封装

```js
// 当页面触底时  scrollHeight  == scrollTop + clientHeight
// 当页面 滚动到底部时 执行 callback()。 当isEnd 为 true 时 不允许执行 callback()。
const scroll = {
  isEnd: false,
  start(callback) {
    let timer = null;
    callback &&
      window.addEventListener("scroll", () => {
        if (timer) {
          clearTimeout(timer);
        }
        // 函数防抖
        timer = setTimeout(() => {
          // 浏览器向上滚动的高度
          const scrollTop =
            document.documentElement.scrollTop || document.body.scrollTop;
          // 文档的真实高度
          const scrollHeight = document.documentElement.scrollHeight;
          // 浏览器窗口（文档）的可视高度,就是肉眼可见的那部分全屏高度
          const clientHeight = document.documentElement.clientHeight;
          if (!this.isEnd && scrollHeight == scrollTop + clientHeight) {
            window.scrollTo(0, scrollTop - 100);
            // 请求数据
            callback();
          }
        }, 300);
      });
  },
  // 当有需求是触底不执行 callback()时 则执行 scroll.end()
  end() {
    this.isEnd = true;
  },
};

export default scroll;
```

## offset、client、scroll 的不同

### offset 偏移量

- **定位父级 offsetParent**

  - offsetParent 定义： 和当前元素最近的经过定位的父级元素。如果没有那么就是 body。
  - 如果**元素自身有 fixed 定位**， **offsetParent 是 null**
  - **body 的 offsetParent 是 null**

- **offsetLeft、 offsetTop**

  - **offsetLeft 指的是当前元素的左边框到 offsetPartent 元素的左边框的距离**
  - **offsetTop 指的是 当前元素的上边框到 offsetParent 元素的上边框的距离**

- **offsetHeight、 offsetWidth**
  - **offsetWidth = width(元素的宽度) + padding-width(元素内边距左右宽度) + border-width(元素边框左右宽度)**
  - **offsetHeight = height(元素的高度) + padding-height(元素内边距上下高度) + border-height(元素边框上下高度)**

### client 客户端大小

- **定义： 指的是元素 内容到内边距占据空间的大小**

- **clientWidth**
  - clientWidth = width(元素宽度) + padding-width(左右宽度) (不包含 border)
- **clientHeight**
  - clientHeight = height(元素) + padding-height(上下高度) (不包含 border)
- **clientLeft**
  - 元素左边框的大小
- **clientTop**
  - 元素上边框的大小

```js
// 一般用于获取页面可视 宽度 高度大小
document.documentElement.clientWidth || document.body.clientWidth
document.documentElement.clientHeight || document.body.clientHeight

注意：
	1. 都是只读属性
    2. 如果给元素设置 display:none; 客户端 client 属性都为0
```

### scroll 滚动

- scrollHeight：表示元素的总高度，包含由于溢出而无法在网页上的不可见部分
  - 无滚动条时： 相等于 clientHeight
  - 有滚动条时： 还要加上 滚动条滚动的高度
- scrollWidth: 表示元素的总宽度，包含由于溢出而无法在网页上的不可见部分
  - 无滚动条时： 相等于 clientWidth
  - 有滚动条时： 还要加上 滚动条滚动的宽度
- scrollTop
  - 滚动条滚动的高度
- scrollLeft
  - 滚动条滚动的宽度

## 页面滚动条相关信息

### 获取当前页面滚动条纵坐标

`document.body.scrollTop` 和 `document.documentElement.scrollTop`

### 获取当前页面滚动条横坐标

`document.body.scrollLeft` 和 `document.documentElement.scrollLeft`

### 不同的浏览器 scrollTop 差异

#### IE6/7/8

- 可以使用 `document.documentElement.scrollTop`

#### IE9 以上的版本

- 使用 `window.pageYOffset` 或 `document.documentElement.scrollTop`

#### Safari

- 使用`window.pageYOffset` 或 `document.body.scrollTop`

#### Firefox

- 使用 `window.pageYOffset` 或 `document.documentElement.scrollTop`

#### Chrome

- 只认识 `document.body.scrollTop`

### 总结获取页面纵向滚动的位置

```js
let heightTop = document.documentElement.scrollTop || document.body.scrollTop;
// document.documentElement.scrollTop 兼容 IE 和 Firefox 浏览器
// document.body.scrollTop 兼容Chrome 和 Safari 浏览器
```

## 理解 [BFC](https://www.jianshu.com/p/0d713b32cd0d)

### 什么是 BFC

- BFC 全称 块格式化上下文(Block Formatting Context)

> 一个块格式化上下文（block formatting context） 是 Web 页面的可视化 CSS 渲染出的一部分。它是块级盒布局出现的区域，也是浮动层元素进行交互的区域。

### BFC 的创建

```
1.根元素(body)或其它包含它的元素
2.浮动元素 (元素的 float 不是 none)
3.绝对定位元素 (元素具有 position 为 absolute 或 fixed)
4.内联块 (元素具有 display: inline-block)
5.表格单元格 (元素具有 display: table-cell，HTML表格单元格默认属性)
6.表格标题 (元素具有 display: table-caption, HTML表格标题默认属性)
7.具有overflow 且值不是 visible 的块元素，
8.display: flow-root
9.column-span: all 应当总是会创建一个新的格式化上下文，即便具有 column-span: all 的元素并不被包裹在一个多列容器中。
10.一个块格式化上下文包括创建它的元素内部所有内容，除了被包含于创建新的块级格式化上下文的后代元素内的元素。

块格式化上下文对于定位 (参见 float) 与清除浮动 (参见 clear) 很重要。定位和清除浮动的样式规则只适用于处于同一块格式化上下文内的元素。浮动不会影响其它块格式化上下文中元素的布局，并且清除浮动只能清除同一块格式化上下文中在它前面的元素的浮动。
```

### BFC 特性

1. 使 BFC 内部浮动元素不会到处乱跑
2. 和浮动元素产生边界

#### 1. 使 BFC 内部浮动元素不会到处乱跑

**没有产生 BFC 的情况**

```html
<div class="out">
  <div class="in"></div>
</div>
```

```css
.out {
  border: 10px solid red;
  min-height: 20px;
}
.in {
  background: gray;
  height: 100px;
}
```

效果图：

- 如果我给里面的元素一个 float 或者绝对定位，它就会脱离普通文档流中

```css
.out {
  border: 10px solid red;
  min-height: 20px;
}
.in {
  background: gray;
  width: 80px;
  height: 100px;
  position: absolute;
}
```

效果图：

**此时如果我们还想让外层元素包裹住内层元素该如果去做？？**

- 让外层元素产生一个 BFC

#### 2.和浮动元素产生边界

- 一般情况下如果没有 BFC 的话，我们想要让普通元素与浮动元素产生左右边距，需要将非浮动元素的 maring 设置为浮动元素的宽度加上你想要产生边距的宽度

## 时间格式化处理函数

```js
/**
    *  formatTime 时间字符串的格式化处理
        @params
            templete: [string] 我们最后希望获取的日期格式的模板
            模板规则： {0}->年 {1-5}-> 月日分秒
        @return
            [string] 格式化后的时间字符串
*/
function formatTime(template = "{0}年{1}月{2}日 {3}时{4}分{5}秒") {
    // 1. 首页获取时间字符串的年月日等信息
    let timeAry = this.match(/\d+/g)
    // console.log(timeAry)  // [ '2019', '8', '13', '16', '51', '3' ]
    return template.replace(/\{(\d+)\}/g, (content, $1) => {
        // content: 当前本次大匹配的信息 $1：本次小分组单独匹配的信息
        // 以$1的值为索引， 到 timeAry 中找到对应的时间 （如果没有用 00 替代）
        let time = timeAry[$1] || "00"
        time.length <2 ? time= "0" + time: null
        return time
    })
}

// 用于 格式化当前时间
Date.prototype.nowFormatTime = function (
  timeTemplate = "{0}年{1}月{2}日{3}时{4}分"
) {
  var timeStr = this.toString();
  var reg = /(\d{2})\s(\d{4})\s((\d{2}):(\d{2}):(\d{2}))/g;
  var getReg = reg.exec(timeStr);
  var timeArr = [];
  timeArr.push(getReg[2]);
  timeArr.push(this.getMonth().toString());
  timeArr.push(getReg[1]);
  timeArr.push(getReg[4]);
  timeArr.push(getReg[5]);
  var formatTime = timeTemplate.replace(/\{(\d+)\}/g, (content, $1) => {
    var time = timeArr[$1] || "00";
    time.length < 2 ? (time = "0" + time) : null;
    return time;
  });
  console.log(formatTime);
  return formatTime;
};
// 例子：
var now = new Date();
console.log(now.nowFormatTime();)
// 2020年08月16日15时22分
```

## 获取 URL 参数函数

```js
/**
 * queryURLParams 获取URL地址问号后面的参数信息 （可能也包含HASH值）
 *   @params
 *   @return
 *       [object] 把所有问号参数信息以键值对的方式返回
 */

function queryURLParams() {
  let obj = {};
  this.replace(/([^?=&#]+)=([^?=&#]+)/g, (...[, $1, $2]) => {
    obj[$1] = $2;
  });

  this.replace(/#([^?=&#]+)/g, (...[, $1]) => {
    obj["HASH"] = $1;
  });

  return obj;
}
```

## 生成随机数的方法 （不同范围、类型的随机数）

### 生成随机数

#### 生成 0=< X <1 的随机数

```js
const random = Math.random();
```

#### 生成 [n,m) 的随机数

```js
Math.random() * (m - n) + n;
```

#### 生成 [n,m]、 (n,m)、 (n,m] 的随机数

```js
//取得[n,m]范围随机数
function fullClose(n, m) {
  var result = Math.random() * (m + 1 - n) + n;
  while (result > m) {
    result = Math.random() * (m + 1 - n) + n;
  }
  return result;
}

//取得(n,m)范围随机数
function fullOpen(n, m) {
  var result = Math.random() * (m - n) + n;
  while (result == n) {
    result = Math.random() * (m - n) + n;
  }
  return result;
}

//取得(n,m]范围随机数
function leftOpen(n, m) {
  var result = Math.random() * (m - n + 1) + n - 1;
  while (result < n) {
    result = Math.random() * (m - n + 1) + n - 1;
  }
  return result;
}
```

### 生成随机整数

#### 随机生成 0、1 这两个整数

```js
Math.round(Math.random());
```

#### 生成 [0, n)的随机整数

```js
Math.floor(Math.random() * n);
```

#### 生成 [1,n]的随机整数

```js
Math.floor(Math.random() * n) + 1;
```

#### 生成 [ min, max ] 范围内的随机整数

```js
Math.floor(Math.random() * (max - min + 1)) + min;
```

### 生成随机字符串

#### 生成指定位数的纯数字字符串

```js
//生成n位数字字符串
function randomNum(n) {
  var res = "";
  for (var i = 0; i < n; i++) {
    res += Math.floor(Math.random() * 10);
  }
  return res;
}
```

#### 生成指定位数的数字字母混合的字符串

```js
//生成n位数字字母混合字符串
function generateMixed(n) {
  var chars = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var res = "";
  for (var i = 0; i < n; i++) {
    var id = Math.floor(Math.random() * 36);
    res += chars[id];
  }
  return res;
}
```

## null 和 undefined 的区别

> 在 JavaScript 中存在这样两种原始类型:Null 与 Undefined。这两种类型常常会使 JavaScript 的开发人员产生疑惑，在什么时候是 Null，什么时候又是 Undefined?

- 在声明的变量还没有被初始化的时候，变量的默认值是 **undefined**

```js
let a;
console.log(a); //undefined
```

- null 表示尚未存在的对象，常用来表示函数企图返回一个不存在的对象。

```js
console.log(document.getElementById("notExistElement")); // null
// 当页面上不存在id为"notExistElement"的DOM节点时 就是null 因为我们尝试获取一个不存在的对象
```

- `console.log(null == undefined)` 打印的是 ture

```
其实这是JavaScript最初实现的一个错误，后来被ECMAScript沿用下来。
在今天我们可以解释为，null即是一个不存在的对象的占位符，但是在实际编码时还是要注意这一特性。
ECMAScript认为undefined是从null派生出来的，所以把它们定义为相等的。
```

- 如何区别这两个

```js
console.log(null === undefined); // false
console.log(typeof null == typeof undefined); // false
// null与undefined的类型是不一样的，所以输出"false"。而===代表绝对等于，在这里null === undefined输出false
```

## 获取文件的后缀名

1. 通过正则表达式获取后缀名

```js
const getFileName = (fileName) => {
  let fileArr = fileName.match(/(\.)([a-zA-Z]+)/);
  return fileArr[2];
};
```

2. 字符串的 split()方法

```js
const getFileName = (fileName) => {
  let fileArr = fileName.split(".");
  return fileArr[1];
};
```

**这两种解决方法不能解决一些边缘情况，这有另一个更加强大的解决方法。**

3. Sting 的 `slice` `lastIndexOf` 方法

```js
const getFileName = (fileName) => {
  return fileName.slice(((fileName.lastIndexOf(".") - 1) >>> 0) + 2);
};
```

## 图片懒加载的原理和实现

### 使用场景

当页面需要的图片很多，那么服务器的压力就会很大。这不仅影响了页面的渲染速度 还 占用了带宽。 比如一张 1M 的图片。在并发的情况下，如果达到 1000 并发，就是同时有 1000 人访问一个网站，就会产生 1G 的带宽，那么服务器有可能会出现问题。 为了解决上面的问题，就出现用懒加载的方式减轻服务器的压力，优先加载可视区域的内容而其他部分的等进入可视区域再加载，从而提高了性能。

### 懒加载的原理

**在图片没有进入可视区域的时候，先不给 img 标签的 src 属性赋值，这样浏览器就不会发送请求了，等到图片进入了可视区域再给 src 赋值**

### 懒加载的实现

**实现步骤**

1. 先加载 loading 的图片
2. **再判断哪些图片已经到了可视区域**
3. 替换这些图片的 src 属性 换上真正需要加载的图片的 src 地址

例子：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>懒加载实例</title>
    <style>
      .imgList {
        width: 80%;
        margin: 0 auto;
      }

      .img_item {
        width: 100%;
        background: #9999997a;
        margin: 20px 0;
      }
    </style>
  </head>
  <body>
    <div class="imgList">
      <img
        class="img_item"
        src="./imgs/loading.gif"
        data-src="./imgs/demo01.jpg"
      />
      <img
        class="img_item"
        src="./imgs/loading.gif"
        data-src="./imgs/demo02.jpg"
      />
      <img
        class="img_item"
        src="./imgs/loading.gif"
        data-src="./imgs/demo03.jpg"
      />
      <img
        class="img_item"
        src="./imgs/loading.gif"
        data-src="./imgs/demo04.jpg"
      />
      <img
        class="img_item"
        src="./imgs/loading.gif"
        data-src="./imgs/demo05.jpg"
      />
      <img
        class="img_item"
        src="./imgs/loading.gif"
        data-src="./imgs/demo06.jpg"
      />
      <img
        class="img_item"
        src="./imgs/loading.gif"
        data-src="./imgs/demo07.jpg"
      />
      <img
        class="img_item"
        src="./imgs/loading.gif"
        data-src="./imgs/demo08.jpg"
      />
      <img
        class="img_item"
        src="./imgs/loading.gif"
        data-src="./imgs/demo09.jpg"
      />
      <img
        class="img_item"
        src="./imgs/loading.gif"
        data-src="./imgs/demo10.jpg"
      />
    </div>
    <script>
      // 等到全部资源加载完全再加载
      window.onload = function () {
        // 获取图片列表
        let imgList = document.getElementsByClassName("imgList")[0].children;

        // 页面在加载完全 执行一次
        lazyload(imgList);

        // 触发页面滚动函数
        window.onscroll = function () {
          // 当页面滚动时 执行 懒加载函数
          lazyload(imgList);
        };

        // 获取元素到浏览器顶部的 高度
        function getImgTop(e) {
          return e.offsetTop;
        }

        // 懒加载实现
        function lazyload(imgs) {
          // 获取屏幕可是高度
          const viewHeight = window.innerHeight;
          // 获取页面滚动条纵向滚动的值
          let scrollHeight =
            document.documentElement.scrollTop || document.body.scrollTop;
          for (let i = 0; i < imgs.length; i++) {
            if (viewHeight + scrollHeight > getImgTop(imgs[i])) {
              (function (i) {
                setTimeout(() => {
                  let temp = new Image();
                  temp.src = imgs[i].getAttribute("data-src");
                  temp.onload = function () {
                    imgs[i].setAttribute("src", temp.src);
                  };
                }, 1000);
              })(i);
            }
          }
        }
      };
    </script>
  </body>
</html>
```

## Object.assign(target, source)

- (MDN 地址)[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign]

### Object.assign(target, source)使用

- 作用： 用于将所有**可枚举属性的值**从一个或多个源对象复制到目标对象。它将返回目标对象。
- target 为 目标对象
- source 为 源对象

注意: 如果 源对象 有 和 目标对象 相同的键， 那么源对象的的键中的值将覆盖目标对象的键中的值

例子：

```js
let target = {
  name: "yp",
  age: 21,
  ifShow: false,
};

let sources = {
  ifShow: true,
  birthday: "11-16",
};
// 将 源对象 sources 的值赋给 目标对象 target
let newObj = Object.assign(target, sources);
console.log(target); // { name: 'yp', age: 21, ifShow: true, birthday: '11-16' }
console.log(newObj); // { name: 'yp', age: 21, ifShow: true, birthday: '11-16' }
// 注意： 目标对象自身也会改变。
```

### Object.assign 拷贝的问题

看个例子：

```js
let obj1 = {
  a: 1,
  b: {
    c: {
      d: 0,
    },
  },
};
let obj2 = Object.assign({}, obj1);
let obj3 = JSON.parse(JSON.stringify(obj1));
obj1.a = 2;
console.log(obj1.a); //2
console.log(obj2.a); //1
console.log(obj3.a); //1
obj1.b.c.d = 1;
console.log(obj1.b.c.d); //1
console.log(obj2.b.c.d); //1
console.log(obj3.b.c.d); //0
```

当我们修改 obj1 源对象的一级属性的值 不会改变 obj2 一级属性的值。 此方法为深拷贝 但是 如果我们修改 obj1 源对象的二级属性以后的内容 我们 obj2 的二级属性的内容也发送改变。 此方法为浅拷贝。

总结： 当修改对象中的一级属性内容 是深拷贝， 修改对象中二级属性内容是 浅拷贝。

## 数组去重操作

### 双层 for 循环去重

```js
function unique(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1); // 删除重复的值
        j--; // j-- 保证数据每一个都被循环到
      }
    }
  }
  return arr;
}
```

### 利用 indexOf() 去重

```js
// 对  array 检查
function unique(arr) {
    // 首先判断 是否为数组
    if(!Array.isArray(arr) {
        console.log('type err')
        return
    })
    // 进行数据去重操作
    let array = []
    for(let i=0; i<arr.length; i++) {
        if(array.indexOf(arr[i]) === -1) {
            array.push(arr[i])
        }
    }
    return array;
}

// 对原数组进行检查
Array.prototype.splitSame = function () {
  var newArr = [];
  for (let i = 0; i < this.length; i++) {
    console.log(this.indexOf(this[i]));
    if (this.indexOf(this[i]) != i) {
      // ! 代表 这个是重复的数
      this.splice(i, 1);
      i--;
    } else if (this.indexOf(this[i]) === i) {
      // ! 代表是唯一的
      newArr.push(this[i]);
    }
  }
  console.log(newArr);
  return newArr;
};
```

### 使用 Array.from 和 set 去重

[Array.from](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

- Array.from() 方法从**一个类似数组**或**可迭代对象**创建一个新的，浅拷贝的数组实例。

```js
console.log(Array.from("foo"));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], (x) => x + x));
// expected output: Array [2, 4, 6]
```

[Set 对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set)

- Set 对象**允许你存储任何类型的唯一值，无论是原始值或者是对象引用。**具有去重作用

```js
const set1 = new Set([1, 2, 3, 4, 5]);

console.log(set1.has(1));
// expected output: true

console.log(set1.has(5));
// expected output: true

console.log(set1.has(6));
// expected output: false
```

### 去重操作

```js
function unique(arr) {
  if (!Array.isArray(arr)) {
    console.log("type err");
    return;
  }
  return Array.from(new Set(arr));
}
```

### 利用对象的键值唯一性

```js
// 思路: 遍历传入数组时，判断数组的值是否为js对象的键，不是的话给对象新增该键并放入新数组。
// 注意点：判断是否为js对象键时，会自动对传入的键执行“toString()”， 不同的键可能会被误认为一样，例如n[val]-- n[1]、n["1"]；  解决上述问题还是得调用“indexOf”
function uniq(array) {
  let temp = {};
  let r = [];
  let len = array.length,
    val,
    type;

  for (let i = 0; i < len; i++) {
    val = array[i]; // 当前元素的值
    type = typeof val; // 当前元素的类型
    if (!temp[val]) {
      temp[val] = type;
      r.push(val);
    } else if (temp[val].indexOf(type) < 0) {
      temp[val].push(type);
      r.push(val);
    }
  }
  return r;
}

var arr = [1, 3, 5, 6, 9, "3", 5];
arr.removeEqually();
// [ 1, 3, 5, 6, 9, '3' ]
```

## 数组转换为对象

### 第一种

```js
let obj = {};
let arr = ["1", "2", "3"];
for (let key in arr) {
  obj[key] = arr[key];
}
console.log(obj);
```

### 第二种

```js
const arr = [1,2,3]
const obj = {..arr}
console.log(obj)
```

## 性能追踪

- 如果想测试一段 JS 代码的执行耗时 可以使用 `performance`

```js
// 首先想要使用 performance 这个方法 先引入 一个叫  perf_hooks 的包
const { performance } = require("perf_hooks");
let start = performance.now();
let sum = 0;
for (let i = 0; i < 1000000; i++) {
  sum += 1;
}
let end = performance.now();
console.log(end - start);
```

## 关于 JS 的数据类型，你知多少？

数据类型是一门编程语言的基础知识， JS 的数据类型可以分为 7 种： **空 Null**、**未定义 Undefined**、**数字 Number**、**字符串 String**、**布尔值 Boolean**、**符号 Symbol**、**对象 Object**

这里前面六种为 **基础类型**， 对象为 **引用类型**。

```
这两者的区别在于，基础类型的数据在被引用或拷贝时，是值传递，也就是说会创建一个完全相等的变量；
而引用类型只是创建一个指针指向原有的变量，实际上两个变量是“共享”这个数据的，并没有重新创建一个新的数据。
```

下面分别来介绍下这七种类型：

### Undefined

_这是一个很特殊的数据类型，它只有一个值，就是 Undefined_

通过以下几种法师来得到 undefined：

```js
/**
    1. 引用已声明的但没有初始化的变量
    2. 引用未定义的对象属性
    3. 执行无返回值的函数
    4. 执行 void 表达式 （它作为表达式还可以配合三目运算符使用，代表不执行任何操作。）
    5. 全局变量 window.undefined 或 undefined 
*/
var a; // undefined
var o = {};
o.b(
  // undefined
  () => {}
)(); // undefined
void 0; // undefined
window.undefined; // undefined

// void 0 配合 三木运算符
x > 0 && x < 5 ? fn() : void 0;
```

验证判断一个变量是否为 undefinded

```js
// 第一种方式： 通过 逻辑取非 操作来将变量x强制转换为布尔值
if (!x) {
}
// 第二种方式： 通过 3 个等号将变量 x 和 undefined 做真值比较
if (x === undefined) {
}
// 第三种方式： 通过 typeof 关键字获取变量x的类型，然后和 'undefined' 字符串做真值比较
if (typeof x === "undefined") {
}
/** 总结： 
    方式 1 不可行，因为只要变量 x 的值为 undefined、空字符串、数值 0、null 时都会判断为真
    方式 2 也存在一些问题，虽然通过 “===” 和 undefined 值做比较是可行的，但如果 x 未定义则会抛出错误 “ReferenceError: x is not defined” 导致程序执行终止，这对于代码的健壮性显然是不利的。
    方式 3 解决了方式二问题
**/
```

### Null

Null 数据类型和 Undefined 类似，只有唯一的一个值 null，都可以表示空值，甚至我们通过 “==” 来比较它们是否相等的时候得到的结果都是 true，但 null 是 JavaScript 保留关键字，而 undefined 只是一个常量。

也就是说我们可以声明名称为 undefined 的变量（虽然只能在老版本的 IE 浏览器中给它重新赋值），但将 null 作为变量使用时则会报错。

### Boolean

Boolean 数据类型只有两个值：true 和 false，分别代表真和假。

注意： 0、空字符串、null、undefined 在条件判断中都会返回 false。

### Number

Number 是数值类型， 有两个特殊的数值需要注意。 就是 NaN 和 Infinity。

- NaN 通常在计算失败的时候会得到该值。 要判断一个变量是否为 NaN 则可以通过 Number.isNaN 函数进行判断

- Infinity 是无穷大，加上负号 “-” 会变成无穷小，在某些场景下比较有用，比如通过数值来表示权重或者优先级，Infinity 可以表示最高优先级或最大权重。

### String

String 类型是最常用的数据类型了。

### Symbol (符号、代号)

是 ES6 中引入的数据类型，它表示一个*唯一的常量*， 通过 Symbol 函数来创建对应的数据类型，创建时可以添加*变量描述*， 该变量描述在传入时会被强行转换成 _字符串_ 进行存储

```js
var a = Symbol("1");
var b = Symbol(1);
a.description === b.description; // true
var c = Symbol({ id: 1 });
c.description; // [object Object]
var _a = Symbol("1");
_a == a; // false
```

用处：

**1. 避免常量值重复**

假设有个 getValue 函数，根据传入的字符串参数 key 执行对应代码逻辑。代码如下所示：

```js
function getValue(key) {
  switch(key){
    case 'A':
      ...
    ...
    case 'B':
      ...
  }
}
getValue('B');
```

这段代码对调用者而言非常不友好，因为代码中使用了魔术字符串（魔术字符串是指在代码之中多次出现、与代码形成强耦合的某一个具体的字符串或者数值），导致调用 getValue 函数时需要查看函数源码才能找到参数 key 的可选值。所以可以将参数 key 的值以常量的方式声明出来。

```js
const KEY = {
  alibaba: 'A',
  baidu: 'B',
  ...
}
function getValue(key) {
  switch(key){
    case KEY.alibaba:
      ...
    ...
    case KEY.baidu:
      ...
  }
}
getValue(KEY.baidu);
```

但这样也并非完美，假设现在我们要在 KEY 常量中加入一个 key，根据对应的规则，很有可能会出现值重复的情况：

```js
const KEY = {
  alibaba: 'A',
  baidu: 'B',
  ...
  bytedance: 'B'
}
```

会出现问题

`getValue(KEY.baidu) // 等同于 getValue(KEY.bytedance)`

所以在这种场景下更适合使用 Symbol，我们不关心值本身，只关心值的唯一性。

```js
const KEY = {
  alibaba: Symbol(),
  baidu: Symbol(),
  ...
  bytedance: Symbol()
}
```

**2. 避免对象属性覆盖**

假设有这样一个函数 fn，需要对传入的对象参数添加一个临时属性 user，但可能该对象参数中已经有这个属性了，如果直接赋值就会覆盖之前的值。此时就可以使用 Symbol 来避免这个问题。

创建一个 Symbol 数据类型的变量，然后将该变量作为对象参数的属性进行赋值和读取，这样就能避免覆盖的情况，示例代码如下：

```js
function fn(o) { // {user: {id: xx, name: yy}}
  const s = Symbol()
  o[s] = 'zzz'
  ...
}
```

### Object

相对于基础类型，引用类型 Object 则复杂很多。简单地说，Object 类型数据就是键值对的集合，键是一个字符串（或者 Symbol） ，值可以是任意类型的值； 复杂地说，Object 又包括很多子类型，比如 Date、Array、Set、RegExp。

对于 Object 类型，我们重点理解一种常见的操作，即深拷贝。

- 由于引用类型在赋值时只传递指针，这种拷贝方式称为**浅拷贝**。
- 而创建一个新的与之相同的引用类型数据的过程称之为**深拷贝**。

## 函数防抖节流

- 防抖和节流是前端性能优化的知识，在实际开发中遇到的情况相当高。
- 以 监听滚动条事件的例子来说：当我们滚动滚动条时会不断执行滚动事件处理函数，而这样大大的影响了性能。函数执行的频率太高了。

### 防抖

- 基于上面的场景，设计防抖。**防抖的含义就是让某个事件期限内，事件处理函数只执行一次。**

```js
// 通过 计时器 setTimeout实现
// 防抖函数 fn 执行的事件处理函数， deplay 定时器的延迟时间
function debounce(fn, deplay) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, deplay);
  };
}
// 获取滚动条位置的函数
function scrollEvent() {
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

  console.log("滚动条的位置：" + scrollTop);
}

// 滚动条滚动时 会执行一个函数
window.onscroll = debounce(scrollEvent, 1000);
```

### 节流

- 节流可以比喻为 水库里的阀门 在指定时间内开，一段时间内关闭。

- 节流的含义就是 **在函数执行一次后，该函数在指定时间内期限内不在工作，直到过了这段时间才能重新生效**

```js
// 节流函数
function debounce(fn, deplay) {
  let flag = true;
  return function () {
    if (flag) {
      flag = false;
      setTimeout(() => {
        fn();
        flag = true;
      }, deplay);
    } else {
      console.log("清除了");
      return;
    }
  };
}

function scrollEvent() {
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

  console.log("滚动条的位置：" + scrollTop);
}

window.onscroll = debounce(scrollEvent, 1000);
```

## 浏览器渲染网页的全过程

全过程：**请求数据 -> 解析 -> 构建树 -> 渲染布局 -> 绘制**

1. 浏览器去请求 HTML 、CSS、JS 等资源。将获取到的**HTML 文档解析成 DOM 树。**
2. 处理 CSS，构成层叠样式表模型**CSSOM。**
3. 将 DOM 树 和 CSSOM**合并为渲染树 Render Tree**
4. 渲染树的每个元素包含的内容都是计算过的，它被称之为**布局`layout`**。浏览器使用一种流式处理的方法，只需要一次绘制操作就可以布局所有的元素。
5. 最后一步**就是把渲染树绘制上。**

## 重绘和回流

- 重绘： 当渲染树中的元素外观（例如：颜色）发生改变，但不影响布局，会产生重绘。
- 回流： 当渲染树的元素布局（元素大小尺寸、显示隐藏）发生改变，会产生重绘回流。
- **回流必将会重绘， 而重绘不一定会引起回流。**

## 构造函数 function 的六道面试题

```js
第一题;
var fun = function () {
  this.name = "peter";
  return {
    name: "jack",
  };
};
var p = new fun();
console.log(p); // { name: 'jack' }
console.log(p.name); // jack

第二道;
var fun = function () {
  this.name = "peter";
  return "jack";
};
var p = new fun();
console.log(p); // fun { name: 'peter' }
console.log(p.name); // peter
```

- 结论： 第一题和第二题考查的是构造函数的返回值问题
  - 每个函数都有返回值，如果使用了`return`语句，则返回`return`后跟的值，如果没有使用`return`，则默认返回`undefined`。
  - **注意：**这个是**构造函数**， **默认返回的是 this 对象**。如果构造函数中使用了 return 并且 return 的是个对象，则构造函数就会返回这个对象。 其他的都返回这个 `this`。

```js
第三题;
var fun = function () {};
fun.prototype = {
  info: {
    name: "peter",
    age: 25,
  },
};
var a = new fun();
var b = new fun();
a.info.name = "jack";
b.info.name = "top";
console.log(a.info.name); // top
console.log(b.info.name); // top
```

- 首先原型的执行流程
  - 先查找构造函数实例中的属性和方法， 如果有就立刻返回。
  - 否则，就会去它的原型对象 prototype 中找， 如果有就返回，如果没有在往上找。

## 判断数组中是否存在某个数值

1.  `array.indexOf()`
    1. 如果存在就返回该值的下标， 不存在返回 -1
2.  `array.includes()`
    1. 此方法判断数组中是否存在某个值，如果存在返回 true 否则返回 false
3.  `array.find()`
    1. 返回数组中满足条件的第一个元素的值，没有返回 undefined
4.  `array.findIndex()`
    1. 返回数组中满足条件的第一个元素的索引，如果没有找到返回 -1

## 数据脱敏处理

```javascript
/**
 * 敏感数据处理方法
 * @param options
    dataString 脱敏数据源
    start  开始脱敏的下标
    end    结束的脱敏的下标
    _replaceStr  用什么脱敏符号表示
 * @returns false [表示dataString 必须是个字符串]
 * @returns handleStr [脱敏后的数据]
 * 
 * @egg  sensitiveDataHandle({ dataString: "12345678910" }) =>  ******78910
 */
const sensitiveDataHandle = (options) => {
  let { dataString, start, end, _replaceStr = "*" } = options;
  let str = dataString,
    handleStr = "",
    replaceStr = "";
  if (typeof dataString != "string") {
    return false;
  }
  // 如果start 、 end 中有没传值的， 默认对字符串中的 0-5 部分的字符进行脱敏处理
  if (!start || !end) {
    start = 0;
    end = 5;
  }
  // 需要进行脱敏的部分
  let subStr = str.substring(start, end + 1);
  // 拼接 * 号
  for (let i = 0; i < subStr.length; i++) {
    replaceStr = replaceStr + _replaceStr;
  }
  handleStr = str.replace(subStr, replaceStr);
  return handleStr;
};
```

## 获取当前日期 yyyy-MM-dd

```js
export const getCurrentDate = () => {
  let current = new Date();
  let dateArray = current.toLocaleDateString().split("/");
  if (Number(dateArray[1]) < 10) {
    dateArray[1] = "0" + dateArray[1];
  }
  if (Number(dateArray[2]) < 10) {
    dateArray[2] = "0" + dateArray[2];
  }
  return `${dateArray[0]}-${dateArray[1]}-${dateArray[2]}`;
};
```

## 获取当前月份的最后一天

```js
export const getCurrentMonthLast = () => {
  let date = new Date();
  let currentMonth = date.getMonth();
  let nextMonth = ++currentMonth;
  let nextMonthFirstDay = new Date(date.getFullYear(), nextMonth, 1);
  let oneDay = 1000 * 60 * 60 * 24;
  let lastTime = new Date(nextMonthFirstDay - oneDay);
  let month = parseInt(lastTime.getMonth() + 1);
  let day = lastTime.getDate();
  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }
  return date.getFullYear() + "-" + month + "-" + day;
};
```

## 判断是 PC 还是移动端

```js
export const isPlatform = () => {
  if (
    navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    )
  ) {
    return "Mobile";
  } else {
    return "Pc";
  }
};
```
