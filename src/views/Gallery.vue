<template>
  <div id="gallery" class="my-container">
    <div class="access" v-if="!$root.access">
      <form class="access__form" @submit.prevent="gainAccess">
        <div class="logo text-center mb-4">
          <img class="w-100" src="../assets/images/name.svg" alt="" />
        </div>
        <input
          class="w-100 mb-3 primary-input"
          type="password"
          autocomplete="new-password"
          name="access"
          placeholder="Enter password to gain access"
          v-model="password"
        />
        <p v-if="error" class="alert text-center">
          {{ error }}
        </p>
        <p class="mb-0">
          <button type="submit" class="primary-btn w-100">
            Enter
          </button>
        </p>
      </form>
    </div>
    <Gallery v-else />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

#gallery {
  .access {
    max-width: 25rem;
    width: 100%;
    margin: 0 auto;
    padding: 0 2rem;
    @include flex(center, center);
    &__form {
      width: 100%;
    }

    .alert {
      color: $color1;
    }
  }
}
</style>

<script>
import Gallery from "@/components/Gallery";

export default {
  components: {
    Gallery
  },
  data: () => ({
    password: "",
    error: ""
  }),
  methods: {
    gainAccess() {
      const that = this;
      const password = that.password;
      const access = password === that.galleryPass ? true : false;
      !access ? (that.error = "Password is not correct.") : (that.error = "");
      that.$root.access = access;
      return;
    }
  },
  computed: {
    galleryPass() {
      const password = process.env.VUE_APP_GALLERY_PASS;
      return password;
    }
  }
};
</script>
