export default {
  state: () => ({
    defaultEmail: "root@domain.com",
    defaultPassword: "12345678",
    firstName: "Dontu",
    lastName: "Constantin",
  }),
  
  getters: {
    user: (state) => ({ login: state.defaultEmail, password: state.defaultPassword })
  }
}