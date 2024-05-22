import { api } from '@/plugins/axios'
import { useMutation } from '@tanstack/vue-query'
import { defineStore } from 'pinia'
import router from '@/plugins/router'
import { RouterNames } from '@/layouts/layouts.types'

export type User = {
  id: number
  name: string
  email: string
  password: string
}

export type LoginDTO = {
  email: string
  password: string
}

export const useLogin = (DTO: LoginDTO) =>
  useMutation({
    mutationFn: async () => {
      const call = await api.get('users')

      return call.data
    },
    onSuccess: async (data: User[]) => {
      const authStore = useAuthStore()
      const user = data.find((us) => us.email === DTO.email && us.password === DTO.password)

      if (user) {
        authStore.setUser(user)
        await router.push({ name: RouterNames.EVENTS })
      }
    }
  })

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      user: null as User | null
    }
  },
  getters: {
    getUser(state) {
      return state.user
    }
  },
  actions: {
    setUser(user: any) {
      this.user = user
    }
  }
})
