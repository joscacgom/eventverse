import { Ticket } from '@/models/Tickets/types'
import { useQuery } from 'react-query'

type Props = {
    walletAddress: string
}

async function getTicketsByUser ({ walletAddress }: Props) {
  const response = await fetch(`/api/tickets/tickets-user/${walletAddress}`, {
    method: 'GET'
  })
  const data: Ticket[] = await response.json()

  return data
}

const useTicketsByUser = ({ walletAddress }: Props) => {
  const { data, isLoading, error } = useQuery('ticketsByUser', () => getTicketsByUser({ walletAddress }))

  return {
    tickets: data,
    isLoading,
    error
  }
}

export default useTicketsByUser
