<template>
  <div class="vantFormSelect">
    <div @click="handleOpenPopup">{{ showValue }}</div>
    <van-popup
      v-model:show="showPicker"
      position="bottom"
      :style="{
        height: `${height}%`,
      }"
    >
      <div class="popup_main">
        <div class="popup_header">
          <form action="/">
            <van-search
              v-model="searchModel"
              show-action
              @search="handleSerach"
              placeholder="请输入搜索关键词"
            >
              <template #action>
                <div>
                  <span>搜索</span>
                </div>
              </template>
            </van-search>
          </form>
        </div>
        <div class="popup_body">
          <van-radio-group v-model="radioModel">
            <van-cell-group inset>
              <van-cell
                v-for="v in listOptions"
                :key="v[valueKey]"
                :title="v[labelKey]"
                clickable
              >
                <template #right-icon>
                  <van-radio
                    @click="($e) => handleCellClick(v, $e)"
                    :name="v[valueKey]"
                  />
                </template>
              </van-cell>
            </van-cell-group>
          </van-radio-group>
        </div>
      </div>
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
  toRef,
} from "vue";
import { handleSerachArr } from "../../src/utils/utils";
type Ioptions = {
  label: any;
  value: any;
}; //Record<"label" | "value" | string, any>;
interface Iprops {
  modelValue: any;
  options: Ioptions[];
  labelKey?: keyof Ioptions;
  valueKey?: keyof Ioptions;
  height?: number;
  type?: "";
}
interface Iemit {
  (e: "update:modelValue", v: string): void;
  (e: "openPopup"): void;
  (e: "handleCellClick", v: Ioptions, $e: MouseEvent): void;
}
//拿到attrs
const attr = useAttrs();
//声明emit
const emit = defineEmits<Iemit>();
//拿到props
const props = withDefaults(defineProps<Iprops>(), {
  labelKey: "label",
  valueKey: "value",
  height: 30,
});
// 渲染用的options
// const listOptions = toRef(props, "options");
const listOptions = ref(props.options);
//check绑定的默认值
const radioModel: Ref<Iprops["modelValue"]> = ref("");
//控制选择list的开关
const showPicker: Ref<boolean> = ref(false);
//默认展示的的文字
const showValue: Ref<string> = ref("请选择");
//搜索框的v-model
const searchModel: Ref<string> = ref("");
//打开弹窗的事件
function handleOpenPopup() {
  showPicker.value = true;
  emit("openPopup");
}
// 搜索确认事件
function handleSerach(v: any) {
  if (v) {
    listOptions.value = handleSerachArr<{ label: string; value: any }, "label">(
      props.options,
      v,
      props.labelKey
    );
    return;
  }
  listOptions.value = props.options;
}
// cell的确认事件
function handleCellClick(v: Ioptions, $e: MouseEvent) {
  emit("update:modelValue", v[props.valueKey]);
  emit("handleCellClick", v, $e);
}
</script>
<style lang="scss" scoped>
// src/assets/layout.scss
@import "~@/assets/layout.scss";
.vantFormSelect {
  width: 100%;
  height: 100%;
  .popup_main {
    width: 100%;
    height: 100%;
    .popup_header {
      width: 100%;
    }
    .popup_body {
      overflow-y: auto;
      height: calc(100% - 40px);
      border: 1px solid red;
    }
  }
}
</style>
