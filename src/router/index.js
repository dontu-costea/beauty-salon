import { createRouter, createWebHistory } from 'vue-router'
import PublicPage from '../components/PublicPage.vue'
import Login from '../components/Login.vue'
import MainPage from '../components/MainPage.vue'

const routes = [
  {
    path: '/',
    name: 'publicPage',
    component: PublicPage
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/main',
    name: 'main',
    component: MainPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
