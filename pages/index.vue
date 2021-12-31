<template>
  <div>
    <header class="flex items-center justify-between px-16">
      <h1 class="text-3xl font-bold tracking-tight">Streaming services sliders</h1>

      <a
        href="https://tailwindcss.com/"
        class="flex items-center ml-4 py-1 px-3 text-xs font-medium text-sky-400 bg-sky-400/10 rounded-full hover:bg-sky-400/20"
      >
        <span>Made with <strong class="font-semibold">Tailwind CSS</strong></span>
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

    <section class="mt-12">
      <div class="mb-4 px-16 prose">
        <h2>Apple TV+</h2>
        <p>
          Apple TV+ uses CSS
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap/Basic_concepts">Scroll Snap</a> for
          the sliding part.
        </p>
      </div>

      <AppleShelfGrid
        :columnsCount="3"
        :items="appleItems"
        headline="Watch Entire Seasons"
      />
    </section>

    <section class="mt-12">
      <div class="mb-4 px-16 prose">
        <h2>Disney+</h2>
        <p>
          Disney+ uses the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/float">float</a> CSS property
          to position the thumbnails.
          The slide and the responsive columns behaviours are entirely controlled via JavaScript.
          The gap is controlled with the thumbnails padding.
          The headings and the thumbnails are separated.
        </p>
      </div>

      <DisneySlickSlider
        :columnsCount="4"
        :slides="disneySlides"
      />
    </section>

    <section class="mt-12">
      <div class="mt-4 px-16 prose">
        <h2>Netflix</h2>
      </div>


    </section>
  </div>
</template>

<script>
import AppleShelfGrid from '../components/apple/ShelfGrid'
import DisneySlickSlider from '../components/disney/SlickSlider'

export default {
  components: {
    AppleShelfGrid,
    DisneySlickSlider
  },

  data: () => ({
    disneySlides: [
      { image: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C2BDF5663179A6391FCD1381751965A9DA82E693614AE31F1F069D48189327A5/scale?width=800&aspectRatio=1.78&format=jpeg' },
      { image: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B59C9DABB845805F6FCCBF526244E2575F6AA46BC0EFDB5B73EA65E32BBAFD52/scale?width=800&aspectRatio=1.78&format=jpeg' },
      { image: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49BF3100AB1F44322C70FEAC5E21552721E65E59FF02A83B461E1A52E20A3A5E/scale?width=800&aspectRatio=1.78&format=jpeg' },
      { image: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C64B81921DF04A82B499881F99AA0D94AFBEA0FC07CCED5084198ADF114D6045/badging?width=800&aspectRatio=1.78&format=jpeg' },
      { image: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C44B7FBB43927B84D6D273771ED2736E53143AE87CB9CB094FD26256B79FC50E/scale?width=800&aspectRatio=1.78&format=jpeg' },
      { image: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A6B98C5A8F8CF619AC90181881D5CC6B54A06E78E44E54F1E3C4FAA22851ABB2/badging?width=800&aspectRatio=1.78&format=jpeg' },
      { image: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C5994E0DD8CFC58F845BAEF593680F79E4BA34928C44F23F8C26C21D878624E1/badging?width=800&aspectRatio=1.78&format=jpeg' },
      { image: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AEF537217E0E4601DE64ED5AEB4045628A1FFE81E98D7734C38574A663DB793C/badging?width=800&aspectRatio=1.78&format=jpeg' },
      { image: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E4A4C6BD5F5535A8C4A473E22E6A0FBA50C3B866DFFEC108DACAB9598D55EF89/scale?width=800&aspectRatio=1.78&format=jpeg' },
      { image: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6E9A6E7F49813B804F205A3C907455C99F22395753008C51C6340BA1C4F93FC1/scale?width=800&aspectRatio=1.78&format=jpeg' },
      { image: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2F5CDF64A71387043B6CFF400CB0CE9BB312034E235CDC2A7A95BC59893E982B/badging?width=800&aspectRatio=1.78&format=jpeg' },
      { image: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7C9BD4461D08B7F459636F6AB32E72CA594419D3C3127C3138C08C372A7D94CB/scale?width=800&aspectRatio=1.78&format=jpeg' }
    ],
    appleItems: [
      { image: 'https://is2-ssl.mzstatic.com/image/thumb/vB48H4eBprLJ-WdCBTA6cw/666x375.jpg' },
      { image: 'https://is5-ssl.mzstatic.com/image/thumb/X19Y90BV3y8hsFvF0l7Qmg/670x377.jpg' },
      { image: 'https://is4-ssl.mzstatic.com/image/thumb/L4WNJNV3nbmyAL6MQSeGuw/670x377.jpg' },
      { image: 'https://is3-ssl.mzstatic.com/image/thumb/_VWBeTzPLn6LeyUjlTaSiQ/670x377.jpg' },
      { image: 'https://is2-ssl.mzstatic.com/image/thumb/qYEYYvFXN2O4zEuCcBSbjw/670x377.jpg' },
      { image: 'https://is4-ssl.mzstatic.com/image/thumb/Iz8wdsRXYRysnRRCY0yMrA/670x377.jpg' },
      { image: 'https://is4-ssl.mzstatic.com/image/thumb/AmQ1cNEzc1DMKH25B5J9aQ/670x377.jpg' },
      { image: 'https://is5-ssl.mzstatic.com/image/thumb/HSPjQEW5mDqwAbMbbhfNOQ/670x377.jpg' },
      { image: 'https://is4-ssl.mzstatic.com/image/thumb/vWs6dt5xDhG_DjIoc-89tA/670x377.jpg' },
      { image: 'https://is4-ssl.mzstatic.com/image/thumb/UPoQbHoPte_TFJXEvKIIsw/670x377.jpg' },
      { image: 'https://is1-ssl.mzstatic.com/image/thumb/mqP1mK0HzuFhIBXsd_Q_SA/670x377.jpg' },
      { image: 'https://is2-ssl.mzstatic.com/image/thumb/SEsiWD2cTDShiJqUtRPAxg/670x377.jpg' }
    ]
  })
}
</script>
