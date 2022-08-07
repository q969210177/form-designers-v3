<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<template>
  <div
    class="vantFormList"
    @touchstart="getStart"
    @touchend="getEnd"
    @scroll="handleSwipeUp($event)"
  >
    <div></div>
    <div v-for="(v, k) in options" :key="k">
      {{ position }}
      {{ v }}
    </div>
  </div>
</template>
<script lang="ts" setup>
// eslint-disable @typescript-eslint/no-unused-vars
import { ref, defineProps, toRefs, Ref } from "vue";
interface Iprops {
  options: any[];
}
const position: Ref<{ x: number; y: number }> = ref({
  x: 0,
  y: 0,
});
const props = defineProps<Iprops>();
const { options } = toRefs(props);
const upTitle = ref("上拉加载中");
function handleSwipeUp(params: any) {
  //   console.log(params, "params");
}
//划入开始事件
function getStart(TouchEvent: TouchEvent) {
  const { touches } = TouchEvent;
  const { screenY } = touches[0];

  position.value = {
    x: screenX,
    y: screenY,
  };
}

function getEnd(TouchEvent: TouchEvent) {
  const { changedTouches } = TouchEvent;
  const { screenY } = changedTouches[0];
  console.log(screenY, position.value.y, "screenY < position.value.y");

  if (screenY > position.value.y) {
    console.log(111);
    return;
  }
  if (screenY < position.value.y) {
    console.log(222);
    return;
  }
}
</script>
<style lang="scss" scoped>
.vantFormList {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
</style>
