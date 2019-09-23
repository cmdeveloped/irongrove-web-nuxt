<template>
  <header class="header">
    <div class="header__inner">
      <div class="header__logo"></div>
      <nav class="header__nav">
        <ul>
          <li v-for="route in $attrs.routes">
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

<style lang="scss" scoped></style>
