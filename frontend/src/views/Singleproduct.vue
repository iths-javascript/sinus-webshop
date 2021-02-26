<template>
  <div class="main-wrapper">
    <div class="single-wrapper">
      <section class="image-section">
        <div class="image-wrapper">
          <p>Eagle pic</p>
        </div>
        <a href="">Show all products</a>
      </section>

      <section class="product-info">
        <p>Product info</p>
        <h3>SKATEBOARD</h3>
        <div class="color-art">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div class="info-text">
          <p>- Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <p>- Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <p>- Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <button class="toCart">Add to Cart</button>
      </section>

      <section class="products">
        <p>Recommended items</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main-wrapper {
  display: flex;
  height: 1020px;
  width: 1440px;
  align-items: center;
  background-color: #3c4858;
}

.single-wrapper {
  gap: 25px;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: row;

  height: 750px;
  width: 1440px;
}
.image-section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 650px;
  /* width: 350px; */
}
.image-wrapper {
  height: 579px;
  width: 455px;
  background-color: white;
}
.product-info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 744px;
  width: 455px;
  background-color: darkgray;
}
.toCart {
  width: 100px;
  align-self: center;
}
.products {
  height: 744px;
  width: 170px;
  background-color: gray;
}
</style>