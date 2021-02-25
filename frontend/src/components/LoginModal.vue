<template>
  <div id="login-modal">
    <form>
      <section class="mail">
        <label for="email">Email</label>
        <input type="text" name="email" id="email" required />
      </section>
      <section class="password">
        <label for="password">Password</label>
        <input :type="password" id="password" required />
        <input type="checkbox" @click="showPassword" /> Visa lösenord
      </section>
      <input type="submit" value="Log in" />
    </form>
    <section class="footer">
      <router-link to="/SignUp">
        <p>Not registered?</p>
      </router-link>
      <button @click="exitLogin">Cancel</button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: "password",
    };
  },
  methods: {
    showPassword() {
      if (this.password === "password") {
        this.password = "text";
      } else if (this.password === "text") {
        this.password = "password";
      }
    },
    exitLogin() {
      this.$emit("clicked", false);
    },
  },
};
</script>

<style lang="scss" scoped>
#login-modal {
  position: relative;
  height: auto;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  animation-name: animatetop;
  animation-duration: 0.4s;
  padding: 16px;
}

/* Add Animation */
@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    input {
      width: 100%;
    }
  }
}
</style>