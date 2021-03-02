<template>
  <div class="my-account" id="talkbubble">
      <ul>
          <li>My Account</li>
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
    //   this.$router.push('/')
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
    /* width: 100%; */
    height: 50px;
    /* margin: 1rem 0; */
}
li:hover{
    background-color:black;
    color:whitesmoke}
.my-account{
    background-color:#F5ADB8;
    min-width: 20rem;
    height: auto;
    padding: 1rem;
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