import type { FC } from 'react'
import {
  MainContainer, Header, FirstContainer, SecondContainer, Image, Name, NameHeader, NameText, Description, DescriptionHeader, DescriptionText, StartDate, StartDateHeader, StartDateText, EndDate, EndDateHeader, EndDateText, Location, LocationHeader, LocationText, LocationImage, Ticket, TicketHeader, TicketImage, TicketName, TicketPriceContainer, TicketPrice, TicketAmount
} from './styles'
import type { Event } from '@/models/Events/types'

type Props = {
    event: EventTicketPreview
}

const Form:FC<Props> = ({ event }) => {
  return (
     <>
     <Header>Resumen final del evento</Header>
     <Image src={'/images/events/medusa-fest-wallpaper.jpg'} />
     <MainContainer>

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

              <EndDate>
                  <EndDateHeader>Fecha de finalización</EndDateHeader>
                  <EndDateText>23 de Agosto 2023</EndDateText>
              </EndDate>

              <Location>
                  <LocationHeader>Ubicación del evento</LocationHeader>
                  <LocationText>{event.location}</LocationText>
                  <LocationImage src={'/images/google-maps.png'} alt='Google Maps image' />
              </Location>

          </FirstContainer>

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
  )
}

export default Form
