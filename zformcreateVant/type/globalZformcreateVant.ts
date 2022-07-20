import type { App } from "vue";
export interface IexportDefault<T = any> {
  install: (Vue: App, option: T) => void;
}

// required	是否为必选字段，当值为空字符串、空数组、undefined、null 时，校验不通过	boolean
// message	错误提示文案	string | (value, rule) => string
// validator	通过函数进行校验	(value, rule) => boolean | string | Promise
// pattern	通过正则表达式进行校验	RegExp
// trigger	本项规则的触发时机，可选值为 onChange、onBlur	string
// formatter	格式化函数，将表单项的值转换后进行校验
export interface IvalidatorItem<T = any, F = any> {
  required?: boolean;
  message?: string | ((value: any, rule: IruleItem[]) => string);
  validator?: (value: any, rule: IruleItem[]) => T;
  pattern?: RegExp;
  trigger?: "onChange" | "onBlur";
  formatter?: (value: any) => F;
}
export interface IruleItem {
  fileId: string;
  type: string;
  value: any;
  label: string;
  props?: { [x: string]: any };
  isComponents?: boolean;
  rule: IvalidatorItem[];
}
