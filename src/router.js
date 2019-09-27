import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home";
import About from "./views/About";
import Gallery from "./views/Gallery";

Vue.use(Router);

export const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/gallery",
    name: "gallery",
    component: Gallery
  }
  // {
  //   path: "/contact",
  //   name: "contact",
  //   component: Contact
  // }
];

export const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
