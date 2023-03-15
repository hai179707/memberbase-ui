import { createRouter, createWebHistory } from 'vue-router'

import config from '@/config'

import Home from '@/pages/Home.vue'
import Resources from '@/pages/Resources.vue'
import LogIn from '@/pages/LogIn.vue'

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.resources, component: Resources },
    { path: config.routes.logIn, component: LogIn },
]

const router = createRouter({
    history: createWebHistory(),
    routes: publicRoutes
})

export default router