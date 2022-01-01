<template>
  <li class="md:snap-start">
    <div class="group relative">
      <a href="#">
        <div
          class="relative mb-2 w-full h-full bg-gray-800 rounded-xl shadow-lg overflow-hidden box-border"
          :class="fullWidth ? 'pt-[27.5%]' : 'pt-[56.25%]'"
        >
          <picture>
            <source
              :srcset="`${imageSrc}`"
              type="image/jpeg"
            >
            <img
              alt=""
              class="absolute inset-0 m-auto h-full rounded-xl transition-opacity duration-150 w-full object-cover"
              :src="imageSrc"
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
</template>

<script>
export default {
  name: 'ShelfGridListItem',

  props: {
    fullWidth: Boolean,
    imageSrc: String
  }
}
</script>
