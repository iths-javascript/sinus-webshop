<template>
  <div id="product">
    <h3>{{ title }}</h3>
    <p>price: {{ price }}</p>
    <button>Add to cart</button>
    <img :src="getImgUrl(img)" alt="product image" height="80px" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    price: {
      type: Number,
    },
    img: {
      type: String,
    },
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/" + pic);
    },
  },
};
</script>

<style lang="scss" scoped>
#product {
  border: 1px black solid;
  margin-bottom: 40px;
  width: 120px;
}
</style>