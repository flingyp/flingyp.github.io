# 关于 Scroll 失效问题

如果你使用到 `scroll` 或 `scrollTo` 等 API，并且使用到了 **smooth** 的滚动行为，但是在滚动时却没有滚动动画的行为（仅在谷歌发现此问题，测试了火狐浏览器没有发现此问题）

解决方式：`chrome://flags/#smooth-scrolling` 输入此 `URL`，在谷歌配置中开启 `Smooth Scrolling`，而它默认是关闭的

参考文章：[scroll behaviour smooth not working at all](https://stackoverflow.com/questions/62098093/scroll-behaviour-smooth-not-working-at-all#:~:text=First%20ensure%20if%20your%20browser%20is%20compatible%20with,to%20change%20a%20small%20setting%20of%20your%20browser.)

同时最好在 CSS 中添加如下代码

```css
html,
body {
  scroll-behavior: smooth;
}
```
