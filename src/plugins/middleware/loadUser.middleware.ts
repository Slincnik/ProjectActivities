import { useAuthStore } from '@/api/auth'
import { RouterNames } from '@/layouts/layouts.types'
import type { RouteLocationNormalized } from 'vue-router'

export async function loadUserMiddleware(to: RouteLocationNormalized) {
  const authStore = useAuthStore()

  if (!to.meta.guest && !authStore.user) return { name: RouterNames.LOGIN }

  if (to.meta.guest && authStore.user) return { name: RouterNames.EVENTS }
}

