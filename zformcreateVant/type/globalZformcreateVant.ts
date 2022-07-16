import type { App } from "vue";
export interface IexportDefault<T = any> {
  install: (Vue: App, option: T) => void;
}

export interface IruleItem<T = any> {
  fileId: string;
  type: string;
  value: any;
  label: any;
  span: any;
  // value: any;
  // value: any;
  // value: any;
}
