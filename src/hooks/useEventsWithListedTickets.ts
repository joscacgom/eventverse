import { Event } from '@/models/Events/types'
import { TicketListingItem } from '@/models/Resell/types'
import { Ticket } from '@/models/Tickets/types'
import { getEventByAddress } from '@/utils/Event/getEventByAddress'
import { findUniqueAddress } from '@/utils/Ticket/findUniqueAddress'
import { useContract, useActiveListings } from '@thirdweb-dev/react'
import { useEffect, useState } from 'react'

export interface ResellEvent {
  event: Event;
  contractAddress: Ticket['contract_address'];
}
export const useEventsWithListedTickets = () => {
  const [resellEvents, setResellEvents] = useState<ResellEvent[]>([])
  const { contract: marketplace } = useContract(process.env.NEXT_PUBLIC_MARKETPLACE_ADDR, 'marketplace')
  const { data: listings, isLoading } = useActiveListings(marketplace)

  const getEventsWithListedTickets = async (uniqueTicketsAddress: TicketListingItem[]) => {
    if (uniqueTicketsAddress.length === 0) {
      setResellEvents([])
    } else {
      const events = await Promise.all(
        uniqueTicketsAddress.map(async (ticket: TicketListingItem) => {
          const event = await getEventByAddress(ticket.assetContractAddress)
          return {
            event,
            contractAddress: ticket.assetContractAddress
          }
        })
      )
      setResellEvents(events)
    }
  }

  useEffect(() => {
    if (listings) {
      const uniqueTicketsAddress = findUniqueAddress(listings as unknown as TicketListingItem[])
      getEventsWithListedTickets(uniqueTicketsAddress)
    }
  }, [listings, isLoading])

  return { resellEvents, isLoading }
}

export default useEventsWithListedTickets
