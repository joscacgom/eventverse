import React, { useState, ChangeEvent } from 'react'
import { Container, EventList, Title, Header, Search, SearchInput } from './styles'
import EventCard from './EventCard'
import useEvents from '@/hooks/useEvents'
import { Event } from '@/models/Events/types'

const MainSection = () => {
  const { data, error, isLoading } = useEvents()
  const [searchTerm, setSearchTerm] = useState<string>('')

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value)

  function filteredEvents () {
    if (!data) return []
    return data.filter(event => nameIncludesSearchTerm(event))
  }

  function nameIncludesSearchTerm (event: Event) {
    return event.name.toLowerCase().includes(searchTerm.toLowerCase())
  }

  const handleRenderEventList = () => {
    const filtered = filteredEvents()
    return filtered.map((event: Event) => <EventCard key={event.id} event={event} />)
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error</div>
  }

  if (!data) {
    return <div>Not found</div>
  }

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
