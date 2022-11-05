import path from 'path'
import Unocss from 'unocss/vite'

export default defineNuxtConfig({
  buildModules: ['@pinia/nuxt'],
  alias: {
    '@ui': path.resolve(__dirname, '../../packages/ui/src'),
  },
  css: [
    '@unocss/reset/tailwind.css',
    'uno.css',
  ],
  components: [{ path: '../../packages/ui/src/components', extensions: ['vue'] }],
  typescript: {
    shim: false,
  },
  vite: {
    plugins: [
      Unocss(),
    ],
    optimizeDeps: {
      exclude: ['pinia'],
    },
    resolve: {
      alias: {
        // This is at the moment necessary for a working build
        pinia: path.resolve(__dirname, './node_modules/pinia/dist/pinia.mjs'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          charset: false,
          // additionalData: '@use "@/assets/styles/global-scss-var.scss" as *;',
        },
      },
      // vite 中已集成了 postcss
      // https://vitejs.cn/config/#css-postcss
      postcss: {
        plugins: [
          require('autoprefixer')({
            overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8', '> 1%'],
            grid: false,
          }),
          require('postcss-nested'),
        ],
      },
    },
  },
})
