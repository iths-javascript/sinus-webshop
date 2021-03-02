<template>
  <div id="productDescription">
    <span class="close-image" @click="closeProductDescription">X</span>
    <h1>{{ product.title }}</h1>
    <div class="productPhoto">
    <img
        :src="getImgUrl"
        alt="product image"
        height="140px"
      />
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
import { getProductById, PRODUCTID_URL } from "@/api/get.js";

export default {
  created: async function () {
    const response = await getProductById(PRODUCTID_URL, this.modalId);
    this.product = response.data;
  },

  data() {
    return {
      show: false,
      product: [],
    };
  },

  computed: {
    modalId() {
      return this.$store.state.productModalId;
    },
    // getImgUrl(pic) {
    //   return require("../assets/" + pic);
    // },
    getImgUrl() {
      console.log(this.product.imgFile)
      return require("../assets/" + this.product.imgFile);
    },
  },

  methods: {
    closeProductDescription() {
      console.log('Close btn')
      this.$emit('close-dialog');
    },
  //   getImgUrlDescription() {
  //     console.log("Inside get img");
  //     return require("../assets/"  + this.product.imgFile);
  //   },
  },
};
</script>

<style lang="scss">
#productDescription {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  background-color:white;
  border: 1px solid black;
}
.description {
  font-style: italic;
}
.productPhoto {
  height: 200px;
  width: 200px;
  background-color: white;
}
.add {
  background-color: green;
  height: 40px;
  width: 100px;
}
.close-image{
  position: absolute;
  z-index: 999999;
  padding: 10px;
  right: 0;
  cursor: pointer;
}
</style>