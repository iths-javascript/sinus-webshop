<template>
<section>
  <h2>Shopping Cart</h2>
  <SmallProductCard />

</section>
</template>

<script>
import SmallProductCard from "@/components/SmallProductCard.vue"
export default {
components: {
  SmallProductCard
}
}
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
</style>