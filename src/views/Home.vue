<template>
  <div id="home" class="my-container home">
    <div class="home__inner">
      <div class="home__left">
        <Display :active="active" :display="display" />
        <ShutterNav :page="page" :pages="shutters.length" />
      </div>
      <div class="home__right">
        <Shutters :active="active" :photos="display.photos" />
      </div>
    </div>
  </div>
</template>

<script>
import Shutters from "@/components/Shutters";
import Display from "@/components/Display";
import ShutterNav from "@/components/ShutterNav";

import { shutters } from "@/assets/data/shutters";

export default {
  name: "home",
  components: {
    Shutters,
    Display,
    ShutterNav
  },
  data: () => ({
    shutters,
    active: null,
    page: 0
  }),
  computed: {
    display() {
      const that = this;
      const shutters = that.shutters;
      const page = that.page;
      return shutters[page];
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/variables";

.home {
  &__inner {
    @include flex(stretch, space-between);
    width: 100%;
  }

  &__left {
    @include flex(flex-start, space-between);
    flex-direction: column;
    padding: 4rem 2rem 2rem 4rem;
    margin-top: 5rem;
    width: 30rem;
  }

  &__right {
    flex: 1;
  }
}
</style>
