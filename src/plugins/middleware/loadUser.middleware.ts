import { useAuthStore } from '@/api/auth'
import { RouteNames } from '@/layouts/layouts.types'
import type { RouteLocationNormalized } from 'vue-router'

export async function loadUserMiddleware(to: RouteLocationNormalized) {
  const authStore = useAuthStore()

  if (!to.meta.guest && !authStore.user) return { name: RouteNames.LOGIN }

  if (to.meta.guest && authStore.user) return { name: RouteNames.EVENTS }
}

