<template>
  <form>
    <!-- <h4>Enter login credentials</h4> -->
    <div class="input-group col-2">
      <label for="">Email</label>
      <input name="email" type="email" />
    </div>
    <div class="input-group">
      <label for="password">Password</label>
      <input name="password" type="password" />
    </div>
    <div class="input-group">
      <label for="name">Name</label>
      <input name="name" type="text" />
    </div>
    <!-- <h5>Enter Address</h5> -->
    <div class="input-group">
      <label for="street">Street address</label>
      <input name="street" type="text" />
    </div>
    <div class="input-group">
      <label for="zip">Zip/Postal code</label>
      <input name="zip" type="text" />
    </div>
    <div class="input-group">
      <label for="city">City</label>
      <input name="city" type="text" />
    </div>
    <button class="submit-btn" type="submit">Register</button>
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
        street: "",
        zip: "",
        city: "",
      },
    };
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
  margin: 60px auto;
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
/* .col-2 {
  grid-column: auto/span 2;
} */
</style>