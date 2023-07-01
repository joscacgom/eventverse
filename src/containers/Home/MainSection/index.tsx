/* eslint-disable react/prop-types */
import React, { useState, ChangeEvent } from 'react'
import {
  Container,
  EventList,
  Title,
  Header,
  Search,
  SearchInput,
  NoEvents
} from './styles'
import EventCard from './EventCard'
import useEvents from '@/hooks/useEvents'
import { Event } from '@/models/Events/types'
import Loading from '@/components/Loading'
import Error from '@/components/Error'
import NotFound from '@/components/NotFound'

interface MainSectionProps {
  selectedCategory?: string;
}

const MainSection = ({ selectedCategory = '' }: MainSectionProps) => {
  const { data, error, isLoading } = useEvents()
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }
  const filteredEvents = () => {
    if (!data) return []
    return data.filter(
      (event) =>
        nameIncludesSearchTerm(event) &&
        ((selectedCategory === '' || selectedCategory === 'Todos') || event.category === selectedCategory)
    )
  }

  const nameIncludesSearchTerm = (event: Event) => {
    return event.name.toLowerCase().includes(searchTerm.toLowerCase())
  }

  const handleRenderEventList = () => {
    const filtered = filteredEvents()
    if (filtered.length === 0) {
      return <NoEvents>No hay eventos disponibles</NoEvents>
    }
    return filtered.map((event: Event) => (
      <EventCard key={event.id} event={event} />
    ))
  }

  if (isLoading) {
    return <Loading type="main" />
  }

  if (error) {
    return <Error />
  }

  if (!data) {
    return <NotFound />
  }

  return (
    <Container>
      <Header>
        <Title>Novedades</Title>
        <Search>
          <SearchInput
            placeholder="🔎 Buscar eventos..."
            onChange={handleSearchInput}
          />
        </Search>
      </Header>
      <EventList>{handleRenderEventList()}</EventList>
    </Container>
  )
}

export default MainSection
