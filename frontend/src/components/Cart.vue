<template>
  <div class="wrapper">
    <div class="orders">
      <h2 class="summary">Order Summary</h2>
    </div>
    <div class="detail-wrapper">
      <div class="details">
        <img class="figures" src="../assets/illustration-checkout.svg" />
        <div class="sum">
          <h1>Total</h1>
          <h1>{{ totalPrice() }} SEK</h1>
        </div>
        <h3 class="vat">Including VAT</h3>
        <div class="buttons">
          <div class="back">
            <button class="back-btn" @click="totalPrice">Go back</button>
          </div>
          <div class="proceed">
            <button class="proceed-btn">proceed to checkout</button>
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
    drawItems() {
      // let cart = this.$store.state.cart;
    },

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
  computed: {},
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
  /* line-height: 26px; */
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
  /* align-items: space-evenly; */
  justify-content: space-evenly;
  width: 400px;
}

.back,
.proceed {
  position: relative;
  transform: translate(-50%, -50%);
}

.back {
  margin-right: 200px;
}

.proceed {
  right: -100px;
}

/* Back Button Effects */

.back-btn {
  cursor: pointer;
  position: absolute;
  /* top: 90%; */
  /* left: 50%; */
  font-family: Ropa Sans;
  font-size: 18px;
  width: 144px;
  height: 40px;
  color: #cbe9ef;
  box-shadow: -6px 6px 0px #cbe9ef;
}

.back-btn:before {
  content: "";
  position: absolute;
  background: #383736;
  bottom: 0;
  left: 0;
  right: 0;
  top: 100%;
  z-index: -1;
  -webkit-transition: top 0.14s ease-in;
}

.back-btn:hover {
  color: whitesmoke;
}

.back-btn:hover:before {
  top: 0;
}

/* Proceed Button Effects */

button {
  margin: 0;
}

.vat {
  display: flex;
  left: 0;
  padding-left: 85px;
  font-weight: 100;
}
</style>
