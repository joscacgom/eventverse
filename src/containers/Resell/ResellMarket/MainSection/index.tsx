import React, { useMemo, useState } from 'react'
import { Container, EventList, Title, Header, Search, SearchInput } from './styles'
import EventCard from './EventCard'
import { useListedTickets } from '@/hooks/useListedTickets'
import Loading from '@/components/Loading'

const MainSection = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const { resellTickets, isLoading } = useListedTickets()

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value)

  const filteredEvents = useMemo(() => {
    if (searchTerm === '') return resellTickets
    return resellTickets.filter((ticketEvent) =>
      ticketEvent.asset.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [resellTickets, searchTerm])

  const handleRenderEventList = () =>
    filteredEvents.map((ticketEvent) => <EventCard data-testid="event-card" key={ticketEvent.id} ticketEvent={ticketEvent} />)

  return (
    <Container>
      <Header>
        <Title>Eventos con reventas disponibles</Title>
        <Search>
          <SearchInput placeholder="🔎 Buscar eventos..." onChange={handleSearchInput} />
        </Search>
      </Header>
      <EventList>
        {
          isLoading ? <Loading type='main' /> : handleRenderEventList()
        }
      </EventList>
    </Container>
  )
}

export default MainSection
