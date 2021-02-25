import * as API from '../api'
import * as Mutations from './mutation-types'

export default {
  state: {
<<<<<<< HEAD
    cart: [],
=======
    cart: {
      items: ['w8y0DgIGVrABj2oa', 'LiBcK7LM2uENhMIR']
    },
    currentOrder: null,
>>>>>>> adc2fbec8ff8655a35041abd4f4f83e9eaf1e9c8
    products: [],
    searchPhrase: ''
  },
  mutations: {
    [Mutations.SET_PRODUCTS](state, payload) {
      state.products = payload
    },
    [Mutations.ADD_TO_CART](state, payload) {
<<<<<<< HEAD
      state.cart.push(payload)
    },
    [Mutations.SET_SEARCH_PHRASE](state, payload) {
      state.searchPhrase = payload
=======
      state.cart.items.push(payload)
    },
    [Mutations.SET_SEARCH_PHRASE](state, payload) {
      state.searchPhrase = payload
    },
    [Mutations.SET_CURRENT_ORDER](state, payload) {
      state.currentOrder = payload
>>>>>>> adc2fbec8ff8655a35041abd4f4f83e9eaf1e9c8
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      const products = await API.fetchProducts()

      commit(Mutations.SET_PRODUCTS, products)
    },
    async addToCart({ commit }, payload) {
      commit(Mutations.ADD_TO_CART, payload)
    },
<<<<<<< HEAD
=======
    async submitOrder({ commit, state, rootState }) {
      const response = await API.submitOrder(state.cart, rootState.userModule.userToken)

      if (response) {
        commit(Mutations.SET_CURRENT_ORDER, response)
      }
    },
>>>>>>> adc2fbec8ff8655a35041abd4f4f83e9eaf1e9c8
    async setSearchPhrase({ commit }, payload) {
      commit(Mutations.SET_SEARCH_PHRASE, payload)
    }
  },
  getters: {
    getProducts(state) {
      return state.products
    },
<<<<<<< HEAD
    getCart(state) {
      let cartArray = []

      state.cart.forEach(id => {
        for (let product of state.products) {
          console.log(id)
          console.log(product._id)
=======
    getSingleProduct(state, id) {
      return state.products.find(product => product._id == id)
    },
    getCart(state) {
      let cartArray = []

      state.cart.items.forEach(id => {
        for (let product of state.products) {
>>>>>>> adc2fbec8ff8655a35041abd4f4f83e9eaf1e9c8
          if (id == product._id) {
            cartArray.push(product)
          }
        }
      })

      return cartArray
    },
    getSearchPhrase(state) {
      return state.searchPhrase
    }
  },
}