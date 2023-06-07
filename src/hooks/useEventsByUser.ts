import { useQuery } from 'react-query'

type Props = { userEmail: string }

const useEventsByUser = ({ userEmail }: Props) => {
  const { data, isLoading, error } = useQuery('eventsByUser',
    () => getEventsByUser({ userEmail })
  )

  const events = Array.isArray(data) ? data : []

  return { events, isLoading, error }
}

async function getEventsByUser ({ userEmail }: Props) {
  const response = await fetch(`/api/events/email/${userEmail}`, {
    method: 'GET'
  })
  const data = await response.json()
  return data
}

export default useEventsByUser
