<template>
  <div id="app">
    <my-header :routes="routes" />
    <router-view />
    <my-footer />
  </div>
</template>

<script>
import { routes } from "@/router";
import { categories } from "@/assets/data/categories";

import MyHeader from "@/components/Header";
import MyFooter from "@/components/Footer";

export default {
  name: "app",
  components: {
    MyHeader,
    MyFooter
  },
  data: () => ({
    routes,
    categories
  }),
  computed: {
    preload() {
      let images = [];
      let keys = Object.keys(this.categories);
      for (let key of keys) {
        images = [...images, this.categories[key]];
      }
      images = images.flat();

      for (let image of images) {
        let preload = new Image();
        preload.src = image;
      }
      return images;
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/globals";
@import "@/assets/scss/variables";

#app {
  @include flex(stretch, space-between);
  flex-direction: column;
  min-height: 100vh;

  .my-container {
    flex: 1;
    display: flex;
  }
}
</style>
