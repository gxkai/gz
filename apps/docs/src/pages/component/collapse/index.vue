<script setup lang="ts">
import { XCollapse } from '@ui'
import UsageDemoCode from './usage.vue?raw'
import UsageDemo from './usage.vue'
import ExpandedDemoCode from './expanded.vue?raw'
import ExpandedDemo from './expanded.vue'

const title = 'Collapse'
const description = 'Collapse.'
const components = [XCollapse]
const demos = [{
  name: 'Usage',
  description: '',
  code: UsageDemoCode,
  component: UsageDemo,
}, {
  name: 'Expanded',
  description: '',
  code: ExpandedDemoCode,
  component: ExpandedDemo,
}]
const back = 'card'
const next = 'container'
</script>

<template>
  <document-page
    github="https://github.com/gxkai/gz/ui/blob/main/packages/docs/src/pages/component/collapse"
    :title="title"
    :description="description"
    :components="components"
    :demos="demos"
    :back="back"
    :next="next"
  />
</template>
