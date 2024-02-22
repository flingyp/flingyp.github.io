<script setup lang="ts">
import { NPopover, NImage } from 'naive-ui';

import IconPencil from '../components/Icons/Pencil.vue';
import IconWx from '../components/Icons/Wx.vue';
</script>

<template>
  <div class="w-full h-[calc(100vh-64px-61px)] flex justify-center items-center">
    <div
      class="text-sm w-[94%] md:w-[60%] lg:w-[50%] p-6 mx-auto rounded border border-[#d0d7de] dark:border-[#30363d] shadow-inner"
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
          <span>💁 00后，前端程序员，热爱前端和开源爱好者</span>
        </li>

        <li class="flex items-center space-x-2">
          <span>👉 WeChat</span>
          <NPopover trigger="hover">
            <template #trigger>
              <IconWx class="w-4 h-4 inline-block outline-none cursor-pointer" />
            </template>
            <div class="w-40">
              <NImage src="/public/wxCode.png" width="100%" :preview-disabled="true" />
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
    </div>
  </div>
</template>
