---
outline: deep
---

# Uniapp Axios Adapter 请求封装

这里不使用 `uni.request` API，而是使用这个库 [axios-adapter](https://github.com/uni-helper/axios-adapter)

## 接口封装

### `request.js`

```js
import axios from 'axios';
import { createUniAppAxiosAdapter } from '@uni-helper/axios-adapter';

const $request = axios.create({ adapter: createUniAppAxiosAdapter() });

$request.interceptors.request.use((config) => {
  console.log('请求拦截器->', config);
  return config;
});

$request.interceptors.response.use(
  (response) => {
    console.log('响应拦截器->', response);
    return response.data;
  },
  (error) => {
    console.log('响应拦截器错误：', error);
  },
);

export { $request };
```

### `useRequest.js`

```js
import { $request } from '@/request';
import { configInfo } from '@/config';
import { useAuth } from '@/composables/useAuth';

const toRequest = async (options) => {
  const {
    params = null,
    data = null,
    auth = true,
    loading = false,
    loadingText = '加载中...',
    method = 'GET',
    timeout = 10000,
  } = options;

  const baseURL = configInfo.BaseURL;

  const requestHeader = {
    'content-type': 'application/json',
  };

  loading &&
    uni.showLoading({
      title: loadingText,
      mask: true,
    });

  const requestResult = await $request.request({
    url: baseURL,
    headers: requestHeader,
    method,
    params,
    data,
    timeout,
  });

  loading && uni.hideLoading();

  return requestResult;
};

/**
 * useRequest 封装请求（Ajax 请求 + 图片上传）
 * @param {*} url：请求地址
 * @param {*} method：请求方式。默认为GET
 * @param {*} params：请求参数 GET
 * @param {*} data：请求参数 POST
 * @param {*} header：自定义请求头
 * @param {*} auth: 是否需要授权。默认为 true
 * @param {*} loading: 是否展示加载。默认为 false
 * @param {*} loadingText: 是否展示加载。默认为 加载中...
 * @param {*} type: REQUEST | UPLOAD_IMAGE | UPLOAD_VIDEO
 * @param {*} filePath: 图片&视频文件临时路径
 * @returns
 */
export const useRequest = async (options) => {
  const { getAuthStatus, JudgeAuthLogic } = useAuth();

  console.log('options.urlPara:', options.urlPara);

  // 设置了不需要登录就可以访问的接口
  if (options.auth === false) {
    return await toRequest(options);
  }

  // 需要Token的接口需要登录后才能访问时

  // 报错为了防止代码继续执行，避免页面出现错误的交互
  if (!getAuthStatus()) {
    // #ifndef H5
    JudgeAuthLogic({ type: 'COMMON' });
    // #endif

    // #ifdef H5
    H5OpenModal();
    // #endif

    throw new Error('用户未登录');
  } else {
    return await toRequest(options);
  }
};
```
