import * as API from '../api'
import * as Mutations from './mutation-types'

export default {
  state: {
    cart: {
      items: ['2fZn2yEJERKtrpVK', 'MjXj7DK5ymqMmAuC']
    },
    currentOrder: null,
    products: [],
    searchPhrase: '',
    productsLoading: true
  },
  mutations: {
    [Mutations.SET_PRODUCTS](state, payload) {
      state.products = payload
      state.productsLoading = false
    },
    [Mutations.ADD_TO_CART](state, payload) {
      state.cart.items.push(payload)
    },
    [Mutations.SET_SEARCH_PHRASE](state, payload) {
      state.searchPhrase = payload
    },
    [Mutations.SET_CURRENT_ORDER](state, payload) {
      state.currentOrder = payload
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
    async submitOrder({ commit, state, rootState }) {
      const response = await API.submitOrder(state.cart, rootState.userModule.userToken)

      if (response) {
        commit(Mutations.SET_CURRENT_ORDER, response)
      }
    },
    async setSearchPhrase({ commit }, payload) {
      commit(Mutations.SET_SEARCH_PHRASE, payload)
    }
  },
  getters: {
    getProducts(state) {
      return state.products
    },
    getSingleProduct: state => id =>
      state.products.find(product => product._id == id)
    ,
    getCart(state) {
      let cartArray = []

      state.cart.items.forEach(id => {
        for (let product of state.products) {
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