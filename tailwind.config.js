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
            color: theme('colors.slate.400'),
            h2: {
              marginBottom: '.5em',
              fontSize: '1.875rem',
              fontWeight: theme('fontWeight.extrabold'),
              color: theme('colors.gray.200'),
              letterSpacing: theme('letterSpacing.tight')
            },
            h3: {
              marginBottom: '.5em',
              fontSize: '1.25em',
              fontWeight: theme('fontWeight.semibold'),
              color: theme('colors.slate.200'),
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
              fontSize: '.875em',
              fontWeight: theme('fontWeight.medium'),
              color: theme('colors.slate.200'),
              '&::before, &::after': {
                content: '`'
              }
            },
            table: {},
            thead: {
              borderBottomWidth: '1px',
              borderBottomColor: theme('colors.gray.400') // /10
            },
            'thead th': {
              color: theme('colors.gray.300'),
              fontWeight: '600',
              verticalAlign: 'bottom'
            },
            'tbody tr': {
              borderBottomWidth: '1px',
              borderBottomColor: theme('colors.slate.400')
            },
            'tbody tr:last-child': {
              borderBottomColor: theme('colors.gray.400')
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
