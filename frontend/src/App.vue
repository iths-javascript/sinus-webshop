<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Yanone+Kaffeesatz:wght@400;700&display=swap');


$primary-clr: #3A7380; //teal
$secondary-clr-dk: #502677; //dark purple
$secondary-clr-lt: #AD91C8; //light purple
$tertiary-clr: #f45a8c; //pink
$off-white: #f1f1f1;


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

#app {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Yanone Kaffeesatz', sans-serif;
}

h1 {
  font-size: 9.6rem;
}

h2 {
  font-size: 7.2rem;
}

h3 {
  font-size: 4.8rem;
}

h4 {
  font-size: 4rem;
}

h5 {
  font-size: 3.6rem;
}
</style>
