<template>
<section>
  <h2>REGISTER ACCOUNT</h2>
  <form ref="regForm" @submit.prevent="registerUser" action="" class="register-form">
    <p class="bold">Delivery Address</p>

    <div class="input-row">
      <label>Full Name</label>
      <input v-model="userDetails.name" @keyup="error.name = false" type="text">
    </div>
    <p v-show="error.name" class="error">Please provide your full name</p>

    <div class="input-row">
      <label>Street Address</label>
      <input v-model="userDetails.address.street" @keyup="error.street = false" type="text">
    </div>
    <p v-show="error.street" class="error">Please provide a street address</p>

    <div class="input-row">
      <label>Zip Code</label>
      <input v-model="userDetails.address.zip" @keyup="error.zip = false" type="text">
    </div>
    <p v-show="error.zip" class="error">Please provide a zip code</p>

    <div class="input-row">
      <label>City</label>
      <input v-model="userDetails.address.city" @keyup="error.city = false" type="text">
    </div>
    <p v-show="error.city" class="error">Please provide a city</p>

    <p class="bold">Contact details</p>
      
    <div class="input-row">
      <label>Email</label>
      <input v-model="userDetails.email" @keyup="error.email = false" type="text">
    </div>
    <p v-show="error.email" class="error">Please provide a valid email address</p>

    <div class="input-row">
    <label>Password</label>
    <input v-model="userDetails.password" @keyup="error.password = false" type="password">
    </div>
    <p v-show="error.password" class="error">Password must be at least 6 characters</p>
  
    <BaseButton class="centered" color="teal">Sign me up!</BaseButton>
  </form>
</section>
</template>

<script>
export default {
  data() {
    return {
      userDetails: {
        email: '',
        password: '',
        name: '',    
        address: {
          street: '',
          city: '',
          zip: ''
        }
      },
      error: {
        name: false,
        street: false,
        zip: false,
        city: false,
        email: false,
        password: false
      },
    }
  },
  methods: {
     registerUser() {
      if (this.validateUserDetails()) {
         this.$store.dispatch('registerUser', this.userDetails)
         this.$refs.regForm.reset()
        this.$router.push('/')
      }
    },
    validateUserDetails() {
      if (this.userDetails.name.length < 5) {
        console.log('yes')
        this.error.name = true
        return false
      }
       if (this.userDetails.address.street.length < 5) {
        this.error.street = true
          return false
      }
       if (this.userDetails.address.zip.length < 5) {
        this.error.zip = true
          return false
      }
       if (this.userDetails.address.city.length < 5) {
        this.error.city = true
          return false
      }
      const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[x01-x08x0bx0cx0e-x1fx21x23-x5bx5d-x7f]|\\[x01-x09x0bx0cx0e-x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[x01-x08x0bx0cx0e-x1fx21-x5ax53-x7f]|\\[x01-x09x0bx0cx0e-x7f])+)\])/
       if (!this.userDetails.email.match(regex)) {
        this.error.email = true
          return false
      }
       if (this.userDetails.password.length < 6) {
        this.error.password = true
          return false
      }
      return true
    },
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
section {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 7rem;

  .register-form {
    display: flex;
    flex-direction: column;
    width: 35%;
    margin: 4rem auto 10rem;

  .bold {
    font-size: 1.6rem;
    font-weight: 700;
    margin-top: 3rem;
  }

  .input-row {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    width: 100%;

    label {
      font-size: 1.2rem;
      min-width: 10rem;
    }

    input {
      background-color: $off-white;
        border: 1px solid $secondary-clr-dk;
        font-family: inherit;
        font-size: 1.4rem;
        height: 3rem;
        outline: none;
        padding: 0.5rem;
        width: 75%;
    }
  }
     .error {
      color: red;
      font-weight: 500;
      margin-left: auto;
    }

  .centered {
    align-self: center;
    margin-top: 3rem;
  }
}
}


</style>