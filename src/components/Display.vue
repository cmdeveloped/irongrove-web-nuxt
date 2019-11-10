<template>
  <div class="display pr-1">
    <div class="display__inner">
      <h1
        :class="[!content.stats ? 'mb-3' : 'mb-4']"
        v-html="content.heading"
        v-if="content.heading"
      ></h1>
      <p v-html="content.subtitle" v-if="content.subtitle"></p>
      <div class="statistics" v-if="content.stats">
        <div
          class="statistic"
          v-for="(stat, idx) in content.stats"
          :key="$attrs.active + idx"
        >
          <h3 class="h5">{{ stat.title }}</h3>
          <p>{{ stat.description }}</p>
        </div>
      </div>
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
      const subtitle = active === null ? display.subtitle : false;
      const stats = active === null ? false : display.photos[active].statistics;
      return {
        heading,
        subtitle,
        stats
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.display {
  .statistics {
    .statistic {
      h3.h5 {
        color: $color1;
        padding: 0 1rem 0.25rem 0;
        border-bottom: 2px solid $color1;
        display: inline-block;
      }
      margin-bottom: 2rem;
    }
  }
}
</style>
