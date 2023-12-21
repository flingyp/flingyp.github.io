import { DefaultTheme } from "vitepress";

export const SideBarList: DefaultTheme.Sidebar = {
  "/frontend/": [
    {
      text: "HTML",
      collapsed: true, // 是否开启折叠
      items: [
        {
          text: "杂记",
          link: "/frontend/HTML5/RandomRecord",
        },
      ],
    },
    {
      text: "CSS3",
      collapsed: true,
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
        {
          text: "Sass",
          link: "/frontend/CSS3/Sass",
        },
      ],
    },
    {
      text: "JavaScript",
      collapsed: true,
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
        {
          text: "JavaScript设计模式",
          link: "/frontend/DesignPattern/",
        },
      ],
    },
    {
      text: "TypeScript",
      collapsed: true,
      items: [
        {
          text: "基础语法",
          link: "/frontend/TypeScript/",
        },
        {
          text: "工具类型",
          link: "/frontend/TypeScript/ToolType",
        },
        {
          text: "类型体操",
          link: "/frontend/TypeScript/TypeGymnastics",
        },
      ],
    },
    {
      text: "Vue",
      collapsed: true,
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
      text: "Nuxt3",
      collapsed: true,
      items: [
        {
          text: "Nuxt3",
          link: "/frontend/Nuxt3/",
        },
      ],
    },
    {
      text: "React",
      collapsed: true,
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
    {
      text: "Babel",
      collapsed: true,
      items: [
        {
          text: "Babel 指南",
          link: "/frontend/Engineering/Babel/",
        },
        {
          text: "Babel 配置参考",
          link: "/frontend/Engineering/Babel/config",
        },
      ],
    },
  ],
  "/services": [
    {
      text: "Nest.js",
      collapsed: true,
      items: [
        {
          text: "基本介绍",
          link: "/services/Nest/",
        },
        {
          text: "基本使用",
          link: "/services/Nest/devRecord",
        },
        {
          text: "技术集成",
          link: "/services/Nest/technology-integrate",
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
    {
      text: 'Python',
      collapsed: true,
      items: [
        {
          text: '环境搭建',
          link: '/services/Python/',
        },
        {
          text: '变量类型',
          link: '/services/Python/Python变量类型',
        },
        {
          text: '运算符',
          link: '/services/Python/Python运算符',
        },
        {
          text: '条件循坏语句',
          link: '/services/Python/Python条件循环语句',
        },
        {
          text: '函数',
          link: '/services/Python/Python函数',
        },
        {
          text: '多线程',
          link: '/services/Python/Python多线程',
        },
        {
          text: '操作文件',
          link: '/services/Python/Python操作文件',
        },
        {
          text: '模块',
          link: '/services/Python/Python模块',
        },
        {
          text: '正则',
          link: '/services/Python/Python正则',
        },
        {
          text: '爬虫',
          link: '/services/Python/Python爬虫',
        },
        {
          text: '自动化',
          link: '/services/Python/Python自动化',
        }
      ]
    }
  ],
  "/books/vue_design_realize": [
    {
      text: "Vue.js 设计与实现",
      collapsed: true,
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
