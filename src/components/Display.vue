<template>
  <div class="display pr-1">
    <div class="display__inner">
      <h1 class="mb-3" v-html="content.heading"></h1>
      <p v-html="content.subtitle"></p>
      <p class="h5 mt-4">
        <router-link to="/gallery" class="move">
          —— See More
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  computed: {
    content() {
      const that = this;
      const active = that.$attrs.active;
      const display = that.$attrs.display;
      const heading =
        active === null ? display.heading : display.photos[active].heading;
      const subtitle =
        active === null ? display.subtitle : display.photos[active].subtitle;
      return {
        heading,
        subtitle
      };
    }
  }
};
</script>

<style lang="scss" scoped></style>
