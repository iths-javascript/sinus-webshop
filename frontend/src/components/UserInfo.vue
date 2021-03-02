<template>
<div class="my-account">

  <h2>My account</h2>
  <ul>
    <li>id: {{this.$store.state.user._id}}</li>
    <li>Name:  {{this.$store.state.user.name}}</li>
    <li>Password: {{this.$store.state.user.password}}</li>
    <li>Address: {{this.$store.state.user.address}}</li> 
  </ul>
  <button>Change info</button>
</div>
</template>

<script>

export default {
  name:'UserInfo',
  
}

</script>

<style>

.my-account{
 padding: 0 3rem;
}

</style>