# 资源导航网

<script setup lang="ts">
import Resource from '../.vitepress/theme/views/Resource.vue'
import ResourceSite from '../ResourceSite.json'

const frontendOption = ResourceSite[ResourceSite.findIndex(item => item.name === '文档（前端相关）')]
const backendOption = ResourceSite[ResourceSite.findIndex(item => item.name === '文档（后端相关）')]
const toolOption = ResourceSite[ResourceSite.findIndex(item => item.name === '工具网站')]
const aiOption = ResourceSite[ResourceSite.findIndex(item => item.name === 'AI 应用')]
</script>

## 前端文档

<Resource :options="frontendOption.options" />

## 后端文档

<Resource :options="backendOption.options" />

## 工具网站

<Resource :options="toolOption.options" />

## AI 应用网站

<Resource :options="aiOption.options" />
