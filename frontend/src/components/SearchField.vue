<template>
    <div class="search-field-wrapper">
        <div class="search-input-wrapper">
            <input @input="setSearchPhrase" v-model="searchPhrase" type="text">
            <div v-if="searchPhraseLength" class="search-result-wrapper">
                <ul>
                    <li
                    v-for="product in getSearchProducts" :key="product._id"
                    @click="cleanSearchPhrase"
                    >
                        <router-link :to="`/product/${product._id}`">
                            <div class="search-item-box">
                                <div class="img-wrapper">
                                    <img :src="require(`@/assets/products/${product.imgFile}`)" alt="">
                                </div>

                                <p>{{product.title}}</p> 
                                
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>

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
        },
        cleanSearchPhrase(){
            this.$store.dispatch('cleanSearchPhrase')
        }    
    },
    computed:{
        getSearchPhrase(){
            return this.$store.getters.getSearchPhrase
        },
        getSearchProducts(){
            return this.$store.getters.getProducts
        },
        searchPhraseLength(){
            if (this.$store.getters.getSearchPhrase.length > 0) {
                return true
            }else{
                return false
            }
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
        width: 200px;
        border: none;
        padding: 4px;
        outline: none;
        font-size: 1.6rem;
    }
    .search-icon-wrapper{
        background-color: $tertiary-clr;
        height: 3.4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4px 3px;
        img{
            height: 2.6rem;
        }
    }
    .search-result-wrapper{
        background-color: rgb(235, 235, 235);
        position: absolute;
        width: 200px;
        ul{
            li{
                padding: 0 1rem;
                display: flex;
                &:hover{
                    cursor: pointer;
                    background-color: darken($color: rgb(235, 235, 235), $amount: 10);
                }
                a{
                    display: flex;
                    align-items: center;
                    list-style: none;
                    color: black;
                    text-decoration: none;
                    font-size: 1.4rem;
                }
                .search-item-box{
                    width: 200px;
                    padding: 0.5rem 0;
                    display: flex;
                    align-items: center;
                    .img-wrapper{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 40px;
                        width: 40px;
                        margin-right: 10px;

                        img{
                            height: 35px;
                        }
                    }
                }
            }
        }
    }
}
</style>