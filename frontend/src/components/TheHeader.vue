<template>
  <header>
    <div class="logo-wrapper">
        <router-link to="/">
            <img src="@/assets/icons/sinus-logo-white.svg" alt="">
        </router-link>
        
    </div>
    <div class="nav-wrapper">
        <Search-field />
        <div class="nav-icons">
            <router-link to="/cart">
                <img src="@/assets/icons/cart.svg" alt="cart" class="cart">
            </router-link>
            <router-link to="/profile">
                <img src="@/assets/icons/profile.svg" alt="profile" class="profile">
            </router-link>   
        </div>

    </div>
  </header>
</template>

<script>
import SearchField from "@/components/SearchField.vue";
export default {
components:{
    SearchField
}
}
</script>

<style scoped lang="scss">
@import "@/styles/_variables.scss";

    header{
        background-color: black;
        padding: 2rem 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        img:hover{
            cursor: pointer;
        }
        .logo-wrapper{
            img{
                height: 4.5rem;
            }
        }
        .nav-wrapper{
            display: flex;
            align-items: center;
            .nav-icons{
                display: flex;
                align-items: center;
                width: 8rem;
                justify-content: space-around;
                margin-left: 2rem;
                .cart{
                    height: 2.5rem;
                }
                .profile{
                    height: 3rem;
                }

            }
        }
    }
</style>