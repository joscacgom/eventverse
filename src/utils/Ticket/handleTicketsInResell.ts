/* eslint-disable camelcase */
import { supabase } from '@/config'
import { getUserCookie } from '../Login/userCookie'
import { NFT, ThirdwebSDK } from '@thirdweb-dev/react'

type Props = {
    ticketId: number;
    privateKey: string;
    ownedNFT: NFT[];
}

const handleTicketsInResell = async ({ ticketId, privateKey, ownedNFT }: Props) => {
  const userAddress = JSON.parse(getUserCookie('userData'))?.address[0] || ''
  const sdk = ThirdwebSDK.fromPrivateKey(privateKey, 'mumbai')
  const contract = await sdk.getContract(String(process.env.NEXT_PUBLIC_MARKETPLACE_ADDR), 'marketplace')
  try {
    const { data: existingData, error } = await supabase
      .from('ticket_purchased')
      .select('*')
      .eq('wallet_address', userAddress)
      .eq('ticket_drop', ticketId)

    if (error) {
      console.error('Error checking for existing row:', error)
      return
    }

    if (existingData && existingData.length > 0) {
      const { resell_id } = existingData[0]
      const resellIdArray = resell_id ? resell_id.split(',') : []
      const listingIds = resellIdArray.map((listingId: any) => {
        return contract.direct.getListing(listingId)
      })

      const listings = await Promise.all(listingIds)

      const tokenIds = listings.map((listing: any) => {
        return listing.tokenId
      })
      return tokenIds
    }
  } catch (error) {
    console.error('Error updating data:', error)
  }
}

export default handleTicketsInResell
