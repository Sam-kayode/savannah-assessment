// src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const UsersView = () => import("../views/index.vue");

const DetailsView = () => import("../views/details.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: UsersView,
  },
  {
    path: "/details",
    name: "UserDetails",
    component: DetailsView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
