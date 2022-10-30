import { createStore } from 'vuex'
import services from './modules/services.js'
import products from './modules/products.js'
import masters from './modules/masters.js'
import orders from './modules/orders.js'
import user from './modules/user.js'

export default createStore({
  modules: {
    services,
    products,
    masters,
    orders,
    user
  }
})
