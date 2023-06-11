import React, { useState } from 'react'
import { MainContainer, HeaderSection, InfoHeader, SearchContainer, SearchInput, TicketListContainer, TicketListHeader, TicketList } from './styles'
import type { FC } from 'react'
import { User } from '@/models/Users/types'
import useTicketsByUser from '@/hooks/useTicketsByUser'
import Loading from '@/components/Loading'
import Error from '@/components/Error'
import TicketsNFT from './TicketsNFT'

type Props = {
  userData: User;
};

const UserTicketList: FC<Props> = ({ userData }) => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const walletAddress = userData.address[0]
  const { tickets, isLoading: ticketsLoading, error } = useTicketsByUser({ walletAddress })

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  const filteredTickets = tickets?.filter((ticket) =>
    ticket.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <>
      <HeaderSection>Bienvenido {userData.name ? (userData.name.includes('@') ? userData.name.split('@')[0] : userData.name.split(' ')[0]) : String(userData.address).substring(0, 6)}! 👋 </HeaderSection>
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
{ticketsLoading
  ? (
  <Loading type='main' />
    )
  : error
    ? (
      <Error />
      )
    : filteredTickets?.length === 0
      ? (
  <p>Ningún ticket encontrado 😭</p>
        )
      : (
  <TicketList>
    {filteredTickets?.map((ticket) => (
      <TicketsNFT key={ticket.id} ticket={ticket} address={walletAddress} />
    ))}
  </TicketList>
        )}

        </TicketListContainer>
      </MainContainer>
    </>
  )
}

export default UserTicketList
