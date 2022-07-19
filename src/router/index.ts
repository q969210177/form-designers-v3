import { RouteRecordRaw } from "vue-router";
import ztxRouter from "./ztxRouter";
export const routes: Array<RouteRecordRaw> = [
  ...ztxRouter,
  {
    path: "/AppHome",
    name: "AppHome",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("@/views/AppHome.vue"),
    // redirect: "/AppHome/ccc",
    // children: [
    //   {
    //     path: "ccc",
    //     name: "ccc",
    //     component: () => import("@/views/appViews/testApp.vue"),
    //   },
    // ],
  },
];

export default routes;
