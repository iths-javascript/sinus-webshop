<template>
  <nav>
    <img src="@/assets/Sinus Logo.svg">
    <div class="left-links">
      <router-link to="/">Home</router-link>
      <router-link to="#">Skateboards</router-link>
      <router-link to="#">Clothing</router-link>
    </div>

    <div v-if="!isAuthenticated" class="right-links">
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
      <router-link to="/cart">Cart</router-link>
    </div>

    <div v-else class="right-links">
      <router-link to="/profile">Profile</router-link>
      <router-link to="/cart">Cart</router-link>
      <a href="#" @click.prevent="logout">Logout</a>
    </div>
    <img src="@/assets/Person Icon.svg">
    <img src="@/assets/Cart Icon.svg">
  </nav>
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  /* height: 95px; */
  height: 50px;
  z-index: 999;
  background-color: #3C4858;
}

nav a {
  padding: 0 10px;
  font-family: 'Bebas Neue';
  text-decoration: none;
  color: white;
  font-size: large;
}

nav img{
  width: 59px;
  height: 59px;
  margin-left: 35px;
  margin-right: 35px;
}
</style>