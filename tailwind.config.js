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
      'mono': ['"JetBrains Mono"', 'monospace']
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.slate[400]'),
            h2: {
              marginBottom: '.5em',
              fontSize: '1.875rem',
              fontWeight: theme('fontWeight.extrabold'),
              color: theme('colors.gray[200]'),
              letterSpacing: theme('letterSpacing.tight')
            },
            h3: {
              marginBottom: '.5em',
              fontSize: '1.25em',
              fontWeight: theme('fontWeight.semibold'),
              color: theme('colors.slate[200]'),
              letterSpacing: theme('letterSpacing.tight')
            },
            h4: {
              color: theme('colors.slate[200]')
            },
            a: {
              textDecoration: 'none',
              fontWeight: theme('fontWeight.semibold'),
              color: theme('colors.white'),
              borderBottomWidth: '1px',
              borderColor: theme('colors.sky[400]'),
              '&:hover': {
                borderBottomWidth: '2px'
              }
            },
            code: {
              fontFamily: theme('fontFamily.mono'),
              fontSize: '.875em',
              fontWeight: theme('fontWeight.medium'),
              color: theme('colors.slate[200]'),
              '&::before, &::after': {
                content: '`'
              }
            },
            thead: {
              borderBottomWidth: '1px',
              borderBottomColor: 'rgb(156 163 175 / 0.2)'
            },
            'thead th': {
              color: theme('colors.slate[200]'),
              fontWeight: '600'
            },
            'tbody tr': {
              borderBottomWidth: '1px',
              borderBottomColor: 'rgb(156 163 175 / 0.1)'
            },
            'tbody tr:last-child': {
              borderBottomWidth: '1px',
              borderBottomColor: 'rgb(156 163 175 / 0.2)'
            },
            'tbody td': {
              verticalAlign: 'middle'
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
