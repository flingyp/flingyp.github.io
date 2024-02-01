# 资源导航网

<script setup lang="ts">
import Resource from '../.vitepress/theme/views/Resource.vue'
import ResourceSite from '../ResourceSite.json'

const vueOption = ResourceSite[ResourceSite.findIndex(item => item.name === 'Vue')]
const reactOption = ResourceSite[ResourceSite.findIndex(item => item.name === 'React')]
</script>

## Vue

<Resource :options="vueOption.options" />

## React

<Resource :options="reactOption.options" />
