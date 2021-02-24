<template>
  <section>
    <header>
      <router-link to="/product/OGnJwmWIBXK928wX">
        <img src="@/assets/products/Header.png" alt="Purple hoodie with sinus logo">
      </router-link>
    </header>
    <section class="products">
      <ProductCard v-for="product in fetchProducts" :key="product._id" :prod="product" />
    </section>
    
  </section>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue"


export default {
  
  name: 'Home',
  components: {
   ProductCard
  },
  computed: {
    fetchProducts() {
      return this.$store.getters.getProducts
    }
  }
}
</script>


<style lang="scss" scoped>
@import "@/styles/_variables.scss";

header {
  img {
    width: 100%;
  }
}

.products {
  display: flex;
  flex-wrap: wrap;
  max-width: 100rem;
  margin: 5rem auto;
}

</style>