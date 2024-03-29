<script setup lang="ts">
import { ref } from 'vue';
import { NPopover, NImage, NTooltip } from 'naive-ui';

import IconPencil from '../components/Icons/Pencil.vue';
import IconWx from '../components/Icons/Wx.vue';

const projectList = ref([
  {
    name: 'Vadmire Admin',
    description: '一款基于 Vue3 + TypeScript + NaiveUI 等技术栈搭建的后台系统',
    link: 'https://github.com/flingyp/vadmire-admin',
  },
  {
    name: 'vitepress-demo-preview',
    description: '在 Vitepress 进行 SFC 单文件组件的预览和源码展示',
    link: 'https://github.com/flingyp/vitepress-demo-preview',
  },
  {
    name: '@flypeng/lint-config',
    description: '集成 ESLint + Styleint + Prettier Lint 和 Code Formatter 个人配置包',
    link: 'https://github.com/flingyp/lint-config',
  },

  {
    name: '@flypeng/tool',
    description: '集成业务中常用的工具函数的工具库',
    link: 'https://github.com/flingyp/flypeng-tool',
  },

  {
    name: 'VSCode Settings',
    description: '个人 VSCode 配置',
    link: 'https://github.com/flingyp/vscode-settings',
  },
  {
    name: 'vite-plugin-clear-console',
    description: '生成环境下清除项目中所有 console 日志输出插件',
    link: 'https://github.com/flingyp/vite-plugin-clear-console',
  },
  {
    name: 'HotNews',
    description: '预览平台热搜内容的 VSCode 插件',
    link: 'https://github.com/flingyp/HotNews',
  },
  {
    name: 'JsonToTs',
    description: '将 JSON 转换为 TypeScript 接口',
    link: 'https://github.com/flingyp/json-to-ts',
  },
]);
</script>

<template>
  <div class="w-full my-4 h-[calc(100vh-64px-98px)] flex justify-center items-center">
    <div
      class="text-sm w-[94%] md:w-[60%] lg:w-[50%] h-full overflow-y-scroll no-scrollbar scroll-smooth p-6 mx-auto rounded border border-[#d0d7de] dark:border-[#30363d] shadow-inner"
    >
      <div class="w-full flex flex-col justify-center items-center mb-8">
        <img class="w-24 h-24 rounded-full" src="/public/profile.png" />
        <p class="mt-4">Living without an aim is like sailing without a compass</p>
      </div>

      <div class="flex justify-between items-center mb-4">
        <div class="flex justify-between items-center">
          <a href="https://github.com/flingyp" class="no-underline Link--primary">flingyp</a>
          <span class="color-fg-muted d-inline-block" style="padding: 0px 2px">/ </span>
          README
          <span class="color-fg-muted">.md</span>
        </div>

        <div class="text-[#57606a]">
          <a href="https://github.com/flingyp/flingyp/edit/main/README.md" class="no-underline Link--primary">
            <IconPencil class="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      <h2 class="mb-2 text-base">👋 Hi, I'm flingyp</h2>

      <h3 class="mt-4 mb-4">🙂 关于我</h3>
      <ul class="space-y-1">
        <li class="flex items-center space-x-1">
          <span>💁 00后 前端程序员 热爱前端 开源爱好者</span>
        </li>

        <li class="flex items-center space-x-2">
          <span>👉 WeChat</span>
          <NPopover trigger="hover">
            <template #trigger>
              <IconWx class="w-4 h-4 inline-block outline-none cursor-pointer" />
            </template>
            <div class="w-40">
              <NImage src="/wxCode.png" width="100%" :preview-disabled="true" />
            </div>
          </NPopover>
        </li>

        <li class="flex items-center space-x-2">
          <span>📧 EMail</span>
          <a href="mailto:flingyp@163.com" class="underline font-semibold text-black dark:text-white">
            flingyp@163.com
          </a>
        </li>
      </ul>

      <h3 class="mt-6 mb-4">🛠️ 技术栈</h3>
      <div class="flex items-center space-x-2">
        <code><img height="20" src="https://api.iconify.design/skill-icons:vuejs-dark.svg" /></code>&nbsp;
        <code><img height="20" src="https://api.iconify.design/skill-icons:react-dark.svg" /></code>&nbsp;
        <code><img height="20" src="https://api.iconify.design/skill-icons:typescript.svg" /></code>&nbsp;
        <code><img height="20" src="https://api.iconify.design/skill-icons:vite-dark.svg" /></code>&nbsp;
        <code><img height="20" src="https://api.iconify.design/skill-icons:nuxtjs-dark.svg" /></code>&nbsp;
        <code><img height="20" src="https://api.iconify.design/skill-icons:tailwindcss-dark.svg" /></code>&nbsp;
        <code><img height="20" src="https://api.iconify.design/skill-icons:nodejs-dark.svg" /></code>&nbsp;
        <code><img height="20" src="https://api.iconify.design/logos:vueuse.svg" /></code>&nbsp;
        <code><img height="20" src="https://api.iconify.design/skill-icons:vite-dark.svg" /></code>&nbsp;
        <code><img height="20" src="https://api.iconify.design/skill-icons:nestjs-dark.svg" /></code>&nbsp;
        <code><img height="20" src="https://api.iconify.design/devicon:git.svg" /></code>&nbsp;
        <code><img height="20" src="https://api.iconify.design/skill-icons:github-dark.svg" /></code>&nbsp;
      </div>

      <h3 class="mt-6 mb-4">🍞 开源项目</h3>
      <div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="item in projectList" :key="item.name" class="site-item">
          <div class="name">
            <a :href="item.link" target="_blank" class="name">{{ item.name }}</a>
          </div>
          <NTooltip placement="bottom" style="font-size: 12px; max-width: 400px">
            <template #trigger>
              <p class="description">{{ item.description }}</p>
            </template>
            <span>{{ item.description }}</span>
          </NTooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

.site-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 80px;
  padding: 10px;
  background: var(--vp-c-default-3);
  border-radius: 4px;
  transition: transform 0.2s linear;

  .name {
    font-family: 'PuHui_Bold';
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .description {
    font-size: 12px;
    line-height: 16px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
