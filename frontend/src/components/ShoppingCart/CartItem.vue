<template>
  <div class="product-list">
    <div class="item-info" :key="index" @click="removeFromCart(index)">
      <div class="img-container">
        <img class="imgFile" :src="require(`@/assets/${product.imgFile}`)" />
      </div>
      <section class="product-info">
        <h3 class="title">{{ product.title }}</h3>
        <p class="shortDesc">{{ product.shortDesc }}</p>
      </section>

      <p class="price">{{ product.price }} Kr</p>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    product: Object,
  }
}
</script>

<style scoped>
.img-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 120px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.cart img {
  width: 75%;
  height: 80%;
  object-fit: cover;
}
.product-list {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 250px;
  margin: 20px auto;
}
.cart .item-info {
  display: flex;
  flex-direction: row;
  float: right;
}

.cart .shortDesc {
  font-size: 9px;
  font-weight: bold;
  margin-top: 2rem;

}
.cart .title {
  margin-left: 1rem;
  font-size: 11px;
  align-items: flex-start;
  height: 20px;
}

.cart .price {
  display: flex;
  width: 10px;
  align-items: flex-end;
  justify-content: flex-end;
  font-size: 12px;
}
</style>