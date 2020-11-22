import VueRouter from 'vue-router';
import Vue from 'vue'
import RandomPage from '../views/RandomPage.vue'
import DetailsPage from '../views/DetailsPage.vue'
import CategoriesPage from '../views/CategoriesPage.vue'
import HomePage from '../views/HomePage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: HomePage
  },
  {
    path: '/home',
    name: 'homepage',
    component: HomePage
  },
  {
    path: '/movie/:id',
    name: 'detailspage',
    component: DetailsPage
  },
  {
    path: '/random',
    name: 'randompage',
    component: RandomPage    
  },
  {
    path: '/categories',
    name: 'categoriespage',
    component: CategoriesPage    
  },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router
