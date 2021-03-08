<template>
<div class="container">
  <div class="new-account">
      <h1>Create a new account</h1>
      <p class="tag-new-account">#Enjoy Sinus</p>
      <img src="../assets/big-heart.svg" alt="">
      <form class="new-account-form" @submit.prevent="register">
        <label for="name" class="label-name">Name</label>
        <input class="name" type="text" v-model="user.name">
        <img class="line-name" src="../assets/input-new.svg" alt="">

        <label for="email" class="label-email">Email</label>
        <input class="email" type="email" v-model="user.email">
        <img class="line-email" src="../assets/input-new.svg" alt="">
        
        <label class="address" for="address">Address</label>
        
        <input class="street" type="text" v-model="user.address.street" placeholder="Street">
        <img class="street-line" src="../assets/input-new.svg" alt="">
        
        <input class="zip" type="text" v-model="user.address.zip" placeholder="Zip">
        <img class="line-zip" src="../assets/input-new.svg" alt="">
        
        <input class="city" type="text" v-model="user.address.city" placeholder="City">
        <img class="line-city" src="../assets/input-new.svg" alt="">
        
        <label class="label-password" for="password">Password</label>
        <input class="password" type="text" v-model="user.password">
        <img class="password-line" src="../assets/input-new.svg" alt="">
        <button class="new-account-button">Create Account</button>
      </form>
  </div>
  <!-- <Overlay> -->
      <!-- <LogInNewAccount v-if="showPopup === true"/> -->
  <!-- </Overlay> -->
  </div>
</template>

<script>

// import Overlay from "@/components/Overlay.vue";
// import LogInNewAccount from "@/components/LogInNewAccount.vue";
export default {
    name:'NewAccount',

    data(){
      return{
        user: 
          {
          "email": '',
          "password": '',
          "name": '',

          "address": {
            "street": '',
            "zip": '',
            "city": ''
          }
        },
        // showPopup: false,
      }
    },
// components:{ LogInNewAccount },

    methods:{
      register(){ 
        const payload = {
          email: this.user.email, 
          password: this.user.password, 
          name: this.user.name, 
          address: {
            street: this.user.address.street, 
            zip: this.user.address.zip,
            city: this.user.address.city
            },
          }
          this.$store.dispatch("newUserAccount", payload)
          if (this.$store.state.userInfo.newAccount === true){

            // this.showPopup = true
            this.$router.push("/login-new-account");
            // console.log(this.$store.state.userInfo.newAccount);
            // console.log("pop-up");
          } 
          
          // else {
             
          //       sessionStorage.setItem("LoggedIn", "false");
          //       this.loggedin = 'false';

          //   }
          
          },

          // showPopup(){

          // }
        }
      }
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color:#CBE9EF;
  background-image: url('../assets/background-new-account.svg');
  background-position: center;
  background-repeat: no-repeat;
}

.new-account{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3% 3% 8%;
}

.tag-new-account{
  padding: 2% 0 1%;
  font-family: 'Schoolbell', cursive;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: .2rem;
}

.new-account-form{
  padding: 4%;
  display: grid; 
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(12, auto);
  gap: 10px; 
  column-gap: 2rem;  
}

.label-name{
  grid-column: 1;
  grid-row: 1;
}

.name {
  grid-column: 1;
  grid-row: 2;
}

.line-name{
  grid-column: 1;
  grid-row: 3;
}

.label-email{
  grid-column: 2;
  grid-row: 1;
}

.mail{
  grid-column: 2;
  grid-row: 2;
}

.line-mail{
  grid-column: 2;
  grid-row: 3;
}

.address{
  grid-column: 1;
  grid-row: 6;
}

.street{
  grid-column: 1;
  grid-row: 8;
}

.street-line{
  grid-column: 1;
  grid-row: 9;
}

.zip{
  grid-column: 2;
  grid-row: 8;
}

.line-zip{
  grid-column: 2;
  grid-row: 9;
}

.city{
  grid-column: 1;
  grid-row: 12;
}

.line-city{
  grid-column: 1;
  grid-row: 13;
}

.label-password{
  grid-column: 1;
  grid-row: 16;
}
.password{
  grid-column: 1;
  grid-row: 17;
}

.password-line{
  grid-column: 1;
  grid-row: 18;
}

button{
  color: #2B2B2B;
  font-family:'Ropa Sans', sans-serif ;
  width: 144px;
  height: 40px;
  font-size: 1rem;
  background-color: whitesmoke;
  border-style: none;
  box-shadow: -5px 5px #2B2B2B;
  outline: none;
}

button:hover{
    background-color: #5E60B3;
    color:whitesmoke;  
}

.new-account-button{
  position: relative;
  grid-row: 20;
  left:75%;
  top:88%;
}

label{
    padding: 2% 0 1%;
    font-family: 'Ropa Sans', sans-serif;
    text-align: justify;
}

input{
    border-style: none;
    border-radius: 5px;
    font-family:'Ropa Sans', sans-serif;
    font-size: 1rem;
    background-color: #CBE9EF;
    outline: none;
}
input:focus{
  outline: none;
}

</style>