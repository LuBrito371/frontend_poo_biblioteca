import { createRouter, createWebHistory } from 'vue-router'
import ViewLivros from '../views/ViewLivros.vue'
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:5173/';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:8083';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ViewLivros
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
