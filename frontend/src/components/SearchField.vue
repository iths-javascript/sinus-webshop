<template>
    <div class="search-field-wrapper">
        <input @input="setSearchPhrase" v-model="searchPhrase" type="text">
        <span class="search-icon-wrapper">
            <img src="@/assets/icons/search.svg" alt="">
        </span>

    </div>

</template>

<script>
export default {
    data(){
        return{
            searchPhrase: ''
        }
    },
    methods:{
        setSearchPhrase(){
            this.searchPhrase = this.searchPhrase.toLowerCase()
            this.$store.dispatch('setSearchPhrase', this.searchPhrase)
        }
    },
    computed:{
        getSearchPhrase(){
            return this.$store.getters.getSearchPhrase
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.search-field-wrapper{
    display: flex;
    align-items: center;
    margin-right: 6rem;
    input{
        height: 3.4rem;
        border: none;
        padding: 4px;
        outline: none;
        font-size: 1.6rem;
    }
    .search-icon-wrapper{
        background-color: $secondary-clr-dk;
        height: 3.4rem;
        // width: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4px 3px;
        img{
            height: 2.6rem;
        }
    }
}
</style>