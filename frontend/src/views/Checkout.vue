<template>
<section>
  <h2>CHECKOUT</h2>
  <OrderSummary class="cart-summary" />
</section>
</template>

<script>
import OrderSummary from "@/components/OrderSummary.vue"

export default {
components: {
  OrderSummary
}
}
</script>

<style  lang="scss" scoped>
@import "@/styles/_variables.scss";
</style>