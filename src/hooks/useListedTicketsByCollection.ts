import { TicketListingItem } from '@/models/Resell/types'
import { useContract, useActiveListings } from '@thirdweb-dev/react'
import { useEffect, useState } from 'react'

type Props = {
  collectionAddr: string
}
export const useEventsWithListedTicketsByCollection = ({ collectionAddr }: Props) => {
  const [resellTickets, setResellTickets] = useState<TicketListingItem[]>([])
  const { contract: marketplace } = useContract(process.env.NEXT_PUBLIC_MARKETPLACE_ADDR, 'marketplace')
  const { data: listings, isLoading } = useActiveListings(marketplace)

  const findTicketsByCollection = (collectionAddr: string, resellTickets: TicketListingItem[]) => {
    return resellTickets.filter((ticket) => ticket.assetContractAddress === collectionAddr)
  }

  useEffect(() => {
    if (listings !== undefined && !isLoading) {
      const res = findTicketsByCollection(collectionAddr, listings as unknown as TicketListingItem[])
      setResellTickets(res)
    }
  }, [listings, isLoading])

  return { resellTickets, isLoading }
}

export default useEventsWithListedTicketsByCollection
