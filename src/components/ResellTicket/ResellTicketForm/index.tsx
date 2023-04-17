import { FC, useState } from 'react'
import { TicketAction, TicketResellPopUp, TicketResellPopUpHeader, TicketResellCancel, TicketResellPopUpImage, TicketResellPopUpButton, Overlay, TicketResellPopUpTitle, TicketResellPopUpPrice, TicketResellPopUpForm, TicketResellPopUpLabel, TicketResellPopUpInput } from './styles'
import { UserTicket } from '@/models/Tickets/types'

type Props = {
    ticket: UserTicket
}

const handleRenderResellButton:FC<Props> = ({ ticket }) => {
  const [showPopup, setShowPopup] = useState<boolean>(false)

  const handleResellClick = () => {
    setShowPopup(true)
  }

  const handlePopupClose = () => {
    setShowPopup(false)
  }

  if (ticket.status === 'Activo') {
    return (
      <>
        <TicketAction onClick={handleResellClick}>
          $
        </TicketAction>
        {showPopup && (
        <Overlay>
          <TicketResellPopUp>
            <TicketResellCancel onClick={handlePopupClose}>X</TicketResellCancel>
            <TicketResellPopUpHeader>¡Revende tu ticket!</TicketResellPopUpHeader>
            <TicketResellPopUpImage src={ticket.imagEvent} />
            <TicketResellPopUpTitle>{ticket.name}</TicketResellPopUpTitle>
            <TicketResellPopUpPrice>{ticket.price}€</TicketResellPopUpPrice>
            <TicketResellPopUpForm>
                <TicketResellPopUpLabel htmlFor='amount'>Cantidad</TicketResellPopUpLabel>
                <TicketResellPopUpInput name="amount" id="amount" type="number" min="1" max={ticket.quantity} defaultValue={1} />
                <TicketResellPopUpLabel htmlFor="price">Precio</TicketResellPopUpLabel>
                <TicketResellPopUpInput name="price" id="price" type="number" min="1" defaultValue={ticket.price}/>
                <TicketResellPopUpButton>Revender</TicketResellPopUpButton>
            </TicketResellPopUpForm>
          </TicketResellPopUp>
        </Overlay>
        )}
      </>
    )
  }

  return null
}

export default handleRenderResellButton
