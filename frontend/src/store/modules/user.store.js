import {
  LOGIN_USER_MUTATION
} from '../mutationTypes.js';

import router from '../../router';

import axios from 'axios';


export default {
  state: {
    token: null,
    user: null,
    isAuthenticated: null,
  },

  mutations: {
    [LOGIN_USER_MUTATION](state, payload) {
      state.token = payload.token;
      state.user = payload.user;
      state.isAuthenticated = true;
    },
  },

  actions: {
    async registerUser(_, payload) {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        }
      }
      const body = JSON.stringify(payload);

      try {
        const response = await axios.post('http://localhost:5000/api/register', body, config);
        if (response.status === 200) {
          router.push('/login');
        }
      } catch (error) {
        const errors = error.response.data.errors;
        if (errors) {
          errors.forEach(error => console.log(error));
        }
      }
    },


    async loginUser({commit}, payload) {
      const { email, password } = payload;
      const config = {
        headers: {
          'Content-Type': 'application/json',
        }
      }
      const body = JSON.stringify({email, password});
      try {
        const response = await axios.post('http://localhost:5000/api/auth', body, config);
        if (response.status === 200) {
          commit(LOGIN_USER_MUTATION, response.data);
          router.push('/');
        }
      } catch (error) {
        const errors = error.response.data.errors;
        if (errors) {
          errors.forEach(error => console.log(error));
        }
      }
    },
  },
  getters: {
    isAuthenticated: state => state.isAuthenticated ? true : false,
    getErrors: state => {return state.errors}
  }
}