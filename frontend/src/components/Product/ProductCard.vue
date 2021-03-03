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
    <div v-if="isRoute" class="rating-container">
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
  computed: {
    isRoute() {
      return this.$router.path === "/singleproduct/:id" ? true : false;
    },
  },
};
</script>

<style scoped>
article {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
  background-color: white;
  height: 327px;
  width: 245px;
  overflow-y: auto;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  cursor: pointer;
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
  overflow-y: auto;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
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
