import VueRouter from 'vue-router';
import Vue from 'vue'
import RandomPage from '../views/RandomPage.vue'
import Details from '../components/Details.vue'
import Categories from '../components/Categories.vue'
import DetailsByGenre from '../components/DetailsByGenre'
import HomePage from '../views/HomePage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/movie/:id',
    name: 'details',
    component: Details
  },
  {
    path: '/random',
    name: 'random',
    component: RandomPage    
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
