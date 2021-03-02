<template>
  <div id="productDescription">
    <div id="innerBox">
      <div class="product-image-box">
        <img :src="getImgUrl" alt="product image" height="400px" />
      </div>
      <div class="product-decription-box">
        <table>
          <tr id="title">{{ product.title }}</tr>
          <tr class="description">{{ product.longDesc }}</tr>
          <tr class="price">{{ product.price }} sek</tr>
          <tr class="size"></tr>
          <tr class="Review"></tr>

          <button class="add centered">Take my money</button>
        </table>  
      </div>
      <span class="close-image" @click="handleClick">X</span>
    <div>
  </div>
  </div>
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
      // console.log(this.product.imgFile);
      // return require("../assets/" + this.product.imgFile);
      return require("../assets/skateboard-generic.png");
    },
  },

  methods: {
    handleClick: function () {
      this.$store.commit("changeProductModalStatus");
    },
  },
};
</script>

<style lang="scss">

table {
  border-collapse: collapse;
  width: 100%;
}
tr {
// border: 1px solid #ddd;
  text-align: left;
}
.centered {
    float: none;
    margin: 0 auto;
    text-align: center;
    vertical-align: middle;
    align-items: center
}

#productDescription {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 1440px;
  height:900px;
  left: -8px;
  top: 0px;
  background-color:rgba(0, 0, 0, 0.85);
  
}

#innerBox{
  display: flex;
  background-color:white;
  width: 768px;
  height: 508px;
}

.product-image-box {

}

.product-decription-box {
  margin-top: 2rem;
}

.description {
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 150%;
/* or 24px */

color: rgba(0, 0, 0, 0.6);

}
.productPhoto {
width: 356px;
height: 507px;
left: 46px;
top: 33px;
}
.add { 
width: 202px;
height:48px;
background-color: black;
color: white;
}
.close-image {
  z-index: 999999;
  padding: 10px;
  color: #000;
  cursor: pointer;
}
#title{
font-family: Open Sans;
font-style: normal;
font-weight: bold;
font-size: 32px;
line-height: 44px;
padding-bottom: 2rem !important;
}
.price{
font-style: normal;
font-weight: bold;
font-size: 26px;
line-height: 35px;
color: #000000;

}

</style>