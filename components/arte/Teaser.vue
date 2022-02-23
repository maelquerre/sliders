<template>
  <div
    class="relative flex flex-col flex-grow-0 flex-shrink-0 basis-auto transition-transform duration-300"
    :class="['w-32 sm:w-64']"
  >
    <a class="relative flex items-center flex-wrap mb-3 z-10 cursor-pointer transition-all duration-300">
      <div class="relative flex overflow-hidden">
        <img
          alt=""
          :class="['w-32 h-18 sm:w-64 sm:h-36']"
          :src="image(teaser.backdrop_path)"
        >
        <div class="absolute right-2.5 bottom-2.5 py-1 px-2.5 bg-black">
          <p class="text-xs md:text-sm">26 min</p>
        </div>
      </div>
    </a>

    <div>
      <h3 class="text-sm font-bold leading-tight md:text-base">{{ teaser.title }}</h3>
      <h4 class="text-sm leading-tight md:text-base">Subtitle</h4>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    teaser: Object,
  },

  computed: {
    ...mapGetters({
      image: 'tmdb/image'
    }),
  }
}
</script>
