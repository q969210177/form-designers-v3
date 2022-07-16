<template>
  <div class="vantFormDate">
    <div @click="showPicker = true">{{ showValue }}</div>
    <van-popup v-model:show="showPicker" position="bottom">
      <van-datetime-picker
        v-bind="attr"
        :title="title"
        v-model="datePickModel"
        :type="type"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>
  </div>
</template>
<script lang="ts" setup>
import * as moment from "moment";
import {
  ref,
  defineProps,
  Ref,
  defineEmits,
  withDefaults,
  watchEffect,
  useAttrs,
} from "vue";
type IdateType = keyof ItypeFormatObj;
interface ItypeFormatObj {
  date: string;
  "year-month": string;
  "month-day": string;
  datetime: string;
  datehour: string;
}
interface Iprops {
  modelValue: string;
  type?: IdateType;
  format?: string;
  title?: string;
}
interface Iemit {
  (e: "update:modelValue", v: string): void;
}
//正文开始
//拿到props
const prop = withDefaults(defineProps<Iprops>(), {
  type: "date",
  format: "",
  title: "请选择时间",
});
//拿到attrs
const attr = useAttrs();
//声明emit
const emit = defineEmits<Iemit>();
//控制时间选择器的开关
const showPicker: Ref<boolean> = ref(false);
//div显示的文字
const showValue: Ref<string> = ref("请选择时间");
//获取当前年份
//时间选择器的 v-model
const datePickModel: Ref<Date> = ref(new Date());
//根据type选择 format
function returnFormatString() {
  if (prop.format) {
    return prop.format;
  }
  const typeFormatObj: ItypeFormatObj = {
    date: "YYYY-MM-DD",
    "year-month": "YYYY-MM",
    "month-day": "MM-DD",
    datetime: "YYYY-MM-DD HH:mm",
    datehour: "YYYY-MM-DD",
  };
  return typeFormatObj[prop.type];
}
//确认选择时间
function onConfirm(v: Date) {
  emit("update:modelValue", moment(v).format(returnFormatString()));
  showPicker.value = false;
}
//监听v-model来控制值显示
watchEffect(() => {
  const status: boolean = moment(new Date(prop.modelValue)).isValid();
  if (status) {
    showValue.value = prop.modelValue;
    datePickModel.value = new Date(prop.modelValue);
  } else {
    showValue.value = "请选择时间";
  }
});
</script>
<style lang="scss" scoped>
.vantFormDate {
  width: 100%;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  // height: 100%;
}
</style>
