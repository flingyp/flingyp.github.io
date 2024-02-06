import { defineConfig } from 'vitepress';
import nav from './theme/config/Nav';
import sidebar from './theme/config/Sidebar';
import socialLinks from './theme/config/Social';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'flingyp ✍️',
  description: "flingyp's site",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { name: 'referrer', content: 'no-referrer' }],
  ],
  themeConfig: {
    siteTitle: '',
    logo: {
      light: '/logo/light.png',
      dark: '/logo/dark.png',
    },
    lastUpdated: {
      text: '更新时间',
      formatOptions: {
        dateStyle: 'full',
      },
    },
    search: {
      provider: 'local',
    },
    outline: {
      label: '页面大纲',
      level: 2,
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    footer: {
      message:
        'Released under the <a href="https://github.com/flingyp/flingyp.github.io/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2024-present <a href="https://github.com/flingyp">flingyp</a>',
    },
    nav,
    sidebar,
    socialLinks,
  },
});
