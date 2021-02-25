import{
  ADD_PRODUCTS_MUTATIONS
} from "../mutationTypes"

// import router from '../../router';

 import axios from 'axios';

export default{
  state:{
    products:[],
  },
  mutations:{
    [ADD_PRODUCTS_MUTATIONS](state, payload){
      state.products.push(...payload) 
    }

  },
  getters:{
    getProducts: state => state.products
  },
  actions:{
    async addProducts({commit}){
      const config = {
        headers: {
          'Content-Type': 'application/json',
        }
      }
      const response = await axios.get('http://localhost:5000/api/products', config)
      console.log(response);
      if(response.status === 200){
         commit(ADD_PRODUCTS_MUTATIONS, response.data)
      }
    }
  }

}