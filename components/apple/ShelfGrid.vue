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
        class="grid grid-flow-col gap-3 snap-x snap-mandatory pl-4 overflow-x-auto overflow-y-hidden scroll-smooth scrollbar:hidden md:-my-5 md:py-5 md:pl-0 md:gap-5"
        :class="{
          'auto-cols-a': grid === 'A',
          'auto-cols-b': grid === 'B',
          'auto-cols-c': grid === 'C',
          'auto-cols-epic-inline': grid === 'EpicInline',
          'auto-cols-full-width': grid === 'FullWidth'
        }"
      >
        <li
          v-for="(movie, index) in movies"
          :key="index"
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
    headline: String,
    subhead: String,
    movies: Array,
    grid: String
  },

  computed: {
    ...mapGetters({
      image: 'tmdb/image'
    })
  }
}
</script>

<style scoped>
.auto-cols-a {
  grid-auto-columns: theme('width.72');

  @screen md {
    grid-auto-columns: calc((100% - 1 * theme('gap.5')) / 2);
  }

  @screen 2xl {
    grid-auto-columns: calc((100% - 2 * theme('gap.5')) / 3);
  }
}

.auto-cols-b {
  grid-auto-columns: theme('width.64');

  @screen md {
    grid-auto-columns: calc((100% - 1 * theme('gap.5')) / 2);
  }

  @screen lg {
    grid-auto-columns: calc((100% - 2 * theme('gap.5')) / 3);
  }

  @screen 2xl {
    grid-auto-columns: calc((100% - 3 * theme('gap.5')) / 4);
  }
}

.auto-cols-c {
  grid-auto-columns: theme('width.48');

  @screen md {
    grid-auto-columns: calc((100% - 2 * theme('gap.5')) / 3);
  }

  @screen lg {
    grid-auto-columns: calc((100% - 3 * theme('gap.5')) / 4);
  }

  @screen 2xl {
    grid-auto-columns: calc((100% - 4 * theme('gap.5')) / 5);
  }
}

.auto-cols-epic-inline {
  grid-auto-columns: theme('width.32');

  @screen md {
    grid-auto-columns: calc((100% - 4 * theme('gap.5')) / 5);
  }

  @screen 2xl {
    grid-auto-columns: calc((100% - 5 * theme('gap.5')) / 6);
  }
}

.auto-cols-full-width {
  grid-auto-columns: calc((100% - 0 * theme('gap.5')) / 1);
}

.scrollbar\:hidden::-webkit-scrollbar {
  display: none;
}
</style>
