import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Login from '@/pages/Login.vue'
import Home from '@/pages/Home.vue'
import Contact from '@/pages/Contact.vue'
import Account from '@/pages/Account.vue'
import NotFound from '@/pages/NotFound.vue'

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
  {
    path: '/account',
    component: Account
  },
  
  {
    path: '/:pathMatch(.*)*',
    component: NotFound
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
