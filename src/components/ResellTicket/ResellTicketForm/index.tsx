import React, { FC } from 'react'
import { TicketResellPopUp, TicketResellPopUpHeader, TicketResellCancel, TicketResellPopUpImage, TicketResellPopUpButton, Overlay, TicketResellPopUpTitle, TicketResellPopUpPrice, TicketResellPopUpForm, TicketResellPopUpLabel, TicketResellPopUpInput } from './styles'
import { Ticket } from '@/models/Tickets/types'
import { ToastContainer, Zoom, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import handleStatus from '@/utils/Ticket/handleStatus'
import { NATIVE_TOKEN_ADDRESS, NFT, useContract } from '@thirdweb-dev/react'

type Props = {
    ticket: Ticket,
    setShowPopup: (showPopup: boolean) => void,
    ownedNFT: NFT[]
}

const handleRenderResellButton:FC<Props> = ({ ticket, setShowPopup, ownedNFT }) => {
  const { contract: marketplace } = useContract('0xF10CC8b889856cFe2fCfD2d98Bf73F7e7C6488ff', 'marketplace')
  console.log(Object.keys(ownedNFT))

  const handlePopupClose = () => {
    setShowPopup(false)
  }
  const handleConfirmResellTicket = (e: React.FormEvent<HTMLFormElement>) => {
    handlePopupClose()
    toast.promise(
      submitResellTicket(e),
      {
        pending: '¡Tu ticket se esta publicando en el mercado de reventa! 🚀',
        success: '¡Tu ticket se ha publicado satisfactoriamente! 🎉',
        error: '¡Ups! Algo ha salido mal 😬'
      }
    )
  }

  const submitResellTicket = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const amountValue = Number(formData.get('amount'))
    const priceValue = Number(formData.get('price'))

    try {
      const tokenIds = Object.keys(ownedNFT.metadata)
      const tokensToSell = tokenIds.slice(0, amountValue)

      const listingPromises = tokensToSell.map(async (tokenId) => {
        const transaction = await marketplace?.direct.createListing({
          assetContractAddress: ticket.contract_address,
          buyoutPricePerToken: priceValue,
          currencyContractAddress: NATIVE_TOKEN_ADDRESS,
          listingDurationInSeconds: 60 * 60 * 24 * 7,
          quantity: 1,
          startTimestamp: new Date(0),
          tokenId
        })

        return transaction
      })

      const transactions = await Promise.all(listingPromises)
      return transactions
    } catch (error) {
      console.error(error)
    }
  }

  if (handleStatus({ ticket }) === 'Activo') {
    return (
      <>
        <ToastContainer theme='colored' transition={Zoom} position='top-center' />
        <Overlay>
          <TicketResellPopUp>
            <TicketResellCancel onClick={handlePopupClose}>X</TicketResellCancel>
            <TicketResellPopUpHeader>¡Revende tu ticket!</TicketResellPopUpHeader>
            <TicketResellPopUpImage src={ticket.image} />
            <TicketResellPopUpTitle>{ticket.name}</TicketResellPopUpTitle>
            <TicketResellPopUpPrice>{ticket.price}€</TicketResellPopUpPrice>
            <TicketResellPopUpForm onSubmit={handleConfirmResellTicket}>
                <TicketResellPopUpLabel htmlFor='amount'>Cantidad</TicketResellPopUpLabel>
                <TicketResellPopUpInput name="amount" id="amount" type="number" min="1" max={ticket.quantity} defaultValue={1} />
                <TicketResellPopUpLabel htmlFor="price">Precio</TicketResellPopUpLabel>
                <TicketResellPopUpInput name="price" id="price" type="number" min="1" defaultValue={ticket.price}/>
                <TicketResellPopUpButton type='button' >Revender</TicketResellPopUpButton>
            </TicketResellPopUpForm>
          </TicketResellPopUp>
        </Overlay>
      </>
    )
  }

  return null
}

export default handleRenderResellButton
