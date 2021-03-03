<template>
<div class="my-account">

  <h2>My account</h2>
  <ul>
    <li>
      Name: {{ user.name }} <br> 
      Address: {{ user.address.street }}, {{ user.address.zip }}, {{ user.address.city }}<br>
      Email: {{ user.email }} <br>
      Role: {{ user.role }}
    </li>
  </ul>
</div>
</template>

<script>

export default {
  name:'UserInfo',

  computed:{
    user(){
      return this.$store.state.user
    }
  }
  
}

</script>

<style>

.my-account{
 padding: 0 3rem;
}

</style>