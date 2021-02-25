<template>
  <div class="overlay">
      <div class="fade-layer"></div>
          <div class="content-form">
              <slot></slot>
              <!-- <LoginForm/> -->
          </div>

      
  </div>
</template>

<script>
// import LoginForm from '@/components/LoginForm.vue'
export default {
    name: 'Overlay',
    components:{
        // LoginForm
    }

}
</script>

<style>
.fade-layer{
    position: fixed;
    left:0; bottom: 0; right: 0; top:0;
    opacity: .5;
    background-color:black;
}
.content-form{
    position: fixed;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);
}

</style>