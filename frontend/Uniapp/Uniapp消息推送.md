# UniPush2.0 消息推送

- [集成文档](https://uniapp.dcloud.net.cn/unipush-v2.html)

## 开通

登录 DCloud 开发者中心，在左侧菜单栏找到 `uni-push 2.0（支持全端推送）` 选择要操作的应用，开通 uniPush 服务即可

> 需要填写的就是 Android 包名、Android 应用签名、iOS 应用 BundleID 和 选择关联云服务空间

## 配置

需要配置各手机应用厂商的消息推送（比较麻烦）

## 客户端接收

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

## 服务端推送

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

## 离线推送

### 华为推送（可以不用上架应用市场就可以进行推送）

根据个推提供的文档配置相关参数

在华为推送服务后台配置中申请自分类权益（不然会有推送限制）https://docs.getui.com/getui/mobile/vendor/qps/

在 options HW 配置 `/message/android/category: 'xx'`，具体的值就根据自分类权益来看 https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/message-classification-0000001149358835#section1085395991513

其他：在测试离线推送之前可以先设置 `/message/android/target_user_type': 1`,（华为用于发送测试推送消息，生产不要设置）

踩坑文章1：https://ask.dcloud.net.cn/question/181496

### 小米推送（需要上架后才能进行推送）

根据个推提供的文档配置相关参数

在小米推送服务后台配置中申请通知类别（不然有推送限制）https://dev.mi.com/console/doc/detail?pId=2422#_2

在 options XM 配置 `/extra.channel_id：'channel_id'` 具体的值就是你应用申请的通知类别所分配的ID

```js
await uniPush.sendMessage({
  options: {
    XM: {
      '/extra.channel_id': 'xxxx', // 应用申请的通知类别所分配的ID
    },
  },
});
```

### VIVO 推送（需要上架后才能进行推送）

根据个推提供的文档配置相关参数

配置

```js
await uniPush.sendMessage({
  channel: {
    VV: 1,
  },
  options: {
    VV: {
      '/classification': 1,
      '/notifyType': 4,
      '/extra/callback.id': 'xxx', // 填写的 VIVO 的回执ID
    },
  },
});
```

### OPPO 推送（需要上架后才能进行推送）

根据个推提供的文档配置相关参数

在OPPO后台创建了两个推送通道，OPPO_COMMON_PUSH（通道ID）（走公信通道）、OPPO_INSTANT_PUSH（通道ID）（走私信通道（只支持单推））

填写申请私信通道模版，发送邮件给 OPPO 客服，等待审核通过后就可以使用私信通道发送私信的推送消息，其他消息必须走公信通道

在 options OP 配置 `channel: 'OPPO_COMMON_PUSH|OPPO_INSTANT_PUSH'`，具体的值就根据 OPPO 的推送通道来看

注意：私信通道必须单推，所以如果是给某个人推的话，填写 `publish_clientid` 是字符串而不是数组

配置

```js
await uniPush.sendMessage({
  channel: {
    // 在OPPO后台创建了两个推送通道，OPPO_COMMON_PUSH（走公信通道）、OPPO_INSTANT_PUSH（走私信通道（只支持单推））
    OP: msgtype === 'chat' ? 'OPPO_INSTANT_PUSH' : 'OPPO_COMMON_PUSH',
  },
  options: {
    // 在OPPO后台创建了两个推送通道，OPPO_COMMON_PUSH（走公信通道）、OPPO_INSTANT_PUSH（走私信通道（只支持单推））
    OP: {
      '/channel_id': msgtype === 'chat' ? 'OPPO_INSTANT_PUSH' : 'OPPO_COMMON_PUSH',
      // '/channel_id': 'OPPO_INSTANT_PUSH',
      // '/channel_id': 'OPPO_COMMON_PUSH',
    },
  },
});
```
