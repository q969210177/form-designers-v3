import { RouteRecordRaw } from "vue-router";
import ztxHtmlMain from "../../ztxCompoents/ztxHtmlMain.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: ztxHtmlMain,
    redirect: "/ztxList",
    children: [
      {
        path: "ztxList",
        name: "ztxList",
        component: () => import("../../ztxCompoents/views/ztxList.vue"),
      },
      {
        path: "ztxForm",
        name: "ztxForm",
        component: () => import("../../ztxCompoents/views/ztxForm.vue"),
      },
    ],
  },
];

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes,
// });

export default routes;
