<template>
  <div class="single-wrapper">
    <section class="image-section">
      <p>Eagle pic</p>
    </section>

    <section class="product-info">
      <p>Product info</p>
    </section>

    <section class="products">
      <p>Recommended items</p>
    </section>

  </div>
</template>

<script>
export default {

}
</script>

<style>
.single-wrapper{
  gap: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: #3C4858;
  height: 1020px;
}
.image-section{
  height: 450px;
  width: 350px;
 background-color: white;
}
.product-info{
  height: 450px;
  width: 350px;
  background-color: darkgray;
}
.products{
height: 450px;
width: 150px;
background-color: gray;
}


</style>