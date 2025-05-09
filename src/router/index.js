import { createRouter, createWebHistory } from 'vue-router'

// Componenti principali
import Homepage from '@/components/Homepage.vue'
import Login from '@/components/Login.vue'
import Andrea from '@/components/andrea.vue'
import Crea from '@/components/Crea.vue'

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/andrea',
    name: 'Andrea',
    component: Andrea
  },
  {
    path: '/crea',
    name: 'Crea',
    component: Crea
  },
  // (Facoltativo) Rotta 404 fallback:
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // scroll automatico in alto su ogni navigazione
    return { top: 0 }
  }
})

export default router
