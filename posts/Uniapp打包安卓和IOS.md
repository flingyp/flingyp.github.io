# Uniapp APP云打包 安卓 和 IOS 开发记录

## 基础信息完善

1. 基础配置
2. App 图标配置
3. App 启动页配置（通用启动界面、自定义）

## 开发测试

安卓：本地开发直接运行在本地浏览器即可，调试可先打自定义基座后运行在模拟器上或者通过 USB 连接手机调试

IOS：需要借用 iTunes，通过 USB 连接手机，运行在手机上，使用自定义基座后运行，通过 USB 连接手机调试

体验：可使用 [蒲公英](https://www.pgyer.com/) 发布后进行体验版使用

## 打包配置

安卓 和 IOS 都需要配置相关信息

### 安卓

安卓证书使用指南：https://ask.dcloud.net.cn/article/35985

可以使用自由证书或者云端证书

安卓自有证书生成指南：https://ask.dcloud.net.cn/article/35777

1. 证书别名
2. 证书私钥密码
3. 证书文件

### IOS

1. 证书私钥密码
2. 证书 `profile` 文件
3. 私钥证书

前提是苹果开发者账号，并且已经创建了 AppID，必须在Mac电脑上才可以创建上面这些东西

如果不是苹果电脑可以使用 [香蕉云编](https://www.yunedit.com/) 去生成

## 注意

1. 苹果手机的 `UDID` 标识可以通过爱思助手获取
2. IOS 开发描述文件必须绑定调试设备，只有授权的设备才可以直接安装基座，所以在申请开发描述文件之前，先添加调试的 IOS 设备的 UDID

## 参考文章

1. [最新uniapp打包IOS详细步骤](https://juejin.cn/post/7216608199012237372)
2. [教你做事，uniapp ios App 打包全流程](https://juejin.cn/post/7264939254290579495)
3. [uniapp打包上线微信小程序、安卓、IOS流程](https://www.bilibili.com/video/BV1Jp4y1V7ad/)
4. [uniapp运行到IOS真机提示 错误:请查看是否设备未加入到证书列表或者确认证书类型是否匹配](https://blog.csdn.net/cengjing123_/article/details/129490094)
5. [hbuilderx云打包ios证书的生成方法](https://blog.csdn.net/weixin_48914851/article/details/114979266)
