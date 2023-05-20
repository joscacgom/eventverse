import { TicketTableSupabase } from '@/models/Tickets/types'
import { useContract, useContractMetadata, useSDK } from '@thirdweb-dev/react'
import { getUserCookie } from '@/utils/Login/userCookie'

export const handleSubmitToThirdWeb = async (ticket: TicketTableSupabase) => {
  const sdk = useSDK()
  const organizerAddress = JSON.parse(getUserCookie('userData')).address
  try {
    const nftContract: any = await sdk?.deployer.deployNFTDrop({
      name: ticket.name,
      primary_sale_recipient: organizerAddress,
      image: ticket.image,
      description: ticket.description,
      fee_recipient: organizerAddress,
      seller_fee_basis_points: ticket.organizer_royalty,
      platform_fee_recipient: ticket.platform_address,
      platform_fee_basis_points: ticket.platform_royalty
    })
    const { contract } = useContract(nftContract)
    const { data: contractMetadata } = useContractMetadata(contract)
    await sdk?.getContract(nftContract, 'nft-drop')

    const nftImageURL = contractMetadata?.image

    return { nftContract, nftImageURL }
  } catch (error) {
    throw new Error('Ticket submission failed!')
  }
}
