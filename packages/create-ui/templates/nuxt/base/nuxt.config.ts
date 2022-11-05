import { defineNuxtConfig } from 'nuxt'
import { colors } from '@gz/ui'
import icons from './icons'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    ['@gz/ui/nuxt', {
      icons,
      prefix: 'X',
      theme: {
        classPrefix: 'x-',
        colors: {
          primary: colors.emerald,
          secondary: colors.slate,
          success: colors.green,
          warning: colors.yellow,
          error: colors.red,
        },
      },
    }],
  ],
  css: ['@unocss/reset/tailwind.css', 'uno.css'],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          'tailwindcss/nesting': {},
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
})
