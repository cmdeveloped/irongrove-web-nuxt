<template>
  <div class="shutters">
    <div class="shutter" v-for="photo in photos">
      <div
        class="shutter__inner"
        :style="{ backgroundImage: 'url(' + photo + ')' }"
      ></div>
    </div>
  </div>
</template>

<script>
import { shutters } from "@/assets/data/shutters";

export default {
  data: () => ({
    shutters,
    active: 0
  }),
  methods: {},
  computed: {
    photos() {
      const that = this;
      const shutters = that.shutters;
      const active = that.active;
      return shutters[active];
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.shutters {
  height: 100%;
  @include flex(stretch, space-between);

  .shutter {
    height: 100%;
    width: 30%;
    overflow: hidden;

    &__inner {
      height: 100%;
      @include background(cover, center);
      transition: 0.5s;
    }

    &:hover {
      .shutter__inner {
        transform: scale(1.1);
      }
    }
  }
}
</style>
