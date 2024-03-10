# PicGo 图床搭建

利用 Github 作为图片存储，JsDelivr 加速访问，PicGo 作为图片上传工具，实现图片上传

JsDeliver 是一个免费开源的 CDN 加速服务，可以加速我们访问的静态资源

## 创建仓库

创建一个用于存储图片的仓库，并且创建一个 Token 用于 PicGo 访问

Token 创建位置：Settings -> Developer settings -> Personal access tokens -> Generate new token

## PicGo 配置

- [下载地址](https://github.com/Molunerfinn/PicGo/releases)

![](https://cdn.jsdelivr.net/gh/flingyp/ImageStorage/images/1710063609125.png)

自定义域名填写：`https://cdn.jsdelivr.net/gh/${user}/${repository}`
