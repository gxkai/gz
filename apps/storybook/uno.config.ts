import { defineConfig } from 'unocss'
import { extendUnocssOptions } from '@gxkai/css-preset'

export default defineConfig({
  ...extendUnocssOptions(),
  include: [
    '**.ts',
    '**.vue',
  ],
})
