<template>
  <div>
    
      <div class="recommendations">
        
        <button @click="fetchImages">fetch</button>
      </div>
      <!-- <LoginForm/> -->
  
  </div>
</template>




<script>
// import LoginForm from '@/components/LoginForm'
import * as API from '../api/api'

export default {
  name:'Home',
// components:{LoginForm},
  

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
