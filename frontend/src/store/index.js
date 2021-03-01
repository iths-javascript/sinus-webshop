import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productModalStatus: false,
    productModalId: "",

    loginStatus: false,

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
