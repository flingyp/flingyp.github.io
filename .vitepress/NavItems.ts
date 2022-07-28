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
    text: "前端工程化",
    items: [
      {
        text: "代码规范化",
        link: "/frontend/Engineering/CodeStandard",
      },
    ],
  },
  {
    text: "随记文章",
    items: [
      {
        text: "小程序相关随记",
        link: "/notes/UniappNotes",
      },
      {
        text: "Git 相关随记",
        link: "/notes/Git.md",
      },
      {
        text: "Nginx 基本操作",
        link: "/notes/Nginx",
      },
      {
        text: "Linux 基本命令",
        link: "/notes/Linux",
      },
      {
        text: "JS正则表达式随记",
        link: "/notes/RegExp",
      },
    ],
  },
  {
    text: "相关链接",
    items: [
      {
        text: "VAdmire Plus",
        link: "https://vadmire.top",
      },
      {
        text: "@flypeng/tool",
        link: "https://yyblog.top/flypeng-tool",
      },
    ],
  },
];
