import * as API from '../api'
import * as Mutations from './mutation-types'

export default {
  state: {
    cart: {
      items: []
    },
    productsObject: {},
    products: [],
    searchPhrase: '',
    productsLoading: true
  },
  mutations: {
    [Mutations.SET_PRODUCTS](state, payload) {
      state.products = payload
      state.productsLoading = false
      for (let product of state.products) {
        const id = product._id;
        state.productsObject[id] = product
      }
    },
    [Mutations.ADD_TO_CART](state, id) {
      let exists = false
      state.cart.items.forEach(item => {
        if (item._id == id) {
          item.amount++
          exists = true
        }
      })
      if (!exists) {
        state.cart.items.push({ _id: id, amount: 1 })
      }
    },
    [Mutations.REMOVE_FROM_CART](state, id) {
      state.cart.items.forEach(item => {
        if (item._id == id) {
          item.amount--
        }
      })
    },
    [Mutations.DELETE_FROM_CART](state, id) {
      let index = 0;
      for (let i = 0; i < state.cart.items.length; i++) {
        if (state.cart.items[i]._id == id) {
          index = i
        }
      }

      state.cart.items.splice(index, 1)
    },
    [Mutations.SET_SEARCH_PHRASE](state, payload) {
      state.searchPhrase = payload
    },
    [Mutations.RESET_CART](state) {
      state.cart.items = []
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      const products = await API.fetchProducts()

      commit(Mutations.SET_PRODUCTS, products)
    },
    addToCart({ commit }, id) {
      commit(Mutations.ADD_TO_CART, id)
    },
    removeFromCart({ commit, state }, id) {
      state.cart.items.forEach(item => {
        if (item._id == id) {
          if (item.amount > 1) {
            commit(Mutations.REMOVE_FROM_CART, id)
          } else {
            commit(Mutations.DELETE_FROM_CART, id)
          }
        }
      })
    },
    deleteFromCart({ commit }, id) {
      commit(Mutations.DELETE_FROM_CART, id)
    },
    async submitOrder({ commit, state, rootState }) {
      const cart = []

      state.cart.items.forEach(item => {
        console.log(item)
        for (let i = 0; i < item.amount; i++) {
          cart.push(item._id)
        }
      })
      console.log(cart)
      const response = await API.submitOrder({ items: cart }, rootState.userModule.userToken)

      if (response) {
        commit(Mutations.RESET_CART)
      }
    },
    async setSearchPhrase({ commit }, payload) {
      commit(Mutations.SET_SEARCH_PHRASE, payload)
    },
    cleanSearchPhrase({ commit }) {
      commit(Mutations.SET_SEARCH_PHRASE, '')
    }
  },
  getters: {
    getProducts(state) {
      if (state.searchPhrase.length == 0) {
        return state.products
      } else {
        //--
        let filteredProducts = []
        state.products.map(prod => {
          for (let key in prod) {
            if (typeof prod[key] != 'number') {
              if (prod[key].toLowerCase().includes(state.searchPhrase)) { //hittar en match
                if (filteredProducts.length == 0) {
                  filteredProducts.push(prod)
                }
                let rep = true
                filteredProducts.map(filProd => {
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
      return state.cart.items.map(item => ({ ...state.productsObject[item._id], amount: item.amount }))
    },
    getSearchPhrase(state) {
      return state.searchPhrase
    },
    getProductsLoading(state) {
      return state.productsLoading
    },
    getCartLength(state) {
      let length = 0
      state.cart.items.forEach(item => {
        length += item.amount
      })
      return length
    }
  },
}