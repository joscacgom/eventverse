<<<<<<< HEAD
import React, { FC, useEffect, useState } from 'react'
import { EventPreviewCreationMainContainer, EventPreviewCreationHeader, EventPreviewCreationFirstContainer, EventPreviewCreationSecondContainer, EventPreviewCreationImage, EventPreviewCreationName, EventPreviewCreationNameHeader, EventPreviewCreationNameText, EventPreviewCreationDescription, EventPreviewCreationDescriptionHeader, EventPreviewCreationDescriptionText, EventPreviewCreationStartDate, EventPreviewCreationStartDateHeader, EventPreviewCreationStartDateText, EventPreviewCreationEndDate, EventPreviewCreationEndDateHeader, EventPreviewCreationEndDateText, EventPreviewCreationLocation, EventPreviewCreationLocationHeader, EventPreviewCreationLocationText, EventPreviewCreationLocationImage, EventPreviewCreationTicket, EventPreviewCreationTicketHeader, EventPreviewCreationTicketImage, EventPreviewCreationTicketName, EventPreviewCreationTicketPriceContainer, EventPreviewCreationTicketPrice, EventPreviewCreationTicketAmount } from './styles'
import type { EventTicketPreview } from '@/models/Events/types'
=======
import type { FC } from 'react'
import {
  MainContainer, Header, FirstContainer, SecondContainer, Image, Name, NameHeader, NameText, Description, DescriptionHeader, DescriptionText, StartDate, StartDateHeader, StartDateText, EndDate, EndDateHeader, EndDateText, Location, LocationHeader, LocationText, LocationImage, Ticket, TicketHeader, TicketImage, TicketName, TicketPriceContainer, TicketPrice, TicketAmount
} from './styles'
import type { Event } from '@/models/Events/types'

>>>>>>> main
type Props = {
    event: EventTicketPreview
}
<<<<<<< HEAD
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
=======

const Form:FC<Props> = ({ event }) => {
  return (
     <>
     <Header>Resumen final del evento</Header>
     <Image src={'/images/events/medusa-fest-wallpaper.jpg'} />
     <MainContainer>
>>>>>>> main

          <FirstContainer>
              <Name>
                  <NameHeader>Nombre del evento</NameHeader>
                  <NameText>{event.name}</NameText>
              </Name>

              <Description>
                  <DescriptionHeader>Descripción del evento</DescriptionHeader>
                  <DescriptionText>{event.description}</DescriptionText>
              </Description>

              <StartDate>
                  <StartDateHeader>Fecha de inicio</StartDateHeader>
                  <StartDateText>{event.start_date}</StartDateText>
              </StartDate>

<<<<<<< HEAD
              <EventPreviewCreationEndDate>
                  <EventPreviewCreationEndDateHeader>Fecha de finalización</EventPreviewCreationEndDateHeader>
                  <EventPreviewCreationEndDateText>{event.endDate}</EventPreviewCreationEndDateText>
              </EventPreviewCreationEndDate>

              <EventPreviewCreationLocation>
                  <EventPreviewCreationLocationHeader>Ubicación del evento</EventPreviewCreationLocationHeader>
                  <EventPreviewCreationLocationText>{event.locationFormattedAddress}</EventPreviewCreationLocationText>
                  <EventPreviewCreationLocationImage src={event.locationImage} alt='Google Maps image' />
              </EventPreviewCreationLocation>
=======
              <EndDate>
                  <EndDateHeader>Fecha de finalización</EndDateHeader>
                  <EndDateText>23 de Agosto 2023</EndDateText>
              </EndDate>

              <Location>
                  <LocationHeader>Ubicación del evento</LocationHeader>
                  <LocationText>{event.location}</LocationText>
                  <LocationImage src={'/images/google-maps.png'} alt='Google Maps image' />
              </Location>
>>>>>>> main

          </FirstContainer>

<<<<<<< HEAD
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
=======
          <SecondContainer>
              <Ticket>
                  <TicketHeader>Entradas</TicketHeader>
                  <TicketImage src={'/images/tickets/medusa-festival.png'} alt='Ticket image' />
                  <TicketName>Medusa Festival (EV)</TicketName>
                  <TicketPriceContainer>
                      <TicketPrice>100 entradas</TicketPrice>
                      <TicketAmount>90€</TicketAmount>
                  </TicketPriceContainer>
              </Ticket>
          </SecondContainer>
      </MainContainer></>
>>>>>>> main
  )
}

export default Form
