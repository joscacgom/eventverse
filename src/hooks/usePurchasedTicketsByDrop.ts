import { Ticket } from '@/models/Tickets/types'
import { useQuery } from 'react-query'

type Props = { ticketDrop: string }

const usePurchasedTicketsByDrop = ({ ticketDrop }: Props) => {
  const { data, refetch, isLoading, error } = useQuery(
    'purchasedTicketsByDrop',
    () => getPurchasedTickesByDrop({ ticketDrop })
  )

  return { tickets: data, isLoading, error, refetch }
}

export async function getPurchasedTickesByDrop ({ ticketDrop }: Props) {
  const response = await fetch(`/api/tickets/purchased/${ticketDrop}`, {
    method: 'GET'
  })
  const res = await response.json()
  const tickets: Ticket[] = Array.isArray(res) ? res : []
  return tickets
}

export default usePurchasedTicketsByDrop
