import { Ticket } from '@/models/Tickets/types'
import { useOwnedNFTs, useContract } from '@thirdweb-dev/react'
import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'

type Props = {
  address: string;
}

type UseTicketsByUserResult = {
  ticketsWithNFTs: any[];
  isLoading: boolean;
  error: boolean;
}

const useTicketsByUser = ({ address }: Props): UseTicketsByUserResult => {
  const { data: ticketsData, isLoading: ticketsLoading, error: ticketsError } = useQuery('ticketsByEvent', () => getAllTickets())

  const [ticketsWithNFTs, setTicketsWithNFTs] = useState<any[]>([])

  const fetchNFTsForTickets = async () => {
    const tickets = ticketsData || []

    const ticketsWithNFTsPromises = tickets.map(async (ticket: Ticket) => {
      const { contract } = useContract(ticket.contract_address)
      const { data: nftsData, isLoading, error } = useOwnedNFTs(contract, address)
      const nfts = isLoading || error ? [] : nftsData

      return { nfts }
    })

    const ticketsWithNFTs = await Promise.all(ticketsWithNFTsPromises)
    setTicketsWithNFTs(ticketsWithNFTs)
  }

  useEffect(() => {
    fetchNFTsForTickets()
  }, [ticketsData, address])

  if (ticketsLoading) {
    return { ticketsWithNFTs: [], isLoading: true, error: false }
  }

  if (ticketsError) {
    return { ticketsWithNFTs: [], isLoading: false, error: true }
  }

  return { ticketsWithNFTs, isLoading: false, error: false }
}

async function getAllTickets () {
  const response = await fetch('/api/tickets', {
    method: 'GET'
  })
  const data: Ticket[] = await response.json()
  return data
}

export default useTicketsByUser
