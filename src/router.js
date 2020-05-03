import Vue from "vue";
import Router from "vue-router";
import VueMeta from "vue-meta";

import Home from "./views/Home";
import Gallery from "./views/Gallery";

Vue.use(Router);
Vue.use(VueMeta);

export const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      title: "Home",
      description:
        "Handcrafted & custom-made cabinetry, furniture, and architectural elements. Quality that will stand the test of life."
    }
  },
  {
    path: "/gallery",
    name: "gallery",
    component: Gallery,
    meta: {
      title: "Gallery",
      description:
        "Beautifully designed and architected cabinetry, furniture, and archectural elements worth investing in. Don't settle for common when you can invest in custom."
    }
  }
];

export const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
