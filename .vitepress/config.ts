import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/vitepress-basic-docs",
  title: "Basic Docs",
  description: "VitePress 静态网站基本模板",
  themeConfig: {
    // 文档标题
    siteTitle: "Basic Docs",
    // 文档LOGO
    logo: "/docs-logo.png",
    // 顶部栏导航栏
    nav: [
      { text: "Guide", link: "/guide/" },
      { text: "Configs", link: "/configs/" },
      {
        text: "Github源码",
        link: "https://github.com/flingyp/vitepress-basic-docs",
      },
      {
        text: "相关链接",
        items: [
          {
            text: "源码地址",
            link: "https://github.com/flingyp/vitepress-basic-docs",
          },
          { text: "预览地址", link: "https://yyblog.top/vitepress-basic-docs" },
        ],
      },
    ],
    // 顶部右侧相关社交账号栏
    socialLinks: [
      { icon: "github", link: "https://github.com/flingyp" },
      { icon: "twitter", link: "..." },
      { icon: "discord", link: "..." },
      { icon: "facebook", link: "https://github.com/flingyp" },
      { icon: "instagram", link: "..." },
      { icon: "linkedin", link: "..." },
      { icon: "youtube", link: "..." },
    ],
    // 左侧侧边栏
    sidebar: {
      "/guide/": [
        {
          text: "Guide",
          items: [
            { text: "Introduction", link: "/guide/" },
            { text: "Getting Started", link: "/getting-started" },
          ],
        },
      ],
      "/configs": [
        {
          text: "Section Title A",
          collapsible: true, // 是否开启折叠
          collapsed: false, // 默认折叠
          items: [
            { text: "Item A", link: "/item-a" },
            { text: "Item B", link: "/item-b" },
          ],
        },
      ],
    },
    editLink: {
      pattern:
        "https://github.com/flingyp/vitepress-basic-docs/tree/main/:path",
      text: "Edit this page on GitHub",
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present FlingYP",
    },
  },
});
