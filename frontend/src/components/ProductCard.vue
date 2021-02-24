<template>

<section class="product-card">
  <router-link to="/cart">
  <section class="product-image">
    <img src="@/assets/products/skateboard-greta.png" alt="">
  </section>
  <section class="product-details">
    <p class="product-name">Name of product</p>
    <p class="product-price">999 kr</p>
    <section class="product-rating">
      <p>Rating: </p>
      <p> 4.2 </p>
    </section>
  </section>
  </router-link>
</section>

</template>

<script>
export default {

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
    place-items: center;

    img {
      height: 100%;
    }
  }

  .product-details {
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 2fr 1fr;
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