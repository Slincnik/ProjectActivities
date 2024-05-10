import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { loadLayoutMiddleware } from './middleware/loadLayout.middleware'
import { AppLayoutsEnum, RouteNames } from '@/layouts/layouts.types'
import { loadUserMiddleware } from './middleware/loadUser.middleware'

const routes: ReadonlyArray<RouteRecordRaw> = [
  {
    path: '/',
    name: RouteNames.HOME,
    component: () => import('@/pages/HomeView.vue'),
    meta: {
      guest: true
    }
  },
  {
    path: '/login',
    name: RouteNames.LOGIN,
    component: () => import('@/pages/Auth/LoginPage.vue'),
    meta: {
      guest: true,
      layout: AppLayoutsEnum.auth
    }
  },
  {
    path: '/register',
    name: RouteNames.REGISTER,
    component: () => import('@/pages/Auth/RegisterPage.vue'),
    meta: {
      guest: true,
      layout: AppLayoutsEnum.auth
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: RouteNames.NOT_FOUND,
    meta: {
      guest: true
    },
    redirect: () => {
      alert('Page not found')
      return { name: RouteNames.HOME }
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(loadLayoutMiddleware)
router.beforeEach(loadUserMiddleware)

export default router
