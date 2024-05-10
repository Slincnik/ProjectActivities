import { api } from '@/plugins/axios'
import { useQuery } from '@tanstack/vue-query'

export type EventCard = {
  id: string
  name: string
  date: string
  place: string
  img: string
}

export const getCards = () =>
  useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      const response = await api.get<EventCard[]>('events')
      return response.data
    }
  })

