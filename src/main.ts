import './assets/tailwind.css'
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import i18n from './plugins/i18n'

import { setLocale } from 'yup'
import { yupLocaleJa } from './locales/yup/yup-locale-ja'
setLocale(yupLocaleJa)

createApp(App)
  .use(i18n)
  .use(store)
  .use(router)
  .mount('#app')
