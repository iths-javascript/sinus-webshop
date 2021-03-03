<template>
  <div class="overlay">
      <div class="fade-layer" @click="$emit('close')"></div>
          <div class="content-form">
              <slot></slot>
          </div>   
  </div>
          
</template>

<script>

export default {
    name: 'Overlay',
   
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
    right: -6.4%;
    top:23.2rem;
    transform: translate(-50%,-50%);
    z-index: 1;
}

</style>