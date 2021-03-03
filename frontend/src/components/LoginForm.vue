<template>
<div class="container-form" id="talkbubble">
    <h1>Log in</h1>
    <div class="user-img">
        <img src="../assets/bird-blue.svg" alt="">
    </div>     
     <div v-if="loggedin == 'false'">
    </div>
 <form @submit.prevent="submit">
     <label for="e-mail">Email</label>
     <input type="text" v-model="email" placeholder="e-mail">
     <label for="password">Password</label>
     <input type="text" v-model="password" placeholder="password">
     <button class="login-button">Login</button>
 </form>
    <h3>OR</h3>
     <button @click="goToCreate" class="account-button">Create Account</button>
</div>
</template>

<script>


export default {
    name: 'LoginForm',
    data(){ 
        let loggedinFromSessionStorage = window.sessionStorage.getItem("LoggedIn");
        return {
        email:"admin@example.com",
        password:"password",
        loggedin: loggedinFromSessionStorage,
        createNewAccount: false
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
                window.sessionStorage.setItem("LoggedIn", "true");
                window.sessionStorage.setItem("token", responseData.token);
                this.$store.commit('updateLoggedIn',true)
                this.loggedin = 'true';
                this.$emit("close")
               
            }
            else {
                window.sessionStorage.setItem("LoggedIn", "false");
                this.loggedin = 'false';        
                this.$store.commit('updateLoggedIn',false)
            }
            this.$emit('login', responseData)
        },


        goToCreate(){
                this.$emit("close")
                this.$router.push("/new-account") 
        }
    }

}
</script>

<style scoped>

.container-form{
    background-color:#F5ADB8;
    height: auto;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: -10px 10px #FFEBD3;    
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
    font-family:'Ropa Sans', sans-serif;
    font-size: 1rem;
}

form{
    display: flex;
    min-width: 25rem;
    height: auto;
    flex-direction: column;
    padding-bottom: 1rem;
    
}
.login-button{
    margin-top: 2rem;
    margin-left: 128px;
}

.account-button{
    margin-top: 1rem;
}
.account-button:hover{  
    background-color: #B2D1A8;
    color:#2B2B2B;
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
    width: 100px;
    height: 100px;
}

.close-login{
    background-color: whitesmoke;
    display: flex;
    align-self: flex-end;
    padding: .3rem;
    width: 20px;
    cursor: pointer;
}

#talkbubble {
      max-width: 380px;
      min-height: auto;
      background: #F5ADB8;
      position: relative;
    }
    #talkbubble:before {
      content: "";
      position: absolute;
      left:79.8%;
      top:-20px;
      width: 0;
      height: 0;
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
      border-bottom: 20px solid #F5ADB8;
    }
</style>