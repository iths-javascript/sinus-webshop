
  import {
    ADD_PRODUCT_ORDER,
    CALCULATE_PRICE
  } from '../mutationTypes.js';


// import router from '../../router';

 import axios from 'axios';

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
    }, 

    async createOrder({ state}) {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        }
      }
      const body = {
        items: []
      }
  
      state.currentOrder.items.forEach(item => {
        body.items.push(item._id)
      })
      console.log(this.$store)
      console.log(body);
      try {
        const response = await axios.post('http://localhost:5000/api/orders',JSON.stringify(body), config);
        console.log(response)
      } catch (error) {
        const errors = error.response.data.errors;
        if (errors) {
          errors.forEach(error => console.log(error));
        }
      }
    }

  },

}