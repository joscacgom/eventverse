import React, { useState } from 'react'
import { MainContainer, HeaderSection, InfoHeader, SearchContainer, SearchInput, TicketListContainer, TicketListHeader, TicketList, TicketItem, TicketMainData, TicketImage, TicketInfo, TicketAmount, TicketPrice, TicketStatus, TicketName, TicketPlace, TicketDate, TicketTime } from './styles'
import type { FC } from 'react'
import { User } from '@/models/Users/types'

type Props ={
    userData:User,
};

interface ColorStatus {
  [key: string]: string;
}

const COLOR_STATUS: ColorStatus = {
  Activo: '#539362',
  Finalizado: '#d65151'
}

const UserTicketList: FC<Props> = ({ userData }) => {
  const [searchQuery, setSearchQuery] = useState<string>('')

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  const filteredTickets = userData.tickets.filter((ticket) => ticket.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <>
      <HeaderSection>Bienvenido Jorge! 👋 </HeaderSection>
      <MainContainer>
        <InfoHeader>
          Estos son los tickets que has comprado
        </InfoHeader>
        <SearchContainer>
          <SearchInput
            placeholder="🔎 Buscar tickets..."
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </SearchContainer>
        <TicketListContainer>
          <TicketListHeader>
            <p>Tickets</p>
            <p>Cantidad</p>
            <p>Precio</p>
            <p>Estado</p>
          </TicketListHeader>
          <TicketList>
            {filteredTickets.map((ticket) => (
              <TicketItem key={ticket.price}>
                <TicketMainData>
                  <TicketImage src={ticket.imagEvent}/>
                  <TicketInfo>
                    <TicketName>{ticket.name}</TicketName>
                    <TicketDate>{ticket.date}</TicketDate>
                    <TicketPlace>{ticket.place}</TicketPlace>
                    <TicketTime>{ticket.time}</TicketTime>
                  </TicketInfo>
                </TicketMainData>
                <TicketAmount>
                  <p>x{ticket.quantity}</p>
                </TicketAmount>
                <TicketPrice>
                  <p>{ticket.price}€</p>
                </TicketPrice>
                <TicketStatus>
                  <p style={{ color: COLOR_STATUS[ticket.status] }}>{ticket.status}</p>
                </TicketStatus>
              </TicketItem>
            ))}
          </TicketList>
        </TicketListContainer>
      </MainContainer>
    </>
  )
}

export default UserTicketList