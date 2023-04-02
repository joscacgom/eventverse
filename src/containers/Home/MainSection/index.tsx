import React, { useState } from 'react'
import { Container, EventList, Title, Header, Search, SearchInput } from './styles'
import EventCard from './EventCard'
import { MOCK_EVENTS } from '@/models/Events/mock'

const MainSection = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value)

  const filteredEvents = MOCK_EVENTS.filter((e) =>
    e.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleRenderEventList = () =>
    filteredEvents.map((event) => <EventCard key={event.id} event={event} />)

  return (
    <Container>
      <Header>
        <Title>Novedades</Title>
        <Search>
          <SearchInput placeholder="🔎 Buscar eventos..." onChange={handleSearchInput} />
        </Search>
      </Header>
      <EventList>{handleRenderEventList()}</EventList>
    </Container>
  )
}

export default MainSection
