import { TicketListingItem } from '@/models/Resell/types'
import { findUniqueAddress } from '@/utils/Ticket/findUniqueAddress'
import { useContract, useActiveListings } from '@thirdweb-dev/react'
import { useEffect, useState } from 'react'

export const useEventsWithListedTickets = () => {
  const [resellTickets, setResellTickets] = useState<TicketListingItem[]>([])
  const { contract: marketplace } = useContract(process.env.NEXT_PUBLIC_MARKETPLACE_ADDR, 'marketplace')
  const { data: listings, isLoading } = useActiveListings(marketplace)

  useEffect(() => {
    if (listings) {
      const res = findUniqueAddress(listings as unknown as TicketListingItem[])
      setResellTickets(res)
    }
  }, [listings, isLoading])

  return { resellTickets, isLoading }
}

export default useEventsWithListedTickets
