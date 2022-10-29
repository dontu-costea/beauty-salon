<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
  data: () => ({
    showServices: true,
    showProducts: false,
    showMasters: false,
  }),
};
</script>

<template>
  <nav-bar />
  <div class="main-page__block">
    <div class="services__block">
      <div class="title__block" @click="this.showServices = !this.showServices">
        <div class="title">Services</div>
        <fa
          icon="fa-solid fa-angle-down"
          class="arrow-down"
          :class="{ rotate: showServices }"
        />
      </div>
      <div class="wrapper">
        <div v-if="showServices" class="content__block">
          <div
            class="content__item"
            v-for="item in this.$store.state.services.services"
            @click="this.$router.push({ name: 'order' })"
          >
            <img :src="item.img" alt="" />
            <div class="item__title">{{ item.name.toUpperCase() }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="products__block">
      <div class="title__block" @click="this.showProducts = !this.showProducts">
        <div class="title">Products</div>
        <fa
          icon="fa-solid fa-angle-down"
          class="arrow-down"
          :class="{ rotate: showProducts }"
        />
      </div>
      <div class="wrapper">
        <div v-if="showProducts" class="content__block">
          <div
            class="content__item"
            v-for="item in this.$store.state.products.products"
            @click="this.$router.push({ name: 'order' })"
          >
            <img :src="item.img" alt="" />
            <div class="item__title">{{ item.name.toUpperCase() }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="masters__block">
      <div class="title__block" @click="this.showMasters = !this.showMasters">
        <div class="title">Masters</div>
        <fa
          icon="fa-solid fa-angle-down"
          class="arrow-down"
          :class="{ rotate: showMasters }"
        />
      </div>
      <div class="wrapper">
        <div v-if="showMasters" class="content__block">
          <div
            class="content__item"
            v-for="item in this.$store.state.masters.masters"
            @click="this.$router.push({ name: 'order' })"
          >
            <img :src="item.img" alt="" />
            <div class="item__title">{{ item.name.toUpperCase() }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-page__block {
  width: 100%;
  min-height: 100vh;
  padding: 222px 130px 3px 130px;
  background-color: #ebe8ec;
  .products__block {
    margin: 45px 0px;
  }
  .masters__block {
    margin-bottom: 60px;
  }
  .title__block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.96);
    transition: 0.3s all ease;
    background-color: #ebe8ec;
    .title {
      font-size: 30px;
      line-height: 30px;
      letter-spacing: -0.03em;
      color: inherit;
    }
    .arrow-down {
      font-size: 20px;
      color: inherit;
      transition: 0.3s all ease;
    }
  }
  .title__block:hover {
    color: #5255c8;
  }
  .content__block {
    display: flex;
    flex-wrap: wrap;
    gap: 103px;
    .content__item {
      margin: 48px 0px 0px 0px;
      cursor: pointer;
      .item__title {
        font-size: 24px;
        line-height: 18px;
        text-align: center;
        letter-spacing: -0.02em;
        text-decoration-line: underline;
        color: rgba(0, 0, 0, 0.96);
        margin-top: 12px;
      }
    }
  }
}
.rotate {
  transform: rotate(-180deg);
}
</style>
