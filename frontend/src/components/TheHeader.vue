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
                <span class="cart-counter">{{getCartAmount}}</span>
            </div>

            <img v-if="!isLoggedIn" @click="toggleModal" src="@/assets/icons/profile.svg" alt="profile" class="profile">
            <div v-else @click="toggleModal" class="initials">{{userInitials}}</div>
        </div>
    </div>

        <div v-if="loginModalActive" class="signInBox">
            <div v-if="!isLoggedIn" class="sign-in-form">
                <h2>SIGN IN</h2>

                <div class="email">
                <label id for="email">Email:</label>
                <input v-model="user.email" id="email" type="email">
                </div>

                <div class="password">
                <label id for="password">Password:</label>
                <input @keyup.enter="signIn" v-model="user.password" id="password" type="password">
                </div>
                <p v-if="wrongUserDetails" class="error-message">Wrong email or password, please try again.</p>

                <div class="button-link-wrapper">
                    <Base-button @click.native="signIn" class="base-button" color="teal">Sign in</Base-button>
                    <router-link to="/register">
                        <p class="register-text">or <span @click="toggleModal" class="register-link">Register an account</span></p>
                    </router-link>
                </div>
            </div>

            <div v-if="isLoggedIn" class="already-logged-in">
                <router-link to="/profile">
                    <Base-button @click.native="toggleModal" class="base-button" color="teal">My profile</Base-button>
                </router-link>
                <router-link to="/">
                    <Base-button @click.native="signOut" class="base-button" color="offwhite">Sign out</Base-button>
                </router-link>
            </div>

        </div>


  </header>
</template>

<script>
import SearchField from "@/components/SearchField.vue";
// import BaseModal from '@/components/BaseModal.vue'
export default {
components:{
    SearchField,
    // BaseModal
},
data(){
    return{
        modalActive:false,
        user : {email: '', password: ''}
    }
},
computed:{
    loginModalActive(){
        return this.modalActive
    },
    isLoggedIn(){
        return this.$store.getters.getLoggedIn
    },
    wrongUserDetails(){
        return this.$store.getters.getWrongUserDetails
    },
    getCartAmount(){
        return this.$store.getters.getCartLength
    },
    userInitials() {
        const name = this.$store.getters.getCurrentUser.name
        let [first, last] = name.split(' ')
        return `${first[0]}${last[0]}`
    }
},
methods:{
    toggleModal(){
        this.modalActive = !this.modalActive
    },
    signIn(){
        this.$store.dispatch('logIn', this.user)
        this.user = {email: '', password: ''}
    },
    signOut(){
        this.$store.dispatch('logOut')
        this.toggleModal()
    }
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
        height: 10rem;
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
                .initials {
                    align-items: center;
                    border: 3px solid #fff;
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                    font-size: 2rem;
                    font-weight: 700;
                    height: 5rem;
                     margin-left: 3rem;
                    min-width: 5rem;
                    padding: 1rem;
                    border-radius: 50%;
                    background-color: $tertiary-clr;
                }
                .cart-img{
                    position: relative;
                    .cart-counter{
                        height: 2rem;
                        width: 2rem;
                        position: absolute;
                        top: -14px;
                        right: -14px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: $tertiary-clr;
                        border-radius: 50%;
                        color: white;
                        font-size: 1.4rem;
                    }
                }

            }
        }
    .signInBox{
        height: 450px;
        width: 450px;
        background-color: white;
        position: absolute;
        top: 10rem;
        right: 0;
        padding: 4rem 2rem;
        display: flex;
        flex-direction: column;
        align-content: center;
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.596);
        a{
            text-decoration: none;
            color: black;
        }
        h2{
        text-align: center;
        margin-bottom: 2rem;
        }
        label{
        display: inline-block;
        width: 100px;
        }
        input{
        height: 2.4rem;
        width: 250px;
        margin-bottom: 1.4rem;
        }
        .email{
        width: fit-content;
        }

        .password{
        width: fit-content;
        }
        .button-link-wrapper{
            margin-left: 100px;

            .base-button{
                width: 100px;
                margin-top: 2rem;
            }
            .register-link{
                text-decoration: underline;
                font-weight: bold;
            }
        }
        .error-message{
            color: red;
            margin-left: 100px;
        }  
    }
}
</style>