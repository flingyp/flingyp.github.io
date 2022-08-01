# 小程序相关记录（持续更新...）

## 小程序发起分享 (2021-02-24)

> 小程序发起分享 只能设置官方提供的 button 组件

1. 给 button 组件设置 `open-type="share"`

2. 当用户点击按钮后就会触发 Page.onShareAppMessage 自定义的事件 （通过这个事件去定义转发内容的相关信息）

## scroll-view 横向滚动注意点

注意：

1. 必须给 scroll-X 设置 `white-space: nowrap;`
2. 子内容 scroll-con 设置 `display: inline-block;`

```js
<scroll-view scroll-x="true" class="scroll-X">
  <block v-for="(item, index) in Data" :key="index">
    <view class="scroll-con" @tap="goDetail(item.id)">
      // 滚动的相关内容
    </view>
  </block>
</scroll-view>
```

```css
.scroll-X {
  width: 100%;
  overflow: hidden;
  white-space: nowrap; // 滚动必须加的属性
}

.scroll-con {
  display: inline-block;
}
```

## uniapp 中 url 传递一个 obj 的方法 (2021-02-24)

```js
uni.navigateTo({
  url:'xxx?item=' + encodeURIComponent(JSON.stringify(obj))
})

onLoad(options) {
  if(options.item){
    this.item = JSON.parse(decodeURIComponent(options.item))
  }
}
```

## 微信公众号 H5 微信授权获取 code (2021-02-24)

> 公众号获取 code 是需要跳转到微信的相关网页， 网页回跳回你指定的页面 url 并且在后面参数携带 code

```js
getCode() {
  // 截取路径中的code，如果没有就去微信授权，如果已经获取到了就直接传code给后台获取openId
  // 判断是否有token,有则直接往下调用业务接口，如果没有，则调整授权链接newhref
  // token失效，把token清空，然后跳授权链接
  let code = this.GetQueryString('code');
  const local = "http://xxxxxxxxxxxxx"; // 该公众号线上地址
  // 需要公众号的appid:
  let newhref = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=xxxx&redirect_uri='+encodeURIComponent(local)+'&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
  console.log('code', code)
  console.log('local', local)
  console.log('encodeURIComponent(local)', encodeURIComponent(local))
  if(code == null || code === '') {
    location.replace(newhref)
  }
},
GetQueryString(name){ // 判断地址栏上是否有 code
  var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if(r!=null)return  unescape(r[2]); return null;
},
```

## 网络监控 (2021-02-24)

在 **App.vue** 中放入网络监控， 当用户断网是弹出断网弹出禁止下一步操作，再次联网的时间 关闭弹窗

```js
onLaunch: function() {
    uni.onNetworkStatusChange({isConnected} => {
        if(isConnected) {
            uni.hideToast()
        } else {
            uni.hideToast()
            uni.showToast({
              title: '您已断网',
              icon: 'none',
              mask: true,
              duration: 6000000
            })
        }
    })
}
```

## uniapp 小程序长按保存图片 (授权后保存) (二维码) (2021-03-01)

> 设置相关知识点： uniapp 的 API 、长按事件

- `uni.getSetting()` 获取当前用户的权限设置

- `uni.uni.authorize()` 向用户发起相关的授权请求

- `uni.saveImageToPhotosAlbum()` 把图片保存本地相册

- `@longpress="savePosterPath(qrCodeSrc)"` 长按事件 @longpress

```js
// 小程序保存图片
    savePosterPath(url) {
      uni.downloadFile({
        url,
        success: (resFile) => {
          console.log(resFile, "resFile");
          if (resFile.statusCode === 200) {
            uni.getSetting({ // 获取用户的当前设置
              success: (res) => {
                if (!res.authSetting["scope.writePhotosAlbum"]) { // 如果没有授权保存到相册的权限
                  uni.authorize({ // 向用户发起授权请求
                    scope: "scope.writePhotosAlbum", // 保存到相册的权限
                    success: () => {
                      uni.saveImageToPhotosAlbum({ // 调用保存图片到相册的API
                        filePath: resFile.tempFilePath,
                        success: (res) => { // 保存成功
                          return uni.showToast({
                            title: "保存成功！",
                          });
                        },
                        fail: (res) => { // 保存失败
                          return uni.showToast({
                            title: res.errMsg,
                          });
                        },
                        complete: (res) => { // 无论成功 或 失败执行
                          console.log(res)
                        },
                      });
                    },
                    fail: () => { // 拒绝获取相册权限 执行
                      uni.showModal({
                        title: "您已拒绝获取相册权限",
                        content: "是否进入权限管理，调整授权？",
                        success: (res) => {
                          if (res.confirm) {
                            uni.openSetting({
                              success: (res) => {
                                console.log(res.authSetting);
                              },
                            });
                          } else if (res.cancel) {
                            return uni.showToast({
                              title: "已取消！",
                            });
                          }
                        },
                      });
                    },
                  });
                } else {
                  uni.saveImageToPhotosAlbum({
                    filePath: resFile.tempFilePath,
                    success: (res) => {
                      return uni.showToast({
                        title: "保存成功！",
                      });
                    },
                    fail: (res) => {
                      return uni.showToast({
                        title: res.errMsg,
                      });
                    },
                    complete: (res) => { // 无论成功 或 失败执行
                      console.log(res)
                    },
                  });
                }
              },
              fail: (res) => {},
            });
          } else { // resFile.statusCode === 200 没有对
            console.log('resFile.statusCode === 200 没有对')
            return uni.showToast({
              title: resFile.errMsg,
            });
          }
        },
        fail: (res) => { // uni.downloadFile 进入 失败回调
          console.log('uni.downloadFile 进入 失败回调')
          return uni.showToast({
            title: res.errMsg,
          });
        },
      });
    },
```

## Uniapp 实现保存海报组件开发 (2021-03-01)

思路： 通过 canvas 绘制海报。通过`uni.canvasToTempFilePath` 将绘制好的 canvas 转为图片。通过`uni.saveImageToPhotosAlbum` 将本地临时路径的图片保存至手机相册中。

### 通过 canvas 绘制海报内容的顺序先后问题

通过使用 promise 对象决定绘制海报内容的顺序先后。`promise.all() `方法进行 canvas 最后一步的绘画操作 `context.draw()`

### 注意 uni.getImageInfo()

1. 在绘制图片 和 头像时，组件通过`uni.getImageInfo() ` 去获取图片的相关信息，调用该方法成功的前提是需要在微型小程序后台配置 download 域名和 request 域名当然最好把 uploadFile 域名也一起配置，防止出差错。但是官方给出的提示是配置 download 域名白名单即可，但是获取不到图片信息，这算是一个大坑了。
2. 如果没有进行相关配置，在调试时 或者 体验版 正式版等 打开了 vconsole。uni.getImageInfo() 是可以获取到图片信息的，一旦关闭了 vconsole uni.getImageInfo() 将会 fail， 也是个坑。

### 重点组件方法，变量介绍

#### props

1. canvasInfo Object （必需）
   1. canvasWidth 画布宽度
   2. canvasHeight 画布高度
   3. canvasId 画布标识
2. isFullScreen Boolean
   1. 为 ture 时表示画布为手机屏幕全屏，canvasInfo 设置的宽高将失效。
   2. 默认为 false

#### methods

1. canvasInit(callback) canvas 初始化，所有有关画布 canvas 操作需在其回调函数操作。
2. drawCanvasImage(context, src, \_imageWidth, \_imageHeight, dx, dy) 在 canvas 绘制一张图片
3. drawCircularAvatar(context, url, \_circularX, \_circularY, \_circularR) 在 canvas 绘制一张圆形图片
4. drawText(options) 在 canvas 绘制单行、多行文本
5. startDrawToImage(context, promiseArr, callback) 将 canvas 操作 draw()进行绘制
6. posterToPhotosAlbum(filePath) 保存至手机相册

### 快速上手

1. 引入并组件文件

```js
import SavePosterCom from '@/components/SavePosterCom/SavePosterCom.vue'

components: {
    SavePosterCom
},
```

2. 使用组件

```vue
canvasInfo: { canvasWidth: 350, canvasHeight: 550, canvasId: 'save-poster' },

<save-poster-com ref="savePoster" :canvasInfo="canvasInfo"></save-poster-com>
```

3. 组件绘制操作

```js
// drawCanvasImage, drawCircularAvatar, drawText 方法里都未涉及到组件实例this相关的操作可以单独提取出来。
let { drawCanvasImage, drawCircularAvatar, drawText } =
  this.$refs.savePoster.$options.methods;

// context 为组件画布实例， comThis为组件this
this.$refs.savePoster.canvasInit(({ context, comThis }) => {
  // 获取画布宽高
  let canvasWH = comThis.canvasWH;

  // 1. 绘制海报背景图
  let promise_1 = drawCanvasImage(
    context,
    this.canvasBgUrl,
    canvasWH.canvasWidth,
    canvasWH.canvasHeight
  );

  // 必须先绘制玩海报背景图 再去操作其他绘制内容，防止背景图覆盖其它绘制的内容。
  promise_1.then((res) => {
    // 2. 绘制用户头像
    let promise_2 = drawCircularAvatar(
      context,
      this.avatarUrl,
      canvasWH.canvasWidth / 2,
      canvasWH.canvasHeight / 7,
      40
    );
    // 3. 绘制用户名
    let promise_3 = drawText({
      context: context,
      text: "工具人",
      dx: canvasWH.canvasWidth / 2 + 30,
      dy: canvasWH.canvasHeight / 3.6,
      fontSize: 20,
      fontColor: "red",
    });

    // 4. 绘制二维码
    let promise_4 = drawCanvasImage(
      context,
      this.qrCodeUrl,
      100,
      100,
      canvasWH.canvasWidth / 2 + 50,
      canvasWH.canvasHeight - 100
    );
    // 在上面 1,2,3,4操作后，进行draw()，在startDrawToImage 第三个回调函数中返回临时图片路径
    this.$refs.savePoster.startDrawToImage(
      context,
      [promise_1, promise_2, promise_3, promise_4],
      (tempFilePath) => {
        this.tempFilePath = tempFilePath;
      }
    );
  });
});
```

4. 保存图片至手机相册操作

```js
saveBtnFun() {
    uni.showModal({
        title: '保存海报',
        content: '海报将保存至本地相册中',
        confirmText: '保存',
        success: (res) => {
            if(res.confirm) {
                this.$refs.savePoster.posterToPhotosAlbum(this.tempFilePath)
            }
        }
    })
}
```

### 快速上手示例源码

```vue
<template>
  <view>
    <scroll-view
      scroll-x="true"
      class="savePoster"
      :scroll-with-animation="true"
      @scroll="scroll"
    >
      <view class="savePosterItem">
        <image v-show="tempFilePath" :src="tempFilePath"></image>
        <save-poster-com
          v-show="!tempFilePath"
          ref="savePoster"
          :canvasInfo="canvasInfo"
        ></save-poster-com>
      </view>

      <view class="savePosterItem">
        <image v-show="tempFilePath" :src="tempFilePath"></image>
        <save-poster-com
          v-show="!tempFilePath"
          ref="savePoster"
          :canvasInfo="canvasInfo"
        ></save-poster-com>
      </view>

      <view class="savePosterItem">
        <image v-show="tempFilePath" :src="tempFilePath"></image>
        <save-poster-com
          v-show="!tempFilePath"
          ref="savePoster"
          :canvasInfo="canvasInfo"
        ></save-poster-com>
      </view>

      <view class="savePosterItem">
        <image v-show="tempFilePath" :src="tempFilePath"></image>
        <save-poster-com
          v-show="!tempFilePath"
          ref="savePoster"
          :canvasInfo="canvasInfo"
        ></save-poster-com>
      </view>
    </scroll-view>

    <button class="savePosterBtn" type="primary" @click="saveBtnFun">
      保存海报
    </button>
  </view>
</template>

<script>
import SavePosterCom from "@/components/SavePosterCom/SavePosterCom.vue";
export default {
  name: "savePosterTwo",
  components: {
    SavePosterCom,
  },
  data() {
    return {
      canvasInfo: {
        canvasWidth: 350,
        canvasHeight: 550,
        canvasId: "save-poster",
      },
      canvasBgUrl:
        "https://img0.baidu.com/it/u=3057618655,2802941403&fm=26&fmt=auto&gp=0.jpg",
      avatarUrl:
        "https://img0.baidu.com/it/u=1680160535,2861893475&fm=26&fmt=auto&gp=0.jpg",
      qrCodeUrl:
        "https://bkimg.cdn.bcebos.com/pic/2934349b033b5bb571dc8c5133d3d539b600bc12?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg",
      tempFilePath: "",
    };
  },
  onLoad() {
    let { drawCanvasImage, drawCircularAvatar, drawText } =
      this.$refs.savePoster.$options.methods;
    this.$refs.savePoster.canvasInit(({ context, comThis }) => {
      // 获取画布宽高
      let canvasWH = comThis.canvasWH;
      // 绘制海报背景图
      let promise_1 = drawCanvasImage(
        context,
        this.canvasBgUrl,
        canvasWH.canvasWidth,
        canvasWH.canvasHeight
      );
      // 必须先绘制玩海报背景图 再去操作其他绘制内容
      promise_1.then((res) => {
        let promise_2 = drawCircularAvatar(
          context,
          this.avatarUrl,
          canvasWH.canvasWidth / 2,
          canvasWH.canvasHeight / 7,
          40
        );

        let promise_3 = drawText({
          context: context,
          text: "岳云鹏",
          dx: canvasWH.canvasWidth / 2 + 30,
          dy: canvasWH.canvasHeight / 3.6,
          fontSize: 20,
          fontColor: "red",
        });

        let promise_4 = drawCanvasImage(
          context,
          this.qrCodeUrl,
          100,
          100,
          canvasWH.canvasWidth / 2 + 50,
          canvasWH.canvasHeight - 100
        );

        this.$refs.savePoster.startDrawToImage(
          context,
          [promise_1, promise_2, promise_3, promise_4],
          (tempFilePath) => {
            this.tempFilePath = tempFilePath;
          }
        );
      });
    });
  },
  methods: {
    scroll(e) {
      let scrollWidth = e.detail.scrollWidth;
      let scrollLeft = e.detail.scrollLeft;
      let scale = (scrollLeft / scrollWidth).toFixed(2);
      console.log("scale", scale);
    },
    saveBtnFun() {
      uni.showModal({
        title: "保存海报",
        content: "选择第三张海报保存到本地相册中",
        confirmText: "保存",
        success: (res) => {
          if (res.confirm) {
            this.$refs.savePoster.posterToPhotosAlbum(this.tempFilePath);
          }
        },
      });
    },
  },
};
</script>

<style>
.savePoster {
  width: 100%;
  overflow: hidden;
  white-space: nowrap; // 滚动必须加的属性
}
.savePosterItem {
  display: inline-block;
  width: 80%;
  height: 1000rpx;
  margin: 0 20rpx;
  text-align: center;
  /* border: 1rpx solid #007AFF; */
}
.savePosterItem > image {
  width: 100%;
  height: 100%;
}

.savePosterItem:first-of-type {
  margin-left: 40rpx;
}

.savePosterItem:last-of-type {
  margin-right: 40rpx;
}

.savePosterBtn {
  margin-top: 40rpx;
  width: 80%;
}
</style>
```

### 组件源码

```vue
<template>
  <view>
    <canvas
      :canvas-id="canvasInfo.canvasId"
      :style="{
        width: canvasWH.canvasWidth + 'px',
        height: canvasWH.canvasHeight + 'px',
      }"
    ></canvas>
  </view>
</template>

<script>
export default {
  name: "savePosterCom",
  data() {
    return {
      userPhoneWHInfo: {},
      canvasWH: {
        canvasWidth: 0,
        canvasHeight: 0,
      },
    };
  },
  props: {
    // 决定保存下来的图片的宽高
    canvasInfo: {
      type: Object,
      default: () => {
        return {
          canvasWidth: 0,
          canvasHeight: 0,
          canvasId: "canvasId",
        };
      },
    },
    // canvas画布是不是全屏，默认是false。 false时使用必须传 canvasInfo
    isFullScreen: Boolean,
  },
  created() {
    this.userPhoneWHInfo = this.getPhoneSystemInfo();
    if (this.isFullScreen) {
      // 画布全屏
      this.canvasWH.canvasWidth = this.userPhoneWHInfo.windowWidth;
      this.canvasWH.canvasHeight = this.userPhoneWHInfo.windowHeight;
    } else {
      // 指定宽高
      this.canvasWH.canvasWidth = this.canvasInfo.canvasWidth;
      this.canvasWH.canvasHeight = this.canvasInfo.canvasHeight;
    }
  },
  mounted() {},
  methods: {
    /**
     * 获取用户手机屏幕信息
     */
    getPhoneSystemInfo() {
      const res = uni.getSystemInfoSync();
      return {
        windowWidth: res.windowWidth,
        windowHeight: res.windowHeight,
      };
    },
    /** 获取 CanvasContext实例
     * @param {String} canvasId
     */
    getCanvasContextInit(canvasId) {
      return uni.createCanvasContext(canvasId, this);
    },
    /** 保存海报组件初始化
     * @param {Function} callback(context) 回调函数
     */
    canvasInit(callback) {
      let context = this.getCanvasContextInit(this.canvasInfo.canvasId);
      if (context) {
        callback({
          context: context,
          comThis: this,
        });
      }
    },
    /** 将上诉的绘制画到画布中 并且 将画布导出为图片
     *  @param context 画布
     *  @param {Promise[]} 存放Promise的数组
     *  @param {Function} callback 保存图片后执行的回调函数(本地图片临时路径)
     */
    startDrawToImage(context, promiseArr, callback) {
      // 将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中
      let canvasId = this.canvasInfo.canvasId;
      let tempFilePath = "";
      Promise.all(promiseArr).then((res) => {
        context.draw(false, async () => {
          callback(await this.canvasToImage(canvasId));
        });
      });
    },
    /**
     * 在canvas绘制一张图片
     * @param context 画布
     * @param src 图片资源
     * @param _imageWidth 图片宽度
     * @param _imageHeight 图片高度
     */
    drawCanvasImage(context, src, _imageWidth, _imageHeight, dx, dy) {
      return new Promise((resolve, reject) => {
        uni.getImageInfo({
          src: src,
          success: (res) => {
            context.drawImage(
              res.path,
              dx - _imageWidth,
              dy - _imageHeight,
              _imageWidth,
              _imageHeight
            );
            resolve(context);
          },
        });
      });
    },
    /** 绘制一个圆形头像
     * @param  context 画布
     * @param  url     图片地址
     * @param  _circularX  圆心X坐标
     * @param  _circularY  圆心Y坐标
     * @param  _circularR  圆半径
     */
    drawCircularAvatar(context, url, _circularX, _circularY, _circularR) {
      let dx = _circularX - _circularR;
      let dy = _circularY - _circularR;
      let dwidth = _circularR * 2;
      let dheight = _circularR * 2;
      return new Promise((resolve, reject) => {
        uni.downloadFile({
          url: url,
          success: (res) => {
            context.save();
            context.beginPath();
            // _circularX圆的x坐标  _circularY圆的y坐标  _circularR圆的半径
            context.arc(_circularX, _circularY, _circularR, 0, 2 * Math.PI);
            context.clip();
            // dx: 图像的左上角在目标canvas上 X 轴的位置
            // dy: 图像的左上角在目标canvas上 Y 轴的位置
            // dwidth: 在目标画布上绘制图像的宽度，允许对绘制的图像进行缩放
            // dheight: 在目标画布上绘制图像的高度，允许对绘制的图像进行缩放
            context.drawImage(res.tempFilePath, dx, dy, dwidth, dheight);
            context.restore();
            // context.draw()
            resolve(context);
          },
        });
      });
    },
    /** 绘制多行文本 注:, 和 空格都算一个字
     * @param context 画布
     * @param text 需要被绘制的文本
     * @param dx 左上角x坐标
     * @param dy 右上角y坐标
     * @param rowStrnum 每行多少个字 (默认为text字体个数->单行)
     * @param fontSize 文字大小 （默认16）
     * @param fontColor 文字颜色 (默认black)
     * @param lineHeight 单行文本行高 (默认0)
     */
    drawText(options) {
      let {
        context,
        text,
        dx,
        dy,
        rowStrnum = text.length,
        lineHeight = 0,
        fontSize = 16,
        fontColor = "black",
      } = options;
      return new Promise((resolve, reject) => {
        context.setFontSize(fontSize);
        context.setFillStyle(fontColor);
        context.setTextBaseline("middle");
        // 获取需要绘制的文本宽度
        let textWidth = Number(context.measureText(text).width);
        // console.log('textWidth',textWidth)
        // 获取文本的字数
        let textNum = text.length;
        // 获取行数 向上取整
        let lineNum = Math.ceil(textNum / rowStrnum);
        // console.log('textNum',textNum)
        // console.log('lineNum',lineNum)
        for (let i = 0; i < lineNum; i++) {
          let sliceText = text.slice(i * rowStrnum, (i + 1) * rowStrnum);
          // fillText 的 dx = 文字最左边的距离到屏幕政策的距离
          context.fillText(sliceText, dx - textWidth, dy + i * lineHeight);
        }
        resolve(context);
      });
    },
    /** 将画布导出为图片
     * @param canvasId 画布标识
     */
    canvasToImage(canvasId) {
      return new Promise((resolve, reject) => {
        uni.canvasToTempFilePath(
          {
            canvasId: canvasId, // 画布标识
            success: (res) => {
              // 在H5平台下，tempFilePath 为 base64
              resolve(res.tempFilePath);
            },
            fail: (err) => {
              console.log("err", err);
              reject(err);
            },
          },
          this
        );
      });
    },
    /** 保存生成的图片到本地相册中
     *  @param {String} filePath 图片临时路劲
     */
    posterToPhotosAlbum(filePath) {
      uni.showLoading({
        title: "保存中...",
      });
      uni.saveImageToPhotosAlbum({
        filePath: filePath,
        success: (res) => {
          uni.showToast({
            title: "保存成功，请前往手机相册中查看",
            mask: true,
            icon: "none",
            duration: 2000,
          });
        },
        fail: (err) => {
          console.log("err", err);
          if (err.errMsg.includes("deny") || err.errMsg.includes("denied")) {
            // 用户选择拒绝
            this.openSetting();
          } else if (err.errMsg.includes("fail cancel")) {
            // 用户在保存图片时 取消了
            uni.showToast({
              title: "已取消保存，无法保存至相册",
              mask: true,
              icon: "none",
              duration: 2000,
            });
            return;
          }
        },
        complete: () => {
          uni.hideLoading();
        },
      });
    },
    /**
     * 打开摄像头设置权限页面
     */
    openSetting() {
      uni.showModal({
        title: "温馨提示",
        content: "保存图片至相册中，需要您同意添加访问相册权限",
        cancelText: "拒绝",
        confirmText: "同意",
        success: (res) => {
          if (res.confirm) {
            uni.openSetting({
              success: (settingdata) => {
                if (settingdata.authSetting["scope.writePhotosAlbum"]) {
                  console.log(
                    "获取权限成功，给出再次点击图片保存到相册的提示。"
                  );
                  uni.showToast({
                    title: "授权成功，请再次点击保存",
                    icon: "none",
                    duration: 2000,
                  });
                } else {
                  console.log("获取权限失败，给出不给权限就无法正常使用的提示");
                  uni.showToast({
                    title: "需要访问相册权限",
                    icon: "none",
                    duration: 2000,
                  });
                }
              },
              fail: (res) => {
                console.log("err", err);
              },
            });
          } else {
            uni.showToast({
              title: "已拒绝授权，无法保存至相册",
              mask: true,
              icon: "none",
              duration: 2000,
            });
            return;
          }
        },
      });
    },
  },
};
</script>

<style></style>
```

## 小程序登录授权 获取 用户信息的 API 详解 (2021-03-04)

### 1. 登录 wx.login()

在登录时前端需要做的就是通过 `wx.login()` 获取到 **code**。后端通过去调用微信的接口返回给我们 **openID、session_key** 等信息。

### 2. wx.checkSession()

> 校验用户当前的 **session_key** 是否有效

当用户调用 login 时，用户的 session_key 会被更新 之前旧的 session_key 会失效。微信不会把 session_key 的有效期告知开发者。开发者在 session_key 失效时，可以通过重新执行登录流程获取有效的 session_key。但是开发者可以自定义 token。

### 3.授权 wx.authorize()

> 提前向用户发起授权请求。调用后会立刻弹窗询问用户是否同意授权小程序使用某项功能或获取用户的某些数据，但不会实际调用对应接口。**如果用户之前已经同意授权，则不会出现弹窗，直接返回成功。**

**两种情况：**

1. 用户已授权 可以知道调用此接口

2. 用户未授权 需要弹出授权框引导用户授权

拒绝授权：关闭授权框，用户操作无效
接收授权：将用户信息通过 token 发送给后台，并主动请求用户操作

注： scope 为 scope.userInfo 不会弹出授权窗口了。 需要通过 button 按钮的方式用户点击才算授权了。

### 4. 用户信息 wx.getUserInfo()

注： 此接口有调整，使用该接口将不再出现授权弹窗，需要使用下面代码来引导用户主动进行授权操作。

`<button open-type="getUserInfo" @getuserinfo="getUserInfo">`

1. 当用户没有通过 button 按钮同意授权，调用此接口会直接报错

2. 当用户授权过 可以直接使用此接口获取用户信息

```js
wx.getSetting({
  success: (res) => {
    console.log(res);
    // 证明已经授权
    if (res.authSetting["scope.userInfo"]) {
      wx.getUserInfo({
        success: (res) => {
          console.log(res.userInfo);
        },
      });
    }
  },
});
```

### 字段解释

- openId: 用户唯一标识

- session_key 会话密钥 session_key 是对用户数据进行加密签名的密钥。为了应用自身的数据安全，只在开发服务器和微信服务器中交互，不会发送到前端。

- unionID 用户在开放平台的唯一标识符。如果开发者拥有多个移动应用、网站应用、和公众帐号（包括小程序），可通过 unionid 来区分用户的唯一性。

### 登录授权流程

```
进入小程序 -> wx.login() 获取code -> wx.getUserInfo()

wx.getUserInfo() 成功 -> 授权过 -> 调后台服务器login接口

wx.getUserInfo() 失败 -> 未授权过 -> 显示弹窗登录按钮，引导用户授权
```

## 微信小程序 开发版 体验版 正式版 环境判断 (2021-03-08)

> uniapp 的 uni.getAccountInfoSync() 目前只支持 微信小程序、百度小程序、QQ 小程序

```js
const accountInfo = wx.getAccountInfoSync();
// develop 开发版  trial 体验版 release 正式版
if (accountInfo.miniProgram.envVersion === "develop") {
  // 开发版
} else if (accountInfo.miniProgram.envVersion === "trial") {
  // 体验版
} else if (accountInfo.miniProgram.envVersion === "release") {
  // 正式版
}
```

## 钉钉小程序 开发版 体验版 正式版 环境判断 (2021-03-08)

> 使用场景： 不同环境需要使用不同的接口地址等变量。 使用 uniapp 为例

```js
// #ifdef MP-ALIPAY
if (dd.isIDE) {
  // IDE开发环境下
} else if (__appxStartupParams.source === "trial") {
  // 钉钉体验版
} else {
  // 注： 在小程序开发者工具进行真机调试不是进入  dd.isIDE 也不是 trial。所以默认进入 else
  // 默认使用正式
}
// #endif
```

## uniapp 小程序签名功能基本实现 (2021-03-09)

```vue
<template>
  <view
    class="signature-body"
    :style="{ width: canvasWidth + '%', height: canvasHeight + 'rpx' }"
  >
    <canvas
      class="canvas-editor1"
      :canvas-id="cid"
      :id="cid"
      @touchstart="touchstart"
      @touchmove="touchmove"
      @touchend="touchend"
    ></canvas>
  </view>
</template>

<script>
export default {
  name: "signature",
  props: {
    cid: {
      type: String,
      default: "myCanvas",
    },
    canvasWidth: {
      type: Number,
      default: 100,
    },
    canvasHeight: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      Strokes: [],
      width: 0, // 屏幕宽度
      height: 0, // 屏幕高度
      dom: null, // canvas DOM节点
    };
  },
  mounted() {
    // 回调会延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新
    this.$nextTick(() => {
      // 获取手机相关信息
      uni.getSystemInfo({
        success: (res) => {
          this.width = res.windowWidth;
          this.height = res.windowHeight;
        },
      });
      // 获取到 canvas
      this.dom = uni.createCanvasContext(this.cid, this);
    });
  },
  methods: {
    // 手指触摸屏幕时触发
    touchstart(e) {
      // 取消事件的默认动作
      e.preventDefault();
      // 禁止事件冒泡
      e.stopPropagation();
      // 记录相关信息
      this.Strokes.push({
        imageData: null,
        style: {
          color: "#000000",
          lineWidth: 3,
        },
        points: [
          {
            x: e.touches[0].x,
            y: e.touches[0].y,
            type: e.type,
          },
        ],
      });
      this.drawLine(this.Strokes[this.Strokes.length - 1], e.type);
    },
    // 手指在屏幕滑动时触发
    touchmove(e) {
      // 取消事件的默认动作
      e.preventDefault();
      // 禁止事件冒泡
      e.stopPropagation();
      this.Strokes[this.Strokes.length - 1].points.push({
        x: e.touches[0].x,
        y: e.touches[0].y,
        type: e.type,
      });
      this.drawLine(this.Strokes[this.Strokes.length - 1], e.type);
    },
    // 手指在屏幕结束滑动时触发
    touchend(e) {
      // 取消事件的默认动作
      e.preventDefault();
      // 禁止事件冒泡
      e.stopPropagation();
      if (this.Strokes[this.Strokes.length - 1].points.length < 2) {
        //当此路径只有一个点的时候
        this.Strokes.pop();
      }
    },
    // 画线的操作
    drawLine(StrokesItem, type) {
      // 设置线条端点样式
      this.dom.setLineCap("round");
      // 设置边框颜色
      this.dom.setStrokeStyle(StrokesItem.style.color);
      // 设置线条宽度
      this.dom.setLineWidth(StrokesItem.style.lineWidth);
      // 将路径移动到接触屏幕的指定点
      this.dom.moveTo(
        StrokesItem.points[StrokesItem.points.length - 2].x,
        StrokesItem.points[StrokesItem.points.length - 2].y
      );
      this.dom.lineTo(
        StrokesItem.points[StrokesItem.points.length - 1].x,
        StrokesItem.points[StrokesItem.points.length - 1].y
      );
      // 画出当前路径的边框
      this.dom.stroke();
      this.dom.draw(true);
    },
    // 清空画布
    clearCanvas() {
      this.Strokes = [];
      this.dom.fillStyle = "#FFFFFF";
      this.dom.clearRect(0, 0, this.width, this.height);
      this.dom.beginPath();
      this.dom.draw(true);
      this.dom.closePath();
    },
    // 保存画布 执行的方法
    saveCanvas(fn) {
      fn();
    },
  },
};
</script>

<style lang="scss" scoped>
.signature-body {
  border: 1px solid red;
  margin: 20rpx;
}
.canvas-editor1 {
  width: 100%;
  height: 100%;
}
</style>
```

## 图片路径 (2021-03-12)

img 标签上的路径使用绝对路径

背景图上的路径使用相对路径

## 微信小程序 base64 格式图片转 http 地址 (2021-03-17)

```js
base64ToImg (base64Data) {
  uni.showToast({
      title: '加载中',
      icon: 'loading'
  })
  return new Promise((resolve, reject) => {
      // 先获得一个文件实例
      var fileManager = wx.getFileSystemManager()
      var qrCodeSrc = `${wx.env.USER_DATA_PATH}/qrcode.png`
      fileManager.writeFile({
        filePath: qrCodeSrc,
        data: base64Data,
        encoding: 'base64',
        success: res => {
          setTimeout(() => {
            resolve(qrCodeSrc)
          }, 2000);
        },
        fail: ret => {
          console.log('error:', ret)
          reject(ret)
        }
      })
  })
},
```

## uniapp 小程序顶部栏切换

![image-20210401153108524](https://gitee.com/xiaopeng77/typora-img/raw/master/imgs/image-20210401153108524.png)

- 在小程序使用`refs` 会出现问题

- [uniapp 小程序获取元素的 DOM 节点相关信息](https://blog.csdn.net/qq_36959274/article/details/108762635)

```vue
<template>
  <view class="intelligentCustomerBox">
    <view class="headerBox">
      <view class="ic-HeaderBox">
        <block v-for="(item, index) in headerList" :key="index">
          <view
            :class="['headerItem', item.active ? 'headerItem-active' : '']"
            @click="tapAcitve(index)"
            >{{ item.name }}</view
          >
        </block>
      </view>
      <view class="headerLine" :style="{ left: headerLineLeft }"></view>
    </view>
  </view>
</template>

<script>
export default {
  name: "intelligentCustomer",
  data() {
    return {
      headerLineLeft: "",
      headerList: [
        {
          name: "智能客服",
          value: 1,
          active: true,
        },
        {
          name: "在线工单",
          value: 2,
          active: false,
        },
        {
          name: "在线投诉",
          value: 3,
          active: false,
        },
      ],
    };
  },
  mounted() {
    this.setHeaderLineLeft();
  },
  methods: {
    setHeaderLineLeft() {
      let headerBox = uni.createSelectorQuery().select(".headerItem-active");
      headerBox
        .fields({ rect: true, size: true }, (data) => {
          this.headerLineLeft = data.left + data.width / 2 - 12 + "px";
        })
        .exec();
    },
    tapAcitve(index) {
      if (this.headerList[index].active) {
        return;
      }
      this.headerList.forEach((item, index) => {
        item.active = false;
      });
      this.headerList[index].active = true;
      let selectClass = ".headerItem" + index;
      setTimeout(() => {
        this.setHeaderLineLeft();
      }, 10);
    },
  },
};
</script>

<style lang="scss">
page {
  width: 100%;
  height: 100%;
  background: $uni-bg-color-grey;
}
</style>
<style lang="scss" scoped>
.intelligentCustomerBox {
  width: 100%;
  height: 100%;
}

.headerBox {
  width: 100%;
  height: 80rpx;
  background: #fff;

  .ic-HeaderBox {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;

    .headerItem {
      flex: 1;
      text-align: center;
      color: #000;
      font-weight: 500;
      font-size: 30rpx;
    }
    .headerItem-active {
      color: rgb(221, 167, 107);
    }
  }
  .headerLine {
    width: 50rpx;
    height: 8rpx;
    background: rgb(221, 167, 107);
    border-radius: 5px;
    position: relative;
    top: 8px;
    transition: all 0.2s linear;
  }
}
</style>
```

## 小程序打开 PDF 文件

- 在 ios 下可以通过 web-view 直接打开 PDF 文件进行预览的。 下面的方法 url 必须在小程序后台配置业务域名

- 在安卓下是不可以通过 web-view 进行直接的预览，安卓会直接下载 pdf 文件。就可以使用官方的 API 了。 这个方法在 iOS 中也是可以正常使用的。不过这时候已经跳出了小程序，而无法使用小程序提供的功能菜单了。

- 微信小程序提供了 wx.getSystemInfo 获取设备信息的接口，直接调用就可以了。

```js
wx.getSystemInfo({
  success: function (res) {
    // systemInfo.platform 就是系统名称，然后再分别调用不同的方法预览文档即可。
  },
});
```

```js
wx.downloadFile({
  url: url,
  success: function (res) {
    console.log(res);
    var Path = res.tempFilePath; //返回的文件临时地址，用于后面打开本地预览所用
    wx.openDocument({
      filePath: Path,
      success: function (res) {
        console.log("打开成功");
      },
    });
  },
  fail: function (res) {
    console.log(res);
  },
});
```

## 手写 进度条组件

```js
// 使用 规则
<progressBar
	:progressTitle="'进度条标题'"
	:progressTotalNum="1000"
	:progressActiveNum="780"
></progressBar>
```

```js
<template>
  <view class="progressBarBox">
    <view class="progressTitle">{{ progressTitle }}</view>
    <view class="barBox" :style="{ height: progressBarHeight + 'rpx' }">
      <view
        class="progressBarActive"
        :style="barActiveStyle"
        ref="progressBarActive"
      ></view>
      <view class="progressBarTotal" ref="progressBarTotal">
        <text class="activeNumber">{{ progressActiveNum }}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "progressBar",
  data() {
    return {
      barActiveStyle: {},
    };
  },
  props: {
    // 选择的进度条部分的颜色
    activeBgColor: {
      type: String,
      default: "#277AFF",
    },
    // 进度条高度
    progressBarHeight: {
      type: String,
      default: "30",
    },
    // 进度条title
    progressTitle: {
      require: true,
      type: String,
      default: "进度条",
    },
    // 进度条总值
    progressTotalNum: {
      type: Number,
      default: 1000,
    },
    // 进度条值
    progressActiveNum: {
      type: Number,
      require: true,
      default: 0,
    },
  },
  mounted() {
    // 求 选择的进度条部分所占百分比
    let progressActiveNum = Number(this.progressActiveNum);
    let progressTotalNum = Number(this.progressTotalNum);
    if (progressActiveNum < 0) {
      // 进度条值 < 0 默认 等于 0
      progressActiveNum = 0;
    }
    if (progressActiveNum > progressTotalNum) {
      // 如果这个进度条数量 > 总数量 默认为总数量
      progressActiveNum = this.progressTotalNum;
    }
    // 进度所占百分比
    let progressPercentage = (progressActiveNum / progressTotalNum) * 100 + "%";

    this.barActiveStyle = {
      backgroundColor: this.activeBgColor,
      // height: this.progressBarHeight + "rpx",
      width: "0%",
    };

    setTimeout(() => {
      this.barActiveStyle.width = progressPercentage;
    }, 100);
  },
};
</script>

<style lang="less" scoped>
.progressBarBox {
  width: 100%;
  height: 100%;
  margin: 20rpx 0;
  position: relative;

  .progressTitle {
    font-size: 20rpx;
    font-weight: 500;
    color: #576783;
    margin: 20rpx 0;
  }

  .barBox {
    width: 95%;
    position: relative;

    .progressBarActive {
      height: 100%;
      height: 100%;
      border-radius: 20rpx;
      position: absolute;
      transition: all 0.6s ease;
    }

    .progressBarTotal {
      width: 100%;
      height: 100%;
      background: #eeeeee;
      border-radius: 20rpx;

      .activeNumber {
        display: inline-block;
        font-size: 18rpx;
        font-weight: 500;
        color: #576783;
        opacity: 0.6;
        position: absolute;
        right: -7%;
      }
    }
  }
}
</style>
```

##
