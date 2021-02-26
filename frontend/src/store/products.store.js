import * as API from '../api'
import * as Mutations from './mutation-types'

export default {
  state: {
    cart: {
      items: ["Ta7lPlLDDQjHmnGH", "xeMCFNwWpe3KF0Mc"]
    },
    cartObject: {},
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
    [Mutations.SET_CART_OBJECT](state) {
      for (let product of state.products) {
        const id = product._id;
        state.cartObject[id] = product
      }
    },
    [Mutations.ADD_TO_CART](state, id) {
      state.cart.items.push(id)
      state.cartObject[id].amount++
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
    setCartObject({commit}) {
      commit(Mutations.SET_CART_OBJECT)
    },
    async addToCart({ commit }, id) {
      commit(Mutations.ADD_TO_CART, id)
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
      
      return state.cartObject
    },
    getSearchPhrase(state) {
      return state.searchPhrase
    },
    getProductsLoading(state) {
      return state.productsLoading
    }
  },
}