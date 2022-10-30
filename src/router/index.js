import { createRouter, createWebHistory } from 'vue-router'
import Index from '../pages/Index.vue'
import Login from '../pages/Login.vue'
import Home from '../pages/Home.vue'
import Order from '../pages/order/Order.vue'
import Step2 from '../pages/order/Step2.vue'
import Step3 from '../pages/order/Step3.vue'
import Store from '../store/index.js'

const routes = [
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
  {
    path: '/order/',
    name: 'order',
    component: Order
  },
  {
    path: '/order-2',
    name: 'order-2',
    component: Step2
  },
  {
    path: '/order-3',
    name: 'order-3',
    component: Step3
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if(!Store.state.user.logged && (to.name === 'home' || to.name === 'order' || to.name === 'order-2' || to.name === 'order-3')) {
    alert("You need to Log In to acces this page!");
  }
  else next();
})

export default router
