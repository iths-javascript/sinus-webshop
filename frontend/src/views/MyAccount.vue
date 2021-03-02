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
          @keyup.enter="updateUser"
          type="text"
        />
        <div class="img-wrapper">
          <img
            @click="editName = true"
            v-if="!editName"
            class="edit-icon"
            src="@/assets/icons/edit.svg"
            alt="Edit icon"
            title="Edit"
          />
          <img
            v-else
            @click="updateUser"
            class="check-icon"
            src="@/assets/icons/check-mark.svg"
            alt="Check icon"
            title="Done"
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
          @keyup.enter="updateUser"
          type="text"
        />
        <div class="img-wrapper">
          <img
            @click="editStreet = true"
            v-if="!editStreet"
            class="edit-icon"
            src="@/assets/icons/edit.svg"
            alt="Edit icon"
            title="Edit"
          />
          <img
            v-else
            @click="updateUser"
            class="check-icon"
            src="@/assets/icons/check-mark.svg"
            alt="Check icon"
            title="Done"
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
          @keyup.enter="updateUser"
          type="text"
        />
        <div class="img-wrapper">
          <img
            @click="editZip = true"
            v-if="!editZip"
            class="edit-icon"
            src="@/assets/icons/edit.svg"
            alt="Edit icon"
            title="Edit"
          />
          <img
            v-else
            @click="updateUser"
            class="check-icon"
            src="@/assets/icons/check-mark.svg"
            alt="Check icon"
            title="Done"
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
          @keyup.enter="updateUser"
          type="text"
        />
        <div class="img-wrapper">
          <img
            @click="editCity = true"
            v-if="!editCity"
            class="edit-icon"
            src="@/assets/icons/edit.svg"
            alt="Edit icon"
            title="Edit"
          />
          <img
            @click="updateUser"
            v-else
            class="check-icon"
            src="@/assets/icons/check-mark.svg"
            alt="Check icon"
            title="Done"
          />
        </div>
      </div>
    </div>
    <div class="order-history">
      <h2>ORDER HISTORY</h2>
      <div v-if="!orderHistory" class="no-orders"><p><em>No orders yet...</em></p></div>
      <ul v-else class="order-list">
        <li v-for="order in orderHistory" :key="order._id" class="order">
          <div class="order-row" @click="showOrder(order)">
              <div class="details-amount">
              <div class="details">
            <p>ORDER#: {{ order._id }}</p>
            <p>DATE: {{ calculateDate(order.timeStamp) }}</p>
          </div>
          <div class="amount">
            <p>TOTAL AMOUNT: {{ order.orderValue }} SEK</p>
          </div>
          </div>
          <div class="status" :style="{backgroundColor: order.status == 'inProcess' ? '#3E8A9B' : '#aaa', color: '#fff'}">STATUS: {{ orderStatus(order.status) }}</div>
          </div>
          <transition name="items">
          <ul v-if="showItems(order)" class="order-details">
            <li v-for="(item, index) in order.items" :key="index" class="order-item">
              <div class="img-container">
                 <img :src="getImg(item.imgFile)" alt="">
              </div>          
              <h5>{{item.title}}</h5>
              <p>Quantity: {{item.amount}}</p>
              <p>Price: {{item.price}} SEK</p>
              <p class="total">Subtotal: {{item.price * item.amount}} SEK</p>
            </li>
          </ul>
          </transition>
        </li>
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
        if (this.$store.getters.getOrderHistory && this.$store.getters.getOrderHistory.length) {
          return this.$store.getters.getOrderHistory
        }
      }

      return null
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
      displayedOrder: null
    }
  },
  methods: {
    getImg(url) {
      return require(`@/assets/products/${url}`)
    },
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
     calculateDate(timeStamp) {
      let year = new Date(timeStamp).getFullYear()
      let month = new Date(timeStamp).getMonth() + 1
      if (month < 10) {
        month = '0' + month
      }
      let day = new Date(timeStamp).getDate()
      if (day < 10) {
        day = '0' + day
      }

      return `${year}/${month}/${day}`
    },
    orderStatus(status) {
      if (status == 'inProcess') {
        return 'In progress'
      }

      return status
    },
    showItems(order) {
      if (this.displayedOrder) {
         return this.displayedOrder._id == order._id
      }
    return false
    },
    showOrder(order) {
      if (this.displayedOrder) {
        this.displayedOrder = null
      } else {
         this.displayedOrder = order
      }
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

  .order-history {
    align-items: center;
    display: flex;
    flex-direction: column;
    min-height: 20rem;
    margin-bottom: 10rem;

    .no-orders {
      font-size: 1.4rem;
      margin-top: 2rem;
    }

    .order-list {
      list-style: none;
      width: 100%;
      margin: 4rem auto 10rem;

      .order {   
        cursor: pointer;    
        font-size: 1.2rem;

        &:nth-child(odd) {
          background-color: #f1f1f1;
        }

        &:hover {
          opacity: 0.9;
        }

        .order-row {
          box-shadow: 0 2px 4px rgba(0, 0, 0, .05);
          display: flex;

          .details-amount {
            align-items: center;
            display: flex;
            padding: 1rem 2rem;

         
            .details,
            .amount {
              width: 20rem;
            }

            .details {
              font-weight: 300;
            }

            .amount {
              font-weight: 700;
            }
         }

          .status {
            align-items: center;
            display: flex;
            font-weight: 700;
            justify-content: center;
            width: 15rem;
          }
        }

        .items-enter,
        .items-leave-to {
          max-height: 0rem;
        }

        .items-enter-active, 
        .items-leave-active {
          transition: all 0.5s;
        }

        .items-enter-to,
        .items-leave {
          max-height: 30rem;
        }

        .order-details {
          cursor: default;
          list-style: none;
          overflow: hidden;

          .order-item {
            align-items: center;
            box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
            color: $secondary-clr-dk;
            display: flex;
            justify-content: space-between;
            padding: 1rem 2rem;
            .img-container {
              display: flex;
              justify-content: center;
              min-width: 5rem;
                 img {
              height: 4rem;
            }
            }
         

            h5 {
              color: #000;
              min-width: 40%;
            }

            .total {
              font-weight: 700;
            }
          }
        }
      }
    }
  }
}
</style>
