<template>
  <div>
  
  
  </div>
</template>




<script>

import * as API from '../api/api'

export default {
  name:'Home',
  

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
