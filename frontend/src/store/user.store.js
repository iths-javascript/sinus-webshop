import * as API from '../api/api'

export default {
    state:{
        loggedIn: false,
        newAccount: false,
        user: {
            _id: '', 
            email: '',
            password: '', 
            name: '',
            role: '', 
            address: {
              street: '',
                zip: '',
                city: ''
            },
            orderHistory: []
          },
    },

    mutations:{
        updateLoggedIn(state, loggedIn){
            state.loggedIn = loggedIn;
          },

        currentUser(state, user) {
            state.user = user;
          },
        
        // newUserInfo(state, user) {
        //    state.user = user;
        // }, 
        
        uppdateNewAccount(state, newAccount){
          state.newAccount = newAccount;
        }
    },

    actions:{

      async logInUser(context, payload) {
            const responseData = await API.getUserLogin(payload)
            if(responseData.data.token){
                sessionStorage.setItem("userLoggedIn", "true");
                sessionStorage.setItem("token", responseData.data.token);
                context.commit("updateLoggedIn", true);

            } else {
                console.log("User failed the authentication")
            }
          },
          
      async user(context) {
            const me = await API.getUserInfo();
            context.commit('currentUser', me);
          },

      async newUserAccount(context, payload) {
        const newUser = await API.getNewAccount(payload);
        // console.log(newUser);
        // context.commit('newUserInfo', newUser);
        if(newUser.data.message === "User registered!"){
          context.commit("uppdateNewAccount", true)
        }
        
          // else {
             
        //         sessionStorage.setItem("LoggedIn", "false");
        //         this.loggedin = 'false';

        //     }
      
      },
    },

    
    
    getters:{}
}