<template>
<div class="container-form">

 <h1>I'm Log in</h1>

 <form @submit.prevent="submit">
     <label for="e-mail">Email</label>
     <input type="text" v-model="email" placeholder="e-mail">
     <label for="password">Password</label>
     <input type="text" v-model="password" placeholder="password">
     <button>Login</button>
 </form>
</div>
</template>

<script>

// import axios from 'axios'

export default {
    name: 'LoginForm',
    data(){ return {
        email:"admin@example.com",
        password:"password"
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
            this.$emit('login', responseData) //emit till user secction
            console.log(responseData)
            this.$emit('login', responseData)
        }
    }

}
</script>

<style>
.container-form{
    display: block;
    flex-direction: column;
    /* grid-template-columns: repeat(3, auto); */
    grid-template-rows: repeat(2, 300px);
    width: 100%;
    /* height: 500px; */
    background-color: thistle;
}
</style>