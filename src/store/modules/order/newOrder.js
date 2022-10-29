export default {
  state: () => ({
    newOrder: {
      order: {},
      client: {}
    }
  }),
  mutations: {
    sendOrder(state, payload) {
      state.newOrder.order = payload
    },
    sendClientInformation(state, payload) {
      state.newOrder.client = payload
    }
  },
}