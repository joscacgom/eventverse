import React from 'react'
import { Container, EventList, Title, Header } from './styles'
import EventCard from './EventCard'
import { MOCK_EVENTS } from '@/models/Events/mock'

const MainSection = () => {
  const handleRenderEventList = () => {
    return MOCK_EVENTS.map((event) => <EventCard key={event.id} event={event} />)
  }

  return (
    <Container>
      <Header>
        <Title>Novedades</Title>
      </Header>
      <EventList>
        {handleRenderEventList()}
      </EventList>
    </Container>
  )
}

export default MainSection
