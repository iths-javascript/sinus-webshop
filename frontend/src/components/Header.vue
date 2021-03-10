<template>
  <div class="wrapper">
    <div class="top">
      <p>FREE Ground Shipping on All Orders & Extended Returns.</p>
      <p class="top-right">Help</p>
      <p class="top-right">Find Store</p>
    </div>
    <div class="navbar">
      <router-link :to="'product'">skateboard</router-link>
      <router-link :to="'product'" class="special"
        >the gonz <img src="@/assets/cutelike.svg" class="icon-cute" alt=""
      /></router-link>
      <router-link :to="'product'">wheels</router-link>
      <img class="logo" @click="goToHome" src="@/assets/logo.svg" alt="logo" />
      <router-link :to="'product'">t-shirt</router-link>
      <router-link :to="'product'" class="sneaker">sneakers</router-link>
      <div class="nav-icon">
        <img src="@/assets/search.svg" class="icon" alt="search" />
        <img src="@/assets/like.svg" class="icon" alt="favorites" />
        <img
          @click="showForm = !showForm"
          v-if="this.$store.state.userInfo.loggedIn === false"
          src="@/assets/user.svg"
          class="icon user"
          alt="user"
        />
        <img
          @click="showLogOut = !showLogOut"
          v-if="this.$store.state.userInfo.loggedIn === true"       
          src="@/assets/login-icon-pink.svg"
          class="icon user"
          alt="user"
        />
        <img
          src="@/assets/cart.svg"
          class="icon"
          alt="cart"
          @click="goToCart"
        />
      </div>
    </div>
    <Overlay v-if="showForm" @close="showForm = false">
      <LoginForm @close="showForm = false" />
    </Overlay>
    <OverlayUser v-if="showLogOut" @close="showLogOut = false">
      <MyAccount @close="showLogOut = false" />
    </OverlayUser>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm";
import Overlay from "@/components/Overlay.vue";
import OverlayUser from "@/components/OverlayUser.vue";
import MyAccount from "@/components/MyAccount.vue";

export default {
  data() {
    return {
      showForm: false,
      showLogOut: false,
    };
  },

  components: { LoginForm, Overlay, MyAccount, OverlayUser },

  methods: {
    goToProfile() {
      this.$router.push("/profile");
    },
    goToCart() {
      this.$router.push("/cart");
    },
    goToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 6%;
}

li {
  padding: 0 2rem;
  font-size: 1.2rem;
  margin-top: 0rem;
}

.user {
  cursor: pointer;
}

.nav-icon {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.icon {
  padding: 0 0.6rem;
  cursor: pointer;
}

.special {
  display: flex;
  padding: 0 0.8rem;
}

.sneaker {
  padding: 0rem;
}

.icon-cute {
  width: 30%;
  padding-left: 0.5rem;
}

.top-right {
  margin-right: 2rem;
}
.wrapper {
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
}

.top {
  display: flex;
  width: 100%;
  height: 35px;
  background-color: #2b2b2b;
}

p {
  margin: 5px auto 5px 20px;
  font-family: Ropa Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 14px;
  letter-spacing: 0.03em;
  color: #f1f1f1;
}

.navbar {
  display: flex;
  justify-content: space-around;
  padding: 0 3%;
  align-items: center;
  width: 100%;
  font-size: 1.2rem;
  background-color: #f1f1f1;
  height: 5rem;
}

a {
  text-decoration: none;
  color: #2b2b2b;
}
.logo {
  cursor: pointer;
  margin-top: -40px;
}
</style>
