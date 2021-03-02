<template>
  <div id="login-modal">
    <form @submit.prevent="authentication">
      <section class="mail">
        <label for="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          v-model="userMail"
          required
        />
      </section>
      <section class="password">
        <label for="password">Password</label>
        <input :type="password" id="password" v-model="userPassWord" required />
        <input type="checkbox" @click="showPassword" /> Visa lösenord
      </section>
      <input type="submit" value="Log in" />
    </form>
    <section class="footer">
      <router-link to="/SignUp">
        <p @click="exitLogin">Not registered?</p>
      </router-link>
      <button @click="exitLogin">Cancel</button>
    </section>
  </div>
</template>

<script>
import { logIn, POST_URL_AUTH } from "@/api/post.js";
import { getUser, POST_URL_USER } from "@/api/get.js";

export default {
  data() {
    return {
      password: "password",
      userMail: "",
      userPassWord: "",
      token: "",
    };
  },

  methods: {
    authentication: async function () {
      const userLogin = {
        email: this.userMail,
        password: this.userPassWord,
      };

      const response = await logIn(POST_URL_AUTH, userLogin);

      if (response === 200) {
        this.$store.commit("changeLoginStatus");
        this.exitLogin();
        const userData = await getUser(POST_URL_USER);

        this.$store.commit("setUserData", userData);
      } else {
        alert("Finns ingen sådan användare / Fel ifyllt email eller lösen");
      }
    },

    showPassword() {
      if (this.password === "password") {
        this.password = "text";
      } else if (this.password === "text") {
        this.password = "password";
      }
    },

    exitLogin() {
      this.$emit("closeLogin");
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