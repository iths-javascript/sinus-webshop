<template>
  <div class="main-wrapper">
    <div class="single-wrapper">
      <section class="image-section">
        <div class="image-wrapper">
          <img class="product-pic" :src="require(`@/assets/${product.imgFile}`)">
        </div>
        <router-link class="show-all-link" to="/">Show all products</router-link>
      </section>

      <section class="product-info">
        <p>Product info</p>
        <h3>{{product.title}}</h3>
        <div class="color-art">
          <p>{{product.shortDesc}}</p>
          <!-- <p>Lorem ipsum dolor sit amet.</p> -->
        </div>
        <div class="info-text">
          <p>- {{product.longDesc}}</p>
          <!-- <p>- Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <p>- Lorem ipsum dolor sit amet consectetur adipisicing.</p> -->
        </div>
        <button class="toCart" @click="addToOrder(product)">Add to Cart</button>
      </section>

      <section class="products">
        <div>
          <p>OTHERS ALSO LOOKED AT:</p>
        </div>
        <div class="item-one">
          <img :src="require(`@/assets/${products[0].imgFile}`)" alt="">
        </div>
        <div class="item-two">
          <img :src="require(`@/assets/${products[9].imgFile}`)" alt="">
        </div>
        <div class="item-three">
          <img :src="require(`@/assets/${products[6].imgFile}`)" alt="">
          <p></p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {

computed:{
  product(){
    return this.$store.getters.getProductId(this.$route.params.id)
  },
  products(){
    return this.$store.getters.getProducts;
  }
},

methods:{
  addToOrder(product){
    this.$store.dispatch('addProductToOrder', product)
  }
}
    

};
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
.product-pic{
  height: 526px;
  width: 419px;
}
.show-all-link{
  color: white;
  cursor: pointer;
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

.products img{
  width: 170px ;
  height:164px ;
}

.item-one{


}
.item-two{

}
.item-three{

}
</style>