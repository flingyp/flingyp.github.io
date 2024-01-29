import { defineConfig } from "vitepress";
import nav from "./theme/config/Nav";
import sidebar from "./theme/config/Sidebar";
import socialLinks from "./theme/config/Social";

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
    nav,
    sidebar,
    socialLinks,
  },
});
