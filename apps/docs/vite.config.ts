import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import DefineOptions from 'unplugin-vue-define-options/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ui/',
  plugins: [vue(), Unocss(), vueJsx(), DefineOptions()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@ui': fileURLToPath(new URL('../../packages/ui/src', import.meta.url)),
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
})
