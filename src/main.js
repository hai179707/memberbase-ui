import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './routes'
import FontAwesomeIcon from './icons'
import store from './store'

createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
