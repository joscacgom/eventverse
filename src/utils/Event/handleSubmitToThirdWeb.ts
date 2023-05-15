import { TicketTableSupabase } from '@/models/Tickets/types'
import { useContract, useContractMetadata, useSDK } from '@thirdweb-dev/react'

export const handleSubmitToThirdWeb = async (ticket: TicketTableSupabase) => {
  const sdk = useSDK()

  try {
    const nftContract: any = await sdk?.deployer.deployNFTDrop({
      name: ticket.name,
      primary_sale_recipient: '{{wallet_address}}', // wallet address of the event organizer connected to the app
      image: ticket.image,
      description: ticket.description
      // fees

    })
    const { contract } = useContract(nftContract)
    const { data: contractMetadata } = useContractMetadata(contract)
    const nftImageURL = contractMetadata?.image

    return { nftContract, nftImageURL }
  } catch (error) {
    throw new Error('Ticket submission failed!')
  }
}
