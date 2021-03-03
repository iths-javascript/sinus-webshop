<template>
  <form>
    <!-- <h4>Enter login credentials</h4> -->
    <div class="input-group col-2">
      <label for="">Email</label>
      <input v-model="formData.email" name="email" type="email" />
    </div>
    <div class="input-group">
      <label for="password">Password</label>
      <input v-model="formData.password" name="password" type="password" />
    </div>
    <div class="input-group">
      <label for="name">Name</label>
      <input v-model="formData.name" name="name" type="text" />
    </div>
    <!-- <h5>Enter Address</h5> -->
    <div class="input-group">
      <label for="street">Street address</label>
      <input v-model="formData.address.street" name="street" type="text" />
    </div>
    <div class="input-group">
      <label for="zip">Zip/Postal code</label>
      <input v-model="formData.address.zip" name="zip" type="text" />
    </div>
    <div class="input-group">
      <label for="city">City</label>
      <input v-model="formData.address.city" name="city" type="text" />
    </div>
    <button class="submit-btn" type="submit" @click.prevent="registerUser">
      Register
    </button>

    <button @click.prevent="goToLogin">Already have an account? Log in</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        email: "",
        password: "",
        name: "",
        address: {
          street: "",
          zip: "",
          city: "",
        },
      },
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    registerUser() {
      this.$store.dispatch("registerUser", this.formData);
    },
    goToLogin() {
      this.$router.push("/login");
    },
  },
  mounted() {
    if (this.isAuthenticated) {
      this.$router.push("/");
    }
  },
};
</script>

<style scoped>
form {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin: 2rem 0 0;
  max-width: 850px;
  margin: 100px auto;
}

form input{
  background-color: white;
}

.input-group {
  position: relative;
}

input {
  width: 100%;
  font-weight: 400;
  font-size: 18px;
  height: 52px;
  line-height: 52px;
  outline: none;
  transition: all 0.25s;
  position: relative;
  z-index: 10;
  background: transparent;
}

input:focus ~ label {
  top: -1.5rem;
  left: 0;
  font-size: 1em;
}

.submit-btn {
  padding: 20px;
  font-size: 2rem;
  outline: none;
  grid-column: span 2;
}

</style>