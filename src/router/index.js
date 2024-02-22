import { createRouter, createWebHistory } from 'vue-router'
import ViewLivros from '../views/ViewLivros.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ViewLivros
    },
    {
      path: '/addUsuario',
      name: 'addUsuario',
      component: () => import('../views/AddUsuario.vue')
    },
    {
      path: '/addLivro',
      name: 'addLivro',
      component: () => import('../views/AddLivro.vue')
    },
    {
      path: '/editUsuario/:id',
      name: 'editUsuario',
      component: () => import('../views/UpdateUsuario.vue')
    },
    {
      path: '/editLivro/:id',
      name: 'editLivro',
      component: () => import('../views/UpdateLivro.vue')
    }
  ]
})

export default router
