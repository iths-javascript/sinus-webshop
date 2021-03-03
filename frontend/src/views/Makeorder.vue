<template>
  <div>
    <div class="make-order">
      <div class="border-first">
        <h1>ALREADY A CUSTOMER? SIGN IN</h1>

        <div class="border-menu1">
          <div class="total">
            <h2 class="total-text">Total</h2>
            <h2 class="total-price">{{ $store.getters.getTotalPrice }} Kr</h2>
          </div>
          <div class="img-container">
            <ul class="list">
              <li
                v-for="item in this.$store.getters.getOrderItems"
                :key="item"
                class="list-items"
              >
                <img
                  :src="require(`@/assets/${item.imgFile}`)"
                  class="cart-img"
                />
                <h4 class="titleDesc">{{ item.title }}</h4>
                <p class="shortDesc">{{ item.shortDesc }}</p>
                <p class="size">Size: OneFit</p>

                <p class="price">{{ item.price }} kr</p>
              </li>
            </ul>
          </div>
        </div>
        <br /><br />
        <hr class="line" />
        <div class="price-total2">
          <h4>Total Sum</h4>
          <h4>{{ $store.getters.getTotalPrice }} Kr</h4>
        </div>
        <hr class="line" />
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
        </div>
        <hr class="line" />
        <p class="sum">Total sum incl. taxes <strong>Show details</strong></p>

        <h2 class="total-price">{{ $store.getters.getTotalPrice }} Kr</h2>

        <button class="btn" @click="sendOrder">Confirm Purchase</button>
        <p class="terms">
          By clicking this you confirm that you have read the lorem policy
          blablabla and accept the lorem terms and conditions blablabla. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit
          consectetur duis facilisis vitae bibendum. Tempor, semper orci, eros,
          venenatis ullamcorper amet fermentum, mattis.
        </p>
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
        <br />
        <p>Choose your payment methods</p>
        <input type="radio" name="cardbtn" checked />
        <img src="@/assets/icons8-visa.svg" alt="" class="card-icons" />
        <input type="radio" name="cardbtn" checked />
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
        <h2 class="total-price">{{ $store.getters.getTotalPrice }} Kr</h2>
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
};
</script>

<style scoped>
.border-menu {
  margin-top: 2rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  width: 700px;
  background-color: whitesmoke;
  flex-direction: column;
  align-items: center;
  grid-column: 1 / span 6;
  grid-row: 4 / span 6;
}
.total-price {
  grid-row: 6;
  grid-column: 1;
}
.card-icons {
  width: 50px;
  height: 50px;
}
.border-seccond {
  margin-top: 2rem;
  padding: 2rem;
  grid-column: 1 / span 6;
  grid-row: 4 / span 6;
  width: 700px;
  padding: 2rem;
  margin-bottom: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: whitesmoke;
}
.left {
  display: flex;
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
  font-family: "Lato";
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
.list-items {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(7, 25px);
  margin: 0px auto;
  background-color: whitesmoke;
  border-bottom: 1.5px solid black;
  box-shadow: 0 2.8px 2.2px rgb(0 0 0 / 3%), 0 6.7px 5.3px rgb(0 0 0 / 5%),
    0 12.5px 10px rgb(0 0 0 / 6%), 0 22.3px 17.9px rgb(0 0 0 / 7%),
    0 41.8px 33.4px rgb(0 0 0 / 9%), 0 100px 80px rgb(0 0 0 / 12%);
}
.cart-img {
  width: 100px;
  height: 120px;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  grid-column: span 1;
  grid-row: 2 / span 6;
  background-color: #9199a5;
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.titleDesc {
  grid-column: 2;
  grid-row: 2;
  text-align: start;
  margin-left: 1rem;
  letter-spacing: 0.02em;
  font-family: "Bebas Neue";
  font-size: 20px;
}
.shortDesc {
  grid-column: 2;
  grid-row: 3;
  text-align: start;
  margin-left: 1rem;
  letter-spacing: 0.02em;
  font-family: "Lato", sans-serif;
}
.size {
  grid-column: 2;
  grid-row: 5;
  text-align: start;
  margin-left: 1rem;
  letter-spacing: 0.02em;
  font-family: "Lato", sans-serif;
}
.price {
  grid-column: 6;
  grid-row: 6;
  font-weight: 400;
  font-size: 20px;
}
.total {
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  margin-left: 2rem;
  margin-right: 2rem;
}
.price-total2 {
  display: flex;
  justify-content: space-between;
  margin: 1rem 1rem 1rem 1rem;
  padding-top: 10px;
  color: whitesmoke;
}
h1 {
  margin-top: 100px;
  font-family: "Bebas Neue";
  font-weight: 400;
  font-size: 30px;
  letter-spacing: 0.05em;
  text-align: center;
  color: whitesmoke;
}
</style>
