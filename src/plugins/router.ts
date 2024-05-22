import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { loadLayoutMiddleware } from './middleware/loadLayout.middleware'
import { AppLayoutsEnum, RouterNames } from '@/layouts/layouts.types'
import { loadUserMiddleware } from './middleware/loadUser.middleware'

const routes: ReadonlyArray<RouteRecordRaw> = [
  {
    path: '/',
    name: RouterNames.HOME,
    component: () => import('@/pages/HomeView.vue'),
    meta: {
      guest: true
    }
  },
  {
    path: '/login',
    name: RouterNames.LOGIN,
    component: () => import('@/pages/Auth/LoginPage.vue'),
    meta: {
      guest: true,
      layout: AppLayoutsEnum.auth
    }
  },
  {
    path: '/register',
    name: RouterNames.REGISTER,
    component: () => import('@/pages/Auth/RegisterPage.vue'),
    meta: {
      guest: true,
      layout: AppLayoutsEnum.auth
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: RouterNames.NOT_FOUND,
    meta: {
      guest: true
    },
    redirect: () => {
      alert('Page not found')
      return { name: RouterNames.HOME }
    }
  },
  {
    path: '/events',
    name: RouterNames.EVENTS,
    component: () => import('@/pages/Events/EventsView.vue'),
    meta: {
      layout: AppLayoutsEnum.authed
    }
  },
  {
    path: '/events/create',
    name: RouterNames.EVENT_CREATE,
    component: () => import('@/pages/Events/EventCreateView.vue'),
    meta: {
      layout: AppLayoutsEnum.authed
    }
  },
  {
    path: '/profile',
    name: RouterNames.PROFILE,
    component: () => import('@/pages/ProfileView.vue'),
    meta: {
      layout: AppLayoutsEnum.authed
    }
  },
  {
    path: '/tracked',
    name: RouterNames.TRACKED,
    component: () => import('@/pages/Events/TrackedView.vue'),
    meta: {
      layout: AppLayoutsEnum.authed
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
