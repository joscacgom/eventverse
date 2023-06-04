import React, { useState } from 'react'
import { MainContainer, HeaderSection, InfoHeader, SearchContainer, SearchInput, TicketListContainer, TicketListHeader, TicketList } from './styles'
import type { FC } from 'react'
import { User } from '@/models/Users/types'
import useTicketsByUser from '@/hooks/useTicketsByUser'

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

  const handleRenderTickets = () => {
    if (ticketsLoading) {
      return <p>Loading tickets...</p>
    }

    if (filteredTickets?.length === 0) {
      return <p>No hay tickets que coincidan con tu búsqueda</p>
    }

    return filteredTickets?.map((ticket) => (
      <li key={ticket.id}>
        <p>{ticket.name}</p>
        <p>{ticket.quantity}</p>
        <p>{ticket.price}</p>
      </li>
    ))
  }

  return (
    <>
      <HeaderSection>Bienvenido {userData.name.split(' ')[0]}! 👋 </HeaderSection>
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
            {handleRenderTickets()}
          </TicketList>
        </TicketListContainer>
      </MainContainer>
    </>
  )
}

export default UserTicketList
