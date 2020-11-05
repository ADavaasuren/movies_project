import VueRouter from 'vue-router';
import Vue from 'vue'
import Home from '../views/Home.vue'

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
    component: () => import('../views/Details.vue')
  },
  {
    path: '/randomizer',
    name: 'Randomizer',
    component: () => import('../views/Randomizer.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
