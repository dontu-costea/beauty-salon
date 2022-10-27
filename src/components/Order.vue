<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
  data: () => ({
    newOrder: {
      service: "",
      product: "",
      master: "",
      date: "",
      timeFrom: "",
      timeTo: "",
      price: 0,
    },
  }),
  methods: {
    changeCallStatus(event) {
      if (event.target.value === "Hair woman") {
        this.newOrder.price = 200;
      } else if (event.target.value === "Nails") {
        this.newOrder.price = 300;
      } else if (event.target.value === "Barber") {
        this.newOrder.price = 150;
      }
    },
    formValidation() {
      if (
        this.newOrder.service &&
        this.newOrder.product &&
        this.newOrder.master &&
        this.newOrder.date &&
        this.newOrder.timeFrom &&
        this.newOrder.timeFrom
      ) {
        this.sendOrder();
        this.$router.push({ name: "order-2" });
      } else {
        alert("Enter the data correctly");
      }
    },
    sendOrder() {
      this.$store.commit("sendOrder", this.newOrder);
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
            hint
          </div>
          <div class="input__block">
            <select
              class="select"
              v-model="this.newOrder.service"
              @change="changeCallStatus($event)"
            >
              <option disabled>Select from list</option>
              <option
                v-for="service in this.$store.state.services"
                key:service.id
                :value="service.name"
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
                v-for="product in this.$store.state.products"
                key:product.id
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
              <option v-for="master in this.$store.state.masters" key:master.id>
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
            <input type="time" name="from" v-model="this.newOrder.timeFrom" />
            <input type="time" name="to" v-model="this.newOrder.timeTo" />
          </div>
        </div>

        <div class="price select__block">
          <div class="text__block">
            <span class="text__title">Price</span>
            hint
          </div>
          <div class="input__block">
            <input type="number" v-model="this.newOrder.price" readonly />
            <select name="price">
              <option value="mdl">MDL</option>
              <option value="eur">EUR</option>
              <option value="usd">USD</option>
            </select>
          </div>
        </div>

        <button type="submit" @click="formValidation">Next step</button>
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
      .text__block {
        font-size: 12px;
        line-height: 20px;
        color: rgba(0, 0, 0, 0.6);
        text-align: right;
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
        width: 300px;
        padding: 12px 15px;
      }
    }
  }
}
</style>
