import { createRouter, createWebHistory } from 'vue-router'
import Andrea from '@/components/andrea.vue'

const routes = [
  { path: '/andrea', name: 'Andrea', component: Andrea },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
