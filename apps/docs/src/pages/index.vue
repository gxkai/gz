<template>
  <div>
    <section class="p-4 lg:p-8 max-w-4xl xl:max-w-7xl mx-auto">
      <h2 class="text-4xl font-semibold">Getting Started</h2>
      <h1 class="text-lg my-2 text-gray-500 dark:text-gray-400">Unocss CSS UI components for Vue.js 3 / Nuxt.js 3. Build and prototype fast web applications.</h1>
      <x-divider class="mt-4 mb-8"/>

      <h3 class="text-2xl mb-4">Quickstart a new Vue 3 or Nuxt 3 project</h3>
      <p class="my-4">
        This following command will install and execute <x-link
          external
          href="https://github.com/gxkai/gz/tree/main/packages/create-ui"
          target="_blank"
          shadow
          color="primary"
        >@guzh/create-ui</x-link>, the official Gz UI project scaffolding tool. You will be presented with prompts for a number of optional features such as TypeScript.
      </p>
      <code-snippet :code="`npm init @guzh/ui`" lang="bash"/>
      <pre class="bg-slate-600 text-slate-50 text-xs mt-4 px-4 py-2 rounded-md">? Project type: › - Use arrow-keys. Return to submit.
❯   Vue 3
    Nuxt 3</pre>

      <h3 class="text-2xl mt-16 mb-4 text-gray-500">Manual guide</h3>
      <h3 class="text-2xl mb-4">1. Install via package manager</h3>
      <multi-snippet
        :snippets="[{
          label: 'npm',
          lang: 'bash',
          code: 'npm install @guzh/ui'
        }, {
          label: 'yarn',
          lang: 'bash',
          code: 'yarn add @guzh/ui'
        }, {
          label: 'pnpm',
          lang: 'bash',
          code: 'pnpm install @guzh/ui'
        }]"
      />

      <h3 class="text-2xl mt-8 mb-4">2. Setup Unocss</h3>
      <p>If you do not have Unocss  installed in your project, please see the <x-link href="https://github.com/unocss/unocss" external shadow color="primary">unocss</x-link> before proceeding.</p>
      <p class="my-4">
        Add Gz Unocss CSS preset <b>unocss.config.ts</b> to your Unocss CSS configuration file unocss.config.ts and
      </p>
      <code-snippet
        lang="js"
        :code="`// unocss.config.ts
import { defineConfig } from 'unocss'
import { extendUnocssOptions } from '@guzh/css-preset'

export default defineConfig({
  ...extendUnocssOptions(),
  include: [
    '**.ts',
    '**.vue',
  ],
})
`"
      />
      <h3 class="text-2xl mt-8 mb-4">3. Load the UI in your project</h3>
      <h4 class="text-xl mt-8 mb-4">Load on a Vue 3 project</h4>
      <code-snippet
        lang="js"
        :code="`import { createApp } from 'vue'
import UI from '@guzh/ui'

const app = createApp(App)

app.use(UI, {
  prefix: 'X',
})`"
      />
      <h4 class="text-xl mt-8 mb-4">Load on a Nuxt 3 project</h4>
      <code-snippet
        lang="js"
        :code="`import { defineNuxtConfig } from 'nuxt'
import { colors } from '@guzh/ui'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    ['@guzh/ui/nuxt', {
      prefix: 'X',
      theme: {
        colors: {
          primary: colors.emerald,
          secondary: colors.slate,
          success: colors.green,
          warning: colors.yellow,
          error: colors.red,
        },
      }
    }],
  ],
  build: {
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
})`"
      />
      <h3 class="text-2xl mt-8 mb-4">4. (optional) Load only the components you want</h3>
      <code-snippet
        lang="js"
        :code="`import { createApp } from 'vue'
import { createUI, XButton, XAlert } from '@guzh/ui'

const app = createApp(App)

const UI = createUI({
  components: [XButton, XAlert],
})

app.use(UI)`"
      />
    </section>
  </div>
</template>
