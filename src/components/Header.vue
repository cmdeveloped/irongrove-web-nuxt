<template>
  <header class="header">
    <div class="header__inner">
      <div class="header__logo">
        <img src="../assets/images/favicon.svg" alt="" />
      </div>
      <nav class="header__nav">
        <ul>
          <li
            v-for="route in $attrs.routes"
            :key="route.name"
            :class="$route.name === route.name ? 'active' : ''"
          >
            <router-link :to="route.path">
              <span>
                {{ route.name }}
              </span>
              <i
                :class="[
                  'fas',
                  route.name === 'home' ? 'fa-home' : 'fa-images'
                ]"
              ></i>
            </router-link>
          </li>
          <li>
            <a href="tel:8508038843">
              <i class="fas fa-phone"></i>
            </a>
          </li>
          <li>
            <a href="mailto:">
              <i class="fas fa-envelope"></i>
            </a>
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
  padding: 1.5rem 4rem;
  // border-bottom: 1px solid $secondary;

  @media (max-width: 1024px) {
    padding: 1.5rem 2rem;
  }

  &__inner {
    @include flex(center, space-between);
  }

  &__logo {
    img {
      height: 3rem;

      @media (max-width: 425px) {
        height: 2rem;
      }
    }
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

        .fa-home,
        .fa-images {
          display: none;
        }

        @media (max-width: 768px) {
          .fa-home,
          .fa-images {
            display: inline-block;
          }
          span {
            display: none;
          }
        }

        & + li {
          margin-left: 3rem;

          @media (max-width: 425px) {
            margin-left: 2rem;
          }
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
