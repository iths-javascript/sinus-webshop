<template>
<div class="wrapper">
    <div class="top">
        <p>FREE Ground Shipping on All Orders & Extended Returns.</p>   
        <p class="top-right">Help</p>
        <p class="top-right">Find Store</p>
    </div>    
    <div class="navbar">
        <ul>
            <li>skateboard</li>
            <li class="special">the gonz <img src="@/assets/cutelike.svg" class="icon-cute"
            alt="cutelike">
            </li>
            <li>wheels</li>
            <img class="logo" src="@/assets/logo.svg" alt="logo">
            <li>t-shirt</li>
            <li class="sneaker">sneakers</li>
            <div class="nav-icon">
                <img src="@/assets/search.svg" class="icon" alt="search">
                <img src="@/assets/like.svg" class="icon" alt="favorites">
                <img @click="showForm = !showForm" 
                v-if="this.$store.state.loggedIn === false"
                src="@/assets/user.svg" class="icon user" alt="user">
                <img @click="showLogOut = !showLogOut" 
                v-if="this.$store.state.loggedIn === true"
                src="@/assets/login-icon-pink.svg" class="icon user" alt="user">
                <img src="@/assets/cart.svg" class="icon" alt="cart">
            </div>
        </ul>
       
        <Overlay v-if="showForm" @close="showForm = false">
            <LoginForm @close="showForm = false"/>
        </Overlay>
        <OverlayUser v-if="showLogOut" @close="showLogOut = false">
            <MyAccount @close="showLogOut = false"/>
        </OverlayUser>
    </div>
</div>
</template>

<script>
import LoginForm from '@/components/LoginForm'
import Overlay from '@/components/Overlay.vue'
import OverlayUser from '@/components/OverlayUser.vue'
import MyAccount from '@/components/MyAccount.vue'

export default {
    data(){
        return {
        showForm: false,
        showLogOut: false
        }
    },

    components:{LoginForm, Overlay, MyAccount, OverlayUser},

    methods:{
        goToProfile(){
            this.$router.push("/profile")
        },
    }

}
</script>

<style scoped>

ul {
    display: flex;
    justify-content: space-between; 
    align-items: center; 
    width: 100%;
    padding: 0 6%; 
}

li {
    padding: 0 2rem;
    font-size: 1.2rem;
    margin-top: 0rem;
}

.user{
    cursor: pointer;
}

.nav-icon{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.icon {
    padding: 0 .6rem;
}

.special{
    display: flex;
    padding: 0 .8rem;
}

.sneaker {
    padding: 0rem;
}

.icon-cute{
    width: 30%;
    padding-left: .5rem;
}

.top-right{
    margin-right:2rem;
}
.wrapper{
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 100%;    
}

.top {
    width: 100%;
    height:35px;
    background-color: #2B2B2B
}

p {
    margin: 5px auto 5px 20px;
    font-family: Ropa Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 14px;
    letter-spacing: 0.03em;
    color: #F1F1F1;
}

.navbar{
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #F1F1F1;
    height:5rem ;
}

.logo{
    margin-top: -40px;
}


</style>