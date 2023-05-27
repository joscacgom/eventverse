import { Organizer } from '@/models/Users/types'
import { useQuery } from 'react-query'

type Props = {
    id: number
}

const useOrganizerById = ({ id }: Props) => {
  const { data, isLoading, error } = useQuery('organizerById', () => getOrganizerById({ id }))

  return {
    data,
    isLoading,
    error
  }
}

async function getOrganizerById ({ id }: Props) {
  const response = await fetch(`/api/organizer/${id}`, {
    method: 'GET'
  })
  const data: Organizer = await response.json()
  return data
}

export default useOrganizerById
