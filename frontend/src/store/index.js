import Vue from 'vue'
import Vuex from 'vuex'
import products from './products.store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    productsModule: products
  }
})
