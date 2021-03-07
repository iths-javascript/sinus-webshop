<template>
  <div class="profile">
    <h1>Hej {{ this.$store.state.userInfo.user.name}} </h1>
    <div class="user-icon">

    <img src="@/assets/bird-blue.svg" alt="">
    </div>
    <div class="info-user">
      <UserInfo/>
      <OrderHistoric/>
    </div>
  </div>
</template>

<script>
import OrderHistoric from '@/components/OrderHistoric'
import UserInfo from '@/components/UserInfo'

export default {
  name: 'Profile',
  
  components: { OrderHistoric, UserInfo},
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