import { DefaultTheme } from "vitepress";

export const SideBarList: DefaultTheme.Sidebar = {
  "/frontend/": [
    {
      text: "HTML",
      collapsible: true, // 是否开启折叠
      items: [
        {
          text: "杂记",
          link: "/frontend/HTML5/RandomRecord",
        },
      ],
    },
    {
      text: "CSS3",
      collapsible: true,
      items: [
        {
          text: "布局",
          link: "/frontend/CSS3/Layout",
        },
        {
          text: "Flex布局",
          link: "/frontend/CSS3/Flex",
        },
        {
          text: "Grid网格布局",
          link: "/frontend/CSS3/Grid",
        },
        {
          text: "CSS常用技巧",
          link: "/frontend/CSS3/Skill",
        },
        {
          text: "杂记",
          link: "/frontend/CSS3/RandomRecord",
        },
      ],
    },
    {
      text: "JavaScript",
      collapsible: true,
      items: [
        {
          text: "ES6语法",
          link: "/frontend/JavaScript/ES6",
        },
        {
          text: "JavaScript常用技巧",
          link: "/frontend/JavaScript/Skill",
        },
        {
          text: "杂记",
          link: "/frontend/JavaScript/RandomRecord",
        },
      ],
    },
    {
      text: "TypeScript",
      collapsible: true,
      items: [
        {
          text: "基础语法",
          link: "/frontend/TypeScript/",
        },
        {
          text: "工具类型",
          link: "/frontend/TypeScript/ToolType",
        },
      ],
    },
    {
      text: "Vue",
      collapsible: true,
      items: [
        {
          text: "Vue2相关语法",
          link: "/frontend/Vue/Vue2",
        },
        {
          text: "Vue3相关语法",
          link: "/frontend/Vue/Vue3",
        },
        {
          text: "Vue3+TSX语法写法总结",
          link: "/frontend/Vue/Vue3Tsx.md",
        },
        {
          text: "杂记",
          link: "/frontend/Vue/RandomRecord.md",
        },
      ],
    },
    {
      text: "React",
      collapsible: true,
      items: [
        {
          text: "React",
          link: "/frontend/React/React",
        },
        {
          text: "React Router",
          link: "/frontend/React/ReactRouter",
        },
        {
          text: "Redux",
          link: "/frontend/React/Redux",
        },
        {
          text: "ReactRedux",
          link: "/frontend/React/ReactRedux",
        },
        {
          text: "ReactHooks",
          link: "/frontend/React/ReactHooks",
        },
        {
          text: "NextJS",
          link: "/frontend/React/NextJS",
        },
      ],
    },
  ],
  "/services": [
    {
      text: "Nest.js",
      collapsible: true,
      items: [
        {
          text: "基本使用",
          link: "/services/Nest/",
        },
        {
          text: "环境变量配置",
          link: "/services/Nest/build",
        },
        {
          text: "服务常用配置",
          link: "/services/Nest/configuration",
        },
      ],
    },
  ],
  "/books/vue_design_realize": [
    {
      text: "Vue.js 设计与实现",
      collapsible: true,
      items: [
        {
          text: "第一篇：框架设计与实现",
          link: "/books/vue_design_realize/框架设计概览",
        },
        {
          text: "第二篇：响应式系统",
          link: "/books/vue_design_realize/响应式系统",
        },
      ],
    },
  ],
};
