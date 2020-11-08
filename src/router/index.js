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
    path: '/details/:id',
    name: 'Details',
    component: Details,
    params: true
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
