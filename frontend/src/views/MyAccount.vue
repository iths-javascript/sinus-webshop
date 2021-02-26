<template>
  <section>
    <h2>MY INFORMATION</h2>
    <div v-if="!user || !userDetails" class="loading">
      <h2>Loading data...</h2>
    </div>
    <div v-else class="information-wrapper">
      <p class="bold">My information</p>

      <div class="view-row">
        <label>Full Name</label>
        <p v-if="!editName" class="info">{{ userDetails.name }}</p>
        <input
          v-else
          v-model="userDetails.name"
          @keyup="error.name = false"
          type="text"
        />
        <div class="img-wrapper">
          <img
            @click="editName = true"
            v-if="!editName"
            class="edit-icon"
            src="@/assets/icons/icon-edit-white.svg"
            alt="Edit icon"
            title="Edit"
          />
          <img
            v-else
            @click="updateUser"
            class="check-icon"
            src="@/assets/icons/check-mark.svg"
            alt="Edit icon"
            title="Edit"
          />
        </div>
      </div>
      <p v-show="error.name" class="error">Please provide your full name</p>

      <div class="view-row">
        <label>Street Address</label>
        <p v-if="!editStreet" class="info">{{ userDetails.address.street }}</p>
        <input
          v-else
          v-model="userDetails.address.street"
          @keyup="error.street = false"
          type="text"
        />
        <div class="img-wrapper">
          <img
            @click="editStreet = true"
            v-if="!editStreet"
            class="edit-icon"
            src="@/assets/icons/icon-edit-white.svg"
            alt="Edit icon"
            title="Edit"
          />
          <img
            v-else
            @click="updateUser"
            class="check-icon"
            src="@/assets/icons/check-mark.svg"
            alt="Edit icon"
            title="Edit"
          />
        </div>
      </div>
      <p v-show="error.street" class="error">Please provide a street address</p>

      <div class="view-row">
        <label>Zip Code</label>
        <p v-if="!editZip" class="info">{{ userDetails.address.zip }}</p>
        <input
          v-else
          v-model="userDetails.address.zip"
          @keyup="error.zip = false"
          type="text"
        />
        <div class="img-wrapper">
          <img
            @click="editZip = true"
            v-if="!editZip"
            class="edit-icon"
            src="@/assets/icons/icon-edit-white.svg"
            alt="Edit icon"
            title="Edit"
          />
          <img
            v-else
            @click="updateUser"
            class="check-icon"
            src="@/assets/icons/check-mark.svg"
            alt="Edit icon"
            title="Edit"
          />
        </div>
      </div>
      <p v-show="error.zip" class="error">Please provide a zip code</p>

      <div class="view-row">
        <label>City</label>
        <p v-if="!editCity" class="info">{{ userDetails.address.city }}</p>
        <input
          v-else
          v-model="userDetails.address.city"
          @keyup="error.city = false"
          type="text"
        />
        <div class="img-wrapper">
          <img
            @click="editCity = true"
            v-if="!editCity"
            class="edit-icon"
            src="@/assets/icons/icon-edit-white.svg"
            alt="Edit icon"
            title="Edit"
          />
          <img
            @click="updateUser"
            v-else
            class="check-icon"
            src="@/assets/icons/check-mark.svg"
            alt="Edit icon"
            title="Edit"
          />
        </div>
      </div>
    </div>
    <div class="order-history">
      <h2>ORDER HISTORY</h2>
      <ul>
        <li v-for="order in orderHistory" :key="order._id">{{ order._id }}</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    edit() {
      if (this.editName || this.editStreet || this.editZip || this.editCity) {
        return true
      }

      return false
    },
    user() {
      return this.$store.getters.getCurrentUser
    },
    userDetails() {
      if (this.user) {
        return {
          name: this.user.name,
          address: {
            street: this.user.address.street,
            city: this.user.address.city,
            zip: this.user.address.zip,
          },
        }
      } else {
        return {}
      }
    },
    orderHistory() {
      if (this.user) {
        return this.$store.getters.getOrderHistory
      } else {
        return {}
      }
    },
  },
  data() {
    return {
      editName: false,
      editStreet: false,
      editZip: false,
      editCity: false,
      error: {
        name: false,
        street: false,
        zip: false,
        city: false,
      },
    }
  },
  methods: {
    updateUser() {
      this.editName = false
      this.editStreet = false
      this.editZip = false
      this.editCity = false

      if (this.validateUserDetails()) {
        this.$store.dispatch('updateUser', this.userDetails)
      }
    },
    validateUserDetails() {
      if (this.userDetails.name.length < 5) {
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
      return true
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';

section {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 7rem;

  .loading {
    min-height: 40rem;
  }

  .information-wrapper {
    display: flex;
    flex-direction: column;
    width: 35%;
    margin: 4rem auto 10rem;

    .bold {
      font-size: 1.6rem;
      font-weight: 700;
      margin-top: 3rem;
    }

    .view-row {
      align-items: center;
      display: flex;
      justify-content: space-between;
      margin-top: 2rem;
      width: 100%;

      label {
        font-size: 1.2rem;
        min-width: 10rem;
      }

      .info,
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
      .img-wrapper {
        min-width: 3rem;
        .edit-icon,
        .check-icon {
          cursor: pointer;

          margin-left: 1rem;
        }
        .edit-icon {
          width: 1.5rem;
        }

        .check-icon {
          width: 2rem;
        }
      }
    }
    .centered {
      margin: 3rem auto;
      width: inherit;
    }
  }
}
</style>
