import React, { useCallback } from 'react'
import { Container, EventList, Title, Header } from './styles'
import EventCard from './EventCard'
import { useEventsWithListedTickets } from '@/hooks/useEventsWithListedTickets'
import Loading from '@/components/Loading'

const MainSection = () => {
  const { resellTickets, isLoading } = useEventsWithListedTickets()

  const handleRenderEventList = useCallback(() =>
    resellTickets.map((resellEvent) => <EventCard key={resellEvent.asset.id} ticketEvent={resellEvent} />
    ), [resellTickets])

  return (
    <Container>
      <Header>
        <Title>Eventos con reventas disponibles</Title>
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
