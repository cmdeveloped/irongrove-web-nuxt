<template>
  <div id="app">
    <my-header :routes="routes" />
    <router-view />
    <my-footer />
  </div>
</template>

<script>
import { routes } from "@/router";

import MyHeader from "@/components/Header";
import MyFooter from "@/components/Footer";

export default {
  name: "app",
  components: {
    MyHeader,
    MyFooter
  },
  data: () => ({
    routes
  })
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
