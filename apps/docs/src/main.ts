import { createApp } from 'vue'
import UI from '@ui'
import App from './App.vue'
import router from './router'
import icons from './icons'

// global components
import CopyButton from './components/common/CopyButton.vue'
import CodeSnippet from './components/common/CodeSnippet.vue'
import MultiSnippet from './components/common/MultiSnippet.vue'
import CodePreview from './components/common/CodePreview.vue'
import DocumentPage from './components/common/DocumentPage.vue'

// css
import './assets/css/tailwind.css'
import theme from './theme'
import 'uno.css'
import '@unocss/reset/tailwind.css'
import { config } from '@/config'
const app = createApp(App)

app.use(UI, {
  prefix: 'X',
  icons,
  theme,
})

app.use(router)

app.component('CopyButton', CopyButton)
app.component('CodeSnippet', CodeSnippet)
app.component('MultiSnippet', MultiSnippet)
app.component('CodePreview', CodePreview)
app.component('DocumentPage', DocumentPage)

app.mount('#app')

// GitHub Pages redirect hack for crawler-friendly SPAs
let { redirect } = sessionStorage

delete sessionStorage.redirect
if (redirect && redirect !== location.pathname) {
  console.log(redirect)
  redirect = redirect.replace(config.basePath, '/')

  router.replace(redirect)
}
