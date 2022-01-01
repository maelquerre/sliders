<template>
  <div class="py-4 md:py-8">
    <header class="flex items-center justify-between px-4 md:px-16">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8 text-sky-400 md:hidden"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
        />
      </svg>
      <h1 class="hidden text-3xl font-bold tracking-tight md:block">Streaming services sliders</h1>

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
      <div class="mb-4 px-4 prose md:px-16">
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

      <div class="px-4 prose max-w-none md:px-16 md:columns-2">
        <h3>Container</h3>
        <p>

        </p>

        <h3>Children</h3>
        <p>

        </p>

        <h3>Responsive</h3>
        <p>

        </p>

        <h3>Naming</h3>
        <table>
          <tbody>
            <tr>
              <td>Container</td>
              <td><code>.shelf-grid</code></td>
            </tr>
            <tr>
              <td>List</td>
              <td><code>.shelf-grid__list</code></td>
            </tr>
            <tr>
              <td>Children</td>
              <td><code>.shelf-grid__list-item</code></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="mt-12">
      <div class="mb-4 px-4 prose md:px-16">
        <h2>Disney+</h2>
      </div>

      <DisneySlickSlider
        :columnsCount="5"
        :slides="disneySlides"
      />

      <div class="px-4 prose max-w-none md:px-16 md:columns-2 md:gap-x-12">
        <h3>Sliding</h3>
        <p>
          The container takes the width of all the children combined. It is computed via JavaScript
          and expands beyond the viewport. The sliding behavior is controlled with JavaScript and is
          only triggerable with the arrow buttons.
        </p>

        <h3>Positioning</h3>
        <p>
          The children are positioned with the <code>float</code> CSS property.
          The gap is controlled with the children padding. This padding also allows for the thumbnails
          to scale when hovering them.
        </p>

        <h3>Responsive</h3>
        <p>
          There is only one type of row. The columns are computed via JavaScript.
        </p>
        <table>
          <thead>
            <tr>
              <th>Breakpoint prefix</th>
              <th>Minimum width</th>
              <th>Columns count</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>None</td>
              <td>0</td>
              <td>2</td>
            </tr>
            <tr>
              <td><code>lg</code></td>
              <td>1024px</td>
              <td>3</td>
            </tr>
            <tr>
              <td><code>xl</code></td>
              <td>1280px</td>
              <td>4</td>
            </tr>
            <tr>
              <td><code>2xl</code></td>
              <td>1536px</td>
              <td>5</td>
            </tr>
          </tbody>
        </table>

        <h3>Naming</h3>
        <table>
          <tbody>
            <tr>
              <td>Container</td>
              <td><code>.slick-slider</code></td>
            </tr>
            <tr>
              <td>List</td>
              <td><code>.slick-list</code></td>
            </tr>
            <tr>
              <td>Children</td>
              <td><code>.slick-slide</code></td>
            </tr>
          </tbody>
        </table>
      </div>
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
      { image: 'https://is2-ssl.mzstatic.com/image/thumb/qYEYYvFXN2O4zEuCcBSbjw/670x377.jpg' },
      { image: 'https://is5-ssl.mzstatic.com/image/thumb/X19Y90BV3y8hsFvF0l7Qmg/670x377.jpg' },
      { image: 'https://is4-ssl.mzstatic.com/image/thumb/L4WNJNV3nbmyAL6MQSeGuw/670x377.jpg' },
      { image: 'https://is2-ssl.mzstatic.com/image/thumb/vB48H4eBprLJ-WdCBTA6cw/666x375.jpg' },
      { image: 'https://is3-ssl.mzstatic.com/image/thumb/_VWBeTzPLn6LeyUjlTaSiQ/670x377.jpg' },
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
