import React, { useState } from 'react'
import { MainContainer, HeaderSection, InfoHeader, SearchContainer, SearchInput, TicketListContainer, TicketListHeader, TicketList } from './styles'
import type { FC } from 'react'
import { User } from '@/models/Users/types'
import useTicketsByUser from '@/hooks/useTicketsByUser'
import TicketsNFT from './TicketsNFT'

type Props = {
  userData: User;
};

const UserTicketList: FC<Props> = ({ userData }) => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const { tickets, isLoading: ticketsLoading, error } = useTicketsByUser()

  if (error) {
    return <p>Error: {error}</p>
  }

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  const filteredTickets = tickets?.filter((ticket) =>
    ticket.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

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
            {ticketsLoading
              ? (
              <p>Loading tickets...</p>
                )
              : filteredTickets?.length === 0
                ? (
              <p>No tienes tickets</p>
                  )
                : (
                    filteredTickets?.map((ticket) => (
                       <TicketsNFT
                          key={ticket.price}
                          ticket={ticket}
                          address={userData.address[0]}
                        />
                    ))
                  )}
          </TicketList>
        </TicketListContainer>
      </MainContainer>
    </>
  )
}

export default UserTicketList
