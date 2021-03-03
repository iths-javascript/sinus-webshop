<template>
  <div id="shopping-cart">
    <button @click="closeCart" v-if="totalSum">X</button>
    <div v-if="totalSum">
      <ul v-for="item in uniqueCartProducts" :key="item._id">
        <ShoppingCartItem :item="item" />
      </ul>
      <p class="total">Total: {{ totalSum }}</p>
      <router-link to="/Checkout">Checkout</router-link>
    </div>
    <div v-else>
      <p>Your shopping cart is empty!</p>
    </div>
  </div>
</template>

<script>
import ShoppingCartItem from "@/components/ShoppingCartItem.vue";

export default {
  created() {
    if (!this.totalSum) {
      setTimeout(this.closeCart, 1500);
    }
  },
  components: {
    ShoppingCartItem,
  },
  computed: {
    cartProducts() {
      return this.$store.state.shoppingCart;
    },

    uniqueCartProducts() {
      return [...new Set(this.cartProducts.map((item) => item))];
    },

    totalSum() {
      return this.$store.getters.getTotalSum;
    },
  },
  methods: {
    closeCart() {
      this.$emit("closeCart");
    },
  },
};
</script>

<style lang="scss" scoped>
#shopping-cart {
  position: relative;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  animation-name: animatetop;
  animation-duration: 0.4s;
  padding: 16px;

  .total {
    border-top: 1px solid black;
  }
}

/* Add Animation */
@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
  

}
</style>