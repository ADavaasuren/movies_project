import VueRouter from 'vue-router';
import Vue from 'vue'
import Home from '../views/Home.vue'
import Movie from '../views/Movie.vue'
import Randomizer from '../views/Randomizer.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/3/movie/{movie_id}',
    name: 'Movie',
    component: Movie,
    props: true
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
