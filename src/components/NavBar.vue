<script></script>
<template>
  <div class="container">
    <nav class="nav-bar">
      <div class="logo__block">
        <a href="/" class="logo"><img src="@/img/logo.png" alt="" /></a>
        <div class="logo__title">
          <a href="/" class="link">PowerBeauty</a>
          Beauty is our duty
        </div>
      </div>
      <div class="menu__block">
        <ul class="menu">
          <li><a href="/main" class="menu__item menu__item-hover">Main</a></li>
          <li>
            <a href="/order" class="menu__item menu__item-hover">Order</a>
          </li>
        </ul>
        <div class="vertical__line"></div>
        <div class="login__block">
          <div class="avatar">
            <fa class="avatar__icon" icon="fa-solid fa-user" />
          </div>
          <a
            href="/login"
            class="menu__item menu__item-hover"
            v-if="this.$store.state.logged === false"
            >Log In</a
          >
          <div class="menu__item" v-else>
            {{ this.$store.state.firstName + " " + this.$store.state.lastName }}
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 0px 60px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 10;
}
.nav-bar {
  margin-top: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo__block {
    display: flex;
    align-items: center;
    color: #5255c8;
    font-size: 14px;
    line-height: 17px;
    .link {
      color: inherit;
      display: block;
      font-size: 34px;
      line-height: 43px;
    }
  }
  .menu__block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .menu {
      display: flex;
      justify-content: space-between;
      list-style: none;
      &__item {
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.03em;
        color: rgba(0, 0, 0, 0.6);
        padding: 6px 20px;
        transition: 0.3s all ease;
        border: 2px solid transparent;
      }
      &__item-hover:hover {
        color: #5255c8;
        border-bottom: 2px solid #5255c8;
      }
    }
    .vertical__line {
      width: 2px;
      height: 16px;
      background: rgba(0, 0, 0, 0.38);
    }
    .login__block {
      display: flex;
      align-items: center;
      .avatar {
        width: 32px;
        height: 32px;
        background: #5255c8;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 20px;
        border-radius: 50%;
        &__icon {
          color: white;
        }
      }
    }
  }
}
</style>
