
import {
  ADD_PRODUCT_ORDER,
  CALCULATE_PRICE,
  REMOVE_PRODUCT
} from '../mutationTypes.js';


// import router from '../../router';

import axios from 'axios';

export default {
  state: {
    currentOrder: {
      items: [],
      totalPrice: null,
    }
  },

  mutations: {
    [REMOVE_PRODUCT] (state, id) {
      state.currentOrder.items = state.currentOrder.items.filter(item => item._id !== id) 

    },

    [ADD_PRODUCT_ORDER](state, payload) {
      if (state.currentOrder.items.includes(payload)) {
        payload.quantity++
      } else {
        payload.quantity = 1
        state.currentOrder.items.push(payload)
      }
    },
    [CALCULATE_PRICE](state) {
      state.currentOrder.items.forEach(item => {
        state.currentOrder.totalPrice += item.price
      })
    },
  },


  getters: {
    getOrderItems: state => state.currentOrder.items,
    getTotalPrice: state => state.currentOrder.totalPrice,

  },

  actions: {
    removeProduct({commit}, payload) {
      commit(REMOVE_PRODUCT, payload) 
    },

    addProductToOrder({ commit }, payload) {
      commit(ADD_PRODUCT_ORDER, payload)
      commit(CALCULATE_PRICE)
    },

    async createOrder({ state, rootState }) {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : `Bearer ${rootState.user.token}`

        }
      }
      const body = {
        items: []
      }

      state.currentOrder.items.forEach(item => {
        if(item.quantity > 1) {
          for(let i = 0; i < item.quantity; i++) {
            body.items.push(item._id)
          }
        }
        else {body.items.push(item._id)}
      })
      
      try {
        if (rootState.user.isAuthenticated) {
          const config = {
            headers: {
              'Content-Type': 'application/json',
              'Authorization' : `Bearer ${rootState.user.token}`
            }
          }
          const response = await axios.post('http://localhost:5000/api/orders', JSON.stringify(body), config);
          console.log(response);
        }
        else {
          const response = await axios.post('http://localhost:5000/api/orders', JSON.stringify(body), config);
          console.log(response)
        }
      } catch (error) {
        const errors = error.response.data.errors;
        if (errors) {
          errors.forEach(error => console.log(error));
        }
      }
    }
   

  },

}