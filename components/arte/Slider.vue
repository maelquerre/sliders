<template>
  <div class="relative w-full flex flex-row flex-wrap">
    <div
      ref="slider"
      class="group relative flex flex-row flex-nowrap space-x-6 py-4 overflow-y-hidden overflow-x-visible scrollbar:hidden"
    >
      <Teaser
        v-for="movie in movies"
        ref="teaser"
        :key="movie.id"
        class="peer group-hover:-translate-x-[5%] group-hover:hover:scale-110 group-hover:peer-hover:translate-x-[5%] group-hover:hover:translate-x-0"
        :teaser="movie"
      />
    </div>
  </div>
</template>

<script>
import Teaser from './Teaser'

export default {
  components: {
    Teaser,
  },

  props: {
    movies: Array,
  },

  methods: {
    handleScrollToLeft() {
      const containerWidth = this.$refs.slider.offsetWidth
      const teaserWidth = this.$refs.teaser.offsetWidth
      const gapWidth = window.getComputedStyle(this.$refs.teaser).marginRight

    }
  }
}
</script>
