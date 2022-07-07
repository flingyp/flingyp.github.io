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
          text: "ReactRouter",
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
};
