import type { App } from "vue";
export interface IexportDefault<T = any> {
  install: (Vue: App, option: T) => void;
}
