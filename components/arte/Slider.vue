<template>
  <div class="relative w-full flex flex-row flex-wrap">
    <div class="group relative flex flex-row flex-nowrap space-x-6 py-4 overflow-y-hidden overflow-x-visible">
      <Teaser
        v-for="movie in movies"
        :key="movie.id"
        class="group-hover:hover:scale-110"
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
}
</script>
