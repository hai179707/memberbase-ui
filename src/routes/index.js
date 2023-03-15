import { createRouter, createWebHistory } from 'vue-router'

import config from '@/config'

import Home from '../pages/Home.vue'

const publicRoutes = [
    { path: config.routes.home, component: Home, props: { abc: 'adasda'} },
]

const router = createRouter({
    history: createWebHistory(),
    routes: publicRoutes
})

export default router