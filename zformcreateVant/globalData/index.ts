import { ref, Ref } from "vue";
//诉述页面的title
export const title: Ref<string> = ref("");
//右边按钮点击的文字
export const rightText: Ref<string> = ref("");
//右边按钮点击的path 后面看要不要换成回调函数的形式
export const pathValue: Ref<string> = ref("");
//诉讼list的类型
export interface IlitigationListItem {
  userName: string;
  startTime: string;
  litigationType: number;
  endStartTime: string;
}
//诉讼list(如果本地缓存有值就从本地缓存里面读值)
export const litigationList: Ref<IlitigationListItem[]> = ref([]);
//取值的方法
export function setLitigationList() {
  const localStorageLitigationList = localStorage.getItem("litigationList");
  if (localStorageLitigationList) {
    litigationList.value = JSON.parse(
      localStorageLitigationList
    ) as IlitigationListItem[];
  }
}
export interface IlitigationTypeOptionsItem {
  label: string;
  value: number;
}
//诉讼类型的option
export const litigationTypeOptions: Ref<IlitigationTypeOptionsItem[]> = ref([
  { label: "15天", value: 15 },
  { label: "16天", value: 16 },
  { label: "17天", value: 17 },
  { label: "18天", value: 18 },
  { label: "19天", value: 19 },
  { label: "20天", value: 20 },
  { label: "21天", value: 21 },
  { label: "22天", value: 22 },
  { label: "23天", value: 23 },
  { label: "24天", value: 24 },
  { label: "25天", value: 25 },
  { label: "26天", value: 26 },
  { label: "27天", value: 27 },
  { label: "28天", value: 28 },
  { label: "29天", value: 29 },
  { label: "30天", value: 30 },
  { label: "31天", value: 31 },
]);
//设置诉讼类型的options
export function setLitigationTypeOptions() {
  const localStorageLitigationTypeOptions = localStorage.getItem(
    "litigationTypeOptions"
  );
  if (localStorageLitigationTypeOptions) {
    litigationTypeOptions.value = JSON.parse(
      localStorageLitigationTypeOptions
    ) as IlitigationTypeOptionsItem[];
  }
}
