<template>
  <div id="app">
    <Header />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/profile">Profile</router-link> |
      <!-- <router-link to="/new-account">New Account</router-link> | -->
       <!-- <router-link to="/my-account">My Account</router-link> | -->
      <!-- <router-link to="/login-form">Login</router-link> |
      <router-link to="/overlay">overlay</router-link> -->
    </div>
    <router-view/>
  
    <!-- <LoginForm @login="handleLogin" /> 
  <div class="info" v-if="tokenData">
    <button @click="verify">Verify</button>
    </div>  -->
  <Footer/>
  </div>
</template>
<script>

import Footer from '@/components/Footer'
// import axios from 'axios'
import Header from "@/components/Header.vue"
export default {
  name:'Home',
  data(){ 
    let user_login = window.sessionStorage.getItem("LoggedIn");
        // let defau;
        if (user_login === "true") {
            // defau = true;      
            this.$store.commit('updateLoggedIn',true);
      
        } else {
            this.$store.commit('updateLoggedIn',false);

            // defau = false;
        }

    return {
    tokenData: null
    }

  },

  components: { Footer, Header},
  methods:{
    handleLogin(tokenData){
      this.tokenData = tokenData
      // console.log(tokenData);
    },
    async verify(){
      // const request = await axios.get('http://localhost:5000/api/me')
      let minToken = window.sessionStorage.getItem("token")
      const request = await fetch('http://localhost:5000/api/me', {
        method: 'GET',
        headers:{
          // Authorization: `Bearer ${this.tokenData.token}`
          Authorization: `Bearer ${minToken}`

        }
      })

      const responseData = await request.json()
      console.log(responseData);
      // this.tokenData.token
    }
  },
  
 
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
  color: #2B2B2B;
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
