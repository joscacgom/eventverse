import React, { useState, ChangeEvent } from 'react'
import { Container, EventList, Title, Header, Search, SearchInput } from './styles'
import EventCard from './EventCard'
import useEvents from '@/hooks/useEvents'
import { Event } from '@/models/Events/types'

const MainSection = () => {
  const { data } = useEvents()
  const [searchTerm, setSearchTerm] = useState<string>('')

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value)

  const filteredEvents = data?.filter((event: Event) =>
    event?.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleRenderEventList = () =>
    filteredEvents?.map((event: Event) => <EventCard key={event.id} event={event} />)

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
