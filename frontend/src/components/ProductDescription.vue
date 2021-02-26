<template>
  <div id="productDescription">
    <h1>{{ product.title }}</h1>
    <div class="productPhoto">
      <img :src="getImgUrl" alt="" />
    </div>
    <div class="description">{{ product.longDesc }}</div>
    <div class="price">{{ product.price }}</div>
    <div class="size">
      <p>Size</p>
      <button id="small">S</button>
      <button id="medium">M</button>
      <button id="large">L</button>
      <div class="Review"></div>
    </div>
    <div class="review">
      <p>Review</p>
      <p>1 2 3 4 5</p>
    </div>

    <button class="add">Add to cart</button>
  </div>
</template>

<script>
import { getProductById, PRODUCTID_URL } from "@/api/api.js";

export default {
  created: async function () {
    const response = await getProductById(PRODUCTID_URL, this.modalId);

    this.product = response.data;
  },

  data() {
    return {
      product: [],
    };
  },

  computed: {
    modalId() {
      return this.$store.state.productModalId;
    },
    getImgUrl() {
      return require("../assets/" + this.product.imgFile);
    },
  },

  methods: {
    // getImgUrl() {
    //   return require("../assets/" + this.product.imgFile);
    // },
  },
};
</script>

<style lang="scss">
#productDescription {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 550px;
  width: 550px;
  background-color: wheat;
}
.description {
  font-style: italic;
}
.productPhoto {
  height: 200px;
  width: 200px;
  background-color: teal;
}
.add {
  background-color: green;
  height: 40px;
  width: 100px;
}
</style>