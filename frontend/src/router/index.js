import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import LoginForm from '../components/LoginForm'
// import Overlay from '../components/Overlay'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/login-form',
  //   name: 'LoginForm',
  //   component: LoginForm
  // },
  // {
  //   path: '/overlay',
  //   name: 'Overlay',
  //   component: Overlay
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
