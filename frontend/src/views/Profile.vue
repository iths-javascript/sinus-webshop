<template>
  <div class="profile">
    <h1>Im profile</h1>
    <div class="user-icon">

    <img src="@/assets/bird-blue.svg" alt="">
    </div>
    <div class="info-user">

    <UserInfo/>
    <OrderHistoric/>
    
    </div>
  
    <!-- <button @click="logOut">log out</button> -->
  </div>
</template>

<script>
import OrderHistoric from '@/components/OrderHistoric'
import UserInfo from '@/components/UserInfo'

export default {
  name: 'Profile',
  components: { OrderHistoric, UserInfo},
  methods: {
    // logOut(){
    //   window.sessionStorage.removeItem('LoggedIn')
    //   window.sessionStorage.removeItem('token')
    //   this.$store.commit('updateLoggedIn',false)
    //   this.$router.push('/')
    // }
  }

}

</script>

<style>

.profile{
  display:flex;
  background-color:#FFEBD3;
  flex-direction: column;
  padding: 3rem 5rem;
}

.info-user{
  display: grid;
  grid-template-columns: 1fr 1fr;
}

</style>