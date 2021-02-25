<template>
  <div id="login-modal">
    <form>
      <label for="email">Email</label>
      <input type="text" name="email" id="email" />
      <br />
      <label for="password">Password</label>
      <input type="password" id="password" />
      <br />
      <input type="submit" value="Log in" />
    </form>
    <router-link to="/SignUp">
      <p>Not registered?</p>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#login-modal {
  position: relative;
  height: 100px;
  background-color: white;
  border: 2px black solid;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  animation-name: animatetop;
  animation-duration: 0.4s;
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
input {
  width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
</style>