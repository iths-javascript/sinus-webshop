<template>
  <div class="product">
    <!-- <div class="item-info" :key="index" @click="removeFromCart(index)"> -->
    <div class="img-container">
      <img class="imgFile" :src="require(`@/assets/${product.imgFile}`)" />
    </div>
    <div class="title-desc">
      <h3 class="title">{{ product.title }}</h3>
      <p class="shortDesc">{{ product.shortDesc }}</p>
      <p class="size">Size: OneFit</p>
    </div>
    <div class="remove-group">
      <img
        class="delete"
        @click="removeProduct(product._id)"
        src="@/assets/iconfinder_delete_370086.svg"
        text="remove from cart"
      />
      <small class="remove-text">Remove from cart</small>
    </div>
    <select class="quantity-dropdown">
      <option selected>{{ product.quantity }}</option>
      <option
        v-for="index in product.quantity"
        :key="index"
        :value="product.quantity"
      >
        {{ index }}
      </option>
    </select>
    <p class="price">{{ product.price }},00 KR</p>

    <!-- </div> -->
  </div>
</template>

<script>
export default {
  methods: {
    removeProduct(id) {
      this.$store.dispatch("removeProduct", id);
    },
  },
  props: {
    product: Object,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lato:wght@300;400;700&display=swap");
.product {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(7, 25px);
  margin: 0px auto;
  background-color: whitesmoke;
  border-bottom: 1.5px solid black;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
}

.img-container {
  width: 100px;
  height: 120px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  grid-column: span 1;
  grid-row: 2 / span 6;
  background-color: #9199a5;
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.imgFile {
  width: 75%;
  height: 80%;
}

.quantity-dropdown {
  grid-column: 6;
  grid-row: 2;
  margin-right: 10px;
  color: #8f8f8f;
  background-color: -internal-light-dark(
    rgb(255, 255, 255),
    rgb(138, 138, 138)
  );
}

.item-info {
  grid-template-columns: 3;
  grid-template-rows: 1;
}

.title-desc {
  grid-column: 2;
  grid-row: 2;
  text-align: start;
  margin-left: 1rem;
  letter-spacing: 0.02em;
}
.size {
  padding-top: 10px;
  font-size: small;
}
.remove-group {
  display: flex;
  align-items: flex-end;
  grid-column: 2;
  grid-row: 6;
  margin-left: 8px;
}
.delete {
  object-fit: contain;
  height: 25px;
  opacity: 0.5;
}

.remove-text {
  font-size: 0.7rem;
  color: #8f8f8f;
}

.shortDesc {
  font-size: 15px;
  font-display: "Lato";
}
.title {
  font-family: "Bebas Neue";
  font-size: 25px;
}

.price {
  font-display: "Lato";
  grid-column: 6;
  grid-row: 6;
  font-weight: 400;
  font-size: 20px;
}
</style>
