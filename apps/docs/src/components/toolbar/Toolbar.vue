<script setup lang="ts">
import { version } from '@ui'
</script>

<template>
  <div class="bg-white dark:bg-secondary-700 px-4">
    <div class="flex justify-items-center items-center py-5">
      <a href="/" class="flex items-start">
        <div class="px-2 text-overline font-bold">UI</div>
      </a>

      <x-spacer/>

      <div class="flex items-center font-semibold text-sm">
        <div class="tracking-wide text-xs">v{{ version }}</div>
        <x-divider vertical style="height: 10px;" class="px-2"/>
        <x-link href="https://github.com/gxkai/gz" target="_blank" external>Github</x-link>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.logo-white {
  display: none;
}
html.dark .logo-white {
  display: block;
}

html.dark .logo-dark {
  display: none;
}
</style>
