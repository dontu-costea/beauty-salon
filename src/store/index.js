import { createStore } from 'vuex'

export default createStore({
  state: () => ({
    defaultEmail: "root@domain.com",
    defaultPassword: "12345678",
    firstName: "Dontu",
    lastName: "Constantin",
    logged: false,
    services: [
      {
        id: 1,
        name: 'Hair woman',
        img: require('@/img/services-img/hair-woman.png'),
      },
      {
        id: 2,
        name: 'Nails',
        img: require('@/img/services-img/nails.png'),
      },
      {
        id: 3,
        name: 'Barber',
        img: require('@/img/services-img/barber.png'),
      },
      {
        id: 4,
        name: 'Nails',
        img: require('@/img/services-img/nails.png'),
      },
      {
        id: 5,
        name: 'Barber',
        img: require('@/img/services-img/barber.png'),

      },
      {
        id: 6,
        name: 'Nails',
        img: require('@/img/services-img/nails.png'),
      },
      {
        id: 7,
        name: 'Nails',
        img: require('@/img/services-img/nails.png'),
      },
      {
        id: 8,
        name: 'Barber',
        img: require('@/img/services-img/barber.png'),

      },
      {
        id: 9,
        name: 'Barber',
        img: require('@/img/services-img/barber.png'),
      },
      {
        id: 10,
        name: 'Nails',
        img: require('@/img/services-img/nails.png'),
      },
      {
        id: 11,
        name: 'Barber',
        img: require('@/img/services-img/barber.png'),
      }
    ],
    products: [
      {
        id: 1,
        name: 'Hair dye',
        img: require('@/img/services-img/hair-woman.png'),
      },
      {
        id: 2,
        name: 'Hand cream',
        img: require('@/img/services-img/nails.png'),
      },
      {
        id: 3,
        name: 'Face cream',
        img: require('@/img/services-img/barber.png'),
      },
      {
        id: 4,
        name: 'Product',
        img: require('@/img/services-img/nails.png'),
      },
      {
        id: 5,
        name: 'Product',
        img: require('@/img/services-img/barber.png'),
      },
      {
        id: 6,
        name: 'Product',
        img: require('@/img/services-img/nails.png'),
      },
      {
        id: 7,
        name: 'Product',
        img: require('@/img/services-img/nails.png'),
      },
      {
        id: 8,
        name: 'Product',
        img: require('@/img/services-img/barber.png'),
      },
      {
        id: 9,
        name: 'Product',
        img: require('@/img/services-img/barber.png'),
      },
      {
        id: 10,
        name: 'Product',
        img: require('@/img/services-img/nails.png'),
      },
      {
        id: 11,
        name: 'Product',
        img: require('@/img/services-img/barber.png'),
      }
    ],
    masters: [
      {
        id: 1,
        name: 'Ana Maria',
        img: require('@/img/services-img/hair-woman.png'),
      },
      {
        id: 2,
        name: 'Ion Creanga',
        img: require('@/img/services-img/nails.png'),
      },
      {
        id: 3,
        name: 'Mihai Eminescu',
        img: require('@/img/services-img/barber.png'),
      },
      {
        id: 4,
        name: 'Vasile Alexandri',
        img: require('@/img/services-img/nails.png'),
      },
      {
        id: 5,
        name: 'Master',
        img: require('@/img/services-img/barber.png'),
      },
      {
        id: 6,
        name: 'Master',
        img: require('@/img/services-img/nails.png'),
      },
      {
        id: 7,
        name: 'Master',
        img: require('@/img/services-img/nails.png'),
      },
      {
        id: 8,
        name: 'Master',
        img: require('@/img/services-img/barber.png'),
      },
      {
        id: 9,
        name: 'Master',
        img: require('@/img/services-img/barber.png'),
      },
      {
        id: 10,
        name: 'Master',
        img: require('@/img/services-img/nails.png'),
      },
      {
        id: 11,
        name: 'Master',
        img: require('@/img/services-img/barber.png'),
      }
    ],
    newOrder: {
      order: {},
      client: {}
    }
  }),
  getters: {
  },
  mutations: {
    loggedStatus(state) {
      state.logged = !state.logged
    },
    sendOrder(state, payload) {
      state.newOrder.order = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
