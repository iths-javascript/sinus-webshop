import * as API from '../api'
import * as Mutations from './mutation-types'

export default {
  state: {
    cart: {
      items: []
    },
    cartObject: {},
    
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
    [Mutations.REMOVE_FROM_CART](state, id) {
      let index = state.cart.items.indexOf(id)
      state.cart.items.splice(index, 1)
      state.cartObject[id].amount--
    },
    [Mutations.DELETE_FROM_CART](state, id) {
      state.cart.items = state.cart.items.filter(item => item != id)

      state.cartObject[id].amount = 0;
    },
    [Mutations.SET_SEARCH_PHRASE](state, payload) {
      state.searchPhrase = payload
    },
    [Mutations.RESET_CART](state) {
      state.cart.items = []
      
    },
    [Mutations.RESET_CART_OBJECT](state) {
      for (let product of Object.values(state.cartObject)) {
        product.amount = 0
      }
      
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      const products = await API.fetchProducts()

      commit(Mutations.SET_PRODUCTS, products)
    },
    setCartObject({ commit }) {
      commit(Mutations.SET_CART_OBJECT)
    },
    addToCart({ commit }, id) {
      commit(Mutations.ADD_TO_CART, id)
    },
    removeFromCart({ commit }, id) {
      commit(Mutations.REMOVE_FROM_CART, id)
    },
    deleteFromCart({ commit }, id) {
      commit(Mutations.DELETE_FROM_CART, id)
    },
    async submitOrder({ commit, state, rootState }) {
      const response = await API.submitOrder(state.cart, rootState.userModule.userToken)

      if (response) {
        commit(Mutations.RESET_CART)
        commit(Mutations.RESET_CART_OBJECT)
      }
    },
    async setSearchPhrase({ commit }, payload) {
      commit(Mutations.SET_SEARCH_PHRASE, payload)
    },
    cleanSearchPhrase({commit}){
      commit(Mutations.SET_SEARCH_PHRASE, '')
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

      return state.cartObject
    },
    getSearchPhrase(state) {
      return state.searchPhrase
    },
    getProductsLoading(state) {
      return state.productsLoading
    },
    getCartLength(state){
      return state.cart.items.length
    }
  },
}