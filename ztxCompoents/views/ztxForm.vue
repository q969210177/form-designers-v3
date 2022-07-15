<template>
  <div class="ztxForm">
    <main>
      {{ formData }}
      <van-form>
        <van-cell-group>
          <van-cell title="当事人姓名">
            <van-field v-model="formData.userName" placeholder="请输入用户名" />
          </van-cell>
          <van-cell title="起始日期">
            <vantFormDate v-model="formData.startTime"></vantFormDate>
          </van-cell>
          <van-cell title="诉讼类型"></van-cell> </van-cell-group
      ></van-form>
    </main>
    <footer class="footer">
      <van-button type="primary" size="small" :block="true">确定</van-button>
    </footer>
  </div>
</template>
<script lang="ts" setup>
import { ref, Ref } from "vue";
import { title, rightText, pathValue } from "../globalData/index";
import vantFormDate from "../../zformcreateVant/components/vantFormDate.vue";
// import {Solar, Lunar, HolidayUtil} from 'lunar-typescript';
import { HolidayUtil } from "lunar-typescript";
interface IformData {
  userName: string;
  startTime: string;
  litigationType: string;
}

title.value = "计算到期时间";
rightText.value = "查看既往信息";
pathValue.value = "ztxList";
const formData: Ref<IformData> = ref({
  userName: "",
  startTime: "",
  litigationType: "",
});
const date = new Date();
console.log(date.getMonth(), "date.getMonth()");
const month = date.getMonth() + 1;
console.log(month, "month");
const aa = HolidayUtil.getHoliday(2022, 7, 15);
console.log(aa, "aa");

// var d = HolidayUtil.getHoliday(date.getFullYear(), month, date.getDay());
if (aa?.getDay) {
  console.log("日期：" + aa.getDay());
}
// console.log("日期：" + d.getDay());
// console.log("是否调休：" + d.isWork());
// console.log("假期名称：" + d.getName());
// console.log("关联节日：" + d.getTarget());
</script>
<style lang="scss" scoped>
.ztxForm {
  width: 100%;
  height: 100%;
  main {
    height: calc(100% - 40px);
    width: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid #f5f5f5;
  }
  .footer {
    height: 40px;
    width: 100%;
    padding: 4px 10px;
    box-sizing: border-box;
  }
}
</style>
