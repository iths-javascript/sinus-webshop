<template>
  <div class="main-wrapper">
    <div class="single-wrapper">
      <section class="image-section">
        <div class="image-wrapper">
          <img
            class="product-pic"
            :src="require(`@/assets/${product.imgFile}`)"
          />
        </div>
        <router-link class="show-all-link" to="/"
          >Show all products</router-link
        >
      </section>

      <section class="product-info">
        <div class="sinus-border">
          <img src="@/assets/sinus-logo-landscape.png" class="logo-img" />
        </div>
        <h3>{{ product.title }}</h3>
        <div class="color-art">
          <p>{{ product.shortDesc }}</p>
        </div>
        <div class="info-text">
          <p>- {{ product.longDesc }}</p>
        </div>
        <div class="product-info-bottom">
          <p class="price">Price: {{ product.price }}kr</p>
          <button class="toCart" @click="addToOrder(product)">
            ADD TO CART
          </button>
        </div>
      </section>

      <section class="products">
        <div class="rec-text-wrapper">
          <p class="rec-text">OTHERS ALSO LOOKED AT:</p>
        </div>
        <ProductCard
          class="rec-item"
          v-for="(product, index) in products.slice(1, 2)"
          :key="index"
          :product="product"
        />
        <ProductCard
          class="rec-item"
          v-for="(product, index) in products.slice(1, 2)"
          :key="index"
          :product="product"
        />
        <ProductCard
          class="rec-item"
          v-for="(product, index) in products.slice(1, 2)"
          :key="index"
          :product="product"
        />
      </section>
    </div>
  </div>
</template>

<script>
import ProductCard from "../components/Product/ProductCard.vue";
export default {
  components: { ProductCard },

  computed: {
    product() {
      return this.$store.getters.getProductId(this.$route.params.id);
    },
    products() {
      return this.$store.getters.getProducts;
    },
  },

  methods: {
    addToOrder(product) {
      this.$store.dispatch("addProductToOrder", product);
    },
  },
};
</script>

<style scoped>
.main-wrapper {
  display: flex;
  height: 1020px;
  width: 1440px;
  align-items: center;
  background-color: #3c4858;
}

.single-wrapper {
  gap: 25px;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: row;

  height: 750px;
  width: 1440px;
}
.image-section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 650px;
  /* width: 350px; */
}
.image-wrapper {
  height: 579px;
  width: 455px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
}
.product-pic {
  height: 526px;
  width: 419px;
}
.show-all-link {
  text-align: center;
  color: white;
  cursor: pointer;
}
.product-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 744px;
  width: 455px;
  background-color: white;
}
.sinus-border {
  display: flex;
  align-items: center;
  height: 102px;
  background-color: #9199a5;
}

.logo-img {
  width: 172px;
  height: 60px;
  padding-left: 20px;
}

h3 {
  font-family: "Bebas Neue";
  font-size: 45px;
  letter-spacing: 0.03em;
  text-align: center;
}

p {
  font-family: "Lato";
  font-size: 20px;
  font-weight: 300;
  font-style: normal;
}
.color-art,
.info-text {
  text-align: center;
}
.info-text{
  padding: 30px;
}
.product-info-bottom {
  border-top: 3px solid #c4c4c4;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 255px;
} 
.price {
  padding-left: 20px;
}

.toCart {
  width: 332px;
  height: 43px;
  align-self: center;
  font-family: "Lato";
  color: white;
  background-color: #5eb593;
  border: none;
  box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  cursor: pointer;
}

.products {
  height: 744px;
  width: 170px;
  background-color: white;
}

.products img {
  width: 170px;
  height: 164px;
}
.rec-text-wrapper{
  background-color: #c4c4c4 ;
  height: 60px;
  text-align: center;
}
.rec-text{
  font-size: 13px;
  font-weight: 400;
  padding: 15px;
}
.rec-item {
  width: 170px;
  height: 228px;
  background-color: ;
}
</style>