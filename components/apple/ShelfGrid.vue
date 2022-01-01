<template>
  <div class="relative w-full md:px-16">
    <div class="py-3 px-4 md:px-0">
      <div class="text-lg font-bold leading-tight tracking-tight text-white">
        {{ headline }}
      </div>
      <div
        v-if="subhead"
        class="text-base font-normal leading-normal text-white/60"
      >
        {{ subhead }}
      </div>
    </div>

    <div class="-mx-4 px-4 w-full box-content">
      <ul
        class="grid grid-flow-col gap-4 snap-x snap-mandatory pl-4 overflow-x-auto overflow-y-hidden scroll-smooth md:-my-6 md:py-6 md:pl-0"
        :style="{
          gridAutoColumns: `calc((100% - ${columnsCount - 1} * 1rem) / ${columnsCount});`
        }"
      >
        <li
          v-for="(movie, index) in movies"
          class="md:snap-start"
        >
          <div class="group relative">
            <a href="#">
              <div class="relative mb-2 w-full h-full pt-[56.25%] bg-gray-800 rounded-xl shadow-lg overflow-hidden box-border">
                <picture>
                  <img
                    alt=""
                    class="absolute inset-0 m-auto h-full transition-opacity duration-150"
                    :src="image(movie.backdrop_path)"
                  >
                </picture>
              </div>
            </a>

            <div class="absolute inset-0 w-full h-full flex items-end justify-end p-3 bg-neutral-700/30 rounded-xl opacity-0 pointer-events-none transition-opacity duration-100 ease-in z-10 group-hover:opacity-100">
              <button
                :class="[
                  'relative w-7 h-7 rounded-xl bg-transparent opacity-100 z-10 pointer-events-auto hover:before:bg-blue-700',
                  'before:content-[\'\'] before:absolute before:top-0 before:right-0 before:w-7 before:h-7 before:bg-white/20 before:rounded-full before:backdrop-blur-sm',
                  'after:content-[\'\'] after:absolute after:top-0 after:right-0 after:w-7 after:h-7 after:rounded-full after:bg-[url(https://tv.apple.com/assets/badges/small-more-44912049bdcd4db3777e6e61a1ded794.svg)]',
                ]"
              />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ShelfGrid',

  props: {
    columnsCount: Number,
    headline: String,
    subhead: String,
    movies: Array
  },

  computed: {
    ...mapGetters({
      image: 'tmdb/image'
    })
  }
}
</script>

<style scoped>
ul::-webkit-scrollbar {
  display: none;
}
</style>
