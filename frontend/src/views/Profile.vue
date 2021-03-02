<template>
  <div>
    <div v-if="!edit && isAuthenticated" class="profile">
      <button @click="editProfile">Edit profile</button>
      <ul>
        <li>Name: {{ user.name }}</li>
        <li>Role: {{ user.role }}</li>
        <li>Email: {{ user.email }}</li>
        <h4>Address</h4>
        <li>{{ user.address.street }}</li>
        <li>{{ user.address.zip }}</li>
        <li>{{ user.address.city }}</li>
      </ul>
      <ul>
        <h5>Order history:</h5>
        <li>{{user.history[0]}}</li>
      </ul>
    </div>
    <form v-if="edit">
      <label for="name">Name</label>
      <input v-model="formData.name" name="name" type="text" />
      <label for="email">Email</label>
      <input v-model="formData.email" name="email" type="email" />
      <label for="name">Street</label>
      <input v-model="formData.address.street" name="street" type="text" />
      <label for="zip">Zip</label>
      <input name="zip" type="text" v-model="formData.address.zip" />
      <label for="city">City</label>
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
    this.$store.dispatch('getUserHistory')
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

<style>
</style>