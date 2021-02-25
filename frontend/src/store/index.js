import Vue from 'vue'
import Vuex from 'vuex'
import products from './products.store'
<<<<<<< HEAD
=======
import user from './user.store'
>>>>>>> adc2fbec8ff8655a35041abd4f4f83e9eaf1e9c8

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
<<<<<<< HEAD
    productsModule: products
=======
    productsModule: products,
    userModule: user
>>>>>>> adc2fbec8ff8655a35041abd4f4f83e9eaf1e9c8
  }
})
