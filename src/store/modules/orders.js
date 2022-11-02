export default {
  state: () => ({
    newOrder: {
      order: {},
      client: {}
    },
    orders: []
  }),

  mutations: {
    addNewOrder(state) {
      let order = Object.assign({}, state.newOrder);
      state.orders.push(order)
    },
    sendOrder(state, payload) {
      state.newOrder.order = payload
    },
    sendClientInformation(state, payload) {
      state.newOrder.client = payload
    },
  },

  getters: {
    orders: (state) => state.orders,
    order: (state) => state.newOrder.order,
    client: (state) => state.newOrder.client,
  },

  actions: {
    sendClientInformation({commit}, payload) {
      commit("sendClientInformation", payload);
    },
    sendOrder({commit}, payload) {
      commit("sendOrder", payload);
    },
    addNewOrder({commit}) {
      commit("addNewOrder");
    },
  }
}