<template>
  <div class="resume-world" @click="test">
    {{ bbb }}
    <!-- <div class="main">
      <h1>111</h1>
      {{ count }}
    </div> -->
  </div>
</template>
<script lang="ts" setup>
import { ref, defineProps, defineEmits } from "vue";
interface Iemit {
  (e: "test", v: string): void;
}
const emit = defineEmits<Iemit>();
const aaa = defineProps<{ value: { a: boolean } }>();
const bbb = ref({ ...aaa.value });
// bbb.value.a = !bbb.value.a;
function test() {
  console.log(11);

  bbb.value.a = !bbb.value.a;
  emit("test", "111");
}
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
