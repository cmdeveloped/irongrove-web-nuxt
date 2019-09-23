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

<style lang="scss"></style>
