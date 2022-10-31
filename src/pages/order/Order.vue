<script>
import NavBar from "@/components/NavBar.vue";
import OrderList from "@/components/OrderList.vue";

//Rename to Step1
export default {
  components: {
    NavBar,
    OrderList,
  },

  data: () => ({
    //TODO rename to model
    newOrder: {
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
    priceToConvert: 0,
  }),

  methods: {
    //TODO remove event and use v-model
    changeCallStatus(event) {
      // this.chosenService();
      for (let i = 0; i < this.$store.state.services.services; i++) {
        //TODO use getters
        if (this.$store.state.services.services[i].name == event.target.value) {
          this.priceToConvert = this.$store.state.services.services[i].price;
        }
      }
      /* if (event.target.value === "Hair woman") {
        this.priceToConvert = 200;
        this.newOrder.price = this.priceToConvert;
      } else if (event.target.value === "Nails") {
        this.priceToConvert = 300;
        this.newOrder.price = this.priceToConvert;
      } else if (event.target.value === "Barber") {
        this.priceToConvert = 150;
        this.newOrder.price = this.priceToConvert;
      }*/
    },
    chosenService() {
      this.$store.commit("chosenService", this.newOrder.service);
    },
    //TODO remove event and use v-model
    checkMoney(event) {
      if (event.target.value == "EUR") {
        this.newOrder.price = this.priceToConvert / 19.1;
        this.newOrder.money = "EUR";
      } else if (event.target.value == "USD") {
        this.newOrder.price = this.priceToConvert / 19.23;
        this.newOrder.money = "USD";
      } else {
        this.newOrder.price = this.priceToConvert;
        this.newOrder.money = "MDL";
      }
    },
    formValidation() {
      // TODO use validation library
      if (
        this.newOrder.service &&
        this.newOrder.product &&
        this.newOrder.master &&
        this.newOrder.date &&
        this.newOrder.timeFrom &&
        this.newOrder.timeFrom
      ) {
        this.addOrderId();
        this.sendOrder();
        this.$router.push({ name: "order-2" });
      } else {
        alert("Enter the data correctly");
      }
    },
    sendOrder() {
      this.$store.commit("sendOrder", this.newOrder);
    },
    addOrderId() {
      //todo remove return
      return (this.newOrder.orderId =
        this.$store.state.orders.orders.length + 1);
    },
  },

  //todo computed always after data
  computed: {
    selectedService() {},
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
<!--            TODO use span-->
            hint
          </div>
          <div class="input__block">
            <select
              class="select"
              v-model="this.newOrder.service"
              @change="changeCallStatus($event)"
            >
              <option disabled>Select from list</option>
<!--             TODO don't use this in html and use getters['services'] -->
              <option
                v-for="service in $store.state.services.services"
                :key="service.id"
                :value="service.name"
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
            hint
          </div>
          <div class="input__block">
            <select class="select" v-model="this.newOrder.product">
              <option disabled>Select from list</option>
              <option
                v-for="product in this.$store.state.products.products"
                :key="product.id"
              >
                {{ product.name }}
              </option>
            </select>
          </div>
        </div>

        <div class="select-master select__block">
          <div class="text__block">
            <span class="text__title">Master</span>
            hint
          </div>
          <div class="input__block">
            <select class="select" v-model="this.newOrder.master">
              <option disabled>Select from list</option>
              <option
                v-for="master in this.$store.state.masters.masters"
                key:master.id
              >
                {{ master.name }}
              </option>
            </select>
          </div>
        </div>

        <div class="select-date select__block">
          <div class="text__block">
            <span class="text__title">Date</span>
            hint
          </div>
          <div class="input__block">
            <input type="date" class="select" v-model="this.newOrder.date" />
          </div>
        </div>

        <div class="select-time select__block">
          <div class="text__block">
            <span class="text__title">Time</span>
            hint
          </div>
          <div class="input__block">
            <input
              type="time"
              name="from"
              v-model="this.newOrder.timeFrom"
              class="select time_date"
            />
            <input
              type="time"
              name="to"
              v-model="this.newOrder.timeTo"
              class="select time_date"
            />
          </div>
        </div>

        <div class="price select__block">
          <div class="text__block">
            <span class="text__title">Price</span>
            hint
          </div>
          <div class="input__block">
            <!--<input
              type="number"
              v-model="this.newOrder.price"
              readonly
              class="select time_date"
            />-->
            <div>{{ priceToConvert }}</div>
<!--            TODO use v-model-->
            <select
              name="price"
              class="select time_date"
              @change="checkMoney()"
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
      .time_date {
        width: 218px;
        margin-right: 16px;
      }
    }
  }
}
</style>
