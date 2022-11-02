<script>
import NavBar from "@/components/NavBar.vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

export default {
  components: {
    NavBar,
  },

  setup: () => ({ v$: useVuelidate() }),

  data: () => ({
    state: null,
    form: {
      email: "",
      password: "",
    },
  }),

  validations: () => ({
    form: {
      email: { required, email },
      password: { required },
    },
  }),

  methods: {
    formValidation() {
      const { login, password } = this.$store.getters["user"];
      this.v$.$touch();
      if (login === this.form.email && password === this.form.password) {
        localStorage.setItem("isAuth", "true");
        this.$router.push({ name: "home" });
      }
    },
  },
};
</script>

<template>
  <nav-bar />
  <div class="wrapper">
    <div class="login__block" @keyup.enter="formValidation">
      <div class="form__title">Log In</div>
      <div class="email__block">
        <fa icon="fa-solid fa-at" class="form__icon" />
        <input
          v-model="form.email"
          type="text"
          name="email"
          placeholder="Your Email"
          :class="{ errorBorder: v$.form.email.$error }"
          class="login__input"
          id="login__email"
        />
      </div>
      <div class="password__block">
        <fa icon="fa-solid fa-lock" class="form__icon" />
        <input
          v-model="form.password"
          type="password"
          name="password"
          placeholder="Your Password"
          :class="{ errorBorder: v$.form.password.$error }"
          class="login__input"
          id="login__password"
        />
      </div>
      <button class="submit" id="login__submit" @click="formValidation">
        SUBMIT
      </button>
      <a href="#" class="forgot-pass">Forgot your password?</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
* {
  color: #2c2c2c;
  transition: 0.2s all ease;
}
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: relative;
  .login__block {
    background: #d0d0d0;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 420px;
    height: 420px;
    padding: 0px 33px;
    .email__block,
    .password__block {
      width: 100%;
      position: relative;
      .form__icon {
        position: absolute;
        left: 15px;
        top: 20px;
        font-size: 21px;
        color: #5255c8;
      }
      input {
        font-size: 18px;
        border-radius: 4px;
        background: #a3a3a3;
        margin: 7px 0px;
        padding: 12px 12px 12px 45px;
        outline: none;
        box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
        width: 100%;
        border: 1px solid transparent;
      }
      .errorBorder {
        border: 1px solid red;
      }
    }
  }
}
.submit {
  font-size: 14px;
  font-weight: bold;
  color: #f3f3f3;
  background: #5255c8;
  padding: 12px 30px;
  border: 1px solid #5255c8;
  border-radius: 5px;
  cursor: pointer;
  margin: 25px 0px;
  transform: translateZ(30px);
  box-shadow: 0px 7px 65px -18px #fbe59a;
  backface-visibility: hidden;
}
.submit:hover {
  background-color: #112264;
  border: 1px solid #112264;
  color: #fbe59a;
  box-shadow: none;
}
.forgot-pass {
  margin: 10px 0px 30px 0px;
  text-decoration: none;
  transform: translateZ(30px);
  backface-visibility: hidden;
}
.forgot-pass:hover {
  color: #5255c8;
}
.form__title {
  font-size: 26px;
  font-weight: bold;
  margin: 30px 0px;
  transform: translateZ(30px);
  backface-visibility: hidden;
}
.error {
  margin-left: 3px;
  color: red;
}
</style>
