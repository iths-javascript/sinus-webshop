<template>
  <div class="wrapper">
    <div class="orders-wrapper">
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
            <h3 class="product-title">{{ item.title }}</h3>
            <p class="item-details">Color: {{ item.color }}</p>
            <p class="item-details">
              Quantity:
              <button class="minus" @click="removeItem(item)">-</button>
              <!-- {{ item.quantity }} -->
              {{ item.quantity }}
              <button class="plus" @click="addItem(item)">+</button>
            </p>
            <!-- <p class="item-details">{{item.size}}</p> -->
            <p class="item-details">Price: {{ item.price }} SEK</p>
            <img
              class="trash"
              src="../assets/trash.svg"
              @click="deleteItem(item)"
            />
          </div>
        </div>
        <div class="pagination">
          <i class="arrow left"></i>
          <p>1</p>
          <i class="arrow right"></i>
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
            <button class="back-btn" @click="goToProduct">Go back</button>
          </div>
          <div class="proceed">
            <button class="proceed-btn">Checkout</button>
          </div>
        </div>
        <div class="tos">
          <h1 class="tos-title">terms and conditions</h1>
          <p class="tos-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            fermentum ut dignissim pellentesque ut amet. Ipsum donec enim arcu,
            tempus aenean non nisl. Egestas aenean sapien cum mi et at
            venenatis. Ac nascetur proin metus, tellus arcu mattis platea vitae.
            At ultricies sagittis cursus malesuada enim sed vivamus morbi id.
            Proin amet, amet, sed tortor.
          </p>
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
        for (let item in cart) {
          sum += cart[item].price * cart[item].quantity;
        }
      }
      return sum.toLocaleString();
    },
    addItem(item) {
      this.$store.commit("storeIntoCart", item);
    },
    removeItem(item) {
      if (item.quantity > 1) {
        this.$store.commit("removeItemCart", item);
      } else {
        this.deleteItem(item);
      }
    },
    deleteItem(item) {
      let cart = this.$store.state.cart;
      let itemIndex = cart.findIndex((element) => element._id === item._id);

      cart.splice(itemIndex, 1);
    },
    paginate(array, size, page_number) {
      return array.slice((page_number - 1) * size, page_number * size);
    },
    goToProduct() {
      this.$router.push("/product");
    },
    goToCheckout() {
      this.$router.push("/checkout");
    },
    // nextPage(num) {
    //   num += 1;
    //   return num;
    // },
    // prevPage(num) {
    //   num -= 1;
    //   return num;
    // },
  },
  computed: {
    drawItems() {
      let cart = this.$store.state.cart;
      // let page_size = 3;
      // let page_number = 1;
      // let pages = this.paginate(cart, page_size, page_number);

      let cartArr = [];

      for (var key in cart) {
        cartArr.push(cart[key]);
      }

      // if (this.nextPage(page_number)) {
      //   pages = this.paginate(cartArr, page_size, page_number);
      // } else if (this.prevPage(page_number)) {
      //   pages = this.paginate(cartArr, page_size, page_number);
      // } else {
      //   pages = this.paginate(cartArr, page_size, page_number);
      // }

      return cartArr;
    },
  },
};
</script>

<style scoped>
button {
  outline: 0;
}

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
  padding-bottom: 20px;
}

.tos {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  max-width: 500px;
}

.tos-title {
  font-size: 36px;
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

.orders {
  padding-right: 20%;
  padding-top: 30px;
  padding-bottom: 30px;
}

.orders-wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
}

.details {
  padding-left: 10%;
}

.detail-wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
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

.item-details {
  padding-top: 7px;
}

.trash {
  cursor: pointer;
  padding-top: 10px;
}

/* Navigation Buttons */

.pagination {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.arrow {
  cursor: pointer;
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  margin-left: 3px;
}

.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  margin-right: 3px;
}

/* Quantity buttons */

.plus,
.minus {
  cursor: pointer;
  background: transparent;
  box-shadow: 0px 0px 0px transparent;
  border: 0px solid transparent;
  text-shadow: 0px 0px 0px transparent;
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
}

.product-img {
  background-color: none;
  max-width: 4000px;
  min-width: 200px;
}

.vat {
  display: flex;
  left: 0;
  padding-left: 90px;
  font-weight: 100;
}

.product-title {
  padding-bottom: 5px;
}

.item-desc {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 10px;
}
</style>
