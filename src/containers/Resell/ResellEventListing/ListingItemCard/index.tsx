import React, { FC, useEffect, useState } from 'react'
import { CardContent, CardImage, CardWrapper, Price, Title, BuyButton } from './styles'
import { TicketListingItem } from '@/models/Resell/types'
import { ToastContainer, Zoom, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ConnectWallet, useAddress, useContract, useNetworkMismatch } from '@thirdweb-dev/react'

type Props = {
  listingItem: TicketListingItem
}
const EventCard: FC<Props> = ({ listingItem }) => {
  const maticPrice = listingItem.buyoutCurrencyValuePerToken.displayValue
  const { contract } = useContract(process.env.NEXT_PUBLIC_MARKETPLACE_ADDR, 'marketplace')
  const networkMismatch = useNetworkMismatch()
  const userAddress = useAddress()
  const [eurBalance, setEurBalance] = useState<number>(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/crypto')
        if (!response.ok) {
          throw new Error('Failed to fetch data from the Crypto conversor API')
        }
        const data = await response.json()
        const eurBalance = (Number(maticPrice) * data).toFixed(2)
        setEurBalance(Number(eurBalance))
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  const onClickBuyTicket = async () => {
    if (!contract) return
    try {
      await contract.buyoutListing(listingItem.id, 1)
      toast.success('Ticket comprado con éxito 🎉, lo podrás ver únicamente en tu wallet de metamask')
    } catch (error) {
      toast.error('Error al comprar ticket, comprueba que tienes sufiente MATIC en tu wallet 🙃')
    }
  }

  return (
    <>
    <ToastContainer theme='colored' transition={Zoom} position='top-center' />
    <CardWrapper>
      <CardImage src={listingItem.asset.image} alt="ticket image" />
      <CardContent>
        <Title>{listingItem.asset.name}</Title>
        <Price>{eurBalance}€ <small> {Number(maticPrice).toFixed(4)} ~ MATIC </small></Price>
        {
          (networkMismatch || !userAddress)
            ? <ConnectWallet data-testid="connect-wallet"/>
            : <BuyButton onClick={onClickBuyTicket}>Comprar ticket</BuyButton>
        }
      </CardContent>
    </CardWrapper>
    </>
  )
}

export default EventCard
