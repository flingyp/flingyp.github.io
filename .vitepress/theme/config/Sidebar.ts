import { DefaultTheme } from 'vitepress/theme';

export default {
  '/frontend/': [
    {
      text: '前端',
      collapsed: false,
      items: [
        {
          text: 'HTML5',
          collapsed: false,
          items: [
            {
              text: 'HTML 杂记',
              link: '/frontend/HTML5/Interview',
            },
          ],
        },
        {
          text: 'CSS3',
          collapsed: false,
          items: [
            {
              text: 'CSS 杂记',
              link: '/frontend/CSS3/Interview',
            },
          ],
        },
        {
          text: 'JavaScript',
          collapsed: false,
          items: [
            {
              text: 'JavaScript 杂记',
              link: '/frontend/JavaScript/Interview',
            },
          ],
        },
        {
          text: 'TypeScript',
          collapsed: false,
          items: [
            {
              text: '基础语法',
              link: '/frontend/TypeScript/',
            },
            {
              text: '工具类型',
              link: '/frontend/TypeScript/ToolTypes',
            },
          ],
        },
        {
          text: 'Vue',
          collapsed: false,
          items: [
            {
              text: 'Vue 杂记',
              link: '/frontend/Vue/Interview',
            },
          ],
        },
        {
          text: 'React',
          collapsed: false,
          items: [
            {
              text: 'Hooks',
              link: '/frontend/React/ReactHooks',
            },
          ],
        },
        {
          text: '前端工程化',
          collapsed: false,
          items: [
            {
              text: '基础概念',
              link: '/frontend/Engineering/',
            },
            {
              text: '代码格式化',
              link: '/frontend/Engineering/CodeFormat',
            },
            {
              text: '代码提交规范化',
              link: '/frontend/Engineering/CodeSubmit',
            },
            {
              text: 'CHANGELOG',
              link: '/frontend/Engineering/Changelog',
            },
            {
              text: 'Changesets',
              link: '/frontend/Engineering/Changesets',
            },
          ],
        },
        {
          text: 'Uniapp',
          collapsed: false,
          items: [
            {
              text: 'APP 云打包 Android 和 IOS',
              link: '/frontend/Uniapp/Uniapp打包IOS和Android',
            },
            {
              text: 'Uniapp APP 版本更新',
              link: '/frontend/Uniapp/Uniapp版本更新',
            },
            {
              text: 'Uniapp UniPush2 消息推送',
              link: '/frontend/Uniapp/Uniapp消息推送',
            },
            {
              text: 'Uniapp 集成 TailwindCSS',
              link: '/frontend/Uniapp/Uniapp集成TailwindCSS',
            },
            {
              text: 'Uniapp 运行在夜神模拟器',
              link: '/frontend/Uniapp/Uniapp运行在夜神模拟器',
            },
            {
              text: 'Uniapp 获取手机号一键登录',
              link: '/frontend/Uniapp/Uniapp获取手机号一键登录',
            },
            {
              text: 'Axios Adapter 请求封装',
              link: '/frontend/Uniapp/AxiosAdapter',
            },
          ],
        },
        {
          text: 'Electron',
          collapsed: false,
          items: [
            {
              text: '核心',
              link: '/frontend/Electron',
            },
          ],
        },
      ],
    },
  ],
  '/backend': [
    {
      text: '后端',
      collapsed: false,
      items: [
        {
          text: 'Node.js',
          link: '/backend/Node/Interview',
        },
        {
          text: 'Nest.js',
          collapsed: false,
          items: [
            {
              text: '介绍',
              link: '/backend/Nest/',
            },
            {
              text: '相关使用',
              link: '/backend/Nest/DevRecord',
            },
            {
              text: '常用配置',
              link: '/backend/Nest/ServerConfig',
            },
            {
              text: '技术集成',
              link: '/backend/Nest/TechnologyIntegrate',
            },
            {
              text: '环境变量配置',
              link: '/backend/Nest/EnvironmentVariousConfig',
            },
            {
              text: '微服务',
              link: '/backend/Nest/MicroServices',
            },
            {
              text: '通光秘籍',
              link: '/backend/Nest/通关秘籍',
            },
            {
              text: '部署',
              link: '/backend/Nest/部署NestJS',
            },
          ],
        },
        {
          text: 'Nginx',
          link: '/backend/Nginx',
        },
        {
          text: 'Docker',
          collapsed: false,
          items: [
            {
              text: '基本概念',
              link: '/backend/Docker/基本概念',
            },
            {
              text: '笔记',
              link: '/backend/Docker/笔记',
            },
          ],
        },
      ],
    },
  ],
  '/posts/': [
    {
      text: 'Vue3 最佳实践探索',
      link: '/posts/Vue3最佳实践探索',
    },
    {
      text: 'Vite 打包构建优化',
      link: '/posts/Vite打包构建优化',
    },
    {
      text: 'Git 常规操作',
      link: '/posts/Git常规操作',
    },
    {
      text: 'VSCode 调试步骤教程',
      link: '/posts/VSCode调试步骤教程',
    },
    {
      text: 'Mitt 实现兄弟组件之间的通信',
      link: '/posts/Mitt-发布订阅',
    },
    {
      text: '前端重新部署刷新网页',
      link: '/posts/前端重新部署刷新网页',
    },
    {
      text: '正则表达式介绍与使用',
      link: '/posts/正则表达式介绍与使用',
    },
    {
      text: 'GitHub Pages自定义域名',
      link: '/posts/GitHubPages自定义域名',
    },
    {
      text: 'Linux 基本命令',
      link: '/posts/Linux基本命令',
    },
    {
      text: 'CSS 命名方法论 - BEM',
      link: '/posts/CSS命名方法论-BEM',
    },
    {
      text: '解除浏览器跨域方法',
      link: '/posts/解除浏览器跨域方法',
    },
    {
      text: 'VitePress 集成使用 TailwindCSS',
      link: '/posts/Vitepress集成TailwindCSS',
    },
    {
      text: 'Verdaccio 搭建NPM私有仓库',
      link: '/posts/Verdaccio搭建NPM私有仓库',
    },
    {
      text: '构建高效前端工具函数库',
      link: '/posts/构建高效前端工具函数库',
    },
    {
      text: 'NPM镜像源切换',
      link: '/posts/NPM镜像源切换',
    },
    {
      text: 'Github SSH 连接不上',
      link: '/posts/GithubSSH连接不上',
    },
    {
      text: 'WebSocket 介绍和使用',
      link: '/posts/WebSocket介绍和使用',
    },
    {
      text: 'Uniapp && 小程序相关',
      link: '/posts/小程序开发记录',
    },
    {
      text: 'PicGo 图床搭建',
      link: '/posts/PicGo图床搭建',
    },
    {
      text: '如何修改第三方依赖包源码',
      link: '/posts/如何修改第三方依赖包源码',
    },
    {
      text: 'H5 扫描二维码',
      link: '/posts/H5扫描二维码',
    },
    {
      text: 'Mac 配置和使用',
      link: '/posts/Mac配置和使用',
    },
    {
      text: '服务端实时推送SSE',
      link: '/posts/服务端实时推送SSE',
    },
    {
      text: '有点用的东西',
      link: '/posts/有点用的东西',
    },
    {
      text: 'PNPM相关记录',
      link: '/posts/PNPM相关记录',
    },
    {
      text: '计算机基础相关',
      link: '/posts/计算机基础相关',
    },
    {
      text: 'Vercel 部署 NestJS',
      link: '/posts/Vercel部署NestJS',
    },
    {
      text: '数据大屏适配方案',
      link: '/posts/数据大屏适配方案',
    },
    {
      text: '移动端H5 页面适配方案',
      link: '/posts/移动端H5页面适配方案',
    },
    // {
    //   text: 'NestJS 接入 DeepSeek 实现流式对话',
    //   link: '/posts/NestJS接入DeepSeek实现流式对话',
    // },
    {
      text: 'AI Thinking',
      link: '/posts/AI_Thinking',
    },
  ],
  '/flutter': [
    {
      text: '基础环境搭建',
      link: '/flutter/基础环境搭建',
    },
    {
      text: 'Dart 基础语法',
      link: '/flutter/Dart基础语法',
    },
    {
      text: '网络请求与数据存储',
      link: '/flutter/网络请求与数据存储',
    },
    {
      text: '布局实战技巧与登录模块开发',
      link: '/flutter/布局实战技巧与登录模块开发',
    },
    {
      text: 'APP 导航框架与常用功能实现',
      link: '/flutter/APP导航框架与常用功能实现',
    },
  ],
  '/cursor': [
    {
      text: '白嫖 Cursor',
      link: '/cursor/白嫖Cursor',
    },
    {
      text: '使用 Cursor 生成设计稿',
      link: '/cursor/使用Cursor生成设计稿',
    },
  ],
} as DefaultTheme.Sidebar;
