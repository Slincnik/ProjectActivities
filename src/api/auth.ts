import { api } from '@/plugins/axios'
import { useMutation } from '@tanstack/vue-query'
import { defineStore } from 'pinia'

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
    onSuccess: (data: User[]) => {
      const authStore = useAuthStore()
      const user = data.find((us) => us.email === DTO.email && us.password === DTO.password)

      if (data.find((us) => us.email === DTO.email && us.password === DTO.password)) {
        authStore.setUser(user)
      }
    }
  })

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      user: null
    }
  },
  actions: {
    setUser(user: any) {
      this.user = user
    }
  }
})

