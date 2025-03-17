---
outline: deep
---

# Uniapp 获取手机号一键登录

- [uniCloud 获取手机号一键登录](https://doc.dcloud.net.cn/uniCloud/uni-login/service.html)

## 开发流程

调用前，需要在 UniCloud 后台开通此业务并且充值。只有获取手机号成功后，才会扣这一条接口调用的费用。

客户端调用 `uni.login` 唤起登录框，调用后会返回 `access_token` 和 `openid`，然后调用后端服务或者直接调用云函数获取手机号。

最好的就是将 `access_token` 和 `openid` 传递给后端，后端调用云函数获取手机号后进行一键登录，然后返回 Token 给客户端即可。

### 客户端调用 API 唤起登录

```js
// 预登录-检查当前是否支持一键登录
// eslint-disable-next-line arrow-body-style
export const preLoginEvent = () => {
  return new Promise((resolve) => {
    uni.preLogin({
      provider: 'univerify',
      success() {
        // 预登录成功
        resolve(true);
      },
      fail(res) {
        // 不显示一键登录选项（或置灰）
        // 根据错误信息判断失败原因，如有需要可将错误提交给统计服务器
        console.log('预登录失败:', res);
        resolve(false);
      },
    });
  });
};

// APP 手机号一键登录
const iPhoneQuickLoginByApp = () => {
  uni.login({
    provider: 'univerify',
    univerifyStyle: {
      fullScreen: false,
      otherLoginButton: {
        visible: false,
      },
      privacyTerms: {
        isCenterHint: true,
      },
    },
    success: async (res) => {
      // 登录成功
      const { access_token, openid } = res.authR;
      // 调用后端服务或者直接调用云函数
      const response = await LocalPhoneLogin({ access_token, openid });
      uni.closeAuthView();
      if (response.status === 0) {
        uni.showToast({
          title: '登录成功',
          icon: 'none',
        });
      }
    },
    fail: (res) => {
      // 登录失败
      console.log('一键登录失败回调:', res);
      const notToastCodeList = [30002, 30003, 30008];
      if (!notToastCodeList.includes(res.code)) {
        uni.showToast({
          title: `一键登录失败，请联系客服（${res.code}）`,
          icon: 'none',
        });
      }
      uni.closeAuthView();
    },
  });
};
```

### 编写获取手机号的云函数

云函数依然扩展库 `uni-cloud-verify`

在云函数的`package.json`内添加 `uni-cloud-verify` 的引用即可为云函数启用此扩展，无需做其他调整，完整的 `package.json` 示例如下：

```json
{
  "name": "getPhoneNumber",
  "extensions": {
    "uni-cloud-verify": {}
  }
}
```

云函数例子如下：

```js
// 'use strict';
exports.main = async (event, context) => {
  const params = JSON.parse(event.body);
  const { access_token, openId } = params;

  try {
    const response = await uniCloud.getPhoneNumber({
      appid: 'APPID', // 替换成自己开通一键登录的应用的DCloud appid
      provider: 'univerify',
      access_token,
      openid: openId,
    });

    console.log('获取用户手机号:', response);
    return response;
  } catch (error) {
    console.log('获取手机号失败:', error);
    return {
      code: -1,
      data: '',
      message: '获取手机号失败',
    };
  }
};
```
