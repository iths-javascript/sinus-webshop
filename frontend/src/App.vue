<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navigation/Navbar.vue";
export default {
  components: {
    Navbar,
  },
  created() {
    this.$store.dispatch("addProducts");
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,600;0,700;1,400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lato:wght@300;400;700&display=swap");
body {
  background-color: #2c3e50;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: flex;
  justify-content: space-around;
  /* position: fixed; */
  align-content: center;
}
* {
  padding: 0;
  margin: 0;
}
</style>
