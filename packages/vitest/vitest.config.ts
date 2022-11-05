import { resolve } from 'path'
import { defineConfig } from 'vitest/config'
// import config from './vite.config'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from 'unocss/vite'
export default defineConfig({
  // ...config,
  plugins: [vue(), vueJsx(), Unocss()],
  resolve: {
    alias: {
      '@ui': resolve(__dirname, '../ui/src'),
      // '@ui': fileURLToPath(new URL('../ui/src', import.meta.url))
    },
  },
  test: {
    include: [
      '../ui/src/components/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
      '../pinia-store/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
      '../../apps/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
    ],
    transformMode: {
      web: [/\.[jt]sx$/],
    },
  },
})
