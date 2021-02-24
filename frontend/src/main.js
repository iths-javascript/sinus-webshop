import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaseButton from "./components/BaseButton"

Vue.config.productionTip = false

Vue.component("BaseButton", BaseButton)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


