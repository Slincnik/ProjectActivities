import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { loadLayoutMiddleware } from './middleware/loadLayout.middleware'
import { AppLayoutsEnum, RouteNames } from '@/layouts/layouts.types'

const routes: ReadonlyArray<RouteRecordRaw> = [
  {
    path: '/',
    name: RouteNames.HOME,
    component: () => import('@/pages/HomeView.vue')
  },
  {
    path: '/login',
    name: RouteNames.LOGIN,
    component: () => import('@/pages/Auth/LoginPage.vue'),
    meta: {
      layout: AppLayoutsEnum.auth
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(loadLayoutMiddleware)

export default router
