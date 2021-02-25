<template>
  <div id="product-holder">
    <ProductsItemHolder
      v-for="(item, index) in products"
      :key="index"
      :title="item.title"
      :price="item.price"
      :img="item.imgFile"
    />
  </div>
</template>

<script>
import { get, PRODUCTS_URL } from "@/api/api.js";
import ProductsItemHolder from "@/components/ProductsItemHolder.vue";

export default {
  components: {
    ProductsItemHolder,
  },
  created: async function () {
    const response = await get(PRODUCTS_URL);

    this.products = response.data;

    console.log(response.data);
  },
  data() {
    return {
      products: [],
    };
  },
};
</script>

<style lang="scss" scoped>
#product-holder {
  display: flex;
}
</style>