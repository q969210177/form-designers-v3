<template>
  <div class="vantFormSelect">{{ modelValue }}111</div>
</template>
<script lang="ts" setup>
import {
  ref,
  defineProps,
  Ref,
  defineEmits,
  withDefaults,
  watchEffect,
  useAttrs,
} from "vue";
interface Iprops {
  modelValue: any;
}
interface Iemit {
  (e: "update:modelValue", v: string): void;
}
//拿到attrs
const attr = useAttrs();
//声明emit
const emit = defineEmits<Iemit>();
//拿到props
const prop = withDefaults(defineProps<Iprops>(), {});
</script>
<style lang="scss" scoped>
.vantFormSelect {
  width: 100%;
  height: 100%;
}
</style>
