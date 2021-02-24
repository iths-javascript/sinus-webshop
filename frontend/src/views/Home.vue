<template>
  <section>
    <ProductCard />
  </section>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue"


export default {
  
  name: 'Home',
  components: {
   ProductCard
  }
}
</script>


<style lang="scss" scoped>
@import "@/styles/_variables.scss";


</style>