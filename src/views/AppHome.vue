<template>
  <div class="AppHome">
    <!-- <vantFormScroll :options="testOptions"></vantFormScroll> -->
    <!-- <vantFormList :count="testOptions.length" v-model="pageNo">
      <van-cell-group>
        <van-cell
          :title="v.c"
          v-for="(v, k) in testOptions"
          :key="k"
          :value="v.a"
        />
      </van-cell-group>
    </vantFormList> -->

    <!-- <resumeWorld :value="aaaa" @test="test"></resumeWorld> -->
    <!-- <zformcreateVant :rule="testRule"></zformcreateVant> -->
    <ztxHomeVue :compoent="resumeWorld"></ztxHomeVue>
  </div>
</template>
<script lang="ts" setup>
import resumeWorld from "@/views/appViews/resume-world.vue";
import ztxHomeVue from "./ztxHome.vue";
</script>
<style lang="scss" scoped>
.AppHome {
  width: 100%;
  height: 100%;
}
</style>
