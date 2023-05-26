import { Ticket } from '@/models/Tickets/types'

type Props = {
    ticket: Ticket
}

const ticketStatus = ({ ticket }:Props) => {
  const startDate = new Date(ticket.start_date)
  const endDate = new Date(ticket.end_date)
  const currentDate = new Date()
  if (startDate > currentDate) {
    return 'Activo'
  } else if (startDate < currentDate && endDate > currentDate) {
    return 'Activo'
  } else {
    return 'Finalizado'
  }
}

export default ticketStatus
