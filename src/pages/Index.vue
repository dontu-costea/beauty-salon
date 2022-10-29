<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>
<template>
  <nav-bar />
  <div class="public-page__block">
    <span>This is a Public page</span>
  </div>
</template>

<style lang="scss" scoped>
.public-page__block {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: bold;
  text-shadow: 5px 5px 10px grey;
}
</style>
