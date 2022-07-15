<template>
  <div class="ztxHtmlMain">
    <router-view v-slot="{ Component }">
      <div class="nav">
        <van-config-provider>
          <van-nav-bar
            left-text="返回"
            left-arrow
            :right-text="rightText"
            @click-right="handleClickRight"
          >
            <template #title>{{ title }}</template>
          </van-nav-bar>
        </van-config-provider>
      </div>
      <div class="body">
        <component :is="Component"></component>
      </div>
    </router-view>
  </div>
</template>
<script lang="ts" setup>
import { title, rightText, pathValue } from "./globalData/index";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
function handleClickRight() {
  router.push(pathValue.value);
}
</script>
<style lang="scss" scoped>
.ztxHtmlMain {
  width: 100%;
  height: 100%;
  width: 100%;
  height: 100%;
  .nav {
    width: 100%;
    height: 46px;
  }
  .body {
    width: 100%;
    height: calc(100% - 46px);
  }
}
</style>
