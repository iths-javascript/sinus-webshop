<template>
  <div>
    <div class="make-order">
      <div class="border-first">
        <h1>ALREADY A CUSTOMER? SIGN IN</h1>
        <div class="img-container"></div>
        <div class="border-menu">
          <div class="total">
            <h2 class="total-text">Total</h2>
            <h2 class="total-price">{{ $store.getters.getTotalPrice }} sek</h2>
          </div>
          <hr class="line" />
          <ul class="list">
            <li v-for="item in this.$store.getters.getOrderItems" :key="item">
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
        <h3 class="your-details">1. Shipping Address</h3>
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

        <h3 class="payment-text">2. Payment</h3>
        <br />
        <p>Choose your payment methods</p>
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
        <br />
        <p>Choose your payment methods</p>
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
        </div>
        <hr class="line" />
        <p class="sum">Total sum incl. taxes <strong>Show details</strong></p>
        <div class="total">
          <h2 class="total-text">Total</h2>
          <h2 class="total-price">
            {{ $store.getters.getTotalCartPrice }} sek
          </h2>
        </div>
        <button class="btn" @click="sendOrder">Confirm Purchase</button>
        <p class="terms">
          By clicking this you confirm that you have read the lorem policy
          blablabla and accept the lorem terms and conditions blablabla. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit
          consectetur duis facilisis vitae bibendum. Tempor, semper orci, eros,
          venenatis ullamcorper amet fermentum, mattis.
        </p>
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
  text-align: center;
}
.img-container {
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
}

.border-first {
  grid-column: 1 / span 6;
  grid-row: 1 / span 3;
  /* display: flex; */
}
.list {
  /* display: grid; */
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
  background-color: white;
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.total {
  display: flex;
  justify-content: space-between;
}
.cart-img {
  display: grid;
  background-color: #9199a5;
  height: 70px;
  width: 70px;
  overflow-y: auto;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  cursor: pointer;
}
.title {
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  grid-column: span 3;
  margin-left: 15px;
}
.price {
  margin-left: 5rem;
  grid-row: 6;
  grid-column: 1;
}
.border-menu {
  margin-top: 2rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  width: 600px;
  background-color: whitesmoke;
}
.total-text {
  margin-top: 1rem;

  margin-right: 1rem;
}
.total-price {
  margin-top: 1rem;
  grid-row: 6;
  grid-column: 1;
  margin-left: 15px;
}
.card-icons {
  width: 50px;
  height: 50px;
}
.border-seccond {
  grid-column: 1 / span 6;
  grid-row: 4 / span 6;
  height: 500px;
  width: 600px;
  margin-top: 6rem;
  margin-left: 5rem;
  margin-bottom: 6rem;
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
  height: rem;
  width: 21.8rem;
}
.input-details {
  height: 3rem;
  margin-left: 2px;
  background-color: white;
}
.payment-text {
  margin-top: 3rem;
}

.line {
  color: gray;
  width: 100%;
}
.sum {
  font-family: "Lato";
  color: lightgray;
  font-size: 16px;
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 300px;
  height: 40px;
  font-family: "PT Serif";
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 500;
  text-decoration: none;
  color: white;
  margin: 1rem 1rem 1rem 1rem;
  margin-left: 1.5rem;
  background-color: #5eb593;
}
.btn:hover {
  background: #000;
  color: #fff;
}
.terms {
  font-family: "Lato";
  color: lightgray;
  font-size: 11px;
}
</style>
