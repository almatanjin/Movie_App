import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MovieDetail from '../views/MovieDetail.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/movie/:id',
    name:"Movie Detail",
    component:MovieDetail
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
