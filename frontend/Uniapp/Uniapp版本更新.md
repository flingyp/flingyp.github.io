---
outline: deep
---

# Uniapp APP 版本更新

## 自定义升级中心

### APP 更新

#### 更新方式

1. 安卓：下载完成 APK 文件后，重启应用
2. IOS：点击更新按钮，跳转 AppStore 下载最新版本

#### 使用的相关 API

```js
// 创建下载任务
plus.downloader.createDownload(url, {}, (d, status) => {
  if (status === 200) {
    // 下载成功
    plus.runtime.install(
      d.filename,
      { force: true },
      () => {
        plus.runtime.restart();
      },
      () => {
        // 安装失败回调
        uni.showToast({
          title: '安装失败，请稍后重试',
          icon: 'none',
        });
      },
    );
  } else {
    // 下载失败
    uni.showToast({
      title: '安装包下载失败，请稍后重试',
      icon: 'none',
    });
  }
});

// 重启应用
plus.runtime.restart();

// 跳转 AppStore
plus.runtime.openURL(`https://itunes.apple.com/cn/app/id${appleId}`);
```

#### 版本更新流程

1. 获取当前应用版本名称和应用版本号
2. 比对当前 `wgtVersion` 和 `apkVersion` 与线上版本号
3. 如果线上版本号大于当前版本号，则需要更新，其他的不需要
4. 如果是此次更新是 APK 类型，则 IOS 跳转 AppStore，Android 则直接下载并安装后重启应用
5. 如果是此次更新是 WGT 类型，则直接需要下载并安装后重启应用

注意：

1. APK 类型的适用于大版本更新，需要强制更新并且重新上架应用市场
2. WGT 类型的更新适用于 小bug调整和样式调整，可以不需要强制更新
3. WGT 的更新 应用版本名称和应用版本号 一定要大于当前APK基座的应用版本名称和应用版本号
4. 每次打包前一定注意修改 **应用版本名称**、**应用版本号**

### 微信小程序更新

```js
export const WxUpdateEvent = () => {
  const updateManager = uni.getUpdateManager();

  updateManager.onCheckForUpdate((res) => {
    // 请求完新版本信息的回调
    console.log('小程序是否存在新版本:', res.hasUpdate);
  });

  updateManager.onUpdateReady(() => {
    uni.showModal({
      title: '更新提示',
      content: '新版本已经准备好，是否重启应用？',
      success(res) {
        if (res.confirm) {
          // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
          updateManager.applyUpdate();
        }
      },
    });
  });

  updateManager.onUpdateFailed(() => {
    // 新的版本下载失败
    uni.showModal({
      title: '更新提示',
      content: '新版本下载失败，请检查网络是否正常',
      showCancel: false,
    });
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
