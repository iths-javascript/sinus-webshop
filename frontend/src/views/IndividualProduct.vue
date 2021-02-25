<template>
<section>
  <div v-if="productsLoading">
    <div>Loading...</div>
  </div>
  <div v-else-if="product" class="product">
    <div class="prod-image">
      <img :src="productImage" alt="">
    </div>
    <div class="prod-content">
      <div class="name">
        <p class="large">{{product.title}}</p>
        <p class="large">{{product.price}} kr</p>
      </div>
      
      <div class="rating">
        
        <p>Rating: {{randomRating}}</p>
      </div>
      <div class="description">
        <p> {{product.longDesc}}</p>
        <p class="article-num">Article Number: {{product._id}}</p>

        
      </div>
      <div class="info-footer">
      <BaseButton color="teal" class="btn">ADD TO CART</BaseButton>
      <div class="delivery">
        
        <img src="@/assets/icons/shipping-icon.svg" alt="icon of a delivery lorry">
        <p >Free delivery on orders over <strong>500kr</strong></p>
      </div>
      </div>
    </div>
    
  </div>
  <div v-else>No product found</div>
</section>
</template>

<script>
export default {

computed: {
  product() {
    return this.$store.getters.getSingleProduct(this.$route.params.id)
  },
  productImage() {
    return require(`@/assets/products/${this.product.imgFile}`)
  },
  randomRating() {
    return ((Math.random() * 5)).toFixed(1)
  },
  productsLoading() {
    return this.$store.getters.getProductsLoading
  }
}
}
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.product {
  display: flex;
  justify-content: space-between;
  max-width: 100rem;
  padding: 5rem;
  

  .prod-image {
    background: linear-gradient(#fff, $off-white);
    width: 48%;
    
    img {
      width: 100%;
    }
  }

  .prod-content {
    display: flex;
    flex-direction: column;
    width: 48%;
    

    div {
      margin-bottom: 1rem;
    }

    .name {
      display: flex;
      justify-content: space-between;
      font-weight: 700;
    }
    p {
      font-size: 1.4rem;
    }

    .large {
      font-size: 2rem;
    }

    .rating{
      p {
        font-size: 1.8rem;
      }
    }

    .article-num {
      font-size: 1rem;
      margin-top: 2rem;
    }

    .btn {
      margin-bottom: 1rem;
      margin-top: auto;
      width: 100%;
    }

    .info-footer {
      margin-top: auto;
    }

    .delivery {
      display: flex;
      justify-content: center;
      color: $secondary-clr-dk;
      background-color: $off-white;
      padding: 1rem 0;
      
      
      
      

      img {
        height: 2.4rem;
        padding-right: 1rem;
      }

      p {
        font-size: 1.2rem;
      }
    }
  }
  
}

</style>