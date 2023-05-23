import { Ticket } from '@/models/Tickets/types'
import { useQuery } from 'react-query'

type UseTicketsByUserResult = {
  tickets: Ticket[] | undefined;
  isLoading: boolean;
  error: boolean;
};

async function getAllTickets (): Promise<Ticket[]> {
  const response = await fetch('/api/tickets', {
    method: 'GET'
  })
  const data: Ticket[] = await response.json()
  return data
}

const useTicketsByUser = (): UseTicketsByUserResult => {
  const { data: tickets, isLoading: ticketsLoading, error: ticketsError } = useQuery('ticketsByUser', getAllTickets, {
    staleTime: 60000,
    cacheTime: 300000
  })

  if (ticketsLoading) {
    return { tickets: [], isLoading: true, error: false }
  }

  if (ticketsError) {
    return { tickets: [], isLoading: false, error: true }
  }

  return { tickets, isLoading: false, error: false }
}

export default useTicketsByUser
