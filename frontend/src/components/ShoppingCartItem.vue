<template>
  <section id="shopping-cart-item">
    <span>{{ title }} {{ getProductAmount }}</span>
    <button @click="decrement">one less</button>
    <button @click="eraseProduct">Radera</button>
    <button @click="increment">one more</button>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    id: {
      type: String,
    },
    item: {
      type: Object,
    },
  },
  computed: {
    getProductAmount() {
      return this.$store.getters.getAmountOfProduct(this.id);
    },
  },
  methods: {
    eraseProduct() {
      this.$store.dispatch("removeProductFromCart", this.id);
    },
    increment() {
      this.$store.dispatch("addProductToCart", this.item);
    },
    decrement() {
      this.$store.dispatch("removeOneItem", this.item);
    },
  },
};
</script>

<style lang="scss" scoped>
#shopping-cart-item {
  margin-bottom: 24px;
  border-bottom: 1px solid black;
}
</style>