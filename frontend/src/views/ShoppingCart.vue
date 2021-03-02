<template>
<section class="cart-wrapper">
  <h2>SHOPPING CART</h2>
  <section class="flex-container" v-if="cartList.length > 0">

  
    <section class="cart-list">
      <SmallProductCard 
      v-for="product in cartList" 
      :key="product._id"
      :prod="product"
      class="item-summary"
      />
      
    </section>
    <OrderSummary class="cart-summary" />
  
  </section>
  <section v-if="cartList.length === 0"><p class="large">You currently have no items in your cart.</p></section>
</section>
</template>

<script>
import SmallProductCard from "@/components/SmallProductCard.vue"
import OrderSummary from "@/components/OrderSummary.vue"

export default {
components: {
  SmallProductCard,
  OrderSummary
},
computed: {
  cartList() {
    return this.$store.getters.getCart
  },
}
}
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.cart-wrapper {
  max-width: 100rem;
  padding: 5rem 0;
  margin: 0 auto;
  min-height: 70rem;

  .large {
    font-size: 2.2rem;
    font-weight: 700;
    text-align: center;
  }

  h2 {
    text-align: center;
    margin-bottom: 5rem;
  }

  .flex-container {
    display: flex;
    justify-content: space-between;

    .cart-list {
    margin-left: 4rem;

    .item-summary + .item-summary {
      margin-top: 3rem;
    }
  }

  .cart-summary {
    margin-right: 4rem;
  }

  }

  
}

</style>