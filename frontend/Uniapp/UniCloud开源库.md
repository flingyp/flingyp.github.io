# UniCloud 开源库

## uniPush2.0 消息推送

- [集成文档](https://uniapp.dcloud.net.cn/unipush-v2.html)

### 开通

登录 DCloud 开发者中心，在左侧菜单栏找到 `uni-push 2.0（支持全端推送）` 选择要操作的应用，开通 uniPush 服务即可

> 需要填写的就是 Android 包名、Android 应用签名、iOS 应用 BundleID 和 选择关联云服务空间

### 配置

需要配置各手机应用厂商的消息推送（比较麻烦）

### 客户端接收

`manifest.json` 中的 App 模块配置需要开启 **Push 消息推送**，选择 **uniPush 2.0**

- 在线推送
- 离线推送（需要各手机应用市场支持）

![image.png](https://cdn.nlark.com/yuque/0/2024/png/35988724/1709176914560-f6f41a55-e1fe-447f-a100-85405e8bb29b.png#averageHue=%23282922&clientId=u982b43a1-542d-4&from=paste&height=377&id=VhXvr&originHeight=453&originWidth=598&originalType=binary&ratio=1.2000000476837158&rotation=0&showTitle=false&size=34522&status=done&style=none&taskId=u9276f155-0641-4bee-8125-9c3e295db10&title=&width=498.33331353134656)

区别：

- 当应用在线时，不会创建“通知栏消息”，此时客户端会立即监听到消息内容
- 如果你希望当应用在线时，也通过“通知栏消息”来提醒用户；可以通过以下两种方式实现
  - 手动调用创建本地消息 API `uni.createPushMessage` 创建通知栏消息
  - 服务端执行推送时，传递参数 `force_notification:true`，客户端就会自动创建“通知栏消息”（此时你监听不到消息内容），当用户点击通知栏消息后，APP才能监听到消息内容

**客户端要监听推送消息**

```vue
<script>
export default {
  onLaunch: function () {
    // 监听消息通知
    uni.onPushMessage((res) => {
      console.log('收到推送消息：', res); //监听推送消息
    });
  },
};
</script>
```

**获取客户端用户推送标识**，如果我们需要指定给某些用户发送推送消息，就需要知道该设备的客户端推送标识。

```javascript
uni.getPushClientId({
  success: (res) => {
    let push_clientid = res.cid;
    console.log('客户端推送标识:', push_clientid);
  },
  fail(err) {
    console.log(err);
  },
});
```

### 服务端推送

通过uniCloud云函数来实现推送，创建一个新的云函数并且依赖 `uni-cloud-push` 扩展库

云函数中调用 `uni-cloud-push`扩展库的 `sendMessage` 方法，向客户端推送消息。

后续可以将这个云函数URL化，供其他服务使用HTTP形式调用推送接口

```javascript
'use strict';

//注意这里需要传入你的应用appId，用于指定接收消息的客户端
const uniPush = uniCloud.getPushManager({
  appId: '__UNI__805D8DE',
});

exports.main = async (event, context) => {
  console.log('event->>>>', event);
  // QueryParams -> event.queryStringParameters
  // Body -> JSON.parse(event.body)
  return await uniPush.sendMessage({
    // 填写上一步在uni-app客户端获取到的客户端推送标识push_clientid
    push_clientid: ['49bedf77cd89dd2d5b058dd03a1fb9e5', '5ca73311443a1d14a91365f52be82345'],
    title: '系统通知',
    content: '系统通知内容',
    payload: {
      id: 61,
      type: 0,
    },
    // 强制推送，无论是离线推送还是在线推送都自创建通知栏消息
    force_notification: true,
  });
};
```

## uni-upgrade-center 升级中心

- [集成文档](https://doc.dcloud.net.cn/uniCloud/upgrade-center.html)

APP 升级中心，提供了 APP 版本更新服务

整个升级中心包括两个部分 `uni-upgrade-center Admin 管理后台`、`uni-upgrade-center APP`

1. Android、IOS的APP安装包升级和wgt资源包增量更新
2. 后台管理系统 `uni-upgrade-center Admin`，用于发布新版、设置升级策略

### uni-upgrade-center Admin 管理后台

负责发布新版和管理历史版本APP的上下线

### uni-upgrade-center-app 前台检测更新

除了管理端，客户端则负责前台检查升级更新，弹出提示框，下载和安装新版

提示框弹窗可以自定义UI

只需要导入这个插件 [uni-upgrade-center-APP](https://ext.dcloud.net.cn/plugin?id=4542)，绑定对应服务空间

在 `page.json`添加升级弹窗页面

```json
{
  "pages": [
    {
      "path": "uni_modules/uni-upgrade-center-app/pages/upgrade-popup",
      "style": {
        "disableScroll": true,
        "app-plus": {
          "backgroundColorTop": "transparent",
          "background": "transparent",
          "titleNView": false,
          "scrollIndicator": false,
          "popGesture": "none",
          "animationType": "fade-in",
          "animationDuration": 200
        }
      }
    }
  ]
}
```

在首页或者设置页面调用它提供的检查更新的方法 `check-update`

```vue
<script>
import checkUpdate from '@/uni_modules/uni-upgrade-center-app/utils/check-update.js';
export default {
  onLaunch() {
    checkUpdate();
  },
};
</script>
```
