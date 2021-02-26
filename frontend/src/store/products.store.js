import * as API from '../api'
import * as Mutations from './mutation-types'

export default {
  state: {
    cart: {
      items: ['w8y0DgIGVrABj2oa', 'LiBcK7LM2uENhMIR']
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
      if (state.searchPhrase.length == 0) {
        return state.products
      }else{
        //--
        let filteredProducts = []
        state.products.map(prod => {
          for (let key in prod){
            if(typeof prod[key] != 'number'){
              if (prod[key].toLowerCase().includes(state.searchPhrase)) { //hittar en match
                if (filteredProducts.length == 0) {
                  filteredProducts.push(prod)
                }  
                let rep = true               
                filteredProducts.map( filProd => {
                  if (filProd._id != prod._id) {
                    rep = false
                  }
                  if (filProd._id == prod._id) {
                    rep = true
                  }
                })
                  if (rep == false) {
                    filteredProducts.push(prod)
                  }
              }
            }
          }
        })
        //--
        return filteredProducts
      }
        
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