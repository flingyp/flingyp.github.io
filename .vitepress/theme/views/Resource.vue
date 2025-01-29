<script setup lang="ts">
import { NCard, NTooltip, NImage } from 'naive-ui';

interface ResourceProps {
  options: Record<string, any>[];
}
const props = defineProps<ResourceProps>();
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <NCard
        v-for="item in props.options"
        :key="item.name"
        class="group relative transition-all duration-500 hover:-translate-y-1"
        :bordered="false"
        :class="[
          'bg-white/80 dark:bg-[#1a1a1a]/80',
          'backdrop-blur-xl',
          'border border-gray-200/50 dark:border-gray-800/50',
          'hover:shadow-lg hover:shadow-gray-200/20 dark:hover:shadow-gray-800/20',
        ]"
      >
        <div class="relative flex items-start space-x-4">
          <!-- 图标容器 -->
          <div
            class="relative flex-shrink-0 rounded-lg p-3 bg-gradient-to-br from-gray-50/90 to-gray-100/90 dark:from-gray-800/90 dark:to-gray-700/90 group-hover:from-blue-50/90 group-hover:to-purple-50/90 dark:group-hover:from-blue-900/20 dark:group-hover:to-purple-900/20 transition-all duration-500"
          >
            <NImage
              :src="item.icon"
              :alt="item.name"
              class="w-8 h-8 object-contain transition-transform duration-500 group-hover:scale-110"
              preview-disabled
            />
          </div>

          <!-- 内容区域 -->
          <div class="flex-1 min-w-0 py-0.5">
            <div class="flex items-center justify-between mb-2">
              <a
                :href="item.url"
                target="_blank"
                class="text-[15px] font-medium truncate transition-colors duration-300 no-underline flex items-center text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400"
              >
                {{ item.name }}
                <div
                  class="flex items-center ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                >
                  <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </a>
            </div>

            <NTooltip placement="bottom" trigger="hover">
              <template #trigger>
                <p
                  class="text-sm leading-relaxed text-gray-500 dark:text-gray-400 line-clamp-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300"
                >
                  {{ item.description }}
                </p>
              </template>
              {{ item.description }}
            </NTooltip>
          </div>
        </div>
      </NCard>
    </div>
  </div>
</template>

<style scoped>
:deep(.n-card) {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 0.75rem;
}

:deep(.n-card-header) {
  padding: 0;
}

:deep(.n-card__content) {
  padding: 1.5rem;
}

:deep(.n-card__content),
:deep(.n-card) {
  background-color: transparent;
}

:deep(.n-tooltip) {
  max-width: 300px;
  padding: 8px 12px;
  font-size: 0.875rem;
  line-height: 1.5;
}
</style>
