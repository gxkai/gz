import { resolve } from 'path'
import type { StorybookConfig } from '@storybook/vue3-vite'
import Unocss from 'unocss/vite'

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../../packages/ui/src/components/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  features: {
    interactionsDebugger: true,
    buildStoriesJson: true,
  },
  framework: '@storybook/vue3-vite',
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  viteFinal(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@ui': resolve(__dirname, '../../../packages/ui/src'),
    }

    config.plugins = config.plugins ?? []
    config.plugins.push(
      Unocss(),
    )

    // return the customized config
    return config
  },
}

export default config
