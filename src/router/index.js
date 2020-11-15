import VueRouter from 'vue-router';
import Vue from 'vue'
import MoviesList from '../components/MoviesList.vue'
import Random from '../components/Random.vue'
import Details from '../components/Details.vue'
import Trailers from '../components/Trailers.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'movieslist',
    component: MoviesList
  },
  {
    path: '/movie/:id',
    name: 'details',
    component: Details
  },
  {
    path: '/random/:id',
    name: 'random',
    component: Random    
  },
  {
    path: '/trailers/:id',
    name: 'trailers',
    component: Trailers    
  }
]

const router = new VueRouter({
  routes
})

export default router
