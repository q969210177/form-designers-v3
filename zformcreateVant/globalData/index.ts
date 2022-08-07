// import type { DefineComponent, VNodeTypes } from "vue";

import vantFormDate from "../components/vantFormDate.vue";
import vantFormSelect from "../components/vantFormSelect.vue";
// import { DefineComponent } from "vue";

export interface IcomponentsDataObj {
  date: string | any; //暂时不知道 组件类型怎么写 明天去公司查一下
  [x: string]: any;
}
export const componentsDataObj: IcomponentsDataObj = {
  date: vantFormDate,
  select: vantFormSelect,
};
