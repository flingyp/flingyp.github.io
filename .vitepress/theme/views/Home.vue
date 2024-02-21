<script setup lang="ts">
import IconPencil from '../components/Icons/Pencil.vue';
</script>

<template>
  <div class="w-full h-[calc(100vh-64px-61px)] flex justify-center items-center">
    <div
      class="text-sm w-[94%] md:w-[60%] lg:w-[50%] border border-[#d0d7de] dark:border-[#30363d] p-6 mx-auto rounded"
    >
      <div class="w-full flex flex-col justify-center items-center mb-12">
        <img class="w-24 h-24 rounded-full" src="/public/profile.png" />

        <p class="mt-4">Living without an aim is like sailing without a compass.</p>
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

      <h3 class="mb-4">👋 Hi, I'm FlyPeng</h3>

      <ul class="space-y-[3.5px]">
        <li>
          👨‍💻 All of my projects are available at
          <strong><a href="https://github.com/flingyp">https://github.com/flingyp</a></strong>
        </li>
        <li>
          📝 I regularly write articles on
          <strong><a href="https://yyblog.top" rel="nofollow">https://yyblog.top</a></strong>
        </li>
        <li>
          📫 How to reach me <strong><a href="mailto:flingyp@163.com">flingyp@163.com</a></strong>
        </li>
      </ul>

      <h3 class="mt-6 mb-4">🛠️ Tech Stack</h3>

      <div class="flex items-center space-x-2">
        <code><img height="20" src="https://api.iconify.design/skill-icons:vuejs-dark.svg" /></code>&nbsp;
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
