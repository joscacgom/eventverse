import React, { FC } from 'react'
import { EventPreviewCreationMainContainer, EventPreviewCreationHeader, EventPreviewCreationFirstContainer, EventPreviewCreationSecondContainer, EventPreviewCreationImage, EventPreviewCreationName, EventPreviewCreationNameHeader, EventPreviewCreationNameText, EventPreviewCreationDescription, EventPreviewCreationDescriptionHeader, EventPreviewCreationDescriptionText, EventPreviewCreationStartDate, EventPreviewCreationStartDateHeader, EventPreviewCreationStartDateText, EventPreviewCreationEndDate, EventPreviewCreationEndDateHeader, EventPreviewCreationEndDateText, EventPreviewCreationLocation, EventPreviewCreationLocationHeader, EventPreviewCreationLocationText, EventPreviewCreationLocationImage, EventPreviewCreationTicket, EventPreviewCreationTicketHeader, EventPreviewCreationTicketImage, EventPreviewCreationTicketName, EventPreviewCreationTicketPriceContainer, EventPreviewCreationTicketPrice, EventPreviewCreationTicketAmount } from './styles'
import type { Event } from '@/models/Events/types'
type Props = {
    event: Event
}
const EventPreviewCreationForm:FC<Props> = ({ event }) => {
  return (
     <>
     <EventPreviewCreationHeader>Resumen final del evento</EventPreviewCreationHeader>
     <EventPreviewCreationImage src={'/images/events/medusa-fest-wallpaper.jpg'} />
     <EventPreviewCreationMainContainer>

          <EventPreviewCreationFirstContainer>
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
                  <EventPreviewCreationEndDateText>23 de Agosto 2023</EventPreviewCreationEndDateText>
              </EventPreviewCreationEndDate>

              <EventPreviewCreationLocation>
                  <EventPreviewCreationLocationHeader>Ubicación del evento</EventPreviewCreationLocationHeader>
                  <EventPreviewCreationLocationText>{event.location}</EventPreviewCreationLocationText>
                  <EventPreviewCreationLocationImage src={'/images/google-maps.png'} alt='Google Maps image' />
              </EventPreviewCreationLocation>

          </EventPreviewCreationFirstContainer>

          <EventPreviewCreationSecondContainer>
              <EventPreviewCreationTicket>
                  <EventPreviewCreationTicketHeader>Entradas</EventPreviewCreationTicketHeader>
                  <EventPreviewCreationTicketImage src={'/images/tickets/medusa-festival.png'} alt='Ticket image' />
                  <EventPreviewCreationTicketName>Medusa Festival (EV)</EventPreviewCreationTicketName>
                  <EventPreviewCreationTicketPriceContainer>
                      <EventPreviewCreationTicketPrice>100 entradas</EventPreviewCreationTicketPrice>
                      <EventPreviewCreationTicketAmount>90€</EventPreviewCreationTicketAmount>
                  </EventPreviewCreationTicketPriceContainer>
              </EventPreviewCreationTicket>
          </EventPreviewCreationSecondContainer>
      </EventPreviewCreationMainContainer></>
  )
}

export default EventPreviewCreationForm
