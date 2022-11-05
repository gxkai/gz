import { defineNuxtPlugin } from '#app'
import create from '../create'

export default defineNuxtPlugin((nuxtApp) => {
  const UI = create(nuxtApp.$config.gzOptions)

  nuxtApp.vueApp.use(UI)
})
