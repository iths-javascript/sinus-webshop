<template>
<<<<<<< HEAD
  <div id="checkout">
    <section class="header">
      <h2>Your Cart</h2>
    </section>
    <section class="information">
      <section class="items">
        <ul v-for="item in uniqueCartProducts" :key="item._id">
          <ShoppingCartItem :title="item.title" :id="item._id" :item="item" />
        </ul>
      </section>
      <section class="delivery"></section>
      <section class="payment"></section>
    </section>
    <section class="cta">
      <button>Take my Money</button>
    </section>
  </div>
</template>

<script>
import ShoppingCartItem from "@/components/ShoppingCartItem.vue";
export default {
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
  },
};
</script>

<style lang="scss" scoped>
.information {
  border-top: black 1px solid;
  min-height: 400px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
.items,
.delivery,
.payment {
  width: 33%;
  border-left: black 1px solid;
}
=======
  <div></div>
</template>

<script>
export default {

}
</script>

<style>

>>>>>>> main
</style>