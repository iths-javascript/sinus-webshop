<template>
  <div class="wrapper">
    <div class="orders">
      <h2 class="summary">Order Summary</h2>
      <div
        class="items-container"
        v-for="item in drawItems"
        v-bind:key="item.id"
      >
        <div class="product-img">
          <img :src="require(`../assets/${item.imgFile}`)" />
        </div>
        <div class="item-desc">
          <h3>{{ item.title }}</h3>
          <p>color: {{ item.color }}</p>
          <p>quantity: {{ item.quantity }}</p>
          <p></p>
        </div>
      </div>
    </div>
    <div class="detail-wrapper">
      <div class="details">
        <img class="figures" src="../assets/illustration-checkout.svg" />
        <div class="sum">
          <h1>Total</h1>
          <h1>{{ totalPrice() }} SEK</h1>
        </div>
        <h3 class="vat">including VAT</h3>
        <div class="buttons">
          <div class="back">
            <button class="back-btn" @click="totalPrice">Go back</button>
          </div>
          <div class="proceed">
            <button class="proceed-btn">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  methods: {
    totalPrice() {
      let cart = this.$store.state.cart;
      let sum = 0;

      if (cart !== null || cart !== undefined) {
        cart.forEach((item) => {
          sum += item.price;
        });
      }
      return sum;
    },
  },
  computed: {
    drawItems() {
      let cart = this.$store.state.cart;
      return cart;
    },
  },
};
</script>

<style scoped>
h1 {
  font-family: "Ropa Sans";
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 0.5px;
  font-size: 42px;
}

.figures {
  min-width: 241px;
  max-width: 25%;
}

.summary {
  font-family: "Ropa Sans";
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1.2px;
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  height: 100%;
}

.detail-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

.details {
  padding-right: 25%;
}

.sum {
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  width: 500px;
}

.buttons {
  display: flex;
  padding-top: 40px;
  justify-content: space-evenly;
}

/* Back Button Effects */

.back-btn,
.proceed-btn {
  cursor: pointer;
  font-family: Ropa Sans;
  font-size: 18px;
  width: 144px;
  height: 40px;
  background-color: #2b2b2b;
  color: whitesmoke;
  border-style: none;
  box-shadow: -6px 6px 0px #cbe9ef;
  margin: 0rem;
}

.back-btn:hover,
.proceed-btn:hover {
  background-color: #5e60b3;
  color: whitesmoke;
}

/* Proceed Button Effects */

/* ---------------------------- */

.items-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
}

.product-img {
  background-color: #383736;
  max-width: 350px;
  min-width: 200px;
}

.vat {
  display: flex;
  left: 0;
  padding-left: 90px;
  font-weight: 100;
}
</style>
