import { api } from '@/plugins/axios'
import { useQuery } from '@tanstack/vue-query'

export type EventCard = {
  id: string
  name: string
  date: string
  place: string
  img: string
}
export type Card = {
  id: number
  name: string
  description: string
  game: string
  imageUrl: string
  reserve: number
  persons: number
  place: string
  date: string
  street: string
  howToGet: string
}

export const getCards = () =>
  useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      const response = await api.get<EventCard[]>('events')
      return response.data
    }
  })

export const getTrackedCards = () =>
  useQuery({
    queryKey: ['tracked'],
    queryFn: async () => {
      const response = await api.get<Card[]>('tracked')
      return response.data
    }
  })

export const getMyCards = () =>
  useQuery({
    queryKey: ['myEvents'],
    queryFn: async () => {
      const response = await api.get<Card[]>('myEvents')
      return response.data
    }
  })

