<template>
  <div>
    <ProductDescription v-if="modalStatus" />
    <section class="crud-header">
      <button>Add New Product</button>
    </section>
    <section class="crud">
      <section class="product-list">
        <section class="list-headings">
          <h5 class="title">Title</h5>
          <h5 class="id">Product id</h5>
          <h5 class="category">Category</h5>
        </section>
        <CRUDProductListItem
          class="list-item"
          v-for="item in products"
          :key="item._id"
          :product="item"
        />
      </section>
    </section>
  </div>
</template>

<script>
import { get, PRODUCTS_URL } from "@/api/get.js";
import CRUDProductListItem from "@/components/CRUDProductListItem.vue";
import ProductDescription from "@/components/ProductDescription.vue";
export default {
  components: {
    CRUDProductListItem,
    ProductDescription,
  },
  data() {
    return {
      products: [],
    };
  },
  created: async function () {
    const response = await get(PRODUCTS_URL);

    this.products = response.data;
  },
  computed: {
    modalStatus() {
      return this.$store.state.productModalStatus;
    },
  },
};
</script>

<style lang="scss" scoped>
.list-headings {
  display: grid;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  grid-template-columns: 20% repeat(3, 20%) 20%;
  text-align: left;

  .title {
    grid-column: 2;
  }
  .id {
    grid-column: 3;
  }
  .category {
    grid-column: 4;
  }
}
.product-list > :nth-child(even) {
  background: rgb(224, 224, 224);
}
</style>