import { TicketListingItem } from '@/models/Resell/types'

export const findUniqueAddress = (tickets: TicketListingItem[]) => {
  const res: TicketListingItem[] = []
  for (let i = 0; i < tickets.length; i++) {
    const ticket = tickets[i]
    if (!res.find((t) => t.assetContractAddress === ticket.assetContractAddress)) {
      res.push(ticket)
    }
  }
  return res
}
