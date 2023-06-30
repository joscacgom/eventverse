import React, { ChangeEvent, useCallback, useState } from 'react'
import { Container, EventList, Title, Header, NoEvents, Search, SearchInput } from './styles'
import EventCard from './EventCard'
import { useEventsWithListedTickets } from '@/hooks/useEventsWithListedTickets'
import Loading from '@/components/Loading'
import { TicketListingItem } from '@/models/Resell/types'

const MainSection = () => {
  const { resellTickets, isLoading } = useEventsWithListedTickets()
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const nameIncludesSearchTerm = (resellEvent: TicketListingItem) => {
    return resellEvent.asset.name.toLowerCase().includes(searchTerm.toLowerCase())
  }

  const filteredEvents = () => {
    if (!resellTickets) return []
    return resellTickets.filter((event) => nameIncludesSearchTerm(event))
  }

  const handleRenderEventList = useCallback(() => {
    const filtered = filteredEvents()
    if (isLoading) return <Loading type='main' />
    if (!filtered || filtered.length === 0) return <NoEvents>No hay eventos disponibles</NoEvents>

    return filtered.map((resellEvent) => (
      <EventCard key={resellEvent.asset.id} ticketEvent={resellEvent} />
    ))
  }, [resellTickets, searchTerm])
  return (
    <Container>
      <Header>
        <Title>Eventos con reventas disponibles</Title>
        <Search>
          <SearchInput
            placeholder="🔎 Buscar eventos..."
            onChange={handleSearchInput}
          />
        </Search>
      </Header>
      <EventList>
        {isLoading ? <Loading type='main' /> : handleRenderEventList()}
      </EventList>
    </Container>
  )
}

export default MainSection
