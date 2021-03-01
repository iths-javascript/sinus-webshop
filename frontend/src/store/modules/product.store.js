import{
  ADD_PRODUCTS_MUTATION
} from "../mutationTypes"

// import router from '../../router';

 import axios from 'axios';

export default{
  state:{
    products:[],
  },
  mutations:{
    [ADD_PRODUCTS_MUTATION](state, payload){
      state.products.push(...payload) 
    }

  },
  getters:{
    getProducts: state => state.products,
    getProductId: state => id =>{
      return state.products.find(product => product._id === id)
    }
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
         commit(ADD_PRODUCTS_MUTATION, response.data)
      }
    }
  }

}