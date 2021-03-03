<template>
  <div class="product-description">
    <div class="product-innerbox">
      <div class="product-imagebox">
        <img :src="getImgUrl" alt="product image" height="400px" />
      </div>
      <div class="product-decriptionbox">
        <table>
          <tr class="product-title">
            {{
              product.title
            }}
          </tr>
          <tr class="product-described">
            {{
              product.longDesc
            }}
          </tr>
          <tr class="product-price">
            {{
              product.price
            }}
            sek
          </tr>
          <tr class="product-size"></tr>
          <tr class="product-review"></tr>

          <button class="product-add">Take my money</button>
        </table>
      </div>
      <span class="product-closeimage" @click="handleClick">X</span>
      <div></div>
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
  align-items: center;
}

.product {
  &-description {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100vw;
    height: 900px;
    left: -8px;
    top: 0px;
    background-color: rgba(0, 0, 0, 0.85);
  }

  &-innerbox {
    display: flex;
    background-color: white;
    width: 768px;
    height: 508px;
  }

  &-decriptionbox {
    margin-top: 2rem;
  }

  &-described {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    height: 250px;
    vertical-align: middle;
    color: rgba(0, 0, 0, 0.6);
  }

  &-add {
    width: 202px;
    height: 48px;
    border-radius: 50px;
    background-color: black;
    color: white;
  }
  &-closeimage {
    z-index: 999999;
    padding: 10px;
    color: #000;
    cursor: pointer;
  }
  &-title {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 44px;
    padding-bottom: 2rem !important;
  }
  &-price {
    padding-top: 30px;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 35px;
    color: #000000;
  }
  .productPhoto {
    width: 356px;
    height: 507px;
    left: 46px;
    top: 33px;
  }
}
</style>