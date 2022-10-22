import { createRouter, createWebHistory } from 'vue-router'
import PublicPage from '../components/PublicPage.vue'
import Login from '../components/Login.vue'
import MainPage from '../components/MainPage.vue'
import Order from '../components/Order.vue'
import Store from '../store/index.js'

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
  },
  {
    path: '/order',
    name: 'order',
    component: Order
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if(!Store.state.logged && (to.name === 'main' || to.name === 'order')) {alert("You need to Log In to acces this page!")}
  else next();
})

export default router
