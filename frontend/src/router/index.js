import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Singleproduct from "../views/Singleproduct.vue";
import Checkout from "../views/Checkout.vue";
import Cart from "../views/Cart.vue";
import MakeOrder from "../views/Makeorder.vue";
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Profile from '../views/Profile.vue'


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
    
  },
  {
    path: "/MakeOrder",
    name: "MakeOrder",
    component: MakeOrder,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/singleproduct",
    name: "Singleproduct",
    component: Singleproduct,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },


  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
