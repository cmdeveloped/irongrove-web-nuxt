<template>
  <div class="shutter-nav">
    <div class="shutter-nav__inner" v-if="$attrs.active === null">
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
        @click="nextPage()"
      >
        Next <i class="fas fa-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    nextPage() {
      this.$attrs.page !== this.$attrs.pages - 1
        ? this.$parent.page++
        : (this.$parent.page = 0);

      const winWidth = window.outerWidth;
      if (winWidth < 1024) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }
};
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

      @media (max-width: 1024px) {
        @include flex(flex-end, center);
        flex-direction: row;

        button {
          width: 1px;
          height: 0.75rem;
          padding: 2px;

          &.active {
            width: 3px;
            height: 1.25rem;
          }

          & + button {
            margin-top: 0;
            margin-left: 1rem;
          }
        }
      }
    }
  }
}
</style>
