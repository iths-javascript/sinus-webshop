import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import * as API from '../api/api'

export default new Vuex.Store({
  state: {
    images: "",
    currentProducts: "",
    cart: [{ "title": "NaturalXL", "price": 799, "quantity": 1, "id": "IfU7QWLy2KzU67Fo", "imgFile": "skateboard-naturalXL.svg" }, { "title": "NaturalXL", "price": 799, "quantity": 1, "id": "IfU7QWLy2KzU67Fo", "imgFile": "skateboard-naturalXL.svg" }],
    loggedIn: false,
    user: {
      _id: '', // generated server side
      email: '',
      password: '', // hashed serverside
      name: '',
      role: '', // or customer
      address: {
        street: '',
        zip: '',
        city: ''
      },
      orderHistory: []
    },
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
        id: item._id,
        imgFile: item.imgFile
      })
    },


    updateLoggedIn(state, loggedIn) {
      state.loggedIn = loggedIn;
    },

    currentUser(state, user) {
      state.user = user;
    },

    // loginUser(state, login){
    //   state.loginform = login
    // }
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
    },
    //  context.commit('pushIntoArray', data);


    async user(context) {
      const me = await API.getUserInfo();
      console.log(me);
      context.commit('currentUser', me);
    }
  },
  // async login(context){
  //   const userLogin = await API.getLogInfo();
  //   context.commit('logInfo', userLogin)
  // },




  getters: {

  },

  modules: {
  }

})
