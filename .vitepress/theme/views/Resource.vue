<script setup lang="ts">
import { NTooltip } from 'naive-ui';

interface ResourceProps {
  options: Record<string, any>[];
}
const props = defineProps<ResourceProps>();
</script>

<template>
  <ul class="site-list">
    <li v-for="item in props.options" :key="item.name" class="site-item">
      <div class="info">
        <div class="icon">
          <img :src="item.icon" :alt="item.name" />
        </div>
        <a :href="item.url" target="_blank" class="name">{{ item.name }}</a>
      </div>
      <NTooltip placement="bottom" style="font-size: 12px; max-width: 400px">
        <template #trigger>
          <p class="description">{{ item.description }}</p>
        </template>
        <span>{{ item.description }}</span>
      </NTooltip>
    </li>
  </ul>
</template>

<style scoped lang="scss">
ul {
  padding-left: 0;
}

ul li {
  list-style: none;
  margin-top: 0;
}

a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

.site-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px 10px;
}

.site-item {
  height: 90px;
  padding: 14px 12px 6px;
  background: var(--vp-c-default-3);
  border-radius: 4px;
  transition: transform 0.2s linear;

  .info {
    display: flex;
    align-items: center;

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 32px;
      min-height: 32px;
      border-radius: 4px;
      background: var(--vp-c-default-1);

      img {
        width: 20px;
        height: 20px;
      }
    }

    .name {
      margin-left: 12px;
      font-family: 'PuHui_Bold';
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .description {
    font-size: 12px;
    line-height: 16px;
    margin: 8px 0 0 0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
