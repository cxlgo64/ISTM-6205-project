import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './../node_modules/bulma/css/bulma.css'
import VueAxios from 'vue-axios'
import axios from 'axios'

createApp(App).use(store).use(router).use(VueAxios, axios).mount('#app')
