<template>
<article>
  <div class="image-container">
    <img :src="imageFile" :alt="prod.shortDesc">
  </div>
  <div class="prod-details">
    <p class="large">{{prod.title}}</p>
    <p>{{prod.shortDesc}}</p>
    
    <p class="small article-num">Article No: {{prod._id}}</p>
  </div>
  <div class="prod-edit">
    <section class="amount">
    <div class="dark-bg" @click="removeItemFromCart(prod._id)"><p class="large">-</p></div>
    <div><p class="large">{{prod.amount}}</p></div>
    <div class="dark-bg" @click="addItemToCart(prod._id)"><p class="large">+</p></div>
    </section>
    <img src="@/assets/icons/delete.svg" alt="delete icon"
    @click="deleteItemFromCart(prod._id)">
    <p class="large">{{prod.price}} kr</p>
  </div>

  
</article>
</template>

<script>
export default {
props: {
  prod: Object  },
  computed: {
    imageFile() {
    return require(`@/assets/products/${this.prod.imgFile}`)
  }
  },
  methods: {
    addItemToCart(id) {
      this.$store.dispatch("addToCart", id)
    },
    removeItemFromCart(id) {
      this.$store.dispatch("removeFromCart", id)
    },
    deleteItemFromCart(id) {
      this.$store.dispatch("deleteFromCart", id)
    }
  }
}

</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

article {
  display: flex;
  border-bottom: 1px solid $secondary-clr-lt;
  width: 50rem;
  

  p {
    font-size: 1.4rem;
  }

  .large {
    font-size: 2rem;
    font-weight: 700;
  }

  .small {
    font-size: 1.2rem;
  }

  .image-container {
    width: 10rem;
    background: linear-gradient(#fff, $off-white);
    margin-right: 1rem;

    img {
      width: 100%;
    }
  }

  .prod-details {
    width: 30rem;

    
  }

  .prod-edit {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    .amount {
      display: flex;
      border: 1px solid $secondary-clr-dk;

      div {
        width: 3rem;
        height: 3rem;
        text-align: center;

        
      }

      .dark-bg {
        background-color: $secondary-clr-dk;
        color: #fff;
        cursor: pointer;
      }
    }

    img {
      width: 2rem;
      height: 2rem;
      cursor: pointer;
    }
  }
}

</style>