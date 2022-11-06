<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { setCDN, getHighlighter } from 'shiki'
import theme from './Gz-theme.json'
import { config } from '@/config'
// import theme from 'shiki/themes/github-light.json'
const props = defineProps({
  code: String,
  lang: {
    type: String,
    default: 'vue',
  },
  showCopyButton: {
    type: Boolean,
    default: true,
  },
})

setCDN(`${import.meta.env.DEV ? '/node_modules/' : config.basePath}shiki/`)
// setCDN('/')
// const version = '0.10.1'
//
// setCDN(`https://cdn.jsdelivr.net/npm/shiki-es@${version}/dist/assets/`)
// setCDN(`-`)

// const t = loadTheme('./Gz-theme.json')

const highlighter = getHighlighter({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  theme,
  // theme,
  // langs: [{
  //   id: 'ts',
  //   scopeName: 'source.ts',
  //   path: './languages/typescript.tmLanguage.json'
  // }, {
  //   id: 'vue-html',
  //   scopeName: 'text.html.vue-html',
  //   path: './languages/vue-html.tmLanguage.json'
  // }, {
  //   id: 'bash',
  //   scopeName: 'source.sh',
  //   path: './languages/bash.tmLanguage.json'
  // }, {
  //   id: 'vue',
  //   scopeName: 'source.vue',
  //   path: './languages/vue.tmLanguage.json'
  // }, {
  //   id: 'js',
  //   scopeName: 'source.js',
  //   path: './languages/javascript.tmLanguage.json'
  // }]
})

const highlighted = ref('')

onMounted(async () => {
  highlighted.value = (await highlighter).codeToHtml(props.code, { lang: props.lang })
})
</script>

<template>
  <div class="relative">
    <div v-html="highlighted"></div>
    <copy-button v-if="showCopyButton" class="!absolute top-2 right-2" :text="code"/>
  </div>
</template>

<style lang="postcss">
.shiki {
  /* font-family: 'Fira Code VF', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; */
  @apply rounded-md overflow-x-auto p-4 text-sm;

  code { font-family: 'Fira Code', monospace; }

  @supports (font-variation-settings: normal) {
    code { font-family: 'Fira Code VF', monospace; }
  }
}
</style>
