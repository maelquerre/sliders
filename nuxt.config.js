export default {
  build: {
    postcss: {
      plugins: {
        'postcss-import': {},
        'tailwindcss/nesting': {},
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  },
  buildModules: [
    '@nuxt/postcss8'
  ],
  css: [
    '@/assets/css/main.css'
  ],
  head: {
    bodyAttrs: {
      class: 'text-white bg-gray-900 antialiased'
    },
    link: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: '' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500&family=Poppins:wght@500&display=swap'
      }
    ]
  },
  modules: [
    '@nuxtjs/axios'
  ],
  plugins: [
    '~/plugins/api'
  ],
  privateRuntimeConfig: {
    tmdbBaseUrl: process.env.TMDB_BASE_URL,
    tmdbApiKey: process.env.TMDB_API_KEY,
  },
  target: 'static'
}