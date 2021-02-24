<template>
  <div id="app">
    <Header />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/product">Product</router-link>
    </div>
    <router-view/>
  <Footer/>
  </div>
</template>
<script>

import Footer from '@/components/Footer'
import Header from "@/components/Header.vue"
export default {
  name:'Home',

  components: { Footer ,Header},
 
}

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Ropa+Sans:ital@0;1&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Ropa Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
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
