import { createApp } from 'vue'
import { Quasar } from 'quasar'
import {router} from './routes/routes.js'
import './style.css'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'
import {createPinia} from  'pinia'

import App from './App.vue'

const myApp = createApp(App)
const pinia = createPinia()

myApp.use(Quasar, {
    plugins: {},
})

myApp.use(router)

myApp.mount('#app')
myApp.use(pinia)

// createApp(App).mount('#app')