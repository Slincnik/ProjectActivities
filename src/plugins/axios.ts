import axios from 'axios'

const BASE_URL = 'http://localhost:5173/api'

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
})

