<template>
  <div class="AppHome">
    <resumeWorld />
    <!-- <zformcreateVant :rule="testRule"></zformcreateVant> -->
  </div>
</template>
<script lang="ts" setup>
import { ref, Ref } from "vue";
import { IruleItem } from "../../zformcreateVant/type/globalZformcreateVant"; //"zformcreateVant/type/globalZformcreateVant"
import resumeWorld from "./appViews/resume-world.vue";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
