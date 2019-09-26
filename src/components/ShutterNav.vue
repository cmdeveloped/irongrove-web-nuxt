<template>
  <div class="shutter-nav">
    <div class="shutter-nav__inner">
      <nav>
        <button
          v-for="(page, idx) in $attrs.pages"
          :class="$attrs.page === idx ? 'active' : ''"
          :key="idx"
          type="button"
          name="nav-dot"
          @click="$parent.page = idx"
        ></button>
      </nav>
      <button
        type="button"
        name="shutter-next"
        class="primary-btn"
        @click="
          $attrs.page !== $attrs.pages - 1 ? $parent.page++ : ($parent.page = 0)
        "
      >
        Next <i class="fas fa-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.shutter-nav {
  width: 100%;

  &__inner {
    @include flex(flex-end, space-between);

    nav {
      @include flex(flex-start, center);
      flex-direction: column;

      button {
        border: none;
        height: 1px;
        width: 0.75rem;
        background-color: rgba($primary, 0.25);
        transition: all 0.5s ease-in-out;

        &:focus {
          outline: none;
        }

        &.active {
          height: 3px;
          width: 1.25rem;
          background-color: $color1;
        }

        & + button {
          margin-top: 1rem;
        }
      }
    }
  }
}
</style>
