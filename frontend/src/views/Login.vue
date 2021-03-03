<template>
  <form>
    <div class="input-group col-2">
      <label for="">Email</label>
      <input v-model="formData.email" name="email" type="email" />
    </div>
    <div class="input-group">
      <label for="password">Password</label>
      <input v-model="formData.password" name="password" type="password" />
    </div>
    <button class="submit-btn" type="submit" @click.prevent="loginUser">
      Login
    </button>
    <button @click.prevent="goToRegister">
      Don't have an account? Register
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    loginUser() {
      this.$store.dispatch("loginUser", this.formData);
    },
    goToRegister() {
      this.$router.push("/register");
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
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 2rem 0 0;
  max-width: 700px;
  margin: 100px auto;
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
  background-color: white;
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