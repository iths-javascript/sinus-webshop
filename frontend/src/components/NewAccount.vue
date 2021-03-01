<template>
  <div class="new-account">
      <h1>Create a new account</h1>
      <p>Enjoy Sinus</p>
      <img src="../assets/big-heart.svg" alt="">
      <form class="new-account-form" @submit.prevent="register">
        <label for="name">Name</label>
        <input class="name" type="text" v-model="user.name" placeholder="Name">
        <label class="address" for="address">Address</label>
        <input class="street" type="text" v-model="user.address.street" placeholder="Street">
        <input class="zip" type="text" v-model="user.address.zip" placeholder="Zip">
        <input class="city" type="text" v-model="user.address.city" placeholder="City">
        <label for="email">Email</label>
        <input class="email" type="email" v-model="user.email" placeholder="Email">
        <label for="password">Password</label>
        <input class="password" type="text" v-model="user.password" placeholder="Password">
        <button class="new-account-button">Create Account</button>
      </form>
  </div>
</template>

<script>
export default {
    name:'NewAccount',

    data(){
      return{
        user: 
          {
          "email": 'greta.thunberg@example.se',
          "password": 'grillkorv123',
          "name": 'Johan Kivi',

          "address": {
            "street": 'Tokitokvägen 3',
            "zip": '123 45',
            "city": 'Tokberga'
          }
        }
      }
    }
}
</script>

<style scoped>
.new-account{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color:#CBE9EF;
  padding-bottom: 5rem;
  /* background-image: url('../assets/background-new-account.svg');
  background-repeat: no-repeat; */
}

.new-account-form{
  display: grid; 
  width: 25rem;
  grid-template-columns: repeat(2, auto);
  gap: 5px;  
}
.name, .address, .street, .email , .password{
  grid-column: 1 / span 2;
}
.zip{
  grid-column: 1;
}
.city{
  grid-column: 2;
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
}

.new-account-button{
  position: relative;
  left:65%;
  top:2rem;
}

label{
    padding: 1rem 0;
    /* margin-left: 2.2rem; */
    font-family: 'Ropa Sans', sans-serif;
    text-align: justify;
}

input{
    padding: .5rem;
    margin-bottom:1rem;
    border-style: none;
    border-radius: 5px;
    font-family:'Ropa Sans', sans-serif;
    font-size: 1rem;
}
</style>