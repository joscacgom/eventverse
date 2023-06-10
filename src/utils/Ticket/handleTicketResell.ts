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
  const contract = await sdk.getContract('0xF10CC8b889856cFe2fCfD2d98Bf73F7e7C6488ff')
  const userAddress = JSON.parse(getUserCookie('userData'))?.address[0] || ''

  try {
    // const tokenIds = Object.keys(ownedNFT)
    // const tokensToSell = tokenIds.slice(0, amountValue)
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

    // const listingPromises = tokensToSell.map(async (tokenId) => {
    //   const transaction = await contract.directListings.createListing({
    //     assetContractAddress: ticket.contract_address,
    //     tokenId,
    //     pricePerToken: maticBalance,
    //     startTimestamp: new Date(Date.now()),
    //     currencyContractAddress: NATIVE_TOKEN_ADDRESS,
    //     quantity: 1,
    //     endTimestamp: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)
    //   })
    //   return transaction
    // })
    // const transactions = await Promise.all(listingPromises)
    // const transactionIds = transactions.map((tx) => {
    //   const parsedValue = ethers.BigNumber.from(tx.id._hex).toString()
    //   return parsedValue
    // })
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
