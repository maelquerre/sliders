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
        headline="Watch Entire Seasons"
        :movies="movies"
        grid="C"
      />

      <AppleShelfGrid
        headline="Coming Soon"
        :movies="movies"
        grid="B"
      />

      <div class="px-4 prose max-w-none md:px-16 md:columns-2">
        <h3>Container</h3>
        <p>

        </p>

        <h3>Children</h3>
        <p>

        </p>

        <h3>Columns</h3>
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
        :movies="movies"
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

        <h3>Columns</h3>
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
              <td>—</td>
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
          <thead>
            <tr>
              <th>Element</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Container</td>
              <td><code>slick-slider</code></td>
            </tr>
            <tr>
              <td>List</td>
              <td><code>slick-list</code></td>
            </tr>
            <tr>
              <td>Children</td>
              <td><code>slick-slide</code></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="mt-12">
      <div class="mt-4 px-16 prose">
        <h2>Netflix</h2>
      </div>

      <div class="px-4 prose max-w-none md:px-16 md:columns-2 md:gap-x-12">
        <h3>Columns</h3>
        <p>
          There is only one type of row throughout the whole application. The columns are computed via JavaScript.
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
              <td>—</td>
              <td>2</td>
            </tr>
            <tr>
              <td><code>sm</code></td>
              <td>500px</td>
              <td>3</td>
            </tr>
            <tr>
              <td><code>lg</code></td>
              <td>800px</td>
              <td>4</td>
            </tr>
            <tr>
              <td><code>xl</code></td>
              <td>1100px</td>
              <td>5</td>
            </tr>
            <tr>
              <td><code>xl-2xl</code></td>
              <td>1400px</td>
              <td>6</td>
            </tr>
          </tbody>
        </table>
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

  async asyncData({ $api, store }) {
    const configurationResponse = await $api.$get('configuration')
    store.commit('tmdb/setConfiguration', configurationResponse)

    const moviesResponse = await $api.$get('movie/popular')
    const movies = moviesResponse.results

    return {
      movies
    }
  }
}
</script>
