<script>
export default {
  methods: {
    showOrder() {
      this.$store.commit("openOrder");
    },
  },
};
</script>
<template>
  <div class="line"></div>
  <div class="orders__title">Orders</div>
  <ul>
    <li v-for="order in this.$store.state.orders.orders" class="orders__list">
      <div class="order__number">
        <div>Order</div>
        <div>Nr.{{ order.order.orderId }}</div>
      </div>
      <div class="information">
        <div class="services__information">Service</div>
        <div class="client__information">{{ order.order.service }}</div>
      </div>
      <div class="information">
        <div class="services__information">Product</div>
        <div class="client__information">
          {{ order.order.product }}
        </div>
      </div>
      <div class="information">
        <div class="services__information">Master</div>
        <div class="client__information">
          {{ order.order.master }}
        </div>
      </div>
      <div class="information">
        <div class="services__information">Date/Time</div>
        <div class="client__information">
          {{
            order.order.date +
            " " +
            order.order.timeFrom +
            " - " +
            order.order.timeTo
          }}
        </div>
      </div>
      <div class="information">
        <div class="services__information">Price</div>
        <div class="client__information">
          {{ order.order.price + " " + order.order.money }}
        </div>
      </div>
      <div class="information">
        <div class="services__information">Client name</div>
        <div class="client__information">
          {{ order.client.name }}
        </div>
      </div>
      <div class="information">
        <div class="services__information">Client phone</div>
        <div class="client__information">
          {{ order.client.phone }}
        </div>
      </div>
      <div class="information">
        <div class="services__information">Client email</div>
        <div class="client__information">
          {{ order.client.email }}
        </div>
      </div>
      <div class="information">
        <div class="services__information">Comments</div>
        <div class="client__information">
          {{ order.client.comments }}
        </div>
      </div>
    </li>
  </ul>
</template>
<style lang="scss" scoped>
.line {
  width: 100%;
  height: 3px;
  background-color: white;
  box-shadow: 0px 0px 1px grey;
}
.orders__title {
  width: 100%;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  text-shadow: 0px 0px 15px grey;
  letter-spacing: 0.1em;
  margin: 80px 0px;
}
.orders__list {
  list-style: none;
  margin: 0 auto;
  width: 550px;
  .order__number {
    font-size: 30px;
    letter-spacing: 0.1em;
    color: #5255c8;
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 12px;
    padding: 8px 22px;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
}
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
</style>
