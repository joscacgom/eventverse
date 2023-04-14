import React, { FC } from 'react'
import { EventPreviewCreationMainContainer, EventPreviewCreationHeader, EventPreviewCreationImage, EventPreviewCreationName, EventPreviewCreationNameHeader, EventPreviewCreationNameText, EventPreviewCreationDescription, EventPreviewCreationDescriptionHeader, EventPreviewCreationDescriptionText, EventPreviewCreationStartDate, EventPreviewCreationStartDateHeader, EventPreviewCreationStartDateText, EventPreviewCreationEndDate, EventPreviewCreationEndDateHeader, EventPreviewCreationEndDateText, EventPreviewCreationLocation, EventPreviewCreationLocationHeader, EventPreviewCreationLocationText, EventPreviewCreationLocationImage, EventPreviewCreationTicket, EventPreviewCreationTicketHeader, EventPreviewCreationTicketImage, EventPreviewCreationTicketName, EventPreviewCreationTicketPriceContainer, EventPreviewCreationTicketPrice, EventPreviewCreationTicketAmount } from './styles'
import type { Event } from '@/models/Events/types'
type Props = {
    event: Event
}
const EventPreviewCreationForm:FC<Props> = ({ event }) => {
  return (
        <EventPreviewCreationMainContainer>
            <EventPreviewCreationHeader>Resumen final del evento</EventPreviewCreationHeader>
            <EventPreviewCreationImage />
            <EventPreviewCreationName>
                <EventPreviewCreationNameHeader>Nombre del evento</EventPreviewCreationNameHeader>
                <EventPreviewCreationNameText>{event.title}</EventPreviewCreationNameText>
            </EventPreviewCreationName>

            <EventPreviewCreationDescription>
                <EventPreviewCreationDescriptionHeader>Descripción del evento</EventPreviewCreationDescriptionHeader>
                <EventPreviewCreationDescriptionText>{event.description}</EventPreviewCreationDescriptionText>
            </EventPreviewCreationDescription>

            <EventPreviewCreationStartDate>
                <EventPreviewCreationStartDateHeader>Fecha de inicio</EventPreviewCreationStartDateHeader>
                <EventPreviewCreationStartDateText>{event.date}</EventPreviewCreationStartDateText>
            </EventPreviewCreationStartDate>

            <EventPreviewCreationEndDate>
                <EventPreviewCreationEndDateHeader>Fecha de finalización</EventPreviewCreationEndDateHeader>
                <EventPreviewCreationEndDateText>{event.date}</EventPreviewCreationEndDateText>
            </EventPreviewCreationEndDate>

            <EventPreviewCreationLocation>
                <EventPreviewCreationLocationHeader>Ubicación del evento</EventPreviewCreationLocationHeader>
                <EventPreviewCreationLocationText>{event.location}</EventPreviewCreationLocationText>
                <EventPreviewCreationLocationImage src={'/images/google-maps.png'} alt='Google Maps image' />
            </EventPreviewCreationLocation>

            <EventPreviewCreationTicket>
                <EventPreviewCreationTicketHeader>Entradas</EventPreviewCreationTicketHeader>
                <EventPreviewCreationTicketImage src={'/images/ticket.png'} alt='Ticket image' />
                <EventPreviewCreationTicketName>Entradas</EventPreviewCreationTicketName>
                <EventPreviewCreationTicketPriceContainer>
                    <EventPreviewCreationTicketPrice>Precio</EventPreviewCreationTicketPrice>
                    <EventPreviewCreationTicketAmount>Precio</EventPreviewCreationTicketAmount>
                </EventPreviewCreationTicketPriceContainer>
            </EventPreviewCreationTicket>
        </EventPreviewCreationMainContainer>
  )
}

export default EventPreviewCreationForm
