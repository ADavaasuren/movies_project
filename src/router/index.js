import VueRouter from 'vue-router';
import Vue from 'vue'
import RandomPage from '../views/RandomPage.vue'
import DetailsPage from '../views/DetailsPage.vue'
import CategoriesPage from '../views/CategoriesPage.vue'
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
    name: 'detailspage',
    component: DetailsPage
  },
  {
    path: '/random/:id',
    name: 'randompage',
    component: RandomPage    
  },
  {
    path: '/categories',
    name: 'categoriespage',
    component: CategoriesPage    
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
