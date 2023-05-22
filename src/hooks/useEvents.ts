import { Event } from '@/models/Events/types'
import { useQuery } from 'react-query'

const useEvents = () => {
  const { data, isLoading, error } = useQuery('events', getEvents)

  return {
    data,
    isLoading,
    error
  }
}

async function getEvents () {
  const response = await fetch('/api/events', {
    method: 'GET'
  })
  const data: Event[] = await response.json()
  return data
}

export default useEvents
