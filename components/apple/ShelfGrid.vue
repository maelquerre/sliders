<template>
  <div class="relative w-full md:px-16">
    <div class="px-8 md:px-0">
      <div class="text-2xl font-bold leading-tight text-white">
        {{ heading }}
      </div>
      <div
        v-if="subhead"
        class="text-2xl font-normal leading-normal text-white/60"
      >
        {{ subhead }}
      </div>
    </div>

    <div class="-mx-4 px-4 w-full box-content">
      <ul class="grid grid-flow-col snap-x snap-mandatory -my-6 py-6 overflow-x-auto overflow-y-hidden scroll-smooth">
        <li
          v-for="(item, index) in items"
          class="snap-start"
        >
          <div class="group relative">
            <a href="#">
THUMB
            </a>
            <div class="absolute inset-0 w-full h-full flex items-end justify-end p-3 rounded-xl opacity-0 pointer-events-none transition-opacity duration-100 ease-in z-10 group-hover:opacity-100">
              <button
                :class="[
                  'relative w-7 h-7 rounded-xl bg-transparent opacity-100 z-10 pointer-events-auto hover:before:bg-blue-700',
                  'before:content-[\'\'] before:absolute before:top-0 before:right-0 before:w-7 before:h-7 before:bg-white/20 before:rounded-full',
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
export default {
  name: 'ShelfGrid',

  props: {
    headline: String,
    subhead: String,
    items: Array
  }
}
</script>
