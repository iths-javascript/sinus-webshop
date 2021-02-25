<template>
  <article>
    <div class="img-container">
      <img :src="require(`../../assets/${product.imgFile}`)" />
    </div>
    <h3>{{ product.title }}</h3>
    <p class="shortdesc">{{ product.shortDesc }}</p>
    <p class="price">{{ product.price }} KR</p>
    <p class="rating">{{ product.rating }}</p>
  </article>
</template>

<script>
export default {
  props: {
    product: Object,
  },
};
</script>

<style scoped>
article {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: repeat(6, 55px);
  background-color: white;
  height: 327px;
  width: 245px;
}

.img-container {
  display: flex; 
  align-items: center;
  justify-content: center;
  grid-column: span 6;
  grid-row: span 4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

img {
  width: 75%;
  height: 80%;
  object-fit: cover;
  padding-top: 1.5rem;

}
</style>