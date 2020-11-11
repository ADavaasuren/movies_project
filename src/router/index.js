import VueRouter from 'vue-router';
import Vue from 'vue'
import Home from '../views/Home.vue'
import Random from '../components/Random.vue'
import Details from '../components/Details.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/movie/:id',
    name: 'details',
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
