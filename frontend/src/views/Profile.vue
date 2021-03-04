<template>
  <div class="profile-container">
    <div v-if="!edit && isAuthenticated" class="profile">
      <button class="edit-btn" @click="editProfile">Edit profile</button>
      <ul class="user-details">
        <header>
          <img src="../assets//user.png" class="user" />
          <h2>{{ user.name }}</h2>
          <h3>Email: {{ user.email }}</h3>
          <!-- <p>{{ user.address.street }}</p> -->
          <hr />
        </header>
        <h4>Address</h4>
        <li>{{ user.address.street }}</li>
        <li>{{ user.address.zip }}</li>
        <li>{{ user.address.city }}</li>
      </ul>
      <br />
      <ul v-if="user.history[0]">
        <h5>Order history:</h5>
        <li>{{ user.history[0]._id }}</li>
      </ul>
    </div>
    <form v-if="edit">
      <label for="name">Name:</label>
      <input v-model="formData.name" name="name" type="text" />
      <label for="email">Email:</label>
      <input v-model="formData.email" name="email" type="email" />
      <label for="name">Street:</label>
      <input v-model="formData.address.street" name="street" type="text" />
      <label for="zip">Zip:</label>
      <input name="zip" type="text" v-model="formData.address.zip" />
      <label for="city">City:</label>
      <input v-model="formData.address.city" name="city" type="text" />
      <button @click.prevent="confirmEdit">Confirm changes</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      edit: false,
      formData: {
        name: "",
        email: "",
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
    user() {
      return this.$store.getters.getUser;
    },
  },
  mounted() {
    if (!this.isAuthenticated) {
      this.$router.push("/");
    }
    this.$store.dispatch("getUserHistory");
  },

  methods: {
    editProfile() {
      this.edit = !this.edit;
    },
    confirmEdit() {
      this.$store.dispatch("editUser", this.formData);
      this.edit = false;
    },
  },
};
</script>

<style scoped>
h4 {
  font-family: "Lato", sans-serif;
  font-size: 25px;
}
.profile-container {
  color:rgb(31, 28, 28);
  margin: 200px auto;
  max-width: 1440px;
  width: 60%;
  background-color: whitesmoke;
  margin-bottom: 100px;
   box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);

}

.edit-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: "Lato", sans-serif;
  font-size: 1.2rem;
  border: none;
  outline: none;
  padding: 10px 0;
  font-weight: 500;
  color: #fbfbfb;
  padding: 10px 20px;
  margin: 10px 0;
  /* border: 0.125rem solid rgba(0, 0, 0, 0.6); */
  background-color: #5eb593;
  box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.15);
}
ul {
  list-style: none;
}

ul li {
  font-size: 20px;
  padding: 5px 0;
}

form {
  display: flex;
  flex-direction: column;
  margin: 100px auto;
  max-width: 1440px;
  width: 70%;
}

form label {
  margin-bottom: 5px;
  margin-top: 5px;
}

form button {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: "Lato", sans-serif;
  font-size: 1.2rem;
  border: none;
  outline: none;
  padding: 10px 0;
  font-weight: 500;
  color: #fbfbfb;
  padding: 10px 20px;
  margin: 20px 0;
  background-color: #5eb593;
  box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.15);
}
.user {
  width: 150px;
  height: 150px;
}
</style>
