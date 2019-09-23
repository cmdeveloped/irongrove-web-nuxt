<template>
  <header class="header">
    <div class="header__inner">
      <div class="header__logo"></div>
      <nav class="header__nav">
        <ul>
          <li
            v-for="route in $attrs.routes"
            :key="route.name"
            :class="$route.name === route.name ? 'active' : ''"
          >
            <router-link :to="route.path">
              {{ route.name }}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.header {
  padding: 2rem 4rem;
  border-bottom: 1px solid rgba($primary, 0.1);

  &__inner {
    @include flex(center, space-between);
  }

  &__nav {
    ul {
      padding: 0;
      margin: 0;
      list-style: none;
      @include flex(center, center);

      li {
        a {
          text-transform: capitalize;
          color: rgba($primary, 0.35);
        }

        & + li {
          margin-left: 3rem;
        }

        &.active {
          a {
            color: $primary;
          }
        }
      }
    }
  }
}
</style>
