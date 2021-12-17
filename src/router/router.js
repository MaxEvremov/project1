import Main from '@/pages/Main'
import Information from '@/pages/Information'
import Tasks from '@/pages/Tasks'
import GridTesting from '@/pages/GridTesting'
import text1 from '@/gridRoutes/text1'
import text2 from '@/gridRoutes/text2'
import text3 from '@/gridRoutes/text3'
import text4 from '@/gridRoutes/text4'
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
  },
  {
    path: '/gridtesting',
    component: GridTesting,
    children: [
      { path: '/text1', component: text1 },
      { path: '/text2', component: text2 },
      { path: '/text3', component: text3 },
      { path: '/text4', component: text4 }
    ]
  }
]
const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router
