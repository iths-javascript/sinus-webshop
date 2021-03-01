//
<template>
  <div class="wrapper">
    <div class="cart">
      <!-- <div class="cart-header">
      <h1>Cart Items</h1>
      <img src="@/assets/Sinus Logo.svg" />
      <h1>SINUS</h1>
      <p>SKATEBOARDS</p>
     </div> -->
      <CartItem
        v-for="(item, index) in cartItems"
        :key="index"
        :product="item"
      />
    </div>
    <div class="total-price">
      <p class="total-lable">Total</p>
      <div class="price-container">
        <p class="sek-lable">item price:</p>
        <p class="price">
          <strong>{{ totalPrice }} Kr</strong>
        </p>

        <p class="shipping">Shipping:</p>
        <p class="free">FREE</p>
        <small class="text-muted">inkl.moms</small>
        <hr />
      </div>

      <div>
        <input class="details" type="text" placeholder="Enter Discount Code" />
        <a @click="addOrder" class="btn"> Go to checkout</a>
      </div>
    </div>
  </div>
</template>
<script>
import CartItem from "@/components/ShoppingCart/CartItem.vue";
export default {
  name: "Cart",
  components: { CartItem },
  data() {
    return {
      showModal: false,
    };
  },
  computed: {
    cartItems() {
      return this.$store.getters.getOrderItems;
    },
    totalPrice() {
      return this.$store.getters.getTotalPrice;
    },
  },
  methods: {
    // sendToOrder() {
    //   this.$router.push("/MakeOrder");
    // },
    addOrder() {
      this.$store.dispatch("createOrder");
    },

    removeFromCart(index) {
      this.$store.commit("removeFromCart", index);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lato:wght@300;400;700&display=swap");
.wrapper {
  margin-right: auto;
  margin-left: auto;
  padding-right: 10px;
  padding-left: 10px;
  background-color: #3c4858;
  gap: 25px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  min-width: 350px;
  max-width: 930px;
}

.cart {
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.6);
}

.total-price {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 500px;
  width: 255px;
  background-color: whitesmoke;
  margin-top: 15px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  
}

.total-lable {
  color: black;
  padding-top: 30px;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
}
.sek-lable,
.shipping {
  margin-left: 5px;
  text-align: start;
  font-weight: 700;
}
.price,
.free {
  text-align: right;
  margin-right: 5px;
  font-weight: 500;
}
.btn {
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: black;
  height: 30px;
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 200px;
  /* height: 2.2rem; */
  font-family: "PT Serif";
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 500;
  text-decoration: none;
  color: white;
  /* border: 0.125rem solid rgba(0, 0, 0, 0.6); */
  box-sizing: border-box;
  /* border-radius: 3.125rem; */
  margin: 1rem 1rem 1rem 1rem;
  margin-left: 1.5rem;
  background-color: #5eb593;
  box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.15);
}
.btn:hover {
  /* background: #5eb593;
  color: #ddd; */
  background: #000;
  color: #fff;
}
/* .btn:active {
  
   background-color: #5eb593;
   color: #ddd; 
   color:#5eb593; 
} */
</style>
