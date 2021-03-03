<template>
  <div class="overlay-user">
      <div class="fade-layer" @click="$emit('close')"></div>
          <div class="user-nav">
              <slot></slot>
          </div>   
  </div>
          
</template>

<script>

export default {
    name: 'OverlayUser',

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
    right: 0.8%;
    top: 11.4rem;
    transform: translate(-50%,-50%);
    z-index: 1;
}


</style>