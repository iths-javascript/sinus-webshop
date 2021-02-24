<template>
  <footer>
      <div class="shop">
          <h3>Shop</h3>
          <a href="">Skateboards</a>
          <a href="">Clothing</a>
          <a href="">Protective gear</a>
          <a href="">Parts</a>
          <a href=""><strong>Sale</strong></a>
      </div>

      <div class="info">
          <h3>About us</h3>
          <a href="">About us</a>
          <a href="">Delivery FAQs</a>
          <a href="">Returns policy</a>
          <a href="">Refunds</a>
          <a href="">Sustainability</a>
      </div>
      <div class="contact"></div>
      <div class="payment"></div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
    footer{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;

        background-color: $primary-clr;
        height: fit-content;
        padding: 3rem 4rem;
        color: white;
        a{
            color: white;
            text-decoration: none;
            display: block;
        }
    }
</style>