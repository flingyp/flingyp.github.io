<template>
  <div class="site-container">
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

.website-list-container {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 90%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 10px;
  overflow-y: scroll;
  padding: 10px 40px;
  margin-bottom: 20px;
  border-radius: 20px;
  box-shadow: 0 0 2px var(--vp-c-brand);
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

.website-list-container::-webkit-scrollbar,
.website-list-container::-webkit-scrollbar-thumb {
  width: 0px;
}

@media screen and (min-width: 1280px) {
  .website-list-container {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media screen and (min-width: 1024px) and (max-width: 1280px) {
  .website-list-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .website-list-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
