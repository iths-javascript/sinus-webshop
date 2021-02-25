<template>
  <div>
    products shown here
    <ProductsContainer />
    <ProductDescription />
  </div>
</template>

<script>
import ProductsContainer from "@/components/ProductsContainer.vue";
import ProductDescription from "@/components/ProductDescription.vue";

export default {
  components: {
    ProductsContainer,
    ProductDescription,
  },
};
</script>

<style>
</style>