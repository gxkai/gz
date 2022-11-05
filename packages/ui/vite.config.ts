import { fileURLToPath, URL } from 'url'
import * as path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from 'unocss/vite'
import DefineOptions from 'unplugin-vue-define-options/vite'
// https://vitejs.dev/config/
export default defineConfig({
  publicDir: './src/exports',
  plugins: [
    vue(),
    vueJsx(),
    Unocss(),
    DefineOptions(),
  ],
  resolve: {
    alias: {
      '@ui': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: 'lib',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'LaughingUI',
      formats: ['es', 'cjs'],
      fileName: (format) => {
        return `[name].${format}.js`
      },
    },
    rollupOptions: {
      // preserveModules: true,
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
