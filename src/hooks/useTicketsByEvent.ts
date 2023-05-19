/* eslint-disable camelcase */
import { Ticket } from '@/models/Tickets/types'
import { useQuery } from 'react-query'

type Props = {
    event_id: number
}

const useTicketsByEvent = ({ event_id }: Props) => {
  const { data, isLoading, error } = useQuery('ticketsByEvent', () => getTicketsByEvent({ event_id }))

  return {
    ticket: data,
    isLoading,
    error
  }
}

async function getTicketsByEvent ({ event_id }: Props) {
  const response = await fetch(`/api/tickets/${event_id}`, {
    method: 'GET'
  })
  const data: Ticket[] = await response.json()
  return data[0]
}

export default useTicketsByEvent
