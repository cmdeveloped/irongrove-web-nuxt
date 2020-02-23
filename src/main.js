import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Vue from "vue";
import App from "./App.vue";
import { router } from "./router";
import "./filters";

const jQuery = require("jquery");
window.$ = jQuery;

Vue.config.productionTip = false;

new Vue({
  router,
  data: () => ({
    access: false
  }),
  computed: {
    loadWebP() {
      const browser = navigator.userAgent;
      const isIE = browser.indexOf("Trident") > -1 ? true : false;
      const isSafari =
        browser.indexOf("Safari") > -1 && browser.indexOf("Chrome") < 0
          ? true
          : false;

      if (isIE || isSafari) {
        return false;
      }

      return true;
    }
  },
  render: h => h(App)
}).$mount("#app");
