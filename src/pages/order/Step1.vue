<script>
import NavBar from "@/components/NavBar.vue";
import OrderList from "@/components/OrderList.vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

export default {
  components: {
    NavBar,
    OrderList,
  },

  setup: () => ({ v$: useVuelidate() }),

  data: () => ({
    model: {
      service: "",
      product: "",
      master: "",
      date: "",
      timeFrom: "",
      timeTo: "",
      price: 0,
      money: "MDL",
      orderId: 0,
    },
    chosenService: {},
    priceToConvert: 0,
    services: [],
    products: [],
    masters: [],
  }),

  validations: () => ({
    model: {
      service: { required },
      product: { required },
      master: { required },
      date: { required },
      timeFrom: { required },
      timeTo: { required },
      price: { required },
      money: { required },
      orderId: { required },
    },
  }),

  mounted() {
    this.services = this.$store.getters["services"];
    this.products = this.$store.getters["products"];
    this.masters = this.$store.getters["masters"];
  },

  methods: {
    changeCallStatus(event) {
      this.model.service = this.chosenService.name;
      this.priceToConvert = this.chosenService.price;
      this.model.price = this.chosenService.price;
    },
    covertMoney(event) {
      if (event.target.value == "EUR") {
        this.model.price = this.priceToConvert / 19.1;
        this.numberCrop();
        this.model.money = "EUR";
      } else if (event.target.value == "USD") {
        this.model.price = this.priceToConvert / 19.23;
        this.numberCrop();
        this.model.money = "USD";
      } else {
        this.model.price = this.priceToConvert;
        this.model.money = "MDL";
      }
    },
    formValidation() {
      this.v$.$touch();
      if (!this.v$.model.$error) {
        this.addOrderId();
        this.sendOrder();
        this.$router.push({ name: "order-2" });
      }
    },
    sendOrder() {
      this.$store.dispatch("sendOrder", this.model);
    },
    addOrderId() {
      this.model.orderId = this.$store.state.orders.orders.length + 1;
    },
    numberCrop() {
      this.model.price = Math.trunc(this.model.price * 100) / 100;
    },
  },
};
</script>

<template>
  <nav-bar />
  <div class="order__block">
    <div class="order-page__title">
      <div class="page-title">Register new order</div>
      <div class="state__block">Step 1/3 - Select service</div>
    </div>
    <div class="steps__block">
      <div class="firstStep__block">
        <div class="select-service select__block">
          <div class="text__block">
            <span class="text__title">Service</span>
            <span>hint</span>
          </div>
          <div class="input__block">
            <select
              class="select"
              v-model="chosenService"
              @change="changeCallStatus($event)"
              :class="{ errorBorder: v$.model.service.$error }"
            >
              <option disabled>Select from list</option>
              <option
                v-for="service in services"
                :key="service.id"
                :value="service"
                :price="service.price"
              >
                {{ service.name }}
              </option>
            </select>
          </div>
        </div>

        <div class="select-product select__block">
          <div class="text__block">
            <span class="text__title">Product</span>
            <span>hint</span>
          </div>
          <div class="input__block">
            <select
              class="select"
              v-model="model.product"
              :class="{ errorBorder: v$.model.product.$error }"
            >
              <option disabled>Select from list</option>
              <option v-for="product in products" key:product.id>
                {{ product.name }}
              </option>
            </select>
          </div>
        </div>

        <div class="select-master select__block">
          <div class="text__block">
            <span class="text__title">Master</span>
            <span>hint</span>
          </div>
          <div class="input__block">
            <select
              class="select"
              v-model="model.master"
              :class="{ errorBorder: v$.model.master.$error }"
            >
              <option disabled>Select from list</option>
              <option v-for="master in masters" key:master.id>
                {{ master.name }}
              </option>
            </select>
          </div>
        </div>

        <div class="select-date select__block">
          <div class="text__block">
            <span class="text__title">Date</span>
            <span>hint</span>
          </div>
          <div class="input__block">
            <input
              type="date"
              class="select"
              v-model="model.date"
              :class="{ errorBorder: v$.model.date.$error }"
            />
          </div>
        </div>

        <div class="select-time select__block">
          <div class="text__block">
            <span class="text__title">Time</span>
            <span>hint</span>
          </div>
          <div class="input__block">
            <input
              type="time"
              name="from"
              v-model="model.timeFrom"
              class="select time_date"
              :class="{ errorBorder: v$.model.timeFrom.$error }"
            />
            <input
              type="time"
              name="to"
              v-model="model.timeTo"
              class="select time_date"
              :class="{ errorBorder: v$.model.timeTo.$error }"
            />
          </div>
        </div>

        <div class="price select__block">
          <div class="text__block">
            <span class="text__title">Price</span>
            <span>hint</span>
          </div>
          <div class="input__block">
            <input
              type="number"
              v-model="model.price"
              readonly
              class="select time_date"
            />
            <select
              name="price"
              class="select time_date"
              @change="covertMoney($event)"
            >
              <option disabled>Select from list</option>
              <option value="MDL">MDL</option>
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
            </select>
          </div>
        </div>

        <div class="button">
          <button type="submit" @click="formValidation" class="form__button">
            Next step
          </button>
        </div>
      </div>
    </div>
    <order-list v-if="this.$store.state.orders.orders.length" />
  </div>
</template>

<style lang="scss" scoped>
.order__block {
  width: 100%;
  min-height: 100vh;
  background-color: #ebe8ec;
  padding: 176px 89px 30px 89px;
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
    .button {
      width: 100%;
      display: flex;
      justify-content: center;
      padding-bottom: 70px;
      .form__button {
        font-size: 24px;
        line-height: 26px;
        text-align: center;
        letter-spacing: -0.03em;
        background-color: white;
        border: 1px solid transparent;
        width: 360px;
        height: 60px;
        border-radius: 242px;
        transition: 0.3s all ease;
        cursor: pointer;
      }
      .form__button:hover {
        border: 1px solid #5255c8;
        color: #5255c8;
      }
    }
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
      .time_date {
        width: 218px;
        margin-right: 16px;
      }
    }
  }
}
</style>
