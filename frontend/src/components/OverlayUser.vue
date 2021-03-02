<template>
  <div class="overlay-user">
      <div class="fade-layer" @click="$emit('close')"></div>
          <div class="user-nav">
              <slot></slot>
          </div>   
  </div>
          
</template>

<script>
// import LoginForm from '@/components/LoginForm.vue'
export default {
    name: 'OverlayUser',
    components:{
        // LoginForm
    }

}
</script>

<style>
.fade-layer{
    position: fixed;
    left:0; bottom: 0; right: 0; top:0;
    /* opacity: .5;
    background-color:black; */
}

.user-nav{
    position: fixed;
    left: 78.7rem;
    top: 11.5rem;
    transform: translate(-50%,-50%);
}


</style>