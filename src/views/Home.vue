<template>
  <div id="home" class="my-container home">
    <div class="home__inner">
      <div class="home__left"></div>
      <div class="home__right">
        <Shutters />
      </div>
    </div>
  </div>
</template>

<script>
import Shutters from "@/components/Shutters";

export default {
  name: "home",
  components: {
    Shutters
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/variables";

.home {
  &__inner {
    @include flex(stretch, space-between);
    width: 100%;
    padding: 3rem 0 3rem 4rem;
  }

  &__right {
    width: 65%;
  }
}
</style>
