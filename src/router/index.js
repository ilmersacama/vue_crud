import { createRouter, createWebHistory } from 'vue-router'
import UserList from '../views/UserList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'list',
      component: UserList
    },
    {
      path: '/userform/:id?',
      name: 'userform',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/UserForm.vue')
    },

  ]
})

export default router
