<template>
  <div class="AppHome">
    <vantFormList :options="testOptions"></vantFormList>
    <!-- <zformcreateVant :rule="testRule"></zformcreateVant> -->
  </div>
</template>
<script lang="ts" setup>
import { ref, Ref } from "vue";
import { IruleItem } from "../../zformcreateVant/type/globalZformcreateVant"; //"zformcreateVant/type/globalZformcreateVant"
import vantFormList from "../../zformcreateVant/components/vantFormList.vue";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const testOptions: Ref<any[]> = ref([
  // { a: 1, b: 2, c: 13 },
  // { a: 1, b: 2, c: 23 },
  // { a: 1, b: 2, c: 33 },
  // { a: 1, b: 2, c: 43 },
  // { a: 1, b: 2, c: 53 },
  // { a: 1, b: 2, c: 63 },
]);
for (let index = 0; index < 100; index++) {
  testOptions.value.push({ a: 1, b: 2, c: 13 + index });
}
const testRule: Ref<IruleItem[]> = ref([
  {
    type: "date",
    fileId: "aaa",
    value: "",
    label: "1111",
    rule: [{ required: true, message: "请填写用户名" }],
    props: {},
  },
  {
    type: "select",
    fileId: "aadddda",
    value: "",
    label: "3333",
    props: {},
    rule: [{ required: true, message: "请填写用户名" }],
    isComponents: true,
    options: [
      {
        label: 111,
        value: "111",
      },
    ],
    // on: {
    //   openPopup: () => {
    //     console.log(111, "");
    //   },
    // },
  },
]);
</script>
<style lang="scss" scoped>
.AppHome {
  width: 100%;
  height: 100%;
}
</style>
