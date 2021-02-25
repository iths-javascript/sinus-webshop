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
  font-family: 'Bebas Neue';
  background-color: white;
  height: 327px;
  width: 245px;
}

</style>