import * as API from '../api'
import * as Mutations from './mutation-types'

export default {
  state: {
    currentUser: null,
    userToken: null,
    isLoggedIn: false
  },
  mutations: {
    [Mutations.SET_CURRENT_USER](state, payload) {
      state.currentUser = payload
    },
    [Mutations.SET_LOGGED_IN](state, payload) {
      state.isLoggedIn = payload
    },
    [Mutations.SET_USER_TOKEN](state, payload) {
      state.userToken = payload
    }
  },
  actions: {
    async registerUser({ dispatch }, payload) {
      const success = await API.registerUser(payload)

      if (success) {
        await dispatch('logIn', { email: payload.email, password: payload.password })
      }
    },
    async logIn({ commit }, payload) {
      const response = await API.authenticate(payload)

      if (response) {
        commit(Mutations.SET_USER_TOKEN, response.token)
        commit(Mutations.SET_CURRENT_USER, response.user)
        commit(Mutations.SET_LOGGED_IN, true)
      }
    },
    logOut({ commit }) {
      commit(Mutations.SET_USER_TOKEN, null)
      commit(Mutations.SET_CURRENT_USER, null)
      commit(Mutations.SET_LOGGED_IN, false)
    }
  },
  getters: {
    getCurrentUser(state) {
      return state.currentUser
    },
    getLoggedIn(state) {
      return state.isLoggedIn
    }
  },
}