<template>
  <div>
    <header class="flex items-center justify-between mb-8 px-16">
      <h1 class="text-4xl font-bold tracking-tight">Streaming services sliders</h1>

      <a
        href="https://tailwindcss.com/"
        class="flex items-center ml-4 py-1 px-3 text-xs font-medium text-sky-400 bg-sky-400/10 rounded-full hover:bg-sky-400/20"
      >
        Made with Tailwind CSS
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="ml-.5 h-4 w-4 transform rotate-45">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 11l5-5m0 0l5 5m-5-5v12"
          />
        </svg>
      </a>
    </header>

    <section>
      <div class="px-16">
        <h2 class="mb-3 text-3xl font-semibold tracking-tight">Apple TV+</h2>
        <p class="copy">
          Apple uses CSS
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap/Basic_concepts">Scroll Snap</a> for
          the sliding part.
        </p>
      </div>

      <ul>
        <li>
          <div>
            <a href="">
              <div>

              </div>
            </a>
          </div>
        </li>
      </ul>
    </section>

    <section>
      <div class="px-16">
        <h2 class="mb-3 text-3xl font-semibold tracking-tight">Disney+</h2>
        <p class="copy">
          Disney+ uses the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/float">float</a> CSS property
          to position the thumbnails. The container is moved with a CSS <code>transform</code> and the value is computed
          via JavaScript.
        </p>
      </div>

      <div class="overflow-x-hidden px-16">
        <div class="relative block mb-4">
          <button
            class="absolute top-0 left-0 block cursor-pointer w-16 h-full opacity-0 z-10 -translate-x-full transition-opacity duration-200 hover:opacity-100"
            @click="disneyCurrentSlide = disneyCurrentSlide === 0 ? 0 : disneyCurrentSlide - 1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline h-10 w-10 text-gray-50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div
            ref="disneyContainer"
            class="relative -mx-2.5"
          >
            <ul
              class="relative top-0 left-0 transition-transform duration-300 before:content-[''] before:table after:content-[''] after:table after:clear-both"
              :style="{
              width: `${disneyListWidth}px`,
              transform: `translateX(${(disneyCurrentSlide - 1) * disneyContainerWidth * -1}px)`
            }"
            >
              <li
                v-for="(thumbnail, index) in thumbnails"
                class="block float-left h-full p-2.5 transition-opacity duration-300"
                :class="{ 'opacity-50': index < disneyCurrentSlide * disneyColumnsCount - disneyColumnsCount || index >= disneyCurrentSlide * disneyColumnsCount }"
                :style="{ width: `${disneyThumbnailWidth}px` }"
              >
                <div>
                  <div class="inline-block w-full">
                    <a
                      class="
                        relative block rounded shadow cursor-pointer transition-transform duration-300 hover:scale-105
                        after:content-[''] after:absolute after:inset-0 after:border-4 after:border-transparent after:rounded after:transition-colors after:duration-300 after:ease-out hover:after:border-white
                      "
                      href="#"
                    >
                      <div class="relative pt-[56.25%] w-full h-0 rounded overflow-hidden">
                        <div>
                          <img
                            class="absolute block inset-0 w-full h-full object-cover "
                            :src="thumbnail.image"
                          >
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <button
            class="absolute top-0 right-0 block cursor-pointer w-16 h-full opacity-0 z-10 translate-x-full transition-opacity duration-200 hover:opacity-100"
            @click="disneyCurrentSlide++"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline h-10 w-10 text-gray-50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>

    <section>
      <div class="px-16">
        <h2 class="mb-3 text-3xl font-semibold tracking-tight">Netflix</h2>
      </div>


    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    thumbnails: [
      { image: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C2BDF5663179A6391FCD1381751965A9DA82E693614AE31F1F069D48189327A5/scale?width=800&aspectRatio=1.78&format=jpeg' },
      { image: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B59C9DABB845805F6FCCBF526244E2575F6AA46BC0EFDB5B73EA65E32BBAFD52/scale?width=800&aspectRatio=1.78&format=jpeg' },
      { image: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49BF3100AB1F44322C70FEAC5E21552721E65E59FF02A83B461E1A52E20A3A5E/scale?width=800&aspectRatio=1.78&format=jpeg' },
      { image: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C64B81921DF04A82B499881F99AA0D94AFBEA0FC07CCED5084198ADF114D6045/badging?width=800&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal' },
      { image: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C44B7FBB43927B84D6D273771ED2736E53143AE87CB9CB094FD26256B79FC50E/scale?width=800&aspectRatio=1.78&format=jpeg' },
      { image: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A6B98C5A8F8CF619AC90181881D5CC6B54A06E78E44E54F1E3C4FAA22851ABB2/badging?width=800&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal' },
      { image: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C5994E0DD8CFC58F845BAEF593680F79E4BA34928C44F23F8C26C21D878624E1/badging?width=800&aspectRatio=1.78&format=jpeg&label=stargeneric' },
      { image: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AEF537217E0E4601DE64ED5AEB4045628A1FFE81E98D7734C38574A663DB793C/badging?width=800&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal' },
      { image: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E4A4C6BD5F5535A8C4A473E22E6A0FBA50C3B866DFFEC108DACAB9598D55EF89/scale?width=800&aspectRatio=1.78&format=jpeg' },
      { image: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6E9A6E7F49813B804F205A3C907455C99F22395753008C51C6340BA1C4F93FC1/scale?width=800&aspectRatio=1.78&format=jpeg' }
    ],
    disneyCurrentSlide: 1,
    disneyColumnsCount: 4,
    disneyContainerWidth: 'auto',
    disneyListWidth: 0,
    disneyThumbnailWidth: 0
  }),

  mounted() {
    this.disneyContainerWidth = this.$refs.disneyContainer.offsetWidth
    this.disneyListWidth = this.thumbnails.length * (this.disneyContainerWidth / this.disneyColumnsCount)
    this.disneyThumbnailWidth = this.disneyContainerWidth / this.disneyColumnsCount
  }
}
</script>
