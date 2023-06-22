import { Event } from '@/models/Events/types'
import { useQuery } from 'react-query'

type Props = { userEmail: string }

const useEventsByUser = ({ userEmail }: Props) => {
  const { data, refetch, isLoading, error } = useQuery(
    'eventsByUser',
    () => getEventsByUser({ userEmail })
  )

  return { events: data, isLoading, error, refetch }
}

export async function getEventsByUser ({ userEmail }: Props) {
  const response = await fetch(`/api/events/email/${userEmail}`, {
    method: 'GET'
  })
  const res: Event[] = await response.json()
  const events = Array.isArray(res) ? res : []
  return events
}

export default useEventsByUser
