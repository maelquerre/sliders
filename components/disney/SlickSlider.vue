<template>
  <div class="px-4 overflow-x-hidden md:px-16">
    <div
      v-if="name"
      class="text-xl font-bold"
    >
      {{ name }}
    </div>

    <div class="relative block mb-4">
      <button
        class="absolute top-0 left-0 block cursor-pointer w-4 h-full z-10 -translate-x-full transition-opacity duration-200 hover:opacity-100 md:w-16 md:opacity-0"
        :class="{ 'opacity-0 pointer-events-none': currentSlide === 1 }"
        @click="currentSlide = currentSlide === 0 ? 0 : currentSlide - 1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="inline h-4 w-4 text-gray-50 md:h-10 md:w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <div
        ref="slickList"
        class="relative -mx-2.5"
      >
        <div
          class="relative top-0 left-0 transition-transform duration-300 before:content-[''] before:table after:content-[''] after:table after:clear-both"
          :style="{
            width: `${slickTrackWidth}px`,
            transform: `translateX(${(currentSlide - 1) * slickListWidth * -1}px)`
          }"
        >
          <SlickSlide
            v-for="(movie, index) in movies"
            :key="movie.id"
            :class="{ 'opacity-50': index < currentSlide * columnsCount - columnsCount || index >= currentSlide * columnsCount }"
            :imageSrc="image(movie.backdrop_path)"
            :width="slickSlideWidth"
          />
        </div>
      </div>

      <button
        class="absolute top-0 right-0 block cursor-pointer w-4 h-full z-10 translate-x-full transition-opacity duration-200 hover:opacity-100 md:w-16 md:opacity-0"
        :class="{ 'opacity-0 pointer-events-none': currentSlide === Math.ceil(movies.length / columnsCount) }"
        @click="currentSlide++"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="inline h-4 w-4 text-gray-50 md:h-10 md:w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'

import { mapGetters } from 'vuex'

import SlickSlide from './SlickSlide'

export default {
  name: 'SlickSlider',

  components: {
    SlickSlide
  },

  props: {
    movies: Array,
    name: String
  },

  data: () => ({
    columnsCount: 2,
    currentSlide: 1,
    slickListWidth: 'auto',
    slickTrackWidth: 0,
    slickSlideWidth: 0
  }),

  computed: {
    ...mapGetters({
      image: 'tmdb/image'
    }),

    tailwindTheme() {
      return resolveConfig(tailwindConfig)['theme']
    }
  },

  mounted() {
    this.computeColumnsCount()
    this.computeSlickWidths()

    window.addEventListener('resize', () => {
      this.computeColumnsCount()
      this.computeSlickWidths()
    })
  },

  methods: {
    computeColumnsCount() {
      if (window.innerWidth < parseInt(this.tailwindTheme.screens['lg'], 10)) {
        this.columnsCount = 2
      } else if (window.innerWidth < parseInt(this.tailwindTheme.screens['xl'], 10)) {
        this.columnsCount = 3
      } else if (window.innerWidth < parseInt(this.tailwindTheme.screens['2xl'], 10)) {
        this.columnsCount = 4
      } else {
        this.columnsCount = 5
      }
    },

    computeSlickWidths() {
      this.slickListWidth = this.$refs.slickList.offsetWidth
      this.slickTrackWidth = this.movies.length * (this.slickListWidth / this.columnsCount)
      this.slickSlideWidth = this.slickListWidth / this.columnsCount
    }
  }
}
</script>
