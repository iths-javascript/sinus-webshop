<template>
  <div id="crud-product-list-item">
    <section class="buttons">
      <button class="more-details">(+)</button>
      <button class="edit">Edit</button>
      <button>Delete</button>
    </section>

    <span class="title">{{ product.title }}</span>
    <span class="id">{{ product._id }}</span>
    <span class="category">{{ product.category }}</span>
    <button @click="openModal" class="display-product-btn">
      Display Modal
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    openModal() {
      this.$store.dispatch("changeProductModal", this.product._id);
    },
  },
  components: {},
  props: {
    product: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
#crud-product-list-item {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: 20% repeat(3, 20%) 20%;
  text-align: left;
  .buttons {
    grid-column: 1;
  }
  .title {
    grid-column: 2;
  }
  .id {
    grid-column: 3;
  }
  .category {
    grid-column: 4;
  }
  .display-product-btn {
    grid-column: 5;
  }
}
button,
span {
  margin: 10px 20px 10px 0px;
}
</style>