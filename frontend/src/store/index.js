import { createStore } from "vuex";

<<<<<<< HEAD
Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    //controls if the product description modal is open or closed
    productModalStatus: false,
    
    //sets the ID of the chosen product
    productModalId: "",

    //controls if the product description modal is open or closed
    loginStatus: false,

    //holds the information of the logged in user
    userData : {},

    shoppingCart: []
  },

getters: {
  getShoppingCartLength: state => {
    return state.shoppingCart.length;
  },
  getAmountOfProduct: (state) => (id) => {
    return state.shoppingCart.filter(item => id === item._id).length;
  },
  getTotalSum: (state) => {
    let sum = 0;
    state.shoppingCart.forEach(item => sum += item.price)
    return sum;
  }
},
  mutations: {
    
    changeProductModalStatus(state){
      state.productModalStatus = !state.productModalStatus;
    },
    changeProductModalId(state, id){
      state.productModalId = id;
    },
    changeLoginStatus(state){
      state.loginStatus = !state.loginStatus;
    },
    setUserData(state, user){
      state.userData = user;
    },
    addProductToCart(state, product){
      state.shoppingCart.push(product)
    },
    removeSingleItem(state,index){
      state.shoppingCart.splice(index, 1);
    },
    setShoppingCart(state, newArray){
      state.shoppingCart = newArray;
    }
  },

  actions: {
    addProductToCart({commit}, product){
      commit('addProductToCart', product)
    },

    removeOneItem({commit, state}, product){
      var idx = state.shoppingCart.indexOf(product)
      if (idx >= 0) {
      commit('removeSingleItem', idx)}
    },

    removeProductFromCart({commit, state}, id){
      const array = state.shoppingCart.filter(item => item._id !== id)
      commit('setShoppingCart', array)
    },

    changeProductModal({commit}, id){
      commit("changeProductModalStatus");
      commit("changeProductModalId", id);
    },
      
  },
})
=======
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {}
});
>>>>>>> main
