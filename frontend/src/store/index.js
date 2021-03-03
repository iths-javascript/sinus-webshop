import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import * as API from '../api/api'

export default new Vuex.Store({
  state: {
    loggedIn: false,
    images: "",
    user: {
      _id: '', // generated server side
      email: '',
      password: '', // hashed serverside
      name: '',
      role: '', // or customer
      address: {
        street: '',
          zip: '',
          city: ''
      },
      orderHistory: []
    },
  },
  
  mutations: {

    pushIntoArray(state,database) {
      state.images = database;
    },

    updateLoggedIn(state, loggedIn){
      state.loggedIn = loggedIn;
    },

    currentUser(state, user) {
      state.user = user;
    },

    // loginUser(state, login){
    //   state.loginform = login
    // }
  },

  actions: {

    async drawImage(context) {
       const data = await API.getProducts();
       context.commit('pushIntoArray', data);
    },

    async user(context) {
      const me = await API.getUserInfo();
      console.log(me);
      context.commit('currentUser', me);
    },

    // async login(context){
    //   const userLogin = await API.getLogInfo();
    //   context.commit('logInfo', userLogin)
    // },

    
  },

  getters: {

  },

  modules: {
  }
})
