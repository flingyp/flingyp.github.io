import { DefaultTheme } from 'vitepress/theme';

export default {
  '/frontend/': [
    {
      text: 'Frontend',
      collapsed: false,
      items: [
        {
          text: 'HTML5',
          collapsed: false,
          items: [
            {
              text: 'HTML 相关面试题',
              link: '/frontend/HTML5/Interview',
            },
          ],
        },
        {
          text: 'CSS3',
          collapsed: false,
          items: [
            {
              text: 'CSS 相关面试题',
              link: '/frontend/CSS3/Interview',
            },
          ],
        },
        {
          text: 'JavaScript',
          collapsed: false,
          items: [
            {
              text: 'JavaScript 相关面试题',
              link: '/frontend/JavaScript/Interview',
            },
          ],
        },
        {
          text: 'TypeScript',
          collapsed: false,
          items: [],
        },
        {
          text: 'Vue',
          collapsed: false,
          items: [],
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
