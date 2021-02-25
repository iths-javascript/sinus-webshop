<template>
  <article>
  {{product.title}}
  </article>
</template>

<script>
export default {
 props:{
   product: Object
 }
}
</script>

<style scoped>
article{
  background-color: white;
  height: 327px;
  width: 245px;
}

</style>