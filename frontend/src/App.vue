<template>
  <div class="app-wrapper">
    <The-header></The-header>
    <router-view />
    <The-footer></The-footer>
  </div>
</template>
<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  async created() {
    await this.$store.dispatch('fetchProducts')
    const userToken = JSON.parse(sessionStorage.getItem('user'))
    if (userToken) {
      await this.$store.dispatch('getUser', userToken)
    }
  },
  updated() {
     window.scrollTo({ top: 0 })
  },
  components: {
    TheHeader,
    TheFooter,
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Yanone+Kaffeesatz:wght@400;700&display=swap');
@import './styles/_variables.scss';

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  font-size: 62.5%;
}

body {
  font-family: 'Open Sans', sans-serif;
}

.app-wrapper {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Yanone Kaffeesatz', sans-serif;
}

h1 {
  font-size: 5.6rem;
}

h2 {
  font-size: 4.2rem;
}

h3 {
  font-size: 3.6rem;
}

h4 {
  font-size: 3rem;
}

h5 {
  font-size: 2.4rem;
}
</style>
