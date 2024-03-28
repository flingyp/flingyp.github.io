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
          text: 'Three.js',
          link: '/frontend/ThreeJS/',
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
          ],
        },
        {
          text: 'Docker',
          link: '/backend/Docker基本概念',
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
      text: 'Linux 基本命令',
      link: '/posts/Linux基本命令',
    },
    {
      text: 'Nginx 基本使用',
      link: '/posts/Nginx基本使用',
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
      text: 'Uniapp 打包安卓和IOS',
      link: '/posts/Uniapp打包安卓和IOS',
    },
    {
      text: 'UniCloud 开源库',
      link: '/posts/uniCloud开源库',
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
  ],
} as DefaultTheme.Sidebar;
