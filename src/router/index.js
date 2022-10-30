import { createRouter, createWebHistory } from 'vue-router'
import Index from '../pages/Index.vue'
import Login from '../pages/Login.vue'
import Home from '../pages/Home.vue'
import order from '../router/modules/order.js'
import Store from '../store/index.js'

const baseRoutes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  
]
const routes = baseRoutes.concat(order);

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  if(!Store.state.user.logged && (to.name === 'home' || to.name === 'order' || to.name === 'order-2' || to.name === 'order-3')) {
    alert("You need to Log In to acces this page!");
  }
  else next();
})

export default router
