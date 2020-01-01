<template>
  <div class="gallery">
    <div class="gallery__heading text-center">
      <img src="../assets/images/name.svg" alt="" />
    </div>

    <div class="gallery__inner">
      <section class="gallery__photos" v-for="(category, key) in categories">
        <div class="gallery__photos--heading">
          <h2>{{ key }}</h2>
        </div>
        <div class="photos">
          <div class="photo--wrapper" v-for="photo in category" :key="photo">
            <div
              class="photo"
              :style="{ backgroundImage: `url(${photo})` }"
              @click="highlight = photo"
            ></div>
          </div>
        </div>
      </section>
    </div>

    <div id="highlight" v-if="highlight" @click="highlight = false">
      <img :src="highlight" alt="Highlight Photo" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.gallery {
  padding: 2rem;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 650px) {
    padding: 2rem 1rem 1rem;
  }

  &__heading {
    img {
      height: 2.5rem;
    }
  }

  &__inner {
    width: 100%;
  }

  &__photos {
    &--heading {
      padding-right: 3rem;
      margin: 3rem 0 2rem;
      border-bottom: 2px solid #f7d54f;
      display: inline-block;

      h2 {
        text-transform: capitalize;
        color: $color1;
      }
    }

    .photos {
      @include flex(center, flex-start);
      flex-wrap: wrap;
      margin: 0 -0.5rem;

      .photo {
        width: 100%;
        @include background(cover, center);
        background-color: $primary;
        padding-bottom: 56.25%;
        cursor: pointer;

        &--wrapper {
          padding: 0.5rem;
          width: 33.33%;

          @media (max-width: 768px) {
            width: 50%;
          }

          @media (max-width: 650px) {
            width: 100%;
          }
        }
      }
    }
  }
}

#magic-line {
  transition: 0.25s;
}

#highlight {
  @include flex(center, center);
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(black, 0.75);

  img {
    max-width: 75%;
    max-height: 90%;
    box-shadow: -2px 2px 1rem rgba(black, 0.4);

    @media (max-width: 650px) {
      max-width: 90%;
    }
  }
}
</style>

<script>
/* eslint-disable */
import { categories } from "@/assets/data/categories";

export default {
  data: () => ({
    categories,
    category: false,
    highlight: false
  }),
  computed: {
    photos() {
      const that = this;
      const category = that.category ? that.category : false;
      const categories = Object.keys(that.categories);
      let photos = [];

      if (!category) {
        for (let cat of categories) {
          let arr = that.categories[cat];
          photos = photos.concat(arr);
        }
      } else {
        photos = that.categories[category];
      }

      return photos;
    },
    lineStyle() {
      const that = this;
      const category = that.category ? that.category : "all";
      const button = $(`#${category}-btn`);
      const width = button.length ? button.outerWidth() : 0;
      const left = button.length ? button.position().left : 0;
      return {
        width: `${width}px`,
        left: `${left}px`,
        height: "2px",
        backgroundColor: "#f7d54f",
        position: "relative",
        display: "inline-block"
      };
    }
  }
};
</script>
