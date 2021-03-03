<template>
  <div class="my-account" id="talkbubble">
      <ul>
          <li @click="goToProfile">My Account</li>
          <li @click="logOut">Log Out</li>
      </ul>
  </div>
</template>

<script>
export default {
name:'MyAccount',

methods:{
    logOut(){
        window.sessionStorage.removeItem('LoggedIn')
        window.sessionStorage.removeItem('token')
        this.$store.commit('updateLoggedIn',false)
        this.$router.push('/')
        this.$emit('close')
    },
    goToProfile(){
        this.$store.dispatch('user');
        this.$router.push('/profile')
        this.$emit('close')
    }
}
}
</script>

<style scoped>

ul {
    display:flex;
    flex-direction: column; 
}

li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 230px;
    height: 50px;
    margin: .5rem 0;
}

li:hover{
    background-color:#2B2B2B;
    color:whitesmoke
}

.my-account{
    background-color:#F5ADB8;
    width: 15rem;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: -10px 10px #FFEBD3; 
}

#talkbubble {
      max-width: 380px;
      min-height: auto;
      background: #F5ADB8;
      position: relative;
    }
    #talkbubble:before {
      content: "";
      position: absolute;
      left:79.8%;
      top:-20px;
      width: 0;
      height: 0;
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
      border-bottom: 20px solid #F5ADB8;
    }
    
</style>