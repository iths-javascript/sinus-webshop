<template>
  <div id="product">
    <h3>{{ title }}</h3>
    <p>price: {{ price }}</p>
    <img :src="getImgUrl(img)" alt="product image" height="240px" />
    <button>Add to cart</button>
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
  display: flex;
  flex-direction: column;
}
</style>