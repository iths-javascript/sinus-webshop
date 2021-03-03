<template>
  <div id="product">
    <section @click="change">
      <h3>{{ product.title }}</h3>
      <p>price: {{ product.price }}</p>
      <img
        :src="getImgUrl(product.imgFile)"
        alt="product image"
        height="240px"
      />
    </section>
    <section>
      <button @click="addToCart">Add to cart</button>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/" + pic);
    },
    change() {
      this.$store.dispatch("changeProductModal", this.product._id);

      // this.$store.commit("changeProductModalStatus");
      // this.$store.commit("changeProductModalId", this.product._id);
    },
    addToCart() {
      this.$store.dispatch("addProductToCart", this.product);
    },
  },
};
</script>

<style lang="scss" scoped>
#product {
  border: 1px black solid;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
}
</style>