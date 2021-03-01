import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './modules/user.store.js';
import productModule from './modules/product.store.js';
import orderModule from './modules/order.store.js';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user: userModule,
    products: productModule,
    order: orderModule
  }
})
