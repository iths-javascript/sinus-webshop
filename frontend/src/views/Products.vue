<template>
  <div id="product-view">
    <ProductsContainer />
    <ProductDescription v-if="modalStatus" />
  </div>
</template>

<script>
import ProductsContainer from "@/components/ProductsContainer.vue";
import ProductDescription from "@/components/ProductDescription.vue";

export default {
  computed: {
    modalStatus() {
      return this.$store.state.productModalStatus;
    },
  },
  components: {
    ProductsContainer,
    ProductDescription,
  },
};
</script>

<style>
#product-view {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>