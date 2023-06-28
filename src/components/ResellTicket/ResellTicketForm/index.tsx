import React, { FC, useEffect, useState } from 'react'
import { TicketResellPopUp, TicketResellPopUpHeader, TicketResellCancel, RoyaltiesContainer, Royalty, WarnText, FirstContainer, SecondContainer, TicketResellPopUpImage, TicketResellPopUpButton, Overlay, TicketResellPopUpTitle, TicketResellPopUpPrice, TicketResellPopUpForm, TicketResellPopUpLabel, TicketResellPopUpInput } from './styles'
import { Ticket } from '@/models/Tickets/types'
import { ToastContainer, Zoom, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import handleStatus from '@/utils/Ticket/handleStatus'
import { NFT } from '@thirdweb-dev/react'
import { getUserCookie } from '@/utils/Login/userCookie'
import handleTicketResell from '@/utils/Ticket/handleTicketResell'
import handleTicketsInResell from '@/utils/Ticket/handleTicketsInResell'
import Loading from '@/components/Loading'
import CustomAlert from '@/components/Event/EventBuyOption/CustomAlert'

type Props = {
    ticket: Ticket,
    setShowPopup: (showPopup: boolean) => void,
    ownedNFT: NFT[],
    eurPrice: number
}

const ResellButton: FC<Props> = ({ ticket, setShowPopup, ownedNFT, eurPrice }) => {
  const privateKey = JSON.parse(getUserCookie('userData')).privateKey
  const [ticketsAvailable, setTicketsAvailable] = useState<NFT[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const handlePopupClose = () => {
    setShowPopup(false)
  }

  useEffect(() => {
    const fetchTicketsAvailable = async () => {
      const ticketsInResell = await handleTicketsInResell({ ticketId: ticket.id, ownedNFT, privateKey })
      const availableTickets = ownedNFT.filter((nft) => !ticketsInResell?.includes(nft.metadata.id))
      setTicketsAvailable(availableTickets)
      setIsLoading(false)
    }

    fetchTicketsAvailable()
  }, [ticket.id, ownedNFT, privateKey])

  const handleConfirmResellTicket = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    toast.promise(
      handleTicketResell({ e, ticket, privateKey, ownedNFT }),
      {
        pending: '¡Tu ticket se esta publicando en el mercado de reventa! 🚀',
        success: '¡Tu ticket se ha publicado satisfactoriamente! 🎉',
        error: '¡Ups! Algo ha salido mal 😬'
      }
    ).then(() => {
      setTimeout(() => {
        handlePopupClose()
      }, 2000)
    })
  }

  if (handleStatus({ ticket }) === 'Activo') {
    return (
<>
  <Overlay>
    <ToastContainer theme='colored' transition={Zoom} position='top-center' />
    <TicketResellPopUp>
      <TicketResellCancel onClick={handlePopupClose}>X</TicketResellCancel>
      <TicketResellPopUpHeader>¡Revende tu ticket!</TicketResellPopUpHeader>
      <TicketResellPopUpImage src={ticket.image} />
      <TicketResellPopUpTitle>{ticket.name}</TicketResellPopUpTitle>
      <TicketResellPopUpPrice>{eurPrice}€</TicketResellPopUpPrice>
      {isLoading
        ? (
        <Loading type='main' />
          )
        : (
        <TicketResellPopUpForm onSubmit={handleConfirmResellTicket}>
          <FirstContainer>
            <TicketResellPopUpLabel htmlFor='nftId'>Ticket</TicketResellPopUpLabel>
            <TicketResellPopUpInput name="nftId" id="nftId" as='select' required>
              {ticketsAvailable.map((nft) => (
                <option key={nft.metadata.id} value={nft.metadata.id}>
                  {ticket.name} id: {nft.metadata.id}
                </option>
              ))}
            </TicketResellPopUpInput>
            <TicketResellPopUpLabel htmlFor="price">Precio</TicketResellPopUpLabel>
            <TicketResellPopUpInput name="price" id="price" type="text" min="0" defaultValue="0" pattern="[0-9]+([.][0-9]+)?"/>
            {ticketsAvailable.length !== 0
              ? (
              <TicketResellPopUpButton type='submit' disabled={false}>Revender</TicketResellPopUpButton>
                )
              : (
              <TicketResellPopUpButton type='submit' disabled>Revender</TicketResellPopUpButton>
                )}
          </FirstContainer>
          {ticketsAvailable.length !== 0 && (
            <>
              <RoyaltiesContainer>
                <Royalty>* {ticket.organizer_royalty}% comisión del organizador y 5% de EventVerse.</Royalty>
              </RoyaltiesContainer>
              <CustomAlert
                status='Info'
                text='⚠️ El ticket estará disponible en el mercado de reventa durante 7 días. Durante este tiempo, no podrás acceder a él.'
              />
            </>
          )}
          {ticketsAvailable.length === 0 && (
            <SecondContainer>
              <WarnText>❌ No tienes tickets disponibles para revender</WarnText>
            </SecondContainer>
          )}
        </TicketResellPopUpForm>
          )}
    </TicketResellPopUp>
  </Overlay>
</>

    )
  }

  return null
}

export default ResellButton
