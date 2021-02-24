<template>
    <div class="search-field-wrapper">
        <input type="text">
        <span class="search-icon-wrapper">
            <img src="@/assets/icons/search.svg" alt="">
        </span>

    </div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.search-field-wrapper{
    display: flex;
    align-items: center;
    input{
        height: 2rem;
        border: none;
        padding: 4px;
        outline: none;
    }
    .search-icon-wrapper{
        background-color: $secondary-clr-dk;
        height: 2rem;
        // width: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4px 3px;
        img{
            height: 1.6rem;
        }
    }
}
</style>