import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import './assets/css/bootstrap.min.css'
import './assets/css/style.css'
// import './assets/js/bootstrap.min.js'
import './assets/js/script.js'
import HomeComponent from './components/HomeComponent.vue'
import ServicesComponent from './components/ServicesComponent.vue'
Vue.use(VueRouter);




const routes = [
  { path: '/', component: HomeComponent },
  { path: '/services', component: ServicesComponent },
 
]


const router = new VueRouter({

  routes
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
