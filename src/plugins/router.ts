import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: ReadonlyArray<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/HomeView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
