import { createStore } from 'vuex'
import services from './modules/services.js'
import products from './modules/products.js'
import masters from './modules/masters.js'
import newOrder from './modules/order/newOrder.js'
import orders from './modules/order/orders.js'

export default createStore({
  state: () => ({
    defaultEmail: "root@domain.com",
    defaultPassword: "12345678",
    firstName: "Dontu",
    lastName: "Constantin",
    logged: false,
    
  }),
  getters: {
  },
  mutations: {
    loggedStatus(state) {
      state.logged = !state.logged
    },
  },
  actions: {
  },
  modules: {
    services,
    products,
    masters,
    newOrder,
    orders
  }
})
