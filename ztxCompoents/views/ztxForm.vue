<template>
  <div class="ztxForm">
    <main>
      {{ formData }}
      <van-form @submit="handleSubmitClick">
        <van-cell-group>
          <van-cell title="当事人姓名">
            <van-field
              :rules="[{ required: true, message: '请填写密码' }]"
              v-model="formData.userName"
              placeholder="请输入用户名"
            />
          </van-cell>
          <van-cell title="起始日期">
            <van-field
              v-model="formData.startTime"
              :rules="[{ required: true, message: '请填写密码' }]"
            >
              <template v-slot:input>
                <vantFormDate v-model="formData.startTime"></vantFormDate>
              </template>
            </van-field>
          </van-cell>
          <van-cell title="诉讼类型">
            <!-- <vantFormSelect v-model="formData.litigationType"></vantFormSelect> -->
            <van-radio-group v-model="formData.litigationType">
              <van-radio
                v-for="(v, k) in litigationTypeOptions"
                :name="v.value"
                :key="k"
                >{{ v.label }}</van-radio
              >
            </van-radio-group>
          </van-cell>
        </van-cell-group>
        <div class="footer">
          <van-button block size="small" type="primary" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
      <!-- <van-button block size="small" type="primary" @click="test">
        提交
      </van-button> -->
    </main>
  </div>
</template>
<script lang="ts" setup>
import { ref, Ref } from "vue";
import {
  title,
  rightText,
  pathValue,
  litigationList,
  IlitigationListItem,
  litigationTypeOptions,
} from "../globalData/index";
import vantFormDate from "../../zformcreateVant/components/vantFormDate.vue";
// import vantFormSelect from "../../zformcreateVant/components/vantFormSelect.vue";
import * as moment from "moment";
// import {Solar, Lunar, HolidayUtil} from 'lunar-typescript';
import { HolidayUtil } from "lunar-typescript";
import { useRouter } from "vue-router";
title.value = "计算到期时间";
rightText.value = "查看既往信息";
pathValue.value = "ztxList";

const formData: Ref<IlitigationListItem> = ref({
  userName: "测试姓名",
  startTime: "2022-10-01",
  litigationType: 15,
  endStartTime: "", //诉讼结束的日期
});
const router = useRouter();
function handleSubmitClick() {
  //获取选择的天数
  const { litigationType, startTime } = formData.value;
  //拿到选择时间的时间戳
  const startTimeDate = new Date(startTime).getTime();
  //一天的时间戳
  const oneDayTime = 1000 * 24 * 60 * 60;
  let count = 0;
  for (let index = 0; index < litigationType; index++) {
    const date = new Date(startTimeDate + oneDayTime * index);
    const [year, month, day] = [
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate(),
    ];
    //拿到判断法定节假日的对象(如果有值就是一个对象,如果没值就是null)
    const getHolidayObj = HolidayUtil.getHoliday(year, month, day);
    //判断是不是法定节假日周边
    if (getHolidayObj && !getHolidayObj.isWork()) {
      // oneDayTime * index
      count += 1;
    }
  }
  //赋值给结束时间 并且格式化
  formData.value.endStartTime = moment(
    new Date(startTimeDate + (count + litigationType) * oneDayTime)
  ).format("YYYY-MM-DD");
  //给list赋值
  litigationList.value.push(formData.value);
  //把list丢到 localStorage
  localStorage.removeItem("litigationList");
  localStorage.setItem("litigationList", JSON.stringify(litigationList.value));
  router.push("/ztxHtmlMain/ztxList");
}
</script>
<style lang="scss" scoped>
.ztxForm {
  width: 100%;
  height: 100%;
  main {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid #f5f5f5;
    .footer {
      height: 40px;
      width: 100%;
      padding: 4px 10px;
      box-sizing: border-box;
    }
  }
}
</style>
