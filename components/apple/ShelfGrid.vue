<template>
  <div class="relative w-full md:px-16">
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
        <ShelfGridListItem
          v-for="(movie, index) in movies"
          :key="index"
          class="md:snap-start"
          :fullWidth="grid === 'FullWidth'"
          :imageSrc="image(movie.backdrop_path)"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import ShelfGridListItem from './ShelfGridListItem'

export default {
  name: 'ShelfGrid',

  components: {
    ShelfGridListItem
  },

  props: {
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
