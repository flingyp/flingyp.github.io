<template>
  <div class="site-container">
    <label class="page-title-box">在线资源</label>
    <div class="website-list-container">
      <div class="website-item" v-for="item in websiteList" :key="item.href">
        <img :src="item.logo" alt="" srcset="" />
        <span>{{ item.description }}</span>
        <a :href="item.href" target="__blank">{{ item.title }}</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import treasureWebsite from "../../TreasureWebsite.json";

export interface WebSiteInfo {
  title: string;
  href: string;
  logo: string;
  description: string;
}

const websiteList = ref<WebSiteInfo[]>(treasureWebsite);
</script>

<style scoped>
.site-container {
  height: calc(100vh - 113px - 73px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}

.page-title-box {
  display: inline-block;
  width: 100%;
  height: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 26px;
  color: var(--vp-c-brand);
  text-shadow: 0px 0px 40px var(--vp-c-brand);
  position: absolute;
  top: 4%;
}

.website-list-container {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 90%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 10px;
  overflow-y: scroll;
  padding: 20px 30px;
}

.website-item {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
}

.website-item > img {
  width: 50px;
  height: 50px;
  text-align: center;
}
.website-item > span {
  margin: 15px 0 10px 0;
  font-size: 14px;
}
.website-item > a {
  font-size: 16px;
  color: var(--vp-c-brand);
}

::-webkit-scrollbar,
::-webkit-scrollbar-thumb {
  width: 8px;
  border-radius: 6px;
}
::-webkit-scrollbar-thumb {
  background: var(--vp-c-brand);
}
</style>
