import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './routes'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
library.add(faBars, faXmark)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
