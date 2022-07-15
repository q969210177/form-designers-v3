import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ztxCompoents from "../ztxCompoents/index";
import "@/assets/reset.scss";
const app = createApp(App);
app.use(store).use(router).use(ztxCompoents).mount("#app");
