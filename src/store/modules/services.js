export default {
  state: () => ({
    services: [
      {
        id: 1,
        name: 'Hair woman',
        img: require('@/assets/img/services-img/hair-woman.png'),
        price: 200
      },
      {
        id: 2,
        name: 'Nails',
        img: require('@/assets/img/services-img/nails.png'),
        price: 300
      },
      {
        id: 3,
        name: 'Barber',
        img: require('@/assets/img/services-img/barber.png'),
        price: 150
      },
      {
        id: 4,
        name: 'Nails',
        img: require('@/assets/img/services-img/nails.png'),
        price: 300
      },
      {
        id: 5,
        name: 'Barber',
        img: require('@/assets/img/services-img/barber.png'),
        price: 150
      },
      {
        id: 6,
        name: 'Nails',
        img: require('@/assets/img/services-img/nails.png'),
        price: 300
      },
      {
        id: 7,
        name: 'Nails',
        img: require('@/assets/img/services-img/nails.png'),
        price: 300
      },
      {
        id: 8,
        name: 'Barber',
        img: require('@/assets/img/services-img/barber.png'),
        price: 150

      },
      {
        id: 9,
        name: 'Barber',
        img: require('@/assets/img/services-img/barber.png'),
        price: 150
      },
      {
        id: 10,
        name: 'Nails',
        img: require('@/assets/img/services-img/nails.png'),
        price: 300
      },
      {
        id: 11,
        name: 'Barber',
        img: require('@/assets/img/services-img/barber.png'),
        price: 150
      }
    ]
  }),
  
  getters: {
    services: (state) => state.services
  }
}