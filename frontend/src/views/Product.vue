<template>
    <div class="container">
        <div class="top">
            <img src="../assets/Rectangle 52.svg">
        </div>
         <nav >
            <p @click="tab = 'skateboards'">skateboards</p>
            <p @click="tab = 'wheels'">wheels</p>
            <p @click="tab = 't-shits'">t-shirts</p>
            <p @click="tab = 'hoodies'">hoodies</p>
            <p @click="tab = 'sneakers'">sneakers</p>
        </nav>
        <div class="main">
            <img :src="require(imgFile)">
        </div>
    </div>
</template>

<script>



export default {

data() { return {
    tab: "skateboards"
}},

computed: {
    imgFile() {
        return this.$store.state.images;
    } 
},

beforeMount() {

        this.$store.dispatch('drawImage');
}

}

</script>

<style style>

.container {
    margin:auto;
    width:1440px;
    height:3074px;
    display:flex;
    flex-direction:column;
    align-items:center;
  

    
}

.top {
    width:1440px;
    height:655px;
    background-color:#F4C3C3;
    display:flex;
    align-items:center;
    justify-content:center;
}

.main {
    width:1440px;
    height:1800px;
    display:grid;
    grid-template-columns: 345px 345px 265px;
    grid-template-rows:611px 466px;
    background-image: url('../assets/background-products.svg');

}

nav {
    display:flex;
    margin-top:3rem;
}

nav p {
    margin-left:50px;
    cursor:pointer;
}


</style>