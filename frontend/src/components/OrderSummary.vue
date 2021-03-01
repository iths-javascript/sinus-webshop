<template>
  <section class="order-summary-wrapper">
    <p class="medium">Order Summary</p>
    <div class="summary">
      <div class="flex-row">
       <p><strong>Items:</strong></p>
       <p>{{cartTotal}} kr</p>
      </div>
      <div class="flex-row">
        <p><strong>Postage and Packing:</strong></p>
       <p>{{postage}} kr</p>
      </div>
    
      <div class="flex-row">
       <p class="large">Order Total:</p>
       <p class="large">{{orderTotal}} kr</p>
      </div>
    </div>
  
    <base-button 
    v-if="currentPath == '/cart'" 
    @click.native="changePath"
    class="btn" 
    color="teal">TO CHECKOUT</base-button>
    
    <base-button 
    v-if="currentPath == '/checkout'" 
    @click.native="changePath"
    class="btn" 
    color="offwhite">BACK TO CART</base-button>

  
  </section>
</template>

<script>
import BaseButton from './BaseButton.vue'
export default {
  components: { BaseButton },
  data() {
    return {
      currentPath: this.$route.path
    }
  },
  computed: {
    cartTotal() {
      let total = 0;
      for (let item of Object.values(this.$store.getters.getCart)) {
        let sumTotal = item.price * item.amount
        total += sumTotal;
      }
      return total
    },
    postage() {
      if (this.cartTotal > 5000) {
        return 0
      } else {
        return Math.round(this.cartTotal * 2/100)
      }
    },
    orderTotal() {
      return this.cartTotal + this.postage
    }
  },
  methods: {
    changePath() {
      console.log(this.currentPath);
      if (this.currentPath == "/cart") {
        this.$router.push("/checkout")
      }
      if (this.currentPath == "/checkout") {
        this.$router.push("/cart")
      }
    }
  }

}
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";


.order-summary-wrapper {
  
  width: 25rem;

  p {
    font-size: 1.4rem;
  }

  .medium {
    font-size: 2rem;
    font-weight: 700;
  }

  .summary {
    border-top: 3px solid $secondary-clr-lt;
    border-bottom: 3px solid $secondary-clr-lt;

    .flex-row {
      display: flex;
      justify-content: space-between;
      margin: 1rem 0;
    }

    .large {
      font-size: 2.2rem;
      font-weight: 700;
      margin-top: 2rem;

    
    }

    
  }

  .btn {
      margin-top: 3rem;
      width: 100%;
    }
}

</style>