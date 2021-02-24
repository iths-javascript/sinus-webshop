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
            <div class="cart-img">
                <router-link to="/cart">
                    <img src="@/assets/icons/cart.svg" alt="cart" class="cart">
                </router-link>
                <span class="cart-counter">0</span>
            </div>

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
        padding: 3rem 4rem;
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
                justify-content: flex-end;
                margin-left: 2rem;
                .cart{
                    height: 4rem;
                }
                .profile{
                    height: 5rem;
                    margin-left: 3rem;
                }
                .cart-img{
                    position: relative;
                    .cart-counter{
                        height: 2rem;
                        width: 2rem;
                        position: absolute;
                        top: -14px;
                        right: -14px;
                        // padding: 6px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: red;
                        border-radius: 50%;
                        color: white;
                        font-size: 1.4rem;
                    }
                }

            }
        }
    }
</style>