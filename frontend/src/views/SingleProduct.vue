<template>
 <div>
    <div class="top">
        <div class="left">
            <img :src="require(`../assets/${product[0].imgFile}`)" width="10%">
        </div>
        <div class="right"></div>
    </div>
</div> 
</template>

<script>
export default {


computed: {

    product() {
       
        const data = this.$store.getters.singleProductImg(this.$route.params.id);
        console.log(data);
        return data
    }
}

}
</script>

<style scoped>

</style>