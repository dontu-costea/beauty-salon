export default {
  state: () => ({
    newOrder: {
      order: {},
      client: {}
    },
    orders: []
  }),
  mutations: {
    addNewOrder(state, payload) {
      let order = Object.assign({}, payload);
      state.orders.push(order)
    },
    sendOrder(state, payload) {
      state.newOrder.order = payload
    },
    sendClientInformation(state, payload) {
      state.newOrder.client = payload
    },
  },
  actions: {
    sendClientInformation(commit, payload) {
      commit("sendClientInformation", payload);
    },
  }
}