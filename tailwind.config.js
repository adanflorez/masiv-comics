/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true
  },
  prefix: '',
  important: true,
  separator: ':',
  theme: {
    colors: {
      'default-primary': 'var(--default-primary)',
      'dark-primary': 'var(--dark-primary)',
      'default-secondary': 'var(--default-secondary)',
      'default-slate': 'var(--default-slate)',
      'dark-slate': 'var(--dark-slate)',
      'extra-dark-slate': 'var(--extra-dark-slate)',
      'default-smoke': 'var(--default-smoke)',
      'ligth-smoke': 'var(--ligth-smoke)',
      'dark-smoke': 'var(--dark-smoke)'
    },
    backgroundColor: (theme) => theme('colors'),
    fontFamily: {
      sans: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace'
      ]
    },
    fontSize: {
      base: '1.125rem',
      lg: '1.25rem',
      xl: '1.375rem',
      '2xl': '1.625rem',
      '3xl': '2.25rem',
      '5xl': '4rem'
    },
    fontWeight: {
      regular: 500,
      bold: 700
    },
    spacing: {
      1: '0.125rem',
      2: '0.25rem',
      3: '0.5rem',
      4: '1rem',
      5: '1.125rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem'
    },
    textColor: (theme) => theme('colors')
  },
  corePlugins: {},
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      // TypeScript
      'plugins/**/*.ts'
    ]
  }
};
