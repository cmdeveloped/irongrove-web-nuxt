<template>
  <div id="gallery" class="my-container">
    <div class="access" v-if="!$root.access">
      <form class="access__form" @submit.prevent="gainAccess">
        <input
          class="w-100 mb-3 primary-input"
          type="password"
          name="access"
          placeholder="Enter password to gain access"
          v-model="password"
        />
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
    @include flex(center, center);
    &__form {
      width: 100%;
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
    password: ""
  }),
  methods: {
    gainAccess() {
      const that = this;
      const password = that.password;
      const access = password === that.galleryPass ? true : false;
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
