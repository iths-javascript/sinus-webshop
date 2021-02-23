import {
  REGISTER_USER
} from '../mutationTypes.js';

import {
  REGISTER_USER
} from '../actionTypes.js';

import axios from 'axios';


export default {
  state: {
    token: localStorage.getItem('token'),
    user: null,
    isAuthenticated: null,
  },

  mutations: {
    [REGISTER_USER](state, payload) {
      state.user = payload;
      state.isAuthenticated = true;
    }
  },

  actions: {
    async [REGISTER_USER](context, payload) {
      const { email, name, password, street, zip, city } = payload;
      const config = {
        headers: {
          'Content-Type': 'application/json',
        }
      }
      const body = JSON.stringify({
        email,
        password,
        name,
        street,
        city,
        zip
      });
      const response = axios.post('http://localhost:5000', body, config);
      context.commit(REGISTER_USER, response);
    }
  }
}