import { DefaultTheme } from 'vitepress/theme';

export default [
  { text: '博客', link: '/posts/' },
  { text: '前端笔记', link: '/frontend/' },
  { text: '后端笔记', link: '/backend/' },
  // {
  //   text: '其它笔记',
  //   items: [
  //     {
  //       text: 'Flutter 学习笔记',
  //       link: '/flutter/',
  //     },
  //     {
  //       text: 'Cursor 使用记录',
  //       link: '/cursor/白嫖Cursor',
  //     },
  //   ],
  // },
  { text: '资源导航网', link: '/resource/' },
  { text: 'AI Thinking', link: '/ai_thinking/' },
  // { text: 'flingyp.me', link: 'https://me.flingyp.online' },
] as DefaultTheme.NavItem[];
