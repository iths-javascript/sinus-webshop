<template>
  <div id="nav">
    <router-link to="/">Home/Products</router-link> |
    <router-link to="/Checkout">Checkout</router-link> |
    <router-link to="/MyAccount" v-if="userStatus">
      <span>ANVÄNDAREN INLOGGAD |</span>
    </router-link>

    <a v-if="userStatus === false" @click="changeLoginModalStatus">Log in |</a>

    <a>Shopping Bag</a>

    <LoginModal v-if="loginModalStatus" @closeLogin="changeLoginModalStatus" />
  </div>
</template>

<script>
import LoginModal from "@/components/LoginModal.vue";

export default {
  data() {
    return {
      loginModalStatus: false,
    };
  },

  components: {
    LoginModal,
  },

  methods: {
    changeLoginModalStatus() {
      this.loginModalStatus = !this.loginModalStatus;
    },
  },
  computed: {
    userStatus() {
      return this.$store.state.loginStatus;
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
    cursor: pointer;

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