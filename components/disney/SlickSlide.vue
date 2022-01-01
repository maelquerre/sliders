<template>
  <div
    class="block float-left h-full p-2.5 transition-opacity duration-300"
    :style="{ width: `${width}px` }"
  >
    <div>
      <div class="inline-block w-full">
        <a
          :class="[
            'relative block rounded shadow cursor-pointer transition-transform duration-300 hover:scale-105 focus:scale-105',
            'after:content-[\'\'] after:absolute after:inset-0 after:border-4 after:border-transparent after:rounded after:transition-colors after:duration-300 after:ease-out hover:after:border-white focus:after:border-white'
          ]"
          tabindex="0"
        >
          <div class="relative pt-[56.25%] w-full h-0 rounded overflow-hidden">
            <div>
              <img
                class="absolute block inset-0 w-full h-full object-cover"
                :src="imageSrc"
              >
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SlickSlide',

  props: {
    imageSrc: String,
    width: Number
  }
}
</script>
