import Main from '@/pages/Main'
import Information from '@/pages/Information'
import Tasks from '@/pages/Tasks'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/information',
    component: Information
  },
  {
    path: '/tasks',
    component: Tasks
  }
]
const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router
