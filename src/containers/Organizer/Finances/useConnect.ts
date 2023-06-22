import { getEventById } from '@/hooks/useEventById'
import useEventsByUser from '@/hooks/useEventsByUser'
import { getPurchasedTickesByDrop } from '@/hooks/usePurchasedTicketsByDrop'
import { getTicketsByEvent } from '@/hooks/useTicketsByEvent'
import { Ticket } from '@/models/Tickets/types'
import { User } from '@/models/Users/types'
import { getUserCookie } from '@/utils/Login/userCookie'
import { useEffect, useState } from 'react'
import { EventBalance } from './types'

const useConnect = () => {
  const user = JSON.parse(getUserCookie('userData')) as User
  const [eventBalances, setEventBalances] = useState<EventBalance[]>([])
  const [ticketDrops, setTicketDrops] = useState<Ticket[]>([])
  const { events: userEvents } = useEventsByUser({ userEmail: user?.email })

  // 1 - For each event, fetch all ticket_drops
  useEffect(() => {
    userEvents?.forEach((event) => {
      getTicketsByEvent({ event_id: event.id })
        .then((ticketDrop) => {
          if (!ticketDrop) return
          const existingTicketDrop = ticketDrops.find(
            (ticket) => ticket.id === ticketDrop.id)
          if (!existingTicketDrop) {
            setTicketDrops((prev) => [...prev, ticketDrop])
          }
        })
    })
  }, [userEvents])

  // 2 - Fetch purchased tickets by ticket_drop. Group them by [{eventId, totalSales}, ...]
  useEffect(() => {
    ticketDrops?.forEach((ticketDrop) => {
      getPurchasedTickesByDrop({ ticketDrop: String(ticketDrop.id) })
        .then((tickets) => {
          const totalSales = tickets?.length
          getEventById({ id: ticketDrop.event_id })
            .then((event) => {
              const res = {
                eventName: event.name,
                eventId: ticketDrop.event_id,
                totalSales,
                earnings: totalSales * ticketDrop.price
              }
              setEventBalances((prev) => [...prev, res])
            })
        })
    })
  }, [ticketDrops])

  return { eventBalances }
}

export default useConnect
