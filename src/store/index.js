import { createStore } from 'vuex'

export default createStore({
  state: () => ({
    defaultEmail: "root@domain.com",
    defaultPassword: "12345678",
    firstName: "Dontu",
    lastName: "Constantin",
    logged: false
  }),
  getters: {
  },
  mutations: {
    loggedStatus(state) {
      state.logged = !state.logged
    }
  },
  actions: {
  },
  modules: {
  }
})
