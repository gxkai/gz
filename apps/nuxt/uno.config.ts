import { defineConfig } from 'unocss'
import { extendUnocssOptions } from '@guzh/css-preset'

export default defineConfig({
  ...extendUnocssOptions(),
  include: [
    '**.ts',
    '**.vue',
  ],
})
