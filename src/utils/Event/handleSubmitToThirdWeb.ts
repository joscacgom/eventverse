import { TicketTableSupabase } from '@/models/Tickets/types'
import { ThirdwebSDK } from '@thirdweb-dev/sdk'
import { getUserCookie } from '@/utils/Login/userCookie'

export const handleSubmitToThirdWeb = async (ticket: TicketTableSupabase) => {
  const privateKey = JSON.parse(getUserCookie('userData')).privateKey
  const organizerAddress = JSON.parse(getUserCookie('userData')).address[0]
  const sdk = ThirdwebSDK.fromPrivateKey(privateKey, 'mumbai')

  try {
    const response = await fetch('/api/crypto')
    if (!response.ok) {
      throw new Error('Failed to fetch data from the Crypto conversor API')
    }
    const data = await response.json()
    const maticBalance = (Number(ticket.price) / data)
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
        maxClaimableSupply: Number(ticket.quantity),
        maxClaimablePerWallet: Number(ticket.max_per_user),
        price: Number(maticBalance)
      }
    ]

    const metadatas = Array(Number(ticket.quantity)).fill({
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
    console.log('Error: ', error)
    throw new Error('Ticket submission failed!')
  }
}
