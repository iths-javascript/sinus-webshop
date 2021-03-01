//
<template>
  <div class="cart">
    <CartItem v-for="(item,index) in cartItems" :key="index" :product="item"/>
    <span class="total-price">
      <p class="total-lable">TOTAL</p>
      <p class="sek-lable">
        <strong>{{ totalPrice }}</strong>
      </p>
    </span>
    <div>
      <a @click="addOrder" class="btn"> Take My Money</a>
    </div>
  </div>
</template>
<script>
import CartItem from '@/components/ShoppingCart/CartItem.vue'
export default {
  name: "Cart",
  components:{CartItem,},
  data() {
    return {
      showModal: false,
    };
  },
  computed: {
    cartItems() {
      return this.$store.getters.getOrderItems
    },
    totalPrice(){
      return this.$store.getters.getTotalPrice
    }
  },
  methods: {
    // sendToOrder() {
    //   this.$router.push("/MakeOrder");
    // },
    addOrder() {
      this.$store.dispatch('createOrder')
    },

    removeFromCart(index) {
      this.$store.commit("removeFromCart", index);
    },
  },
};
</script>

<style scoped>
.cart {
  background-color: peachpuff;
  border: 2px solid gray;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 75%;
  min-width: 350px;
  max-width: 1440px;  
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.6);
}

.cart .total-price {
  height: 20px;
  display: flex;
  font-size: 14px;
  font-weight: bold;
  margin-top: 0.5rem;
}
.cart .total-price .price {
  display: flex;
  align-items: flex-end;
  width: 20px;
  height: 10px;
  float: right;
}
.cart .total-lable {
  color: black;
}
.cart .sek-lable {
  margin-left: 10rem;
}
.btn {
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: black;
  height: 40px;
  width: 250px;
}
.btn .btn-icon {
  margin-left: 4.5rem;
  padding-right: 5px;
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
</style>
