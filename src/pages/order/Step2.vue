<script>
import NavBar from "@/components/NavBar.vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, maxLength } from "@vuelidate/validators";

export default {
  components: {
    NavBar,
  },

  setup: () => ({ v$: useVuelidate() }),

  data: () => ({
    model: {
      name: "",
      phone: "+373",
      email: "",
      comments: "",
    },
  }),

  validations: () => ({
    model: {
      name: { required },
      phone: { required, min: minLength(12), max: maxLength(12) },
      email: { required, email },
    },
  }),

  methods: {
    formValidation() {
      this.v$.$touch();
      if (!this.v$.model.$error) {
        this.sendClientInformation();
        this.$router.push({ name: "order-3" });
      }
    },
    sendClientInformation() {
      this.$store.dispatch("sendClientInformation", this.model);
    },
  },
};
</script>

<template>
  <nav-bar />
  <div class="order__block">
    <div class="order-page__title">
      <div class="page-title">Register new order</div>
      <div class="state__block">Step 2/3 - Client information</div>
    </div>
    <div class="steps__block">
      <div class="secondStep__block">
        <div class="name select__block">
          <div class="text__block">
            <span class="text__title">Name</span>
            hint
          </div>
          <div class="input__block">
            <input
              v-model="this.model.name"
              type="text"
              name="name"
              class="select"
              placeholder="Your name"
              :class="{ errorBorder: v$.model.name.$error }"
            />
          </div>
        </div>

        <div class="phone select__block">
          <div class="text__block">
            <span class="text__title">Phone</span>
            hint
          </div>
          <div class="input__block">
            <input
              v-model="this.model.phone"
              type="tel"
              name="phone"
              class="select"
              placeholder="Your phone"
              :class="{ errorBorder: v$.model.phone.$error }"
            />
          </div>
        </div>

        <div class="email select__block">
          <div class="text__block">
            <span class="text__title">E-mail</span>
            hint
          </div>
          <div class="input__block">
            <input
              v-model="this.model.email"
              type="email"
              name="email"
              class="select"
              placeholder="Your E-mail"
              :class="{ errorBorder: v$.model.email.$error }"
            />
          </div>
        </div>

        <div class="comments select__block">
          <div class="text__block comments">
            <span class="text__title">Comments</span>
            hint
          </div>
          <div class="input__block">
            <textarea
              v-model="this.model.comments"
              name="comments"
              class="select"
              placeholder="Add some comments here. This field is optional"
              rows="4"
            >
            </textarea>
          </div>
        </div>

        <div class="button">
          <router-link to="/order" class="form__button back">
            Back
          </router-link>
          <button
            type="submit"
            @click="formValidation"
            class="form__button next"
          >
            Next step
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.order__block {
  width: 100%;
  min-height: 100vh;
  background-color: #ebe8ec;
  padding: 176px 89px 0px 89px;
  .order-page__title {
    display: flex;
    align-items: center;
    .page-title {
      font-size: 48px;
      line-height: 61px;
      letter-spacing: -0.05em;
      color: #5255c8;
      margin-right: 20px;
    }
    .state__block {
      font-size: 24px;
      line-height: 26px;
      letter-spacing: -0.03em;
      color: rgba(0, 0, 0, 0.96);
      background-color: #eefd77;
      text-align: center;
      padding: 8px 12px;
      height: 42px;
      border-radius: 12px;
    }
  }
  .steps__block {
    display: flex;
    justify-content: center;
    margin-top: 135px;
    .select__block {
      display: flex;
      align-items: center;
      margin-bottom: 69px;
      position: relative;
      left: 50px;
      .text__block {
        font-size: 12px;
        line-height: 20px;
        color: rgba(0, 0, 0, 0.6);
        text-align: right;
        position: absolute;
        top: 0;
        left: -60px;
      }
      .comments {
        left: -85px;
      }
      .text__title {
        font-size: 16px;
        line-height: 24px;
        display: flex;
        align-items: center;
        text-align: right;
        letter-spacing: -0.03em;
        color: rgba(0, 0, 0, 0.96);
      }
      .select {
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.03em;
        background: #fafafa;
        border: 1px solid transparent;
        border-radius: 20px;
        width: 578px;
        padding: 12px 15px;
      }
      .errorBorder {
        border: 1px solid red;
      }
    }
  }
  .button {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 70px;
    .form__button {
      font-size: 24px;
      line-height: 26px;
      text-align: center;
      letter-spacing: -0.03em;
      background-color: white;
      border: 1px solid transparent;
      height: 60px;
      border-radius: 242px;
      transition: 0.3s all ease;
      cursor: pointer;
    }
    .back {
      width: 240px;
      margin-left: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: black;
    }
    .next {
      width: 360px;
      margin-left: 20px;
    }
    .form__button:hover {
      border: 1px solid #5255c8;
      color: #5255c8;
    }
  }
}
</style>
