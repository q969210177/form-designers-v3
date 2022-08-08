<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<template>
  <!--    -->
  <div
    ref="divRef"
    class="vantFormList"
    @touchstart="getStart"
    @touchend="getEnd"
    @scroll="handleSwipeUp($event)"
  >
    {{ pageNo }}
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
// eslint-disable @typescript-eslint/no-unused-vars
import { ref, defineProps, Ref, defineEmits, withDefaults } from "vue";
import { Toast } from "vant";
interface Iprops {
  count: number;
  modelValue: number;
  isLodaing?: boolean;
  pageSize?: number;
}
interface Iemit {
  (e: "pullUp"): void;
  (e: "pullDown"): void;
  (e: "update:modelValue", v: number): void;
}
const divRef: Ref<HTMLDivElement | null> = ref(null);
const emit = defineEmits<Iemit>();
const position: Ref<{ x: number; y: number }> = ref({
  x: 0,
  y: 0,
});
const props = withDefaults(defineProps<Iprops>(), {
  isLodaing: true,
  pageSize: 20,
});
const pageNo: Ref<number> = ref(1);
// const { options } = toRefs(props);
// const upTitle = ref("上拉加载中");
function handleSwipeUp(params: any) {
  //   console.log(params, "params");
}

//touch开始事件
function getStart(TouchEvent: TouchEvent) {
  const { touches } = TouchEvent;
  const { screenY } = touches[0];
  position.value = {
    x: screenX,
    y: screenY,
  };
}
//touch结束事件
function getEnd(TouchEvent: TouchEvent) {
  const { changedTouches } = TouchEvent;
  const { screenY } = changedTouches[0];
  if (divRef.value) {
    const { scrollTop } = divRef.value;
    //判断是上拉还是下拉
    if (screenY > position.value.y && scrollTop === 0 && pageNo.value > 1) {
      pageNo.value--;
      returnFunc();
      emit("pullUp");
      return;
    }
    if (
      screenY < position.value.y &&
      scrollTop > 300 &&
      pageNo.value < Math.round(props.count / props.pageSize)
    ) {
      pageNo.value++;
      returnFunc();
      emit("pullDown");
      return;
    }
  }
}
function returnFunc() {
  if (props.isLodaing) {
    Toast.loading({
      message: "加载中...",
      forbidClick: true,
      loadingType: "spinner",
      duration: 3000,
      overlay: true,
    });
  }
  emit("update:modelValue", pageNo.value);
}
</script>
<style lang="scss" scoped>
.vantFormList {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
</style>
