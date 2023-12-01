import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import HeartView from '../views/HeartView.vue'
import MovieListView from '../views/MovieListView.vue'
import MovieDetailsView from '../views/MovieDetailsView.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/heart',
      name: 'heart',
      component: HeartView
    },
    {
      path: '/list/:genre',
      name: 'movieList',
      component: MovieListView
    },
    {
      path: '/movie/:id',
      name: 'movieDetails',
      component: MovieDetailsView
    }
  ],
})

export default router

