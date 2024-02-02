import { createRouter, createWebHistory } from 'vue-router'
import ViewUsuario from '../views/ViewUsuario.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ViewUsuario
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('../views/AddUsuario.vue')
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: () => import('../views/UpdateUsuario.vue')
    }
  ]
})

export default router
