import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Profile from '../views/Profile.vue'
import NewAccount from '../components/NewAccount.vue'
import SingleProduct from '../views/SingleProduct.vue'
import Cart from '../components/Cart.vue'
import Checkout from '../components/Checkout.vue'
import Payment from '../components/Payment.vue'
import OrderFinished from '../components/OrderFinished.vue'
import LogInNewAccount from '../components/LogInNewAccount.vue'

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
  {
    path: '/single-product/:id',
    name: 'SingleProduct',
    component: SingleProduct
  },

  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },

  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },

  {
    path: '/payment',
    name: 'Payment',
    component: Payment
  },

  {
    path: '/order-finished',
    name: 'OrderFinished',
    component: OrderFinished
  },

  {
    path: '/login-new-account',
    name: 'LogInNewAccount',
    component: LogInNewAccount
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
