<template>
  <div class="shutters">
    <div
      v-for="(photo, idx) in $attrs.photos"
      :class="[
        'shutter',
        $attrs.active === idx
          ? 'active'
          : $attrs.active !== null
          ? 'inactive'
          : ''
      ]"
      :key="'shutter-' + idx"
      @click="$parent.active = idx"
    >
      <div
        class="shutter__inner"
        :style="{ backgroundImage: 'url(' + photo.photo + ')' }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.shutters {
  height: 100%;
  @include flex(center, space-between);

  .shutter {
    height: calc(100% - 4rem);
    width: calc(33.33% - 1.5rem);
    overflow: hidden;
    position: relative;
    top: 0;
    transition: all 0.75s ease-in-out;

    &__inner {
      height: 100%;
      @include background(cover, center);
      transition: 0.5s;
      cursor: pointer;
    }

    &:hover {
      .shutter__inner {
        transform: scale(1.05);
      }
    }

    &.active {
      height: 100%;
      width: 100%;
      transition-delay: 0.15s;
    }

    &.inactive {
      opacity: 0;
      width: 0;
      transition-delay: 0.1s;

      & + .inactive {
        transition-delay: 0.1s;
      }
    }
  }
}
</style>
