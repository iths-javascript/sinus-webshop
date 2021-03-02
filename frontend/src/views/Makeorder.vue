<template>
  <div class="card">
    <!-- <Nav /> -->
    <div class="make-order">
      <div class="border-first">
        <h2 class="border-text">Pay</h2>
        <br />
        <h3 class="border-text">Your Order</h3>
        <div class="border-menu">
          <ul class="list">
            <li v-for="item in this.$store.state.cartItems" :key="item">
              <img
                :src="require(`@/assets/${item.imgFile}`)"
                class="cart-img"
              />
              <h4 class="title">{{ item.title }}</h4>
              <p class="shortDesc">{{ item.shortDesc }}</p>
              <!--<p>{{item.serial}}</p>-->
              <p class="price">{{ item.price }} kr</p>
            </li>
            <div>
              <hr class="line" />
              <h2 class="total-text">Total</h2>
              <h2 class="total-price">
                {{ $store.getters.getTotalCartPrice }} sek
              </h2>
            </div>
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
          <input
            class="input-details"
            type="text"
           
          />
          <input
            class="input-details"
            type="password"
          />
          <button class="btn" @click="sendOrder">Submit Order</button>
        </div>
      </div>

      <div class="border-seccond" v-else>
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

          <button class="btn" @click="sendOrder">Submit Order</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Nav from '../components/Nav.vue'

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
    }
    
  },
  methods: {
    async sendOrder() {
      this.$store.dispatch("createOrder")
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
.make-order {
  display: flex;
  align-content: center;
}
.border-first {
  height: 700px;
  width: 400px;
  margin-top: 3rem;
  margin-left: 5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.list {
  list-style: none;
  display: flex;
  flex-direction: column;
}
.cart-img {
  display: flex;
  justify-content: flex-start;
  width: 40px;
  height: 40px;
  flex-direction: row;
  float: left;
}
.cart-img .title {
  display: flex;
  flex-direction: row;
  padding-bottom: 1rem;
}
.cart-img .price {
  margin-left: 5rem;
  float: right;
}
.border-menu {
  margin-top: 2rem;
  padding: 2rem;
  display: flex;
  border-style: solid;
  height: 500px;
  width: 400px;
  background-color: whitesmoke;
  border: none;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  overflow-y: auto;
}
.total-text {
  margin-top: 1rem;
  float: left;
  margin-right: 1rem;
}
.total-price {
  margin-top: 1rem;
  float: right;
}
.border-seccond {
  height: 500px;
  width: 400px;
  margin-top: 6rem;
  margin-left: 5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.left {
  display: flex;
  justify-content: space-between;
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
  width: 248px;
  height: 4rem;
  font-family: "PT Serif";
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: 700;
  text-decoration: none;
  color: black;
  border: 0.125rem solid rgba(0, 0, 0, 0.6);
  box-sizing: border-box;
  border-radius: 3.125rem;
  margin: 2rem 0;
  margin-left: 2.5rem;
}
.btn:hover {
  background: #5eb593;
  color: #ddd;
}
.btn:active {
  background: #000;
  color: #fff;
}
.clientInformationForm {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 1rem;
}
.clientInformationForm label {
  padding: 0.25rem 0;
  font-size: 0.7rem;
  text-transform: uppercase;
}
.clientInformationForm input,
select {
  border: 1px solid black;
  border-radius: 0.25rem;
  padding: 0.5rem;
  height: 2.6rem;
  box-sizing: border-box;
  font-size: 1rem;
}
.cardInfo-2 {
  grid-column: auto / span 1;
}
.cardInfo-1 {
  grid-column: auto / span;
}
</style>
