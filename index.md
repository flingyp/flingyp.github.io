---
layout: home
title: Home
titleTemplate: flingyp

hero:
  name: flingyp
  tagline: Living without an aim is like sailing without a compass.

  image:
    src: /docs-logo.png
    alt: Vitest
  actions:
    - theme: brand
      text: Start now
      link: /frontend/HTML5/RandomRecord
    - theme: alt
      text: flingyp.me
      link: https://flingyp.netlify.app/

features:
  - title: Vue
    details: 讨饭的东西，得要
    icon: 🏠
  - title: VitePress
    details: 很好看，很好用
    icon: 🪒
  - title: TypeScript
    details: 很高级，很高效
    icon: ⚒️
  - title: 日积月累
    details: 梦由自己来创造，路由自己来走好
    icon: ⏺️
  - title: 持续记录
    details: 活到老，学到老，码到老
    icon: 🚀
  - title: 积极向上
    details: 保持好奇心，持续探索
    icon: ⚡
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/57666140?v=4',
    name: 'flingyp',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/flingyp' },
    ]
  },
]
</script>

<div style="margin-top: 128px">
  <VPTeamMembers size="small" :members="members" />
</div>
