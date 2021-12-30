module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
      'mono': ['"JetBrains Mono"', 'monospace'],
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.slate.400'),
            h2: {
              display: 'inline-block',
              marginBottom: '.5em',
              fontSize: theme('fontSize.3xl')[0],
              fontWeight: theme('fontWeight.extrabold'),
              color: theme('colors.gray.200'),
              letterSpacing: theme('letterSpacing.tight')
            },
            a: {
              textDecoration: 'none',
              fontWeight: theme('fontWeight.semibold'),
              color: theme('colors.white'),
              borderBottomWidth: '1px',
              borderColor: theme('colors.sky.400'),
              '&:hover': {
                borderBottomWidth: '2px'
              }
            },
            code: {
              fontFamily: theme('fontFamily.mono'),
              fontSize: theme('fontSize.sm'),
              fontWeight: theme('fontWeight.medium'),
              color: theme('colors.slate.200'),
              '&::before, &::after': {
                content: '`'
              }
            }
          }
        }
      })
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
