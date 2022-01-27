<template>
  <div class="relative w-full flex flex-row flex-wrap">
    <div class="group relative flex flex-row flex-nowrap space-x-6 py-4 overflow-y-hidden overflow-x-visible">
      <Teaser
        v-for="movie in movies"
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
}
</script>
