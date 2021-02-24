// accepts class teal, pink or offwhite som props

<template>
<button :class="color">
  <h5><slot></slot></h5>
  
</button>
</template>

<script>
export default {
  props: ["color"],
  
 
}
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

button {
  padding: 0.7rem 2rem;
  font-family: 'Yanone Kaffeesatz', sans-serif;
  text-transform: uppercase;
  border: none;
  cursor: pointer;  
  transition: all 0.25s ease;
}

.teal {
    background: $primary-clr;
  color: #fff;

  &:hover {
    background-color: $primary-clr-dk;
    transform: scale(1.05);
  }
  }

  .pink {
    background: $tertiary-clr;
    color: #000;
    

    &:hover {
    background-color: darken($tertiary-clr, 10%);
    transform: scale(1.05);
  }
  }

  .offwhite {
    background: $off-white;
    color: $secondary-clr-dk;

    &:hover {
    background-color: darken($off-white, 10%);
    transform: scale(1.05);
  }
  }

</style>