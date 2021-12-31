<template>
  <div class="overflow-x-hidden px-16">
    <div class="relative block mb-4">
      <button
        class="absolute top-0 left-0 block cursor-pointer w-16 h-full opacity-0 z-10 -translate-x-full transition-opacity duration-200 hover:opacity-100"
        :class="{ 'pointer-events-none': currentSlide === 1 }"
        @click="currentSlide = currentSlide === 0 ? 0 : currentSlide - 1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="inline h-10 w-10 text-gray-50"
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
            v-for="(slide, index) in slides"
            :key="index"
            :class="{ 'opacity-50': index < currentSlide * columnsCount - columnsCount || index >= currentSlide * columnsCount }"
            :imageSrc="slide.image"
            :width="slickSlideWidth"
          />
        </div>
      </div>

      <button
        class="absolute top-0 right-0 block cursor-pointer w-16 h-full opacity-0 z-10 translate-x-full transition-opacity duration-200 hover:opacity-100"
        :class="{ 'pointer-events-none': currentSlide === Math.ceil(slides.length / columnsCount) }"
        @click="currentSlide++"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="inline h-10 w-10 text-gray-50"
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
import SlickSlide from './SlickSlide'

export default {
  name: 'SlickSlider',

  props: {
    slides: Array,
    columnsCount: Number,
  },

  data: () => ({
    currentSlide: 1,
    slickListWidth: 'auto',
    slickTrackWidth: 0,
    slickSlideWidth: 0
  }),

  components: {
    SlickSlide
  },

  mounted() {
    this.slickListWidth = this.$refs.slickList.offsetWidth
    this.slickTrackWidth = this.slides.length * (this.slickListWidth / this.columnsCount)
    this.slickSlideWidth = this.slickListWidth / this.columnsCount
  }
}
</script>
