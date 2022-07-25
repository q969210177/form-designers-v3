import { VNode } from "vue";
import { IexportDefault } from "./type/globalZformcreateVant";
import zformcreateVant from "./zformcreateVant";
const exportObj: IexportDefault = {
  zVue: null,
  install(Vue) {
    this.zVue = Vue;
    Vue.component("zformcreateVant", zformcreateVant);
  },
  component(Vnode: VNode, name: string) {
    if (this.zVue) {
      this.zVue.component(name, Vnode);
    }
  },
};
export default exportObj;
