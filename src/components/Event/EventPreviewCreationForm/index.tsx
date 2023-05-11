import React, { FC, useEffect, useState } from 'react'
import { EventPreviewCreationMainContainer, EventPreviewCreationHeader, EventPreviewCreationFirstContainer, EventPreviewCreationSecondContainer, EventPreviewCreationImage, EventPreviewCreationName, EventPreviewCreationNameHeader, EventPreviewCreationNameText, EventPreviewCreationDescription, EventPreviewCreationDescriptionHeader, EventPreviewCreationDescriptionText, EventPreviewCreationStartDate, EventPreviewCreationStartDateHeader, EventPreviewCreationStartDateText, EventPreviewCreationEndDate, EventPreviewCreationEndDateHeader, EventPreviewCreationEndDateText, EventPreviewCreationLocation, EventPreviewCreationLocationHeader, EventPreviewCreationLocationText, EventPreviewCreationLocationImage, EventPreviewCreationTicket, EventPreviewCreationTicketHeader, EventPreviewCreationTicketImage, EventPreviewCreationTicketName, EventPreviewCreationTicketPriceContainer, EventPreviewCreationTicketPrice, EventPreviewCreationTicketAmount } from './styles'
import type { EventTicketPreview } from '@/models/Events/types'
type Props = {
    event: EventTicketPreview
}
const EventPreviewCreationForm:FC<Props> = ({ event }) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [ticketImagePreview, setTicketImagePreview] = useState<string | null>(null)

  useEffect(() => {
    if (isFile(event.image)) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(event.image)
    }
    if (isFile(event.ticketImage)) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setTicketImagePreview(reader.result as string)
      }
      reader.readAsDataURL(event.ticketImage)
    }
  }, [event.image, event.ticketImage])

  const isFile = (value: any): value is File =>
    value instanceof File
  return (
     <>
     <EventPreviewCreationHeader>Resumen final del evento</EventPreviewCreationHeader>
     <EventPreviewCreationImage src={imagePreview || ''} />
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
                  <EventPreviewCreationEndDateText>{event.endDate}</EventPreviewCreationEndDateText>
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
                  <EventPreviewCreationTicketImage src={ticketImagePreview || ''} alt='Ticket image' />
                  <EventPreviewCreationTicketName>{event.ticketTitle}</EventPreviewCreationTicketName>
                  <EventPreviewCreationTicketPriceContainer>
                      <EventPreviewCreationTicketPrice>{event.ticketAmount} entradas</EventPreviewCreationTicketPrice>
                      <EventPreviewCreationTicketAmount>{event.ticketPrice}€</EventPreviewCreationTicketAmount>
                  </EventPreviewCreationTicketPriceContainer>
              </EventPreviewCreationTicket>
          </EventPreviewCreationSecondContainer>
      </EventPreviewCreationMainContainer></>
  )
}

export default EventPreviewCreationForm
