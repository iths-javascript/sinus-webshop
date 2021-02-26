import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productModalStatus: false,
    productModalId: "",
  },
  mutations: {
    changeProductModalStatus(state){
      state.productModalStatus = !state.productModalStatus;
    },
    changeProductModalId(state, id){
      state.productModalId = id;
    }
  },
  actions: {
  },
  modules: {
  }
})
