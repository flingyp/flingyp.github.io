# Uniapp APP 云打包 安卓 和 IOS

## APP 基础信息完善

1. 应用名称
2. 应用描述
3. 应用版本名称（版本号）
4. 应用版本号
5. 应用图标（准备一个 1024\*1024 的图标，HBuilder 会自动生成其他尺寸的图标）
6. 应用启动图配置（安卓就准备一张启动图即可，IOS 的需要自定义 Storyboard 启动界面）

## Android 证书生成

安卓可以使用云端证书也可以自建证书，推荐使用自建证书

参考文章：[安卓证书使用指南](https://ask.dcloud.net.cn/article/35985)

## IOS 证书生成

前提条件下：需要苹果开发者账号，并且已经创建了 AppID

IOS 相关证书和描述文件的生成需要借助 Mac 才可以创建上面这些东西，在 Windows 可以使用 [香蕉云编](https://www.yunedit.com/) 网站生成相关证书和描述文件

1. 证书文件（.p12）
2. 证书私钥密码
3. 描述文件

- 苹果手机的 `UDID` 标识可以通过爱思助手获取
- IOS 开发描述文件必须绑定调试设备，只有授权的设备才可以直接安装基座，所以在申请开发描述文件之前，先添加调试的 IOS 设备的 UDID

## 开发测试

本地开发过程中可以直接运行在 H5 即可，也可以运行在安卓模拟器上，IOS 则需要通过 USB 连接手机，使用自定义基座后运行

测试可以使用 [蒲公英](https://www.pgyer.com/) 分发平台，进行内部分发进行测试使用

## APP 云打包

直接使用 HBuilder 的云打包选项，配置相关文件和参数即可 生成 APK 和 IPA 文件

## IPA 文件上传

IPA 文件的上传也可以使用 [香蕉云编](https://www.yunedit.com/) 来完成

首先需要创建一个 开发者账号专用密码 用于上传 IPA 文件

## 参考文章

1. [最新uniapp打包IOS详细步骤](https://juejin.cn/post/7216608199012237372)
2. [教你做事，uniapp ios App 打包全流程](https://juejin.cn/post/7264939254290579495)
3. [uniapp打包上线微信小程序、安卓、IOS流程](https://www.bilibili.com/video/BV1Jp4y1V7ad/)
4. [uniapp运行到IOS真机提示 错误:请查看是否设备未加入到证书列表或者确认证书类型是否匹配](https://blog.csdn.net/cengjing123_/article/details/129490094)
5. [hbuilderx云打包ios证书的生成方法](https://blog.csdn.net/weixin_48914851/article/details/114979266)
6. [uniapp项目实践总结(二十四)安卓平台 APP 打包教程](https://juejin.cn/post/7282972975933964323)
7. [uniapp项目实践总结(二十五)苹果 ios 平台 APP 打包教程](https://juejin.cn/post/7284221961621028919)
8. [最新 App store 上架教程（uni-app版）](https://ask.dcloud.net.cn/article/37835)
9. [uniapp开发云打包详细流程（包含安卓Android和苹果IOS）](https://blog.csdn.net/weixin_43742167/article/details/129876427)
10. [获取苹果手机设备的UDID](https://www.pgyer.com/tools/udid)
