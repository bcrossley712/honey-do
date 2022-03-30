import '@mdi/font/css/materialdesignicons.css'
import 'bootstrap'
import vueTouch from 'vue3-touch-events'
import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import { registerGlobalComponents } from './registerGlobalComponents'
import { router } from './router'

const root = createApp(App)
registerGlobalComponents(root)

root
  .use(vueTouch)
  .use(router)
  .mount('#app')
