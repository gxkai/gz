import { createApp } from 'vue'
import { createPinia } from 'pinia'
import UI, { colors } from '@guzh/ui'
import App from './App.vue'

// css
import './assets/base.css'
import 'uno.css'

import icons from './icons'
import { config } from './config'
import Previewer from 'virtual:vue-component-preview'
import generatedRoutes from 'virtual:generated-pages'
// register vue composition api globally
import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter } from 'vue-router'
const routes = setupLayouts(generatedRoutes)

const app = createApp(App)

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
app.use(createPinia())
app.use(createRouter({
  routes, base: config.basePath,
}))
app.use(Previewer)

app.mount('#app')
