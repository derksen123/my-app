import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Porn from '../views/Porn.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/porn',
    name: 'Porn',
    component: Porn
  }
]

const router = new VueRouter({
  routes
})

export default router
