<template>

<section class="product-card">
  <router-link :to="linkToProduct">
  <section class="product-image">
    <img :src="imageFile" alt="">
  </section>
  <section class="product-details">
    <p class="product-name">{{prod.title}}</p>
    <p class="product-price">{{prod.price}} kr</p>
    <section class="product-rating">
      <p>Rating: {{randomRating}}</p>
       
    </section>
  </section>
  </router-link>
</section>

</template>

<script>
export default {
props: {
  prod: Object
},
computed: {
  imageFile() {
    return require(`@/assets/products/${this.prod.imgFile}`)
  },
  linkToProduct() {
    return `/product/${this.prod._id}`
  },
  randomRating() {
    return ((Math.random() * 5)).toFixed(1)
  }
}
}
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";



.product-card {
  width: 25rem;
  height: 37rem;
  padding: 1rem;
  
 
  a {
  text-decoration: none;
  color: black;
}

  .product-image {
    width: 100%;
    height: 30rem;
    background: linear-gradient(#fff, $off-white);
    display: grid;
    grid-template-rows: 30rem;
    place-items: end center;

    img {
      max-height: 100%;
      max-width: 90%;
    }
  }

  .product-details {
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 1.6fr 1fr;
    
  }

  .product-name {
    font-size: 1.6rem;
  }

  .product-price {
    font-size: 1.6rem;
    font-weight: 700;
    place-self: start end;
  }

  .product-rating {
    font-size: 1.2rem;
    display: flex;
  }
}
</style>