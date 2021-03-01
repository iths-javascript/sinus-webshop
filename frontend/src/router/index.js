import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import IndividualProduct from "../views/IndividualProduct.vue"
import Admin from '../views/Admin.vue'
import Checkout from '../views/Checkout.vue'
import MyAccount from '../views/MyAccount.vue'
import Register from '../views/Register.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import ThankYou from '../views/ThankYou.vue'
import NotFound from "../views/NotFound.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product/:id',
    name: 'IndividualProduct',
    component: IndividualProduct
  },
  {
    path: '/cart',
    name: 'Cart',
    component: ShoppingCart
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout,
    beforeEnter(to, from, next) {
      if (from.path != '/cart') {
        next('/')
      } else {
        next()
      }
    }
  },
  {
    path: '/thank-you',
    name: 'ThankYou',
    component: ThankYou
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/profile',
    name: 'MyAccount',
    component: MyAccount
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
