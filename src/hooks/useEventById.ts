import { Event } from '@/models/Events/types'
import { useQuery } from 'react-query'

type Props = {
    id: number
}

const useEventById = ({ id }: Props) => {
  const { data, isLoading, error } = useQuery('eventById', () => getEventById({ id }))

  return {
    data,
    isLoading,
    error
  }
}

async function getEventById ({ id }: Props) {
  const response = await fetch(`/api/events/${id}`, {
    method: 'GET'
  })
  const data: Event = await response.json()
  return data
}

export default useEventById
