import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import * as API from '../api/api'

export default new Vuex.Store({
  state: {

    images: "",
    currentProducts: "",
    cart: []

  },
  mutations: {

    storeImages(state, database) {
      state.images = database;
    },

    loadHoodies(state, category) {
      const data = Object.values(state.images.data).filter(item => item.category == category);
      state.currentProducts = data;
    },

    storeIntoCart(state, item) {
      state.cart.push({
        title: item.title,
        price: item.price,
        quantity: 1,
        id: item._id
      })
    }


  },
  actions: {

    async drawImage(context) {
      const data = await API.getProducts();
      context.commit('storeImages', data);
    },

    loadProducts(context, binder) {
      if (binder == 'hoodies') {
        const category = "clothes";
        context.commit('loadHoodies', category);
      }
      else if (binder == 'sneakers') {
        const category = "sneakers";
        context.commit('loadHoodies', category);
      }
      else if (binder == 'skateboards') {
        const category = "board";
        context.commit('loadHoodies', category);
      }
      else if (binder == 'wheels') {
        const category = "wheels";
        context.commit('loadHoodies', category);
      }
      else {
        const category = "t-shirt";
        context.commit('loadHoodies', category);
      }
    }

  },
  modules: {
  }
})
