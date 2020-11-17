import VueRouter from 'vue-router';
import Vue from 'vue'
import App from '../App.vue'
import Random from '../components/Random.vue'
import Details from '../components/Details.vue'
import Categories from '../components/Categories.vue'
import DetailsByGenre from '../components/DetailsByGenre'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'App',
    component: App
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
