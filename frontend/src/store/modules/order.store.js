
  import {
    ADD_PRODUCT_ORDER,
    CALCULATE_PRICE
  } from '../mutationTypes.js';


// import router from '../../router';

//  import axios from 'axios';

export default{
  state:{
   currentOrder: {
     items: [],
     totalPrice: null,  
   }
  },

  mutations:{
    [ADD_PRODUCT_ORDER](state, payload){
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

  
  getters:{
    getOrderItems: state => state.currentOrder.items,
    getTotalPrice: state => state.currentOrder.totalPrice,
   
  },

  actions:{
   addProductToOrder({commit},payload){
     commit(ADD_PRODUCT_ORDER, payload)
     commit(CALCULATE_PRICE)
    }

  },

}