<script setup lang="ts">
import { XAlert } from '@ui'
import UsageDemoCode from './usage.vue?raw'
import UsageDemo from './usage.vue'

const title = 'Alert'
const description = 'Alert.'
const components = [XAlert]
const demos = [{
  name: 'Usage',
  description: '',
  code: UsageDemoCode,
  component: UsageDemo,
}]
const back = 'toggle'
const next = 'avatar'
</script>

<template>
  <document-page
    github="https://github.com/gxkai/gz/ui/blob/main/packages/docs/src/pages/component/alert"
    :title="title"
    :description="description"
    :components="components"
    :demos="demos"
    :back="back"
    :next="next"
  />
</template>
