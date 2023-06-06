import { FC } from 'react'
import { TicketResellPopUp, TicketResellPopUpHeader, TicketResellCancel, TicketResellPopUpImage, TicketResellPopUpButton, Overlay, TicketResellPopUpTitle, TicketResellPopUpPrice, TicketResellPopUpForm, TicketResellPopUpLabel, TicketResellPopUpInput } from './styles'
import { Ticket } from '@/models/Tickets/types'
import { ToastContainer, Zoom, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import handleStatus from '@/utils/Ticket/handleStatus'

type Props = {
    ticket: Ticket,
    setShowPopup: (showPopup: boolean) => void
}

const handleRenderResellButton:FC<Props> = ({ ticket, setShowPopup }) => {
  const handlePopupClose = () => {
    setShowPopup(false)
  }
  const handleConfirmResellTicket = () => {
    handlePopupClose()
    toast.promise(
      submitResellTicket(),
      {
        pending: 'Tu ticket se esta publicando en el mercado de reventa... 🚀',
        success: '¡Tu ticket se ha publicado satisfactoriamente! 🎉',
        error: '¡Ups! Algo ha salido mal 😬'
      }
    )
  }

  const submitResellTicket = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 5000))
      return 'success'
    } catch (error) {
      throw new Error('Submission failed!')
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
            <TicketResellPopUpForm>
                <TicketResellPopUpLabel htmlFor='amount'>Cantidad</TicketResellPopUpLabel>
                <TicketResellPopUpInput name="amount" id="amount" type="number" min="1" max={ticket.quantity} defaultValue={1} />
                <TicketResellPopUpLabel htmlFor="price">Precio</TicketResellPopUpLabel>
                <TicketResellPopUpInput name="price" id="price" type="number" min="1" defaultValue={ticket.price}/>
                <TicketResellPopUpButton type='button' onClick={handleConfirmResellTicket}>Revender</TicketResellPopUpButton>
            </TicketResellPopUpForm>
          </TicketResellPopUp>
        </Overlay>
      </>
    )
  }

  return null
}

export default handleRenderResellButton
