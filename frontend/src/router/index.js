import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
<<<<<<< HEAD
import Profile from '../views/Profile.vue'
import NewAccount from '../components/NewAccount.vue'
=======
import SingleProduct from '../views/SingleProduct.vue'

>>>>>>> matheus

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
<<<<<<< HEAD
    path: '/profile',
    name: 'Profile',
    component: Profile
  }, 

  {
    path: '/new-account',
    name: 'NewAccount',
    component: NewAccount
  }, 
=======
    path: '/single-product/:id',
    name: 'SingleProduct',
    component: SingleProduct
  }
 
>>>>>>> matheus
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
