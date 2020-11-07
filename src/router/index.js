import VueRouter from 'vue-router';
import Vue from 'vue'
import Home from '../views/Home.vue'
import Details from '../views/Details.vue'
import Randomizer from '../views/Randomizer.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/details',
    name: 'Details',
    component: Details
  },
  {
    path: '/randomizer',
    name: 'Randomizer',
    component: Randomizer
  }
]

const router = new VueRouter({
  routes
})

export default router
