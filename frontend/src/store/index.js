import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import * as API from '../api/api'

export default new Vuex.Store({
  state: {

    images: ""

  },
  mutations: {

    pushIntoArray(state,database) {
      state.images = database;
    }

  },
  actions: {

    async drawImage(context) {
       const data = await API.getProducts();
       context.commit('pushIntoArray', data);
    }
    
  },
  modules: {
  }
})
