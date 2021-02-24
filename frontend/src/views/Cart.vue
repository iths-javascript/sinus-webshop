//
<template>
  <div class="cart">
    <img class="btn-icon" src="@/assets/icon-bag-white.svg" />
    <div
      class="product-list"
      v-for="(product, index) in cartItems"
      :key="index"
    >
      <div class="item-info" :key="index" @click="removeFromCart(index)">
        <section class="thumbnail">
          <img class="imgFile" :src="require(`@/assets/${product.imgFile}`)" />
        </section>
        <section class="product-info">
          <h3 class="title">{{ product.title }}</h3>
          <p class="shortDesc">{{ product.shortDesc }}</p>
        </section>

        <p class="price">{{ product.price }} Kr</p>
      </div>
    </div>
    <span class="total-price">
      <p class="total-lable">TOTAL</p>
      <p class="sek-lable">
        <strong>{{ $store.getters.getTotalCartPrice }}</strong>
      </p>
    </span>
    <div>
      <a @click="sendToOrder" class="btn"> Take My Money</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "Cart",
  props: { cartItem: Object },
  data() {
    return {
      showModal: false,
      totalSum: 0,
    };
  },
  computed: {
    cartItems() {
      return this.$store.state.cartItems;
    },
  },
  methods: {
    sendToOrder() {
      this.$router.push("/MakeOrder");
    },
    removeFromCart(index) {
      this.$store.commit("removeFromCart", index);
    },
  },
};
</script>

<style scoped>
/* .cart {
  border: 2px solid gray;
  margin-top: 5rem;
  position: absolute;
  top: 0;
  bottom: 0.1;
  left: 3;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: #3c4858;
  width: 18rem;
  height: auto;
  max-height: 800px;
  min-height: 150px;
  overflow-y: scroll;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.6);

  .product-list {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    width: 250px;
    height: 45px;
    margin-bottom: 2rem;
  }
  .imgFile {
    float: left;
    width: 50px;
    height: 40px;
    border: 4px;
    img {
      float: left;
      width: 45px;
      height: 40px;
    }
  }
  .item-info {
    display: flex;
    flex-direction: row;
    float: right;
  }
  .title {
    margin-left: 1rem;
    font-size: 11px;
    align-items: flex-start;
    height: 20px;
    margin-top: 1rem;
  }
  .shortDesc {
    font-size: 9px;
    font-weight: bold;
    margin-top: 2rem;
    float: left;
  }
  .price {
    display: flex;
    width: 10px;
    align-items: flex-end;
    justify-content: flex-end;
    font-size: 12px;
    margin-left: 5rem;
  }

  .total-price {
    height: 20px;
    display: flex;
    font-size: 14px;
    font-weight: bold;
    margin-top: 0.5rem;
    .price {
      display: flex;
      align-items: flex-end;
      width: 20px;
      height: 10px;
      float: right;
    }
  }
  .total-lable {
    color: black;
  }
  .sek-lable {
    margin-left: 10rem;
  }
}
.btn {
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: black;
  height: 40px;
  width: 250px;

  .btn-icon {
    margin-left: 4.5rem;
    padding-right: 5px;
  }
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
} */
</style>
