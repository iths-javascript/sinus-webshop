<template>
  <div>
    <Header />
      <div class="recommendations">
        
        <button @click="fetchImages">fetch</button>
      </div>
  
  </div>
</template>




<script>

import * as API from '../api/api'
import Header from "../components/Header.vue"
export default {
  components:{Header},

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
