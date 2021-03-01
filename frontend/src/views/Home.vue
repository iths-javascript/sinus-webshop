<template>
  <div class="landing-wrapper">
    <div class="landing-top">
      <section class="top-products">
        <h1>TOP-SELLING SKATEBOARDS</h1>
        <div class="top-img-wrapper">
          <!-- <div class="prod-card-left"> -->
            <Product-card class="prod-card-left"
              v-for="(product, index) in products.slice(0, 1)"
              :key="index"
              :product="product"
            />
          <!-- </div> -->
          <!-- <div class="prod-card-right"> -->
            <Product-card class="prod-card-right"
              v-for="(product, index) in products.slice(1, 2)"
              :key="index"
              :product="product"
            />
          <!-- </div> -->
        </div>
        <h3>VIEW ALL PRODUCTS</h3>
      </section>
    </div>

    <div class="landing-bottom">
      <section class="bottom-products">
        <h2>ALL PRODUCTS</h2>
        <p>Dropdown menu</p>
      </section>

      <section class="product-grid-container">
        <ProductCard
          @click.native="changeRoute(product._id)"
          v-for="(product, index) in products"
          :key="index"
          :product="product"
        />
      </section>
      <p class="progress-bar">Showing 9 out of 30 products</p>
      <button>SHOW MORE</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCard from "@/components/Product/ProductCard.vue";
export default {
  components: { ProductCard },

  computed: {
    products() {
      return this.$store.getters.getProducts;
    },
  },

methods:{
  changeRoute(id){
    this.$router.push(`/singleproduct/${id}`)
  }
},

};
</script>

<style scoped>
* {
  color: black;
}

.landing-top {
  height: 862px;
  width: 1440px;
  /* top: 84px; */
  background-image: url("../assets/BG image landing.jpg");
  margin-top: 20px;
}

.landing-top h1,
h3 {
  color: white;
}

.top-img-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
 
  
}

.prod-card-left,
.prod-card-right {
  height: 526px;
  width: 419px;
  border-radius: 5px;
  
}

.landing-bottom {
  height: 1724px;
  width: 1440px;
  background-color: #3c4858;
}

.product-grid-container {
  display: grid;
  /* display: grid; */
  gap: 20px;
  grid-template-columns: 270px 270px 270px;
  grid-auto-rows: 350px;
  /* grid-template-columns: 3;
  grid-template-rows: 3; */
  align-items: center;
  justify-content: center;
  /* row-gap: 20px;
  column-gap: 20px;  */
}

.bottom-products h2, p{
  color: white;
}

.product-grid-container > p {
  height: 327px;
  width: 245px;
  background-color: white;
}
button {
  height: 43px;
  width: 332px;
  border-radius: 5px 0px 0px 5px;
  background-color: #3c8af1;
}
</style>
