import {createRouter, createWebHistory} from 'vue-router'
import Index from '../pages/Index.vue'
import Login from '../pages/Login.vue'
import Home from '../pages/Home.vue'
import order from '../router/modules/order.js'
import store from '../store/index.js'

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
  const credentials = JSON.parse(localStorage.getItem('isAuth'))

  window.scrollTo(0, 0);

  if (credentials || to.name == 'index' || to.name == 'login') {
    next();
  } else {
    router.push({name: 'login'})
  }
})

export default router
