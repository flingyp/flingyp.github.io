// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Layout from "./layout/Layout.vue";
import "./styles/style.scss";
import "./styles/font.scss";
import "./styles/overwrite.scss";

export default {
  extends: DefaultTheme,
  // https://vitepress.dev/guide/extending-default-theme#layout-slots
  Layout: () => {
    return h(Layout, null, {});
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  },
} satisfies Theme;
