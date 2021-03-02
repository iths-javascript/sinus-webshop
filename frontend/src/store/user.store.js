import * as API from '../api'
import * as Mutations from './mutation-types'

export default {
  state: {
    currentUser: null,
    orderHistory: null,
    userToken: null,
    isLoggedIn: false,
    userLoading: false,
    wrongUserDetails: false
  },
  mutations: {
    [Mutations.SET_CURRENT_USER](state, payload) {
      state.currentUser = payload
    },
    [Mutations.SET_ORDER_HISTORY](state, payload) {
      state.orderHistory = payload
    },
    [Mutations.SET_LOGGED_IN](state, payload) {
      state.isLoggedIn = payload
    },
    [Mutations.SET_USER_TOKEN](state, payload) {
      state.userToken = payload
    },
    [Mutations.SET_USER_LOADING](state, payload) {
      state.userLoading = payload
    },
    [Mutations.SET_WRONG_USER_DETAILS](state, payload) {
      state.wrongUserDetails = payload
    },
  },
  actions: {
    async registerUser({ dispatch }, payload) {
      const success = await API.registerUser(payload)

      if (success) {
        await dispatch('logIn', { email: payload.email, password: payload.password })
      }
    },
    async getUser({ commit }, payload) {
      commit(Mutations.SET_USER_LOADING, true)
      const user = await API.getUser(payload)
      commit(Mutations.SET_USER_LOADING, false)

      if (user) {
        commit(Mutations.SET_USER_TOKEN, payload)
        commit(Mutations.SET_CURRENT_USER, user)
        commit(Mutations.SET_LOGGED_IN, true)

        const orders = await API.getOrders(payload)
        if (orders) {
          commit(Mutations.SET_ORDER_HISTORY, orders)
        }
      } else {
        API.clearStorage()
      }
    },
    async logIn({ commit, state }, payload) {
      const response = await API.authenticate(payload)

      if (response) {
        commit(Mutations.SET_WRONG_USER_DETAILS, false)
        commit(Mutations.SET_USER_TOKEN, response.token)
        commit(Mutations.SET_CURRENT_USER, response.user)
        commit(Mutations.SET_LOGGED_IN, true)

        const orders = await API.getOrders(state.userToken)
        if (orders) {
          commit(Mutations.SET_ORDER_HISTORY, orders)
        }
      }// else => ge user feedback om man inte kunde logga in
      else {
        commit(Mutations.SET_WRONG_USER_DETAILS, true)
      }
    },
    logOut({ commit }) {
      commit(Mutations.SET_USER_TOKEN, null)
      commit(Mutations.SET_CURRENT_USER, null)
      commit(Mutations.SET_LOGGED_IN, false)
      commit(Mutations.SET_ORDER_HISTORY, null)
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
    getUserToken(state) {
      return state.userToken
    },
    getCurrentUserRole(state) {
      return state.currentUser.role
    },
    getLoggedIn(state) {
      return state.isLoggedIn
    },
    getUserLoading(state) {
      return state.userLoading
    },
    getOrderHistory(state) {
      return state.orderHistory
    },
    getWrongUserDetails(state) {
      return state.wrongUserDetails
    }
  },
}