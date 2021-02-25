<template>
<div class="container-form">

    <img @click="$emit('close')" class="close-login" src="../assets/close.svg" alt="">
    <h1>Log in</h1>
    <div class="user-img">
        <img src="../assets/bird-blue.svg" alt="">
    </div>
     <!-- <div v-if="loggedin == 'true'">Jag är inloggad här är mina personligauppgifter</div> -->
     
     <div v-if="loggedin == 'false'">

         apa
            </div>
 <form @submit.prevent="submit">
     <label for="e-mail">Email</label>
     <input type="text" v-model="email" placeholder="e-mail">
     <label for="password">Password</label>
     <input type="text" v-model="password" placeholder="password">
     <button class="login-button">Login</button>


 </form>

</div>
</template>

<script>

// import axios from 'axios'

export default {
    name: 'LoginForm',
    data(){ 
        
        var loggedinFromSessionStorage = window.sessionStorage.getItem("LoggedIn");
        console.log(loggedinFromSessionStorage)
        return {
        email:"admin@example.com",
        password:"password",
        loggedin: loggedinFromSessionStorage
        }
    },

    methods: {
        async submit(){
            
            const payload = {email: this.email, password: this.password}

            // const responseData = await axios.post('http://localhost:5000/api/auth', payload)
            const request = await fetch('http://localhost:5000/api/auth', {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(payload)
            })
            const responseData = await request.json()
            if (responseData.token){
                console.log("I am correctly authenticted")
                console.log(responseData);
                window.sessionStorage.setItem("LoggedIn", "true");
                window.sessionStorage.setItem("token", responseData.token);

                // var loggedinFromSessionStorage = window.sessionStorage.getItem("LoggedIn");
                this.loggedin = 'true';
            }
            else {
                console.log("I am not authenticated")
                console.log(responseData);
                window.sessionStorage.setItem("LoggedIn", "false");
                this.loggedin = 'false';

            }
            this.$emit('login', responseData) //emit till user secction
            // console.log(responseData)
            // this.$emit('login', responseData)
        }
    }

}
</script>

<style>
.title{
    grid-column: 2;
}
.container-form{
    background-color:#F5ADB8;

  height: auto;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
    
 
    flex-direction: column;
    
    /* background-image: url("../assets/bird-yellow.svg"), url("../assets/bird-blue.svg"); */
    /* background-repeat: no-repeat; */
}
label{
    padding: 1rem;
    margin-left: 2.2rem;
    font-family: 'Ropa Sans', sans-serif;
    text-align: justify;
}

input{
    padding: .5rem;
    margin: 0 3rem 1rem;
    border-style: none;
    border-radius: 5px;
    font-family:'Ropa Sans', sans-serif ;
}

form{
    display: flex;
    min-width: 25rem;
    flex-direction: column;
    /* grid-column: 2; */
    /* background-color: thistle; */
    padding-bottom: 2rem;
    
}
.login-button{
    margin-top: 2rem;
    margin-left: 140px;
}

.login-button:hover{
    background-color: #5E60B3;
    color:whitesmoke;
    
}
button{
    color: #2B2B2B;
    font-family:'Ropa Sans', sans-serif ;
    width: 144px;
    height: 40px;
    font-size: 1rem;
    background-color: whitesmoke;
    border-style: none;
    box-shadow: -5px 5px #2B2B2B;
}
.user-img{
    /* display: flex; */
    /* grid-column: 2; */
    /* justify-content: center; */
    width: 100px;
    height: 100px;
    /* border: 3px solid whitesmoke;
    border-radius: 50%; */
}

.close-login{
    /* position: absolute; */
    background-color: whitesmoke;
    display: flex;
    align-self: flex-end;
    padding: .3rem;
    width: 20px;
    cursor: pointer;
}
</style>