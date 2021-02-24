<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/productlist">Productlist</router-link> |
      <router-link to="/Singleproduct ">Singleproduct </router-link> |
      <router-link to="/loginregister">LoginRegister</router-link> |
      <router-link to="/cart">Cart</router-link>|
      <router-link to="/MakeOrder">MakeOrder</router-link>|
      <router-link to="/checkout">Checkout</router-link> |
    </div>
    <router-view />
  </div>
</template>

<style lang ="scss">
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lato:wght@300;400;700&display=swap");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: space-around;
  /* position: fixed; */
  align-content: center;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
