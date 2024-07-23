# Uniapp APP 版本更新

## 更新方式

1. 安卓：下载完成 APK 文件后，重启应用
2. IOS：点击更新按钮，跳转 AppStore 下载最新版本

## 版本更新流程

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

## 使用的相关 API

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
