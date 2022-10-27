<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
  data: () => ({
    newOrder: {},
  }),
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
        <button type="submit" @click="this.$router.push({ name: 'order' })">
          Back
        </button>
        <button type="submit" @click="this.$router.push({ name: 'order-3' })">
          Next step
        </button>
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
  }
}
</style>
