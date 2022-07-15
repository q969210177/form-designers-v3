import ztxCompoents from "./ztxHtmlMain.vue";
import { autoCompoents } from "./utils/autoCompoents";
import { IexportDefault } from "./type/globalZtx";
const exportObj: IexportDefault = {
  install(Vue) {
    autoCompoents(Vue);
    Vue.component("ztxCompoents", ztxCompoents);
  },
};
export default exportObj;
