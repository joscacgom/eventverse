import React, { useCallback } from 'react'
import { Container, EventList, Title, Header, NoEvents } from './styles'
import EventCard from './EventCard'
import { useEventsWithListedTickets } from '@/hooks/useEventsWithListedTickets'
import Loading from '@/components/Loading'

const MainSection = () => {
  const { resellTickets, isLoading } = useEventsWithListedTickets()

  const handleRenderEventList = useCallback(() => {
    if (isLoading) return <Loading type='main' />
    if (!resellTickets) return <NoEvents>No hay eventos disponibles</NoEvents>

    resellTickets.map((resellEvent) => <EventCard key={resellEvent.asset.id} ticketEvent={resellEvent} />
    )
  }, [resellTickets])

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
