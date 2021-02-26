<template>
<section class="cart-wrapper">
  <h2>SHOPPING CART</h2>
  <section class="cart-list">
    <SmallProductCard 
    v-for="product in cartList" 
    :key="product._id" 
    :prod="product" />
    
  </section>
  
  

</section>
</template>

<script>
import SmallProductCard from "@/components/SmallProductCard.vue"
export default {
components: {
  SmallProductCard
},
computed: {
  cartList() {
    
    return Object.values(this.$store.getters.getCart).filter(item => item.amount > 0)
  }
}
}
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.cart-wrapper {
  max-width: 100rem;
  padding: 5rem 0;
  margin: 0 auto;

  h2 {
    text-align: center;
    margin-bottom: 5rem;
  }

  .cart-list {
    margin-left: 4rem;
  }
}

</style>