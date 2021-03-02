<template>
  <section>
    <h1>404!</h1>
    <p>Sorry, we couldn't find that page...</p>
    <img src="@/assets/icons/skateboard-broken.png" alt="Broken Skateboard">
    <router-link to="/"><BaseButton class="return-button" color="teal">Return home</BaseButton></router-link>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';

section {
  align-items: center;
  cursor: default;
  display: flex;
  flex-direction: column;
  margin: 10rem auto;
  max-width: 50%;
  min-height: 80vh;

  h1 {
    font-size: 10rem;
  }

  p {
     color: $primary-clr;
    font-size: 2rem;
    margin-bottom: 3rem;
  }

  img {
    width: 20rem;
  }

  a {
     margin-top: 5rem;
  }
 
}
</style>