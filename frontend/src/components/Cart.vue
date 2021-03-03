<template>
  <div class="wrapper">
    <div class="order"></div>
    <div class="detail"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  height: 100%;
}
</style>
