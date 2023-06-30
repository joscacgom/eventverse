import React, { FC, useCallback } from 'react'
import { Container, EventList, Title, Header, NoEvents, Search, SearchInput } from './styles'
import EventCard from './EventCard'
import { ResellEvent } from '@/hooks/useEventsWithListedTickets'
import Loading from '@/components/Loading'

type Props ={
  resellEvents: ResellEvent[]
  isLoading: boolean
}
const MainSection: FC<Props> = ({ resellEvents, isLoading }) => {
  const handleRenderEventList = useCallback(() => {
    if (isLoading) return <Loading type='main' />
    if (!resellEvents || resellEvents.length === 0) return <NoEvents>No hay eventos disponibles</NoEvents>

    return resellEvents.map((resellEvent) => (
      <EventCard key={resellEvent.event.id} resellEvent={resellEvent} />
    ))
  }, [resellEvents])
  return (
    <Container>
      <Header>
        <Title>Eventos con reventas disponibles</Title>
        <Search>
          <SearchInput
            placeholder="🔎 Buscar eventos..."
            onChange={ () => {} }
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
