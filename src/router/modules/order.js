import Order from '@/pages/order/Order.vue'
import Step2 from '@/pages/order/Step2.vue'
import Step3 from '@/pages/order/Step3.vue'

export default [
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