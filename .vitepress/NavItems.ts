import { DefaultTheme } from "vitepress";

export const NavItemList: DefaultTheme.NavItem[] = [
  {
    text: "前端宝藏库",
    items: [
      {
        text: "HTML5",
        link: "/frontend/HTML5/RandomRecord",
      },
      {
        text: "CSS3",
        link: "/frontend/CSS3/Layout",
      },
      {
        text: "JavaScript",
        link: "/frontend/JavaScript/ES6",
      },
      {
        text: "TypeScript",
        link: "/frontend/TypeScript/",
      },
      {
        text: "Vue",
        link: "/frontend/Vue/Vue3",
      },
      {
        text: "React",
        link: "/frontend/React/React",
      },
    ],
  },
  {
    text: "Nest.js",
    link: "/services/Nest/",
  },
  {
    text: "前端工程化",
    items: [
      {
        text: "代码规范化",
        link: "/frontend/Engineering/CodeStandard",
      },
      {
        text: "Changesets多包管理",
        link: "/frontend/Engineering/Changesets",
      },
      // {
      //   text: "前端脚手架",
      //   link: "/frontend/Engineering/WebCli",
      // },
      {
        text: "关于代码格式化",
        link: "/frontend/Engineering/CodeFormat",
      },
    ],
  },
  {
    text: "相关链接",
    items: [
      {
        text: "YRoam Admin",
        link: "https://yyblog.top/yroam-admin/",
      },
      {
        text: "VAdmire Plus",
        link: "https://vadmire.top",
      },
      {
        text: "@flypeng/tool",
        link: "https://yyblog.top/flypeng-tool",
      },
      {
        text: "vitepress-demo-preview",
        link: "https://yyblog.top/vitepress-demo-preview",
      },
    ],
  },
  {
    text: "宝藏网站",
    link: "/Sites",
  },
  {
    text: "Vue.js 设计与实现",
    link: "/books/vue_design_realize/框架设计概览",
  },
];
