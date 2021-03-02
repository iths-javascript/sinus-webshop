import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    //controls if the product description modal is open or closed
    productModalStatus: false,
    
    //sets the ID of the chosen product
    productModalId: "",


    //controls if the product description modal is open or closed
    loginStatus: false,

    //holds the information of the logged in user
    userData : {}
  },

  mutations: {
    
    changeProductModalStatus(state){
      state.productModalStatus = !state.productModalStatus;
    },
    changeProductModalId(state, id){
      state.productModalId = id;
    },
    changeLoginStatus(state){
      state.loginStatus = !state.loginStatus;
    },
    setUserData(state, user){
      state.userData = user;
    }
  },
  actions: {
  },
  modules: {
  }
})
