<template>
  <div id="nav">
    <router-link to="/">Our Products</router-link> |
    <router-link to="/MyAccount" v-if="userStatus">
      <span>ANVÄNDAREN INLOGGAD |</span>
    </router-link>
    <router-link to="/Admin">Admin</router-link> |

    <a v-if="userStatus === false" @click="changeLoginModalStatus">Log in |</a>

    <a class="shopping-cart-link" @click="changeCartStatus"
      >Shopping Cart ({{ shoppingCartLength }})</a
    >

    <ShoppingCart v-if="cartModalStatus" @closeCart="changeCartStatus" />
    <LoginModal v-if="loginModalStatus" @closeLogin="changeLoginModalStatus" />
  </div>
</template>

<script>
import LoginModal from "@/components/LoginModal.vue";
import ShoppingCart from "@/components/ShoppingCart.vue";

export default {
  data() {
    return {
      loginModalStatus: false,
      cartModalStatus: false,
    };
  },

  components: {
    LoginModal,
    ShoppingCart,
  },

  methods: {
    changeLoginModalStatus() {
      this.loginModalStatus = !this.loginModalStatus;
    },
    changeCartStatus() {
      this.cartModalStatus = !this.cartModalStatus;
    },
  },
  computed: {
    userStatus() {
      return this.$store.state.loginStatus;
    },
    shoppingCartLength() {
      return this.$store.getters.getShoppingCartLength;
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