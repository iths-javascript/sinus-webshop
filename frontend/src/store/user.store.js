import * as API from '../api/api'

export default {
    state:{
        userLogin:{
            "email": '',
            "password": '',              
        }

    },

    mutations:{
        loginUser(state, userLogin){
        state.userLogin = userLogin
        }
    },

    actions:{

       async logInUser(context, payload) {
            const responseData = await API.getUserLogin(payload)
            console.log(responseData)
            // context.commit('loginUser', login)
            console.log(payload);
            if(responseData.data.token){
                sessionStorage.setItem("userLoggedIn", "true");
                sessionStorage.setItem("token", responseData.data.token);
                context.commit("updateLoggedIn", true);
                    console.log("mi token");
            } else {
                console.log("User failed the authentication")
                //   window.sessionStorage.setItem("LoggedIn", "false");
                //   this.loggedin = "false";
                //   this.$store.commit("updateLoggedIn", false);
                // }
                // this.$emit("login", responseData);
            }


            // if (responseData.token) {
            //   window.sessionStorage.setItem("LoggedIn", "true");
            //   window.sessionStorage.setItem("token", responseData.token);
            //   this.$store.commit("updateLoggedIn", true);
            //   this.loggedin = "true";
            //   this.$emit("close");
            // } else {
            //   window.sessionStorage.setItem("LoggedIn", "false");
            //   this.loggedin = "false";
            //   this.$store.commit("updateLoggedIn", false);
            // }
            // this.$emit("login", responseData);
          }
        },
    
    
    getters:{}
}