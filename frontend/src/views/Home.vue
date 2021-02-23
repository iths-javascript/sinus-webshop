<template>
  <div>
      <div class="recommendations">
        <button @click="fetchImages">fetch</button>
      </div>
  
  </div>
</template>




<script>

import * as API from '../api/api'

export default {

methods: {
  fetchImages() {
    console.log(API.getProducts());
  }
}
 
}
</script>
<style scoped>
.recommendations {
  background-color:lightblue;
  width:800px;
  height:500px;
}
</style>
