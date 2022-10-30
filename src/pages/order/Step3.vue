<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
  data: () => ({
    createOrder: false,
  }),
  methods: {
    addOrder() {
      this.createOrder = !this.createOrder;
      this.addNewOrder();
    },
    addNewOrder() {
      this.$store.commit("addNewOrder", this.$store.state.orders.newOrder);
    },
  },
};
</script>

<template>
  <nav-bar />
  <div class="order__block">
    <div class="order-page__title">
      <div class="page-title">Register new order</div>
      <div class="state__block">Step 3/3 - Finish order</div>
    </div>
    <div class="steps__block">
      <div class="thirdStep__block">
        <div class="information">
          <div class="services__information">Service</div>
          <div class="client__information">
            {{ this.$store.state.orders.newOrder.order.service }}
          </div>
        </div>
        <div class="information">
          <div class="services__information">Product</div>
          <div class="client__information">
            {{ this.$store.state.orders.newOrder.order.product }}
          </div>
        </div>
        <div class="information">
          <div class="services__information">Master</div>
          <div class="client__information">
            {{ this.$store.state.orders.newOrder.order.master }}
          </div>
        </div>
        <div class="information">
          <div class="services__information">Date/Time</div>
          <div class="client__information">
            {{
              this.$store.state.orders.newOrder.order.date +
              " " +
              this.$store.state.orders.newOrder.order.timeFrom +
              " - " +
              this.$store.state.orders.newOrder.order.timeTo
            }}
          </div>
        </div>
        <div class="information">
          <div class="services__information">Price</div>
          <div class="client__information">
            {{
              this.$store.state.orders.newOrder.order.price +
              " " +
              this.$store.state.orders.newOrder.order.money
            }}
          </div>
        </div>
        <div class="information">
          <div class="services__information">Client name</div>
          <div class="client__information">
            {{ this.$store.state.orders.newOrder.client.name }}
          </div>
        </div>
        <div class="information">
          <div class="services__information">Client phone</div>
          <div class="client__information">
            {{ this.$store.state.orders.newOrder.client.phone }}
          </div>
        </div>
        <div class="information">
          <div class="services__information">Client email</div>
          <div class="client__information">
            {{ this.$store.state.orders.newOrder.client.email }}
          </div>
        </div>
        <div class="information">
          <div class="services__information">Comments</div>
          <div class="client__information">
            {{ this.$store.state.orders.newOrder.client.comments }}
          </div>
        </div>

        <div class="button">
          <button
            type="submit"
            @click="this.$router.push({ name: 'order-2' })"
            class="form__button back"
          >
            Back
          </button>
          <button type="submit" class="form__button next" @click="addOrder">
            Create order
          </button>
        </div>
      </div>
    </div>
  </div>
  <transition name="popup">
    <div v-if="createOrder" class="wrapper">
      <div class="popup">
        <div class="popup__title">
          Order #
          {{ this.$store.state.orders.newOrder.order.orderId }} successfully
          created
        </div>
        <div class="popup__text">Would you like to do next?</div>
        <div class="popup__buttons">
          <button
            class="main-page__button"
            @click="this.$router.push({ name: 'home' })"
          >
            Go to main page
          </button>
          <button
            class="create-order__button"
            @click="this.$router.push({ name: 'order' })"
          >
            Create new order
          </button>
        </div>
      </div>
    </div>
  </transition>
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
    .thirdStep__block {
      width: 550px;
      .services__information {
        width: 50%;
        display: inline-block;
        font-size: 23px;
        line-height: 24px;
        letter-spacing: -0.03em;
        color: rgba(0, 0, 0, 0.96);
        font-weight: bold;
        margin-bottom: 50px;
      }
      .client__information {
        width: 50%;
        text-align: right;
        display: inline-block;
        font-weight: 400;
        font-size: 25px;
        line-height: 24px;
        letter-spacing: -0.03em;
        color: rgba(0, 0, 0, 0.96);
        margin-bottom: 50px;
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
  }
}
.wrapper {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  z-index: 50;
  .popup {
    background-color: #fff;
    border-radius: 15px;
    padding: 40px;
    &__title {
      font-size: 24px;
      line-height: 26px;
      text-align: center;
      letter-spacing: -0.03em;
      color: #5255c8;
    }
    &__text {
      font-size: 14px;
      line-height: 18px;
      text-align: center;
      letter-spacing: -0.02em;
      color: rgba(0, 0, 0, 0.96);
      margin: 30px 0px;
    }
    &__buttons {
      display: flex;
      justify-content: space-between;
      button {
        padding: 12px 24px;
        border-radius: 4px;
        margin: 0px 20px;
        cursor: pointer;
        transition: 0.3s all ease;
      }
      button:hover {
        box-shadow: 0px 0px 10px grey;
      }
      .main-page__button {
        color: #5255c8;
        border: 1px solid #5255c8;
        background-color: white;
      }
      .create-order__button {
        color: #fff;
        border: 1px solid #5255c8;
        background-color: #5255c8;
      }
    }
  }
}
.popup-enter-active,
.popup-leave-active {
  transition: all 0.5s ease;
}
.popup-enter-from,
.popup-leave-to {
  opacity: 0;
}
</style>
