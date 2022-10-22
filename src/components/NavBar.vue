<script></script>
<template>
  <div class="container">
    <nav class="nav-bar">
      <div class="logo__block">
        <img
          src="@/img/logo.png"
          alt=""
          class="logo"
          @click="this.$router.push({ name: 'publicPage' })"
        />
        <div class="logo__title">
          <button
            type="submit"
            class="link"
            @click="this.$router.push({ name: 'publicPage' })"
          >
            PowerBeauty
          </button>
          Beauty is our duty
        </div>
      </div>
      <div class="menu__block">
        <ul class="menu">
          <li>
            <button
              @click="this.$router.push({ name: 'main' })"
              type="submit"
              class="menu__item menu__item-hover"
            >
              Main
            </button>
          </li>
          <li>
            <button
              @click="this.$router.push({ name: 'order' })"
              type="submit"
              class="menu__item menu__item-hover"
            >
              Order
            </button>
          </li>
        </ul>
        <div class="vertical__line"></div>
        <div class="login__block">
          <div class="avatar">
            <fa class="avatar__icon" icon="fa-solid fa-user" />
          </div>
          <button
            v-if="this.$store.state.logged === false"
            @click="this.$router.push({ name: 'login' })"
            type="submit"
            class="menu__item menu__item-hover"
          >
            Log In
          </button>
          <div class="menu__item no-padding-right" v-else>
            <div class="username menu__item-hover">
              {{
                this.$store.state.firstName + " " + this.$store.state.lastName
              }}
              <fa icon="fa-solid fa-angle-down" class="log-out__icon" />
            </div>
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
    .logo {
      cursor: pointer;
    }
    .link {
      color: inherit;
      display: block;
      font-size: 34px;
      line-height: 43px;
      cursor: pointer;
      background: none;
      border: none;
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
        cursor: pointer;
        background: none;
        .username {
          border: 2px solid transparent;
          transition: 0.3s all ease;
        }
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
      .log-out__icon {
        margin-left: 6px;
      }
    }
    .no-padding-right {
      padding-right: 0px;
    }
  }
}
</style>
