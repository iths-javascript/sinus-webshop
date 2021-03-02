<template>
<section>
  <h2>CHECKOUT</h2>
  <div class="flex-wrapper">
  <form class="information-wrapper">
      <p class="bold">Delivery Address</p>

      <div class="view-row">
        <label>Full Name</label>
        <input type="text" v-model="userDetails.name" />
      </div>

      <div class="view-row">
        <label>Street Address:</label>
        <input type="text" v-model="userDetails.address.street" />
      </div>

      <div class="view-row">
        <label>City:</label>
        <input type="text" v-model="userDetails.address.city" />
      </div>

      <div class="view-row">
        <label>Zip code:</label>
        <input type="text" v-model="userDetails.address.zip" />
      </div>
  </form>
  <OrderSummary class="cart-summary" />
  </div>
  <section class="payment-details">
    <p class="bold">Select Payment Method</p>
    <section class="select-card">
      <input type="radio" id="klarna" name="card" />
      <label for="klarna"><img src="@/assets/icons/klarna.png" /></label>

      <input type="radio" id="swish" name="card" />
      <label for="swish"><img src="@/assets/icons/swish.png" /></label>

      <input type="radio" id="visa" name="card" />
      <label for="visa"><img src="@/assets/icons/visa.png" /></label>

      <input type="radio" id="paypal" name="card" />
      <label for="paypal"><img src="@/assets/icons/paypal.png" /></label>

      <input type="radio" id="mastercard" name="card" />
      <label for="mastercard"><img src="@/assets/icons/mastercard.png" /></label>
    </section>
    <section class="card-details">
       <div class="view-row">
        <label>Card Number:</label>
        <input type="text" placeholder="XXXX XXXX XXXX XXXX" />
      </div>

      <div class="small-box">
  

      <div class="view-row">
        <label>Expiry Date:</label>
        <input type="text" placeholder="MM-YYYY" />
      </div>

      <div class="view-row">
        <label>Security Code:</label>
        <input type="text" placeholder="XXX" />
      </div>

      </div>

      <div class="view-row">
        <label>Name as printed on card:</label>
        <input type="text"  />
      </div>

      <BaseButton @click.native="submitOrder" color="pink" class="buy-btn" >BUY</BaseButton>

    </section>

  </section>


  
</section>
</template>

<script>
import OrderSummary from "@/components/OrderSummary.vue"

export default {
components: {
  OrderSummary
},

computed: {
  user() {
    return this.$store.getters.getCurrentUser
  },
  userDetails() {
      if (this.user) {
        return {
          name: this.user.name,
          address: {
            street: this.user.address.street,
            city: this.user.address.city,
            zip: this.user.address.zip,
          },
        }
      } else {
        return {
          name: "",
          address: {
            street: "",
            city: "",
            zip: "",
          },
        }
      }
    },
},
methods: {
  submitOrder() {
    this.$store.dispatch("submitOrder")
    this.$router.replace("/thank-you")
  }
}
}
</script>

<style  lang="scss" scoped>
@import "@/styles/_variables.scss";

section {
  max-width: 100rem;
  margin: auto;

  h2 {
  text-align: center;
  margin: 5rem 0;
}

.flex-wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10rem;

  .cart-summary {
    margin-right: 4rem;
  }
}


.information-wrapper {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-left: 4rem;

    .bold {
      font-size: 2rem;
      font-weight: 700;
      
    }

    .view-row {
      align-items: center;
      display: flex;
      justify-content: space-between;
      margin-top: 2rem;
      width: 100%;

      label {
        font-size: 1.2rem;
        min-width: 10rem;
      }

      .info,
      input {
        background-color: $off-white;
        border: 1px solid $secondary-clr-dk;
        font-family: inherit;
        font-size: 1.4rem;
        height: 3rem;
        outline: none;
        padding: 0.5rem;
        width: 75%;
      }
    }
}

.payment-details {
  background-color: $off-white;
  padding-top: 2rem;

  .bold {
      font-size: 2rem;
      font-weight: 700;
      text-align: center;
      margin: 2rem 0;
      
    }

    .select-card {
      display: flex;
      padding: 2rem;
      justify-content: space-between;

      input {
        display: none;
      }

      input:checked + label{
        border: 2px solid $tertiary-clr;
        border-radius: 5px;
      }
    }
}

.card-details {
  width: 40%;
  margin: 0 auto;
  padding: 5rem 0;

  .buy-btn {
    width: 100%;
    margin-top: 5rem;
  }

  
  
  .view-row {
      display: flex;
      flex-direction: column;
      margin-top: 2rem;
      width: 100%;

      label {
        font-size: 1.2rem;
        min-width: 10rem;
      }

      .info,
      input {
        background-color: white;
        border: 1px solid $secondary-clr-dk;
        font-family: inherit;
        font-size: 1.4rem;
        height: 3rem;
        outline: none;
        padding: 0.5rem;
        
      }
    }

  .small-box {
    display: flex;
    justify-content: center;

    .view-row + .view-row {
      margin-left: 2rem;
    }

      }
  
}
}

</style>