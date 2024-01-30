import { DefaultTheme } from 'vitepress/theme';

export default [
  { text: '博客', link: '/posts/' },
  { text: '笔记', link: '/frontend/' },
  { text: '资源导航网', link: '/resource/' },
  {
    text: '开源项目',
    items: [
      {
        text: '自建项目',
        items: [
          {
            text: 'VAdmire Admin - Vue3 后台管理系统通用模版',
            link: 'https://github.com/flingyp/vadmire-admin',
          },
          {
            text: 'vitepress-demo-preview - SFC 单文件预览插件',
            link: 'https://github.com/flingyp/vitepress-demo-preview',
          },
          {
            text: 'HotNews - 浏览各平台热搜内容的 VSCode 插件',
            link: 'https://github.com/flingyp/HotNews',
          },
          {
            text: 'vite-plugin-clear-console - 清除项目中所有 console 日志输出插件',
            link: 'https://github.com/flingyp/vite-plugin-clear-console',
          },
        ],
      },
      {
        text: '个人工具',
        items: [
          {
            text: '@flypeng/tool - 集成业务中常用的工具函数的工具库',
            link: 'https://github.com/flingyp/flypeng-tool',
          },
          {
            text: '@flypeng/lint-config - 集成ESLint + Prettier + Stylelint Lint 个人配置包',
            link: 'https://github.com/flingyp/lint-config',
          },
          {
            text: 'vscode-settings - 个人 VSCode 全局配置文件',
            link: 'https://github.com/flingyp/vscode-settings',
          },
        ],
      },
    ],
  },
] as DefaultTheme.NavItem[];
