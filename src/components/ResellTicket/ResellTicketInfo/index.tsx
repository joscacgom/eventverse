import React, { FC } from 'react'
import { Ticket } from '@/models/Tickets/types'
import { ResellTicketInfoMainContainer, ResellTicketInfoContainer, ResellTicketInfoDateSecondContainer, ResellTicketInfoDateSecondHeader, ResellTicketInfoNameContainer, ResellTicketInfoActionPriceCrypto, ResellTicketInfoDateHeader, ResellTicketInfoName, ResellTicketInfoOrganizer, ResellTicketInfoHeader, ResellTicketInfoDescriptionContainer, ResellTicketInfoDescription, ResellTicketInfoDateContainer, ResellTicketInfoDate, ResellTicketInfoActionContainer, ResellTicketInfoActionPriceContainer, ResellTicketInfoActionPrice, ResellTicketInfoActionBuyContainer, ResellTicketInfoActionBuy } from './styles'

type Props = {
    ticket: Ticket;
}

const ResellTicketInfo:FC<Props> = ({ ticket }) => {
  return (
        <ResellTicketInfoMainContainer>
            <ResellTicketInfoContainer>
            <ResellTicketInfoNameContainer>
                <ResellTicketInfoName>{ticket.name} ticket</ResellTicketInfoName>
                <ResellTicketInfoOrganizer>@organizador</ResellTicketInfoOrganizer>
            </ResellTicketInfoNameContainer>
            <ResellTicketInfoHeader>
                Información de la entrada
            </ResellTicketInfoHeader>
            <ResellTicketInfoDescriptionContainer>
                <ResellTicketInfoDescription>{ticket.description}</ResellTicketInfoDescription>
            </ResellTicketInfoDescriptionContainer>
            <ResellTicketInfoDateContainer>
                <ResellTicketInfoDateHeader>Fecha y hora</ResellTicketInfoDateHeader>
                <ResellTicketInfoDateSecondContainer>
                    <ResellTicketInfoDateSecondHeader>Comienzo:</ResellTicketInfoDateSecondHeader>
                    <ResellTicketInfoDate>{ticket.startDate}</ResellTicketInfoDate>
                    <ResellTicketInfoDateSecondHeader>Fin:</ResellTicketInfoDateSecondHeader>
                    <ResellTicketInfoDate>{ticket.endDate}</ResellTicketInfoDate>
                </ResellTicketInfoDateSecondContainer>
            </ResellTicketInfoDateContainer>
            </ResellTicketInfoContainer>

            <ResellTicketInfoActionContainer>
                <ResellTicketInfoActionPriceContainer>
                    <ResellTicketInfoActionPrice>{ticket.price}€</ResellTicketInfoActionPrice>
                    <ResellTicketInfoActionPriceCrypto>~118.53 MATIC</ResellTicketInfoActionPriceCrypto>
                </ResellTicketInfoActionPriceContainer>
                <ResellTicketInfoActionBuyContainer>
                    <ResellTicketInfoActionBuy>Comprar ticket</ResellTicketInfoActionBuy>
                </ResellTicketInfoActionBuyContainer>
            </ResellTicketInfoActionContainer>

        </ResellTicketInfoMainContainer>
  )
}

export default ResellTicketInfo
