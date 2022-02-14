import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/home/index.vue";
import Panitia from "../views/panitia/index.vue";
import Student from "../views/students/index.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/panitia",
    component: Panitia,
  },
  {
    path: "/terdaftar",
    component: Student,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
