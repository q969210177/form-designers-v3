<template>
  <div class="ztxList">
    <header class="header">
      <div class="header_item">当事人</div>
      <div class="header_item">诉讼类型</div>
      <div class="width-30">到期时间</div>
    </header>
    <main class="main">
      <div class="main_item" v-for="(v, k) in litigationList" :key="k">
        <div class="width-30">{{ v.userName }}</div>
        <div class="width-30">
          {{ handleReturnLitigationType(v.litigationType) }}
        </div>
        <div class="width-30">
          <div>{{ v.endStartTime }}</div>
        </div>
      </div>
    </main>
  </div>
</template>
<script lang="ts" setup>
import {
  title,
  rightText,
  pathValue,
  litigationList,
  setLitigationList,
  litigationTypeOptions,
  IlitigationTypeOptionsItem,
} from "../globalData/index";
import { handleSerachSomeOne } from "../../src/utils/utils";
title.value = "列表";
rightText.value = "去新增";
pathValue.value = "ztxForm";
setLitigationList();
function handleReturnLitigationType(litigationType: number) {
  return handleSerachSomeOne<
    IlitigationTypeOptionsItem,
    IlitigationTypeOptionsItem["value"]
  >(litigationTypeOptions.value, litigationType, "value", "label");
}
</script>
<style lang="scss" scoped>
@import "~@/assets/layout.scss";
.ztxList {
  width: 100%;
  height: 100%;
  .header {
    width: 100%;
    height: 40px;
    text-align: center;
    border-bottom: 1px solid #f5f5f5;
    @include flex-row-sa-c();
    .header_item {
      width: 30%;
      height: 100%;
      @include flex-row-c-c();
      position: relative;
      &::after {
        content: "";
        position: absolute;
        height: 10px;
        top: 15px;
        right: 0;
        width: 1px;
        background: #515ff1;
      }
    }
  }
  .main {
    width: 100%;
    height: calc(100% - 40px);
    .main_item {
      width: 100%;
      height: 40px;
      text-align: center;

      @include flex-row-sa-c();
    }
  }
}
</style>
