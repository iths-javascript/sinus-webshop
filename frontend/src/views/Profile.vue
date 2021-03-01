<template>
  <div class="profile" id="user-nav">
    <h1>Hej User</h1>
    <ul>
      <li>User Info</li>
      <li>Order Historic</li>
    </ul>
    <!-- <Overlay> 
    </Overlay> -->

  </div>
</template>

<script>
// import OrderHistoric from '@/components/OrderHistoric'
// import InfoUser from '@/components/InfoUser'
// import Overlay from '@/components/Overlay'

export default {
  name: 'Profile',
  // components: { OrderHistoric, InfoUser, Overlay},
  //  components: { Overlay}

}
</script>

<style>


.profile{
 /* position: absolute;
 top:20px; */
    min-width: 400px;
background-color:#F5ADB8;

  height: auto;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
    
 
    flex-direction: column;
    box-shadow: -10px 10px #FFEBD3;
    
    /* background-image: url("../assets/bird-yellow.svg"), url("../assets/bird-blue.svg"); */
    /* background-repeat: no-repeat; */

}
#user-nav {
      max-width: 380px;
      min-height: auto;
      background: #F5ADB8;
      position: relative;
      /* -moz-border-radius: 10px;
      -webkit-border-radius: 10px; */
      /* border-radius: 10px; */
    }
    #user-nav:before {
      content: "";
      position: absolute;
      left:79.8%;
      top:-20px;
    
      /* right: 100%;
      top: 26px; */
       width: 0;
      height: 0;
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
      border-bottom: 20px solid #F5ADB8;
      /* width: 0;
      height: 0;
      border-top: 13px solid transparent;
      border-right: 26px solid blue;
      border-bottom: 13px solid transparent; */
    }
/* #talkbubble {
      width: 120px;
      height: 120px;
      background: red;
      position: relative;
      /* -moz-border-radius: 10px;
      -webkit-border-radius: 10px; */
      /* border-radius: 10px; */
    /* } */
    /* #talkbubble:before {
      content: "";
      position: absolute;
      left:35%;
      top:-30px; */
    
      /* right: 100%;
      top: 26px; */
       /* width: 0;
      height: 0;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-bottom: 30px solid red; */
      /* width: 0;
      height: 0;
      border-top: 13px solid transparent;
      border-right: 26px solid blue;
      border-bottom: 13px solid transparent; */
    /* } */ 
  

</style>