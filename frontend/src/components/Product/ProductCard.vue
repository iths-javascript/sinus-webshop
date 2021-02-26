<template>
  <article>
    <div class="img-container">
      <img :src="require(`../../assets/${product.imgFile}`)" />
    </div>
    <div class="title-desc">
      <h3>{{ product.title }}</h3>
      <p class="shortdesc">{{ product.shortDesc }}</p>
    </div>
    <p class="price">{{ product.price }} KR</p>
    <div class="rating-container">
      <p class="rating">{{ product.rating }}</p>
      <img class="star" src="@/assets/Star.svg" />
    </div>
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
  /* grid-template-rows: repeat(6, 55px); */ 
  grid-template-rows: auto auto auto; 
  background-color: white;
  height: 327px;
  width: 245px;
}

.rating-container {
  display: flex;
  flex-direction: row;
  color: black;
  justify-content: center;
  align-items: center;
  gap: 5px;
  grid-row: 6;
  grid-column: 6;
}

.rating-container img {
  height: 25px;
  width: 25px;
  padding-top: 0;
  margin-right: 15px;
}

.img-container {
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: span 6;
  grid-row: span 4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.title-desc {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  grid-column: span 3;
  margin-left: 15px;
}

.title-desc h3 {
  margin-bottom: 0;
}

.shortdesc {
  margin: 0;
}

.price {
  grid-row: 6;
  grid-column: 1;
  margin-left: 15px;
}

img {
  width: 75%;
  height: 80%;
  object-fit: cover;
  padding-top: 1.5rem;
}
</style>