import axios, { AxiosError } from 'axios'
import { toast } from 'vue-sonner'

const BASE_URL = 'http://localhost:5173/api'

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error: AxiosError) => {
    switch (error.response?.status) {
      default:
        toast.error('Произошла ошибка, попробуйте позже')
        break
    }
    return Promise.reject(error)
  }
)

