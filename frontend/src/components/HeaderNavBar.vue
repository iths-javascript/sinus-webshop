<template>
  <div id="nav">
    <router-link to="/">Home/Products</router-link> |
    <router-link to="/Checkout">Checkout</router-link> |
    <router-link to="/MyAccount"
      ><img src="@/assets/useraccount.png" alt="Sign Up" height="40px"
    /></router-link>
    |
    <button @click="loginModal">Log in</button>
    |
    <router-link to="/SignUp"> Sign Up Form </router-link> |
    <img src="@/assets/shopping-bag.png" alt="Shopping Bag" height="40px" />

    <LoginModal v-if="loginStatus" @clicked="loginModal" />
  </div>
</template>

<script>
import LoginModal from "@/components/LoginModal.vue";
export default {
  components: {
    LoginModal,
  },
  data() {
    return {
      loginStatus: false,
    };
  },
  methods: {
    loginModal() {
      this.loginStatus = !this.loginStatus;
    },
  },
};
</script>

<style lang="scss" scoped>
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #9c2e8e;
    }
  }
  .text-bold {
    font-weight: bold;
  }

  .text-italic {
    font-style: italic;
  }
}
</style>