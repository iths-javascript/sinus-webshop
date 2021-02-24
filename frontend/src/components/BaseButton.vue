<template>
<button>
  <slot></slot>
</button>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

button {
  padding: 0.5rem 1.5rem;
  background: $primary-clr;
  color: #fff;
  font-family: 'Yanone Kaffeesatz', sans-serif;
  text-transform: uppercase;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: $primary-clr-dk;
  }
}

</style>