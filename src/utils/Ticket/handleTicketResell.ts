/* eslint-disable camelcase */
import { Ticket } from '@/models/Tickets/types'
import { NATIVE_TOKEN_ADDRESS, NFT, ThirdwebSDK } from '@thirdweb-dev/react'
import { supabase } from '@/config'
import React from 'react'
import { getUserCookie } from '../Login/userCookie'
import { ethers } from 'ethers'

type Props = {
    e: React.FormEvent<HTMLFormElement>;
    ticket: Ticket;
    privateKey: string;
    ownedNFT: NFT[];
}

const handleTicketResell = async ({ e, ticket, privateKey, ownedNFT }: Props) => {
  e.preventDefault()
  const form = e.currentTarget
  const formData = new FormData(form)
  const nftId = Number(formData.get('nftId'))
  const priceValue = Number(formData.get('price'))
  const sdk = ThirdwebSDK.fromPrivateKey(privateKey, 'mumbai')
  const contract = await sdk.getContract(String(process.env.NEXT_PUBLIC_MARKETPLACE_ADDR))
  const userAddress = JSON.parse(getUserCookie('userData'))?.address[0] || ''

  try {
    const maticConversion = await fetch('/api/crypto')
    const data = await maticConversion.json()
    const maticBalance = (Number(priceValue) / data)
    const transaction = await contract.directListings.createListing({
      assetContractAddress: ticket.contract_address,
      tokenId: nftId,
      pricePerToken: maticBalance,
      startTimestamp: new Date(Date.now()),
      currencyContractAddress: NATIVE_TOKEN_ADDRESS,
      quantity: 1,
      endTimestamp: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)
    })

    const transactionId = ethers.BigNumber.from(transaction.id._hex).toString()
    await submitResellIdToSupabase({ walletAddress: userAddress, transactionId, ticketId: ticket.id })
  } catch (error) {
    console.error(error)
  }
}

type SupabaseProps = {
    walletAddress: string;
    ticketId: number;
    transactionId: string;
}

const submitResellIdToSupabase = async ({ walletAddress, ticketId, transactionId }: SupabaseProps) => {
  try {
    const { data: existingData, error } = await supabase
      .from('ticket_purchased')
      .select('*')
      .eq('wallet_address', walletAddress)
      .eq('ticket_drop', ticketId)

    if (error) {
      console.error('Error checking for existing row:', error)
      return
    }

    if (existingData && existingData.length > 0) {
      const { id, resell_id } = existingData[0]
      const updatedResellId = resell_id ? `${resell_id},${transactionId}` : transactionId

      await supabase
        .from('ticket_purchased')
        .update({ resell_id: updatedResellId })
        .match({ id })
    }
  } catch (error) {
    console.error('Error updating data:', error)
  }
}

export default handleTicketResell
