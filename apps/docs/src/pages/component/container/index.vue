<script setup lang="ts">
import { XContainer } from '@ui'
import UsageDemoCode from './usage.vue?raw'
import UsageDemo from './usage.vue'

const title = 'Container'
const description = 'Container.'
const components = [XContainer]
const demos = [{
  name: 'Usage',
  description: '',
  code: UsageDemoCode,
  component: UsageDemo,
}]
const back = 'collapse'
const next = 'divider'
</script>

<template>
  <document-page
    github="https://github.com/gxkai/gz/ui/blob/main/packages/docs/src/pages/component/container"
    :title="title"
    :description="description"
    :components="components"
    :demos="demos"
    :back="back"
    :next="next"
  />
</template>
