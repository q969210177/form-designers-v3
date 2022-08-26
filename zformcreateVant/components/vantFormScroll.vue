<template>
  <div class="vantFormScroll">
    <div class="wrap" ref="wrap">
      <div
        class="wrap_scroll"
        ref="wrapScroll"
        @scroll="setScrollValue(handleScroll, $event)"
      >
        <div
          class="wrap_scroll"
          :style="{
            height: `${itemHeight}px`,
          }"
          v-for="(v, k) in showOptions"
          :key="k"
        >
          {{ v }}{{ scorllTop }}{{ status }}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, defineProps, withDefaults, reactive, Ref, onMounted } from "vue";
import { debounce } from "../../src/utils/utils";
interface Iprops {
  options: any[];
  pageLength?: number;
  itemHeight?: number;
}
//声明 props
const props = withDefaults(defineProps<Iprops>(), {
  pageLength: 40,
  itemHeight: 40,
});

//拿到展示可视区域的高度
const wrap: Ref<HTMLDivElement | null> = ref(null);
//拿到滚动区域的高度
const wrapScroll: Ref<HTMLDivElement | null> = ref(null);
//展示区域的options
const showOptions: Ref<any[]> = ref([]);
const status = ref(false);
const scorllTop = ref(0);
//计算 滚动区域的样式
// const scrollDomStyle = reactive({
//   "overflow-y": "auto",
// });

//计算滚动区域的展示数据
function setShowOptions() {
  showOptions.value = props.options.filter((v, k) => {
    return k < props.pageLength;
  });
}
//滚动事件
function handleScroll($event: Event) {
  // if (status.value) {
  //   status.value = false;
  // }
  // time = setTimeout(() => {
  //   if (status.value) {
  //     console.log(1111, "111");
  //     return;
  //   }
  //   status.value = true;
  // }, 1000);
  // if (wrapScroll.value?.scrollTop) {
  //   scorllTop.value = wrapScroll.value.scrollTop;
  // }
  // const aa = throttle(setScrollValue, 1000, true);
  // console.dir(wrapScroll.value, "wrapScroll");
  // console.dir(aa(), "wrapScroll");
}
//比对是向上滚动还是向下滚动
function setScrollValue(func, $event?: Event) {
  let prevTime = 0;
  return ($event) => {
    const nowTime = Date.now();
    if (nowTime - prevTime >= 1000) {
      func.apply(this, $event);
      prevTime = nowTime;
    }
  };
}
setShowOptions();
onMounted(() => {
  wrapScroll.value?.addEventListener(
    "scroll",
    setScrollValue(handleScroll, event)
  );
});
</script>
<style lang="scss" scoped>
.vantFormScroll {
  width: 100%;
  height: 100%;
  .wrap {
    width: 100%;
    height: 100%;
    border: 1px solid red;
    .wrap_scroll {
      height: 100%;
      border: 1px solid blue;
      overflow-y: auto;
      //   .wrap_scroll {
      //     height: 40px;
      //   }
    }
  }
}
</style>
