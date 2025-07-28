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
    url: 'https://github.com/flingyp/nest-starter',
    description: '基于 NestJS 的基本项目模版',
  },
  {
    name: 'Nuxt3 Starter',
    url: 'https://github.com/flingyp/nuxt-starter',
    description: '基于 Nuxt3 的基本项目模版，Ant Design Vue、VueUse、UnoCSS 等',
  },
];
</script>

<template>
  <div class="relative min-h-screen">
    <!-- 背景渐变 -->
    <div class="fixed inset-0 -z-10">
      <!-- 主背景 -->
      <div class="absolute inset-0 bg-[#fafafa] dark:bg-[#050505]"></div>
      <!-- 顶部光晕 -->
      <div
        class="absolute right-[-20%] top-[-20%] h-[800px] w-[800px] rounded-full bg-blue-100/40 blur-[150px] dark:bg-blue-950/50"
      ></div>
      <!-- 中部光晕 -->
      <div
        class="absolute right-[20%] top-[30%] h-[600px] w-[600px] rounded-full bg-purple-100/30 blur-[130px] dark:bg-purple-950/40"
      ></div>
      <!-- 底部光晕 -->
      <div
        class="absolute left-[-10%] bottom-[-20%] h-[800px] w-[800px] rounded-full bg-indigo-100/40 blur-[150px] dark:bg-indigo-950/50"
      ></div>
    </div>

    <div class="container mx-auto px-4 pt-10 md:pt-10 relative">
      <!-- 主要内容区域 -->
      <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- 左侧：关于我和贡献图表 -->
        <div class="md:col-span-2 space-y-6">
          <!-- 关于我 -->
          <div
            class="p-6 rounded-xl bg-white/70 dark:bg-[#1a1a1a]/70 backdrop-blur-2xl border border-gray-200/50 dark:border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div class="flex justify-between items-center">
              <div class="flex items-center space-x-2">
                <a
                  href="https://github.com/flingyp"
                  class="text-lg font-semibold no-underline hover:text-blue-500 transition-colors"
                >
                  flingyp
                </a>
                <span class="text-gray-400">/</span>
                <span class="font-mono"
                  >README<span class="text-gray-400">.md</span></span
                >
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
                  <span
                    >热爱开源，开源的价值不在于索取，而在于奉献和共同成长</span
                  >
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
                    <IconWx
                      class="w-6 h-6 cursor-pointer hover:text-blue-500 transition-colors"
                    />
                  </template>
                  <div class="w-40 p-2 rounded-lg shadow-lg">
                    <NImage
                      src="/wxCode.png"
                      width="100%"
                      :preview-disabled="true"
                    />
                  </div>
                </NPopover>
                <a
                  href="mailto:flingyp@163.com"
                  class="underline font-semibold hover:text-blue-500 transition-colors"
                >
                  flingyp@163.com
                </a>
              </div>
            </div>
          </div>

          <!-- 贡献图表 -->
          <div
            class="rounded-xl overflow-hidden bg-white/70 dark:bg-[#1a1a1a]/70 backdrop-blur-2xl border border-gray-200/50 dark:border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <img
              src="/public/flingyp_contributions.png"
              alt="contributions"
              class="w-full h-auto"
            />
          </div>
        </div>

        <!-- 右侧：技术栈和开源项目 -->
        <div class="md:col-span-1 space-y-6">
          <!-- 技术栈 -->
          <div
            class="p-6 rounded-xl bg-white/70 dark:bg-[#1a1a1a]/70 backdrop-blur-2xl border border-gray-200/50 dark:border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h3 class="text-xl font-semibold !mt-0 !mb-3 flex items-center">
              <span class="mr-2 text-2xl">🛠️</span>
              <span
                class="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
                >技术栈</span
              >
            </h3>
            <div class="grid grid-cols-4 gap-4">
              <div
                v-for="(icon, index) in techIcons"
                :key="index"
                class="group relative aspect-square flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-50/30 to-gray-100/30 dark:from-gray-800/20 dark:to-gray-700/20 hover:from-blue-50/40 hover:to-purple-50/40 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30 transition-all duration-500"
              >
                <img
                  :src="icon"
                  class="w-6 h-6 group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  class="absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-200/50 dark:ring-gray-700/50 group-hover:ring-blue-500/50 dark:group-hover:ring-blue-500/50 transition-colors duration-500"
                ></div>
              </div>
            </div>
          </div>

          <!-- 开源项目 -->
          <div
            class="p-6 rounded-xl bg-white/70 dark:bg-[#1a1a1a]/70 backdrop-blur-2xl border border-gray-200/50 dark:border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h3 class="text-xl font-semibold !mt-0 !mb-6 flex items-center">
              <span class="mr-2 text-2xl">🥳</span>
              <span
                class="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
                >开源项目</span
              >
            </h3>
            <div class="space-y-4">
              <a
                v-for="project in projects"
                :key="project.name"
                :href="project.url"
                target="_blank"
                style="text-decoration: none"
                class="group block relative px-5 py-4 rounded-xl hover:-translate-y-1 transition-all duration-500 no-underline text-inherit hover:text-inherit"
              >
                <!-- 背景渐变 -->
                <div
                  class="absolute inset-0 rounded-xl bg-gradient-to-br from-gray-50/60 to-gray-100/60 dark:from-gray-800/40 dark:to-gray-700/40 opacity-100 group-hover:opacity-0 transition-opacity duration-500"
                ></div>
                <div
                  class="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-50/60 to-purple-50/60 dark:from-blue-900/30 dark:to-purple-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                ></div>

                <!-- 内容 -->
                <div class="relative">
                  <div class="flex items-center justify-between mb-2">
                    <h4
                      class="text-base font-semibold truncate group-hover:text-blue-500 transition-colors flex items-center !mt-0"
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
                  <span
                    class="text-sm text-gray-600 dark:text-gray-400 mt-0.5 !mb-0"
                    >{{ project.description }}</span
                  >
                </div>

                <!-- 边框效果 -->
                <div
                  class="absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-200/50 dark:ring-gray-700/50 group-hover:ring-blue-500/50 dark:group-hover:ring-blue-500/50 transition-colors duration-500"
                ></div>
              </a>
            </div>
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

/* 移除之前的背景色覆盖 */
:deep(.bg-white) {
  background-color: transparent !important;
}

:deep(.dark .bg-[#1a1a1a]) {
  background-color: transparent !important;
}

@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }
}

/* 添加全局过渡效果 */
* {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* 优化滚动条 */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(100, 100, 100, 0.2);
  border-radius: 3px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

:deep(.home-page) {
  .VPFooter {
    display: none !important;
  }
}
</style>
