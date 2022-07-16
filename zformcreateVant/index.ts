import { IexportDefault } from "./type/globalZformcreateVant";
import zformcreateVant from "./zformcreateVant";
const exportObj: IexportDefault = {
  install(Vue) {
    Vue.component("zformcreateVant", zformcreateVant);
  },
};
export default exportObj;
