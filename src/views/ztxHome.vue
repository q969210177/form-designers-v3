<template>
  <div class="ztxHome">
    <!-- <router-view /> -->
  </div>
</template>
<script lang="ts" setup>
import { ref, defineProps } from "vue";
interface Iprops {
  compoent: any;
}
const props = defineProps<Iprops>();
</script>
<style lang="scss" scoped>
@import "~@/assets/layout.scss";
.ztxHome {
  width: 100%;
  height: 100%;
}
</style>
