<template>
  <div id="nav">
    <router-link to="/">Home/Products</router-link> |
    <router-link to="/Checkout">Checkout</router-link> |
    <router-link to="/MyAccount"
      ><img src="@/assets/useraccount.png" alt="Sign Up" height="40px"
    /></router-link>
    |
    <router-link to="/SignUp"> Sign Up Form </router-link>
    <img src="@/assets/shopping-bag.png" alt="Shopping Bag" height="40px" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #9c2e8e;
    }
  }

  .text-bold {
    font-weight: bold;
  }

  .text-italic {
    font-style: italic;
  }
}
</style>