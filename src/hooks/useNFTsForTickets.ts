import { useEffect, useState } from 'react'
import { useContract, useOwnedNFTs } from '@thirdweb-dev/react'
import { Ticket } from '@/models/Tickets/types'

const useNFTsForTickets = (tickets: Ticket[], address: string) => {
  const [ticketsWithNFTs, setTicketsWithNFTs] = useState<any[]>([])

  useEffect(() => {
    const fetchNFTsForTickets = async () => {
      const ticketsWithNFTsPromises = tickets.map(async (ticket: Ticket) => {
        const contractAddress = ticket.contract_address

        const { contract } = useContract(contractAddress)

        const nftsData = await useOwnedNFTs(contract, address)

        const nfts = nftsData || []

        return { nfts }
      })

      const fetchTickets = async () => {
        const ticketsWithNFTs = await Promise.all(ticketsWithNFTsPromises)
        setTicketsWithNFTs(ticketsWithNFTs)
      }

      fetchTickets()
    }

    fetchNFTsForTickets()
  }, [tickets, address])

  return ticketsWithNFTs
}

export default useNFTsForTickets
