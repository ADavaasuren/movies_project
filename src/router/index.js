import VueRouter from 'vue-router';
import Vue from 'vue'
import Home from '../views/Home.vue'
import Random from '../views/Random.vue'
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
    path: '/random',
    name: 'random',
    component: Random    
  }
]

const router = new VueRouter({
  routes
})

export default router
