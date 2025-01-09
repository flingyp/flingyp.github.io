<script setup lang="ts">
import { NPopover, NImage } from 'naive-ui';
import IconPencil from '../components/Icons/Pencil.vue';
import IconWx from '../components/Icons/Wx.vue';

const techIcons = [
  'https://api.iconify.design/skill-icons:vuejs-dark.svg',
  'https://api.iconify.design/skill-icons:react-dark.svg',
  'https://api.iconify.design/skill-icons:typescript.svg',
  'https://api.iconify.design/skill-icons:vite-dark.svg',
  'https://api.iconify.design/skill-icons:nuxtjs-dark.svg',
  'https://api.iconify.design/skill-icons:tailwindcss-dark.svg',
  'https://api.iconify.design/skill-icons:nodejs-dark.svg',
  'https://api.iconify.design/logos:vueuse.svg',
  'https://api.iconify.design/skill-icons:nestjs-dark.svg',
  'https://api.iconify.design/devicon:git.svg',
  'https://api.iconify.design/skill-icons:github-dark.svg',
];

const projects = [
  {
    name: 'flypeng-tool',
    url: 'https://github.com/flingyp/flypeng-tool',
    description: '集成常用工具方法和函数工具库',
  },
  {
    name: 'lint-config',
    url: 'https://github.com/flingyp/lint-config',
    description: '个性化 ESLint 和 Stylelint 配置库',
  },
  {
    name: 'vitepress-demo-preview',
    url: 'https://github.com/flingyp/vitepress-demo-preview',
    description: '实现在 Vitepress 中展示 Vue 单文件组件效果展示和源码预览',
  },
  {
    name: 'VAdmire Admin',
    url: 'https://github.com/flingyp/vadmire-admin',
    description: '一款 Vue3 + TypeScript + NaiveUI 等技术栈搭建的后台系统模版',
  },
  {
    name: 'Nest Starter',
    url: 'https://github.com/flingyp/nest-starer',
    description: '基于 NestJS 的基本项目模版',
  },
  {
    name: 'Nuxt3 Starter',
    url: 'https://github.com/flingyp/nuxt-starer',
    description: '基于 Nuxt3 的基本项目模版，Ant Design Vue、VueUse、UnoCSS 等',
  },
];
</script>

<template>
  <div class="container mx-auto px-4 pt-10 md:pt-10">
    <!-- 主要内容区域 -->
    <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- 左侧：关于我和贡献图表 -->
      <div class="md:col-span-2 space-y-6">
        <!-- 关于我 -->
        <div class="p-6 rounded-xl bg-white dark:bg-[#1a1a1a] shadow-lg border border-gray-100 dark:border-gray-800">
          <div class="flex justify-between items-center">
            <div class="flex items-center space-x-2">
              <a
                href="https://github.com/flingyp"
                class="text-lg font-semibold no-underline hover:text-blue-500 transition-colors"
              >
                flingyp
              </a>
              <span class="text-gray-400">/</span>
              <span class="font-mono">README<span class="text-gray-400">.md</span></span>
            </div>
            <a
              href="https://github.com/flingyp/flingyp/edit/main/README.md"
              class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <IconPencil class="w-5 h-5" />
            </a>
          </div>

          <div class="space-y-6">
            <h2
              class="!mt-4 !pt-6 text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
            >
              👋 Hi, I'm flingyp
            </h2>

            <ul class="space-y-2 list-none pl-0">
              <li class="flex items-center space-x-3">
                <span class="text-blue-500">💁</span>
                <span>00后 前端程序员</span>
              </li>
              <li class="flex items-center space-x-3">
                <span class="text-red-500">🔥</span>
                <span>热爱开源，开源的价值不在于索取，而在于奉献和共同成长</span>
              </li>
              <li class="flex items-center space-x-3">
                <span class="text-purple-500">🧑🏻‍💻</span>
                <span>代码洁癖，追求极致的代码质量与相对规范</span>
              </li>
            </ul>

            <div class="flex items-center gap-4">
              <span class="text-green-500">👉</span>
              <span>联系我</span>
              <NPopover trigger="hover" placement="bottom">
                <template #trigger>
                  <IconWx class="w-6 h-6 cursor-pointer hover:text-blue-500 transition-colors" />
                </template>
                <div class="w-40 p-2 rounded-lg shadow-lg">
                  <NImage src="/wxCode.png" width="100%" :preview-disabled="true" />
                </div>
              </NPopover>
              <a href="mailto:flingyp@163.com" class="underline font-semibold hover:text-blue-500 transition-colors">
                flingyp@163.com
              </a>
            </div>
          </div>
        </div>

        <!-- 贡献图表 -->
        <div class="rounded-xl overflow-hidden shadow-lg">
          <img src="/public/flingyp_contributions.png" alt="contributions" class="w-full h-auto" />
        </div>
      </div>

      <!-- 右侧：技术栈和开源项目 -->
      <div class="md:col-span-1 space-y-6">
        <!-- 技术栈 -->
        <div
          class="p-6 rounded-xl bg-white/80 dark:bg-[#1a1a1a]/80 backdrop-blur-sm shadow-lg border border-gray-100/50 dark:border-gray-800/50"
        >
          <h3 class="text-xl font-semibold !mt-0 !mb-3 flex items-center">
            <span class="mr-2 text-2xl">🛠️</span>
            <span class="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">技术栈</span>
          </h3>
          <div class="grid grid-cols-4 gap-4">
            <div
              v-for="(icon, index) in techIcons"
              :key="index"
              class="group relative aspect-square flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-50/50 to-gray-100/50 dark:from-gray-800/30 dark:to-gray-700/30 hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-300"
            >
              <img :src="icon" class="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              <div
                class="absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-200/50 dark:ring-gray-700/50 group-hover:ring-blue-500/30 dark:group-hover:ring-blue-500/30"
              ></div>
            </div>
          </div>
        </div>

        <!-- 开源项目 -->
        <div
          class="p-6 rounded-xl bg-white/80 dark:bg-[#1a1a1a]/80 backdrop-blur-sm shadow-lg border border-gray-100/50 dark:border-gray-800/50"
        >
          <h3 class="text-xl font-semibold !mt-0 !mb-6 flex items-center">
            <span class="mr-2 text-2xl">🥳</span>
            <span class="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">开源项目</span>
          </h3>
          <div class="space-y-4">
            <a
              v-for="project in projects"
              :key="project.name"
              :href="project.url"
              target="_blank"
              style="text-decoration: none"
              class="group block relative px-4 py-5 rounded-xl hover:-translate-y-0.5 transition-all duration-300 no-underline text-inherit hover:text-inherit"
            >
              <!-- 背景渐变 -->
              <div
                class="absolute inset-0 rounded-xl bg-gradient-to-br from-gray-50/80 to-gray-100/80 dark:from-gray-800/30 dark:to-gray-700/30 opacity-100 group-hover:opacity-0 transition-opacity duration-300"
              ></div>
              <div
                class="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-50/80 to-purple-50/80 dark:from-blue-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>

              <!-- 内容 -->
              <div class="relative">
                <div class="flex items-center justify-between mb-2">
                  <h4
                    class="text-base font-semibold group-hover:text-blue-500 transition-colors flex items-center !mt-0"
                  >
                    <span class="mr-2 text-nowrap">{{ project.name }}</span>
                    <svg
                      class="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </h4>
                  <div
                    class="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <svg
                      class="w-4 h-4 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <span class="text-sm text-gray-600 dark:text-gray-400 mt-0.5 !mb-0">{{ project.description }}</span>
              </div>

              <!-- 边框效果 -->
              <div
                class="absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-200/50 dark:ring-gray-700/50 group-hover:ring-blue-500/30 dark:group-hover:ring-blue-500/30 transition-colors duration-300"
              ></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
}

@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }
}
</style>
