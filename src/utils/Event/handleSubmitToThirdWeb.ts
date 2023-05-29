import { TicketTableSupabase } from '@/models/Tickets/types'
import { ThirdwebSDK } from '@thirdweb-dev/sdk'
import { getUserCookie } from '@/utils/Login/userCookie'

export const handleSubmitToThirdWeb = async (ticket: TicketTableSupabase) => {
  const privateKey = JSON.parse(getUserCookie('userData')).privateKey
  const organizerAddress = JSON.parse(getUserCookie('userData')).address[0]
  const sdk = ThirdwebSDK.fromPrivateKey(privateKey, 'mumbai')
  // convert price in eur to matic

  try {
    const nftContract: any = await sdk?.deployer.deployNFTDrop({
      name: ticket.name,
      primary_sale_recipient: organizerAddress,
      image: ticket.image,
      description: ticket.description,
      fee_recipient: organizerAddress,
      seller_fee_basis_points: Number(ticket.organizer_royalty),
      platform_fee_recipient: ticket.platform_address,
      platform_fee_basis_points: Number(ticket.platform_royalty)
    })
    const contractDrop = await sdk?.getContract(nftContract, 'nft-drop')

    const claimConditions = [
      {
        startTime: new Date(ticket.start_date),
        maxClaimableSupply: ticket.quantity,
        maxClaimablePerWallet: ticket.max_per_user,
        price: ticket.price
      }
    ]

    const metadatas = Array(ticket.quantity).fill({
      name: ticket.name,
      description: ticket.description,
      image: ticket.image
    })

    await contractDrop?.createBatch(metadatas)
    await contractDrop?.claimConditions.set(claimConditions)

    const nftMetadata = await contractDrop?.metadata.get()
    const nftImageURL = nftMetadata?.image
    return { nftContract, nftImageURL }
  } catch (error) {
    console.log(error)
    throw new Error('Ticket submission failed!')
  }
}
