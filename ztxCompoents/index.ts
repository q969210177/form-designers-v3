import "lib-flexible";
import ztxCompoents from "../ztxCompoents/ztxCompoents.vue";
import { IexportDefault } from "./type/globalZtx";
const exportObj: IexportDefault = {
  install(Vue) {
    //
    console.log(Vue, "Vue");
    Vue.component("ztxCompoents", ztxCompoents);
  },
};
export default exportObj;
