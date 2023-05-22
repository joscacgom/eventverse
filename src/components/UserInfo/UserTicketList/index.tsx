import React, { useState } from 'react'
import { MainContainer, HeaderSection, InfoHeader, SearchContainer, SearchInput, TicketListContainer, TicketListHeader, TicketList, TicketItem, TicketMainData, TicketImage, TicketInfo, TicketAmount, TicketPrice, TicketStatus, TicketName, TicketPlace, TicketDate, TicketTime } from './styles'
import type { FC } from 'react'
import ResellTicketForm from '@/components/ResellTicket/ResellTicketForm'
import { User } from '@/models/Users/types'
import useTicketsByUser from '@/hooks/useTicketsByUser'

type Props = {
  userData: User;
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

  const { ticketsWithNFTs: tickets } = useTicketsByUser({ address: userData.address })

  const filteredTickets = tickets.filter((ticket) => ticket.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <>
      <HeaderSection>Bienvenido {userData.name}! 👋 </HeaderSection>
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
            {tickets.length === 0
              ? (
              <p>Loading tickets...</p>
                )
              : filteredTickets.length === 0
                ? (
              <p>No tickets found.</p>
                  )
                : (
                    filteredTickets.map((ticket) => (
                <TicketItem key={ticket.price}>
                  <TicketMainData>
                    <TicketImage src={ticket.imagEvent} />
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
                    {<ResellTicketForm ticket={ticket} />}
                  </TicketStatus>
                </TicketItem>
                    ))
                  )}
          </TicketList>
        </TicketListContainer>
      </MainContainer>
    </>
  )
}

export default UserTicketList
