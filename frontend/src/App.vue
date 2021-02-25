<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/product">Product</router-link> |
      <router-link to="/login-form">Login</router-link>
    </div>
    <router-view/>
  <LoginForm @login="handleLogin" /> 
  <div class="info" v-if="tokenData">
    <button @click="verify">Verify</button>
    </div> 
  <Footer/>
  </div>
</template>
<script>

import Footer from '@/components/Footer'
import LoginForm from '@/components/LoginForm'
// import axios from 'axios'
export default {
  name:'Home',
  data(){ return{
    tokenData: null
  }

  },

  components: { Footer, LoginForm },
  methods:{
    handleLogin(tokenData){
      this.tokenData = tokenData
      // console.log(tokenData);
    },
    async verify(){
      // const request = await axios.get('http://localhost:5000/api/me')

      const request = await fetch('http://localhost:5000/api/me', {
        method: 'GET',
        headers:{
          Authorization: `Bearer ${this.tokenData.token}`
        }
      })

      const responseData = await request.json()
      console.log(responseData);
      // this.tokenData.token
    }
  }
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
