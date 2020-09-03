import { createApp } from 'vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import VConsole from 'vconsole'

import router from './router'
import store from './store'
import App from './App.vue'
import './assets/styles/index.css'

new VConsole()

createApp(App)
  .use(Vant)
  .use(router)
  .use(store)
  .mount('#app')
