<template>
  <div class="gallery">
    <div class="gallery__heading text-center">
      <img src="assets/name.svg" alt="The Iron Grove" />
      <nav class="mt-3">
        <a
          v-for="(category, key) in categories"
          :href="`#${category.name}`"
          :key="key"
        >
          {{ category.name }}
        </a>
      </nav>
    </div>

    <div class="gallery__inner">
      <section
        class="gallery__photos"
        v-for="(category, key) in categories"
        :key="key"
      >
        <div class="gallery__photos--heading" :id="category.name">
          <h2>{{ category.name }}</h2>
        </div>

        <!-- individual photos -->
        <div class="photos" v-if="category.name === 'architecture'">
          <div
            class="photo--wrapper"
            v-for="(photo, idx) in displayType(category.photos)"
            :key="idx"
          >
            <div
              class="photo"
              :style="{
                backgroundImage: `url('assets/${viewport}/${category.name}/${
                  photo.name
                }')`
              }"
              @click="
                highlight = `assets/${viewport}/${category.name}/${photo.name}`
              "
            ></div>
          </div>
        </div>

        <!-- projects -->
        <div class="projects" v-else>
          <div
            class="project--wrapper"
            v-for="(project, idx) in category.projects"
            :key="idx"
          >
            <div
              class="project"
              :style="{
                backgroundImage: `url('${projectCover(
                  category.name,
                  project
                )}')`
              }"
              @click="
                carousel = {
                  category: category.name,
                  project: project.name,
                  active: 0,
                  photos: displayType(project.photos)
                }
              "
            >
              <div class="project--inner">
                <i class="far fa-images"></i>
                <span>{{ project.name | formatName }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- standard photo highlight -->
    <div id="highlight" v-if="highlight" @click="highlight = false">
      <img :src="highlight" alt="Highlight Photo" />
    </div>

    <!-- project carousel view -->
    <div
      id="carousel"
      v-if="carousel && carousel.photos.length"
      @click="carousel = false"
    >
      <div class="carousel">
        <div class="left desktop">
          <i class="far fa-arrow-left" @click.stop="setCarouselPhoto(-1)"></i>
        </div>
        <div class="center">
          <img
            :src="
              `assets/${viewport}/${carousel.category}/${carousel.project}/${
                carousel.photos[carousel.active].name
              }`
            "
            alt=""
          />
          <p>
            {{ carousel.active + 1 }} of {{ carousel.photos.length }} —
            {{ carousel.project | formatName }}
          </p>
          <nav>
            <div class="left mobile">
              <i
                class="far fa-arrow-left"
                @click.stop="setCarouselPhoto(-1)"
              ></i>
            </div>
            <div class="right mobile">
              <i
                class="far fa-arrow-right"
                @click.stop="setCarouselPhoto(1)"
              ></i>
            </div>
          </nav>
        </div>
        <div class="right desktop">
          <i class="far fa-arrow-right" @click.stop="setCarouselPhoto(1)"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import categories from "@/assets/data/images";

export default {
  data: () => ({
    categories,
    category: false,
    highlight: false,
    carousel: false
  }),
  filters: {
    formatName(name) {
      name = name.split("_");
      name = name.map(n => n.charAt(0).toUpperCase() + n.slice(1));
      name = name.join(" ");
      return name;
    }
  },
  methods: {
    displayType(photos) {
      const modern = this.$root.loadWebP;
      let viewport = this.viewport;

      if (modern && viewport === "desktop") {
        photos = photos.filter(p => p.name.indexOf(".webp") > -1);
      } else {
        photos = photos.filter(p => p.name.indexOf(".jpg") > -1);
      }

      return photos;
    },
    projectCover(category, project) {
      let viewport = this.viewport;
      const photos = this.displayType(project.photos);
      const cover = project.cover ? project.cover[0].name : photos[0].name;
      const path = `assets/${viewport}/${category}/${project.name}/${cover}`;
      return path;
    },
    setCarouselPhoto(dir) {
      const numPhotos = this.carousel.photos.length;
      const active = this.carousel.active;
      let next = active + dir;

      if (next === -1) {
        next = numPhotos - 1;
      } else if (next === numPhotos) {
        next = 0;
      }

      this.$set(this.carousel, "active", next);
      return;
    }
  },
  computed: {
    viewport() {
      let winSize = window.outerWidth;
      return winSize > 768 ? "desktop" : "mobile";
    }
  }
};
</script>

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

    a {
      display: inline-block;
      & + a {
        margin-left: 2rem;
      }
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

    .photos,
    .projects {
      @include flex(center, flex-start);
      flex-wrap: wrap;
      margin: 0 -0.5rem;

      .photo,
      .project {
        width: 100%;
        @include background(cover, center);
        background-color: $primary;
        padding-bottom: 56.25%;
        cursor: pointer;
        position: relative;

        &--wrapper {
          padding: 0.5rem;
          width: 33.33%;

          @media (max-width: 1075px) {
            width: 50%;
          }

          @media (max-width: 750px) {
            width: 100%;
          }
        }

        &:hover {
          .project--inner {
            opacity: 0;
          }
        }

        &--inner {
          @include flex(flex-end, flex-start);
          position: absolute;
          z-index: 1;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba($secondary, 0.5);
          color: white;
          padding: 1rem 1.5rem;
          transition: 0.25s;

          i {
            position: absolute;
            top: 1rem;
            right: 1rem;
            font-size: 1.5rem;
          }

          span {
            font-family: $headings-font-family;
            font-size: 1.5rem;
            margin: 0;
          }
        }
      }
    }
  }
}

#magic-line {
  transition: 0.25s;
}

#highlight,
#carousel {
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

#carousel {
  .carousel {
    @include flex(center, center);
    width: 100%;

    @media (max-width: 1050px) {
      flex-direction: column;
    }

    .left,
    .right {
      text-align: center;
      width: 10rem;
      flex-shrink: 0;
      font-size: 2rem;

      &.desktop {
        @media (max-width: 1050px) {
          display: none;
        }
      }

      &.mobile {
        display: none;

        @media (max-width: 1050px) {
          display: block;
        }
      }

      @media (max-width: 1050px) {
        width: 100%;
        padding: 0 2rem;
      }

      i {
        cursor: pointer;
      }
    }

    .center {
      text-align: center;
      width: 100%;
      height: 100vh;
      padding: 2rem 0;
      @include flex(center, center);
      flex-direction: column;

      img {
        max-width: calc(100% - 2rem);
        max-height: calc(100% - 8rem);
        box-shadow: -2px 2px 1rem rgba(black, 0.4);
        margin-bottom: 2rem;
      }

      p {
        margin: 0;
      }

      nav {
        @media (min-width: 1051px) {
          display: none;
        }

        margin-top: 1rem;
        @include flex(center, center);
      }
    }
  }
}
</style>
