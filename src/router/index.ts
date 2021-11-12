import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Portfolio from "../views/Portfolio.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
  },
  {
    path: "/gear",
    name: "Gear",
    component: () => import("../views/Gear.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
