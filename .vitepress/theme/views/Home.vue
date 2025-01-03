<script setup lang="ts">
import { NPopover, NImage } from 'naive-ui';

import IconPencil from '../components/Icons/Pencil.vue';
import IconWx from '../components/Icons/Wx.vue';
</script>

<template>
  <div class="mt-20 space-x-5 flex justify-center items-start">
    <div
      class="flex-1 text-sm w-full overflow-y-scroll no-scrollbar scroll-smooth p-8 rounded-lg border border-[#d0d7de] dark:border-[#30363d] shadow-sm"
    >
      <div class="w-full flex flex-col justify-center items-center mb-8">
        <img
          class="w-20 h-20 rounded-full hover:scale-110 transition duration-500 cursor-pointer"
          src="/public/profile.png"
        />
        <span class="mt-4 mb-2 text-sm">生活没有目标就像航海没有指南针</span>
      </div>

      <div class="flex justify-between items-center mb-4">
        <div class="flex justify-between items-center">
          <a href="https://github.com/flingyp" class="no-underline">flingyp</a>
          <span class="color-fg-muted d-inline-block" style="padding: 0px 2px">/ </span>
          README
          <span class="color-fg-muted">.md</span>
        </div>

        <div class="text-[#57606a]">
          <a href="https://github.com/flingyp/flingyp/edit/main/README.md" class="no-underline">
            <IconPencil class="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      <h2 class="!mt-0 text-base">👋 Hi, I'm flingyp</h2>

      <h3 class="!mt-4">🙂 关于我</h3>
      <ul class="space-y-2">
        <li class="flex flex-col space-y-1">
          <span>💁 00后 前端程序员</span>
          <span>🔥 热爱开源，开源的价值不在于索取，而在于奉献和共同成长 </span>
          <span>🧑🏻‍💻 代码洁癖，追求极致的代码质量与相对规范</span>
        </li>

        <li class="flex items-center space-x-2">
          <span> 👉 联系我 </span>
          <div class="space-x-3">
            <NPopover trigger="hover">
              <template #trigger>
                <IconWx class="w-4 h-4 inline-block outline-none cursor-pointer" />
              </template>
              <div class="w-40">
                <NImage src="/wxCode.png" width="100%" :preview-disabled="true" />
              </div>
            </NPopover>

            <a href="mailto:flingyp@163.com" class="underline font-semibold text-black dark:text-white">
              flingyp@163.com
            </a>
          </div>
        </li>
      </ul>

      <h3>🛠️ 技术栈</h3>
      <div class="mt-4 flex items-center space-x-2">
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

      <h3>🥳 开源项目</h3>
      <ul class="!pl-0 grid grid-cols-2 gap-2">
        <li
          class="flex flex-col space-y-1 text-xs border border-[#d0d7de] dark:border-[#30363d] rounded px-4 pt-2 pb-2 !m-0"
        >
          <a href="https://github.com/flingyp/flypeng-tool" target="_blank" class="text-base"> flypeng-tool </a>
          <span>集成常用工具方法和函数工具库</span>
        </li>

        <li
          class="flex flex-col space-y-1 text-xs border border-[#d0d7de] dark:border-[#30363d] rounded px-4 pt-2 pb-2 !m-0"
        >
          <a href="https://github.com/flingyp/lint-config" target="_blank" class="text-base"> lint-config </a>
          <span>个性化 ESLint 和 Stylelint 配置库</span>
        </li>

        <li
          class="flex flex-col space-y-1 text-xs border border-[#d0d7de] dark:border-[#30363d] rounded px-4 pt-2 pb-2 !m-0"
        >
          <a href="https://github.com/flingyp/vitepress-demo-preview" target="_blank" class="text-base">
            vitepress-demo-preview
          </a>
          <span>实现在 Vitepress 中展示 Vue 单文件组件效果展示和源码预览</span>
        </li>

        <li
          class="flex flex-col space-y-1 text-xs border border-[#d0d7de] dark:border-[#30363d] rounded px-4 pt-2 pb-2 !m-0"
        >
          <a href="https://github.com/flingyp/vadmire-admin" target="_blank" class="text-base"> vadmire-admin </a>
          <span>一款 Vue3 + TypeScript + NaiveUI 等技术栈搭建的后台系统模版</span>
        </li>
      </ul>
    </div>

    <div class="flex justify-center flex-1">
      <img src="/public/flingyp_contributions.png" style="width: 100%" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.site-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.name {
  font-family: 'PuHui_Bold';
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
}
</style>
