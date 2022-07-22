<template>
  <div class="resume-world">
    <!-- <div class="main">
      <h1>111</h1>
      {{ count }}
    </div> -->
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const count = ref(0);
</script>
<style lang="scss" scoped>
@import "~@/assets/layout.scss";

.resume-world {
  width: 100%;
  height: 100%;
  @include flex-row-c-c;
  .main {
    width: 80%;
    height: 100%;
  }
}
</style>
