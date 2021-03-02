import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import * as API from '../api/api'

export default new Vuex.Store({
  state: {
    loggedIn: false,
    images: "",
    user: {
      _id: '6b521d3f-3d15...', // generated server side
      email: 'johan.kivi@zocom.se',
      password: '$$$hashed password$$$', // hashed serverside
      name: 'Johan Kivi',
      role: 'admin', // or customer
      address: {
        street: 'Tokitokvägen 3',
          zip: '123 45',
          city: 'Tokberga'
      },
      orderHistory: []
    }
  },
  mutations: {

    pushIntoArray(state,database) {
      state.images = database;
    },
    updateLoggedIn(state, loggedIn){
      state.loggedIn = loggedIn;
    }
  },
  actions: {

    async drawImage(context) {
       const data = await API.getProducts();
       context.commit('pushIntoArray', data);
    }
    
  },

  getters: {

  },

  modules: {
  }
})
