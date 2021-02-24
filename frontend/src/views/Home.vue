<template>
  <div class="landing-wrapper">
    <div class="landing-top">
      <section class="top-products">
        <h1>TOP-SELLING SKATEBOARDS</h1>
        <div class="top-img-wrapper">
          <p>Left Img</p>
          <p>Right Img</p>
        </div>
        <h3>VIEW ALL PRODUCTS</h3>
      </section>
    </div>

    <div class="landing-bottom">
      <section class="bottom-products">
        <!-- <p>Filter Section</p> -->
        <h2>ALL PRODUCTS</h2>
        <p>Dropdown menu</p>
      </section>

      <section class="product-grid-container">
        <p class="item-1">Product 1</p>
        <p class="item-2">Product 2</p>
        <p class="item-3">Product 3</p>
        <p class="item-4">Product 4</p>
        <p class="item-5">Product 5</p>
        <p class="item-6">Product 6</p>
        <p class="item-7">Product 7</p>
        <p class="item-8">Product 8</p>
        <p class="item-9">Product 9</p>
      </section>
      <p class="progress-bar">Showing 9 out of 30 products</p>
      <button>SHOW MORE</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {};
</script>

<style scoped>
* {
  color: white;
}

.landing-top {
  height: 862px;
  width: 1440px;
  top: 84px;
  background-image: url(https://images.unsplash.com/photo-1542360579756-222c55226761?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80);
  /* background-position: center; */
  background-size: cover;
  filter: brightness(50%); 
}

.landing-top > h1,
h3 {
  color: white;
  /* z-index: 999; */
}

.top-img-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
}

.top-img-wrapper > p {
  height: 526px;
  width: 419px;
  border-radius: 5px;
  background-color: white;
}

.landing-bottom {
  height: 1724px;
  width: 1440px;
  background-color: #3c4858;
}

.product-grid-container {
  display: grid;
  grid-template-columns: 3;
  grid-template-rows: 3;
}

.product-grid-container > p {
  height: 327px;
  width: 245px;
  background-color: white;
}

.item-1 {
  grid-column: 1/1;
  grid-row: 1/1;
}

.item-2 {
  grid-column: 2/2;
  grid-row: 1/1;
}

.item-3 {
  grid-column: 3/3;
  grid-row: 1/1;
}

.item-4 {
  grid-column: 1/1;
  grid-row: 2/2;
}

.item-5 {
  grid-column: 2/2;
  grid-row: 2/2;
}

.item-6 {
  grid-column: 3/3;
  grid-row: 2/2;
}

.item-7 {
  grid-column: 1/1;
  grid-row: 3/3;
}

.item-8 {
  grid-column: 2/2;
  grid-row: 3/3;
}

.item-9 {
  grid-column: 3/3;
  grid-row: 3/3;
}

button {
  height: 43px;
  width: 332px;
  border-radius: 5px 0px 0px 5px;
  background-color: #3c8af1;
}
</style>
