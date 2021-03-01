<template>
  <section>
    <header>
      
        <img src="@/assets/products/skate-hero-1.jpg" alt="Purple hoodie with sinus logo">
      
    </header>
    <main>
      <p>Results: {{fetchProducts.length}}</p>
    <section class="products">
      
      <ProductCard v-for="product in fetchProducts" :key="product._id" :prod="product" />
    </section>
    </main>
    <img @click="scrollUp" ref="topBtn" id="topBtn" src="@/assets/icons/arrow-up-white.svg" alt="">
  </section>
  
</template>

<script>
import ProductCard from "@/components/ProductCard.vue"


export default {
  
  name: 'Home',
  components: {
   ProductCard
  },
  computed: {
    fetchProducts() {
      return this.$store.getters.getProducts
    }
  },
    created(){
      window.addEventListener('scroll', this.handleScroll);
  },
   destroyed(){
      window.removeEventListener('scroll', this.handleScroll);
  },
  methods:{
     handleScroll(){
      //  window.scrollTo({ top: 0, behavior: 'smooth' })
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        this.$refs.topBtn.style.display = 'block';
      } else {
        this.$refs.topBtn.style.display = "none";
      }
    },
    scrollUp(){
      window.scrollTo({ top: 0, behavior: 'smooth' })
      // document.body.scrollTop = 0;
      // document.documentElement.scrollTop = 0
    },
  }
}
</script>


<style lang="scss" scoped>
@import "@/styles/_variables.scss";

header {
  img {
    width: 100%;
  }
}

main {
max-width: 100rem;
margin: 5rem auto;

p {
  font-size: 1.6rem;
  font-weight: 700;
}
}

.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
  
}
#topBtn {
  height: 5rem;
  width: 5rem;
  display: none;
  position: fixed;
  bottom: 60px;
  right: 30px;
  outline: none;
  cursor: pointer;
  background-color: rgb(0, 0, 0);
  padding: 1rem;
  border-radius: 50%;
}

</style>