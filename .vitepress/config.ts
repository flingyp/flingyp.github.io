import { defineConfig } from 'vitepress';
import { vitepressPluginLegend } from 'vitepress-plugin-legend';
// @ts-expect-error 已知错误
import mdItCustomAttrs from 'markdown-it-custom-attrs';
import nav from './theme/config/Nav';
import sidebar from './theme/config/Sidebar';
import socialLinks from './theme/config/Social';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'flingyp ✍️',
  description: "flingyp's site",
  head: [
    ['meta', { name: 'referrer', content: 'no-referrer' }],
    ['link', { rel: 'icon', href: '/favicon.png' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css',
      },
    ],
    [
      'script',
      {
        src: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js',
      },
    ],
    [
      'script',
      {
        src: 'https://us.umami.is/script.js',
        'data-website-id': '152c12e4-e4c7-4077-9be2-019fab898726',
        // @ts-expect-error 已知错误
        defer: true,
      },
    ],
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
    // footer: {
    //   message:
    //     'Released under the <a href="https://github.com/flingyp/flingyp.github.io/blob/main/LICENSE">MIT License</a>.',
    //   copyright: 'Copyright © 2024-present <a href="https://github.com/flingyp">flingyp</a>',
    // },
    nav,
    sidebar,
    socialLinks,
  },
  markdown: {
    config: (md) => {
      // Image online preview
      md.use(mdItCustomAttrs, 'image', {
        'data-fancybox': 'gallery',
      });

      vitepressPluginLegend(md, {
        markmap: {
          showToolbar: true,
        },
        mermaid: {
          showToolbar: true,
        },
      });
    },
  },
});
