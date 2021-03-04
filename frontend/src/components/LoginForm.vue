<template>
  <div class="container-form" id="talkbubble">
    <h1>Log in</h1>
    <div class="user-img">
      <img src="../assets/bird-blue.svg" alt="" />
    </div>
    <div v-if="loggedin == 'false'"></div>
    <form @submit.prevent="submit">
      <label for="e-mail">Email</label>
      <input type="text" v-model="email" placeholder="e-mail" />
      <label for="password">Password</label>
      <input type="text" v-model="password" placeholder="password" />
      <button class="login-button">Login</button>
    </form>
    <h3>OR</h3>
    <button @click="goToCreate" class="account-button">Create Account</button>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    let loggedinFromSessionStorage = window.sessionStorage.getItem("LoggedIn");
    return {
      email: "",
      password: "",
      loggedin: loggedinFromSessionStorage,
      createNewAccount: false,
    };
  },

  methods: {
    async submit() {
      const payload = { email: this.email, password: this.password };

      // const responseData = await axios.post('http://localhost:5000/api/auth', payload)
      const request = await fetch("http://localhost:5000/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const responseData = await request.json();
      if (responseData.token) {
        window.sessionStorage.setItem("LoggedIn", "true");
        window.sessionStorage.setItem("token", responseData.token);
        this.$store.commit("updateLoggedIn", true);
        this.loggedin = "true";
        this.$emit("close");
      } else {
        window.sessionStorage.setItem("LoggedIn", "false");
        this.loggedin = "false";
        this.$store.commit("updateLoggedIn", false);
      }
      this.$emit("login", responseData);
    },

    goToCreate() {
      this.$emit("close");
      this.$router.push("/new-account");
    },
  },
};
</script>

<style scoped>
.container-form {
  background-color: #f5adb8;
  height: auto;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: -10px 10px #ffebd3;
  /* background-image: url("../assets/bird-yellow.svg"), url("../assets/bird-blue.svg"); */
  /* background-repeat: no-repeat; */
}

label {
  padding: 1rem;
  margin-left: 2.2rem;
  font-family: "Ropa Sans", sans-serif;
  text-align: justify;
}

input {
  padding: 0.5rem;
  margin: 0 3rem 1rem;
  border-style: none;
  border-radius: 5px;
  font-family: "Ropa Sans", sans-serif;
  font-size: 1rem;
}

form {
  display: flex;
  min-width: 25rem;
  height: auto;
  flex-direction: column;
  padding-bottom: 1rem;
}
.login-button {
  margin-top: 2rem;
  margin-left: 128px;
}

.account-button {
  margin-top: 1rem;
}
.account-button:hover {
  background-color: #b2d1a8;
  color: #2b2b2b;
}

.login-button:hover {
  background-color: #5e60b3;
  color: whitesmoke;
}

button {
  color: #2b2b2b;
  font-family: "Ropa Sans", sans-serif;
  width: 144px;
  height: 40px;
  font-size: 1rem;
  background-color: whitesmoke;
  border-style: none;
  box-shadow: -5px 5px #2b2b2b;
}
.user-img {
  width: 100px;
  height: 100px;
}

.close-login {
  background-color: whitesmoke;
  display: flex;
  align-self: flex-end;
  padding: 0.3rem;
  width: 20px;
  cursor: pointer;
}

#talkbubble {
  max-width: 380px;
  min-height: auto;
  background: #f5adb8;
  position: relative;
}
#talkbubble:before {
  content: "";
  position: absolute;
  left: 79.8%;
  top: -20px;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 20px solid #f5adb8;
}
</style>
