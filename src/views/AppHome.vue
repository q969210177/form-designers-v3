<template>
  <div class="AppHome">
    <zformcreateVant :rule="testRule"></zformcreateVant>
  </div>
</template>
<script lang="ts" setup>
import { ref, Ref } from "vue";
import { IruleItem } from "../../zformcreateVant/type/globalZformcreateVant"; //"zformcreateVant/type/globalZformcreateVant"
const testRule: Ref<IruleItem[]> = ref([
  {
    type: "date",
    fileId: "aaa",
    value: "",
    label: "1111",
    props: {},
    rule: [{ required: true, message: "请填写用户名" }],
  },
  {
    type: "select",
    fileId: "aadddda",
    value: "",
    label: "3333",
    props: {},
    rule: [{ required: true, message: "请填写用户名" }],
  },
]);
</script>
<style lang="scss" scoped>
.AppHome {
  width: 100%;
  height: 100%;
}
</style>
