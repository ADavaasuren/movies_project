import VueRouter from 'vue-router';
import Vue from 'vue'
import Home from '../views/Home.vue'
import Randomizer from '../views/Randomizer.vue'
import Details from '../components/Details.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movie/:id',
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
