// https://vitepress.dev/guide/custom-theme
import { App, h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import Layout from './layout/Layout.vue';

import './tailwind.postcss';

import './styles/style.scss';
import './styles/font.scss';
import './styles/overwrite.scss';

import { changeCssVariable } from './utils/color';
import { capture, getFilename } from './utils/screenshot';

import { initComponent } from 'vitepress-plugin-legend/component';
import 'vitepress-plugin-legend/dist/index.css';

// 主题色列表
const colors = [
  '#e53935',
  '#d81b60',
  '#8e24aa',
  '#5e35b1',
  '#3949ab',
  '#1e88e5',
  '#039be5',
  '#00acc1',
  '#00897b',
  '#43a047',
  '#7cb342',
  '#c0ca33',
  '#fdd835',
  '#ffb300',
  '#fb8c00',
  '#f4511e',
  '#6d4c41',
  '#757575',
  '#546e7a',
];

const saveMain = () => {
  const mainContainer = document.getElementsByClassName('main')[0];
  capture({
    target: mainContainer as HTMLElement,
    filename: getFilename(),
    preCapture: () => {
      mainContainer.classList.add('px-2');
    },
    nextCapture: () => {
      mainContainer.classList.remove('px-2');
    },
  });
};

if (typeof document !== 'undefined') {
  changeCssVariable(colors, 2000, true);

  document.addEventListener('keydown', (event) => {
    // 检测 Command/Ctrl + C 组合键
    if ((event.metaKey || event.ctrlKey) && event.key === 'b') {
      event.preventDefault(); // 阻止默认复制行为
      saveMain();
    }
  });
}

export default {
  extends: DefaultTheme,
  // https://vitepress.dev/guide/extending-default-theme#layout-slots
  Layout: () => {
    return h(Layout, null, {});
  },
  enhanceApp({ app }: { app: App }) {
    initComponent(app);
  },
} satisfies Theme;
