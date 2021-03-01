<template>
  <div class="product">
    <!-- <div class="item-info" :key="index" @click="removeFromCart(index)"> -->
      <div class="img-container">
        <img class="imgFile" :src="require(`@/assets/${product.imgFile}`)" />
      </div>
      <div class="title-desc">
        <h3 class="title">{{ product.title }}</h3>
        <p class="shortDesc">{{ product.shortDesc }}</p>
        </div>
      <p class="price">{{ product.price }} Kr</p>
      
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
};
</script>

<style scoped>
.product {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(7, 25px);
  margin: 0px auto;
  background-color: white;
  
}

.img-container {
  width: 100px;
  height: 120px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  grid-column: span 1;
  grid-row: 2 /span 6;
  background-color: lightgray;
}
.cart img {
  width: 75%;
  height: 80%;
}

.item-info {
  grid-template-columns: 3;
  grid-template-rows: 1;
}

.title-desc{
  grid-column: 2; 
  grid-row: 2;
  text-align: start;
}

/* .shortDesc {
  font-size: 9px;
  font-weight: bold;
  margin-top: 2rem;
}
.title {
  margin-left: 1rem;
  font-size: 11px;
  align-items: flex-start;
  height: 20px;
} */

.price {
  font-size: 12px;
  grid-column: 6;
  grid-row: 6;
}
</style>