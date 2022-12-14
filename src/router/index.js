import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MovieSinglePage from '../views/MovieSinglePage.vue'
import Favourite from '../views/Favourite.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/favourite',
    name: 'favourite',
    component: Favourite
  },
  {
    path: '/movie/:id',
    name: 'MovieSinglePage',
    component: MovieSinglePage
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
