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
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: '' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500&family=Poppins:wght@500&display=swap'
      }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Examples of how the most popular streaming services websites could be implemented with Tailwind CSS.'
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
    tmdbApiKey: process.env.TMDB_API_KEY
  },
  target: 'static'
}
