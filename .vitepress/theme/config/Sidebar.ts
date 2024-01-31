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
          items: [],
        },
      ],
    },
  ],
} as DefaultTheme.Sidebar;
