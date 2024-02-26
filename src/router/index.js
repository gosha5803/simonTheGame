import Vue from 'vue'
import VueRouter from 'vue-router'
import GamePage from '../pages/GamePage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/game',
    component: GamePage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
