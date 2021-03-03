import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Profile from '../views/Profile.vue'
import NewAccount from '../components/NewAccount.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/product',
    name: 'Product',
    component: Product
  },

  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },

  {
    path: '/new-account',
    name: 'NewAccount',
    component: NewAccount
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
