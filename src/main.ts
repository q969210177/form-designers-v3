import { createApp } from "vue";
import App from "./App.vue";
import routerArr from "./router";
import { createRouter, createWebHashHistory } from "vue-router";

import store from "./store";
import ztxCompoents from "../ztxCompoents/index";
import zformcreateVant from "../zformcreateVant/index";
import "@/assets/reset.scss";
// const app = createApp(App);
// app.use(store).use(ztxCompoents).use(zformcreateVant).mount("#app");
let router = null;
let instance: any = null;
function render(props: any) {
  const { container } = props;
  router = createRouter({
    history: createWebHashHistory(
      window.__POWERED_BY_QIANKUN__ ? "/app-vue/" : "/"
    ),
    routes: routerArr,
  });
  instance = createApp(App);
  instance.use(router).use(store).use(ztxCompoents).use(zformcreateVant);
  instance.mount(container ? container.querySelector("#app") : "#app");
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}
export async function mount(props: any) {
  console.log("[vue] props from main framework", props);
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
  router = null;
}
