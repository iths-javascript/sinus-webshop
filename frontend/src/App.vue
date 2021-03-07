<template>
  <div id="app">
    <Header />
    <!-- <div id="nav">
    </div> -->
    <router-view />

    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer";
import Header from "@/components/Header.vue";
export default {
  name: "App",
  data() {
    let user_login = sessionStorage.getItem("LoggedIn");
    if (user_login === "true") {
      this.$store.commit("updateLoggedIn", true);
    } else {
      this.$store.commit("updateLoggedIn", false);
    }

    return {
      tokenData: null,
    };
  },

  components: { Footer, Header },
  methods: {
    handleLogin(tokenData) {
      this.tokenData = tokenData;
    },

    async verify() {
      // const request = await axios.get('http://localhost:5000/api/me')
      let minToken = sessionStorage.getItem("token");
      const request = await fetch("http://localhost:5000/api/me", {
        method: "GET",
        headers: {
          // Authorization: `Bearer ${this.tokenData.token}`
          Authorization: `Bearer ${minToken}`,
        },
      });

      const responseData = await request.json();
      console.log(responseData);
      // this.tokenData.token
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Ropa+Sans:ital@0;1&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Schoolbell&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Ropa Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2b2b2b;
}

#nav {
  padding: 0px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  #button{
    outline: none;
  }
  #button:active{
    outline: none;
    border: none;
  }
}
</style>
