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
    async getUser({ commit }, payload) {
      const user = await API.getUser(payload)

      if (user) {
        commit(Mutations.SET_USER_TOKEN, payload)
        commit(Mutations.SET_CURRENT_USER, user)
        commit(Mutations.SET_LOGGED_IN, true)
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
      API.clearStorage()
    },
    async updateUser({ state, commit }, payload) {
      const response = await API.updateUser(payload, state.userToken)

      if (response.status == 200) {
        const user = await API.getUser(state.userToken)
        commit(Mutations.SET_CURRENT_USER, user)
      }
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