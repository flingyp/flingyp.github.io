import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "✒️",
  description: "flingyp's site",
  head: [["link", { rel: "icon", href: "/favicon.png" }]],
  themeConfig: {
    logo: {
      light: "/logo/light.png",
      dark: "/logo/dark.png",
    },
    nav: [
      { text: "首页", link: "/" },
      { text: "实践案例", link: "/markdown-examples" },
    ],
    sidebar: [
      {
        text: "实践案例",
        items: [
          { text: "Markdown 案例", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/flingyp" }],
  },
});
