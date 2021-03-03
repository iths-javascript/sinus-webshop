<template>
  <div>
    <div class="make-order">
      <div class="border-first">
        <h1>ALREADY A CUSTOMER? SIGN IN</h1>

        <div class="border-menu">
          <div class="total">
            <h2 class="total-text">Total</h2>
            <h2 class="total-price">
              {{ $store.getters.getTotalCartPrice }} sek
            </h2>
          </div>
          <hr class="line" />
          <ul class="list">
            <li v-for="item in this.$store.state.cartItems" :key="item">
              <img
                :src="require(`@/assets/${item.imgFile}`)"
                class="cart-img"
              />
              <h4 class="title">{{ item.title }}</h4>
              <p class="shortDesc">{{ item.shortDesc }}</p>

              <p class="price">{{ item.price }} kr</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="border-menu" v-if="user">
        <h3 class="your-details">Your Details</h3>
        <label class="inputs" for="">Your name</label>
        <input class="details" type="text" v-model="user.name" />
        <label class="inputs" for="">Street</label>
        <input class="details" type="text" v-model="user.address.street" />

        <div class="left">
          <label class="lable-left" for="">ZIP Code</label>
          <label class="lable-right" for="">City</label>
        </div>
        <div class="right">
          <input
            class="input-details"
            type="text"
            v-model="user.address.city"
          />
          <input class="input-details" type="text" v-model="user.address.zip" />
        </div>

        <h3 class="payment-text">Payment</h3>
        <label class="inputs" for="">Card Owner</label>
        <input class="details" type="text" />
        <label class="inputs" for="">Card Number</label>
        <input class="details" type="text" />

        <div class="left">
          <label class="lable-left" for="">Valid untill</label>
          <label class="lable-right" for="">CVV</label>
        </div>
        <div class="right">
          <input class="input-details" type="text" />
          <input class="input-details" type="password" />
          <button class="btn" @click="sendOrder">Submit Order</button>
        </div>
      </div>

      <div class="border-seccond" v-else>
        <hr class="line" />
        <h3 class="your-details">1. SHIPPING ADDRESS</h3>
        <label class="inputs" for="">Your name</label>
        <input class="details" type="text" />
        <label class="inputs" for="">Street</label>
        <input class="details" type="text" />

        <div class="left">
          <label class="lable-left" for="">ZIP Code</label>
          <label class="lable-right" for="">City</label>
        </div>
        <div class="right">
          <input class="input-details" type="text" />
          <input class="input-details" type="text" />
        </div>
        <h3 class="payment-text">2. PAYMENT</h3>
        Choose your payment methods
        <input type="radio" checked />
        <img src="@/assets/icons8-visa.svg" alt="" class="card-icons" />
        <input type="radio" checked />
        <img
          src="@/assets/icons8-mastercard-64.png"
          alt=""
          class="card-icons"
        />
        <label class="inputs" for="">Card Owner</label>
        <input class="details" type="text" />
        <label class="inputs" for="">Card Number</label>
        <input class="details" type="text" />
        <div class="left">
          <label class="lable-left" for="">Valid untill</label>
          <label class="lable-right" for="">CVV</label>
        </div>
        <div class="right">
          <input class="input-details" type="text" />
          <input class="input-details" type="password" />
          <hr class="line" />

          <button class="btn" @click="sendOrder">Submit Order</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     user: null
  //   }
  // },
  name: "MakeOrder",

  computed: {
    cartItems() {
      return this.$store.state.cartItems;
    },
    user() {
      return this.$store.getters.getUser;
    },
  },
  methods: {
    async sendOrder() {
      this.$store.dispatch("createOrder");
      this.$router.push("/Checkout");
    },
  },
  // mounted() {
  //   if(this.$store.state.user.isAuthenticated) {
  //     this.user = this.$store.state.user

  //   }
  // }
};
</script>

<style scoped>
h1 {
  margin-top: 100px;
  font-family: "Bebas Neue";
  font-size: 20px;
  letter-spacing: 0.05em;
}

.make-order {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
  height: 100%;
  width: 100%;
  background-color: whitesmoke;
  border: none;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  overflow-y: auto;
  /* display: flex;
  align-content: center; */
}
.border-first {
  grid-column: 1 / span 6;
  grid-row: 1 / span 3;
  height: 700px;

  margin-top: 3rem;
  margin-left: 5rem;

  flex-direction: column;
  align-items: flex-start;
}
.list {
  list-style: none;
  display: flex;
  flex-direction: column;
}
.total {
  display: flex;
  justify-content: space-between;
}
.cart-img {
  display: flex;
  justify-content: flex-start;
  width: 40px;
  height: 40px;
  flex-direction: row;
}
.cart-img .title {
  display: flex;
  flex-direction: row;
  padding-bottom: 1rem;
}
.cart-img .price {
  margin-left: 5rem;
}
.border-menu {
  margin-top: 2rem;
  padding: 2rem;
  /* display: flex; */
  /* border-style: solid; */
  height: 500px;
  width: 600px;
  background-color: whitesmoke;
}
.total-text {
  margin-top: 1rem;

  margin-right: 1rem;
}
.total-price {
  margin-top: 1rem;
}
.border-seccond {
  grid-column: 1 / span 6;
  grid-row: 4 / span 6;
  height: 500px;
  width: 600px;
  margin-top: 6rem;
  margin-left: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.left {
  display: flex;
  justify-content: space-evenly;
}
.inputs {
  font-size: 1rem;
  color: lightgray;
  margin-top: 5px;
}
.lable-left {
  font-size: 1rem;
  color: lightgray;
  margin-top: 5px;
}
.lable-right {
  font-size: 1rem;
  color: lightgray;
  margin-top: 5px;
  margin-left: 7rem;
}
.details {
  height: 2rem;
  width: 21.8rem;
}
.input-details {
  height: 2rem;
  margin-left: 2px;
  background-color: white;
}
.payment-text {
  margin-top: 3rem;
}
.your-details {
  margin-bottom: 2rem;
}
.line {
  color: black;
  width: 100%;
}
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 200px;
  height: 40px;
  font-family: "PT Serif";
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 500;
  text-decoration: none;
  color: white;
  box-sizing: border-box;
  margin: 1rem 1rem 1rem 1rem;
  margin-left: 1.5rem;
  background-color: #5eb593;
  box-shadow: 0px 6px 4px rgba(228, 213, 213, 0);
}
.btn:hover {
  background: #000;
  color: #fff;
}
</style>
