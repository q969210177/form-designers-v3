<template>
  <div class="AppHome">
    <!-- <vantFormScroll :options="testOptions"></vantFormScroll> -->
    <!-- <vantFormList :count="testOptions.length" v-model="pageNo">
      <van-cell-group>
        <van-cell
          :title="v.c"
          v-for="(v, k) in testOptions"
          :key="k"
          :value="v.a"
        />
      </van-cell-group>
    </vantFormList> -->
    <zformcreateVant :rule="testRule"></zformcreateVant>
  </div>
</template>
<script lang="ts" setup>
import { ref, Ref } from "vue";
import { IruleItem } from "../../zformcreateVant/type/globalZformcreateVant"; //"zformcreateVant/type/globalZformcreateVant"
const options = [];
for (let index = 0; index < 100; index++) {
  options.push({
    label: `第${index + 1}个`,
    value: index,
    ccc: index,
  });
}
const testRule: Ref<IruleItem[]> = ref([
  {
    type: "date",
    fileId: "aaa",
    value: "",
    label: "1111",
    rule: [{ required: true, message: "请填写用户名" }],
    props: {
      title: "请选择放行时间",
    },
  },
  {
    type: "select",
    fileId: "aadddda",
    value: "",
    label: "3333",
    props: {
      height: 70,
    },
    rule: [{ required: true, message: "请填写用户名" }],
    // isComponents: true,
    options: options,
  },
  {
    type: "input",
    fileId: "cccc",
    value: "",
    label: "222",
  },
]);
</script>
<style lang="scss" scoped>
.AppHome {
  width: 100%;
  height: 100%;
}
</style>
