import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Login from '@/pages/Login.vue'
import Home from '@/pages/Home.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/home' },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
