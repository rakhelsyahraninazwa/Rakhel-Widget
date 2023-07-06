import { createRouter, createWebHistory } from 'vue-router'
import lokasi from '../views/Lokasi.vue'
import cuaca from '../views/Cuaca.vue'
import stopwatch from '../views/Stopwatch.vue'
import foto from '../views/Foto.vue'
import game from '../views/Game.vue'

const routes = [
  {
    path: '/',
    name: 'lokasi',
    component: lokasi
  },
  
  {
    path: '/cuaca',
    name: 'cuaca',
    component: cuaca
  },

  {
    path: '/stopwatch',
    name: 'stopwatch',
    component: stopwatch
  },

  {
    path: '/foto',
    name: 'foto',
    component: foto
  },

  {
    path: '/game',
    name: 'game',
    component: game
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
