<template>
  <div class="container">
    <div class="top">
      <img class="top-img" src="../assets/Rectangle 52.svg" />
      <!-- <p class="sinus-store">#SINUS-STORE</p> -->
    </div>
    <nav>
      <p @click="bindCategory('skateboards')">skateboards</p>
      <p @click="bindCategory('wheels')">wheels</p>
      <p @click="bindCategory('t-shirts')">t-shirts</p>
      <p @click="bindCategory('hoodies')">hoodies</p>
      <p @click="bindCategory('sneakers')">sneakers</p>
    </nav>
    <div class="main">
      <div
        class="product-container"
        v-for="image in imgFile"
        v-bind:key="image.index"
      >
        <div class="portrait">
          <img
            :src="require(`../assets/${image.imgFile}`)"
            v-on:click="singleProduct(image._id)"
          />
        </div>
        <p class="title">{{ image.title }}</p>
        <p class="description">{{ image.description }}</p>
        <p class="price">{{ image.price }} SEK</p>
        <button v-on:click="addToCart(image)">add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",

  data() {
    return {
      tab: "skateboards",
    };
  },

  computed: {
    imgFile() {
      return this.$store.state.currentProducts;
    },
  },

  methods: {
    bindCategory(category) {
      this.$store.dispatch("loadProducts", category);
    },

    singleProduct(id) {
      this.$router.push(`/single-product/${id}`);
    },

    addToCart(item) {
      this.$store.commit("storeIntoCart", item);
    },
  },

  beforeMount() {
    this.$store.dispatch("drawImage");
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Ropa+Sans&display=swap");

.container {
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  background-image: url("../assets/background-products.svg");
  background-repeat: no-repeat;
}

.top {
  width: 52.5vw;
  height: 70vh;
  background-color: #f4c3c3;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main {
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-template-rows: repeat(2, 1fr);
  grid-row-gap: 50px;
  padding-bottom: 100px;
}

nav {
  background-color: white;
  display: flex;
  margin-top: 3rem;
}

nav p {
  margin-left: 50px;
  cursor: pointer;
}

button {
  cursor: pointer;
  font-family: Ropa Sans;
  font-size: 18px;
  width: 144px;
  height: 40px;
  background-color: whitesmoke;
  color: #2b2b2b;
  border-style: none;
  box-shadow: -6px 6px #2b2b2b;
  margin: 0rem;
}

.price {
  font-family: "Ropa Sans", sans-serif;
  font-size: 24px;
  color: black;
  margin-top: 10px;
}

.title {
  font-family: "Ropa Sans", sans-serif;
  font-size: 24px;
  margin-top: 15px;
}

.description {
  font-family: "Ropa Sans", sans-serif;
  font-size: 14px;
}

.portrait {
  width: 265px;
  height: 325px;
  background-color: #cbe9ef;
  justify-content: center;
  align-items: center;
  display: flex;
}

.product-container p,
button {
  margin-right: 90px;
}

.top-img {
  position: relative;
  box-shadow: -40px 0 0 -20px #b2d1a8;
}

/* .sinus-store {
    position:relative;
    right:5rem;
    top:12rem;
    color:white;
    font-family: "Schoolbell", cursive;
    letter-spacing: 0.3rem;
    font-size:36px;
} */
</style>
