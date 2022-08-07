<template>
  <div class="vantFormSelect">
    <div @click="handleOpenPopup">{{ showValue }}</div>
    <van-popup v-model:show="showPicker" position="bottom">
      {{ options }}
      <!-- <van-datetime-picker
        v-bind="attr"
        :title="title"
        v-model="datePickModel"
        :type="type"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      /> -->
    </van-popup>
  </div>
</template>
<script lang="ts" setup>
import {
  ref,
  defineProps,
  Ref,
  defineEmits,
  withDefaults,
  useAttrs,
} from "vue";
interface Iprops {
  modelValue: any;
  options: any[];
}
interface Iemit {
  (e: "update:modelValue", v: string): void;
  (e: "openPopup"): void;
}
//拿到attrs
const attr = useAttrs();
//声明emit
const emit = defineEmits<Iemit>();
//拿到props
const prop = withDefaults(defineProps<Iprops>(), {});
//控制选择list的开关
const showPicker: Ref<boolean> = ref(false);
//默认展示的的文字
const showValue: Ref<string> = ref("请选择");
//打开弹窗的事件
function handleOpenPopup() {
  showPicker.value = true;
  emit("openPopup");
}
</script>
<style lang="scss" scoped>
.vantFormSelect {
  width: 100%;
  height: 100%;
}
</style>
