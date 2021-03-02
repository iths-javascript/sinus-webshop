import {
  LOGIN_USER_MUTATION,
  EDIT_USER_MUTATION,
  LOGOUT,
  ADD_USER_HISTORY
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
    [EDIT_USER_MUTATION](state, payload) {
      state.user = payload;
    },
    [LOGOUT](state) {
      state.user = null;
      state.isAuthenticated = false;
      state.token = null;
    },
    [ADD_USER_HISTORY](state, payload){
      state.user.history = payload;
    }
  },

  actions: {

    async getUserHistory({state, commit}) {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${state.token}`
        }
      }
      try {
        const response = await axios.get('http://localhost:5000/api/orders', config);
        commit(ADD_USER_HISTORY, response.data)
      } catch (error) {
        const errors = error.response.data.errors;
        if (errors) {
          errors.forEach(error => console.log(error));
        }
      }
    },

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

    logout({commit}) {
      commit(LOGOUT);
    },

    async editUser({commit, state, dispatch}, payload) {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${state.token}`
        }
      }
      const body = JSON.stringify(payload);

      try {
        const response = await axios.patch('http://localhost:5000/api/me', body, config);
        if (response.status === 200) {
          const updatedUser = await dispatch('getUser');
          console.log(updatedUser);

          commit(EDIT_USER_MUTATION, updatedUser);
        }
      } catch (error) {
        const errors = error.response.data.errors;
        if (errors) {
          errors.forEach(error => console.log(error));
        }
      }
    },

    async getUser({state}) {
      const config = {
        headers: {
          'Authorization': `Bearer ${state.token}`
        }
      }
      try {
        const response = await axios.get('http://localhost:5000/api/me', config);
        console.log(response);
      } catch (error) {
        const errors = error.response.data.errors;
        if (errors) {
          errors.forEach(error => console.log(error));
        }
      }
    }

    
  },
  getters: {
    isAuthenticated: state => state.isAuthenticated ? true : false,
    getUser: state => state.user !== null ? state.user : false
  }
}