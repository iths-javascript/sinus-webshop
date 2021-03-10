<template>
  <div class="form-new-account">
      
    <div class="container-form">
    <h1>Welcome to Sinus</h1>
    <p class="you-account">your account has been created successfully!</p>
    <div class="user-img">
      <img src="../assets/kille.svg" alt="" />
    </div>
    <div v-if="loggedin == 'false'"></div>
    <form @submit.prevent="submit">
      <label for="e-mail">Email</label>
      <input type="text" v-model="email" />
      <img class="line-email" src="../assets/input-new.svg" alt="">
      <label for="password">Password</label>
      <input type="text" v-model="password" />
      <img class="line-email" src="../assets/input-new.svg" alt="">
      <button class="login-button">Login</button>
    </form>
  </div>
  </div>
</template>

<script>
export default {
    name: 'LogInNewAccount',
    data() {
    let loggedinFromSessionStorage = sessionStorage.getItem("loggedIn");
    return {
      email: "",
      password: "",
      loggedin: loggedinFromSessionStorage,
    }
  },
methods:{

    submit(){
        const payload = { email: this.email, password: this.password };
        this.$store.dispatch("logInUser", payload)
        if(sessionStorage.getItem("loggedIn") === "true"){
            this.$emit("close");
            this.$router.push("/");
        } else {
        //   this.$emit("close");
          // this.$router.push("/profile");
          console.log("mina error");
        }
      },
}

}
</script>

<style scoped>
.form-new-account{
    display: flex;
    justify-content: center;
    padding: 5%;
}
.container-form {
  background-color: #FFEBD3;
  width: 40%;
  height: auto;
  padding: 4%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: -10px 10px #FFD2D2;
}

p {
    font-size: 1.2rem;
    padding: 3%;
}

label {
  font-family: "Ropa Sans", sans-serif;
  padding-top:5%;
  align-self: flex-start;
}

input {
  padding: 3%;
  border-style: none;
  border-radius: 5px;
  font-family: "Ropa Sans", sans-serif;
  font-size: 1rem;
  background-color: transparent;
  outline: none;
  align-self: flex-start;
}

form {
  display: flex;
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 2%;
}

.login-button {
  margin-top: 15%;
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
  outline: none;
}
.user-img {
    display: flex;
  width: 200px;
  height: 200px;
}

.close-login {
  background-color: whitesmoke;
  display: flex;
  align-self: flex-end;
  padding: 0.3rem;
  width: 20px;
  cursor: pointer;
}

</style>