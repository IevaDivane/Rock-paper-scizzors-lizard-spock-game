import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/components/home/homeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/game",
    name: "game",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/gameView.vue"),
  },
  {
    path: "/rules",
    name: "rules",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/rulesView.vue"),
  },
  {
    path: "/rules:here",
    name: "rules:here",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/addictionView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
