import React, { FC } from 'react'
import { Event } from '@/models/Events/types'
import { EventBuyOptionContainer, EventBuyOptionButtons, EventBuyOptionButton, EventBuyOptionTicket, EventBuyOptionTicketInfo, EventBuyOptionTicketButton, EventBuyOptionTicketActionPrice, EventBuyOptionTicketActionAmount, EventBuyOptionTicketImage, EventBuyOptionTicketAction } from './styles'

type Props = {
    event : Event ;
};

const EventBuyOption:FC<Props> = ({ event }) => {
  return (
        <EventBuyOptionContainer>
            <EventBuyOptionButtons>
                <EventBuyOptionButton>
                   Tarjeta de crédito
                </EventBuyOptionButton>
                <EventBuyOptionButton>
                    Wallet
                </EventBuyOptionButton>
            </EventBuyOptionButtons>
            <EventBuyOptionTicket>
                <EventBuyOptionTicketInfo>
                <EventBuyOptionTicketImage/>
                <EventBuyOptionTicketAction>
                    <EventBuyOptionTicketActionAmount type="number" min="1" defaultValue="1">
                    </EventBuyOptionTicketActionAmount>
                    <EventBuyOptionTicketActionPrice>
                       100€
                    </EventBuyOptionTicketActionPrice>
                </EventBuyOptionTicketAction>
                </EventBuyOptionTicketInfo>
                <EventBuyOptionTicketButton>
                    Comprar
                </EventBuyOptionTicketButton>
            </EventBuyOptionTicket>
        </EventBuyOptionContainer>
  )
}

export default EventBuyOption
