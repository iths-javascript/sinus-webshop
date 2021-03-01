<template>
  <div class="overlay">
      <div class="fade-layer" @click="$emit('close')"></div>
          <div class="content-form">
              <slot></slot>
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
    /* opacity: .5;
    background-color:black; */
}
.content-form{
    position: absolute;
    left: 75rem;
    top:25rem;
    transform: translate(-50%,-50%);
}

.user-nav{
    position: absolute;
    left: 70rem;
    top: 15rem;
    transform: translate(-50%,-50%);
}


</style>