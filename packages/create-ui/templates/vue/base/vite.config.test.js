import { defineConfig } from 'vite'
import ViteConfig from './vite.config'

// https://vitejs.dev/config/
export default defineConfig({
  ...ViteConfig,
  // https://github.com/vitest-dev/vitest
  test: {
    include: ['test/**/*.test.ts'],
    environment: 'jsdom',
    deps: {
      inline: ['@vue', '@vueuse', 'vue-demi'],
    },
  },
})
