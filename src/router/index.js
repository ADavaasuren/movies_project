import VueRouter from 'vue-router';
import Vue from 'vue'
import Random from '../components/Random.vue'
import Details from '../components/Details.vue'
import Categories from '../components/Categories.vue'
import DetailsByGenre from '../components/DetailsByGenre'
import Home from '../views/Home.vue'


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
    path: '/random/:id',
    name: 'random',
    component: Random    
  },
  {
    path: '/categories',
    name: 'categories',
    component: Categories    
  },
  {
    path: '/genre/:name',
    name: 'genres',
    component: DetailsByGenre
  }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router
