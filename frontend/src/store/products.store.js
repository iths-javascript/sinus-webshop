import * as API from '../api'
import * as Mutations from './mutation-types'

export default {
  state: {
    cart: [],
    products: [],
    searchPhrase: ''
  },
  mutations: {
    [Mutations.SET_PRODUCTS](state, payload) {
      state.products = payload
    },
    [Mutations.ADD_TO_CART](state, payload) {
      state.cart.push(payload)
    },
    [Mutations.SET_SEARCH_PHRASE](state, payload) {
      state.searchPhrase = payload
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
    async setSearchPhrase({ commit }, payload) {
      commit(Mutations.SET_SEARCH_PHRASE, payload)
    }
  },
  getters: {
    getProducts(state) {
      return state.products
    },
    getCart(state) {
      let cartArray = []

      state.cart.forEach(id => {
        for (let product of state.products) {
          console.log(id)
          console.log(product._id)
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