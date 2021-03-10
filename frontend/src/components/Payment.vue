<template>
  <div class="payment">
    <div class="form">
      <h1>payment</h1>
      <h1 class="tag">billing options</h1>
      <div class="credits-card">
          <div class="my-checkbox"></div>
          <img src="../assets/card-icons.svg" alt="">
      </div>
      
      <form class="checkout-form">
        <label class="name" for="name">Name</label>
        <input class="input-name" type="text" />
        <img class="name-line" src="../assets/line.svg" alt="" />
        <label class="lastname" for="lastname">Lastname</label>
        <input class="input-lastname" type="text" />
        <img class="lastname-line" src="../assets/line.svg" alt="" />
        <label class="card" for="card">Card number</label>
        <input class="input-card" type="text" />
        <img class="card-line" src="../assets/line.svg" alt="" />
        <label class="cvv" for="cvv">CVV Code</label>
        <input class="cvv-city" type="text" />
        <img class="cvv-line" src="../assets/line.svg" alt="" />
      </form>

      <div class="klarna">
        <div class="my-checkbox"></div>
        <img src="../assets/klarna.svg" alt="">
      </div>

    <form class="checkout-form">
        <label class="name-klarna" for="email">Name</label>
        <input class="input-klarna" type="text" />
        <img class="klarna-line" src="../assets/line.svg" alt="" />
        <label class="lastname-klarna" for="lastname-klarna">Lastname</label>
        <input class="input-klarna-last" type="text" />
        <img class="klarna-line-last" src="../assets/line.svg" alt="" />
    </form>

    <div class="buttons-checkout">
        <button>go back</button>
        <button>continue</button>
    </div>
    </div>

    <div class="order">
      <div class="item">
        <div class="img-product">Img Product</div>
        <div class="item-info">
          <p class="name-product"></p>
          <p>quantity</p>
          <p>size</p>
          <p>PRICE</p>
          <img src="../assets/trash.svg" alt="" />
        </div>
      </div>
      <div class="total">TOTAL CART</div>
      <p class="vat">Including VAT</p>
    </div>
  </div>
</template>

<script>

export default {
    name: 'Payment'

}
</script>

<style scoped>
/* style form */
h1 {
  text-transform: uppercase;
  font-weight: 400;
  font-size: 1.5rem;
  text-align: justify;
}

p {
    text-align: justify;
}

.tag {
  font-family: "Schoolbell", cursive;
  letter-spacing: 0.2rem;
  padding: 4% 0 8%;
}

button {
  cursor: pointer;
  font-family: Ropa Sans;
  font-size: 18px;
  width: 144px;
  height: 40px;
  background-color: whitesmoke;
  color: #2b2b2b;
  border-style: none;
  box-shadow: -6px 6px #cbe9ef;
  margin: 0rem;
}

button:hover {
  background-color: #2b2b2b;
  color: whitesmoke;
}

.buttons-checkout {
  display: flex;
  justify-content: space-around;
}

label {
  font-family: "Ropa Sans", sans-serif;
  text-align: justify;
}

input {
  border-style: none;
  border-radius: 5px;
  font-family: "Ropa Sans", sans-serif;
  font-size: 1rem;
  outline: none;
  background-color: transparent;
}

input:focus {
  border: none;
}

input:active {
  border: none;
}

.payment {
  padding: 3%;
  margin: 2%;
  display: flex;
  justify-content: space-around;
  background-image: url("../assets/background-pay-options.svg");
  background-repeat: no-repeat;
}

.form,
.order {
  margin-top: 2%;
  padding: 3%;
  width: 50%;
}

.order {
  margin: 2%;
  padding: 5%;
  background-color: #f1f1f1;
}

.checkout-form {
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(6, 1.5rem);
  text-align: justify;
  gap: 5px;
}

.options {
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-content: center;
  align-items: center;
  padding: 1% 5%;
}

.credits-card, .klarna{
    display: flex;
    align-items: center;
    margin-bottom: 4%;
}


.my-checkbox{
    width: 1rem;
    height: 1rem;
    margin-right: 3%;
    background-color:transparent;
    border: solid 2px #2b2b2b;
    box-shadow: -2px 2px #2b2b2b ;
}

.my-checkbox:hover{
 background-color:#F46D69;
}

.my-checkbox:selection{
 background-color:#F46D69;
}

.name {
  grid-column: 1;
  grid-row: 1;
}

.input-name {
  grid-column: 1;
  grid-row: 2;
}

.name-line {
  grid-column: 1;
  grid-row: 3;
}

.lastname {
  grid-column: 2;
  grid-row: 1;
}

.input-lastname {
  grid-column: 2;
  grid-row: 2;
}

.lastname-line {
  grid-column: 2;
  grid-row: 3;
}

.card {
  grid-column: 1;
  grid-row: 4;
}

.input-card {
  grid-column: 1;
  grid-row: 5;
}

.card-line {
  grid-column: 1;
  grid-row: 6;
}

.cvv {
  grid-column: 2;
  grid-row: 4;
}

.cvv-city {
  grid-column: 2;
  grid-row: 5;
}

.cvv-line {
  grid-column: 2;
  grid-row: 6;
}

.name-klarna {
  grid-column: 1;
  grid-row: 1;
}

.input-klarna {
  grid-column: 1;
  grid-row: 2;
}

.klarna-line {
  grid-column: 1;
  grid-row: 3;
}

.lastname-klarna {
  grid-column: 2;
  grid-row: 1;
}

.input-klarna-last {
  grid-column: 2;
  grid-row: 2;
}

.klarna-line-lasr {
  grid-column: 2;
  grid-row: 3;
}

/* style order items */

.item {
  display: grid;
  grid-template-columns: repeat(2, auto);
  height: 85%;
  text-align: justify;
  margin-bottom: 5%;
}

.total {
  text-align: justify;
  font-size: 2.5rem;
  margin-bottom: 2%;
}

.vat{
    font-size: 1.2rem;
}
</style>