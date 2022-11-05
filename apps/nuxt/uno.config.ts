import { defineConfig } from 'unocss'
import { extendUnocssOptions } from '@gz/css-preset'

export default defineConfig({
  ...extendUnocssOptions(),
  include: [
    '**.ts',
    '**.vue',
  ],
})
