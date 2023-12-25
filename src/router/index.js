import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/features",
    name: "features",
    component: () => import("../views/Features.vue"),
  },

  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/contacts",
    name: "contacts",
    component: () => import("../views/Contacts.vue"),
  },
  {
    path: "/blogs",
    name: "blogs",
    component: () => import("../views/Blogs.vue"),
  },

  {
    path: "/faqs",
    name: "faqs",
    component: () => import("../views/Faqs.vue"),
  },
  {
    path: "/faqs",
    name: "faqs",
    component: () => import("../views/Faqs.vue"),
  },
  // Not Found Route

  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
