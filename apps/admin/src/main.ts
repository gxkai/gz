import { createApp } from 'vue'
import { createPinia } from 'pinia'
import UI, { colors } from '@guzh/ui'
import App from './App.vue'
// import router from './router'
// css
import './assets/base.css'
import 'uno.css'

import icons from './icons'
import { Core } from '@guzh/core'
import { Auth } from '@guzh/auth'
import { createWebHistory, createRouter } from 'vue-router'

const app = createApp(App)
const store = createPinia()
const router = createRouter({
  history: createWebHistory(),
  routes: [],
})
const core = new Core({ router, store, app })

const init = async () => {
  core.registerBatch([Auth])
  app.use(UI, {
    prefix: 'X',
    icons,
    theme: {
      classPrefix: 'x-',
      colors: {
        primary: colors.emerald,
        secondary: colors.slate,
        success: colors.green,
        warning: colors.yellow,
        error: colors.red,
      },
    },
  })
  app.use(store)
  app.use(router)
  app.mount('#app')
}

init()
