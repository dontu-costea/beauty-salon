export default {
  state: () => ({
    orders: []
  }),
  mutations: {
    addNewOrder(state, payload) {
      let order = Object.assign({}, payload);
      state.orders.push(order)
    }
  },
}