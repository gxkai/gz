import { createApp } from 'vue'
import UI, { colors } from '@gxkai/ui'
import App from './App.vue'

// css
import './assets/base.css'

import icons from './icons'

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

app.mount('#app')
