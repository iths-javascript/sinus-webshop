<template>
  <nav>
    <div class="left-links">
      <router-link to="/">Home</router-link>
      <router-link to="#">Skateboards</router-link>
      <router-link to="#">Clothing</router-link>
    </div>

    <div v-if="!isAuthenticated" class="right-links">
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
      <router-link to="#">Cart</router-link>
    </div>

    <div v-else class="right-links">
      <router-link to="/profile">Profile</router-link>
      <router-link to="#">Cart</router-link>
      <a href="#" @click.prevent="logout">Logout</a>
    </div>
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

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
}

nav a {
  padding: 0 10px;
}
</style>